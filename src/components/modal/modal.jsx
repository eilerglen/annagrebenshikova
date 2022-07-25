import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import whatsApp from "../../images/icons/whatsApp.svg";
import { ContactItem } from "../contactItem/contactItem";
import telegram from "../../images/icons/telegram.svg";
import iconClose from "../../images/icons/closeIcon.png";
import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";

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
        <span
          style={{ backgroundImage: `url(${iconClose})` }}
          className={modalStyles.close}
          onClick={onClose}
        ></span>
        <div className={modalStyles.container}>
          <ContactItem
            src={phone}
            href="tel: +79160792172"
            alt="Телефон"
            value="+7-916-079-21-72"
          />
          <ContactItem
            src={email}
            href="mailto: annasmeet@mail.ru"
            alt="Почта"
            value="annasmeet@mail.ru"
          />
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
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
