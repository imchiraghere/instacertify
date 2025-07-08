"use client";

import { motion } from "framer-motion";
import { Eye, Target, Zap, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "Transparency",
    description:
      "We maintain open and honest communication, keeping you informed throughout the process and ensuring clarity at every step.",
    icon: "🧾",
    color: "#2ED47A",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Understanding and meeting the distinctive requirements of each client lies at the core of our efforts when providing tailored solutions.",
    icon: "🎯",
    color: "#0E3C61",
  },
  {
    title: "Hassle-Free Process",
    description:
      "Experience seamless compliance with our streamlined and efficient process designed to avoid complexity and save time.",
    icon: "⚙️",
    color: "#FA5E3A",
  },
];

const SimpleFocusSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // <section className="focus-section-glass">
    //   <motion.h2
    //     className="focus-title"
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     We make it <span className="highlight-orange">simple</span> to{" "}
    //     <br className="hidden sm:block" />
    //     focus on what you love
    //   </motion.h2>

    //   <motion.div
    //     className="line-connector"
    //     initial={{ pathLength: 0 }}
    //     whileInView={{ pathLength: 1 }}
    //     transition={{ duration: 2, ease: "easeInOut" }}
    //   >
    //     <svg viewBox="0 0 600 80" preserveAspectRatio="none">
    //       <path
    //         d="M10,80 C100,10 500,10 590,80"
    //         fill="none"
    //         stroke="#fa5e3a"
    //         strokeWidth="2"
    //         strokeDasharray="5,5"
    //       />
    //     </svg>
    //   </motion.div>

    //   <div className="focus-card-grid">
    //     {cards.map((card, idx) => (
    //       <motion.div
    //         key={idx}
    //         className="focus-card-glass"
    //         initial={{ opacity: 0, y: 40 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5, delay: idx * 0.2 }}
    //       >
    //         <div
    //           className="icon-circle-glass"
    //           style={{ backgroundColor: card.color }}
    //         >
    //           {card.icon}
    //         </div>
    //         <h3>{card.title}</h3>
    //         <p>{card.description}</p>
    //       </motion.div>
    //     ))}
    //   </div>
    // </section>

    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 py-16 px-4 sm:px-6 py-[40px] lg:px-8">
        <main className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <header className="text-center mb-24">
            <div className="trust-badge animate-slide-down">
              <Sparkles className="w-4 h-4" style={{ color: "#f97316;" }} />
              <span className="text-sm font-medium text-gray-600">
                Trusted by 10,000+ clients worldwide
              </span>
            </div>

            <h2
              className={`main-headline ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              We make it{" "}
              <span className="headline-highlight">
                simple
                <div className="headline-underline animate-expand"></div>
                <div className="headline-dot animate-ping"></div>
              </span>{" "}
              to
              <br />
              <span className="gradient-text">focus on what you love</span>
            </h2>

            <p
              className={`main-description ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Experience excellence through our innovative approach to
              delivering exceptional results that exceed expectations.
            </p>
          </header>

          {/* Enhanced Curved Connection */}
          <div className="relative mb-16" aria-hidden="true">
            <svg
              className="connecting-line hidden lg:block"
              viewBox="0 0 1200 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
              <path
                d="M50 40 Q300 20 600 40 T1150 40"
                stroke="url(#lineGradient)"
                className="animate-draw-line"
              />
              <circle
                cx="200"
                cy="35"
                className="line-dot animate-bounce-delayed"
                fill="#06b6d4"
              />
              <circle
                cx="600"
                cy="40"
                className="line-dot-large animate-bounce"
                fill="#3b82f6"
              />
              <circle
                cx="1000"
                cy="35"
                className="line-dot animate-bounce-delayed-2"
                fill="#f97316"
              />
            </svg>
          </div>

          <div className="focus-card-grid">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className="focus-card-glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div
                  className="icon-circle-glass"
                  style={{ backgroundColor: card.color }}
                >
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default SimpleFocusSection;
