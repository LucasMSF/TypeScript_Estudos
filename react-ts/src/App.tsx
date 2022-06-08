import React from 'react';
import './App.css';

function App() {
	//EDU1 - Variáveis
	const name: string = 'Lucas Mathias';
	const age: number = 19;
	const isWorking: boolean = true;

	//EDU2 - Variáveis
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

		</div>
	);
}

export default App;
