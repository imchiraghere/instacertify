import { STRATEGY_DATA } from "@/utills/const";
import Link from "next/link";
import { useState } from "react";

const Strategy = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="px-[12px] md:px-[36px] mt-[30px] xl:px-0 lg:mt-[100px]">
      <div className="textCenter">
        <h2 className="heading">Our Services</h2>
        <p className="subText">
          We work with more than 200 certified experts and laboratories to
          present reliable solutions for the required testing, such as the BIS,
          ASTM, IS, and ISO standards.
        </p>
      </div>

      <div className="lg:flex lg:gap-5 xl:gap-[30px] justify-center ">
        {STRATEGY_DATA?.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              // maxWidth: "25%",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // marginLeft: "1%",
            }}
            className={`rounded-2xl md:max-w-[25%] max-w-[100px] p-[20px] md:py-[40px] md:px-[40px] relative mb-5 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px] ${item.bgClass}`}
          >
            <div>
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src={item.icon}
                alt="icon"
              />
              <h2 className="font-bold font-chivo text-[25px] leading-[32px]  mb-[30px]">
                {item.title}
              </h2>
              <p className="text-excerpt text-gray-600 mb-[30px] max-w-[120px]">
                {item.description}
              </p>
            </div>
            <button type="button">
              <Link
                className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[10px] lg:px-[25px] lg:py-[18px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] w-fit hover:translate-y-[-3px]"
                href="/"
              >
                <span className="block text-inherit w-full h-full rounded-[50px] text-base font-chivo font-semibold">
                  Learn More
                </span>
                <i>
                  <img
                    style={{
                      transform:
                        hovered === index ? "translateX(5px)" : "translateX(0)",
                      transition: "transform 0.3s ease",
                    }}
                    className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                    src="/assets/images/icons/icon-right.svg"
                    alt="arrow right icon"
                  />
                </i>
              </Link>
            </button>
            {/* <img
              className="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
              src={item.iconWhite}
              alt="icon"
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategy;
