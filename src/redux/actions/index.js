import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
};

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
};

export const getSecretWord = async () => {
  // TODO: write actual action in Redux / ContextAPI section
  try {
    const { data } = await axios.get('http://localhost:3030');
    return data;
  } catch (err) {
    console.error(err);
    return '';
  }
};
