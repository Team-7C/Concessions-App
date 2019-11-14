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
        const changeUser = this.props.changeUser;
        const changePage = this.props.changePage;

        return (
            <div>
                <input type="text" ref="username_input" placeholder="username" onChange={() => {
                    this.changeUsername(this.refs.username_input.value)}} />

                <input type="text" ref="password_input" placeholder="password" onChange={() => {
                    this.changePassword(this.refs.password_input.value)}} />

                <button onClick={(a) => {a.preventDefault(); changeUser(this.state.userName, this.state.password); changePage('home')}}> Submit </button>

                
                <button onClick={(a) => {a.preventDefault(); changePage('new_user')}}> New User?  Click here to create your account. </button>

            </div>
        );
    }
}

export default Sign_In;