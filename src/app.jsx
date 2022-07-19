import "./App.css";
import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";
import { Services } from "./components/services/services";
import { Costs } from "./components/costs/costs";
import { About } from "./components/about/about";
import { Contacts } from "./components/contacts/contacts";
import { Advantages } from "./components/advantages/advantages";
import { Footer } from "./components/footer/footer";
import { ScrolledButton } from "./components/UI/scrolledButton";
import { HomePage } from "./pages/homePage";
import { AboutPage } from "./pages/aboutPage";
import { Route, Routes } from "react-router-dom";
import styles from "./app.module.css";

const dataName = {
  about: "about",
  costs: "costs",
  contacts: "contacts",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route exact path="about" element={<AboutPage/>} />
    </Routes>

    /* <Header refContainer = {dataName}/>
      <main>
        <Intro />
        <Services />
        <About name={dataName.about}/>
        <Advantages />
        <Costs name={dataName.costs} />
        <Contacts name={dataName.contacts} />
      </main>

      <Footer />
      <ScrolledButton /> */
  );
}

export default App;

//<code>&lt;Route&gt;</code>