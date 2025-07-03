import { TABDATA } from "@/utills/const";
import Link from "next/link";
import { useState } from "react";

const WhyTrust = ({ onOpen }) => {
  const [activeTab, setActiveTab] = useState("toys");
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      {showVideo && (
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-80 video-iframe bg-[#0b0b0b] z-[999999]">
          <div className="mx-auto video w-1/2">
            <div className="flex justify-end">
              <button
                className="text-white text-[20px]"
                type="button"
                title="Close (Esc)"
                onClick={() => setShowVideo(false)}
              >
                x
              </button>
            </div>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/oRI37cOPBQQ?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
        <div className="text-center">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            See why we are trusted the world over
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            From secure digital certifications to seamless verification
            processes, Instacertify empowers organizations globally with
            trusted, tamper-proof credentials. Discover why educational
            institutions, enterprises, and professionals rely on us to deliver
            authenticity at scale.
          </p>
        </div>

        <div className="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
          {TABDATA.map((tab) => (
            <p
              key={tab.id}
              style={{
                backgroundColor: activeTab === tab.id ? "#fff" : "#f1f1f1",
                color: activeTab === tab.id ? "#ec691f" : "#065175",
                borderColor: activeTab === tab.id ? "#ec691f" : "",
              }}
              className={`text-gray-600 font-bold  rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-orange-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px] ${
                activeTab === tab.id ? "active bg-white" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </p>
          ))}
        </div>

        {TABDATA.map((tab) => (
          <div
            key={tab.id}
            className={`tab-content lg:gap-[30px] lg:flex ${tab.bgClass} ${
              activeTab === tab.id ? "" : "!hidden"
            }`}
          >
            <div className="p-5 md:p-[60px] lg:w-1/2">
              <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                {tab.heading}
              </h2>
              <p className="text-excerpt mb-[40px]">{tab.content}</p>
              <button type="button">
                <Link
                  className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white hover:-translate-y-[2px] bg-white w-fit"
                  href="/"
                >
                  <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                    Learn More
                  </span>
                  <i>
                    <img
                      className="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                      src="/assets/images/icons/icon-right.svg"
                      alt="arrow right icon"
                    />
                  </i>
                </Link>
              </button>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="h-full w-full object-cover"
                src={tab.image}
                alt={tab.label}
              />
              <img
                className="absolute top-0 right-0"
                src="/assets/images/icons/pattern-3.svg"
                alt="pattern"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"
              >
                <img
                  src="/assets/images/icons/icon-play.svg"
                  alt="play button"
                  width={30}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyTrust;
