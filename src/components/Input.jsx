import { useState } from "react";
import { useNavigate } from "react-router";

export default function Input() {
  const [todo, setTodo] = useState({title: ''});
  const navigate = useNavigate();
  const todoHandler = () => {
    fetch('https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      navigate('/todos-list')
    });
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    todoHandler();
  };
  const inputChangeHandler = (event) => {
    setTodo({title: event.target.value});
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input type='text' required value={todo.title} onChange={inputChangeHandler} placeholder="Add your todo"/>
      <button type="submit">Submit</button>
    </form>
  )
}
