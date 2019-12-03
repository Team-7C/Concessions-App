import React from 'react';
import './AdminDisplay.css'

var req = require('request');
var tranList = [];

req('http://chomperapp.herokuapp.com/api/transactions', function(err, res, body)
{
    var tran = JSON.parse(body);
    for(var i = 0; i < tran.length; i++)
    {
        tranList.push(tran[i].tid);
    }
})

class AdminTransaction extends React.Component {

    render() {
        const changePage = this.props.changePage;

        return (
            <div className="adminMain">
                <div className = "box">
                    <button className = "backBtn" onClick={(a) => {a.preventDefault(); changePage('admin_display')}}>Back</button>
                    <h className = "newTitle">Manage Transactions</h>
                    <p></p>

                </div>
            </div>
        ); 
    }
}


export default AdminTransaction;