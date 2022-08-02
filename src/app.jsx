import { HomePage } from "./pages/home-page/home-page";
import { AboutPage } from "./pages/about-page/about-page";
import { BlogPage } from "./pages/blog-page/blog-page";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";

import styles from "./app.module.css";
import { Blog } from "./components/blog/blog";

const dataName = {
  about: "about",
  costs: "costs",
  contacts: "contacts",
};

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route path="/article/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;

//<code>&lt;Route&gt;</code>
