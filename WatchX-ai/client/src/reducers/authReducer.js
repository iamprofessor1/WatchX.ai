
/**********************************************************************/
/************************** authReducer ******************************/
/********************************************************************/
import {
  SET_CURRENT_USER,
  USER_LOADING
} from "../RegisterLog/types";

const isEmpty = require("is-empty");

// define the initial state for "auth"
const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

/**
 * 
 * @param {State} state 
 * @param {string} action 
 * @returns new state
 */


// Combined function for setting current user and setting user_loading
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      // Returniing the thing
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}


/**********************************************************************/
/************************** authReducer ******************************/
/********************************************************************/