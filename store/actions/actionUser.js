import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { baseUrl } from "../../config/connection";
import {
  CHANGE_LOADING_USERS,
  CHANGE_LOGIN_RESPONSE,
  CHANGE_REGISTER_RESPONSE,
  FETCH_USERS,
} from "./actionType";

export const setLoginResponse = (payload) => {
  return {
    type: CHANGE_LOGIN_RESPONSE,
    payload: payload,
  };
};

export function postLogin(inputLogin) {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(baseUrl + "users/login", inputLogin);
      await SecureStore.setItemAsync("access_token", data.access_token);
    } catch (error) {
      throw error;
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

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_USERS, payload: true });
      const { data: users } = await axios.get(baseUrl + "users");
      dispatch({ type: FETCH_USERS, payload: users });
      dispatch({ type: CHANGE_LOADING_USERS, payload: false });
      return users;
    } catch (error) {
      throw error;
    }
  };
};
