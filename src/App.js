import "./app.css";
import { Header } from "./components/header/header";
import { Intro } from "./components/intro/intro";
import { Services } from "./components/services/services";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Services />
    </>
  );
}

export default App;
