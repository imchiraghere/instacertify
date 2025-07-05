import React, { useEffect, useState } from "react";
import { Gamepad2, Code, Recycle, Wrench, Zap, Sparkles } from "lucide-react";

// Icon mapping for each industry
const industryIcons = {
  Toys: Gamepad2,
  Software: Code,
  "Polymers & Plastics": Recycle,
  "Metal & Alloys": Wrench,
  Electronic: Zap,
  Cosmetics: Sparkles,
};

// Theme mapping for each industry
const INDUSTRY_THEMES = {
  Toys: "toys-theme",
  Software: "software-theme",
  "Polymers & Plastics": "polymers-theme",
  "Metal & Alloys": "metal-theme",
  Electronic: "electronic-theme",
  Cosmetics: "cosmetics-theme",
};

const IndustryCard = () => {
  const [columns, setColumns] = useState(1); // Default to 1 column

  useEffect(() => {
    const getColumnCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) return 3;
      if (width >= 768) return 2;
      return 1;
    };

    const updateColumns = () => {
      setColumns(getColumnCount());
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#1f2937",
              marginBottom: "1rem",
            }}
          >
            Industries We <span style={{ color: "#f97316" }}>Serve</span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#4b5563",
              maxWidth: "32rem",
              margin: "0 auto",
            }}
          >
            Comprehensive certification solutions across diverse industries
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {Object.entries(INDUSTRY_THEMES).map(([industry, theme], index) => {
            const IconComponent = industryIcons[industry];
            const width = `calc(${100 / columns}% - 5rem)`;

            return (
              <div
                key={industry}
                style={{
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  transition: "all 0.5s",
                  width,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-0.75rem)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom right, #fff7ed, transparent)",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    className="hover-bg"
                  ></div>

                  <div style={{ position: "relative", zIndex: 10 }}>
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div
                        style={{
                          width: "5rem",
                          height: "5rem",
                          background:
                            "linear-gradient(to bottom right, #f97316, #ea580c)",
                          color: "#ffffff",
                          borderRadius: "1rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 1rem",
                          transition: "transform 0.3s",
                        }}
                      >
                        <IconComponent size={32} />
                      </div>
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "bold",
                          color: "#1f2937",
                          transition: "color 0.3s",
                        }}
                      >
                        {industry}
                      </h3>
                      <div
                        style={{
                          width: "3rem",
                          height: "0.25rem",
                          backgroundColor: "#f97316",
                          margin: "0.5rem auto",
                          borderRadius: "9999px",
                          transition: "width 0.3s",
                        }}
                      ></div>
                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          opacity: 0.8,
                          transition: "opacity 0.3s",
                        }}
                      >
                        Specialized certification services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryCard;
