import axios from 'axios';
import { baseUrl } from '../../config/connection';
import { CHANGE_LOADING_PONDS, FETCH_PONDS, FETCH_POND_DETAIL } from './actionType';
import * as SecureStore from 'expo-secure-store';

export const fetchPonds = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_PONDS, payload: true });
      const access_token = await SecureStore.getItemAsync('access_token');
      const { data: ponds } = await axios.get(baseUrl + 'partners/ponds', {
        headers: { access_token }
      });
      dispatch({ type: FETCH_PONDS, payload: ponds });
      dispatch({ type: CHANGE_LOADING_PONDS, payload: false });
      return ponds;
    } catch (error) {
      throw error;
    }
  }
}

export const fetchPondDetail = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: CHANGE_LOADING_PONDS, payload: true });
      const access_token = await SecureStore.getItemAsync('access_token');
      const { data: pond } = await axios.get(baseUrl + 'partners/ponds/' + id, {
        headers: { access_token }
      });
      dispatch({ type: FETCH_POND_DETAIL, payload: pond });
      dispatch({ type: CHANGE_LOADING_PONDS, payload: false });
      return pond;
    } catch (error) {
      throw error;
    }
  }
}

export const createHarvest = (inputHarvest, pondId) => {
  return async (dispatch, getState) => {
    try {
      const access_token = await SecureStore.getItemAsync('access_token');
      const { data: harvest } = await axios.post(baseUrl + 'partners/harvests/' + pondId, inputHarvest, {
        headers: { access_token }
      })
      dispatch(fetchPondDetail(pondId));
      return harvest;
    } catch (error) {
      throw error;
    }
  }
}