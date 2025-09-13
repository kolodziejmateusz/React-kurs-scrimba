import React from "react";
import Toggle from "../Toggle/index";
type MenuProps = {
  children: React.ReactNode;
  onOpen: () => void;
};

export default function Menu({ children, onOpen }: MenuProps) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}
