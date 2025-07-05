import { LOGO_ITEMS } from "@/utills/const";
import Link from "next/link";
import Slider from "react-slick";

const Logos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
      <h2 className="text-center font-chivo text-heading-4 font-bold mb-6  text-gray-900">
        Endorsed By
      </h2>

      <Slider {...settings}>
        {LOGO_ITEMS.map((logo, index) => (
          <div key={index} className="px-4">
            {" "}
            {/* Space between slides */}
            <Link
              href="/"
              className="block w-full h-[80px] flex items-center justify-center"
            >
              <div className="w-[150px] h-[60px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Logos;
