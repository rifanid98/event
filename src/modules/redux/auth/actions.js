import actionType from './actionType';
import Axios from 'axios';
import { appConfig } from 'configs';

export const login = (data) => {
  return {
    type: actionType.LOGIN,
    payload: Axios({
      method: 'POST',
      url: appConfig.url.api + 'user/login',
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export const register = (data) => {
  return {
    type: actionType.REGISTER,
    payload: Axios({
      method: "POST",
      url: appConfig.url.api + "user/register",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  };
}

export const logout = () => {
  return {
    type: actionType.LOGOUT
  }
}