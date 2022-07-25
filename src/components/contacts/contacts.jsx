import styles from "./contacts.module.css";
import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";
import whatsApp from "../../images/icons/whatsApp.svg";
import telegram from "../../images/icons/telegram.svg";
import { ContactItem } from "../contactItem/contactItem";

export const Contacts = ({ name }) => {
  return (
    <section className={styles.contacts} name={name}>
      <p className={styles.title}>
        {" "}
        Запишитесь на консультацию или задайте вопрос
      </p>
      <div className={styles.wrapper}>
      
        <div className={styles.contactContainer}>
        <h3>Мои контакты</h3>
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
          <div className={styles.block}>
            <ContactItem
              src={whatsApp}
              href="https://wa.me/79160792172"
              alt="WhatsApp"
              value=""
            />
            <ContactItem
              src={telegram}
              href="https://wa.me/79160792172"
              alt="Telegram"
              value=""
            />
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.subtitle}>Напишите мне</h3>
          <form action="" className={styles.form}>
            <input 
             type="text" 
             className={styles.input}
             placeholder="Ваше имя"
             />
            <input 
            type="text" 
            className={styles.input}
            placeholder="Ваш e-mail"
            />
            <textarea 
            type="text" 
            name="message"
            // cols="33"
            rows = "5"
            placeholder="Сообщение"
            />
            <button className={styles.button}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
