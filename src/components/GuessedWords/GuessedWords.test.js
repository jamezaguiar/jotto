import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function renderComponent
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const renderComponent = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

describe('<GuessedWords />', () => {
  it('should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });
});
