import { useState } from "react";
import { motion } from "framer-motion";

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

const Particle = ({ size, color, xStart, yStart, xEnd, yEnd, duration }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{ width: size, height: size, top: yStart, left: xStart }}
    animate={{ x: xEnd, y: yEnd }}
    transition={{
      repeat: Infinity,
      duration,
      ease: "easeInOut",
      repeatType: "mirror",
    }}
  />
);

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative overflow-hidden py-20 md:py-24 bg-transparent">
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

        <Particle size={6} color="bg-indigo-400" xStart="10%" yStart="20%" xEnd={24} yEnd={-12} duration={15} />
        <Particle size={4} color="bg-pink-400" xStart="70%" yStart="10%" xEnd={-18} yEnd={18} duration={20} />
        <Particle size={5} color="bg-purple-400" xStart="30%" yStart="80%" xEnd={14} yEnd={-20} duration={18} />
        <Particle size={3} color="bg-indigo-300" xStart="80%" yStart="70%" xEnd={-18} yEnd={-18} duration={22} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pricing Plans
        </motion.h2>

        <div className="flex justify-center mb-12 items-center gap-4">
          <span className={!isYearly ? "text-gray-900 font-semibold" : "text-gray-400"}>
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
          <span className={isYearly ? "text-gray-900 font-semibold" : "text-gray-400"}>
            Yearly
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`w-full md:flex-1 rounded-2xl p-6 sm:p-8 shadow-xl transition-transform duration-300 relative ${
                plan.name === "Premium Plan"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  : "bg-white text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-900 font-bold px-4 py-1 rounded-full shadow-lg text-sm whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>

              <p className="text-3xl font-bold mb-6">
                ₹{isYearly ? plan.yearly : plan.monthly} {isYearly ? "/ year" : "/ month"}
              </p>

              <ul className="mb-6 text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.li key={i} className="flex items-start">
                    <motion.span
                      className="w-6 h-6 mr-2 text-green-400 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 20 }}
                    >
                      &#10003;
                    </motion.span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  plan.name === "Premium Plan"
                    ? "bg-white text-purple-600 hover:bg-white/90"
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:opacity-90"
                }`}
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
