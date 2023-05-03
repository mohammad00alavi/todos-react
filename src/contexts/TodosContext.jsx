import { createContext, useState, useCallback } from "react";

const TodosContext = createContext({
  todos: [],
  isLoading: false,
  setIsLoading: () => {},
  error: null,
  totalTodos: 0,
  addTodos: (todo) => {},
  getTodos: () => {},
  deleteTodo: (todoId) => {},
});

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getTodos = useCallback(async () => {
    try {
      const response = await fetch("https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json");
      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await response.json();
      const todoArray = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));

      setTodos(todoArray);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(true);
    }
  },[]);

  const addTodos = useCallback((todo) => {
    fetch("https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  

  const deleteTodo = async (todoId) => {
    const url = `https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`;
    try {
      const response = await fetch(url, { method: "DELETE" });
      if (!response.ok) {
        throw new Error("Failed to delete todo");
      }
      getTodos();
    } catch (error) {
      console.error("Error", error);
    }
  };

  const context = {
    todos,
    isLoading,
    setIsLoading,
    error,
    totalTodos: todos.length,
    addTodos,
    getTodos,
    deleteTodo,
  };

  return <TodosContext.Provider value={context}>{children}</TodosContext.Provider>;
};

export default TodosContext;
