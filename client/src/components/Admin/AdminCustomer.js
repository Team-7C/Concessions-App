import React from 'react';
import './AdminDisplay.css'

class AdminCustomer extends React.Component {

    render() {
        const data = this.props.items;
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "box">
                    <h className = "newTitle">Manage Customers</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminCustomer;