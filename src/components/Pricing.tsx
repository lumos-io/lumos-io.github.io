"use client";

import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NodeSlider from "@/components/NodeSlider";

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <label>
          Our pricing model is based on per-agent deployment and features plan
        </label>
      </div>

      {/* Row 1: Dynamic Pricing Card */}
      <div className="flex flex-col items-center mb-8">
        <NodeSlider />
      </div>

      {/* Row 3: Plan Cards */}
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        {/* Basic */}
        <div className="p-6 bg-white rounded-2xl shadow text-center border border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Basic</h3>
          <p className="text-3xl font-bold mb-4">$0</p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Community support</li>
            <li>Open-source features</li>
            <li>Unlimited agents</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Choose Basic
          </Button>
        </div>

        {/* Starter */}
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-3xl font-bold mb-4">
            $99<span className="text-base font-medium">/mo</span>
          </p>
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>Up to 100 nodes</li>
            <li>Email support</li>
            <li>Basic insights</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Choose Starter
          </Button>
        </div>

        {/* Pro (Most Popular) */}
        <div className="relative p-6 bg-white rounded-2xl shadow border-2 border-blue-600 text-center">
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
            <li>Priority support</li>
            <li>Advanced recommendations</li>
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
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
          <Button variant="secondary" className="px-4 py-2">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
