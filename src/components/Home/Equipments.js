import React from "react";
import Slider from "react-slick";
import { EQUIPMENT_DATA } from "@/utills/const";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedButton from "../AnimatedButton";

const EquipmentSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div style={{ marginTop: "6%" }} className="equipment-slider-container">
      {/* Header */}
      <div className="equipment-header">
        <h2>Explore Our Equipments</h2>
        <p>
          State-of-the-art testing equipment for precise material analysis and
          quality assurance
        </p>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {EQUIPMENT_DATA.map((item) => (
          <div key={item.id}>
            <div className="slider-card">
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-title">{item.name}</div>
            </div>
          </div>
        ))}
      </Slider>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "5%",
        }}
      >
        <AnimatedButton title={"Explore full range"} />
      </div>
    </div>
  );
};

export default EquipmentSlider;
