/**********************************************************************/
/********************** Register Errors   ****************************/
/********************************************************************/

const isEmpty = require("is-empty");
const Validator = require("validator");


module.exports = function validateRegisterInput(RegistrationData) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  // Empty string inittially 
  RegistrationData.name = !isEmpty(RegistrationData.name) ? RegistrationData.name : "";
  RegistrationData.email = !isEmpty(RegistrationData.email) ? RegistrationData.email : "";
  RegistrationData.password = !isEmpty(RegistrationData.password) ? RegistrationData.password : "";
  RegistrationData.password2 = !isEmpty(RegistrationData.password2) ? RegistrationData.password2 : "";

  // Name checks if user entered or not 
  if (Validator.isEmpty(RegistrationData.name)) {
    errors.name = "⚠️ Name field is required ⚠️ ";
  }

  // Email checks entered or not ?
  if (Validator.isEmpty(RegistrationData.email)) {
    errors.email = " ⚠️ Email field is required ⚠️ ";
  }

  // Check email id is invalid ?
  else if (!Validator.isEmail(RegistrationData.email)) {
    errors.email = " ⚠️ Email is invalid ⚠️ ";
  }

  // Password checks can not be empty 
  if (Validator.isEmpty(RegistrationData.password)) {
    errors.password = " ⚠️ Password field is required ⚠️ ";
  }
  // Password is emoty 
  if (Validator.isEmpty(RegistrationData.password2)) {
    errors.password2 = " ⚠️ Confirm password field is required ⚠️ ";
  }
  // less tha ^ character error 
  if (!Validator.isLength(RegistrationData.password, { min: 6, max: 30 })) {
    errors.password = " ⚠️ Password must be at least 6 characters ⚠️ ";
  }
  if (!Validator.equals(RegistrationData.password, RegistrationData.password2)) {
    errors.password2 = " ⚠️ Passwords must match ⚠️ ";
  }
  // return errors list and isValid which is true if list is empty
  return {
    errors,
    isValid: isEmpty(errors)
  };
};

/**********************************************************************/
/********************** Register Errors   ****************************/
/********************************************************************/