import {
  DELETE_TODO,
  ADD_TODO,
  ASSEPT_CHANGES,
  TOOGLE_TODO,
  SELECT_TODO,
  SAVE_CHANGES,
} from "../actions";

const initialState = {
  todos: [
    {
      id: "1",
      title: "Todo 1",
      isDone: false,
    },
    {
      id: "2",
      title: "Todo 2",
      isDone: true,
    },
    {
      id: "3",
      title: "Todo 3",
      isDone: true,
    },
    {
      id: "4",
      title: "Todo 4",
      isDone: false,
    },
    {
      id: "5",
      title: "Todo 5",
      isDone: false,
    },
  ],
  newTodo: {
    title: "",
    isDone: false,
  },
};

function setNewTodoEmpty() {
  return {
    title: "",
    isDone: false,
  };
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
        newTodo: setNewTodoEmpty(),
      };

    case ASSEPT_CHANGES:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          title: payload,
        },
      };
    case TOOGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case SELECT_TODO:
      return {
        ...state,
        newTodo: {
          ...state.newTodo,
          ...state.todos.find((item) => item.id === payload),
        },
      };
    case SAVE_CHANGES:
      return {
        todos: state.todos.map((todo) =>
          todo.id === payload.id ? payload : todo
        ),
        newTodo: setNewTodoEmpty(),
      };

    default:
      return state;
  }
}
