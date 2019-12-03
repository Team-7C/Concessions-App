import React from 'react';
import './AdminDisplay.css'

class AdminCustomer extends React.Component {

    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "box">
                    <h>Manage Customers</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminCustomer;