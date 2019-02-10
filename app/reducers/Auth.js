import * as actionTypes from '../actions/actionTypes';
import { LOADING, SUCCESS, FAIL } from '../constants/apiActions';

const InitialState = {
  userInfo: {
    active: false,
    client_id: '',
    exp: '',
    role: '',
    scope: '',
    token_type: '',
    username: ''
  },
  profile: {
    username: '',
    password: '',
    cName: '',
    company: '',
    'email-1': '',
    'email-2': '',
    phone: '',
    text: ''
  }
};

export default function Auth(state = InitialState, action) {
  switch (action.type) {
  case actionTypes.GET_TOKEN[SUCCESS]:
    return {
      ...state,
      token: action.payload.token,
      refreshToken: action.payload.refresh_token
    };
  case actionTypes.SET_LOGIN_STATE:
    return {
      ...state,
      isLogin: action.isLogin,
    };
  default:
    return state;
  }
}
