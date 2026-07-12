import { useState } from "react";
import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSwitchToRegister, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isValid = email.trim() !== "" && password.trim() !== "";

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin({ email, password });
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setEmailError(evt.target.validationMessage);
  }
  
  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setPasswordError(evt.target.validationMessage);
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
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error">{emailError}</span>

      <label className="modal__label" htmlFor="login-password">
        Password
      </label>
      <input
        id="login-password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        required
        minLength="6"
      />

      <span className="modal__error">{passwordError}</span>
    </ModalWithForm>
  );
}

export default LoginModal;