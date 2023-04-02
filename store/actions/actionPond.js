import axios from 'axios';
import { baseUrl } from '../../config/connection';
import { CHANGE_LOADING_PONDS, FETCH_PONDS } from './actionType';
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
    } catch (error) {
      throw error;
    }
  }
}