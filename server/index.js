/************Express.js & database connectivity *********************/
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const fileUpload = require('express-fileupload')
const path = require('path');
const mongoose = require("mongoose");

//Users api
const users = require("./routes/api/Users");
//Exams api
const exams = require("./routes/api/Exams");
// logs api
const logs = require("./routes/api/Logs");

//saving port for database 
const PORT = process.env.PORT || 3001;

const app = express();

/*************************************************************************/
/********* allow x-www-form-urlencoded body type in postman requests*******/
/*************************************************************************/

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
// Uses file upload 
app.use(fileUpload());
app.use(express.static(path.resolve(__dirname, '../client/build')));


/*****Passport middleware*****/
app.use(passport.initialize());

// Using Passport
/*****Passport config*******/
require("./config/passport")(passport);


/*****ALL Routers*****/
// Routes
//for professor and students
app.use("/api/users", users);
// for exams
app.use("/api/exams",exams);
// for handling logs
app.use("/api/logs",logs);

/***************************************************************/
/*******Setting Up the Connection to Database MongoDB **********/
/***************************************************************/

/*******Database MongoDb atlas************/
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB

/******* Connection to Database MongoDB **********/
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

/******************************************************/
/****************Handling Requests********************/
/****************************************************/
/*****Handle GET requests ******/
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

/****Request not handled before will go to our app***/
app.get('*', (req, res) => {
//     sending to our 
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


/************************************************/
/**** The app will run on localhost:3000 *********/
/************************************************/
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


/*************END of my code ***************/
