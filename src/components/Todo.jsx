import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

export default function Todo({title, todoId, fetchTodos}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  }
  const closeModalHandler = () => {
    setModalIsOpen(false);
  }
  const deleteAction = () => {
    const url = `https://todos-react-8c26d-default-rtdb.europe-west1.firebasedatabase.app/todos/${todoId}.json`;
    fetch(url, {
      method: 'DELETE'
    })
    .then((response) => {
      if(!response.ok) {
        throw new Error ('Failed to delete  todo');
      }
      console.log('todo deleted seccessfully')
      fetchTodos()
    })
    .catch((error) => {
      console.error('Error', error)
    })
  }
  const confirmModalHandler = () => {
    setModalIsOpen(false);
    deleteAction();
  }
  
  return (
    <div className="card">
      <h2>{title}</h2>
      <button className="btn" onClick={deleteHandler}>Delete</button>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  )
}
