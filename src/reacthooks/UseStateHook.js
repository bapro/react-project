
import { useState, useRef } from 'react';

// BETTER OFF UNSING A FUNCTION INSIDE  useState in the case we have heavy function
//this will avoid heavy re-render, and the component will be rendered only once

/*

const [count, setCount] = useState(() => {
		console.log('run');
		return 4;
	});


*/

function UseStateHook() {
 	
	
	const [names, setNames] = useState([]);
	const [name, setName] = useState("sdfsdfs");
	 const focusInput = useRef();
	const increment = (e) => {
		e.preventDefault();
		setNames( [...names, {id: names.length, name: name} ] );
		setName("");
		focusInput.current.focus();
	}
	
	
	
	return (
	<>
	<form onSubmit={increment} >
	<input 
	//ref={focusInput}
	type="text"
	value={name}
	onChange={ (e) => setName(e.target.value)}
	/>
	<button>Add</button>
	</form>

	<ul>
	{names.map( list => (
	<li key={list.id} >{list.name}</li>
	
	) )}
	</ul>
	</>
	
	)
	
}

export default UseStateHook;