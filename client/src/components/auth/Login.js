
/********************************************/
/******************Log in page ****************/
/********************************************/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../RegisterLog/authActions";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";




// Login Class 
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }


  /*
  // If the user is already logged in, send him to dashboard
  // set errors if present any error 
   */


  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // If the user is already logged in, send him to dashboard
      this.props.history.push("/dashboard");
    }
    // set errors if present
    if (nextProps.errors) {

      this.setState({
        errors: nextProps.errors
      });
    }
  }
  componentDidMount() {

    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

  }
  /**
   * @param {event} e
   * 
   */
  /*
   1.  Combined on change function for all components.
   2. The input event is used to get id which is the same as state name
   3.So the value of state is set to be event.target.value which is the 
   4. value inputted by user
   */
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * @param {Event} e 
   */

  /*
   * This function is triggered when user presses log in button
   * This sends email and password to loginUser function in authActions.js
  */
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      // email 
      email: this.state.email,
      //  password 
      password: this.state.password
    };
    // since we handle the redirect within our component, 
    //we don't need to pass in this.props.history as a parameter
    this.props.loginUser(userData);

  };


  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home 🏠
            </Link>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> Here 🔒🔒
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Click Here to Register 🔏</Link>
              </p>
            </div>

            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">📧 Enter your Email 📧 </label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                {/* PASSWORD  */}
                <label htmlFor="password"> 🔐 Enter your Password 🔐 </label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    // STRYLING OF BUTTON
                    width: "170px",
                    borderRadius: "3px",
                    letterSpacing: "1.3px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="waves-effect waves-light btn-large pink darken-1"
                >
                  🆔 Log iN 🔐🆔
                </button>
              </div>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            {/* AUtoWatchX-ai */}
            <h5>🤖🤖 <u>Powered By AI</u> try our <a href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " > automatic proctoring</a> <a class="waves-effect waves-light btn-large" href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " style={{
              width: "180px",
              borderRadius: "15px",
              letterSpacing: "1.5px",
              backgroundColor: "yellow",
              color: "black",
              fontFamily: "fantasy"
            }}>Autowatchx.ai</a> 🤖🤖</h5>
          </div>

          <br></br>

        </div>
      </div>
    );
  }
}

// HANDLE LOGIN CASES
Login.propTypes = {
  // SET LOGINUSER
  loginUser: PropTypes.func.isRequired,
  // SET AUTH
  auth: PropTypes.object.isRequired,
  // SET eRROR 
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  // SET AUTH
  auth: state.auth,
  //  SET ERROR
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);



/********************************************/
/******************Log in page **************/
/********************************************/


