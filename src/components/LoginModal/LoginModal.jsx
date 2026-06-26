import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSwitchToRegister, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password });
  }
  
  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      footer={
        <>
          <span className="modal__footer-text">or </span>
          <button
            type="button"
            className="modal__switch-button"
            onClick={onSwitchToRegister}
          >
            Sign up
          </button>
        </>
      }
    >
      <label className="modal__label" htmlFor="login-email">
        Email
      </label>
      <input
        id="login-email"
        type="email"
        className="modal__input"
        placeholder="Enter email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        required
      />

      <span className="modal__error" />

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />

      <span className="modal__error" />
    </ModalWithForm>
  );
}

export default LoginModal;