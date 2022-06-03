// For decoding in login phase
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import {
    // for handling error
    GET_ERRORS,
    // for setting current user
    SET_CURRENT_USER,
} from "./types";




//**********************************************//
//*************** LOGIN ************************//
//**********************************************//
/**
 * Log in the user by making a call to an API in the backend , recieves token as password , 
 * convert it into proper format using jwt_decode and then  it saved token  and  headers and sets current user and 
 * user succesfully login .
 * @param {Object} userData 
 */
/*
* 1. Set token to Browser Storage
* 2. Set token to  header
* 3. Decode token to get user data using jwt 
* 4. Set current user
*/


export const loginUser = userData => dispatch => {
    axios
        .post("/api/users/login", userData)
        .then(res => {


            const { token } = res.data;
            // Set token to Browser Storage
            localStorage.setItem("jwtToken", token);
            // Set token to  header
            setAuthToken(token);
            // Convert token to get user data using jwt 
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        // if any error comes , then handled it .
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};


//**********************************************//
//********* Set logged in user ****************//
//**********************************************//
export const setCurrentUser = decoded => {
    // Set current user logged in .
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };