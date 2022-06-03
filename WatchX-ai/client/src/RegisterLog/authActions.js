// For decoding in login phase
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import {
  // for handling error
  GET_ERRORS,
  // for setting current user
  SET_CURRENT_USER,
  // for user 
  USER_LOADING
} from "./types";



//**********************************************//
//*************** REGISTERATION ***************//
//********************************************//

/**
 * @param {Object} userData 
 * @param {useHistory} history 
*/

/*

1.after user register ,make re-direct him/her to login on successful register
2.throws errors if any error exists

*/
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    // after user resgister ,make re-direct him/her to login on successful register

    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        // Throws eror 
        payload: err.response.data
        // for payload
      })
    );
};


//**********************************************//
//*************** LOGIN ************************//
//**********************************************//
/**
 * Log in the user by making a call to an API in the backend , recieves token as password , 
 * convert it into proper format using jwt_decode and then  it saved token  and  headers and sets current user and 
 * user succesfully login .
 * 
 * @param {Object} userData 
 * 
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


/*********   User loading  ********/
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

//**********************************************//
//************* LOG out************************//
//********************************************//
/*

1. Deleting the Jwt token
2. removing it from header
3. setting current user to empty which will set isAuthenticated to false
*/
export const logoutUser = () => dispatch => {

  // Remove token from Browser storage
  localStorage.removeItem("jwtToken");

  // Remove auth header 
  setAuthToken(false);
  // Set current user to empty object {} 
  dispatch(setCurrentUser({}));
};