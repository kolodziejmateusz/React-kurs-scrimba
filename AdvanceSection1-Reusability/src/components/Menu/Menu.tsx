import React from "react";

type MenuProps = {
  children: React.ReactNode;
};

type MenuContextType = {
  open: boolean;
  toggle: () => void;
  menuId: string;
};

const MenuContext = React.createContext<MenuContextType | null>(null);

export default function Menu({ children }: MenuProps) {
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

export { MenuContext };
