import { Header } from "../../components/header/header";
import { Intro } from "../../components/intro/intro";
import { Services } from "../../components/services/services";
import { Costs } from "../../components/costs/costs";
import { About } from "../../components/about/about";
import { Contacts } from "../../components/contacts/contacts";
import { Advantages } from "../../components/advantages/advantages";
import { Footer } from "../../components/footer/footer";
import { ScrolledButton } from "../../components/UI/scrolledButton";
import { Blog } from "../../components/blog/blog";
import styles from './home-page.module.css'

const dataName = {
  about: 'about',
  costs: 'costs',
  contacts: 'contacts',
  articles: 'articles',
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
        <Blog name={dataName.articles}/>
        <Contacts name={dataName.contacts} />
      </main>
      <Footer />
      <ScrolledButton />
    </>
  );
};
