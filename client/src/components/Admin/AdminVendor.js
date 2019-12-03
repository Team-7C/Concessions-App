import React from 'react';
import './AdminDisplay.css'

var req = require('request');

class AdminVendor extends React.Component {

    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "box">
                    <button className = "backBtn" onClick={(a) => {a.preventDefault(); changePage('admin_display')}}>Back</button>
                    <h className = "newTitle">Manage Vendors</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminVendor;