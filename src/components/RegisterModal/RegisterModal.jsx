import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal() {
  return (
    <ModalWithForm title="Sign up">
      <label>
        Email
        <input type="email" placeholder="Enter email" />
      </label>

      <label>
        Password
        <input type="password" placeholder="Enter password" />
      </label>

      <label>
        Username
        <input type="text" placeholder="Enter your username" />
      </label>

      <button type="submit">Sign up</button>
    </ModalWithForm>
  );
}

export default RegisterModal;