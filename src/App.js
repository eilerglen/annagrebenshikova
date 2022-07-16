import "./App.css";
import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";
import { Services } from "./components/services/services";
import {Costs} from './components/costs/costs'
import { About} from './components/about/about'
import { Contacts } from "./components/contacts/contacts";
import { Advantages } from "./components/advantages/advantages";
import {Footer} from './components/footer/footer'

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
      <About/>
      <Advantages/>
      <Costs />
      <Contacts />
      <Footer/>
    </>
  );
}

export default App;
