import "./App.css";
import { ReactLenis } from "lenis/react";
import Header from "./components/app/header/Header";
import Home from "./components/app/home/Home";
import About from "./components/app/about/About";
import Interests from "./components/app/interests/Interests";
import Projects from "./components/app/projects/Projects";
import Experience from "./components/app/experience/Experience";
import Contact from "./components/app/contact/Contact";

function App() {
  return (
    <>
      <ReactLenis root />
      <div className="appRoot">
        <section className="appViewport">
          <Header />
          <main className="appContent">
            <Home />
          </main>
        </section>
        <About />
        <Interests />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}

export default App;
