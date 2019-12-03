import React from 'react';
import './SignIn.css'


class Sign_In extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    changeUsername(val){
        this.setState({userName: val});
    }
    
    changePassword(val){
        this.setState({password: val});
    }
    
    render() {
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
                    <button className = "form-button2" onClick={(a) => {a.preventDefault(); changeUser(this.state.userName, this.state.password); changePage('home')}}> Log In!</button>

                    <br/>
                    <button onClick={(a) => {a.preventDefault(); changePage('new_user')}}> New User? Click here to sign up. </button>

                </div>
            </div>
        );
    }
}

export default Sign_In;