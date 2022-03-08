import axios from 'axios';

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
