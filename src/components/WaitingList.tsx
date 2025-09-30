import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Rocket, CheckCircle2 } from "lucide-react";

function WaitingList() {
  const [status, setStatus] = useState("");

  return (
    <section
      id="signup"
      className="relative py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Early Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Waitlist
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Be among the first to experience autonomous Kubernetes optimization.
            Limited beta spots available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 md:p-12"
        >
          <form
            action="https://formspree.io/f/mzzaajnd"
            method="POST"
            className="grid gap-6"
            onSubmit={() => setStatus("Sending...")}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                name="company"
                placeholder="Company"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
              />
              <Input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-indigo-500"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4 border-none"
            >
              {status ? status : "Request Early Access"}
            </Button>
          </form>

          {status && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center gap-2 text-green-400"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Request submitted successfully!</span>
            </motion.div>
          )}

          <p className="text-slate-500 text-sm text-center mt-6">
            We'll reach out within 48 hours with next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default WaitingList;
