import { useEffect, useRef, useState } from 'react';

interface IFormProps {
  addTodo: (inputValue: string) => void;
}
const InputForm: React.FC<IFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => inputRef.current?.focus(), []);
  return (
    <form onSubmit={onSubmit}>
      <input ref={inputRef} type='text' onChange={onChange} value={inputValue} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default InputForm;
