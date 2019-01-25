import * as types from './actionTypes';


export function loginRequest(data) {
    return {
      type: types.LOGIN_REQUEST, 
      payload: data
    };
}
