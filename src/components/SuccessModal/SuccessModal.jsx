import "../ModalWithForm/ModalWithForm.css";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSwitchToLogin }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container modal__container_type_success">
        <button type="button" className="modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__success-title">
          Registration successfully completed!
        </h2>

        <button
          type="button"
          className="modal__success-link"
          onClick={onSwitchToLogin}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;