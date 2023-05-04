import { useState, useContext } from "react";
import TodosContext from "../contexts/TodosContext";
import { useNavigate } from "react-router";

export default function Input() {
  const [todo, setTodo] = useState({title: ''});
  const {addTodos} = useContext(TodosContext);
  const navigate = useNavigate();
  
  const formSubmitHandler = (event) => {
    event.preventDefault();
    addTodos(todo)
    navigate('/todos-list')
  };
  const inputChangeHandler = (event) => {
    setTodo({title: event.target.value});
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input type='text' required value={todo.title} onChange={inputChangeHandler} placeholder="Add your todo"/>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}
