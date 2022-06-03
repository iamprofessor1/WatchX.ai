/**********************************************************************/
/******************Dashboard for Students and Pofessor ****************/
/**********************************************************************/


import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../RegisterLog/authActions";
import ProfDashboard from "./ProfDashboard";
import PropTypes from "prop-types";
import StudentDashboard from "./StudentDashboard";

/**
 1. This is a common class for student as well as professor dashboard
 2. This is called from login directly
 3. Based on the type of user it renders the StudentDashboard Component or
 4. ProfDashboard Component 
 */
// Common Class for students as well as Professor
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
    console.log(user);
    
return (
      <div >
      {user.userType===true?<ProfDashboard name={user.name} prof_email={user.email} logoutUser={this.props.logoutUser}/>:
      <StudentDashboard name={user.name} student_email={user.email} logoutUser={this.props.logoutUser}/>}
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);







/**********************************************************************/
/******************Dashboard for Students and Pofessor ****************/
/**********************************************************************/