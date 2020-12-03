import React from "react";
import Component from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home'; // import our pages 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Home' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
