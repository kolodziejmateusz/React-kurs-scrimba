import React from "react";
import Toggle from "../Toggle/index";

type MenuDropdownProps = {
  children: React.ReactNode;
};

export default function MenuDropdown({ children }: MenuDropdownProps) {
  return (
    <Toggle.On>
      <div className="menu-dropdown">{children}</div>
    </Toggle.On>
  );
}
