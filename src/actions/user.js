import axios from 'axios';
import {API_URL} from '../config'
import {
  SAVE_USER, LOG_OUT
} from './types';


export const signIn = (user, callback) => async dispatch => {
  try {

  let response = await axios.post(API_URL+'/login', user);
  let {data}=response;

  if(data.status == 1){
    await localStorage.setItem("user", JSON.stringify(data));
    dispatch({ type: SAVE_USER, payload: data.data });
  }
  callback(response);
  } catch (error) {
    throw error;
  }
};


export const logOut = () => async dispatch => {
  try {
    await localStorage.setItem("user", null);
    dispatch({ type: LOG_OUT, payload: {} });
  } catch (error) {
    throw error;
  }
};

// export const connectionState = ( status ) => {
//   return { type: CHANGE_CONNECTION_STATUS, payload: status };
// };
