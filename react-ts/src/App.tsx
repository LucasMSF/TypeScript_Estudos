import React, { createContext } from 'react';
import './App.css';

//EDU4 Importação de componentes
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
//EDU5 desestruturação de props
import Destructuring, { UserTypes } from './components/Destructuring';
//EDU 6 Usando Hooks (useState)
import State from './components/State';
import Context from './components/Context';

//EDU 8 Types e exibição condicional
type TextOrNull = string | null;

//9 Context API
interface IAppContext {
	language: string,
	framework: string,
	projects: number
}

const contextData: IAppContext = {
	language: 'Typescript',
	framework: 'Express',
	projects: 7
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
	//EDU1 - Variáveis
	const name: string = 'Lucas Mathias';
	const age: number = 19;
	const isWorking: boolean = true;
	let text: TextOrNull = 'text';
	//text = null;

	//EDU2 - Funções
	function greeting(name: string) {
		return `Olá ${name}, seja bem-vindo!`;
	}

	return (
		<AppContext.Provider value={contextData}>
			<div className="App">
				<h1>React Js com Typescript</h1>
				<h3>Dev: {name}</h3>
				<h4>Idade: {age}</h4>
				<h4>Trabalhando atualmente? : {isWorking ? 'Sim' : 'Não'}</h4>
				<br />
				<h1>{greeting(name)}</h1>
				<FirstComponent />
				<SecondComponent name='Lucas' />
				<Destructuring user='lmathias' name='Lucas Mathias' status={true} userType={UserTypes.Ad} />
				<State />
				{text && `Possui texto: ${text}`}
				<hr />
				<h3>Exemplo de contexto</h3>
				<Context />
			</div>
		</AppContext.Provider>
	);
}

export default App;
