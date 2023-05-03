export default function Todo({title, todoId}) {
  const deleteHandler = () => {
    const url = `https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`;
    fetch(url, {
      method: 'DELETE'
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error ('Failed to delete  todo');
      }
      console.log('todo deleted seccessfully')
    })
    .catch((error) => {
      console.error('Error', error)
    })
  }
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  )
}
