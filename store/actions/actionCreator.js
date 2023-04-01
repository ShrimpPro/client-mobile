import { CHANGE_LOGIN_RESPONSE, CHANGE_REGISTER_RESPONSE } from "./actionType";

export const setLoginResponse = (payload) => {
  return {
    type: CHANGE_LOGIN_RESPONSE,
    payload: payload,
  };
};

export function postLogin(inputLogin) {
  return async (dispatch, getState) => {
    try {
      console.log("login api");
      console.log(inputLogin);
    } catch (error) {
      console.log(error);
    }
  };
}

export const setRegisterResponse = (payload) => {
  return {
    type: CHANGE_REGISTER_RESPONSE,
    payload: payload,
  };
};

export function postRegister(inputRegister) {
  return async (dispatch, getState) => {
    try {
      console.log("register api");
      console.log(inputRegister);
    } catch (error) {
      console.log(error);
    }
  };
}
