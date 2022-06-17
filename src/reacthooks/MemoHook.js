
import React,{ useState, useMemo  } from 'react';

function MemoHook() {
   const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=> {return expensiveCalculation(count);}, [count]);

 const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };	
	
return(
    <div>
      <div>
        <h2>Memo Example</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
	  
	  <Test count={count} ></Test>
    </div>

)	
	
}


const Test = React.memo(({count}) => {
	console.log('rendered');
	return <p>number is changed {count}</p>
}
);


const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
export default MemoHook;