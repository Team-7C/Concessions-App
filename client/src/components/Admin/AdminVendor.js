import React from 'react';
import './AdminDisplay.css'

class AdminVendor extends React.Component {

    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "box">
                    <h className = "newTitle">Manage Vendors</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminVendor;