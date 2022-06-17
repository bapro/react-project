import UseStateHook from './UseStateHook'
import UseEffectHook from './UseEffectHook'
 import UseRefHook from './UseRefHook'
import MemoHook from './MemoHook'
import ReactUseCallBackHook from './ReactUseCallBackHook'
 import ExampleContext from './ExampleContext'
import {useState } from 'react';
import {ThemeContextProvider} from './PracticeContext'
  import HookUseReducer from './HookUseReducer'
// BETTER OFF UNSING A FUNCTION INSIDE  useState in the case we have heavy function
//this will avoid heavy re-render, and the component will be rendered only once

/*

const [count, setCount] = useState(() => {
		console.log('run');
		return 4;
	});


*/

function ReactHooks() {

 	return (
	<>	
	{/*<h1>useState</h1>
<UseStateHook />
<hr/>
<h1>useEffect</h1>
<UseEffectHook />
<hr/>
<MemoHook />
<hr/>
<h1>useRef</h1>
	<UseRefHook />
<h1>useCallBack</h1>
<ReactUseCallBackHook />


<ThemeContextProvider>

<ExampleContext />

</ThemeContextProvider>*/}

<UseEffectHook />
	</>
	)
}

export default ReactHooks;