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
            selectedCustomer: '',
        };
    }

    deleteCustomer(uid)
    {
        req.del('http://chomperapp.herokuapp.com/api/customers:uid', function(err, res, body){

        })
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
                                                <button className = "del" onClick={(a) => {a.preventDefault(); this.deleteCustomer(item.uid)}}> Delete this customer</button>
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
    }
}

export default AdminCustomer;