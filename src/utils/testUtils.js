import checkPropTypes from 'check-prop-types';
import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { createStore } from 'redux';
import rootReducer from '../redux/reducers';

/**
 * Create a testing sotre with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState =>
  createStore(rootReducer, initialState);

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper|ReactWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper|ReactWrapper}
 */
export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );

  expect(propError).toBeUndefined();
};
