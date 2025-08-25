import React from "react";

type MenuDropdownProps = {
  children: React.ReactNode;
  open?: boolean;
  toggle?: () => void;
};

export default function MenuDropdown({
  children,
  open,
  toggle,
}: MenuDropdownProps) {
  console.log("MenuDropdown");
  console.log(open);
  console.log(toggle);
  console.log("------------");
  return open ? (
    <div className="menu-dropdown">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { open, toggle });
      })}
    </div>
  ) : null;
}
