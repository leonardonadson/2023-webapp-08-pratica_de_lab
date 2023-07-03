import { useState } from 'react';
import './App.css'
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://infoweb-api.vercel.app/',
});

const AppNavBar = (props: any) => {
  const tratarClique = () => {
    props.carregado(false);
    api.get('/uf')
      .then((resposta: any) => resposta.data.data)
      .then((json) => props.mudar(json));
  };

  return (
    <div className="card">
      <h1>Unidades Federativas</h1>
      {
        props.carregando && (<button onClick={tratarClique}>Atualizar Lista de UFs</button>)
      }
    </div>
  );
}

const AppUFLista = (props : any) => {
  /*
  // Tratar clique de forma manual: 
  //
  const tratarClique = (evento : any) => {
    console.log(evento.target.innerText);
    const sigla = evento.target.innerText;

    const lista = props.dados.filter(
      (uf:any) => {return uf.sigla == sigla;}
    )
    console.log(lista)
    props.mudar(lista[0])
  }
  */

  return (
    <div className="card">
    {props.dados.map((item : any) => 
    <button
      key={item.sigla}
      onClick={() => props.mudar(item)}>
      {item.sigla}
    </button>)}
    </div>
  );
};

const AppUFDetalhe = (props : any) => {

  return(
    <div className="card">
        <p>ID: {props.dados.id}</p>
        <p>Sigla: {props.dados.sigla}</p>
	<p>Nome: {props.dados.nome}</p>
    </div>
  );
};

const App = () => {
  const [uf, setUF] = useState({
    id: '',
    sigla: '', 
    nome: ''
  });
  const [ufs, setUFs] = useState([]);
  const [carregando, setCarregando] = useState(true);

  return (
	<>
	<AppNavBar mudar ={setUFs} carregando={carregando} carregado = {setCarregando}/>
      	<AppUFDetalhe dados = {uf}/>
      	<AppUFLista dados = {ufs} mudar={setUF}/>
	</>
	);
};

export default App;
