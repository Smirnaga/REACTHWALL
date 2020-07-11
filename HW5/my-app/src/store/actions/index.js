export const DELETE_TODO = "DELETE_TODO";
export const ADD_TODO = "ADD_TODO";
export const ASSEPT_CHANGES = "ASSEPT_CHANGES";
export const TOOGLE_TODO = "TOOGLE_TODO";
export const SELECT_TODO = "SELECT_TODO";
export const SAVE_CHANGES = "SAVE_CHANGES";

export function deleteTodo(id) {
  return { type: DELETE_TODO, payload: id };
}

export function addTodo(todo) {
  return { type: ADD_TODO, payload: { ...todo, id: Date.now() } };
}

export function asseptChanges(value) {
  return { type: ASSEPT_CHANGES, payload: value };
}

export function toogleTodo(id) {
  return { type: TOOGLE_TODO, payload: id };
}

export function selectTodo(id) {
  return {
    type: SELECT_TODO,
    payload: id,
  };
}

export function saveChanges(todo) {
  return {
    type: SAVE_CHANGES,
    payload: todo,
  };
}
