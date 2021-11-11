import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function renderComponent
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const renderComponent = (props = {}) => {
  return shallow(<Input {...props} />);
};

it('should renders without error', () => {
  const wrapper = renderComponent();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});
