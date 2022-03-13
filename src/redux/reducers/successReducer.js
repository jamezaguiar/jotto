import { actionTypes } from '../actions';

const initialState = false;

/**
 *
 * @param {boolean} state - Previous state.
 * @param {{type: string}} action - Action to be reduced.
 * @returns {boolean} - new success state.
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};

export default reducer;
