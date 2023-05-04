export default function Modal({ onCancel,onConfirm }) {
  const cancelHandler = () => {
    onCancel();
  },
  confirmHandler = () => {
    onConfirm();
  };
  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className="btn" onClick={cancelHandler}>Cancel</button>
      <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
  )
}
