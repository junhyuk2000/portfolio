import Hero from "./sections/Hero";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Project from "./sections/Project";
import Footer from "./components/layout/Footer";
import ScrollMotion from "./components/common/ScrollMotion";
import "./App.css";

function App() {
  return (
    <div className="wrap">
     <ScrollMotion/>
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skill"><Skill /></section>
        <section id="projects"><Project /></section>
      </main>
      <Footer/>
  </div>
  );
}

export default App;
