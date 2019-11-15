import React from 'react';
import './SignUp.css'


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            phone: '',
            email: '',
            message: ''
        };
    }

    changeUsername(val){
        this.setState({userName: val});
    }
    
    changePassword(val){
        this.setState({password: val});
        this.checkPassword();
    }
    
    changeConfirmPassword(val){
        this.setState({confirmPassword: val});
        this.checkPassword();
    }
    
    checkPassword(){
        
        if (this.state.password === this.state.confirmPassword)
        {
            this.setState({message: ""})
        }
        else 
        {
            this.setState({message: "Passwords must match!"})
        }
        
    }
    
    changePhone(val){
        this.setState({phone: val});
    }
    changeEmail(val){
        this.setState({email: val});
    }
    
    render() {
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;
        const createUser = this.props.createUser;

        return (
            <div className="form_sign_up">
                    <h5>Create a New Account</h5>
                <input type="text" ref="username_input" placeholder="Username" onChange={() => {
                    this.changeUsername(this.refs.username_input.value)}} />
                <br/>
                <input type="text" ref="password_input" placeholder="Password" onChange={() => {
                    this.changePassword(this.refs.password_input.value)}} />
                <br/>
                <input type="text" ref="password_confirm_input" placeholder="Re-enter Password" onChange={() => {
                    this.changeConfirmPassword(this.refs.password_confirm_input.value)}} />
                <br/>
                <label> {this.state.message} </label>
                <br/>
                <input type="text" ref="email_input" placeholder="Email" onChange={() => {
                    this.changeEmail(this.refs.email_input.value)}} />
                <br/>
                <input type="text" ref="phone_input" placeholder="Phone Number" onChange={() => {
                    this.changePhone(this.refs.phone_input.value)}} />
                <br/>
                <button onClick={(a) => {a.preventDefault(); createUser(this.state.userName, this.state.password, this.state.phone, this.state.email); changePage('home')}}> Submit </button>

            </div>
        );
    }
}

export default SignUp;