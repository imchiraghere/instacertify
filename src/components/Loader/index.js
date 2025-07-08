import React from "react";
import { Shield, CheckCircle, Award } from "lucide-react";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        {/* Main Logo Animation */}
        <div className="loader-logo">
          <div className="logo-circle">
            <Shield className="logo-icon" />
          </div>
          <div className="logo-pulse"></div>
        </div>

        {/* Brand Name */}
        <div className="loader-brand">
          <h1 className="brand-name">InstaCertify</h1>
          <p className="brand-tagline">Product Testing & Compliance</p>
        </div>

        {/* Animated Icons */}
        <div className="loader-icons">
          <div className="icon-item icon-1">
            <CheckCircle className="animated-icon" />
          </div>
          <div className="icon-item icon-2">
            <Award className="animated-icon" />
          </div>
          <div className="icon-item icon-3">
            <Shield className="animated-icon" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="loader-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <p className="progress-text">Loading your certification journey...</p>
        </div>

        {/* Floating Particles */}
        <div className="particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
