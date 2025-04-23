import React from "react";

const MediumArticles = () => {
  return (
    <>
      <div className="content content--text">
        <h4>Performance & Security</h4>
        <p>
          From optimizing rendering speed to protecting against XSS, I follow
          clean code and SOLID principles to ensure systems are secure,
          scalable, and maintainable in production.
        </p>
      </div>
      <div className="content content--text">
        <h4>Medium Articles</h4>
      </div>
      <section className="medium-section">
        <div className="medium-cards">
          <div className="medium-card">
            <h3 className="medium-title">
              Harnessing the Power of SCSS in React: A Comprehensive Guide to
              Structuring and Styling Your Project
            </h3>
            <p className="medium-excerpt">
              React has revolutionized the way we build dynamic user interfaces,
              and with the addition of SCSS, we can now take our styling
              capabilities to new heights. SCSS, as a powerful CSS preprocessor,
              offers features like variables, mixins, loops, and nested rules
            </p>
            <a
              href="https://medium.com/@abdulrahmansami/harnessing-the-power-of-scss-in-react-a-comprehensive-guide-to-structuring-and-styling-your-e6d47efd54bb"
              target="_blank"
              className="medium-link"
            >
              Read More →
            </a>
          </div>
          <div className="medium-card">
            <h3 className="medium-title">
              Fueling Success: How self Motivation and Commitment Are Important
            </h3>
            <p className="medium-excerpt">
              In life, there are moments that define who we are and shape our
              path. For me, one such moment was when I embarked on a journey
              into the world of artificial intelligence (AI). It was a decision
              driven by the motivation to challenge myself and explore the
              uncharted territory of this fascinating field.
            </p>
            <a
              href="https://medium.com/@abdulrahmansami/fueling-success-how-self-motivation-and-commitment-are-important-4f84643b33a0"
              target="_blank"
              className="medium-link"
            >
              Read More →
            </a>
          </div>
          <div className="medium-card">
            <h3 className="medium-title">
              How to Getting Along with Your Coworkers
            </h3>
            <p className="medium-excerpt">
              We all have many issus at work wherever we work like struggling to
              deal with a toxic co-worker who gossips constantly, whether they
              are with bosses or with co-workers. In this article, I will
              empower you to tackle work problems with confidence about some
              problems and solutions based on the situations I experienced and
              the research I did.
            </p>
            <a
              href="https://medium.com/@abdulrahmansami/how-to-getting-along-with-your-coworkers-1d72b956f00f"
              target="_blank"
              className="medium-link"
            >
              Read More →
            </a>
          </div>
        </div>
      </section>

      <div className="content content--text">
        <h4>Experience</h4>
      </div>
      <section className="experience-section" style={{ marginTop: "-100px" }}>
        <div className="experience-cards">
          <div className="experience-card">
            <h3 className="exp-title">Software Engineer</h3>
            <p className="exp-meta">
              QAF Lab, Mosul – Iraq · Jul 2023 – Present
            </p>
            <ul className="exp-details">
              <li>
                Built a custom polygon-based mapping app using React, Mapbox,
                and TypeScript with multi-level data storage.
              </li>
              <li>
                Created a reporting system with rich-text editing, Excel
                parsing, and Facebook API integration.
              </li>
              <li>
                Designed a Production Tracker with campaign stats, heatmaps, and
                team evaluation tools.
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <h3 className="exp-title">Front-end Developer & UI/UX Designer</h3>
            <p className="exp-meta">
              Falaq, Mosul – Iraq · Jul 2022 – Oct 2022
            </p>
            <ul className="exp-details">
              <li>
                Built landing pages using React, TypeScript, and MUI for
                improved UX and accessibility.
              </li>
              <li>
                Developed invoice and inventory systems for drugstore
                management.
              </li>
              <li>
                Collaborated on the Falaq dashboard using Figma for UI
                refinement.
              </li>
            </ul>
          </div>
          <div className="experience-card">
            <h3 className="exp-title">Front-end Developer (Volunteer)</h3>
            <p className="exp-meta">
              University of Mosul, Iraq · Aug 2021 – May 2023
            </p>
            <ul className="exp-details">
              <li>
                Developed a certificate issuance platform with React and
                TypeScript serving over 5,000 users.
              </li>
              <li>
                Optimized certificate generation to handle 500 certificates in 5
                seconds.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediumArticles;
