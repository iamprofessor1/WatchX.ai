/**********************************************************************/
/************************** Keys & passport******************************/
/********************************************************************/
const JwtStrategy = require("passport-jwt").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");
const ExtractJwt = require("passport-jwt").ExtractJwt;



const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

// Maintain passport & jwt for Logging in and logging out 

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          // Maintain passport & jwt for Logging in and logging out 
          if (user) {
            return done(null, user);
          }
          // Maintain passport & jwt for Logging in and logging out 
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};

/**********************************************************************/
/************************** Keys & passport******************************/
/********************************************************************/