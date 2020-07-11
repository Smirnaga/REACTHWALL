import React from "react";
import { connect } from "react-redux";
import { addTodo, asseptChanges, saveChanges } from "../../store/actions";
import "./TodoInput.css";

function TodoInput({ newTodo, asseptChanges, addTodo, saveChanges }) {
  function submitTodo(e) {
    e.preventDefault();
    newTodo.id ? saveChanges(newTodo) : addTodo(newTodo);
  }

  return (
    <form action="" onSubmit={submitTodo}>
      <input
        className="input-todo"
        type="text"
        name="title"
        value={newTodo.title}
        onChange={(e) => asseptChanges(e.target.value)}
        placeholder="Enter new todo..."
      />
      {newTodo.id ? (
        <button type="submit" className="save-button">
          Save Changes
        </button>
      ) : (
        <button type="submit" className="add-button">
          Add New Todo
        </button>
      )}
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    newTodo: state.newTodo,
  };
};

const mapDispatchStateToProps = {
  asseptChanges,
  addTodo,
  saveChanges,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(TodoInput);
