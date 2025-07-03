import { LOCATION_ADDRESS } from "@/utills/const";
import Image from "next/image";
import { useState } from "react";

const Location = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0 lg:mt-[138px]">
      <div className="text-center mb-[100px]">
        <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">
          Our Location
        </h2>
        <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">
          In a professional context it often happens that private or corporate
          clients order a publication to publish news.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px] ">
        {LOCATION_ADDRESS?.map((loc, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderBottom: `2px solid ${
                hovered === index ? "orange" : "#ccc"
              }`,
            }}
            className="w-full md:w-[60%] lg:w-[40%] flex items-start transition-all duration-300 mb-[33px] hover:translate-y-[-3px]  pb-[50px]"
          >
            <Image
              width={100}
              height={100}
              className="h-[50px] w-[50px] object-cover"
              src="./assets/images/icons/icon-resources.svg"
              alt="icon"
            />
            <div style={{ marginLeft: "3%" }}>
              <h3 className="font-bold ml-[10px]  font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
                {loc?.title}
              </h3>
              <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
                {loc?.address}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0">
          <img
            className="h-full w-full object-cover max-w-[64px]"
            src="./assets/images/icons/icon-cards.svg"
            alt="icon"
          />
          <div>
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
              Studio
            </h3>
            <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
              205 North Michigan Avenue, Suite 810
            </p>
          </div>
        </div>
        <div className="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]">
          <img
            className="h-full w-full object-cover max-w-[64px]"
            src="./assets/images/icons/icon-stats.svg"
            alt="icon"
          />
          <div>
            <h3 className="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">
              Factory
            </h3>
            <p className="text-[#7E7E7E] text-[14px] leading-[18px]">
              205 North Michigan Avenue, Suite 810
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Location;
