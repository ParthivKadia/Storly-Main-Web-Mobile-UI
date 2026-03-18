import { useState } from "react";
import { motion } from "framer-motion";


const productCategories = [
  "Electronics", "Apparel", "Home & Living", "Health & Beauty", "Books",
  "eBooks", "Courses", "Templates", "Music", "Art",
  "Consulting", "Freelancing", "Coaching", "Event Management", "Other",
];

const businessTypes = ["Seller", "Business", "Creator"];

const PARTICLE_COUNT = 15;

const RegistrationSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    businessType: "",
    categories: [],
    website: "",
    bio: "",
  });

  // ✅ FIXED (removed TS types)
  const handleChange = (e) => {
    const target = e.target;
    const { name, value } = target;

    if (name === "categories") {
      const checked = target.checked;

      setForm((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value),
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleBusinessTypeSelect = (type) => {
    setForm((prev) => ({ ...prev, businessType: type }));
  };

  // ✅ FIXED
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Store registration submitted!");

    setForm({
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      businessType: "",
      categories: [],
      website: "",
      bio: "",
    });
  };

  const businessColor = (type) => {
    switch (type) {
      case "Seller":
        return ["#6366f1","#8b5cf6","#ec4899"];
      case "Business":
        return ["#10b981","#14b8a6","#06b6d4"];
      case "Creator":
        return ["#ec4899","#c026d3","#6366f1"];
      default:
        return ["#9ca3af","#d1d5db","#6b7280"];
    }
  };

  const generateParticles = () => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 3,
    }));
  };

  const particles = generateParticles();

  return (
<section id="registration" className="bg-transparent pt-8 scroll-mt-24">          <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Start Your Store Today
        </motion.h2>

        <motion.p
          className="text-gray-600 text-lg md:text-xl mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join as a Seller, Business, or Creator and showcase your products across India.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-10 shadow-2xl flex flex-col gap-6 col-span-2"
          >
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name / Business Name" className="input" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
            <input name="username" value={form.username} onChange={handleChange} placeholder="Store Username" className="input" />

            <div className="grid grid-cols-2 gap-4">
              <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" className="input" />
              <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm Password" className="input" />
            </div>

            {/* Business Type */}
            <div className="flex gap-3 flex-wrap">
              {businessTypes.map((type) => (
                <motion.button
                  key={type}
                  type="button"
                  onClick={() => handleBusinessTypeSelect(type)}
                  className={`px-6 py-2 rounded-full font-semibold ${
                    form.businessType === type
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                      : "border"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            {/* Categories */}
            <div>
              <p className="font-semibold mb-2">Select Product Categories</p>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((cat) => (
                  <label
                    key={cat}
                    className={`px-3 py-1 rounded-full border cursor-pointer ${
                      form.categories.includes(cat)
                        ? "bg-purple-500 text-white"
                        : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      value={cat}
                      name="categories"
                      onChange={handleChange}
                      className="hidden"
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <input name="website" value={form.website} onChange={handleChange} placeholder="Website URL" className="input" />
            <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio" className="input" />

            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Create My Store
            </motion.button>
          </motion.form>

          {/* PREVIEW */}
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold mb-4 text-center">Store Preview</h3>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <p className="text-center font-bold">{form.name || "Your Store Name"}</p>
              <p className="text-center">{form.businessType || "Business Type"}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

// import { ChevronDown } from "lucide-react";
// import { useState } from "react";
// import SectionTitle from "../components/SectionTitle";
// import { faqsData } from "../data/faqsData";

// export const FaqSection = () => {
//     const [openIndex, setOpenIndex] = useState(null);
//     return (
//         <div className="max-w-2xl mx-auto flex flex-col items-center justify-center px-4 md:px-0">
//             <SectionTitle text1="FAQ's" text2="Frequently asked questions" text3="Ship Beautiful Frontends Without the Overhead — Customizable, Scalable, and Developer-Friendly UI Components." />
//             <div className="mt-8">
//                 {faqsData.map((faq, index) => (
//                     <div className="border-b border-slate-200 py-4 cursor-pointer w-full" key={index} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
//                         <div className="flex items-center justify-between">
//                             <h3 className="text-base font-medium">
//                                 {faq.question}
//                             </h3>
//                             <ChevronDown size={18} className={`${openIndex === index && "rotate-180"} transition-all duration-500 ease-in-out`} />
//                         </div>
//                         <p className={`text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-xl ${openIndex === index ? "opacity-100 max-h-[500px] translate-y-0 pt-4" : "opacity-0 max-h-0 overflow-hidden -translate-y-2"}`} >
//                             {faq.answer}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };