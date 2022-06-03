
/******************************************************/
/******************Registeration Page ****************/
/*****************************************************/

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../RegisterLog/authActions";
import classnames from "classnames";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      userType: false,
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    // If erros are detected in the form update error state so they are visible to the user
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  /**
   * @param {event} e
   * 
   */

  /*
  * Combined on change function for all components.
  * The input event is used to get id which is the same as state name
  * So the value of state is set to be event.target.value which is the 
  * value inputted by user
  */
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * @param {event} e
   * 
   */
  /*
   * Toggler Function for the Are you an Professor ? Switch
   * The input event is used to get id which is the same as state name
   * So the value of state is set to be event.target.value which is the 
   * value inputted by user
   */
  onToggle = e => {
    this.setState({ [e.target.id]: !this.state.userType });
  }

  /**
   * @param {Event} e 
   */

  /*
     * This function is triggered when user presses register button
     * This sends email and password to registerUser function in authActions.js
  */
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      userType: this.state.userType,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  // Render 
  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home 🏠
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> Here 🔏 🔏
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Click to Log in 🔒</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name
                  })}
                />
                {/* taking input as Name  */}
                <label htmlFor="name"> 👩‍👧‍👦 Enter your Name 👩‍👧‍👦</label>
                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                {/* Taking input as Email */}
                <label htmlFor="email">📧 Enter your Email 📧</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                {/*  Taking input as Password  */}
                <label htmlFor="password">🔑 Enter your Password 🔑</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2"> 🗝️ Please Confirm your Password 🗝️</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              <div class="switch col s12">
                <label>
                  Toogle if You are Professor 👩🏻‍🏫 👨🏻‍🏫 ?
                  <input type="checkbox" id="userType" checked={this.state.userType} onChange={this.onToggle}></input>
                  <span className="lever"></span>

                </label>
              </div>

              {<div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    width: "150px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="waves-effect waves-light btn pink darken-1"
                >
                  🔏 Sign up 🔏
                </button>
              </div>}


            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            {/* AutowatchX-ai */}
            <h5>🤖🤖 <u>Powered By AI</u> try our <a href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " > automatic proctoring</a> <a class="waves-effect waves-light btn-large" href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " style={{
              width: "180px",
              borderRadius: "15px",
              letterSpacing: "1.5px",
              backgroundColor: "yellow",
              color: "black",
              fontFamily: "fantasy"
            }}>Autowatchx.ai</a> 🤖🤖</h5>
          </div>
        </div>
      </div>
    );
  }
}
// Handling Register Cases 

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));


/******************************************************/
/******************Registeration Page ****************/
/*****************************************************/


 /*
   * Toggler Function for the Are you an Professor ? Switch
   * The input event is used to get id which is the same as state name
   * So the value of state is set to be event.target.value which is the 
   * value inputted by user
   */