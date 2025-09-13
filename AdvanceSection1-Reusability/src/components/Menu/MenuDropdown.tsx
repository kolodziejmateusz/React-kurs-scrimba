import React from "react";

type MenuDropdownProps = {
  children: React.ReactNode;
};

export default function MenuDropdown({ children }: MenuDropdownProps) {
  return <div className="menu-dropdown">{children}</div>;
}
