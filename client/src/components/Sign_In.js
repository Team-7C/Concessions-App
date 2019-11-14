import React from 'react';


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
            <div>
                <input type="text" ref="username_input" placeholder="username" onChange={() => {
                    this.changeUsername(this.refs.username_input.value)}} />

                <input type="text" ref="password_input" placeholder="password" onChange={() => {
                    this.changePassword(this.refs.password_input.value)}} />

                <button onClick={(a) => {a.preventDefault(); changeState('home', this.state.userName, this.state.password)}}> Submit </button>
            </div>

        );
    }
}

export default Sign_In;