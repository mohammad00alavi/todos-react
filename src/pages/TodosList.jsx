import Todo from "../components/Todo";
import { useState, useEffect } from "react";

export default function TodosList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState([])
  const fetchTodos = () => {
    fetch('https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
    .then(response => {
      return response.json()
    }).then(data => {
      if (data) {
        const todoArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setTodos(todoArray);
        setIsLoading(false)
      } else {
        setTodos([]);
      }
    });
  }

  useEffect(()=> {
    fetchTodos();
  },[])
  if (isLoading) { 
    return (
      <p>Loading todos...</p>
    )
  }
  if (!todos.length) {
    return <p>There are no todos</p>;
  }
  return (
    <div>
      <h1>All todos</h1>
      {todos?.map(item => {
        return <Todo key={item.id} title={item.title} todoId={item.id} fetchTodos={fetchTodos} />
      })}
    </div>
  )
}
