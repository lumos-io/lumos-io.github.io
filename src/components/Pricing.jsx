export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12">Pricing</h2>
      <div className="inline-block bg-white p-10 rounded-xl shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">Per Node Licensing</h3>
        <p className="mb-6">
          Pay for the nodes you use. Scale with your clusters.
        </p>
        <p className="text-3xl font-bold mb-6">€20 / node / month</p>
        <a
          href="#signup"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </a>
      </div>
    </section>
  );
}
