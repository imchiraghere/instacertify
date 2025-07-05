import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';


const faqData = [
  {
    id: 1,
    question: "What types of product certification do you offer?",
    answer:
      "We provide comprehensive certification services including CE marking, FCC compliance, UL listing, ISO certifications, and industry-specific standards. Our experienced team guides you through the entire certification process to ensure your products meet all regulatory requirements.",
  },
  {
    id: 2,
    question: "How long does the testing process typically take?",
    answer:
      "Testing timelines vary depending on the product complexity and certification requirements. Simple products may take 2-4 weeks, while complex electronics or medical devices can take 8-12 weeks. We provide detailed timelines during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you offer brand representation services globally?",
    answer:
      "Yes, we provide brand representation services across major markets including North America, Europe, and Asia-Pacific. Our network of partners ensures your brand is properly represented even before you establish a local presence.",
  },
  {
    id: 4,
    question: "What makes your testing approach different?",
    answer:
      "We focus on what your product actually needs, not what we want to sell. Our consultative approach means we recommend only the necessary tests and certifications, saving you time and money while ensuring full compliance.",
  },
  {
    id: 5,
    question: "Can you help with regulatory compliance documentation?",
    answer:
      "Absolutely. We assist with all regulatory documentation including technical files, declaration of conformity, user manuals, and labeling requirements. Our team ensures all documentation meets the specific requirements of your target markets.",
  },
  {
    id: 6,
    question: "What industries do you specialize in?",
    answer:
      "We work across multiple industries including electronics, medical devices, automotive, telecommunications, consumer goods, and industrial equipment. Our diverse expertise allows us to handle complex multi-industry requirements.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-icon-wrapper">
            <HelpCircle size={32} />
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">
            Find answers to common questions about our services and processes
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`faq-item ${openItems.has(item.id) ? 'faq-item-open' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.has(item.id)}
              >
                <span className="faq-question-text">{item.question}</span>
                <div className="faq-chevron">
                  {openItems.has(item.id) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>

              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="faq-footer">
          <p className="faq-footer-text">
            Still have questions?{' '}
            <a href="#contact" className="faq-contact-link">
              Contact our team
            </a>
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
