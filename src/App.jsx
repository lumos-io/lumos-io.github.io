import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import WaitingList from "./components/WaitingList";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <WaitingList />
      <Footer />
    </div>
  );
}

export default App;
