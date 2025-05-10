import React, { useState} from "react";
import './styless.css'

const UserList =({ usuarios }) => {
    return(
        <div className='user-list'>
            <h2>SE ENTREGARAM A BATIDA!</h2>
            <ol>
                {usuarios.map((usuario, index) =>(
                    <li key={index}>{usuario}</li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;