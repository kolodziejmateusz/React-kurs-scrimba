import React from "react";
import { ToggleContext } from "./Toggle";

type ToggleOnProps = {
  children: React.ReactNode;
};

export default function ToggleOn({ children }: ToggleOnProps) {
  const { on } = React.useContext(ToggleContext)!;
  return on ? children : null;
}
