import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import BackToTopButton from "./components/BackToTopButton";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects />
      <hr />
      <Skills />
      <hr />
      <Experience />
      <hr />
      <Education />
      <hr />
      <Contact />

      <BackToTopButton />
    </div>
  );
};

export default App;
