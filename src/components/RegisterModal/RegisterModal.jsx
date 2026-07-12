import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  onClose,
  onSwitchToLogin,
  onRegister,
  serverError = "",
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function handleUsernameChange(evt) {
    setUsername(evt.target.value);
    setUsernameError(evt.target.validationMessage);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setEmailError(evt.target.validationMessage);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
    setPasswordError(evt.target.validationMessage);
  }

  const isValid =
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    !usernameError &&
    !emailError &&
    !passwordError;

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ username, email, password });
  }

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
        onChange={handleEmailChange}
        required
      />
      <span className="modal__error">{emailError}</span>

      <label className="modal__label" htmlFor="register-password">
        Password
      </label>
      <input
        id="register-password"
        type="password"
        className="modal__input"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
        required
        minLength="6"
      />
      <span className="modal__error">{passwordError}</span>

      <label className="modal__label" htmlFor="register-username">
        Username
      </label>
      <input
        id="register-username"
        type="text"
        className="modal__input"
        placeholder="Enter your username"
        value={username}
        onChange={handleUsernameChange}
        required
        minLength="2"
        maxLength="30"
      />
      <span className="modal__error">{usernameError}</span>

      {serverError && (
        <span className="modal__error modal__error_type_server">
          {serverError}
        </span>
      )}
    </ModalWithForm>
  );
}

export default RegisterModal;