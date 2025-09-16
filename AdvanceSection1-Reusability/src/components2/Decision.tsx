import React, { type JSX } from "react";

type DecisionProps = {
  children: (goingOut: boolean) => JSX.Element;
};

export default function Decision({ children }: DecisionProps) {
  const [goingOut, setGoingOut] = React.useState(false);

  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {children(goingOut)}
    </div>
  );
}
