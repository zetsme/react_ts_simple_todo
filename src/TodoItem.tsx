import { ITodo, ITodoActions } from './types';

interface ITodoItemProps extends ITodo, ITodoActions {}

const TodoItem: React.FC<ITodoItemProps> = ({ completed, deleteTodo, id, title, toggleTodo }) => {
  return (
    <div>
      <input type='checkbox' checked={completed} onChange={() => toggleTodo(id)} />
      {title}
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
