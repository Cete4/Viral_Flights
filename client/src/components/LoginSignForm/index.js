import React, { Switch } from "react";


let Parent = React.createClass({
    getInitialState: function () {
        return { signup: false, login: true }
    },
    switch: function (word) {
        let signup, login;
        if (word == "signup") { signup = true; login = false; }
        else { login = true; signup = false; }
        return this.setState({ login: login, signup: signup })
    },
    render: function () {

        let self = this;
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


let Signup = React.createClass({
    render: function () {
        return (
            <div>
                <div id="signup">
                    <input
                        type="text"
                        id="first"
                        placeholder="First Name"
                        onChange={props.handleInputChange}
                        value={props.first}
                    />
                    <input
                        type="text"
                        id="last"
                        placeholder="Last Name"
                        onChange={props.handleInputChange}
                        value={props.last}
                    />
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={props.handleInputChange}
                        value={props.email}
                    />
                    <input type="password"
                        id="password"
                        placeholder="Password"
                        onChange={props.handleInputChange}
                        value={props.password}
                    />
                    <input type="password"
                        id="confirm"
                        placeholder="Confirm Password"
                        onChange={props.handleInputChange}
                        value={props.password}
                    />
                    <button id="signup">Sign Up</button>
                </div>
            </div>
        )
    }
})

let Login = React.createClass({
    render: function () {
        return (
            <div>
                <div id="login">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={props.handleInputChange}
                        value={props.email}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={props.handleInputChange}
                        value={props.password}
                    />
                    <button id="login">Login</button>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<Parent />, document.getElementById("space"))
