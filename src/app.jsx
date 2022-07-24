import "./App.css";
import { HomePage } from "./pages/home-page/home-page";
import { AboutPage } from "./pages/about-page/about-page";
import { BlogPage } from "./pages/blog-page/blog-page";
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
      <Route exact path="blog" element={<BlogPage/>} />
    </Routes>

  );
}

export default App;

//<code>&lt;Route&gt;</code>