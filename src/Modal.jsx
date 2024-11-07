import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div
        className={
          isModalOpen ? 'modal-container show-modalC' : 'modal-container'
        }
      >
        <h3>CONTENT</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;
