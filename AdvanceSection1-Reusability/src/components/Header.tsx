import React from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const { theme } = React.useContext(ThemeContext)!;
  console.log(theme);
  return (
    <header className={theme + "-theme"}>
      <h1>{theme === "dark" ? "Dark" : "Light"} Theme</h1>
    </header>
  );
}
