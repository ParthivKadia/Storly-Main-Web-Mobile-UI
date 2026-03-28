import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={22} />, url: "https://twitter.com" },
  { icon: <Linkedin size={22} />, url: "https://linkedin.com" },
  { icon: <Instagram size={22} />, url: "https://instagram.com" },
];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll respond shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-24 py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-purple-300 rounded-full blur-3xl opacity-25 top-0 left-0"
          animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-52 h-52 md:w-72 md:h-72 bg-pink-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"
          animate={{ x: [0, -20, 0], y: [0, -18, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Have Questions? Let's Chat
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Whether it's a question, idea, or feedback, we're all ears.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <motion.form
            className="flex-1 bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl"
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
                className="rounded-xl border border-gray-300 p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-xl border border-gray-300 p-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
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
              className="w-full rounded-xl border border-gray-300 p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition resize-none"
            />

            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 shadow-lg transition"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              Reach Out
            </motion.button>
          </motion.form>

          <motion.div
            className="flex-1 flex flex-col justify-center items-start md:items-center gap-6 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-start gap-3 text-gray-700 min-w-0"
              whileHover={{ scale: 1.03 }}
            >
              <MapPin className="text-purple-500 shrink-0" />
              <span className="break-words">123 Your Street, Ahmedabad, India</span>
            </motion.div>

            <motion.div
              className="flex items-start gap-3 text-gray-700 min-w-0"
              whileHover={{ scale: 1.03 }}
            >
              <Phone className="text-purple-500 shrink-0" />
              <span className="break-words">+91 12345 67890</span>
            </motion.div>

            <motion.div
              className="flex items-start gap-3 text-gray-700 min-w-0"
              whileHover={{ scale: 1.03 }}
            >
              <Mail className="text-purple-500 shrink-0" />
              <span className="break-all">contact@yourcompany.com</span>
            </motion.div>

            <div className="flex gap-4 mt-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow transition"
                  whileHover={{ scale: 1.1 }}
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
