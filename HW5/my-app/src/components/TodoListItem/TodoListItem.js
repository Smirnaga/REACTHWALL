import React from "react";
import "./TodoListItem.css";

function TodoListItem({ todo, deleteTodo, toogleTodo, selectTodo }) {
  return (
    <div className="todo-list-item">
      <li className="list-item">
        <input
          type="checkbox"
          defaultChecked={todo.isDone}
          //checked={todo.isDone}
          onClick={() => toogleTodo(todo.id)}
        />
        <span className={`title ${todo.isDone ? "done" : ""}`}>
          {todo.title}
        </span>
        <button onClick={() => deleteTodo(todo.id)}>&#10006;</button>
      </li>
    </div>
  );
}

export default TodoListItem;
