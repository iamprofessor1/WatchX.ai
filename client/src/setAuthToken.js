//**********************************************//
//*************** set Auth Token***************//
//********************************************//

/*
 // Apply authorization token
  //  to every request 
  // if logged in

   // Delete auth header from axios
*/
import axios from "axios";

const setAuthToken = token => {

  if (token) {
    // Apply authorization token
    //  to every request 
    // if logged in
    axios.defaults.headers.common["Authorization"] = token;
  }
  else {
    // Delete auth header from axios
    delete axios.defaults.headers.common["Authorization"];
  }

};
export default setAuthToken;


//**********************************************//
//*************** set Auth Token***************//
//********************************************//