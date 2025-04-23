import React from "react";

const Contacts = () => {
  return (
    <>
      <div className="content content--text">
        <h4>Mentorship & Teamwork</h4>
        <p>
          Beyond code, I lead by sharing knowledge—mentoring interns, conducting
          reviews, and fostering a culture of best practices and collaboration
          in every team I join.
        </p>
      </div>

      <div className="content content--text">
        <h4>Connect With Me</h4>
        <p>
          I'm always open to new connections, collaborations, or just a good
          conversation. Find me on these platforms:
        </p>
        <div className="social-section">
          <a
            className="social-link"
            href="https://www.linkedin.com/in/abdalrhman-sami"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            className="social-link"
            href="https://github.com/abdulrahmansami0?tab=repositories"
            target="_blank"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a
            className="social-link"
            href="https://wa.me/9647709406231"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>
          <a className="social-link" href="mailto:abdalrhmansami5@gmail.com">
            <i className="fas fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contacts;
