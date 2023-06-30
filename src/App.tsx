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

  return (
    <ul>
      {props.ufs.map(
          (sigla : string) => <li key={sigla}>{sigla}</li>
        )
      }
    </ul>
  );
};

const AppUFDetalhe = (props : any) => {
  return(
    <div>
      <p>{props.uf.sigla}</p>
      <p>{props.uf.nome}</p>
    </div>
  );
};

const App = () => {
  const [ufs] = useState(["AC", "AL", "AM", "AP",]);
  const [uf] = useState(  [
    {sigla: "AC", nome: "Acre"}, {sigla: "AL", nome: "Alagoas"}, {sigla: "AM", nome: "Amazonas"}, {sigla: "AP", nome: "Amapá"}
  ])

  return (
		<>
			<AppNavBar />
      <AppUFLista
      ufs = {ufs}
      uf = {uf} />
      <AppUFDetalhe uf = {uf}/>
		</>
	);
};

export default App;
