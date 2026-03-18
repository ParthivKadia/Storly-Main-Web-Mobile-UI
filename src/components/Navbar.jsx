import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About us", id: "aboutus" },
  { name: "Services", id: "services" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
  { name: "Registration", id: "registration" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 
      
      backdrop-blur-xl bg-white/70 shadow-xl rounded-2xl border border-white/30"
    >
      <div className="flex items-center justify-between h-16 px-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/StorlyBG.png"
            // <img src="/assets/StorlyBG.png" />
            alt="Storly Logo"
            className="h-8 w-auto"
          />
          <span className="font-extrabold text-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Storly
          </span>
        </a>

        {/* Desktop Navigation */}
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

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition">
            Sign In
          </button>

          <button className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white/90 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm rounded-full text-gray-600 hover:bg-gray-100 hover:text-purple-600 transition"
                >
                  {link.name}
                </a>
              ))}

              <div className="flex flex-col gap-3 pt-4">

                <button className="px-5 py-2 text-sm border border-gray-300 rounded-full hover:bg-gray-100 transition">
                  Sign In
                </button>

                <button className="px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition">
                  Sign Up
                </button>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

// import { MenuIcon, XIcon } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { navLinks } from "../data/navLinks";

// export default function Navbar() {
//     const [openMobileMenu, setOpenMobileMenu] = useState(false);
//     const pathname = useLocation().pathname;

//     useEffect(() => {
//         if (openMobileMenu) {
//             document.body.classList.add("max-md:overflow-hidden");
//         } else {
//             document.body.classList.remove("max-md:overflow-hidden");
//         }
//     }, [openMobileMenu]);

//     return (
//         <nav className={`flex items-center justify-between fixed z-50 top-0 w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-slate-200 bg-white/40 ${openMobileMenu ? 'bg-white/80' : 'backdrop-blur'}`}>
//             <a href="https://prebuiltui.com?utm_source=saasly">
//                 <img className="h-9 md:h-9.5 w-auto shrink-0" src="/assets/logo.svg" alt="Logo" width={140} height={40} fetchPriority="high" />
//             </a>
//             <div className="hidden items-center md:gap-8 lg:gap-9 font-medium md:flex lg:pl-20">
//                 {navLinks.map((link) => (
//                     <NavLink key={link.name} href={link.href} className="hover:text-indigo-600">
//                         {link.name}
//                     </NavLink>
//                 ))}
//             </div>
//             {/* Mobile menu */}
//             <div className={`fixed inset-0 flex flex-col items-center justify-center gap-6 text-lg font-medium bg-white/40 backdrop-blur-md md:hidden transition duration-300 ${openMobileMenu ? "translate-x-0" : "-translate-x-full"}`}>
//                 {navLinks.map((link) => (
//                     <NavLink key={link.name} href={link.href}>
//                         {link.name}
//                     </NavLink>
//                 ))}
//                 <button>
//                     Sign in
//                 </button>
//                 <button className="aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex" onClick={() => setOpenMobileMenu(false)}>
//                     <XIcon />
//                 </button>
//             </div>
//             <div className="flex items-center gap-4">
//                 <button className="hidden md:block hover:bg-slate-100 transition px-4 py-2 border border-indigo-600 rounded-md">
//                     Sign in
//                 </button>
//                 <button className="hidden md:block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md">
//                     Get started
//                 </button>
//                 <button onClick={() => setOpenMobileMenu(!openMobileMenu)} className="md:hidden">
//                     <MenuIcon size={26} className="active:scale-90 transition" />
//                 </button>
//             </div>
//         </nav>
//     );
// }