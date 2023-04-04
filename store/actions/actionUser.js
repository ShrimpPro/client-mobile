import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { baseUrl } from "../../config/connection";
import {
  CHANGE_LOADING_USERS,
  CHANGE_LOGIN_RESPONSE,
  CHANGE_REGISTER_RESPONSE,
  DESTROY_USERS,
  FETCH_USERS,
  FETCH_USER_DETAIL,
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
      const { data: user } = await axios.post(
        baseUrl + "users/register",
        inputRegister
      );
      return user;
    } catch (error) {
      throw error;
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

export const fetchUserDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_USERS, payload: true });
      const { data: user } = await axios.get(baseUrl + "users/" + id);
      dispatch({ type: FETCH_USER_DETAIL, payload: user });
      dispatch({ type: CHANGE_LOADING_USERS, payload: false });
      return user;
    } catch (error) {
      throw error;
    }
  };
};

export const resetUsers = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DESTROY_USERS });
    } catch (error) {
      throw error;
    }
  };
};

export const createInvoice = (category) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: order } = await axios.post(
        baseUrl + "payments/invoice",
        { isPond: category },
        {
          headers: { access_token },
        }
      );
      return order;
    } catch (error) {
      throw error;
    }
  };
};

export const fetchCurrentUser = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_USERS, payload: true });
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: user } = await axios.get(baseUrl + "users/current", {
        headers: { access_token },
      });
      dispatch({ type: FETCH_USER_DETAIL, payload: user });
      dispatch({ type: CHANGE_LOADING_USERS, payload: false });
      return user;
    } catch (error) {
      throw error;
    }
  };
};

export function putEditProfile(id, inputEdit) {
  return async (dispatch, getState) => {
    try {
      const { data: user } = await axios.put(
        baseUrl + "users/" + id,
        inputEdit
      );
      dispatch(fetchCurrentUser());
      return user;
    } catch (error) {
      throw error;
    }
  };
}
