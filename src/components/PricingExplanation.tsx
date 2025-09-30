import { motion } from "framer-motion";
import { DollarSign, TrendingDown, Shield } from "lucide-react";

export default function PricingExplanation() {
  return (
    <section className="px-6 py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            How Our Pricing Works
          </h3>
          <p className="text-slate-400 text-lg">
            Simple, transparent, and designed to scale with your infrastructure
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-8"
        >
          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <div className="text-2xl font-bold text-indigo-400 mb-2">0–10 nodes</div>
            <div className="text-3xl font-bold text-white mb-2">$0</div>
            <p className="text-slate-400 text-sm">Free forever. Perfect for testing and small projects.</p>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <div className="text-2xl font-bold text-indigo-400 mb-2">11–1000 nodes</div>
            <div className="text-3xl font-bold text-white mb-2">$25/node</div>
            <p className="text-slate-400 text-sm">Scale linearly as your infrastructure grows.</p>
          </div>

          <div className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm">
            <div className="text-2xl font-bold text-indigo-400 mb-2">1000+ nodes</div>
            <div className="text-3xl font-bold text-white mb-2">Custom</div>
            <p className="text-slate-400 text-sm">Enterprise pricing tailored to your needs.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4 text-slate-300"
        >
          <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <TrendingDown className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-white mb-1">24-hour smoothing window</p>
              <p className="text-sm text-slate-400">
                We use a 24-hour smoothing window to avoid billing you for temporary spikes. You only pay for sustained node usage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
            <Shield className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-white mb-1">No hidden fees</p>
              <p className="text-sm text-slate-400">
                Node-based pricing plus your chosen plan (Basic, Starter, Pro, or Enterprise). That's it. No surprises.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
