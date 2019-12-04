import React from 'react';
import './AdminDisplay.css'

var req = require('request'),
    custys;

req.get('http://chomperapp.herokuapp.com/api/customers/', function(err, res, body)
{
    custys = JSON.parse(body);
})


class AdminCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: 1,
            selectedCustomer: '',
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
    }

    getCustomers() {
        req.get('http://chomperapp.herokuapp.com/api/customers/', function(err, res, body)
        {
            custys = JSON.parse(body);
        });
    }

    createCustomer(user, pass, name, phone, email) {
        req.post('http://chomperapp.herokuapp.com/api/customers/', {
            json: {
                uid: custys.length + 1,
                credentials: {
                    username: user,
                    password: pass,
                    salt: "w/e"
                },
                name: name,
                phone: phone,
                email: email
            }
        }, this.getCustomers());
    }

    deleteCustomer(uid)
    {
        req.del('http://chomperapp.herokuapp.com/api/customers/' + uid, this.getCustomers());
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

    render() {
        const changePage = this.props.changePage;

        if(this.state.isSelected === 1)
        {
            this.getCustomers();
            return (
                <div className="adminMain">
                    <div className = "formy">
                        <h5 className = "newTitle">Manage Customers</h5>
                        <p></p>
                        <ul className="boxy">
                            <div id="scrollItems">
                            {
                                custys.map(item => {
                                    return <button className = "myBtn" onClick={(a) => {a.preventDefault(); this.setState({selectedCustomer: item.name}); this.setState({isSelected: 2})}}>{item.name}</button>  
                                })
                            }
                            <button id = "myButton" onClick={(a) => {a.preventDefault(); this.setState({isSelected: 3})}}>Add New</button>
                            </div>
                        </ul>
                        <button id="myButton" onClick={(a) => {a.preventDefault(); changePage('admin_display')}}>Back</button>
                    </div>
                </div>
            ); 
        }
        else if(this.state.isSelected === 2)
        {
            this.getCustomers();
            return (
                <div className="adminMain">
                    <div className = "formy">
                        <h5 className = "newTitle">Customer Information</h5>
                        <p></p>
                        <ul className="words">
                                {
                                    custys.map(item => {
                                        if(this.state.selectedCustomer == item.name) 
                                        {
                                            return(
                                                <>
                                                <div id="wordHolder">
                                                <li className="desc"> <b>Name:</b> {item.name} </li> 
                                                <li className="desc"> <b>Identification:</b> {item.uid} </li> 
                                                <li className="desc"> <b>Phone:</b> {item.phone} </li> 
                                                <li className="desc"> <b>Email:</b> {item.email} </li> 
                                                </div>
                                                <button id = "myButton" onClick={(a) => {a.preventDefault(); this.deleteCustomer(item.uid)}}>
                                                    Delete
                                                </button>
                                                </>
                                            )
                                        }
                                    })
                                }
                            </ul>
                            <button id = "myButton" onClick={(a) => {a.preventDefault(); this.setState({isSelected: 1})}}>Back</button>
                    </div>
                </div>
            ); 
        }
        else if(this.state.isSelected === 3)
        {
            return (
                <div className="adminMain">
                    <div className = "formy">
                    <h5>Add New Customer</h5>

                        <label>Username:</label>
                        <input type="username" ref="username_input" onChange={() => {
                            this.changeUsername(this.refs.username_input.value)}} />
                        <br/>
                                
                        <label>Password:</label>
                        <input type="password" ref="password_input" onChange={() => {
                            this.changePassword(this.refs.password_input.value)}} />
                        <br/>
                                
                        <label>Name:</label>
                        <input id="otherType" ref="password_confirm_input"onChange={() => {
                            this.changeName(this.refs.password_confirm_input.value)}} />
                        <br/>
                                    
                        <label>Email:</label>
                        <input id="otherType" ref="email_input" onChange={() => {
                            this.changeEmail(this.refs.email_input.value)}} />
                        <br/>
                                
                        <label>Phone:</label>
                        <input id="otherType" ref="phone_input" onChange={() => {
                            this.changePhone(this.refs.phone_input.value)}} />
                        <br/>
                                                            
                        <button className = "button3" onClick={(a) => {a.preventDefault(); 
                            this.createCustomer(this.state.userName, this.state.password, this.state.name, this.state.phone, this.state.email); this.setState({isSelected: 1}); 
                        }}>
                        Add Customer</button>
                    </div>
                </div>
            ); 
        }
    }
}

export default AdminCustomer;