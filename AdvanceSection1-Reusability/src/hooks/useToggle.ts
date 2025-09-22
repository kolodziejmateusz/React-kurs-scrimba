import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle(
  onOpen: () => void = () => {},
  initialValue: boolean = false
): [boolean, () => void] {
  const [on, setOn] = React.useState<boolean>(initialValue);

  function toggle() {
    setOn((prev) => !prev);
  }

  useEffectOnUpdate(onOpen, [on]);

  return [on, toggle];
}
