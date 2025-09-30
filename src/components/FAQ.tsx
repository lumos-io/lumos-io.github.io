"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "./ui/button";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
  {
    question: "How does multidimensional autoscaling work?",
    answer: (
      <div className="space-y-3">
        <p>
          Unlike traditional autoscalers that only look at CPU and memory,
          Futura scales based on your actual SLOs—latency, throughput, error
          rates, and cost.
        </p>
        <p>
          Our eBPF agent extracts deep runtime signals from your applications
          without any instrumentation, then our autonomous agent makes real-time
          scaling decisions to meet your targets.
        </p>
      </div>
    ),
  },
  {
    question: "What happens if I reduce my nodes?",
    answer: (
      <p>
        Your bill automatically adjusts. If you scale down, your costs go down
        with it. We use a 24-hour smoothing window, so temporary spikes won't
        increase your bill.
      </p>
    ),
  },
  {
    question: "Do I need to modify my applications?",
    answer: (
      <div className="space-y-3">
        <p>
          <strong>No.</strong> Zero instrumentation needed. Our eBPF-powered
          agent runs at the kernel level and automatically extracts metrics from
          your applications.
        </p>
        <p>
          No SDKs, no code changes, no sidecars. Just deploy the agent and
          you're ready to go.
        </p>
      </div>
    ),
  },
  {
    question: "How is Futura different from HPA or VPA?",
    answer: (
      <div className="space-y-3">
        <p>
          HPA and VPA are <strong>reactive</strong> and limited to CPU/memory
          metrics. Futura is <strong>proactive and multidimensional</strong>.
        </p>
        <p>
          We analyze latency, throughput, cost, and custom SLOs in real-time.
          Our agent doesn't just recommend—it autonomously makes changes to
          optimize your cluster.
        </p>
      </div>
    ),
  },
  {
    question: "Can I try before committing?",
    answer: (
      <p>
        Absolutely! The first <strong>10 nodes are free forever</strong>. No
        credit card required to start. Test Futura in your staging environment,
        then scale to production when you're ready.
      </p>
    ),
  },
  {
    question: "What's coming next in Futura's roadmap?",
    answer: (
      <div className="space-y-3">
        <p>We're building a suite of cooperative agents that handle:</p>
        <ul className="ml-5 list-disc space-y-2 text-slate-300">
          <li>
            <strong>Automated upgrades</strong> - Zero-downtime Kubernetes and
            application updates
          </li>
          <li>
            <strong>Security patching</strong> - Continuous CVE remediation
          </li>
          <li>
            <strong>Incident remediation</strong> - Self-healing clusters that
            fix common issues autonomously
          </li>
        </ul>
        <p>
          The goal: reduce on-call pain to near-zero so teams can focus on
          building products.
        </p>
      </div>
    ),
  },
  {
    question: "What support options do you provide?",
    answer: (
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <span className="font-semibold text-white min-w-[100px]">Basic:</span>
          <span>Community support + documentation</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-white min-w-[100px]">
            Starter:
          </span>
          <span>Email support with 24h response time</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-white min-w-[100px]">Pro:</span>
          <span>Priority support + private Slack channel (4h response)</span>
        </div>
        <div className="flex items-start gap-3">
          <span className="font-semibold text-white min-w-[100px]">
            Enterprise:
          </span>
          <span>
            Dedicated account manager + 24/7 support with SLA guarantees
          </span>
        </div>
      </div>
    ),
  },
  {
    question: "What happens if my usage goes above 1000 nodes?",
    answer: (
      <p>
        At that scale, we offer <strong>custom enterprise pricing</strong> with
        volume discounts, advanced features, and white-glove support. Contact
        our sales team for a tailored package.
      </p>
    ),
  },
];

function FAQCard({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {faq.question}
        </span>
        <div className="flex-shrink-0 mt-1">
          {isOpen ? (
            <Minus className="w-5 h-5 text-indigo-400" />
          ) : (
            <Plus className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          )}
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-slate-300 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="px-6 py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            Have Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about Futura
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <FAQCard key={idx} faq={faq} index={idx} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm"
        >
          <p className="text-lg text-slate-300 mb-4">Still have questions?</p>

          <Button
            asChild
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white border-none"
          >
            <a href="#signup" className="text-white no-underline">
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
