import { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserList from './Components/UserList';

function App() {
  const[atividades, setAtividades] = useState(['Teste',]);
    if(atividades.includes(atividade)){
      alert('Atividade já existe!');
      return;
    }
    setAtividades([...atividades, atividade]);
    setAtividade('');
    }

const adicionarAtividade= () =>{
  if(atividades.includes(atividade)){
    alert('Atividade já existe!');
    return;
  }
  setAtividades([...atividades, atividade]);
  setAtividade('');
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
    <h2>Lista de atividades</h2>
    <ol>
      {atividades.map((atividade, index) => (<li key={index}>{atividade}</li>))}
    </ol>
  </div>
);


export default App;
//const[atividades, setAtividades] = useState(['Teste',]);
//  