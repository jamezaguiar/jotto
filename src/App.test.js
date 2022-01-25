/* eslint-disable import/first */
jest.mock('./actions');

import { mount } from 'enzyme';
import { findByTestAttr } from './utils/testUtils';
import App from './App';
import { getSecretWord as mockGetSecretWord } from './actions';

const defaultProps = {};

const renderComponent = (props = {}) => {
  // using mount, because useEffect aren't called on `shallow`
  // https://github.com/enzymejs/enzyme/issues/2086
  const setupProps = { ...defaultProps, ...props };
  return mount(<App {...setupProps} />);
};

it('should renders without error', () => {
  const wrapper = renderComponent();
  const app = findByTestAttr(wrapper, 'component-app');
  expect(app).toHaveLength(1);
});

it('should renders page title `Jotto`', () => {
  const wrapper = renderComponent();
  const pageTitle = findByTestAttr(wrapper, 'page-title');
  expect(pageTitle.text()).toBe('Jotto');
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });

  it('should get secret word on app mount', () => {
    const wrapper = renderComponent();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  it('should not run getSecretWord on app update', () => {
    const wrapper = renderComponent();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
