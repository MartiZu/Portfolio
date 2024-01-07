import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

export default function Settings() {
  const colors = ["#9b7ede", "#a9e5bb", "#fcf6b1", "#f7b32b", "#f06449"];
  const fonts = [
    { title: "small", size: ".75rem" },
    { title: "medium", size: "1rem" },
    { title: "large", size: "1.25rem" },
  ];
  const root = {
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--background-dark": "#5e5e5e",
    "--shadow-color": "rgba(0, 0, 0, 0.2)",
    "--primary-color": "rgb(103, 38, 122)",
    "--text-color": "#0a0a0a",
    "--text-light": "#575757",
    "--text-dark": "#000",
    "--font-size": "1rem",
    "--animation-speed": 1,
  };

  const themes = [
    {
      "--background-color": "#fff",
      "--background-light": "#fff",
      "--shadow-color": "rgba(0, 0, 0, 0.2)",
      "--text-color": "#0a0a0a",
      "--text-light": "#575757",
    },
    {
      "--background-color": "#5e5e5e",
      "--background-light": "#313030",
      "--shadow-color": "rgba(250, 250, 250, 0.2)",
      "--text-color": "#fff",
      "--text-light": "#eceaea",
    },
  ];
  const [theme, setTheme] = useState("light"); // ["light", "dark"]
  const [primaryColor, setPrimaryColor] = useState(0);
  const [fontSize, setFontSize] = useState(fonts[1]);
  const [settings, setSettings] = useState(root);

  useEffect(() => {
    const docRoot = document.documentElement;
    for (let key in settings) {
      docRoot.style.setProperty(key, settings[key]);
    }
  }, [settings]);

  function changeTheme(themeIndex) {
    const newTheme = { ...themes[themeIndex] };
    setTheme(themeIndex === 0 ? "light" : "dark");
    let newSettings = { ...settings };
    for (const key in newTheme) {
      newSettings[key] = newTheme[key];
    }
    setSettings(newSettings);
  }

  function changeColor(colorIndex) {
    const newColor = colors[colorIndex];
    setPrimaryColor(colorIndex);
    let newSettings = { ...settings };
    newSettings["--primary-color"] = newColor;
    setPrimaryColor(colorIndex);
    setSettings(newSettings);
  }

  function changeFontSize(sizeIndex) {
    const newSize = fonts[sizeIndex];
    setFontSize(sizeIndex);
    let newSettings = { ...settings };
    newSettings["--font-size"] = newSize.size;
    setFontSize(sizeIndex);
    setSettings(newSettings);
  }

  return (
    <div>
      <div className="section d-block">
        <h2>Themes</h2>
        <div className="themes">
          <div className="option light" onClick={() => changeTheme(0)}>
            {theme === "light" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
          <div className="option dark" onClick={() => changeTheme(1)}>
            {theme === "dark" && (
              <div className="check">
                <FontAwesomeIcon icon={faCheck} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section d-block">
        <h2>Primary Colors</h2>
        <div className="themes">
          {colors.map((color, index) => (
            <div
              className="option light"
              style={{ backgroundColor: color }}
              onClick={() => changeColor(index)}
            >
              {primaryColor === index && (
                <div className="check">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="section d-block">
        <h2>Font Size</h2>
        <div className="themes">
          {fonts.map((font, index) => (
            <button className="btn" onClick={() => changeFontSize(index)}>
              {font.title}
              {fontSize === index && (
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
