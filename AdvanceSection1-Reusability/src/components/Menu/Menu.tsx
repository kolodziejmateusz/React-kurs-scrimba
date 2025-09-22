import React from "react";
import useToggle from "../../hooks/useToggle";

type MenuProps = {
  children: React.ReactNode;
  onOpen?: () => void;
};

type MenuContextType = {
  open: boolean;
  toggleOpen: () => void;
};

/**
 * Challenge:
 * 1. Remove all references to Toggle in the all 4 Menu
 *    components
 * 2. import and use `useToggle()` to create new state
 *    and toggle functions so we can use those in the Menu.
 *    Call the variables "open" and "toggleOpen".
 */

const MenuContext = React.createContext<MenuContextType | null>(null);

export default function Menu({ children }: MenuProps) {
  const [open, toggleOpen] = useToggle();
  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
