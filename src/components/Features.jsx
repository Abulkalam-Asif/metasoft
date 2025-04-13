import React from "react";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="mb-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1280px] mx-auto border-4 rounded-3xl border-[#FF58EE] bg-[radial-gradient(ellipse,_#ff00e6,_#97009b70)] text-white"
      >
        <div className="flex flex-col items-center justify-center mx-auto pb-8 md:pb-16 pt-8 ">
          <span className="bg-[#1E372D] text-sm text-[#00FF4C] px-3 py-2 rounded-full">
            New Update 1.0
          </span>
          <h3 className="flex gap-1 text-xl sm:text-2xl md:text-4xl font-bold text-[#FFA5F6]">
            Check out our new <h3 className="text-white">AI chatbot</h3>
          </h3>
        </div>
        <div className="text-white mb-8 h-[300px] w-11/12 sm:w-4/5 md:w-2/3 lg:h-1/2  mx-auto rounded-2xl overflow-hidden ">
          <video
            src="https://store.ccleaf.com/img/home_showcase.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
