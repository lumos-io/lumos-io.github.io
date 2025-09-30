"use client";

import { Star, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NodeSlider from "@/components/NodeSlider";
import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      period: "",
      features: [
        "Community support",
        "Open-source features",
        "Unlimited agents",
        "Basic autoscaling"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Starter",
      price: "$99",
      period: "/mo",
      features: [
        "Up to 100 nodes",
        "Email support",
        "Basic insights",
        "Cost optimization",
        "24h response time"
      ],
      cta: "Start Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$499",
      period: "/mo",
      features: [
        "Up to 1,000 nodes",
        "Priority support",
        "Advanced recommendations",
        "Custom SLO policies",
        "Slack integration",
        "4h response time"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited nodes",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees",
        "On-premise option",
        "24/7 support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="px-6 py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
            Simple Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Scale based on usage. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Dynamic Pricing Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <NodeSlider />
        </motion.div>

        {/* Plan Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-indigo-900/50 to-slate-800/50 border-2 border-indigo-500"
                  : "bg-slate-800/50 border border-slate-700/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white border-none">
                    <Star className="w-4 h-4 fill-white" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && (
                    <span className="text-slate-400 text-lg">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
