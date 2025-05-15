import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <footer>
        &copy; 2025 GemerSoft. All rights reserved. GemerSoftuz@gmail.com
      </footer>
    </div>
  );
}

export default App;
