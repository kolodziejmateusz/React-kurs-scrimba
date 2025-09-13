import React from "react";

type MenuProps = {
  children: React.ReactNode;
};

export default function Menu({ children }: MenuProps) {
  return (
    <div className="menu" role="menu">
      {children}
    </div>
  );
}
