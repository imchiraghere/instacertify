import { PAGE_SLUG } from "@/utills/const";
import CountUp from "../CounterAnimate";
import AnimatedButton from "../AnimatedButton";
import { Award, Users, Trophy, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Banner = () => {
  const [columns, setColumns] = useState(true); // Default to desktop

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(true); // Mobile
      } else {
        setColumns(false); // Desktop
      }
    };

    updateColumns(); // Initial check
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div style={{ overflow: "hidden" }} className="full-width bg-bg-2">
      <div className="text-center px-5 pt-[48px] lg:pb-[30px] ">
        <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2">
          About Us
        </h2>
      </div>

      <div className="px-[12px] md:px-[36px] xl:px-0 z-10 relative mx-auto !mt-0 py-[35px] md:py-[60px] max-w-[1320px] lg:flex lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-[60%] lg:mr-[150px]"
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            // style={{ color: "#fff" }}
            className="font-chivo inline-block ml-[42px] bg-bg-6 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[10px]"
          >
            Certification made easy with instacertify
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-chivo font-bold text-[28px] lg:text-display-2 mb-[10px] lg:mb-[40px]"
          >
            India’s Leading Product Testing and Consultancy Firm since 2015
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" text-[14px] md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[20px] lg:mb-[40px]"
          >
            Revolutionizing professional certification with instant,
            industry-recognized credentials that empower careers worldwide
          </motion.p>
          <div className="flex items-center justify-start mb-[50px]">
            <AnimatedButton title={"Contact Us"} />
          </div>
        </motion.div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex w-full flex-row lg:flex-col gap-x-[20px] lg:gap-y-[40px]"
          >
            {columns ? (
              <>
                <div className="flex items-start gap-[16px] sm:gap-[20px] md:gap-[26px]">
                  <div className="bg-white rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                    <Users size={26} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[18px] sm:text-[22px] md:text-[25px] lg:text-heading-3 text-green-900 mb-[5px]">
                      +
                      <CountUp
                        from={0}
                        to={500}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500">
                      Certified Professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[16px] sm:gap-[20px] md:gap-[26px]">
                  <div className="bg-white rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                    <Globe size={26} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[18px] sm:text-[22px] md:text-[25px] lg:text-heading-3 text-green-900 mb-[5px]">
                      +
                      <CountUp
                        from={0}
                        to={1000}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500">
                      Certification Programs
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[16px] sm:gap-[20px] md:gap-[26px]">
                  <div className="bg-white rounded-full w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] flex items-center justify-center">
                    <Award size={26} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[18px] sm:text-[22px] md:text-[25px] lg:text-heading-3 text-green-900 mb-[5px]">
                      <CountUp
                        from={0}
                        to={99}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                      %
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500">
                      Success Rate
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                  <div className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center">
                    <Users size={40} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                      +
                      <CountUp
                        from={0}
                        to={500}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                    </h2>
                    <p className="text-text text-gray-500">
                      Certified Professionals
                    </p>
                  </div>
                </div>
                <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                  <div className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center">
                    <Globe size={40} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                      +
                      <CountUp
                        from={0}
                        to={1000}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />
                    </h2>
                    <p className="text-text text-gray-500">
                      Certification Programs
                    </p>
                  </div>
                </div>
                <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                  <div className="bg-white rounded-full w-[80px] h-[80px] flex items-center justify-center">
                    <Award size={40} />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">
                      <CountUp
                        from={0}
                        to={99}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />{" "}
                      %
                    </h2>
                    <p className="text-text text-gray-500"> Success Rate</p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
          {/* <div className="absolute hidden bottom-[-60px] left-[-117px] translate-x-[-260px] lg:block">
            <img
              className="h-full w-full object-cover animate-hero-thumb-sm-animation"
              src="/assets/images/hero-about2.png"
              alt="Agon"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Banner;
