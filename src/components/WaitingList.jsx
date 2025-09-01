import React, { useState } from "react";

function WaitingList() {
  const [status, setStatus] = useState("");

  return (
    <section
      id="signup"
      className="waiting-list py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-4xl font-bold mb-6">Join the Waiting List</h2>
        <p className="mb-10 text-lg">
          Be the first to get early access to KubeScale!
        </p>

        <form
          action="https://formspree.io/f/your_form_id"
          method="POST"
          className="waiting-form max-w-4xl mx-auto grid gap-6"
          onSubmit={() => setStatus("Sending...")}
        >
          {/* Name / Lastname */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="input-field"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="input-field"
            />
          </div>

          {/* Company / Email */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              placeholder="Company"
              required
              className="input-field"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="input-field"
            />
          </div>

          <button
            type="submit"
            className="btn w-full md:w-auto mt-4 self-center"
          >
            Join Waiting List
          </button>
        </form>

        {status && <p className="mt-4">{status}</p>}
      </div>
    </section>
  );
}

export default WaitingList;
