import React from "react";
import { MenuContext } from "./Menu";

type MenuDropdownProps = {
  children: React.ReactNode;
};

export default function MenuDropdown({ children }: MenuDropdownProps) {
  const { open, menuId } = React.useContext(MenuContext)!;
  return open ? (
    <div className="menu-dropdown" id={menuId}>
      {children}
    </div>
  ) : null;
}
