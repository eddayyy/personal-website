import React, { useEffect, useRef } from "react";
import csufSeal from "../assets/Education/csuf-seal.png";

const Education = () => {
  return (
    <section id="education" ref={sectionRef}>
      <h2 className="font-bold text-2xl py-10">Education</h2>
      <div className="education-section shadow-md hover:shadow-lg">
        <div className="education-header">
          <div className="timeline-dot"></div>
          <p>2020 - 2024</p>
        </div>
        <div className="seal-degree-univ-section">
          <img src={csufSeal} alt="CSUF Seal" className="education-seal" />
          <div className="degree-univ-text">
            <h4 className="mb-1.5 text-xl font-semibold">
              B.S. in Computer Science
            </h4>
            <p className="font-semibold">
              California State University Fullerton
            </p>
          </div>
        </div>
        <div className="education-details">
          <p className="text-neutral-500 dark:text-neutral-300 text-left mt-1">
            Graduation Date: May 2024
          </p>
          <h6 className="text-neutral-500 dark:text-neutral-300 text-left mt-4">
            <strong>Academic Achievements:</strong> Dean's List 2023,
            Engineering Social Justice: A Design Competition Top 10 Finalist
          </h6>
          <h6 className="text-neutral-500 dark:text-neutral-300 text-left mt-2">
            <strong>Club Organizations:</strong> Association for Computing
            Machinery
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Education;
