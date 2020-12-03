import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; // import our pages 
import Flights from './pages/Flights'; // import our pages 
import CoronaTravelNews from './pages/CoronaTravelNews'; // import our pages 
import Blog from './pages/Blog'; // import our pages 
import LoginSignUp from './pages/LoginSignUp'; // import our pages 


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/Flights' component={Flights} />
          <Route exact path='/CoronaTravelNews' component={CoronaTravelNews} />
          <Route exact path='/Blog' component={Blog} />
          <Route exact path='/LoginSignUp' component={LoginSignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
