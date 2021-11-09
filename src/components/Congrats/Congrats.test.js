import { shallow } from 'enzyme';
import { findByTestAttr } from '../../utils/testUtils';
import Congrats from './Congrats';

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function renderComponent
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const renderComponent = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

describe('<Congrats />', () => {
  it('should renders without error', () => {
    const wrapper = renderComponent();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
  });

  it('should renders no text when `success` prop is false', () => {
    const wrapper = renderComponent({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
  });

  it('should renders non-empty congrats message when `success` prop is true', () => {
    const wrapper = renderComponent({ success: true });
    const message = findByTestAttr(wrapper, 'component-message');
    expect(message.text().length).not.toBe(0);
  });
});
