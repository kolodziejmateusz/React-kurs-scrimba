// import type { ReactNode } from "react";

// type ButtonProps = {
//   children: ReactNode;
//   onClick: () => void;
// };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}
