// components/AboutInstacertify.jsx
"use client";
import {
  Search,
  Award,
  Globe,
  Users,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const AboutInstacertify = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>
            About <span className="text-highlight">Instacertify</span>
          </h2>

          <div className="timeline">
            <div className="timeline-point" />
            <div className="timeline-content">
              <h3 className="section-title orange">Our Approach</h3>
              <p>
                Instacertify believes in delivering excellence with a customized
                and system-driven approach. We ensure seamless certification for
                our clients.
              </p>
              <ul className="bullet-list">
                <li>
                  <strong>Client-Centric Solution:</strong> Every client is
                  different; we ensure their regulatory requirements are fully
                  met.
                </li>
                <li>
                  <strong>Global Best Practices:</strong> We align with
                  international standards and cutting-edge tech for reliable
                  certification.
                </li>
                <li>
                  <strong>Continuous Improvement:</strong> We refine our
                  methodologies to match evolving industry trends and
                  regulations.
                </li>
              </ul>
            </div>

            <div className="timeline-point" />
            <div className="timeline-content">
              <h3 className="section-title orange">Our Mission</h3>
              <p>
                Instacertify empowers businesses with efficient certification
                solutions for global marketplace success. We ensure quality,
                integrity, and client satisfaction.
              </p>
              <ul className="bullet-list">
                <li>
                  <strong>Industry Leader:</strong> Be the trendsetter in
                  compliance markets.
                </li>
                <li>
                  <strong>Global Coverage:</strong> Offer services globally with
                  localized excellence.
                </li>
                <li>
                  <strong>Market Presence:</strong> Build key global footprints.
                </li>
                <li>
                  <strong>Innovation Hub:</strong> Lead innovation in compliance
                  certification.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block mt-[30px] font-chivo">
          <div className="visual-container">
            <div className="visual-background">
              {/* Background Elements */}
              <div className="background-elements">
                <div className="bg-blur-blue"></div>
                <div className="bg-blur-orange"></div>
                <div className="bg-blur-purple"></div>
              </div>

              {/* Icons Animation */}
              <div className="icons-grid">
                <div className="icons-column">
                  <div className="icon-item animate-float ">
                    <div className="icon-box">
                      <Search className="w-10 h-10 icon-blue" />
                    </div>
                    <p className="icon-label">Testing</p>
                  </div>

                  <div className="icon-item ml-offset animate-float ">
                    <div className="icon-box">
                      <Award className="w-10 h-10 icon-orange" />
                    </div>
                    <p className="icon-label">Certification</p>
                  </div>

                  <div className="icon-item animate-float ">
                    <div className="icon-box">
                      <CheckCircle className="w-10 h-10 icon-green" />
                    </div>
                    <p className="icon-label">Compliance</p>
                  </div>
                </div>

                <div className="icons-column icons-column-offset">
                  <div className="icon-item animate-float ">
                    <div className="icon-box">
                      <Globe className="w-10 h-10 icon-purple" />
                    </div>
                    <p className="icon-label">Global</p>
                  </div>

                  <div className="icon-item mr-offset animate-float ">
                    <div className="icon-box">
                      <Users className="w-10 h-10 icon-indigo" />
                    </div>
                    <p className="icon-label">Consultancy</p>
                  </div>

                  <div className="icon-item animate-float ">
                    <div className="icon-box ">
                      <TrendingUp className="w-10 h-10 icon-teal" />
                    </div>
                    <p className="icon-label">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInstacertify;
