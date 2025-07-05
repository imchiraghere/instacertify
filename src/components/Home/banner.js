import { PAGE_SLUG } from "@/utills/const";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ConsultationForm from "../ConsulationForm";

const Banner = ({ onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="full-width banner-hero bg-orange-100 banner-1">
      <div className="px-[12px] md:px-[53px]  xl:px-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
        {/* Left Side Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-chivo font-bold lg:text-display-2 mb-[40px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Be
            <span className="text-green-900">
              &nbsp;tested. Be Certified.&nbsp;
            </span>
            <span>Be Unstoppable</span>
          </motion.h1>

          <motion.p
            className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            No Matter What You Make, Where You Make, Our Quality Solutions Are
            Always For You.
          </motion.p>

          <motion.div
            className="flex items-center justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Link
                style={{ backgroundColor: !hovered ? "#ec691f" : "#065175" }}
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[18px] rounded-[50px] text-white hover:-translate-y-[2px] text-white text-heading-6 tracking-wide mr-[22px]"
                href={PAGE_SLUG.ABOUT_US}
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                  Get Started
                </span>
                <i>
                  <img
                    style={{
                      transform: hovered ? "translateX(8px)" : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                    className="ml-[7px] w-[12px] filter-white group-hover:filter-orange"
                    src="./assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side Form Animation */}
        <motion.div
          className="hidden relative flex-1 h-auto self-stretch lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="w-full animate-hero-thumb-sm-animatio">
            <ConsultationForm />
          </div>
          <div
            style={{ left: "-10%" }}
            className="absolute opacity-80 animate-float max-w-[176px] bottom-[10%]"
          >
            <div className="relative bg-green-900 bg-opacity-80 rounded-2xl overflow-hidden grid place-items-center">
              <img
                className="h-full w-full object-cover"
                src="./assets/images/certficate.jpg"
                alt="Agon"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
