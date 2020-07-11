import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { connect } from "react-redux";
import { deleteTodo, toogleTodo, selectTodo } from "../../store/actions";
import TodoInput from "../TodoInput/TodoInput";
import "./Todo.css";

function Todo({ todos, deleteTodo, toogleTodo, selectTodo }) {
  return (
    <div className="todo">
      <header>Todo List</header>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toogleTodo={toogleTodo}
            selectTodo={selectTodo}
          />
        ))}
      </ul>
      <TodoInput />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchStateToProps = {
  deleteTodo,
  toogleTodo,
  selectTodo,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(Todo);
