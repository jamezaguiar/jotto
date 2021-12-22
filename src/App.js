import './App.css';

import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';

function App() {
  return (
    <div className="container" data-test="component-app">
      <h1 data-test="page-title">Jotto</h1>
      <Congrats success />
      <GuessedWords
        guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
      />
    </div>
  );
}

export default App;
