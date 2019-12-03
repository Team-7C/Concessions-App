import React from 'react';
import './AdminDisplay.css'

class AdminDisplay extends React.Component {



    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "form">
                    <h>Admin Portal</h>
                    <div>
                    <button class = "myBtn" onClick={(a) => {a.preventDefault(); changePage('admin_vendor')}}>Manage Vendors</button>
                    <button class = "myBtn" onClick={(a) => {a.preventDefault(); changePage('admin_cust')}}>Manage Customers</button>
                    </div>
                </div>
            </div>
        ); 
    }
}


export default AdminDisplay;