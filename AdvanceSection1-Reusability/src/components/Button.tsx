import classnames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: "sm" | "lg";
  variant?: "success" | "warning" | "danger";
};

export default function Button({
  children,
  size,
  variant,
  className,
  ...rest
}: ButtonProps) {
  const sizeClass = size ? `button-${size}` : "";
  const variantClass = variant ? `button-${variant}` : "";

  const allClasses = classnames(sizeClass, variantClass, className);
  return (
    <button className={allClasses} {...rest}>
      {children}
    </button>
  );
}
