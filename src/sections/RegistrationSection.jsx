import { useState } from "react";
import { motion } from "framer-motion";

const productCategories = [
  "Electronics",
  "Apparel",
  "Home & Living",
  "Health & Beauty",
  "Books",
  "eBooks",
  "Courses",
  "Templates",
  "Music",
  "Art",
  "Consulting",
  "Freelancing",
  "Coaching",
  "Event Management",
  "Other",
];

const businessTypes = ["Seller", "Business", "Creator"];

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

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-transparent pt-8 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Start Your Store Today
        </motion.h2>

        <motion.p
          className="text-gray-600 text-base sm:text-lg md:text-xl mb-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Join as a Seller, Business, or Creator and showcase your products across India.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-6 md:col-span-2"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name / Business Name"
              className="input"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />

            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Store Username"
              className="input"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="input"
              />
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="input"
              />
            </div>

            <div className="flex gap-3 flex-wrap">
              {businessTypes.map((type) => (
                <motion.button
                  key={type}
                  type="button"
                  onClick={() => handleBusinessTypeSelect(type)}
                  className={`px-5 py-2 rounded-full font-semibold transition ${
                    form.businessType === type
                      ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                      : "border border-gray-300 text-gray-700"
                  }`}
                  whileHover={{ scale: 1.03 }}
                >
                  {type}
                </motion.button>
              ))}
            </div>

            <div>
              <p className="font-semibold mb-2">Select Product Categories</p>
              <div className="flex flex-wrap gap-2">
                {productCategories.map((cat) => (
                  <label
                    key={cat}
                    className={`px-3 py-2 rounded-full border text-sm cursor-pointer transition ${
                      form.categories.includes(cat)
                        ? "bg-purple-500 text-white border-purple-500"
                        : "border-gray-300 text-gray-700"
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

            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="Website URL"
              className="input"
            />

            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Short Bio"
              className="input min-h-32 resize-none"
            />

            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Create My Store
            </motion.button>
          </motion.form>

          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-2xl h-fit">
            <h3 className="text-xl font-bold mb-4 text-center">Store Preview</h3>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
              <p className="text-center font-bold break-words">
                {form.name || "Your Store Name"}
              </p>
              <p className="text-center break-words">
                {form.businessType || "Business Type"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
