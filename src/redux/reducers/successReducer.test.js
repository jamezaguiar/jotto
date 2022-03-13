import { actionTypes } from '../actions';
import successReducer from './successReducer';

it('should return `false` if previous state is undefined', () => {
  const newState = successReducer(undefined, { type: undefined });
  expect(newState).toBeFalsy();
});

it('should return previous state when unknown action type', () => {
  const newState = successReducer(false, { type: 'UNKNOWN_ACTION_TYPE' });
  expect(newState).toBeFalsy();
});

it('should return `true` for action type CORRECT_GUESS', () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBeTruthy();
});
