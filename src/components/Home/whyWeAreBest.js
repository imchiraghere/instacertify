import Image from "next/image";
import AnimatedButton from "../AnimatedButton";
import React, { useEffect, useState } from "react";
import { ClipboardCheck, Wrench, Tag } from "lucide-react";
import Slider from "react-slick";

const services = [
  {
    icon: <ClipboardCheck size={32} />,
    title: "Product Certification Solutions",
    desc: "Access privately syndicated deals managed by experienced operators.",
  },
  {
    icon: <Wrench size={32} />,
    title: "Testing",
    desc: "Helping you with testing that your product requires, not what we sell.",
  },
  {
    icon: <Tag size={32} />,
    title: "Brand Representation",
    desc: "Just in case you're ready for market before you are available in market.",
  },
];

const WhyWeAreBest = () => {
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 on desktop
    slidesToScroll: 1,
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
    <section className="why-best-section">
      <div className="why-best-container">
        {/* Left Content */}
        <div className="why-best-left">
          <h3 className="highlight-title">Why We Are The Best</h3>
          <h2 className="main-title">
            We help you be market ready with all our{" "}
            <strong>Dynamic Solution</strong>
          </h2>

          <div className="desc-box">
            <p>
              Our expert not only work toward in getting job done, but also work
              towards elevating your <strong>product's</strong> credibility with
              our solutions, ensuring compliance and{" "}
              <strong>quality assurance</strong>. We streamline the process,
              offering expertise that empowers your business to excel in the
              market.
            </p>
          </div>

          <AnimatedButton title={"Request A Quote"} />
        </div>

        {/* Right Diagram */}
        {!columns && (
          <div className="why-best-right">
            <div className="map-bg" />
          </div>
        )}
      </div>
      {/* Services Section */}

      {columns ? (
        <>
          <div style={{ marginTop: "5%" }}>
            <Slider {...settings}>
              {services.map((service, idx) => (
                <div className="service-card" key={idx}>
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
              ))}
            </Slider>
          </div>
        </>
      ) : (
        <>
          <div style={{ marginLeft: "2%" }} className="services-wrapper">
            <div className="">
              <div className="services-grid">
                {services.map((service, idx) => (
                  <div
                    className="service-card"
                    style={{ width: "350px" }}
                    key={idx}
                  >
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default WhyWeAreBest;
