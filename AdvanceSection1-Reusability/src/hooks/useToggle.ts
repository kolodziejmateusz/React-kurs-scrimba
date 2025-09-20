import React from "react";

export default function useToggle(): [boolean, () => void] {
  const [on, setOn] = React.useState<boolean>(false);

  function toggle() {
    setOn((prev) => !prev);
  }

  return [on, toggle];
}
