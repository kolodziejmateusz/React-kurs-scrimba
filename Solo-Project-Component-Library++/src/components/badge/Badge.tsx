import "./Badge.css";
import classnames from "classnames";

type BadgeProps = {
  children: React.ReactNode;
  color?:
    | "grey"
    | "red"
    | "yellow"
    | "green"
    | "blue"
    | "indigo"
    | "purple"
    | "pink";
  variant?: "square" | "pill";
};

export default function Badge({
  children,
  color = "grey",
  variant = "square",
}: BadgeProps) {
  const allClasses = classnames("badge", color, variant);
  return <div className={allClasses}>{children}</div>;
}
