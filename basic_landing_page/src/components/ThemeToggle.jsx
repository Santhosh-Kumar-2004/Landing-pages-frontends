import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import "../styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <button className="theme-toggle" onClick={handleToggle}>
      <div className={`icon-wrapper ${darkMode ? "dark" : "light"}`}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </div>
    </button>
  );
};

export default ThemeToggle;
