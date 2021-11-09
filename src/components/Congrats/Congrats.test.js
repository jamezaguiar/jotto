import { shallow } from 'enzyme';
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
  it('should renders without error', () => {});

  it('should renders no text when `success` prop is false', () => {});

  it('should renders non-empty congrats message when `success` prop is true', () => {});
});
