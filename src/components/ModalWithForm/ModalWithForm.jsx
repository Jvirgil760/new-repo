import "./ModalWithForm.css";

function ModalWithForm({
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  isValid,
  children,
  footer,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__overlay" onClick={onClose} />
      <div className="modal__container">
        <button type="button" className="modal__close" onClick={onClose}>
          ×
        </button>

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" onSubmit={onSubmit} noValidate>
          {children}

          <button
            type="submit"
            className={`modal__submit ${isValid ? "modal__submit_enabled" : ""}`}
            disabled={!isValid}
          >
            {buttonText}
          </button>
        </form>

        {footer && <div className="modal__footer">{footer}</div>}
      </div>
    </div>
  );
}

export default ModalWithForm;