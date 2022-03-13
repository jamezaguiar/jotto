import { string } from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Input = ({ secretWord }) => {
  const success = useSelector(state => state.success);

  const [currentGuess, setCurrentGuess] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setCurrentGuess('');
    // TODO: update guessedWords global state
    // TODO: Check against secretWord and optionally update success global state
  };

  return (
    <div data-test="component-input">
      {!success && (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={currentGuess}
            onChange={event => setCurrentGuess(event.target.value)}
          />
          <button
            data-test="submit-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

Input.propTypes = {
  secretWord: string.isRequired,
};

export default Input;
