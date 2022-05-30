import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from '@mui/material/TextField';
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { useHistory } from "react-router-dom";

function StudentDashboard(props) {

  const [exam_code, setExamCode] = useState("");
  const [error, setError] = useState("");

  const axios = require("axios");
  const moment = require("moment");
  const history = useHistory();

  /**
   * This function is called when student enters exam code to start the exam
   * It checks the exam code, if invalid it displays error
   * If valid, it uses the start time and duration to find if exam is running or not
   * If running it allows student to enter, else displays error
   */
  function checkExamCode() {

    // send exam code to server
    axios.get('/api/exams/examByCode?exam_code=' + exam_code)
      .then(function (response) {
        // if exam code is right
        console.log(response);
        let date_string = response.data.date_time_start;
        const exam_date_time_start = new Date(date_string);
        const exam_date_time_end = moment(exam_date_time_start).add(response.data.duration, 'm').toDate();
        const curr_date_time = new Date();

        // if exam has begun but not ended, then allow user to enter
        if (curr_date_time >= exam_date_time_start && curr_date_time < exam_date_time_end) {

          // calculate time remaining
          var diff = Math.abs(exam_date_time_end - curr_date_time);
          var diff_mins = Math.floor((diff / 1000) / 60);
          var diff_secs = Math.floor(diff / 1000) % 60;
          console.log(diff, diff_mins, diff_secs);
          setError("Starting exam");
          // pass data to exam page and start the exam
          let data = {
            exam_code: exam_code,
            student_name: props.name,
            student_email: props.student_email,
            exam_link: response.data.exam_link,
            prof_email: response.data.prof_email,
            mins_left: diff_mins,
            secs_left: diff_secs,
          };
          history.push({
            pathname: '/test',
            state: data
          })

        }

        // if current time is after exam end time, show error
        else if (curr_date_time >= exam_date_time_end) {
          setError(" ❎ Sorry , You are Late  😥 , Exam has already ended  ❎ ");
        }

        // if current time is before exam start, show error
        else {
          setError(" 👉 Please Wait for a while 🙂 , Exam has not started now  👈 ");
        }
      })

      .catch(function (error) {
        // if exam code is invalid show error
        console.log(error);
        setError("Exam code is invalid ❌");
      });
  }

  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Welcome to <h4 style={{ color: "red" }}>👮WatchX.ai👮</h4> 🧑‍🎓 </b> {props.name.split(" ")[0]}
            <p className="flow-text grey-text text-darken-1">
              <li>👩‍💻 Enter The Unique Exam Code 👩‍💻</li>
              <li> 💻 Start The Exam 💻 </li>
              <br></br>
              🤖🤖 Powered by AI 🤖🤖

            </p>
          </h4>
          <TextField
            autoFocus
            padding="10px"
            margin="20px"
            variant="standard"
            id="exam_code"
            label="Exam Code"
            type="text"
            required={true}
            value={exam_code}
            onChange={(e) => setExamCode(e.target.value)}
          />
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              marginLeft: "1rem"
            }}
            onClick={checkExamCode}
            className="waves-effect waves-light btn pink darken-1"
          >
            🏛️ Start Exam 🏛️
          </button>
          <button
            style={{
              width: "200px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              marginLeft: "1rem"
            }}
            onClick={props.logoutUser}
            className="waves-effect waves-light btn blue "
          >
            🔓  Logout 🔓
          </button>
          <br />
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    </div>

  )
}
StudentDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(StudentDashboard);