"use client";

import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function NodeSlider() {
  const features = [
    "eBPF agent for multidimensional pod autoscaling",
    "Advanced UI with analytics dashboard",
    "Real-time cluster health monitoring",
    "SLO-based scaling policies",
    "Cross-cloud node optimization",
    "24/7 autonomous operations"
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl" />

        {/* Main card */}
        <div className="relative p-10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-2 border-indigo-500/30 rounded-3xl backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left side - Pricing */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Simple Per-Node Pricing
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Pay Only for What You Use
              </h3>

              <div className="space-y-6 mb-6">
                {/* Free tier */}
                <div className="p-5 bg-slate-950/50 rounded-xl border border-emerald-500/30">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-emerald-400">Free</span>
                    <span className="text-slate-400">up to 10 nodes</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Perfect for development and small production workloads
                  </p>
                </div>

                {/* Paid tier */}
                <div className="p-5 bg-slate-950/50 rounded-xl border border-indigo-500/30">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-indigo-400">$25</span>
                    <span className="text-slate-400">per node/month</span>
                  </div>
                  <p className="text-slate-300 text-sm mb-3">
                    After 10 nodes, scale linearly as you grow
                  </p>
                  <div className="text-xs text-slate-400 font-mono bg-slate-900/50 p-3 rounded-lg">
                    Example: 11 nodes = 11 × $25 = <span className="text-white font-bold">$275/mo</span>
                  </div>
                </div>

                {/* Enterprise */}
                <div className="p-5 bg-slate-950/50 rounded-xl border border-purple-500/30">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-purple-400">Custom</span>
                    <span className="text-slate-400">1000+ nodes</span>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Enterprise pricing with volume discounts
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Features */}
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-bold text-white mb-6">
                Everything included in node pricing:
              </h4>
              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-slate-200 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                <p className="text-sm text-indigo-200">
                  <span className="font-semibold">No hidden fees.</span> All features included. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
