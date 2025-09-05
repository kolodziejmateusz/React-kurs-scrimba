import React from "react";

type ToggleProps = {
  children: React.ReactNode;
};

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = React.createContext<ToggleContextType | null>(null);

export default function Toggle({ children }: ToggleProps) {
  const [on, setOn] = React.useState<boolean>(false);

  function toggle() {
    setOn((prev) => !prev);
  }
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
