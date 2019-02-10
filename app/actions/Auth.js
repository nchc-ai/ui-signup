
import { RSAA } from 'redux-api-middleware';
import _ from 'lodash';
import * as types from './actionTypes';
import { notify } from 'react-notify-toast';
import { TOAST_TIMING } from '../constants';
import { API_URL, API_VERSION } from '../config/api';

export const setLoginState = (isLogin) => ({
  type: types.SET_LOGIN_STATE,
  isLogin
});

export const signup = (formData, next) => async (dispatch) => {

  // const tempData = tempfyData(formData);
  // console.log('tempData', tempData);
  const response = await dispatch({
    [RSAA]: {
      endpoint: `${API_URL}/${API_VERSION}/proxy/register`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      types: types.SIGNUP
    }
  });

  console.log('[signup] payload', response)

  if (_.isUndefined(response) || response.error) {
    notify.show(_.get(response, 'payload.response.message', ''), 'error', TOAST_TIMING);
  }

  next(response);
};

// Health Check > check-kubernetes
export const healthCheck = () => async (dispatch) => {
  const response = await dispatch({
    [RSAA]: {
      endpoint: `${API_URL}/${API_VERSION}/health/kubernetes`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      types: types.HEALTH_CHECK
    }
  });

  if (_.isUndefined(response) || response.error) {
    notify.show(_.get(response, 'payload.response.message', ''), 'error', TOAST_TIMING);
  }
};
