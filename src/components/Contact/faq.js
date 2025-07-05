import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    title: "Testing",
    description:
      "We can help if you need to check your order status, return or exchange an item, or even learn more about order pickup.",
    items: [
      {
        question: "What types of product testing does Instacertify facilitate?",
        answer:
          "Instacertify facilitates comprehensive product testing including safety testing, performance testing, electromagnetic compatibility (EMC) testing, environmental testing, and compliance testing for various international standards. We work with NABL-accredited laboratories to ensure reliable and accurate results.",
      },
      {
        question:
          "How do I choose the right testing equipment for BIS certification?",
        answer:
          "Choosing the right testing equipment depends on your product category and the specific BIS standards applicable to your product. Our experts can guide you through the selection process, considering factors like product specifications, testing requirements, budget constraints, and timeline needs.",
      },
      {
        question:
          "Are NABL-accredited labs mandatory for certification testing?",
        answer:
          "Yes, for BIS certification, testing must be conducted at NABL (National Accreditation Board for Testing and Calibration Laboratories) accredited laboratories. This ensures that the testing is performed according to international standards and the results are recognized by regulatory authorities.",
      },
      {
        question: "Can Instacertify arrange testing in multiple Indian states?",
        answer:
          "Yes, we have a network of NABL-accredited laboratories across multiple Indian states. This allows us to arrange testing at locations convenient to you, reducing logistics costs and turnaround times while maintaining the highest quality standards.",
      },
    ],
  },
  {
    title: "Certification",
    description:
      "We can help if you need to check your order status, return or exchange an item, or even learn more about Lowe's order pickup.",
    items: [
      {
        question: "What certifications does Instacertify help with?",
        answer:
          "Instacertify helps with various certifications including BIS (Bureau of Indian Standards), ISI mark, CE marking, FCC certification, RoHS compliance, and other international certifications. We provide end-to-end support for the entire certification process.",
      },
      {
        question:
          "Why is BIS certification mandatory for certain products in India?",
        answer:
          "BIS certification is mandatory for products listed under the Compulsory Registration Scheme (CRS) to ensure they meet Indian safety and quality standards. This protects consumers and ensures fair trade practices while maintaining product quality in the Indian market.",
      },
      {
        question:
          "What is the difference between BIS-ISI and BIS-CRS certification?",
        answer:
          "BIS-ISI (Indian Standards Institution) is a voluntary certification scheme that allows manufacturers to use the ISI mark, while BIS-CRS (Compulsory Registration Scheme) is mandatory for specific products. CRS focuses on basic safety and quality requirements, while ISI certification involves more comprehensive testing and quality management system requirements.",
      },
      {
        question:
          "How long does it take to get product certification from BIS?",
        answer:
          "The timeline for BIS certification typically ranges from 3-6 months, depending on the product category, complexity of testing required, documentation completeness, and the specific certification scheme (ISI or CRS). We help expedite the process by ensuring all requirements are met efficiently.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (sectionIndex, itemIndex) => {
    const key = `${sectionIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div
      style={{
        // backgroundColor: "#f9fafb",
        // padding: "40px 5px",
        fontFamily: "Chivo",
      }}
    >
      <div style={{ maxWidth: "90%", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: 16,
            }}
          >
            Frequently asked questions
          </h1>
          <p
            style={{
              color: "#4B5563",
              fontSize: "18px",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Find answers to common questions about orders, returns, and more.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 48 }}>
          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} style={{ flex: "1 1 45%" }}>
              <div style={{ marginBottom: 24 }}>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  {section.title}
                </h2>
                <p style={{ color: "#4B5563", fontSize: "14px", marginTop: 8 }}>
                  {section.description}
                </p>
              </div>
              <div>
                {section.items.map((item, itemIndex) => {
                  const isOpen = openItems[`${sectionIndex}-${itemIndex}`];
                  return (
                    <div
                      key={itemIndex}
                      style={{
                        border: "1px solid #e5e7eb",
                        borderRadius: 8,
                        marginBottom: 12,
                        overflow: "hidden",
                        transition: "box-shadow 0.3s",
                        backgroundColor: "white",
                      }}
                    >
                      <button
                        onClick={() => toggleItem(sectionIndex, itemIndex)}
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: 16,
                          fontSize: "16px",
                          fontWeight: 500,
                          backgroundColor: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <span style={{ color: "#111827", textAlign: "left" }}>
                          {item.question}
                        </span>
                        <div
                          style={{
                            backgroundColor: "#f97316",
                            color: "white",
                            borderRadius: "9999px",
                            width: 32,
                            height: 32,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </div>
                      </button>
                      <div
                        style={{
                          maxHeight: isOpen ? "500px" : "0",
                          overflow: "hidden",
                          transition: "max-height 0.3s ease-in-out",
                        }}
                      >
                        <div
                          style={{
                            padding: isOpen ? "16px" : "0 16px",
                            backgroundColor: "#f9fafb",
                          }}
                        >
                          <p style={{ fontSize: "14px", color: "#374151" }}>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* <div style={{ marginTop: 64, textAlign: "center" }}>
          <div
            style={{
              backgroundColor: "white",
              padding: 32,
              borderRadius: 16,
              maxWidth: 600,
              margin: "0 auto",
              boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
                marginBottom: 16,
              }}
            >
              Still have questions?
            </h3>
            <p style={{ color: "#4B5563", marginBottom: 24 }}>
              Can't find the answer you're looking for? Please chat with our
              friendly team.
            </p>
            <button
              style={{
                backgroundColor: "#f97316",
                color: "white",
                padding: "12px 32px",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Get in touch
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FAQ;
