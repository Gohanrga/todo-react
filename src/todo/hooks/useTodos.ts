import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const useTodos = () => {
  const { todoState, toogleTodo } = useContext(TodoContext);
  return {
    todos: todoState.todos,
    toogleTodo,
  };
};
 