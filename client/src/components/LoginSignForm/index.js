import { Tab } from "bootstrap";
import React, { Switch } from "react";
import { Component } from "react";
import Button from "react-bootstrap/Button";
import { Col, Row, Container } from "../components/Grid";


var Parent = React.createClass({
    getInitialState: function () {
        return { signup: false, login: true }
    },
    switch: function (word) {
        var signup, login;
        if (word == "signup") { signup = true; login = false; }
        else { login = true; signup = false; }
        return this.setState({ login: login, signup: signup })
    },
    render: function () {

        var self = this;
        return (
            <div>
                <div id="buttons">
                    <p id="loginButton" onClick={self.switch.bind(null, "login")} className={self.state.login ? "blue" : "yellow"}>Login</p>
                    <p id="signupButton" onClick={self.switch.bind(null, "signup")} className={self.state.signup ? "blue" : "yellow"}>Sign In</p>
                </div>

                {self.state.login ? <Login /> : null}
                {self.state.signup ? <Signup /> : null}

            </div>
        )
    }
})


var Signup = React.createClass({
    render: function () {
        return (
            <div>
                <div id="signup">
                    <input type="text" id="first" placeholder="First Name" />
                    <input type="text" id="last" placeholder="Last Name" />
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <input type="password" id="confirm" placeholder="Confirm Password" />
                    <button id="send">Send</button>
                </div>
            </div>
        )
    }
})

var Login = React.createClass({
    render: function () {
        return (
            <div>
                <div id="login">
                    <input type="email" id="email" placeholder="Email" />
                    <input type="password" id="password" placeholder="Password" />
                    <button id="send">Send</button>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Parent />, document.getElementById("space"))
