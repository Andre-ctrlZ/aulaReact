import { useState } from 'react';
import './styless.css';

const UserInput=({ onAdduser}) =>{
    const[atividade, setAtividade] = useState('');
  
    const adicionaAtividade =(event) =>{
    setAtividade(event.target.value);
    }
};

const adicionarAtividade= () =>{
    if(atividade.trim){
        onAdduser(atividade);
        setAtividade('')
    }else{
        alert('Digite a atividade')
    }
}

return(
  <div className='App'>
    <img src='img/socorro.png' alt='socorro' className='logo'></img>
    <hr/>
    <h2>Adicionar atividades</h2>
    <input
    type='text'
    placeholder='Digite a atividade aqui'
    value={atividade}
    onChange={(e) => setAtividade(e.target.value)}
    />

    <button onClick={adicionarAtividade}>Adicionar</button>
    <hr/>
    </div>
    );

    export default UserInput;