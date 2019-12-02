import React from 'react';
import './Sign_In.css'


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
            <div className="main"> 
                <div className = "form">
                    <div className = "banner-text">
                        <h5>Input your login information </h5>
                    </div>
                    <p>
                    <input type="text" ref="username_input" placeholder="username" onChange={() => {
                        this.changeUsername(this.refs.username_input.value)}} />
                    </p>
                    <p>
                    <input type="text" ref="password_input" placeholder="password" onChange={() => {
                        this.changePassword(this.refs.password_input.value)}} />
                    </p>

                    <button onClick={(a) => {a.preventDefault(); changeUser(this.state.userName, this.state.password); changePage('home')}}> Submit </button>

                    
                    <button onClick={(a) => {a.preventDefault(); changePage('new_user')}}> New User?  Click here to create your account. </button>

                </div>
            </div>
        );
    }
}

export default Sign_In;