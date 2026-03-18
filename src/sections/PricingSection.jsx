import { useState } from "react";
import { motion } from "framer-motion";

// Pricing Plans
const plans = [
  {
    name: "Basic Plan",
    monthly: 99,
    yearly: 999,
    features: [
      "Store & Product Management",
      "Analytics & Insights",
      "Secure Payments",
      "Business Tools",
      "Customer Growth",
    ],
  },
  {
    name: "Premium Plan",
    monthly: 299,
    yearly: 2999,
    features: [
      "Store & Product Management",
      "Advanced Analytics & Insights",
      "Secure Payments",
      "Enhanced Business Tools",
      "Priority Customer Growth",
    ],
    popular: true,
  },
];

// Particle Component
const Particle = ({ size, color, xStart, yStart, xEnd, yEnd, duration }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ width: size, height: size, top: yStart, left: xStart }}
    animate={{ x: xEnd, y: yEnd }}
    transition={{ repeat: Infinity, duration: duration, ease: "easeInOut", repeatType: "mirror" }}
  />
);

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-transparent ">
      {/* Background Waves / Shapes */}
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

        {/* Floating Particles */}
        <Particle size={6} color="bg-indigo-400" xStart="10%" yStart="20%" xEnd={50} yEnd={-20} duration={15} />
        <Particle size={4} color="bg-pink-400" xStart="70%" yStart="10%" xEnd={-30} yEnd={30} duration={20} />
        <Particle size={5} color="bg-purple-400" xStart="30%" yStart="80%" xEnd={20} yEnd={-40} duration={18} />
        <Particle size={3} color="bg-indigo-300" xStart="80%" yStart="70%" xEnd={-40} yEnd={-30} duration={22} />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-8 text-gradient"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h2>

        {/* Monthly / Yearly Toggle */}
        <div className="flex justify-center mb-12 items-center gap-4">
          <span className={`${!isYearly ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
            Monthly
          </span>
          <button
            className={`w-14 h-7 rounded-full p-1 transition-colors ${
              isYearly
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                : "bg-gray-300"
            }`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform ${
                isYearly ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`${isYearly ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
            Yearly
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`flex-1 rounded-2xl p-8 shadow-xl transition-transform duration-300 cursor-pointer relative
                ${
                  plan.name === "Premium Plan"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-105"
                    : "bg-white text-gray-900"
                }
              `}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-yellow-400 text-purple-900 font-bold px-4 py-1 rounded-full shadow-lg text-sm">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

              {/* Price */}
              <p className="text-3xl font-bold mb-6">
                ₹{isYearly ? plan.yearly : plan.monthly} {isYearly ? "/ year" : "/ month"}
              </p>

              {/* Features */}
              <ul className="mb-6 text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.span
                      className="w-6 h-6 mr-2 text-green-400 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 20 }}
                    >
                      &#10003;
                    </motion.span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300
                  ${
                    plan.name === "Premium Plan"
                      ? "bg-white text-purple-600 hover:bg-white/90"
                      : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
                  }
                `}
              >
                {isYearly ? `Get ${plan.name} Yearly` : `Get ${plan.name} Monthly`}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


// import Marquee from "react-fast-marquee";
// import TestimonialCard from "../components/TestimonialCard";
// import { testimonialsData } from "../data/testimonialsData";
// import SectionTitle from "../components/SectionTitle";

// export default function Testimonials() {
//     return (
//         <>
//             <SectionTitle text1="Testimonials" text2="Our Social Proof" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />

//             <Marquee className="max-w-5xl mx-auto mt-11" gradient={true} speed={25}>
//                 <div className="flex items-center justify-center py-5">
//                     {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
//                         <TestimonialCard key={index} testimonial={testimonial} />
//                     ))}
//                 </div>
//             </Marquee>
//             <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right">
//                 <div className="flex items-center justify-center py-5">
//                     {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
//                         <TestimonialCard key={index} testimonial={testimonial} />
//                     ))}
//                 </div>
//             </Marquee>
//         </>
//     );
// }