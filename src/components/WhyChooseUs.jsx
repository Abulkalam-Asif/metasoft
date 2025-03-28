import React from "react";

import { IoRocketSharp } from "react-icons/io5";
import { GiProcessor } from "react-icons/gi";
import { BsTools } from "react-icons/bs";
import { BsLightningFill } from "react-icons/bs";
import { motion } from "motion/react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: BsLightningFill,
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
      description: "Built to grow with your vision",
    },
  ];

  console.log(features);

  return (
    <section>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}
      viewport={{ once: true,amount: 1  }}
      className="max-w-4/5 border border-gray-400/50 rounded-4xl  flex  bg-white/10 text-white items-center justify-around mb-8 px-2 py-4 mx-auto gap-x-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center justify-center gap-x-0.5">
            <span className="text-[42px] mr-2 " style={{ color: feature.iconColor }}>
              <feature.icon />
            </span>
            <div>
              <h3 className="text-base font-medium">{feature.title}</h3>
              <p className="max-w-[200px] text-white/50 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
