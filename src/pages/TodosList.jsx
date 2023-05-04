import Todo from "../components/Todo";
import { useContext, useEffect } from "react";
import TodosContext from "../contexts/TodosContext";
import { Link } from "react-router-dom";

export default function TodosList() {
  const {todos, isLoading, getTodos } = useContext(TodosContext);

  useEffect(() => {
    getTodos();
  }, []);

  const addTodoButton = (
      <p className="card">
        <Link to={'/'}>
          Add Todo
        </Link>
      </p>
  )

  if (isLoading) { 
    return (
      <>
        <p>There is no todos.</p>
        {addTodoButton}
      </>

    )
  }

  return (
    <div>
      <h1>All todos</h1>
      {addTodoButton}
      {todos?.map(item => {
        return <Todo key={item.id} title={item.title} todoId={item.id} />
      })}
    </div>
  )
}

