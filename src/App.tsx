import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="appViewport">
      <Header />
      <main className="appContent">
        <Home />
        {/* other sections/components will go here and be revealed by scrolling */}
      </main>
    </div>
  );
}

export default App;
