import { useState } from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ isOpen, onClose, onSwitchToLogin, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [serverError] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ email, password, username });
  }

  const isValid =
  email.trim() !== "" &&
  password.trim() !== "" &&
  username.trim() !== "";

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
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
            onClick={onSwitchToLogin}
          >
            Sign in
          </button>
        </>
      }
    >
      <label className="modal__label" htmlFor="register-email">
        Email
      </label>
      <input
        id="register-email"
        type="email"
        className="modal__input"
        placeholder="Enter email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <span className="modal__error" />

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <span className="modal__error" />

      <label className="modal__label" htmlFor="register-username">
        Username
      </label>
      <input
        id="register-username"
        type="text"
        className="modal__input"
        placeholder="Enter your username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
      <span className="modal__error" />

      {serverError && (
        <span className="modal__error modal__error_type_server modal__error_visible">
          {serverError}
        </span>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;