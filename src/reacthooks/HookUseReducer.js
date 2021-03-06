import React, {useState, useReducer} from 'react';
  import Todo from './Todo';
  import Modal from './Modal'
  
export const ACTIONS = {
	ADD_TODO:'add-todo',
	TOGGLE_TODO: 'toggle-todo',
	DELETE_TODO: 'delete-todo'
}


function reducer(todos, action){
	switch(action.type){
	case ACTIONS.ADD_TODO:
return [...todos, newTodo(action.payload.name) ]
     case ACTIONS.TOGGLE_TODO:
	 return todos.map( todo => {
		 if(todo.id === action.payload.id){
			 return {...todo, complete: !todo.complete}
		 }
		 return todo
	 })
   case ACTIONS.DELETE_TODO:
   return todos.filter( todo =>  todo.id !== action.payload.id)
   default:
   return todos
}
}
function newTodo(name){
	return {id: Date.now(), name: name, complete: false}
	
	
}

function  HookUseReducer() {
	const [todos, dispatch] = useReducer(reducer, [])
const [name, setName] = useState('')
const [itemSearch, setItemsSearch]=useState('');


const searchResult = todos.filter( (item) => {
	return item.name.toLocaleLowerCase().includes(itemSearch);
	
});







function handleSubmit(e){
	e.preventDefault()
dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name} })	
setName('')	
}


	
return (
<>
<form onSubmit={handleSubmit}>
<input
 type="text"
value={name}
onChange={ (e) => {
		setName(e.target.value);
	
		
	}}
/>
</form>



<hr/>

<table className="table table-bordered table-striped">
 <thead>
<tr>
<td>Name</td><td>Action

<input type='search'
className='search-data'
placeholder='buscar'
onChange= { (event) => {
const val = event.target.value.toLocaleLowerCase();
setItemsSearch(val);
}}

 />
</td>
</tr>
 </thead>
  <tbody>
{searchResult.map(todo => {
	return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
})}
  </tbody>
</table>
<Modal />
</>
)	
}



export default HookUseReducer;	



