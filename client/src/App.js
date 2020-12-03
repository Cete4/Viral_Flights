import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; // import our pages 
import LoginSignUp from './pages/LoginSignUp';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/LoginSignUp' component={LoginSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
