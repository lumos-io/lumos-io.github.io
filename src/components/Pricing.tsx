import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing">
      <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-3xl font-bold mb-4">
            $99<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Up to 100 nodes</li>
            <li>Basic insights</li>
            <li>Email support</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Choose Starter
          </Button>
        </div>

        {/* Pro (Most Popular) */}
        <div className="relative p-6 bg-white rounded-2xl shadow border-2 border-blue-600 text-center">
          {/* Most Popular Banner */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-800 border border-yellow-300"
            >
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              Most Popular
            </Badge>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">
            $499<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Up to 1,000 nodes</li>
            <li>Advanced recommendations</li>
            <li>Priority support</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Choose Pro
          </Button>
        </div>

        {/* Enterprise */}
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-3xl font-bold mb-4">Custom</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Unlimited nodes</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
