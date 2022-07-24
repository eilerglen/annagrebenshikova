import { Header } from "../../components/header/header";
import { Intro } from "../../components/intro/intro";
import { Services } from "../../components/services/services";
import { Costs } from "../../components/costs/costs";
import { About } from "../../components/about/about";
import { Contacts } from "../../components/contacts/contacts";
import { Advantages } from "../../components/advantages/advantages";
import { Footer } from "../../components/footer/footer";
import { ScrolledButton } from "../../components/UI/scrolledButton";
import styles from './home-page.module.css'

const dataName = {
  about: 'about',
  costs: 'costs',
  contacts: 'contacts'
}
export const HomePage = () => {

  return (
    <>
      <Header refContainer={dataName} />
      <main className={styles.main}>
        <Intro />
        <Services />
        <About name={dataName.about} />
        <Advantages />
        <Costs name={dataName.costs} />
        <Contacts name={dataName.contacts} />
      </main>
      <Footer />
      <ScrolledButton />
    </>
  );
};
