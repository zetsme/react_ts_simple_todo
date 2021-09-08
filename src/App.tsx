import { useState } from 'react';
import InputForm from './InputForm';
import TodoList from './TodoList';
import { ITodo } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (inputValue: string): void => {
    setTodos([...todos, { id: Date.now(), title: inputValue, completed: false }]);
  };
  const deleteTodo = (id: number): void => setTodos(todos.filter((todo) => todo.id !== id));
  const toggleTodo = (id: number): void =>
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  return (
    <div>
      <InputForm {...{ addTodo }} />
      <TodoList {...{ todos, deleteTodo, toggleTodo }} />
    </div>
  );
};

export default App;
