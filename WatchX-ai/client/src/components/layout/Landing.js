
/**********************************************************************/
/****************** Landing JS *****************************/
/**********************************************************************/

import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
 1. Creates the landing page that has a content and  2 buttons Register and Login button 
 2. Button presses redirect 
 */
class Landing extends Component {

  render() {
    return (
      <div style={{ height: "100%" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4 >
              <br></br>
              <b style={{ fontFamily: "monospace", color: "purple", size: "2rem" }}>Deter 	&emsp;  Detect  	&emsp; Prevent </b>
              <br></br>
              <br></br>
              To Conduct your Exam  Safe and Secure in
              <b>  Proctored 🕵🏻 </b> environment {" "}
              <h3 style={{ fontFamily: "monospace", color: "purple", size: "2rem" }}> 👮 WatchX.ai 👮</h3>
            </h4>
            <p className="flow-text grey-text text-darken-1">
              Have Unique Exam code feature 💻 . Create the proctored Exam with Microsoft form / Any Exam Link 🔗  . <br />
              Monitor Large Number of students 🧑‍🎓 in real time.  Easy to use and conduct your exam hassel free .

            </p>
            <br />
          {/* Register Buton */}
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "185px",
                  borderRadius: "10px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light btn pink darken-1"
              >
             🔏 Register🔏
              </Link>
            </div>
            {/* Log in Button */}
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "180px",
                  borderRadius: "10px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect green white-text"
              >
               🔒  Log In 🔒
              </Link>
            </div>
            <br></br>
            <br></br>
            {/* Features */}
            <br></br>
            <hr></hr>
            <h5>
            🎯 Tab Changes  🎯 Prohibited keys Press 🎯 Face not Visible 🎯 Multiple Face detected <br></br>🎯 Mobile phone detected 🎯 Prohibited Object found  🎯 Many More features
            <br></br>
            <hr></hr>
            {/* To list new website */}
            <h5>🤖🤖 <u>Powered By AI</u> try our <a href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " > Automatic Proctoring</a> <a class="waves-effect waves-light btn-large" href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " style={{
                  width: "180px",
                  borderRadius: "15px",
                  letterSpacing: "1.5px",
                  backgroundColor:"yellow",
                  height:"63px",
                  padding:"2px 10px",
                  color:"black",
                  fontFamily:"fantasy"
                }}>Autowatchx-ai</a> 🤖🤖</h5>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;


/**********************************************************************/
/****************** Landing JS *****************************/
/**********************************************************************/