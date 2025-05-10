import React, { useState} from "react";
import './styless.css'

const UserList =({ usuarios }) => {
    return(
        <div className='user-list'>
            <h2>Lista de atividades</h2>
            <ol>
                {atividades.map((atividade, index) => (
                    <li key={index}>{atividade}</li>
                ))}
            </ol>
        </div>
    );
};



    