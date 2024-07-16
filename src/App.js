import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Connect from "./Components/Connect";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
