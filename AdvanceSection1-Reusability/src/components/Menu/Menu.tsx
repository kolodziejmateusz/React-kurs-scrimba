import React from "react";
import Toggle from "../Toggle/index";
type MenuProps = {
  children: React.ReactNode;
};

export default function Menu({ children }: MenuProps) {
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}
