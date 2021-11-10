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

describe('propTypes testing', () => {
  it('should not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
  });
});

describe('if there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = renderComponent({ guessedWords: [] });
  });

  it('should renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });

  it('should renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
