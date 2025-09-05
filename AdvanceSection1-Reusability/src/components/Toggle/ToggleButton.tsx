import React from "react";
import { ToggleContext } from "./Toggle";

type ToggleButtonProps = {
  children: React.ReactNode;
};

export default function ToggleButton({ children }: ToggleButtonProps) {
  const { toggle } = React.useContext(ToggleContext)!;
  return <div onClick={toggle}>{children}</div>;
}
