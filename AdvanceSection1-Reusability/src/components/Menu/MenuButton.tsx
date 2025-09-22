import React from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";
type MenuButtonProps = {
  children: string;
};

export default function MenuButton({ children }: MenuButtonProps) {
  const { toggleOpen } = React.useContext(MenuContext)!;
  return <Button onClick={toggleOpen}>{children}</Button>;
}
