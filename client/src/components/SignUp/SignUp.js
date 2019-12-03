import React from 'react';
import './SignUp.css'


class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
            confirmPassword: '',
            name: '',
            phone: '',
            email: '',
            message: ''
        };
    }

    changeUsername(val){
        this.setState({userName: val});
    }
    
    async changePassword(val){
        this.setState({password: val});
        await this.props.changePage('new_user')
        this.checkPassword();
    }
    
    async changeConfirmPassword(val){
        this.setState({confirmPassword: val});
        await this.props.changePage('new_user')
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
    
    changeName(val){
        this.setState({name: val});
    }

    render() {
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;
        const createUser = this.props.createUser;

        return (
            <div className="signup_main">
                <div className="form_sign">
                    <h5>Create an Account</h5>

                    <label>Username:</label>
                    <input type="username" ref="username_input" onChange={() => {
                        this.changeUsername(this.refs.username_input.value)}} />
                    <br/>
                    <label>Password:</label>
                    <input type="password" ref="password_input" onChange={() => {
                        this.changePassword(this.refs.password_input.value)}} />
                    <br/>
                    <label>Re-enter Password:</label>
                    <input type="password" ref="password_confirm_input"onChange={() => {
                        this.changeConfirmPassword(this.refs.password_confirm_input.value)}} />
                    <br/>
                    <label> {this.state.message} </label>
                    <br/>
                    <label>Name:</label>
                    <input id="otherType" ref="name_input" onChange={() => {
                        this.changeName(this.refs.name_input.value)}} />
                    <br/>
                    <label>Email:</label>
                    <input id="otherType" ref="email_input" onChange={() => {
                        this.changeEmail(this.refs.email_input.value)}} />
                    <br/>
                    <label>Phone Number:</label>
                    <input id="otherType" ref="phone_input" onChange={() => {
                        this.changePhone(this.refs.phone_input.value)}} />
                    <br/>
                    <button className = "button3" onClick={(a) => {a.preventDefault(); 
                        createUser(this.state.userName, this.state.password, this.state.name, this.state.phone, this.state.email); 
                        changePage('home')}}> Sign Up! </button>
                </div>
            </div>
        );
    }
}

export default SignUp;