import React from "react";
import "./style.css";

interface DarkModeToggleProps {
  initialDarkMode: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ initialDarkMode }) => {
  const [darkMode, setDarkMode] = React.useState(initialDarkMode);

  React.useEffect(() => {
    const bodyElement = document.querySelector("body");
    if (bodyElement) {
      bodyElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode]);

  React.useEffect(() => {
    document.documentElement.setAttribute("class", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(event.target.checked);
  };

  return (
    <label
      htmlFor="toggle"
      className="inline-block cursor-pointer toggle-switch"
    >
      <input
        type="checkbox"
        name=""
        id="toggle"
        className="hidden dark-mode-input"
        onChange={handleToggleChange}
        checked={darkMode}
      />
      <div className="w-[100px] h-[40px] border border-[#ccc] rounded-full fixed left-5 top-5 z-50 p-[5px] transition-colors">
        <div className="w-7 h-7 bg-[#ccc] rounded-full transition-transform dark-mode-spinner"></div>
      </div>
    </label>
  );
};

export default DarkModeToggle;
