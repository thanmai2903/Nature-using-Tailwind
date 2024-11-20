import React from "react";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Facts from "./components/Facts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Gallery />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
