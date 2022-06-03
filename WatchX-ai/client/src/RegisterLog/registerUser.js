import axios from "axios";
import {
  // for handling error
  GET_ERRORS,
  // for setting current user
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
  