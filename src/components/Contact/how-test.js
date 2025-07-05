import React from "react";
import { TestTube, Award, Wrench } from "lucide-react";

const HowTest = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        // background:
        //   "linear-gradient(135deg, #065175 0%, #0a7ba8 50%, #ec691f 100%)",
        padding: "60px 20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[22px]">
            HOW CAN WE ASSIST YOU TODAY?
          </h2>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "#ec691f",
              margin: "0 auto 20px",
              borderRadius: "2px",
            }}
          ></div>
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Explore our comprehensive support options to find the perfect
            solution for your needs
          </p>
        </div>

        {/* Cards Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {/* Testing Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "2px solid transparent",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
              e.currentTarget.style.borderColor = "#ec691f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                background:
                  "linear-gradient(135deg, rgba(236,105,31,0.1), rgba(6,81,117,0.1))",
                borderRadius: "50%",
              }}
            ></div>

            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ec691f",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              <TestTube size={28} color="#fff" />
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#065175",
                marginBottom: "15px",
                lineHeight: "1.3",
              }}
            >
              Testing
            </h3>

            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              Our state-of-the-art testing facilities and expert team are
              equipped to perform rigorous testing for a variety of products.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#ec691f",
                fontWeight: "600",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
              }}
            >
              <span>READ MORE</span>
              <svg
                style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Certification Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "2px solid transparent",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
              e.currentTarget.style.borderColor = "#065175";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                background:
                  "linear-gradient(135deg, rgba(6,81,117,0.1), rgba(236,105,31,0.1))",
                borderRadius: "50%",
              }}
            ></div>

            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#065175",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              <Award size={28} color="#fff" />
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#065175",
                marginBottom: "15px",
                lineHeight: "1.3",
              }}
            >
              Certification
            </h3>

            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              We offer a comprehensive range of certification services to help
              businesses comply with industry standards and regulations.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#ec691f",
                fontWeight: "600",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
              }}
            >
              <span>READ MORE</span>
              <svg
                style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* Equipment Card */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "30px 25px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border: "2px solid transparent",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
              e.currentTarget.style.borderColor = "#ec691f";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "transparent";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                background:
                  "linear-gradient(135deg, rgba(236,105,31,0.1), rgba(6,81,117,0.1))",
                borderRadius: "50%",
              }}
            ></div>

            <div
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#ec691f",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                transition: "transform 0.3s ease",
              }}
            >
              <Wrench size={28} color="#fff" />
            </div>

            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: "700",
                color: "#065175",
                marginBottom: "15px",
                lineHeight: "1.3",
              }}
            >
              Equipment
            </h3>

            <p
              style={{
                color: "#666",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                marginBottom: "20px",
              }}
            >
              We provide cutting-edge tools and machinery to boost operational
              efficiency and ensure businesses meet the highest standards.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#ec691f",
                fontWeight: "600",
                fontSize: "0.85rem",
                letterSpacing: "0.5px",
              }}
            >
              <span>READ MORE</span>
              <svg
                style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#ec691f",
              borderRadius: "50%",
              opacity: "0.8",
            }}
          ></div>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              opacity: "0.6",
            }}
          ></div>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "#ec691f",
              borderRadius: "50%",
              opacity: "0.8",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HowTest;
