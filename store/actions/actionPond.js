import axios from "axios";
import { baseUrl } from "../../config/connection";
import {
  CHANGE_LOADING_PONDS,
  DESTROY_PONDS,
  FETCH_HARVEST_DETAIL,
  FETCH_PONDS,
  FETCH_POND_DETAIL,
} from "./actionType";
import * as SecureStore from "expo-secure-store";

export const fetchPonds = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_PONDS, payload: true });
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: ponds } = await axios.get(baseUrl + "partners/ponds", {
        headers: { access_token },
      });
      dispatch({ type: FETCH_PONDS, payload: ponds });
      dispatch({ type: CHANGE_LOADING_PONDS, payload: false });
      return ponds;
    } catch (error) {
      throw error;
    }
  };
};

export const fetchPondDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      if (!id) throw "Data not found";
      dispatch({ type: CHANGE_LOADING_PONDS, payload: true });
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: pond } = await axios.get(baseUrl + "partners/ponds/" + id, {
        headers: { access_token },
      });
      dispatch({ type: FETCH_POND_DETAIL, payload: pond });
      dispatch({ type: CHANGE_LOADING_PONDS, payload: false });
      return pond;
    } catch (error) {
      throw error;
    }
  };
};

export const createHarvest = (inputHarvest, pondId) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: harvest } = await axios.post(
        baseUrl + "partners/harvests/" + pondId,
        inputHarvest,
        {
          headers: { access_token },
        }
      );
      dispatch(fetchPondDetail(pondId));
      return harvest;
    } catch (error) {
      throw error;
    }
  };
};

export const fetchHarvestDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      if (!id) throw "Data not found";
      dispatch({ type: CHANGE_LOADING_PONDS, payload: true });
      const access_token = await SecureStore.getItemAsync("access_token");
      const { data: harvest } = await axios.get(
        baseUrl + "partners/harvests/" + id,
        {
          headers: { access_token },
        }
      );
      dispatch({ type: FETCH_HARVEST_DETAIL, payload: harvest });
      dispatch({ type: CHANGE_LOADING_PONDS, payload: false });
      return harvest;
    } catch (error) {
      throw error;
    }
  };
};

export const resetPonds = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: DESTROY_PONDS });
    } catch (error) {
      throw error;
    }
  };
};
