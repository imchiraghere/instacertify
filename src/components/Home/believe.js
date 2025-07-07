import React from "react";
import AnimatedButton from "../AnimatedButton";

const Believe = () => {
  const features = [
    { num: "1", title: "Comprehensive", desc: "Compliance Solutions" },
    { num: "2", title: "Expertise in", desc: "Certification Services" },
    { num: "3", title: "Reliable", desc: "Compliance Consulting" },
    { num: "4", title: "Efficient", desc: "Certification Advisory" },
  ];

  return (
    <section className="believe-wrapper">
      <div className="believe-container">
        <div className="believe-left">
          <div className="believe-badge">
            Instacertify Certifications Made Simple
          </div>
          <h1 className="believe-heading">
            Simply your path to{" "}
            <strong>product certification excellence</strong> with our{" "}
            <strong>expert solutions</strong>
          </h1>
          <p className="believe-paragraph">
            We are India’s leading product testing and compliance solution
            partner, driving rapid industry growth. Specializing in quality
            testing and consulting, we cover a wide array of certifications,
            including BIS, CRS, ISI, CDSCO, WPC, IMEI-DOT, GMARK, SABER, SFDA,
            LMPC, CIB, EPR, and E-waste Management, to empower businesses across
            the country.
          </p>
          <AnimatedButton title="Get A Quote" />
        </div>
      </div>

      <div className="believe-features">
        {features.map((feature, index) => (
          <div className="feature-item" key={index}>
            <span className="feature-number">{feature.num}</span>
            <div>
              <strong>{feature.title}</strong>
              <br />
              {feature.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Believe;
