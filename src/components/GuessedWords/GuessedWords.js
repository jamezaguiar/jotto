import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  return <div />;
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
