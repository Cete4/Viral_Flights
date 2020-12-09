import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";


import Home from './pages/Home'; // import our pages
import Flights from './pages/Flights'; // import our pages
import CoronaTravelNews from './pages/CoronaTravelNews'; // import our pages
import Blog from './pages/Blog'; // import our pages
import BlogPostDetail from './pages/BlogPostDetail'; // import our pages

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />


            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />

              {/* <Route exact path='/' component={Home} /> */}
           <Route exact path='/Home' component={Home} />
           <Route exact path='/Flights' component={Flights} />
           <Route exact path='/CoronaTravelNews' component={CoronaTravelNews} />
           <Route exact path='/Blog' component={Blog} />
           <Route exact path='/blogs/:id' component={BlogPostDetail} />

            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;



// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/Home' component={Home} />
//           <Route exact path='/Flights' component={Flights} />
//           <Route exact path='/CoronaTravelNews' component={CoronaTravelNews} />
//           <Route exact path='/Blog' component={Blog} />
//           <Route exact path='/blogs/:id' component={BlogPostDetail} />
//           <Route exact path='/Login' component={Login} />
//           <Route exact path='/SignUp' component={SignUp} />
//         </Switch>
//       </Router>
//     </div>
//   );
// }

// export default App;
