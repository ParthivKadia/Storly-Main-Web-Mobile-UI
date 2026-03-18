import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 mt-24">

      {/* Gradient Top Line */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Column 1 - Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/StorlyBG.png" className="w-8 h-8" />
            <span className="text-white text-xl font-bold">Storly</span>
          </div>

          <p className="text-sm">
            Storly helps creators, businesses and sellers build their own
            online store and sell products across India.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm">
            <a href="#aboutus" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Column 3 - Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>

          <div className="flex gap-4">
            <a className="hover:text-white transition">
              <Facebook size={20} />
            </a>

            <a className="hover:text-white transition">
              <Instagram size={20} />
            </a>

            <a className="hover:text-white transition">
              <Twitter size={20} />
            </a>

            <a className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Storly. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

// import { Link } from "react-router-dom";
// import { navLinks } from "../data/navLinks";

// export default function Footer() {
//     return (
//         <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-40 w-full text-slate-500">
//             <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-6">
//                 <div className="md:max-w-114">
//                     <a href="https://prebuiltui.com?utm_source=saasly">
//                         <img className="h-9 md:h-9.5 w-auto shrink-0" src="/assets/logo.svg" alt="Logo" width={140} height={40} fetchPriority="high" />
//                     </a>
//                     <p className="mt-6">
//                         Launch your SaaS product in record time with our all-in-one platform designed for speed, flexibility and growth. Whether you`&apos;re a solo founder or a fast-moving team, we provide everything you need.
//                     </p>
//                 </div>
//                 <div className="flex-1 flex items-start md:justify-end gap-20">
//                     <div>
//                         <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
//                         <ul className="space-y-2">
//                             {navLinks.map((link, index) => (
//                                 <li key={index}>
//                                     <Link href={link.href} className="hover:text-indigo-600">{link.name}</Link>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div>
//                         <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
//                         <div className="space-y-2">
//                             <p>+1-212-456-7890</p>
//                             <p>contact@example.com</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <p className="pt-4 text-center pb-5">
//                 Copyright 2024 © <a href="https://prebuiltui.com?utm_source=saasly">PrebuiltUI</a>. All Right Reserved.
//             </p>
//         </footer>
//     );
// };