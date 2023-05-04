import TodosContext from '../contexts/TodosContext';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Navbar () {
  const { totalTodos } = useContext(TodosContext)
  return (
    <>
      <div>
        <Link to={'/'}> Home </Link>
        <Link to={'/todos-list'}> Todos List {totalTodos}</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}