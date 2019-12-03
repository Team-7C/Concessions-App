import React from 'react';
import './SignIn.css'

var crypto = require('crypto'),
    request = require('request'),
    apiURL = 'https://chomperapp.herokuapp.com/api/';

/*** Password Checking Function ***/

/* Create a SHA512 hash of password for a given salt */
function hashPass(password, salt) {
    var hmac = crypto.createHmac('sha512', salt);
    hmac.update(password);
    return hmac.digest('hex');
};

class Sign_In extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
        };

        this.changeMessage = this.changeMessage.bind(this);
    }

    // Query API to see if user exists in database
    checkLogin() {

        const changeMessage = this.changeMessage;
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;

        var username = this.state.username,
            password = this.state.password,
            found = false;

        // First check the customer database for the credentials given by the user
        request(apiURL + 'customers', function(err, res, body){
            var customers = JSON.parse(body),
                index = -1;
            
            for (var i = 0; i < customers.length; i++) {
                if (customers[i].credentials.username === username) index =  i;
            }
            if (index >= 0) { // If customer is found
                console.log("Login successful!");
                
                var storedHash = customers[index].credentials.password,
                    computedHash = hashPass(password, customers[index].credentials.salt);
                
                if (computedHash === storedHash) {
                    changeUser(customers[index].name, password);
                    changePage('home');
                }
                    // console.log("You are a verified user!");
                else changeMessage("Login failed, please try again.");
            }
            else changeMessage("Login failed, please try again.");
        });

        // Then check the vendor database if the customer wasn't found
        if (!found) request(apiURL + 'vendors', function(err, res, body) {
            var vendors = JSON.parse(body),
                index = -1;
            
            for (var i = 0; i < vendors.length; i++) {
                if (vendors[i].credentials.username === username) index =  i;
            }
            if (index >= 0) { // If vendor is found
                console.log("Login successful!");
                
                var storedHash = vendors[index].credentials.password,
                    computedHash = hashPass(password, vendors[index].credentials.salt);
                
                if (computedHash === storedHash) {
                    changeUser(vendors[index].name, password);
                    changePage('home');
                }
                    // console.log("You are a verified user!");
                else changeMessage("Login failed, please try again.");
            }
            else changeMessage("Login failed, please try again.");
        });
    }

    changeMessage(val){
        this.setState({message: val});
    }

    changeUsername(val){
        this.setState({username: val});
    }
    
    changePassword(val){
        this.setState({password: val});
    }
    
    render() {
        const changeMessage = this.props.changeMessage;
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;

        return (
            <div className="signin_main">
                <div className = "formy">
                    <h5>Sign In</h5>
                    {this.state.message ? (
                     <label> {this.state.message } </label>
                    ) : (<div/>)}
                    <label>Username:</label>
                    <input type="username" ref="username_input" onChange={() => {
                         this.changeUsername(this.refs.username_input.value)}} />
                    <br/>

                    <label>Password:</label>
                    <input type="password" ref="password_input" onChange={() => {
                         this.changePassword(this.refs.password_input.value)}} />

                    <br/>
                    <button id="signButton" onClick={(a) => {a.preventDefault(); this.checkLogin(); /*changeUser(this.state.username, this.state.password); changePage('home')*/}}> Submit </button>

                    <br/>
                    <button id="newUserButton" onClick={(a) => {a.preventDefault(); changePage('new_user')}}>Sign Up</button>
                    
                    <br/>
                    <button id="resetButton" onClick={(a) => {a.preventDefault(); changePage('reset')}}>Reset Password</button>
                </div>
            </div>
        );
    }
}

export default Sign_In;