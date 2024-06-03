import React, { useEffect, useRef } from "react";

const Experience = () => {
  const sectionRef = useRef(null);

  return (
    <section id="experience" ref={sectionRef}>
      <h2 className="font-bold text-2xl py-10">Experience</h2>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <li className="experience-section shadow-md hover:shadow-lg">
          <div className="experience-header">
            <div className="timeline-dot"></div>
            <p>November 2023 - Current</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">Research Assistant</h4>
            <p className="font-semibold">
              California State University Fullerton - Department of Computer
              Science
            </p>
            <h6 className="text-neutral-500 dark:text-neutral-300 text-left mt-6">
              Developed an AI-driven storytelling system using OpenAI's GPT API,
              Django, ReactJS, and AWS. I designed and implemented APIs that
              enable users to generate interactive stories. Additionally, I
              developed an algorithm to process and transform responses from
              OpenAI's GPT into a structured tree format, enhancing user
              interaction with the narrative.
            </h6>
          </div>
        </li>
        <li className="experience-section shadow-md hover:shadow-lg">
          <div className="experience-header">
            <div className="timeline-dot"></div>
            <p>March, 2023 - October 2023</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h4 className="mb-1.5 text-xl font-semibold">
              STEM Instructor/Mentor
            </h4>
            <p className="font-semibold">Dreams For Schools</p>
            <h6 className="text-neutral-500 dark:text-neutral-300 text-left mt-6">
              As an instructor and mentor, I introduced Computer Science
              Principles to 7th and 8th-grade students, leading them through the
              mobile app development process using Agile methodologies to
              compete in the AppJamboree hosted by Dreams For Schools. I ensured
              consistent and transparent communication with program coordinators
              about classroom activities and project progress. Furthermore, I
              refined my organizational abilities to successfully meet the
              demands of a 10-week development schedule.
            </h6>
          </div>
        </li>
      </ol>
    </section>
  );
};

export default Experience;
