import styles from "./contacts.module.css";
import phone from "../../images/icons/phone.svg";
import email from "../../images/icons/email.svg";

export const Contacts = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.prev}>
        <p className={styles.title}>
          {" "}
          Запишитесь на консультацию или задайте вопрос
        </p>

        <div className={styles.contactItem}>
          <img src={phone} alt="Телефон" className={styles.img} />
          <a href = "tel: +79160792172" className={styles.value}>+7-916-079-21-72</a>
        </div>
        <div className={styles.contactItem}>
          <img src={email} alt="Почта" className={styles.img} />
          <a href ='mailto: annasmeet@mail.ru' className={styles.value}>annasmeet@mail.ru</a>
        </div>
      </div>
    </section>
  );
};
