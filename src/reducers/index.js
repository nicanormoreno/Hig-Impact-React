import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './AppReducer';
import atmsReducer from './AtmsReducer';

const rootReducer = combineReducers({
  form: formReducer,
  appReducer,
  atmsReducer
});

export default rootReducer;
