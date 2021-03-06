import React, {useState } from 'react';
import {ACTIONS} from './HookUseReducer'

function  Todo({todo, dispatch}) {
	
return (
<tr>
<th style={{color:todo.complete ? '#AAA' : '#000'}}>
{todo.name}
</th>
<th>
<div>
<button className="btn btn-default" onClick={ () => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })	}>Toggle</button>
<button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
<button className="btn btn-danger" onClick={ () => dispatch({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })	}>Delete</button>
</div>
</th>
</tr>

)	
}



export default Todo;	



