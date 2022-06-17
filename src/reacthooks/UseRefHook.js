
import { useState, useEffect, useRef } from 'react';

function UseRefHook() {
	const [name, setName] = useState("");
	const renderCount = useRef(1);
	 const prevName = useRef('');
useEffect( () => {
renderCount.current = 	renderCount.current + 1;
});
	

useEffect( () => {
prevName.current =  name;
});


	
return(
<>
<input 
	type="text"
	value={name}
	onChange={ (e) => setName(e.target.value)}
	/>
	<div>
	<p>I my name is {name} </p>
	<p>my previous name is {prevName.current} </p>
	<p>I render {renderCount.current} times</p>
	</div>
</>

)	
	
}

export default UseRefHook;