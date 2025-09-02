/**
 * Challenge:
 *
 * 1. Create a Toggle component that initializes its own boolean state.
 * 2. Create a function called `toggle` in that component that flips the
 *    boolean when the function runs.
 * NOTE: Don't worry about rendering anything yet
 */

import React from "react";

type ToggleProps = {
  children: React.ReactNode;
};

export default function Toggle({ children }: ToggleProps) {
  const [state, setState] = React.useState<boolean>(false);

  function toggle() {
    setState((prev) => !prev);
  }
  return <>{children}</>;
}
