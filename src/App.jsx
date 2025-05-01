import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
