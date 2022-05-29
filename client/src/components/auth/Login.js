import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

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
   * Combined on change function for all components.
   * The input event is used to get id which is the same as state name
   * So the value of state is set to be event.target.value which is the 
   * value inputted by user
   * @param {event} e
   * 
   */
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * This function is triggered when user presses log in button
   * This sends email and password to loginUser function in authActions.js
   * @param {Event} e 
   */
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, 
    //we don't need to pass in this.props.history as a parameter
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
                <label htmlFor="password"> 🔐 Enter your Password 🔐 </label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="waves-effect waves-light btn-large pink darken-1"
                >
                  🆔 Log  🔐🆔
                </button>
              </div>
            </form>
            <br></br>
              <br></br>
              <br></br>
              <br></br>
              <hr></hr>
            <h5>🤖🤖 <u>Powered By AI</u> try our <a href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " > automatic proctoring</a> <a class="waves-effect waves-light btn-large" href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " style={{
                  width: "180px",
                  borderRadius: "15px",
                  letterSpacing: "1.5px",
                  backgroundColor:"yellow",
                  color:"black",
                  fontFamily:"fantasy"
                }}>Autowatchx.ai</a> 🤖🤖</h5>
          </div>

          <br></br>
          {/* <br></br>
          <h5>🤖  <br></br>  <br></br> <u>Powered  <br></br> By  <br></br> A I  <br></br></u> try  <br></br>our  <br></br> <br></br> <a href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " > Automatic Proctoring  <br></br> <br></br></a> <a class="waves-effect waves-light btn-large" href="https://autowatchx-ai.herokuapp.com/" target="_blank" rel="New " style={{
            width: "90%",
            borderRadius: "15px",
            letterSpacing: "1.5px",
            backgroundColor: "yellow",
            height: "63px",
            padding: "2px 10px",
            color: "black",
            fontFamily: "fantasy"
          }}>Autowatchx-ai</a>  <br></br> <br></br>🤖</h5> */}

        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);