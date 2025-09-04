export default function PricingExplanation() {
  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-6">💡 How Our Pricing Works</h3>
        <div className="space-y-4 text-gray-700 text-base leading-relaxed text-left sm:text-center">
          <p>
            Our pricing model is simple and transparent, designed to scale with
            your infrastructure needs.
          </p>
          <ul className="list-disc list-inside text-left sm:text-center sm:list-none sm:space-y-2">
            <li>
              <strong>0–10 nodes:</strong> Free forever ($0/month).
            </li>
            <li>
              <strong>11–1000 nodes:</strong> $25 per node per month.
            </li>
            <li>
              <strong>1000+ nodes:</strong> Custom enterprise pricing — contact
              us for a tailored plan.
            </li>
          </ul>
          <p>
            On top of node-based pricing, you can choose one of our subscription
            plans (Basic, Starter, Pro, Enterprise) depending on the features
            and support you need.
          </p>
          <p className="font-medium">
            You only pay for the highest number of nodes used within the month
            (with a 24h smoothing window to avoid billing spikes).
          </p>
        </div>
      </div>
    </section>
  );
}
