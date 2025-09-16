import React, { type JSX } from "react";
import { ToggleContext } from "./Toggle";

type ToggleDisplayProps = {
  children: (isFilled: boolean) => JSX.Element;
};

export default function ToggleDisplay({ children }: ToggleDisplayProps) {
  const { on } = React.useContext(ToggleContext)!;
  return <>{children(on)}</>;
}
