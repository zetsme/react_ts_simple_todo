import TodoItem from './TodoItem';
import { ITodo, ITodoActions } from './types';

interface ITodoListProps extends ITodoActions {
  todos: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...{ deleteTodo, toggleTodo }} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
