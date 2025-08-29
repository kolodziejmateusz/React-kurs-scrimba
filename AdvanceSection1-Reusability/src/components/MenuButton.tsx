import React from "react";
import Button from "./Button";
import { MenuContext } from "./Menu";

type MenuButtonProps = {
  children: string;
};

export default function MenuButton({ children }: MenuButtonProps) {
  const { toggle } = React.useContext(MenuContext)!;
  return <Button onClick={toggle}>{children}</Button>;
}
