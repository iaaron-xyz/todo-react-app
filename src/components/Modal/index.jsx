import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";
import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";

const Modal = () => {
  const { showModal } = useContext(TodoContext);
  console.log(showModal);

  return (
    <div>{showModal && createPortal(<ModalContent />, document.body)}</div>
  );
};

export default Modal;
