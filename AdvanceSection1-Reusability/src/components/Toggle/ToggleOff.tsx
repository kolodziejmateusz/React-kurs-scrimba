import React from "react";
import { ToggleContext } from "./Toggle";

type ToggleOffProps = {
  children: React.ReactNode;
};

export default function ToggleOff({ children }: ToggleOffProps) {
  const { on } = React.useContext(ToggleContext)!;
  return !on ? children : null;
}
