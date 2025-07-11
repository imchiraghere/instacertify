import { LOCATION_ADDRESS } from "@/utills/const";
import Image from "next/image";
import { useState } from "react";

const Location = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      style={{
        // padding: "70px 12px",
        paddingTop: "40px",
        // marginTop: "40px",
        boxSizing: "border-box",
        marginBottom: "8%",
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
            <div
              style={{
                width: "45px",
                height: "45px",
                backgroundColor: "#f1f1f1",
                padding: "5%",
                borderRadius: 50,
                margin: "2%",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="orange"
                stroke="currentColor"
                // stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin-house-icon lucide-map-pin-house"
              >
                <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                <path d="M18 22v-3" />
                <circle cx="10" cy="10" r="3" />
              </svg>
            </div>
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
