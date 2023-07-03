import { useState } from "react";
import "./App.css";

const AppNavBar = () => {
	return (
		<div className="card">
			<h1>Unidades Federativas</h1>
		</div>
	);
};

const AppUFLista = (props : any) => {
  const tratarClique = (evento : any) => {
    console.log(evento.target.innerText);
    const sigla = evento.target.innerText;

    const lista = props.dados.filter(
      (uf:any) => {return uf.sigla == sigla;}
    )
    console.log(lista)
    props.mudar(lista[0])
  }
  return (
    <ul>
      {props.dados.map(
          (item : any) => 
          <li
          key={item.sigla}
          onClick={tratarClique}>
            {item.sigla}
          </li>
        )}
    </ul>
  );
};

const AppUFDetalhe = (props : any) => {

  return(
    <div className="card">
      <p>{props.dados.sigla}</p>
      <p>{props.dados.nome}</p>
    </div>
  );
};

const App = () => {
  const [ufs, setUFs ] = useState([
    {sigla: "RN", nome: "Rio Grande do Norte"}, 
    {sigla: "CE", nome: "Ceará"},
    {sigla: "PB", nome: "Paraíba"}, 
  ])

  const [uf, setUF] = useState({
    sigla: 'RN',
    nome: 'Rio Grande do Norte'
  })


  return (
		<>
			<AppNavBar />
      <AppUFDetalhe dados = {uf}/>
      <AppUFLista dados = {ufs} mudar={setUF}/>
		</>
	);
};

export default App;
