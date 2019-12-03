import React from 'react';
import './AdminDisplay.css'
import { isContext } from 'vm';

var req = require('request');
var vendys;

req.get('http://chomperapp.herokuapp.com/api/vendors', function(err, res, body)
{
    vendys = JSON.parse(body);
})

class AdminVendor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSelected: 1,
            selectedVendor: 0
        };

    }

    render() {
        const changePage = this.props.changePage;

        if(this.state.isSelected === 1)
        {
            return (
                <div className="adminMain">
                    <div className = "box">
                        <button className = "backBtn" onClick={(a) => {a.preventDefault(); changePage('admin_display')}}>Back</button>
                        <h className = "newTitle">Manage Vendors</h>
                        <p></p>
                        <ul>
                            {
                                vendys.map(item => {
                                    return <button className = "myBtn" onClick={(a) => {a.preventDefault(); this.setState({selectedVendor: item.name}); this.setState({isSelected: 2})}}>{item.name}</button>  
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
                        <h className = "newTitle">Vendor Information</h>
                        <p></p>
                        <ul>
                                {
                                    vendys.map(item => {
                                        if(this.state.selectedVendor == item.name) 
                                        {
                                            return(
                                                <>
                                                <li> Name: {item.name} </li> 
                                                <li> Identification: {item.vid} </li> 
                                                <li> Phone: {item.phone} </li> 
                                                <li> Email: {item.email} </li> 
                                                <button className = "del"> Delete this vendor</button>
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
                        
                    </div>
                </div>
            ); 
        }
    }
}


export default AdminVendor;