import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import whatsApp from "../../images/icons/whatsApp.svg";
import { ContactItem } from "../contactItem/contactItem";
import telegram from "../../images/icons/telegram.svg";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ title, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={modalStyles.modal}>
        <h2 className={modalStyles.heading}>{title}</h2>
        <span className={modalStyles.close} onClick={onClose}></span>
        <ContactItem
          src={whatsApp}
          href="https://wa.me/79160792172"
          alt="WhatsApp"
          value="Написать в WhatsApps"
        />
        <ContactItem
          src={telegram}
          href="https://wa.me/79160792172"
          alt="Telegram"
          value="Написать в Telegram"
        />
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
