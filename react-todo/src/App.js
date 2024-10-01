import React from "react";
import { useState } from "react";
import TodoCreate from "./Components/TodoCreate";
import TodoList from "./Components/TodoList";
import Todo from "./Components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  console.log(todos);

  return (
    <div>
      <TodoCreate onCreateTodo={createTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

// function App() {

//   const [todos, setTodos] = useState([]);

//   const createTodo = (newTodo) => {
//     setTodos([...todos, newTodo]);
//   }

//   console.log(todos)

//   return (
//     <div className="App">

//       <TodoCreate onCreateTodo = {createTodo}/>
//       <TodoList todos={todos} />
//       {/* <Todo /> */}
//     </div>
//   );
// }

// export default App;
