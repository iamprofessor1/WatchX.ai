/**********************************************************************/
/*****************combines the authReducer and errorReducer **********/
/********************************************************************/

import { combineReducers } from "redux";
import authReducer from "./authReducer";


import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});


/**********************************************************************/
/*****************combines the authReducer and errorReducer **********/
/********************************************************************/