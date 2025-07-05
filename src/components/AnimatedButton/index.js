import { useState } from "react";
import Link from "next/link";

const AnimatedButton = ({ title, href }) => {
  const [hovered, setHovered] = useState(false);

  const commonStyles = {
    display: "flex",
    alignItems: "center",
    padding: "15px 25px",
    borderRadius: "50px",
    fontFamily: "Chivo, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    color: "#fff",
    backgroundColor: hovered ? "#ec691f" : "#065175",
    transition: "all 0.3s ease",
    width: "fit-content",
    cursor: "pointer",
    textDecoration: "none", // remove underline in link
  };

  const iconStyle = {
    marginLeft: "7px",
    width: "12px",
    filter: "brightness(0) invert(1)",
    transform: hovered ? "translateX(8px)" : "translateX(0)",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {href ? (
        <Link
          href={href}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={commonStyles}
        >
          {title}
          <img
            src="./assets/images/icons/icon-right.svg"
            alt="arrow"
            style={iconStyle}
          />
        </Link>
      ) : (
        <button
          type="submit"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={commonStyles}
        >
          {title}
          <img
            src="./assets/images/icons/icon-right.svg"
            alt="arrow"
            style={iconStyle}
          />
        </button>
      )}
    </div>
  );
};

export default AnimatedButton;
