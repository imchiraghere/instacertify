// components/ConsultationForm.jsx
import { useState } from "react";

const ConsultationForm = () => {
  const [whatsappUpdate, setWhatsappUpdate] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Free Consultation by Expert</h2>

      <form className="form">
        <input type="text" placeholder="Name" className="form-input" />
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
        />
        <input type="tel" placeholder="Mobile Number" className="form-input" />
        <textarea
          placeholder="Message"
          rows={3}
          className="form-textarea"
        ></textarea>

        <div className="whatsapp-section">
          <span>Get Update on</span>
          <img
            src="/assets/images/icons/whatsapp.png"
            alt="whatsapp"
            className="whatsapp-icon"
          />
          whatsapp
          <label className="switch">
            <input
              type="checkbox"
              checked={whatsappUpdate}
              onChange={() => setWhatsappUpdate(!whatsappUpdate)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* <div className="recaptcha-box">
          <label className="recaptcha-label">
            <input type="checkbox" />
            <span>I’m not a robot</span>
          </label>
        </div> */}

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="submit"
          style={{
            backgroundColor: "#ea580c",
            padding: "14px",
            color: "#fff",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Request A Quote
          <img
            src="./assets/images/icons/icon-right.svg"
            alt="arrow"
            style={{
              marginLeft: "7px",
              width: "12px",
              filter: "brightness(0) invert(1)",
              transform: hovered ? "translateX(8px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </form>
    </div>
  );
};

export default ConsultationForm;
