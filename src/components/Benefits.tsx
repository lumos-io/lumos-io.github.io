import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  TrendingDown,
  Clock,
  Shield,
  Cpu,
  Settings,
  Layers,
  LineChart,
  Eye,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Full-Stack Autoscaling",
    desc: "Scale pods based on latency, throughput, and cost—plus autonomous cluster node scaling across AWS, GCP, and Azure. Your entire infrastructure adapts in real-time.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics Dashboard",
    desc: "Real-time SLO tracking, cost breakdowns, and cluster health visualization. Drill down into every metric that matters—from pod latency to node utilization—all in one intuitive UI.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Activity,
    title: "eBPF-Powered Observability",
    desc: "Extract deep runtime signals directly from your apps. No agents, no sidecars, no code changes. See everything happening at the kernel level.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: TrendingDown,
    title: "Smart Cost Optimization",
    desc: "Choose recommendation mode (you approve changes) or autonomous mode with guardrails. Our daemon right-sizes workloads, manages spot instances, and optimizes scheduling—you stay in control.",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    icon: Eye,
    title: "Cluster Health Monitoring",
    desc: "Proactive alerts on pod crashes, resource exhaustion, and SLO violations. Visual topology maps show dependencies and bottlenecks before they become incidents.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Shield,
    title: "Zero Instrumentation",
    desc: "Deploy in minutes. No SDKs, no code changes, no learning curve. Just results. Works with any Kubernetes distribution.",
    gradient: "from-amber-500 to-yellow-500",
  },
];

const stats = [
  { icon: TrendingDown, value: "40%", label: "Average cost reduction" },
  { icon: Clock, value: "80%", label: "Less on-call escalations" },
  { icon: Cpu, value: "<1%", label: "CPU overhead" },
  { icon: Settings, value: "5min", label: "Setup time" },
];

function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Features Section */}
      <section
        id="features"
        ref={ref}
        className="py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
              Platform Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond Traditional Autoscaling
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Futura combines eBPF observability with autonomous decision-making
              to optimize your Kubernetes infrastructure in real-time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative"
              >
                <div className="h-full p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Icon with gradient */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                  <stat.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
