import React, {useState} from 'react';
import './App.css';
import logo from './assets/images/luciosite1.png';
import UserInput from './Components/UserInput';
import UserList from './Components/UserList';

function App() {

  const[usuarios, setUsuarios] = useState(['D.VA', 'Orisa', 'Sigma']);
  const adicionarUsuario = (novoUsuario) =>{
    if(usuarios.includes(novoUsuario)){
      alert('Você já esculachou!');
      return;
    }
    setUsuarios([...usuarios, novoUsuario]);
  }

  return(
  <div className='App'>
    <img src={logo} alt='Logo da empresa' className='logo'/>
    <hr/>
    <UserInput onAdduser={adicionarUsuario}/>
    <hr/>
    <UserList usuarios={usuarios}/>
  </div>
  );
}

export default App;
