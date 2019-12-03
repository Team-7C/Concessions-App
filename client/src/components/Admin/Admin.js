import React from 'react';
import './Admin.css'


class Admin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            password: '',
			adminName: 'admin',
			adminPassword: '1234',
			nextPage: '',
			message: ''
			
        };
    }
	
	changeUsername(val){
        this.setState({userName: val});
    }
    
    changePassword(val){
        this.setState({password: val});
    }

    checkCredentials(val){
        if ((this.state.adminName === this.state.userName) && (this.state.adminPassword === this.state.password))
			{
				//go to admin logout page
				this.setState({nextPage: 'admin_display'});
				this.setState({message: ''});
			}
		else
			{
				this.setState({nextPage: 'home'});
				this.setState({message: ''});
			}
    }
    
    render() {
        const changePage = this.props.changePage;

        return (
            <div className="admin_main">
                <div className = "formy">
                        <h5>Welcome, Administrator </h5>
                    <label>Username:</label>
                    <input type="username" ref="username_input" class="text" onChange={() => {
                        this.changeUsername(this.refs.username_input.value)}} />
                    <br/>
                    <label>Password:</label>
                    <input type="password" ref="password_input" onChange={() => {
                        this.changePassword(this.refs.password_input.value)}} />

                    <br/>
					
					<label> {this.state.message} </label>

                    <button id="myButton" onClick={(a) => {a.preventDefault(); this.checkCredentials();}}> Submit Credentials </button>

					<button id="myButton" onClick={(a) => {a.preventDefault();  if (this.state.nextPage === 'admin_display') {
                    changePage('admin_display');} else {this.setState({message: 'Incorrect Login'});}}}> Enter </button>

                </div>
            </div>
        );
    }
}

export default Admin;