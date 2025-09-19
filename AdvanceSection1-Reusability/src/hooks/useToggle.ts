import React from "react";

export default function useToggle(): void {
  const [on, setOn] = React.useState<boolean>(false);

  function toggle() {
    setOn((prev) => !prev);
  }
}
