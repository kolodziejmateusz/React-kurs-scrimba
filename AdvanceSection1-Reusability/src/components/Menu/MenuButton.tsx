import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

type MenuButtonProps = {
  children: string;
};

export default function MenuButton({ children }: MenuButtonProps) {
  const { toggle, open, menuId } = React.useContext(MenuContext)!;
  return (
    <Button
      onClick={toggle}
      aria-expanded={open}
      aria-haspopup="true"
      aria-controls={menuId}
    >
      {children}
    </Button>
  );
}
