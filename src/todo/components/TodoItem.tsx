import { Todo } from "../interfaces/interfaces";
import { useTodos } from "../hooks/useTodos";

interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {

  //const {toogleTodo} = useContext(TodoContext)
  const {toogleTodo} = useTodos()
  const handleDbClick = () => {
    toogleTodo(todo.id)
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: todo.completed ? "line-through" : "",
      }}
      onDoubleClick={handleDbClick}
    >
      {todo.desc}
    </li>
  );
};

export default TodoItem;
