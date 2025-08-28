import React from "react";
import { MenuContext } from "./Menu";

type MenuDropdownProps = {
  children: React.ReactNode;
  // open?: boolean;
};

export default function MenuDropdown({ children }: MenuDropdownProps) {
  const open = React.useContext(MenuContext);
  return open ? <div className="menu-dropdown">{children}</div> : null;
}
