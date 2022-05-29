import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detector from './Components/ObjectDetector/Detector';
import Home from './screens/home/Home';
import Test from './screens/test/Test';
import Terminated from './screens/terminated/Terminated';
// import Navbar from './Components/Navbar/Navbar';

function App() {

  return (
    <Router>
    {/* <Route exact path="/" component={SignIn} /> */}
    {/* <Navbar/> */}
    <Route exact path="/" component={Home} />
    <div className="App">
      <div className="app_content">
        <Switch>
          <Route exact path="/detector" component={Detector}/>
          <Route exact path="/test" component={Test}/>
          <Route exact path="/terminated" component={Terminated}/>
        </Switch>
      </div>
      {/* <Detector/> */}
    </div>
  </Router>
  );
}

export default App;
