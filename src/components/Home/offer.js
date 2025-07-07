import React, { useEffect, useState } from "react";
import { Shield, FileCheck, Globe, FlaskConical } from "lucide-react";

const SERVICES = [
  {
    id: "compliances",
    title: "Compliances",
    description: "Making your product compliance ready",
    icon: Shield,
    position: { top: "-35%", left: "10px" },
    width: "60vw",
    delay: 0,
  },
  {
    id: "registration",
    title: "Registration",
    description: "Covers all the registration that you need",
    icon: FileCheck,
    position: { top: "20%", left: "-250px" },
    delay: 0.5,
  },
  {
    id: "international",
    title: "International",
    description: "Take your product around the globe",
    icon: Globe,
    position: { top: "-25%", right: "-250px" },
    width: "60vw",
    delay: 1,
  },
  {
    id: "lab-testing",
    title: "Lab Testing",
    description: "Simply all the test your products needs",
    icon: FlaskConical,
    position: { top: "25%", right: "-20px" },
    width: "60vw",
    delay: 1.5,
  },
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [columns, setColumns] = useState(3); // Default to desktop

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumns(2); // Mobile
      } else {
        setColumns(3); // Desktop
      }
    };

    updateColumns(); // Initial check
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{ marginTop: "5%" }} className="hero-section">
      {/* Background */}
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-dots"></div>
      </div>

      {/* Main Container */}
      <div className="hero-container">
        {/* Heading + Description at Top */}
        <div className="hero-text text-center mx-auto mb-12">
          <h3 className="hero-title">
            Your Product{" "}
            <span className="hero-title-highlight">Certification</span>
            <br />
            Partner
          </h3>
          <p className="hero-subtitle max-w-2xl mx-auto">
            We make product certification simple, fast, and reliable. From
            compliance to global market access, we've got you covered.
          </p>
        </div>

        {/* Girl Image + Floating Cards */}
        <div className="relative flex justify-center items-center hero-image-container">
          <div
            style={{ position: "absolute" }}
            className="image-wrappr lg:hidden block"
          >
            <img
              src="/assets/images/whatwe.png"
              alt="Professional consultant"
              // className="hero-image"
            />
          </div>

          {/* Floating Cards */}

          {columns === 2 ? (
            <div
              className="services-grid relative left-[-15px]"
              style={{
                // display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
                gap: "4rem", // space between cards
              }}
            >
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`floating-card ${isVisible ? "visible" : ""}`}
                    style={{ padding: "12%", backgroundColor: "#fff" }}
                  >
                    <div className="card-icon">
                      <Icon size={20} />
                    </div>
                    <div className="card-conten">
                      <h3 className="card-titl" style={{ fontWeight: 800 }}>
                        {service.title}
                      </h3>
                      <p className="card-description">{service.description}</p>
                    </div>
                    <div className="card-glow"></div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`floating-card lg:block hidden service-card ${
                      isVisible ? "visible" : ""
                    }`}
                    style={{
                      ...service.position,
                      // ...service.width,
                      animationDelay: `${service.delay}s`,
                    }}
                  >
                    <div className="card-icon">
                      <Icon size={20} />
                    </div>
                    <div className="card-conten">
                      <h3 className="card-titl" style={{ fontWeight: 800 }}>
                        {service.title}
                      </h3>
                      <p className="card-description">{service.description}</p>
                    </div>
                    <div className="card-glow"></div>
                  </div>
                );
              })}
            </>
          )}

          {/* Particles */}
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
    </section>
  );
};

export default HeroSection;
