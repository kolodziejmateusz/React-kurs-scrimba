import React from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const value = React.useContext(ThemeContext);
  console.log(value);
  return (
    <header className={value + "-theme"}>
      <h1>{value === "dark" ? "Dark" : "Light"} Theme</h1>
    </header>
  );
}
