import React, {userState, useState} from 'react';
import './styless.css'

const UserInput =({ onAdduser}) =>{
    const[usuario, setUsuario] = useState('');

    const handleChange = (event) => {
        setUsuario(event.target.value);
    };

    const handleSubmit =() => {
        if(usuario.trim){
            onAdduser(usuario);
            setUsuario('')
        } else {
            alert('Digite o nome do usuário.')
        }
    };

    return(
        <div className='user-input'>
            <h2>Escute a música</h2>
            <a href='https://www.youtube.com/watch?v=EnJs_V4j1hs' target='_blank'>🐸</a>
            <br/>
            <input type='text'
            placeholder='Escutou? Fala teu nome ae!'
            value={usuario}
            onChange={handleChange}
            />

            <button onClick={handleSubmit}>ACELERA!</button>
        </div>
    );
}

export default UserInput;