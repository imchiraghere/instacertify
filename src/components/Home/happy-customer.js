import { HAPPY_CUSTOMER_DATA } from "@/utills/const";
import Slider from "react-slick";
import Image from "next/image";
import { useRef } from "react";

const HappyCustomer = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <div className="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
        <div>
          <h2 className="font-bold font-chivo mx-auto text-[40px] leading-[44px] md:text-[40px] md:leading-[40px] text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Our Happy Customers
          </h2>
          <p className="text-quote md:text-lead-md text-gray-600 mx-auto max-w-[976px]">
            Know about our clients, we are a woldwide corporate brand
          </p>
        </div>
        <div className="flex items-center gap-5 self-end">
          <div
            onClick={() => sliderRef.current?.slickPrev()}
            className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev"
          >
            <img
              className="group-hover:filter-white"
              src="/assets/images/icons/icon-prev.svg"
              alt="control icon button"
            />
          </div>
          <div
            onClick={() => sliderRef.current?.slickNext()}
            className="grid place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next"
          >
            <img
              className="group-hover:filter-white"
              src="/assets/images/icons/icon-next.svg"
              alt="control icon button"
            />
          </div>
        </div>
      </div>

      <div className="feedback-list ml-[-15px]">
        <Slider ref={sliderRef} {...settings}>
          {HAPPY_CUSTOMER_DATA.map((item, index) => (
            <div
              key={index}
              className="px-[15px] mt-[2px]" // Adds spacing between slides
            >
              <div
                style={{ borderRadius: 10 }}
                className={`border p-10 transition-all duration-300 hover:translate-y-[-2px] ${item.borderClass}`}
              >
                {/* <Image
                  src={item.image}
                  width={55}
                  height={55}
                  alt={item.name}
                  className="object-cover rounded-full mb-[22px]"
                /> */}
                <p className="text-heading-6 font-chivo font-bold mb-[6px]">
                  {item.name}
                </p>
                {/* <p className="text-sm font-bold mb-5 text-gray-700">
                  {item.company}
                </p> */}
                <p className="text-text text-gray-500">{item.message}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HappyCustomer;
