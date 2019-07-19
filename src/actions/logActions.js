import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from './types';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();
//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

//Add new log
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    });
  }
};

//Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
