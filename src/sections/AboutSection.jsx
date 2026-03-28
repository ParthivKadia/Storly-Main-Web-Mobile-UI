import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="aboutus" className="py-20 md:py-28 pt-5 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <img
              src="/AboutImg.png"
              alt="Storly platform"
              className="w-full max-w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Empowering Creators to Build Their Own Digital Storefront
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Storly is a modern commerce platform built for creators,
              entrepreneurs, and small businesses who want to sell online
              without the complexity of traditional ecommerce platforms.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Our mission is to simplify online selling by giving creators
              a powerful storefront, product management tools, and analytics —
              all in one place.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl shrink-0">✓</span>
                <p>Creator-first platform</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl shrink-0">✓</span>
                <p>Simple store management</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl shrink-0">✓</span>
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
