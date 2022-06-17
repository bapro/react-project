
import React, { useState, useCallback} from 'react';
import List from './List'


function ReactUseCallBackHook() {
 	
	
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false)
	
	const getNumbers = useCallback(() => {
		return [number, number + 1, number + 2 ]
	}, [number])
	
const theme = {
	backgroundColor: dark ? '#333' : '#FFF',
	color: dark ? '#FFF' : '#333',
	
}
	
	return (
	<div style={theme}>
<input 
type="number"
value={number}
onChange={ e => setNumber(parseInt(e.target.value)) }
/>
<button onClick={ () => setDark( prevDark => ! prevDark) }>
Toggle Theme
</button>
	{/*{items.map( item => item ) }*/}
	<List getNumbers={getNumbers} ></List>
	</div>
	
	)
	
}



export default ReactUseCallBackHook;