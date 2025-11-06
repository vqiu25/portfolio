import "./App.css";
import { ReactLenis } from "lenis/react";
import Header from "./components/app/header/Header";
import Home from "./components/app/home/Home";
import About from "./components/app/about/About";
import Interests from "./components/app/interests/Interests";
import Projects from "./components/app/projects/Projects";
import Experience from "./components/app/experience/Experience";
import Contact from "./components/app/contact/Contact";
import Line from "./components/utility/line/Line";
import Footer from "./components/app/footer/Footer";
import Education from "./components/app/education/Education";
import Extracurriculars from "./components/app/extracurriculars/Extracurriculars";

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
        <Line />
        <Interests />
        <Line />
        <Projects />
        <Line />
        <Education />
        <Line />
        <Experience />
        <Line />
        <Extracurriculars />
        <Line />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
