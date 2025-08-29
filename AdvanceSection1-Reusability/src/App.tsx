import "./App.css";
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
const ThemeContext = React.createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  /**
   * Challenge part 1:
   * Add state to the App component. Default value === "light".
   * Pass that state as the value to the context provider.
   *
   * Challenge part 2:
   * Create a `toggleTheme` function to that uses `setTheme`
   * to change the value from "light" to "dark" and vice versa.
   */

  function toggleTheme(): void {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`container ${theme}-theme`}>
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
