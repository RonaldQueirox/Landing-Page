import { useState  } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

import api from './services/api'

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() {
    
    if(input === '') {
      alert("Preencha algum CEP!")
      return;
    }

    try {
      // Try é aquilo que você que fazer mas pode dar errado
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");
    }

    catch {
      // e capturar o erro
      alert("Ops erro ao buscar")
      setInput("") // Retorna valor vazio (Limpar campo de cep)
  }
}

  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="container__input">
      <input 
      type="text" 
      placeholder="Digite seu cep..." 
      value={input}
      onChange={(e) => setInput(e.target.value) }
      ></input>

      <button className="button__search" onClick={handleSearch}>
        <FiSearch size={25} color="#000"></FiSearch>
      </button>

     </div>

     {Object.keys(cep).length > 0 && (
      <main className="main">
      <h2>CEP: {cep.cep}</h2>

      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
      
    </main>
     )}

     
    </div>
  );
 }


export default App;
