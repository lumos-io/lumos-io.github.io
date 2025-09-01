import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <Features />
      <Pricing />
      <SignUpForm />
      <Footer />
    </div>
  );
}
