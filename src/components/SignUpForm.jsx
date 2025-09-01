export default function SignUpForm() {
  return (
    <section id="signup" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Join Early Access</h2>
      <form className="inline-flex flex-col md:flex-row gap-4">
        <input
          type="email"
          placeholder="Email address"
          className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
