import { createContext, useContext, useState } from "react";
import "./app.css";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="card">
      <h2>Global Theme</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <h1>React Context API</h1>
      <Home />
    </ThemeProvider>
  );
}
