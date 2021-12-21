import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../utils/testUtils';
import Input from './Input';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: initialState => [initialState, mockSetState],
}));

const defaultProps = { secretWord: 'train', success: false };

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

it('should not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
});

describe('render', () => {
  it('should renders without error', () => {
    const wrapper = renderComponent();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
  });

  describe('when success is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = renderComponent({ success: true });
    });

    it('should not show input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBeFalsy();
    });

    it('should not show submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBeFalsy();
    });
  });

  describe('when success is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = renderComponent({ success: false });
    });

    it('should show input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBeTruthy();
    });

    it('should show submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBeTruthy();
    });
  });
});

describe('state controlled input field', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update state with value of input box on change', () => {
    const wrapper = renderComponent();
    const inputBox = findByTestAttr(wrapper, 'input-box');

    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetState).toHaveBeenCalledWith('train');
  });

  it('should clear currentGuess when submit button is clicked', () => {
    const wrapper = renderComponent();
    const submitButton = findByTestAttr(wrapper, 'submit-button');

    const mockEvent = { preventDefault: jest.fn() };
    submitButton.simulate('click', mockEvent);

    expect(mockSetState).toHaveBeenCalledWith('');
  });
});
