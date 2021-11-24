import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../utils/testUtils';
import Input from './Input';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetState],
}));

const defaultProps = { secretWord: 'train' };

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function renderComponent
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const renderComponent = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input {...setupProps} />);
};

it('should renders without error', () => {
  const wrapper = renderComponent();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

it('should not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
});

describe('state controlled input field', () => {
  it('should update state with value of input box on change', () => {
    const wrapper = renderComponent();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetState).toHaveBeenCalledWith('train');
  });
});
