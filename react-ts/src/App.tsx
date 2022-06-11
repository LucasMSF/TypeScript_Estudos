import React from 'react';
import './App.css';

//EDU4 Importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
//EDU5 desestruturação de props
import Destructuring, { UserTypes } from './components/Destructuring';
//EDU 6 Usando Hooks (useState)
import State from './components/State';

function App() {
	//EDU1 - Variáveis
	const name: string = 'Lucas Mathias';
	const age: number = 19;
	const isWorking: boolean = true;

	//EDU2 - Funções
	function greeting(name: string) {
		return `Olá ${name}, seja bem-vindo!`;
	}

	return (
		<div className="App">
			<h1>React Js com Typescript</h1>
			<h3>Dev: {name}</h3>
			<h4>Idade: {age}</h4>
			<h4>Trabalhando atualmente? : {isWorking ? 'Sim' : 'Não'}</h4>
			<br/>
			<h1>{greeting(name)}</h1>
			<FirstComponent />
			<SecondComponent name='Lucas' />
			<Destructuring user='lmathias' name='Lucas Mathias' status={true} userType={UserTypes.Ad} />
			<State />
		</div>
	);
}

export default App;
