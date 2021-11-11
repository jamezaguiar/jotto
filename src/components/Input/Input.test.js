import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../utils/testUtils';
import Input from './Input';

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
