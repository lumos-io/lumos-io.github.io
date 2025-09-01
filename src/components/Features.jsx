import React from "react";
import { Cpu, Server, LineChart } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Cpu size={40} />,
      title: "Lightweight Agent",
      desc: "Runs as a DaemonSet with minimal overhead.",
    },
    {
      icon: <Server size={40} />,
      title: "Smart Scaling",
      desc: "Automatically detects under/over-utilized nodes.",
    },
    {
      icon: <LineChart size={40} />,
      title: "Actionable Insights",
      desc: "Clear dashboards to guide infra decisions.",
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Why Choose KubeScale?</h2>
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card">
              {f.icon}
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
