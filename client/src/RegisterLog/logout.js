
import setAuthToken from "../utils/setAuthToken";
import {
    // for setting current user
    SET_CURRENT_USER
} from "./types";



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