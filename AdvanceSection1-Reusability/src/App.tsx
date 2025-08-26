import "./App.css";
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";

const ThemeContext = React.createContext("");

function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export { ThemeContext };
