import React from "react";

import { IoRocketSharp } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { BsLightningFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";

import { motion } from "motion/react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaLightbulb,
      iconColor: "#34FF41",
      title: "Instant Launch",
      description: "Deploy your apps & games effortlessly",
    },
    {
      icon: GiProcessor,
      iconColor: "#4AD4F4",
      title: "Next-Gen Engine",
      description: "High-performance, ultra-smooth experiences",
    },
    {
      icon: BsTools,
      iconColor: "#E1E5F1",
      title: "Seamless Development",
      description: "Intuitive tools for beginners & pros",
    },
    {
      icon: IoRocketSharp,
      iconColor: "#DB5968",
      title: "Scalable & Future-Ready",
      description: "Built to grow with your vision  ",
    },
  ];

  console.log(features);

  return (
    <section className=" px-4 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
        className="max-w-7xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 border border-gray-400/50 rounded-4xl  bg-gradient-to-br to-white/10 from-[#34FF41]/30 t-white/10 text-white  mb-8  py-6  mx-auto gap-x-2 px-4
        "
      >
        {features.map((feature, index) => (
          <div key={index} className="flex   mx-auto gap-x-0.5">
            <span
              className=" text-[42px] mr-2 "
              style={{ color: feature.iconColor }}
            >
              <feature.icon />
            </span>
            <div>
              <h3 className="text-base font-medium">{feature.title}</h3>
              <p className="max-w-[200px] text-white/50 text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
