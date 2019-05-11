import React, { useContext } from "react";
import TodoContext from "../context";

export default function TodoList() {
  const { state } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
