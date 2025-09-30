import { useEffect } from "react";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import WaitingList from "./components/WaitingList";
import FAQ from "./components/FAQ";
import PricingExplanation from "./components/PricingExplanation";
import "./App.css";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const href = target.getAttribute("href");
        if (href?.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <PricingExplanation />
        <WaitingList />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
