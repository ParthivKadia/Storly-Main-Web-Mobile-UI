import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-28 pt-5 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="/AboutImg.png"
              alt="Storly platform"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl font-extrabold text-foreground mb-6">
              Empowering Creators to Build Their Own Digital Storefront
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Storly is a modern commerce platform built for creators,
              entrepreneurs, and small businesses who want to sell online
              without the complexity of traditional ecommerce platforms.
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to simplify online selling by giving creators
              a powerful storefront, product management tools, and analytics —
              all in one place.
            </p>

            <div className="space-y-3">

              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Creator-first platform</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Simple store management</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <p>Built for modern digital commerce</p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
