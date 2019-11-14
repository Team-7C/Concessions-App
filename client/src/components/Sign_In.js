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
        const changeState = this.props.changeState;

        return (
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

                <button onClick={(a) => {a.preventDefault(); changeState('home', this.state.userName, this.state.password)}}> Submit </button>
            </div>

        );
    }
}

export default Sign_In;