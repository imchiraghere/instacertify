import React from "react";
import {
  Gamepad2,
  Code,
  Atom,
  Wrench,
  Cpu,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { TABDATA } from "@/utills/const";

// Icon mapping for each industry
const INDUSTRY_ICONS = {
  Toys: Gamepad2,
  Software: Code,
  "Polymers & Platics": Atom,
  "Metal & Alloys": Wrench,
  Electronic: Cpu,
  Cosmetics: Sparkles,
};

// Theme mapping for each industry
const INDUSTRY_THEMES = {
  Toys: "toys-theme",
  Software: "software-theme",
  "Polymers & Platics": "polymers-theme",
  "Metal & Alloys": "metal-theme",
  Electronic: "electronic-theme",
  Cosmetics: "cosmetics-theme",
};

const IndustryCard = () => {
  return (
    <section className="industry-section">
      {/* Background Elements */}
      <div className="bg-decorations">
        <div className="bg-dot bg-dot-1"></div>
        <div className="bg-dot bg-dot-2"></div>
        <div className="bg-dot bg-dot-3"></div>
        <div className="bg-dot bg-dot-4"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="header-section">
          <h2 className="font-bold font-chivo mx-auto text-[40px] leading-[44px] md:text-[40px] md:leading-[40px] text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
            Industries We Serve
          </h2>

          <p className="text-quote md:text-lead-md text-gray-600 mx-auto max-w-[976px]">
            Delivering excellence across diverse sectors with specialized
            expertise and innovative solutions
          </p>

          {/* Decorative Line */}
          {/* <div className="decorative-line">
            <div className="line-segment line-left"></div>
            <div className="line-dot"></div>
            <div className="line-segment line-right"></div>
          </div> */}
        </div>

        {/* Industry Cards Grid */}
        <div className="industry-grid">
          {TABDATA.map((item, index) => {
            const IconComponent = INDUSTRY_ICONS[item.label];
            const themeClass = INDUSTRY_THEMES[item.label];

            return (
              <div key={item.id} className={`industry-card ${themeClass}`}>
                {/* Background Overlay */}
                <div className="bg-overlay"></div>

                {/* Floating Elements */}
                <div className="card-float-1"></div>
                <div className="card-float-2"></div>

                {/* Icon Container */}
                <div className="icon-container">
                  <div className="icon-wrapper">
                    {IconComponent && (
                      <IconComponent className="w-10 h-10 text-white" />
                    )}
                  </div>

                  {/* Pulse Ring */}
                  <div className="pulse-ring"></div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3 className="card-title">{item.label}</h3>

                  {/* Feature Points */}
                  <div className="feature-points">
                    <div className="feature-point">
                      <div className="feature-dot"></div>
                      <span className="feature-text">Certified Excellence</span>
                    </div>
                    <div className="feature-point">
                      <div className="feature-dot"></div>
                      <span className="feature-text">Industry Expertise</span>
                    </div>
                    <div className="feature-point">
                      <div className="feature-dot"></div>
                      <span className="feature-text">Quality Assurance</span>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="hover-arrow">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>

                {/* Shimmer Effect */}
                <div className="shimmer-effect"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="bottom-section text-center">
          {/* <div className="cta-button">
            <span>Explore Our Services</span>
            <div className="cta-icon">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div> */}

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="trust-text">ISO Certified</span>
            </div>
            <div className="trust-separator"></div>
            <div className="trust-item">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="trust-text">Quality Assured</span>
            </div>
            <div className="trust-separator"></div>
            <div className="trust-item">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="trust-text">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryCard;
