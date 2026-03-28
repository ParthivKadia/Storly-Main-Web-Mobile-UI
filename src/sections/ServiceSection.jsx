import { motion } from "framer-motion";

const services = [
  { title: "Store Builder", description: "Launch your own digital storefront in minutes.", image: "/Store.png" },
  { title: "Product Management", description: "Organize and manage your products easily.", image: "/ProductMg.png" },
  { title: "Sales Analytics", description: "Track store performance with powerful insights.", image: "/SalesAnal.png" },
  { title: "Secure Payments", description: "Accept payments from multiple providers.", image: "/Payments.png" },
  { title: "Delivery & Fulfillment", description: "Manage shipping and order deliveries.", image: "/Delivery.png" },
  { title: "Customer Growth", description: "Reach more customers and grow your brand.", image: "/Audience.png" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.10),_transparent_28%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">A Complete Platform to Build, Sell & Grow</h2>
          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to launch, manage, and grow your online storefront with Storly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, index) => (
            <motion.div key={index} whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="group p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl hover:border-purple-300 transition duration-300">
              <div className="mb-6 flex justify-center">
                <img src={service.image} alt={service.title} className="w-24 sm:w-28 group-hover:scale-110 transition duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
