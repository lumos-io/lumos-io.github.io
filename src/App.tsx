import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import WaitingList from "./components/WaitingList";
import "./App.css";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <WaitingList />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
