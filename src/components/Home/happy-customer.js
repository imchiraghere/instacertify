import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Anjali Sharma",
    review:
      "The certification process was quick and easy thanks to their efficient team. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    review:
      "Quick turnaround and very knowledgeable staff. Highly recommend for anyone needing compliance support.",
    rating: 4,
  },
  {
    id: 3,
    name: "Priya Desai",
    review:
      "Thorough and professional! They helped us expand to international markets with the right documentation and certifications.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Desai",
    review:
      "Thorough and professional! They helped us expand to international markets with the right documentation and certifications.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Desai",
    review:
      "Thorough and professional! They helped us expand to international markets with the right documentation and certifications.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Desai",
    review:
      "Thorough and professional! They helped us expand to international markets with the right documentation and certifications.",
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Desai",
    review:
      "Thorough and professional! They helped us expand to international markets with the right documentation and certifications.",
    rating: 5,
  },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "#E5E7EB",
      borderRadius: "50%",
      padding: "10px",
      border: "none",
      position: "absolute",
      bottom: "0",
      right: "60px",
      zIndex: 2,
      cursor: "pointer",
    }}
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "#f97316",
      borderRadius: "50%",
      padding: "10px",
      border: "none",
      position: "absolute",
      bottom: "0",
      right: "10px",
      zIndex: 2,
      cursor: "pointer",
      color: "#fff",
    }}
  >
    <ChevronRight size={20} />
  </button>
);

const ReviewSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Only one card visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      style={{
        // backgroundColor: "#fff7ed",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "800",
          color: "#0f172a",
          marginBottom: "10px",
          fontFamily:"Chivo"
        }}
      >
        Client Testimonials:
      </h2>
      <p
        style={{
          color: "#475569",
          marginBottom: "40px",
          fontSize: "18px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Building Success Together
      </p>

      <div
        style={{
          // maxWidth: "520px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id}>
              <div
                style={{
                  backgroundColor: "#fef3c7",
                  padding: "32px",
                  borderRadius: "24px",
                  boxShadow: "0 15px 25px rgba(0,0,0,0.05)",
                  position: "relative",
                  textAlign: "left",
                  minHeight: "250px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: "10%",
                }}
              >
                {/* Quote Icon */}
                <div
                  style={{
                    background: "#f97316",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "8px",
                    left: "30px",
                    color: "#fff",
                  }}
                >
                  <Quote size={24} />
                </div>

                <p
                  style={{
                    color: "#0f172a",
                    fontSize: "16px",
                    marginBottom: "24px",
                    marginTop: "40px",
                    lineHeight: "1.7",
                  }}
                >
                  {review.review}
                </p>

                <div
                  style={{ marginBottom: "12px", display: "flex", gap: "4px" }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill={i < review.rating ? "#facc15" : "none"}
                      stroke={i < review.rating ? "#facc15" : "#d1d5db"}
                    />
                  ))}
                </div>

                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    color: "#0f172a",
                  }}
                >
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
