import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About us", id: "aboutus" },
  { name: "Services", id: "services" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
  { name: "Registration", id: "registration" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <div className="rounded-[24px] border border-white/40 bg-white/80 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,0.08)] overflow-hidden">
        <div className="flex items-center justify-between h-16 md:h-[72px] px-4 sm:px-5 md:px-6">
          <a href="#home" className="flex items-center gap-2.5 min-w-0">
            <img
              src="/Storly-Tran.png"
              alt="Storly Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl object-contain shrink-0"
            />
            <span className="font-extrabold text-lg sm:text-xl leading-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Storly
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-full px-2 py-1 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-600 rounded-full hover:bg-white hover:text-purple-600 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
              Sign In
            </button>

            <button className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
              Sign Up
            </button>
          </div>

          <button
            className="lg:hidden h-11 w-11 inline-flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-gray-200/80 bg-white/95 backdrop-blur-xl"
            >
              <div className="px-4 sm:px-5 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={`#${link.id}`}
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-3 text-sm font-medium rounded-2xl text-gray-700 hover:bg-gray-100 hover:text-purple-600 transition"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="flex flex-col gap-3 pt-3">
                  <button className="w-full px-5 py-3 text-sm font-medium border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition">
                    Sign In
                  </button>

                  <button className="w-full px-5 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
                    Sign Up
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
