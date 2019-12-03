import React from 'react';
import './AdminDisplay.css'

class AdminTransaction extends React.Component {

    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "form">
                    <h>Manage Transactions</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminTransaction;