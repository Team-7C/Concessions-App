import React from 'react';
import './AdminDisplay.css'

class AdminDisplay extends React.Component {



    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "formy">
                    <h5>Admin Portal</h5>
                    <div>
                    <button id = "myButton" onClick={(a) => {a.preventDefault(); changePage('admin_vendor')}}>Manage Vendors</button>
                    <button id = "myButton" onClick={(a) => {a.preventDefault(); changePage('admin_cust')}}>Manage Customers</button>
                    </div>
                </div>
            </div>
        ); 
    }
}


export default AdminDisplay;