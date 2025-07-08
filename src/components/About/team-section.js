import React from "react";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sanjay Grewal",
    role: "Co - Founder",
    image:
      "https://admin.instacertify.com/backend/admin/media/insta-certify-images/Ellipse%20144.png?auto=compress&cs=tinysrgb&w=400",
    linkedinUrl: "#",
  },
  {
    id: 2,
    name: "Gaurav",
    role: "Co - Founder",
    image:
      "https://admin.instacertify.com/backend/admin/media/insta-certify-images/Ellipse%20143.png?auto=compress&cs=tinysrgb&w=400",
    linkedinUrl: "#",
  },
  {
    id: 3,
    name: "Ravi Kansal",
    role: "Designer",
    image:
      "https://admin.instacertify.com/backend/admin/media/insta-certify-images/Ellipse%20142%20(1).png?auto=compress&cs=tinysrgb&w=400",
    linkedinUrl: "#",
  },
  {
    id: 4,
    name: "Kapil Goyal",
    role: "Developer",
    image:
      "https://admin.instacertify.com/backend/admin/media/insta-certify-images/Ellipse%20142.png?auto=compress&cs=tinysrgb&w=400",
    linkedinUrl: "#",
  },
  {
    id: 5,
    name: "Nikhil Tiwari",
    role: "Co - Founder",
    image:
      "https://admin.instacertify.com/backend/admin/media/insta-certify-images/founder.png?auto=compress&cs=tinysrgb&w=400",
    linkedinUrl: "#",
  },
];

const Team = () => {
  return (
    <section className="team-section font-chivo">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-description">
            At Instacertify, our team is what holds us together in success. Our
            team includes professionals with vast experience in product testing
            and compliance, each one of them dedicated to delivering exceptional
            solutions.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-card-image-container">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card-image"
                />
                <div className="team-card-overlay">
                  <a
                    href={member.linkedinUrl}
                    className="linkedin-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="linkedin-icon" />
                  </a>
                </div>
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">
                  {member.role}
                  <Linkedin className="linkedin-icon-inline" />
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="get-in-touch">
          <div className="get-in-touch-content">
            <h3 className="get-in-touch-title">Get in Touch</h3>
            <p className="get-in-touch-description">
              For any inquiries or to discuss your needs, please don't hesitate
              to reach out.
            </p>
          </div>
          <button className="get-in-touch-btn">Request A free Call</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
