import { NEWS_DATA } from "@/utills/const";
import Link from "next/link";

const News = () => {

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <div className="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
        <div>
          <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
            Latest News
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600">
            From Our blog and Event fanpage
          </p>
        </div>
        <button type="button">
          <Link
            className="flex items-center inline-block z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:-translate-y-[2px] bg-black text-white w-fit"
            href="/"
          >
            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
              View More
            </span>
            <i>
              <img
                className="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                src="/assets/images/icons/icon-right.svg"
                alt="arrow right icon"
              />
            </i>
          </Link>
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
        {NEWS_DATA.map((item, index) => (
          <a key={index} className="block group" href={item.link}>
            <div className="flex items-center mb-[11px]">
              <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" />
              <span className="uppercase text-gray-500">{item.category}</span>
            </div>
            <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
              {item.title}
            </p>
            <div className="relative mb-16">
              <div className="relative">
                <div className="pr-[26px] aspect-[430/275]">
                  <img
                    className="h-full w-full object-cover rounded-2xl z-10 relative"
                    src={item.image}
                    alt="Agon"
                  />
                </div>
                <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                  <div
                    className={`w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 ${item.bgClass} group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]`}
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
