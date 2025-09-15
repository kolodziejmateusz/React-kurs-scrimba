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

export default function Toggle({ children, onToggle = () => {} }: ToggleProps) {
  const [on, setOn] = React.useState<boolean>(false);
  const firstRender = React.useRef<boolean>(true);

  function toggle() {
    setOn((prev) => !prev);
  }

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      onToggle();
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
