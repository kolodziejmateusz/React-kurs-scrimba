type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "red" | "blue" | "green";
};

export default function Button({ children, variant, ...rest }: ButtonProps) {
  console.log(variant);
  return <button {...rest}>{children}</button>;
}
