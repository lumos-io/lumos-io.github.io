import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function WaitingList() {
  const [status, setStatus] = useState("");

  return (
    <section
      id="signup"
      className="waiting-list py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white"
    >
      <div className="mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Join the Waiting List</h2>
        <p className="mb-10 text-lg">
          Be the first to get early access to KubeScale!
        </p>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-gray-800 text-2xl text-center">
              Sign Up
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              action="https://formspree.io/f/your_form_id"
              method="POST"
              className="grid gap-6"
              onSubmit={() => setStatus("Sending...")}
            >
              {/* Name / Lastname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              {/* Company / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                />
                <Input type="email" name="email" placeholder="Email" required />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto mx-auto"
                variant="secondary"
              >
                Join Waiting List
              </Button>
            </form>
            {status && <p className="mt-4 text-center text-sm">{status}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default WaitingList;
