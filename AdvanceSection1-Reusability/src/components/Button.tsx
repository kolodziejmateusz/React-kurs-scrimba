type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  // variant: "red" | "blue" | "green";
  size: "sm" | "lg";
};

export default function Button({ children, size, ...rest }: ButtonProps) {
  /**
   * Challenge: accept the `size` prop and set the `className` of the
   * <button> to:
   *
   * "button-small" if `size` is "sm"
   * "button-large" if `size` is "lg"
   *
   * Note: don't try to manually add a `className` to the Button
   * instance in index.js yet. (DO add `className` to this file
   * as part of the challenge, though.)
   */

  let sizeClass: "button-small" | "button-large" | undefined;
  if (size === "sm") sizeClass = "button-small";
  if (size === "lg") sizeClass = "button-large";

  return (
    <button className={sizeClass} {...rest}>
      {children}
    </button>
  );
}
