import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-28 md:pt-40 pb-16 md:pb-20 scroll-mt-24 md:scroll-mt-34"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-[1.08] tracking-tight max-w-5xl mx-auto"
        >
          One Store Link for{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Everything You Sell
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 md:mt-6 text-gray-600 text-[15px] sm:text-base md:text-lg max-w-xs sm:max-w-xl mx-auto leading-8 sm:leading-relaxed"
        >
          Storly lets creators and businesses launch a beautiful mini-store,
          sell products, and manage customers without building a full ecommerce website.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <a
            href="#registration"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:opacity-90 transition"
          >
            Create Your Store
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Explore Demo
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
