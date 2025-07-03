
import { OFFER_DATA } from "@/utills/const";

const Offer = () => {

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <div className="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
        <img
          className="absolute top-0 left-0 z-0 -translate-x-1/4"
          src="/assets/images/icons/pattern-4.svg"
          alt="pattern icon"
        />
        <div className="text-center relative mb-[70px] md:mb-[90px]">
          <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            What We Offer
          </h2>
          <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
            What makes us different from others? We give holistic solutions with
            strategy, design &amp; technology.
          </p>
        </div>
        <div className="offer-list dots">
          {OFFER_DATA.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white"
            >
              <img
                className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                src={item.icon}
                alt="icon"
              />
              <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
                {item.title}
              </h3>
              <p className="text-text text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
