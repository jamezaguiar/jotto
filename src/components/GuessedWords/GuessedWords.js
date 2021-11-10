import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <span data-test="guess-instructions">
          Try to guess the secret word!
        </span>
      ) : (
        <table></table>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: arrayOf(
    shape({
      guessedWord: string.isRequired,
      letterMatchCount: number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
