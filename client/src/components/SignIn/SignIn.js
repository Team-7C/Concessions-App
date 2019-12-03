import React from 'react';
import './SignIn.css'

var crypto = require('crypto'),
    request = require('request');
    //Customer = require('../../../../server/models/customerSchema.js'),
    //Vendor = require('../../../../server/models/vendorSchema.js');

/*** Password Salting Functions ***/

/* Create a salt that is length-bytes long*/
function saltShaker(length) {
    return crypto.randomBytes(length).toString('hex');
};

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
            userName: '',
            password: ''
        };

        this.checkLogin = this.checkLogin.bind(this);
    }

    // Query API to see if user exists in database
    checkLogin(username, password) {
        request('https://chomperapp.herokuapp.com/api/customers', function(err, res, body){
            console.log("Woohoo!");
        });
    }

    changeUsername(val){
        this.setState({userName: val});
    }
    
    changePassword(val){
        this.setState({password: val});
    }
    
    render() {
        const checkLogin = this.checkLogin;
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;

        return (
            <div className="signin_main">
                <div className = "form">
                    <h5>Sign Into Your Chomper Account</h5>

                    <label>Username:</label>
                    <input type="text" ref="username_input" onChange={() => {
                         this.changeUsername(this.refs.username_input.value)}} />
                    <br/>

                    <label>Password:</label>
                    <input type="password" ref="password_input" onChange={() => {
                         this.changePassword(this.refs.password_input.value)}} />

                    <br/>
                    <button onClick={(a) => {a.preventDefault(); checkLogin(this.state.username, this.state.password); /*changeUser(this.state.userName, this.state.password); changePage('home')*/}}> Submit </button>
                    <br/>
                    <button onClick={(a) => {a.preventDefault(); changePage('new_user')}}> New User?  Click here to create your account. </button>
                    
                    <br/>
                    <button onClick={(a) => {a.preventDefault(); changePage('reset')}}> Forgot password?  Click here. </button>
                </div>
            </div>
        );
    }
}

export default Sign_In;