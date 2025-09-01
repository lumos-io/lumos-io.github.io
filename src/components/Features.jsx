export default function Features() {
  const features = [
    {
      title: "Autonomous Scaling",
      desc: "Automatically right-size your clusters.",
    },
    {
      title: "Cost Optimization",
      desc: "Save on cloud spend without manual work.",
    },
    {
      title: "Zero Touch Operations",
      desc: "Deploy once and let our SaaS handle the rest.",
    },
  ];
  return (
    <section className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
