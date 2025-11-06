import "./App.css";
import { ReactLenis } from "lenis/react";
import Header from "./components/app/header/Header";
import Home from "./components/app/home/Home";
import About from "./components/app/about/About";

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
      </div>
    </>
  );
}

export default App;
