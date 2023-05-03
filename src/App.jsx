import './styles/index.css';
import { TodosProvider } from './contexts/TodosContext';
import TodosList from './pages/TodosList';
import Home from './pages/Home';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='/todos-list' element={<TodosList />} />
      </Route>
    )
  )

  return (
    <TodosProvider>
      <div className={'container'}>
        <RouterProvider router={router} />
      </div>
    </TodosProvider>
  )
}

export default App;


