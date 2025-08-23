import React from "react";

type MenuProps = {
  children: React.ReactNode;
};

export default function Menu({ children }: MenuProps) {
  const [open, setOpen] = React.useState<boolean>(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="menu">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { open, toggle });
      })}
    </div>
  );
}
