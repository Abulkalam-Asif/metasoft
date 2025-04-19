import React from "react";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="pb-12 px-4 bg-transparent">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl bg-[var(--bg-secondary)]/80 mx-auto border border-[var(--accent-primary)]/30 rounded-3xl"
        >
          <div className="flex flex-col p-8 sm:p-12 md:p-16 lg:p-20 gap-y-4">
            <h3 className="text-base md:text-lg font-bold text-[var(--text-primary)]">
              About MetaSoft
            </h3>
            <div className="flex flex-col text-[var(--text-secondary)] text-sm md:text-base gap-y-2">
              <p>
                MetaSoft was founded on August 15, 2024, by Gameover with a
                clear mission: to deliver innovative and effective software
                solutions that help businesses thrive in a digital world.
                Gameover's vision for MetaSoft is to create technology that is
                both powerful and user-friendly, tailored to meet the unique
                needs of each client.
              </p>
              <p>
                At MetaSoft, the focus is on providing custom software, mobile
                applications, and enterprise systems that drive growth and
                efficiency. With a commitment to quality and innovation, every
                solution is crafted personally by Gameover, ensuring that each
                product aligns with the vision and goals of the client.
              </p>
              <span className="w-full text-center mt-2">Your vision, Our code, The perfect road. </span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutSection;
