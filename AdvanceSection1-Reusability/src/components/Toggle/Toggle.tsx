import React from "react";

type ToggleProps = {
  children: React.ReactNode;
  onToggle: () => void;
};

type ToggleContextType = {
  on: boolean;
  toggle: () => void;
};

const ToggleContext = React.createContext<ToggleContextType | null>(null);

export default function Toggle({ children, onToggle }: ToggleProps) {
  const [on, setOn] = React.useState<boolean>(false);

  function toggle() {
    setOn((prev) => !prev);
  }

  React.useEffect(() => {
    onToggle();
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
