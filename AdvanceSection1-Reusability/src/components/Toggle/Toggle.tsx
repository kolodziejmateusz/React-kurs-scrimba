/**
 * Challenge: set up context!
 * Reminder of the steps:
 * 1. Create a new context (outside the component, but in this file)
 * 2. Export that context instance from the file so we
 *    can use it eleswhere
 * 3. Use the Context Provider to wrap the `children` returned
 *    from this Toggle component
 * 4. Pass the state values to the context value prop for access
 *    from child components later on
 */

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
