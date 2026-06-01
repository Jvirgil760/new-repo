import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal() {
  return (
    <ModalWithForm title="Sign in">
      <label>
        Email
        <input type="email" placeholder="Enter email" />
      </label>

      <label>
        Password
        <input type="password" placeholder="Enter password" />
      </label>

      <button type="submit">Sign in</button>
    </ModalWithForm>
  );
}

export default LoginModal;