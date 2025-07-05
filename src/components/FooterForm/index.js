"use client";
import { useState } from "react";
import AnimatedButton from "../AnimatedButton";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #e8efe5)",
        padding: "30px 20px",
        borderRadius: "8px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          style={inputStyle}
        />
        <AnimatedButton title={"Send"} />
      </form>
    </div>
  );
};

const inputStyle = {
  flex: "1 1 200px",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default EnquiryForm;
