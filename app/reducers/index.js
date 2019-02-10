import { combineReducers } from 'redux';
import { combineForms, modelReducer } from 'react-redux-form';

import Auth from './Auth';

import {
  initialSignupState
} from '../constants/initialState';

const rootReducer = combineReducers({
  forms: combineForms({
    signup: modelReducer('signup', initialSignupState),
  }, 'forms'),
  Auth,
});

export default rootReducer;
