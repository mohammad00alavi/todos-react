import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState, useContext } from "react";
import TodosContext from "../contexts/TodosContext";

export default function Todo({ title, todoId }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { deleteTodo } = useContext(TodosContext);
  const deleteHandler = () => {
    setModalIsOpen(true);
  }
  const closeModalHandler = () => {
    setModalIsOpen(false);
  }
  const confirmModalHandler = () => {
    setModalIsOpen(false);
    deleteTodo(todoId);
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
