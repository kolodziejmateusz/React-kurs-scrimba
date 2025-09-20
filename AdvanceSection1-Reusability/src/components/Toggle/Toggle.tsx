import React from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

type ToggleProps = {
  children: React.ReactNode;
  onToggle?: () => void;
};

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = React.createContext<ToggleContextType | null>(null);

export default function Toggle({ children, onToggle = () => {} }: ToggleProps) {
  const [on, toggle] = useToggle();

  useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
