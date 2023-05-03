import styles from './styles/Home.module.css';
import { TodosProvider } from './contexts/TodosContext';
import TodosList from './pages/TodosList';
import Home from './pages/Home';
import { createBrowserRouter, Route, createRoutesFromElements, Link, Outlet, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path='/todos-list' element={<TodosList />} />
      </Route>
    )
  )

  return (
    <TodosProvider>
      <div className={styles.container}>
        <RouterProvider router={router} />
      </div>
    </TodosProvider>
  )
}

export default App;

const Root = () => {

  return (
    <>
      <div>
        <Link to={'/'}> Home </Link>
        <Link to={'/todos-list'}> Todos List </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
