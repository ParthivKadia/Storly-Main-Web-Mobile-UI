import { motion } from "framer-motion";

const services = [
  {
    title: "Store Builder",
    description: "Launch your own digital storefront in minutes.",
    image: "/Store.png",
  },
  {
    title: "Product Management",
    description: "Organize and manage your products easily.",
    image: "/ProductMg.png",
  },
  {
    title: "Sales Analytics",
    description: "Track store performance with powerful insights.",
    image: "/SalesAnal.png",
  },
  {
    title: "Secure Payments",
    description: "Accept payments from multiple providers.",
    image: "/Payments.png",
  },
  {
    title: "Delivery & Fulfillment",
    description: "Manage shipping and order deliveries.",
    image: "/Delivery.png",
  },
  {
    title: "Customer Growth",
    description: "Reach more customers and grow your brand.",
    image: "/Audience.png",
  },
];

const ServicesSection = () => {
  return (
<section id="services" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold">
A Complete Platform to Build, Sell & Grow          </h2>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to launch, manage, and grow
            your online storefront with Storly.
          </p>
        </div>

        {/* Services Grid */}

        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white 
              shadow-sm hover:shadow-2xl hover:border-purple-300 
              transition duration-300"
            >

              <div className="mb-6 flex justify-center">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-28 group-hover:scale-110 transition duration-300"
                />

              </div>

              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground text-center">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;



// import SectionTitle from "../components/SectionTitle";

// export default function FeaturesSection() {
//     return (
//         <>
//             <SectionTitle text1="Features" text2="Features Overview" text3="A visual collection of our most recent works - each piece crafted with intention, emotion and style." />

//             <div className="flex flex-wrap items-center justify-center gap-10 mt-16">
//                 <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
//                     <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-1.png" alt="Card Image" height={400} width={400} />
//                     <h3 className="text-base font-semibold text-slate-700 mt-4">Feedback analyser</h3>
//                     <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
//                 </div>
//                 <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
//                     <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-2.png" alt="Card Image" height={400} width={400} />
//                     <h3 className="text-base font-semibold text-slate-700 mt-4">User management</h3>
//                     <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
//                 </div>
//                 <div className="max-w-80 hover:-translate-y-0.5 transition duration-300">
//                     <img className="rounded-xl" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/features/image-3.png" alt="Card Image" height={400} width={400} />
//                     <h3 className="text-base font-semibold text-slate-700 mt-4">Better invoicing</h3>
//                     <p className="text-sm text-slate-600 mt-1">Get instant insights into your finances with live dashboards.</p>
//                 </div>
//             </div>
//         </>
//     );
// }