import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

type useToggleOptions = {
  initialValue?: boolean;
  onToggle?: () => void;
};

export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}: useToggleOptions): [boolean, () => void] {
  const [on, setOn] = React.useState<boolean>(initialValue);

  function toggle() {
    setOn((prev) => !prev);
  }

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle];
}
