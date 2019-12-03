import React from 'react';
import './AdminDisplay.css'

var req = require('request');
var custys;

req.get('http://chomperapp.herokuapp.com/api/customers', function(err, res, body)
{
    custys = JSON.parse(body);
})

class AdminCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: 1,
            selectedCustomer: 0,
            uid: '',
		    credentials: {
                username: '',  // encrypt for extra security?
                password: '', // salt passwords for extra security?
            },
            name: '',
            email: '',
            phone: ''
        };

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.createUser = this.createUser.bind(this);

    }

    changeUsername(val){
        this.setState({userName: val});
    }
    
    changePassword(val){
        this.setState({password: val});;
    }
    
    changeName(val){
        this.setState({name: val});
    }
	
	changeEmail(val){
        this.setState({email: val});
    }
	
	changePhone(val){
        this.setState({phone: val});
    }

    createUser(user, pass, name, phone, email){
        console.log("yo");
    }
    
    render() {
        const changePage = this.props.changePage;

        if(this.state.isSelected === 1)
        {
            return (
                <div className="adminMain">
                    <div className = "box">
                        <button className = "backBtn" onClick={(a) => {a.preventDefault(); changePage('admin_display')}}>Back</button>
                        <h className = "newTitle">Manage Customers</h>
                        <p></p>
                        <ul>
                            {
                                custys.map(item => {
                                    return <button className = "myBtn" onClick={(a) => {a.preventDefault(); this.setState({selectedCustomer: item.name}); this.setState({isSelected: 2})}}>{item.name}</button>  
                                })
                            }
                            <button className = "myBtn" onClick={(a) => {a.preventDefault(); this.setState({isSelected: 3})}}>Add New</button>
                        </ul>
                    </div>
                </div>
            ); 
        }
        else if(this.state.isSelected === 2)
        {
            return (
                <div className="adminMain">
                    <div className = "box">
                        <button className = "backBtn" onClick={(a) => {a.preventDefault(); this.setState({isSelected: 1})}}>Back</button>
                        <h className = "newTitle">Customer Information</h>
                        <p></p>
                        <ul>
                                {
                                    custys.map(item => {
                                        if(this.state.selectedCustomer == item.name) 
                                        {
                                            return(
                                                <>
                                                <li> Name: {item.name} </li> 
                                                <li> Identification: {item.uid} </li> 
                                                <li> Phone: {item.phone} </li> 
                                                <li> Email: {item.email} </li> 
                                                </>
                                            )
                                        }
                                    })
                                }
                            </ul>
                    </div>
                </div>
            ); 
        }
        else if(this.state.isSelected === 3)
        {
            return (
                <div className="adminMain">
                    <div className = "box">
                    <button className = "backBtn" onClick={(a) => {a.preventDefault(); this.setState({isSelected: 1})}}>Back</button>
                    <h5>Add a Vendor</h5>

                        <label>Username:</label>
                        <input type="text" ref="username_input" onChange={() => {
                            this.changeUsername(this.refs.username_input.value)}} />
                        <br/>
                                
                        <label>Password:</label>
                        <input type="password" ref="password_input" onChange={() => {
                            this.changePassword(this.refs.password_input.value)}} />
                        <br/>
                                
                        <label>Name:</label>
                        <input type="password" ref="password_confirm_input"onChange={() => {
                            this.changeName(this.refs.password_confirm_input.value)}} />
                        <br/>
                                    
                        <label>Email:</label>
                        <input type="text" ref="email_input" onChange={() => {
                            this.changeEmail(this.refs.email_input.value)}} />
                        <br/>
                                
                        <label>Phone:</label>
                        <input type="text" ref="phone_input" onChange={() => {
                            this.changePhone(this.refs.phone_input.value)}} />
                        <br/>
                                                            
                        <button className = "button3" onClick={(a) => {a.preventDefault(); this.createUser(this.state.userName, this.state.password, this.state.name, this.state.phone, this.state.email); this.setState({isSelected: 1}); }}> Add User </button>
                                            </div>
                                        </div>
            ); 
        }

    }
}

export default AdminCustomer;