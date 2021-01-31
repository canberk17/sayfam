import React from 'react'
import './App.css';
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from"./components/Projects";
import Footer from"./components/Footer";



function App() {
  return (
    <div >
      <Banner />
      <About />
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
