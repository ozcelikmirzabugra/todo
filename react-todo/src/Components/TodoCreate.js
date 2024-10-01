import React, { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const clearSearch = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 9999999),
      content: newTodo,
    };

    onCreateTodo(request);
    clearSearch();
  };

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
      />
      <button onClick={createTodo}> Add </button>
    </div>
  );
}

export default TodoCreate;

// function TodoCreate({ onCreateTodo }) {

//   const clearInput = () => {
//     setNewTodo('')
//   }
//   const [newTodo, setNewTodo] = useState('');

//   const createTodo = () => {
//     if(!newTodo)
//       return;

//     const request = {
//       id : Math.floor(Math.random() * 9999999),
//       content: newTodo
//     }
//     onCreateTodo(request)
//     clearInput()
//   }
//   return (

//   )
// }

// export default TodoCreate
