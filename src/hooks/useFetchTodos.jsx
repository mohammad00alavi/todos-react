import { useState, useEffect } from 'react';

export const useFetchTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
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
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, isLoading, error, fetchTodos };
};
