import classnames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size: "sm" | "lg";
};

export default function Button({
  children,
  size,
  className,
  ...rest
}: ButtonProps) {
  const sizeClass = size ? `button-${size}` : "";
  // if (size === "sm") sizeClass = "button-small";
  // if (size === "lg") sizeClass = "button-large";

  const allClasses = classnames(sizeClass, className);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
