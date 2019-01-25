import * as types from '../actions/actionTypes';
 const initalState ={
     user: 'xyz',
     password: '1234'
 }

export default (state = initalState, action) => {
    switch (action.type) {
     case types.LOGIN_REQUEST:
     console.log("return LOGIN_REQUEST");
      return {
      ...state, user: action.payload
      }
      default:
     console.log("return default");
      return state
    }
   }