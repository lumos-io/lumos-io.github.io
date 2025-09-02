import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-90 py-8">
      <div className="mx-auto text-center px-4">
        <p className="mb-2">
          © {new Date().getFullYear()} KubeScale. All rights reserved.
        </p>
        <p className="text-sm">
          Made with ❤️ for Kubernetes teams from Groningen.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
