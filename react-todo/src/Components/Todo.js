import React from 'react'

function Todo({todo}) {
  return (
    <div>
      <div>
        {todo.content}
      </div>
    </div>
  )
}

export default Todo