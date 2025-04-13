import React from "react";
import { motion } from "motion/react";

const Softwares = () => {
  const featuresList = [
    { icon: "🔧", name: "Builder", description: "App/Game creator" },
    { icon: "🧠", name: "Logic", description: "Node or script system" },
    { icon: "🖌️", name: "Styler", description: "UI/UX Design" },
    { icon: "🎭", name: "Animator", description: "2D/3D Animations" },
    { icon: "🌐", name: "Connect", description: "APIs, multiplayer, etc." },
    { icon: "🚀", name: "Launchpad", description: "Build & deploy" },
    { icon: "🧪", name: "Labs", description: "Beta testing tools" },
    { icon: "📊", name: "Analytics", description: "User & crash data" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto mt-12 mb-12 md:mt-20 md:mb-20 flex w-full md:w-3/5 flex-col items-center gap-2 px-4"
    >
      <div className="flex h-auto w-full flex-row items-center justify-center gap-4 md:gap-6 overflow-x-auto sm:overflow-visible rounded-2xl bg-[#606060]/20 px-4 py-6 md:px-6">
        {featuresList.map((feature, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center cursor-pointer transition-all ease-in-out">
            {/* Improved tooltip positioning for better visibility */}
            <div className="absolute bottom-[calc(100%+8px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="bg-black/80 text-white px-3 py-2 rounded-lg text-center min-w-[120px] shadow-lg">
                <div className="font-semibold text-sm">{feature.name}</div>
                <div className="text-xs text-gray-300">
                  {feature.description}
                </div>
                <div className="absolute left-1/2 bottom-[-6px] -translate-x-1/2 w-3 h-3 bg-black/80 rotate-45"></div>
              </div>
            </div>
            <div className="text-3xl md:text-4xl hover:scale-110 transition-transform">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Softwares;
