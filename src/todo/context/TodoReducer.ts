import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "toggleTodo": {
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map(({...todo}) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    } 
    default:
      return state;
  }
};
