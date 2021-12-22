import { shallow } from 'enzyme';
import { findByTestAttr } from './utils/testUtils';
import App from './App';

const defaultProps = {};

const renderComponent = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<App {...setupProps} />);
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
