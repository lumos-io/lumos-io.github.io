"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NodeSlider() {
  const [nodes, setNodes] = useState(0);

  const getPrice = (n: number) => {
    if (n <= 10) return 0;
    if (n >= 1001) return "Custom";
    return n * 25;
  };

  const nodeText =
    nodes >= 1001
      ? "1000+ nodes included"
      : nodes <= 10
      ? "Free for up to 10 nodes"
      : `${nodes} node${nodes > 1 ? "s" : ""} included`;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      {/* Pricing Card */}
      <div className="p-8 bg-white rounded-2xl shadow-lg text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Custom Node Pricing</h3>
        <p className="text-gray-500 mb-4">
          Adjust the slider or input below to see your cost
        </p>

        <p className="text-gray-500 mb-2">Your Nodes</p>
        <p className="text-4xl font-bold mb-4">
          {getPrice(nodes) === "Custom" ? "Custom" : `$${getPrice(nodes)}`}
          {getPrice(nodes) !== "Custom" && (
            <span className="text-base font-medium">/mo</span>
          )}
        </p>

        <ul className="text-gray-600 mb-4 space-y-1">
          <li>{nodeText}</li>
          {nodes >= 11 && nodes <= 1000 && <li>$25 per node beyond 10</li>}
          {nodes >= 1001 && (
            <li>Contact sales for custom enterprise pricing</li>
          )}
        </ul>

        <Button variant="secondary">Contact Sales</Button>
      </div>

      {/* Slider + Input */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Slider
          value={[nodes]}
          min={0}
          max={1001}
          step={1}
          onValueChange={(val) => setNodes(val[0])}
          className="flex-1"
        />

        <Input
          type="number"
          min={0}
          max={1001}
          value={nodes}
          onChange={(e) => {
            let val = parseInt(e.target.value, 10);
            if (isNaN(val)) val = 0;
            if (val > 1001) val = 1001;
            if (val < 0) val = 0;
            setNodes(val);
          }}
          className="w-24 text-center"
        />
      </div>
    </section>
  );
}
