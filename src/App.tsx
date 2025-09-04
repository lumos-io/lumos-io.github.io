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
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <PricingExplanation />
        <WaitingList />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
