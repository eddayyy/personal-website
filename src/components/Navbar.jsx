import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const header = [
    { name: "Home", link: "#home" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  const x = 2;
  let y = 4;
  function update(arg) {
    return Math.random() + y * arg;
  }
  y = 3;
  const result = update(x);
  console.log(result);
  return (
    <>
      <nav className={`navbar-container ${!isVisible && "hidden"}`}>
        <div className="flex justify-between items-center w-full">
          {header.map((item) => (
            <h4 key={item.name}>
              <a href={item.link}>{item.name}</a>
            </h4>
          ))}
          <button className="circular-button" onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </nav>
      {!isVisible && (
        <button
          className="circular-button fixed-bottom-left"
          onClick={toggleDarkMode}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      )}
    </>
  );
};

export default Navbar;
