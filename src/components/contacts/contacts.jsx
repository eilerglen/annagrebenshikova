import styles from "./contacts.module.css";
import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";
import whatsApp from "../../images/icons/whatsApp.svg";
import telegram from "../../images/icons/telegram.svg";
import { ContactItem } from "../contactItem/contactItem";

export const Contacts = () => {
  return (
    <section className={styles.intro} id="contacts">
      <div className={styles.prev}>
        <p className={styles.title}>
          {" "}
          Запишитесь на консультацию или задайте вопрос
        </p>

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
    </section>
  );
};
