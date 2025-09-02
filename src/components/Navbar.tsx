import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="/" className="text-xl font-bold text-indigo-600">
          KubeScale
        </a>
        <div className="hidden md:flex gap-6">
          <a href="#benefits" className="text-gray-700 hover:text-indigo-600">
            Benefits
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-indigo-600">
            Pricing
          </a>
          <a href="#signup" className="text-gray-700 hover:text-indigo-600">
            Join
          </a>
        </div>
        <Button asChild size="sm" variant="outline">
          <a href="#signup">Get Started</a>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
