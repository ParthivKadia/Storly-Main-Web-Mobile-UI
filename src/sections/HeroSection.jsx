import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center pt-40 pb-20 scroll-mt-34"
>
{/* <section
  id="home"
  className="relative min-h-screen flex items-center justify-center pt-40 pb-20"
  
  >  */}
 

<div className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight max-w-5xl mx-auto"
        >
          One Store Link for{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Everything You Sell
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          Storly lets creators and businesses launch a beautiful mini-store,
          sell products, and manage customers — without building a full
          ecommerce website.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-5 flex-wrap"
        >
          <a
            href="#registration"
            className="inline-flex items-center gap-2 px-7 py-3 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:opacity-90 transition"
          >
            Create Your Store
            <ArrowUpRight size={16} />
          </a>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            Explore Demo
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* Trust Section
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/images/avatar-${i}.jpg`}
                alt="Client"
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <div className="text-left">
            <div className="flex gap-1">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
              <Star size={14} className="text-yellow-400" />
            </div>

            <p className="text-xs text-gray-500">
              Trusted by <span className="font-semibold text-gray-800">1000+ creators</span>
            </p>
          </div>
        </motion.div> */}

      </div>
    </section>
  );
};

export default HeroSection;

// import { ChevronRightIcon, SparklesIcon } from "lucide-react";

// export default function HeroSection() {
//     return (
//         <div className="flex flex-col items-center justify-center text-center bg-[url('/assets/hero-section-dot-image.png')] bg-cover bg-no-repeat">
//             <a href="#" className="flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-indigo-600 bg-indigo-50">
//                 <span className="bg-indigo-600 text-white text-xs px-3.5 py-1 rounded-full">
//                     NEW
//                 </span>
//                 <p className="flex items-center gap-1">
//                     <span>Try 30 days free trial option </span>
//                     <ChevronRightIcon size={16} />
//                 </p>
//             </a>
//             <h1 className="text-[40px]/12 md:text-[54px]/16 font-semibold max-w-3xl mt-4">
//                 Build, launch and scale{" "}
//                 <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
//                     your SaaS
//                 </span>
//                 {" "}faster
//             </h1>
//             <p className="text-base text-slate-600 max-w-lg mt-5">Workflows that never miss. automation that helps your team do more, effortlessly.</p>
//             <div className="flex items-center gap-4 mt-6">
//                 <button className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 rounded-md text-white">
//                     <span>Get Started</span>
//                 </button>
//                 <button className="flex items-center justify-center gap-2 border border-indigo-400 px-5 py-3 rounded-md text-indigo-600">
//                     <SparklesIcon size={16} />
//                     <span>AI Features</span>
//                 </button>
//             </div>
//             <img className="w-full max-w-xl mt-16 drop-shadow-2xl drop-shadow-blue-500/15 mx-auto" src="/assets/hero-section-card-image.svg" alt="Hero Section Card Image" width={1000} height={500} fetchPriority="high" />
//         </div>
//     );
// }