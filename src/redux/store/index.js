import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default createStore(rootReducer, composeWithDevToolsDevelopmentOnly());
