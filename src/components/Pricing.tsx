"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [nodes, setNodes] = useState(50); // default 50 nodes
  const costPerNode = 25;
  const totalCost = nodes * costPerNode;

  return (
    <section id="pricing" className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Pricing</h2>

      {/* Row 1: Dynamic Pricing Card */}
      <div className="flex justify-center mb-10">
        <div className="p-8 bg-white rounded-2xl shadow-lg text-center max-w-md w-full border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Node Usage</h3>
          <p className="text-lg text-gray-600 mb-2">{nodes} nodes</p>
          <p className="text-4xl font-bold mb-6">
            ${totalCost.toLocaleString()}
            <span className="text-base font-medium">/mo</span>
          </p>
          <Button variant="secondary" className="px-6 py-2">
            Get Started
          </Button>
        </div>
      </div>

      {/* Row 2: Slider */}
      <div className="flex flex-col items-center mb-16">
        <label className="mb-4 text-lg font-medium text-gray-700">
          Adjust number of nodes
        </label>
        <input
          type="range"
          min={10}
          max={5000}
          step={10}
          value={nodes}
          onChange={(e) => setNodes(Number(e.target.value))}
          className="w-full md:w-2/3 accent-blue-600"
        />
        <p className="mt-2 text-sm text-gray-500">{nodes} nodes selected</p>
      </div>

      {/* Row 3: Plan Cards */}
      <div className="grid md:grid-cols-4 gap-8 mb-16">
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

      {/* Explanation Section */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-6">
        <h3 className="text-2xl font-semibold">💡 How Our Pricing Works</h3>
        <p>
          Our pricing is simple and transparent. You only pay for the nodes you
          run, plus an optional platform plan for extra features.
        </p>
        <ul className="list-disc text-left mx-auto w-fit space-y-2">
          <li>
            <strong>Per-Agent Cost:</strong> $25 per node per month. Scale up or
            down as your cluster grows.
          </li>
          <li>
            <strong>Plans:</strong> Choose a plan (Basic, Starter, Pro,
            Enterprise) for advanced features and support.
          </li>
          <li>
            <strong>No Hidden Fees:</strong> Your bill is always nodes × $25 +
            plan.
          </li>
          <li>
            <strong>Why this model?</strong> Predictable, fair, and aligned with
            your growth.
          </li>
        </ul>
      </div>
    </section>
  );
}
