export const fetchTodos = () => {
  return fetch('https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
  .then(response => {
    return response.json()
  }).then(data => {
      const todoArray = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      console.log(todoArray)
      return todoArray;
  });
}