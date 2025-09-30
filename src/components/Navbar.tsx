import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, Menu, X } from "lucide-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/80 backdrop-blur-xl border-b border-indigo-500/20 shadow-[0_8px_32px_rgba(79,70,229,0.15)]"
            : "bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <motion.a
            href="/"
            style={{ scale: logoScale }}
            className="flex items-center gap-2 group"
          >
            <motion.div
              className="relative"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Futura
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {[
                { href: "#features", label: "Features" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ" }
              ].map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="relative text-white hover:text-indigo-300 transition-colors font-semibold group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
              >
                <a href="#signup" className="no-underline" style={{ color: '#ffffff' }}>Get Started</a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border transition-colors"
            style={{
              backgroundColor: '#1e293b',
              borderColor: '#334155',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#334155'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#ffffff' }} /> : <Menu className="w-6 h-6" style={{ color: '#ffffff' }} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] left-0 right-0 z-40 md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {[
            { href: "#features", label: "Features" },
            { href: "#pricing", label: "Pricing" },
            { href: "#faq", label: "FAQ" }
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-indigo-300 transition-colors font-semibold py-2"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-none w-full"
          >
            <a href="#signup" className="no-underline" style={{ color: '#ffffff' }} onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
