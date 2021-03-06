import { useEffect } from 'react';
import './App.css';

import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import GuessedWords from './components/GuessedWords/GuessedWords';

import { getSecretWord } from './actions';

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  useEffect(() => {
    getSecretWord();
  }, []);

  return (
    <div className="container" data-test="component-app">
      <h1 data-test="page-title">Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export default App;
