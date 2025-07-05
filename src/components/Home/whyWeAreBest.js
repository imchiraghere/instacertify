import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../AnimatedButton";
import React from "react";
import { ClipboardCheck, Wrench, Tag } from "lucide-react";

const features = [
  { icon: "/assets/icons/testing.svg", title: "Testing" },
  { icon: "/assets/icons/equipments.svg", title: "Equipments" },
  { icon: "/assets/icons/standards.svg", title: "Standards" },
  { icon: "/assets/icons/audit.svg", title: "Audit" },
  { icon: "/assets/icons/certification.svg", title: "Certification" },
  { icon: "/assets/icons/training.svg", title: "Training" },
  { icon: "/assets/icons/business.svg", title: "Business Growth" },
  { icon: "/assets/icons/compliance.svg", title: "Compliance" },
];

const WhyWeAreBest = () => {
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
              towards elevatating your <strong>product's</strong> credibility
              with our solutions, ensuring compliance and{" "}
              <strong>quality assurance</strong>. Our streamline the process,
              offering expertise that empowers your business to excel in the
              market.
            </p>
          </div>

          <AnimatedButton title={"Request A Quote"} />
        </div>

        {/* Right Diagram */}
        <div className="why-best-right">
          <div className="map-bg" />
        </div>
      </div>
      <div
        style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}
        className="min-h-screen bg-gray-50 py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <ClipboardCheck size={32} />
              </div>
              <h3 className="service-title">Product Certification Solutions</h3>
              <p className="service-description">
                Access privately syndicated deals managed by experienced
                operators
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Wrench size={32} />
              </div>
              <h3 className="service-title">Testing</h3>
              <p className="service-description">
                Helping you with testing that your product requires, not what we
                sell
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <Tag size={32} />
              </div>
              <h3 className="service-title">Brand Representation</h3>
              <p className="service-description">
                Just in case your ready for market before you are available in
                market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBest;
