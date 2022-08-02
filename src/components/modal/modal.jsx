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
          <form action="" className={modalStyles.form}>
            <p>Выберите тип обращения</p>
            <select name="select_service">
              <option value="1">Личностные проблемы</option>
              <option value="2">Кризисные ситуации</option>
              <option value="3">Работа с подростками</option>
              
            </select>
            <p>Выберите дату и время</p>

            <input
              type="text"
              className={modalStyles.input}
              placeholder="Ваше имя"
            />
            <input
              type="email"
              className={modalStyles.input}
              placeholder="Ваш e-mail"
            />

            <button className={modalStyles.button}>Отправить</button>
          </form>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
