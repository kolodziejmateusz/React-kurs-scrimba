import React from "react";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

type MenuProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  open: boolean;
  toggle: () => void;
  menuId: string;
};

const MenuContext = React.createContext<MenuContextType | null>(null);

function MenuRoot({ children }: MenuProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const menuId = React.useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, toggle, menuId }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

const Menu = Object.assign(MenuRoot, {
  Button: MenuButton,
  Dropdown: MenuDropdown,
  Item: MenuItem,
});

export default Menu;
export { MenuContext };
