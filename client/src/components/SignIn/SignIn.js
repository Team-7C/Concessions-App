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
                        <h5>Input your login information </h5>
                    <input type="text" ref="username_input" class="text" placeholder="username" onChange={() => {
                        this.changeUsername(this.refs.username_input.value)}} />
                    <br/>
                    <input type="password" ref="password_input" placeholder="password" onChange={() => {
                        this.changePassword(this.refs.password_input.value)}} />

                    <br/>
                    <button onClick={(a) => {a.preventDefault(); changeUser(this.state.userName, this.state.password); changePage('home')}}> Submit </button>

                    <br/>
                    <button onClick={(a) => {a.preventDefault(); changePage('new_user')}}> New User?  Click here to create your account. </button>

                </div>
            </div>
        );
    }
}

export default Sign_In;