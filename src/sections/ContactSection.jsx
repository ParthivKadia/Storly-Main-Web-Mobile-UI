import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={22} />, url: "https://twitter.com" },
  { icon: <Linkedin size={22} />, url: "https://linkedin.com" },
  { icon: <Instagram size={22} />, url: "https://instagram.com" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};
const handleSubmit = (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! We’ll respond shortly.");
  setForm({ name: "", email: "", company: "", message: "" });
};

  return (
<section id="contact" className="scroll-mt-24">
        {/* Background Shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-10%] left-[-10%]"
          animate={{ x: [0, 50, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 bottom-[-10%] right-[-5%]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have Questions? Let’s Chat
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Whether it’s a question, idea, or feedback — we’re all ears.
        </motion.p>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: Contact Form */}
          <motion.form
            className="flex-1 bg-white rounded-3xl p-10 shadow-2xl"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company (optional)"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-xl border border-gray-300 p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            ></textarea>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 shadow-lg transition"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Reach Out
            </motion.button>
          </motion.form>

          {/* Right: Floating Contact Info */}
<motion.div
  className="flex-1 flex flex-col justify-center items-center gap-6"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <motion.div className="flex items-center gap-3 text-gray-700" whileHover={{ scale: 1.05 }}>
    <MapPin className="text-purple-500" /> <span>123 Your Street, Ahmedabad, India</span>
  </motion.div>
  <motion.div className="flex items-center gap-3 text-gray-700" whileHover={{ scale: 1.05 }}>
    <Phone className="text-purple-500" /> <span>+91 12345 67890</span>
  </motion.div>
  <motion.div className="flex items-center gap-3 text-gray-700" whileHover={{ scale: 1.05 }}>
    <Mail className="text-purple-500" /> <span>contact@yourcompany.com</span>
  </motion.div>

  {/* Original Social Media Icons */}
  <div className="flex gap-4 mt-4">
    {socialLinks.map((link, idx) => (
      <motion.a
        key={idx}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white shadow hover:scale-110 transition"
        whileHover={{ scale: 1.2 }}
      >
        {link.icon}
      </motion.a>
    ))}
  </div>
</motion.div>
             
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// import { SparklesIcon } from "lucide-react";
// import SectionTitle from "../components/SectionTitle";
// import { pricingData } from "../data/pricingData";

// export default function Pricing() {
//     return (
//         <>
//             <SectionTitle text1="Pricing" text2="Our Pricing Plans" text3="Flexible pricing options designed to meet your needs — whether you're just getting started or scaling up." />

//             <div className="flex flex-wrap items-center justify-center gap-6 mt-16">
//                 {pricingData.map((plan, index) => (
//                     <div key={index} className={`p-6 rounded-2xl max-w-75 w-full shadow-[0px_4px_26px] shadow-black/6 ${plan.mostPopular ? "relative pt-12 bg-gradient-to-b from-indigo-600 to-violet-600" : "bg-white"}`}>
//                         {plan.mostPopular && (
//                             <div className="flex items-center text-xs gap-1 py-1.5 px-2 text-indigo-600 absolute top-4 right-4 rounded bg-white font-medium">
//                                 <SparklesIcon size={14} />
//                                 <p>Most Popular</p>
//                             </div>
//                         )}
//                         <p className={plan.mostPopular && "text-white"}>{plan.title}</p>
//                         <h4 className={`text-3xl font-semibold mt-1 ${plan.mostPopular && "text-white"}`}>${plan.price}<span className={`font-normal text-sm ${plan.mostPopular ? "text-white" : "text-slate-500"}`}>/mo</span></h4>
//                         <hr className="border-slate-200 my-8" />
//                         <div className={`space-y-2 ${plan.mostPopular ? "text-white" : "text-slate-500"}`}>
//                             {plan.features.map((feature, index) => (
//                                 <div key={index} className="flex items-center gap-1.5">
//                                     <feature.icon size={18} className={`${plan.mostPopular ? "text-white" : "text-indigo-600"}`} />
//                                     <span>{feature.name}</span>
//                                 </div>
//                             ))}
//                         </div>
//                         <button className={`transition w-full py-3 rounded-lg font-medium mt-8 ${plan.mostPopular ? "bg-white hover:bg-slate-100 text-slate-800" : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}>
//                             <span>{plan.buttonText}</span>
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }