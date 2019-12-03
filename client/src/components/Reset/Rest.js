import React from 'react';
import './Reset.css'

class Reset extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newPassword: '',
            confirmNewPassword: '',
            phone: '',
            email: '',
            message: ''
        };
    }

    changePhone(val){
        this.setState({phone: val});
    }
    changeEmail(val){
        this.setState({email: val});
    }
   
    changePassword(val){
        this.setState({newPassword: val});
        this.checkPassword();
    }
    
    changeConfirmPassword(val){
        this.setState({confirmNewPassword: val});
        this.checkPassword();
    }
    
    checkPassword(){
        if (this.state.password === this.state.confirmNewPassword) {
            this.setState({message: ""})
        }
        else {
            this.setState({message: "Passwords must match!"})
        }
    }
    
    
    render() {
        const changePage = this.props.changePage;
        const resetPassword = this.props.resetPassword;

        return (
            <div className="reset_main">
                <div className="form_sign_up">
                    <h5>Reset Password</h5>
                    <br/>
                    <input 
                        type="text" 
                        ref="email_input" 
                        placeholder="Email" 
                        onChange={() => {
                            this.changeEmail(this.refs.email_input.value)
                        }} 
                    />
                    <br/>
                    <input 
                        type="text" 
                        ref="phone_input" 
                        placeholder="Phone Number" 
                        onChange={() => {
                            this.changePhone(this.refs.phone_input.value)
                        }} 
                    />
                    <input 
                        type="password" 
                        ref="password_input" 
                        placeholder="New Password" 
                        onChange={() => {
                            this.changePassword(this.refs.password_input.value)
                        }} 
                    />
                    <br/>
                    <input 
                        type="password" 
                        ref="password_confirm_input" 
                        placeholder="Re-enter New Password" 
                        onChange={() => {
                            this.changeConfirmPassword(this.refs.password_confirm_input.value)
                        }} 
                    />
                    <br/>
                    <label> {this.state.message} </label>
                    
                    <br/>
                    <button id="myButton" onClick={(a) => {
                        a.preventDefault(); 
                        resetPassword(this.state.email, this.state.phone, this.state.newPassword); 
                        changePage('home')}}> Reset </button>
                </div>
            </div>
        );
    }
}

export default Reset;