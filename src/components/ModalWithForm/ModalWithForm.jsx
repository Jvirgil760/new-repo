import "./ModalWithForm.css";

function ModalWithForm({ title, children }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <button type="button" className="modal__close">
          X
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form">
          {children}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;