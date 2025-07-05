import { LOCATION_ADDRESS } from "@/utills/const";
import Image from "next/image";
import { useState } from "react";

const Location = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        // padding: "70px 12px",
        paddingTop: "70px",
        marginTop: "70px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "100px" }}>
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "35px",
            lineHeight: "44px",
            color: "#1F2937",
            marginBottom: "20px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "100%",
          }}
        >
          Our Location
        </h2>
        <p
          style={{
            color: "#4B5563",
            fontSize: "16px",
            lineHeight: "26px",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "743px",
          }}
        >
          In a professional context it often happens that private or corporate
          clients order a publication to publish news.
        </p>
      </div>

      {/* Location Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {LOCATION_ADDRESS?.map((loc, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              flexDirection: "row",
              paddingBottom: "50px",
              borderBottom: `2px solid ${
                hovered === index ? "orange" : "#ccc"
              }`,
              transition: "all 0.3s ease",
              transform: hovered === index ? "translateY(-3px)" : "none",
            }}
          >
            <Image
              src="/assets/images/icons/icon-resources.svg"
              width={50}
              height={50}
              alt="icon"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                marginRight: "15px",
              }}
            />
            <div>
              <h3
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "26px",
                  marginBottom: "14px",
                  color: "#1F2937",
                }}
              >
                {loc?.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "#7E7E7E",
                }}
              >
                {loc?.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
