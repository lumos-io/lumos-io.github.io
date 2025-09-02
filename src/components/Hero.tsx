import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
    >
      <div className="mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Optimize Your Kubernetes Costs
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          KubeScale helps you reduce cloud spend automatically without slowing
          down your teams.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <a href="#signup">Join Waiting List</a>
        </Button>
      </div>
    </section>
  );
}

export default Hero;
