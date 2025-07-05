// import { OFFER_DATA } from "@/utills/const";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Offer = () => {
//   const sliderSettings = {
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="px-[12px] md:px-[36px] mt-[70px] xl:px-0">
//       <div className="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px] overflow-hidden">
//         <img
//           className="absolute top-0 left-0 z-0 -translate-x-1/4"
//           src="/assets/images/icons/pattern-4.svg"
//           alt="pattern icon"
//         />
//         <div className="text-center relative mb-[70px] md:mb-[90px]">
//           <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
//             What We Offer
//           </h2>
//           <p className="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">
//             {/* What makes us different from others? We give holistic solutions with
//             strategy, design &amp; technology. */}
//             We Offer an Effective Wide Area Business Solutions
//           </p>
//         </div>

//         {/* Slick Slider */}
//         <Slider {...sliderSettings}>
//           {OFFER_DATA.map((item, index) => (
//             <div key={index} className="px-3">
//               <div className="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] transition-all duration-300 hover:translate-y-[-3px] bg-white">
//                 <img
//                   className="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
//                   src={item.icon}
//                   alt="icon"
//                 />
//                 <h3 className="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">
//                   {item.title}
//                 </h3>
//                 <p className="text-text text-gray-600">{item.desc}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Offer;

import React, { useEffect, useState } from "react";
import { Shield, FileCheck, Globe, FlaskConical } from "lucide-react";

const SERVICES = [
  {
    id: "compliances",
    title: "Compliances",
    description: "Making your product compliance ready",
    icon: Shield,
    position: { top: "-30%", left: "8%" },
    delay: 0,
  },
  {
    id: "registration",
    title: "Registration",
    description: "Covers all the registration that you need",
    icon: FileCheck,
    position: { top: "-15%", left: "20%" },
    delay: 0.5,
  },
  {
    id: "international",
    title: "International",
    description: "Take your product around the globe",
    icon: Globe,
    position: { top: "20%", left: "-25%" },
    delay: 1,
  },
  {
    id: "lab-testing",
    title: "Lab Testing",
    description: "Simply all the test your products needs",
    icon: FlaskConical,
    position: { top: "40%", left: "-20%" },
    delay: 1.5,
  },
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ marginTop: "5%" }}  className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-dots"></div>
      </div>

      <div className="hero-container">
        {/* Main Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h3 className="hero-title">
              Your Product
              <span className="hero-title-highlight"> Certification</span>
              <br />
              Partner
            </h3>
            <p className="hero-subtitle">
              We make product certification simple, fast, and reliable. From
              compliance to global market access, we've got you covered.
            </p>
            {/* <div className="hero-cta">
              <button className="cta-primary">
                Get Started Today
                <div className="cta-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button className="cta-secondary">Learn More</button>
            </div> */}
          </div>

          {/* Girl Image Container */}
          <div className="hero-image-container">
            <div className="image-wrapper">
              <img
                src="/assets/images/whatwe.png"
                alt="Professional consultant"
                className="hero-image"
              />

              {/* Decorative Elements */}
              <div className="image-decoration image-decoration-1"></div>
              <div className="image-decoration image-decoration-2"></div>
              <div className="image-decoration image-decoration-3"></div>
            </div>

            {/* Floating Service Cards */}
            {SERVICES.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`floating-card service-card ${
                    isVisible ? "visible" : ""
                  }`}
                  style={{
                    top: service.position.top,
                    left: service.position.left,
                    animationDelay: `${service.delay}s`,
                  }}
                >
                  <div className="card-icon">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-description">{service.description}</p>
                  </div>
                  <div className="card-glow"></div>
                </div>
              );
            })}

            {/* Floating Particles */}
            <div className="floating-particles">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
