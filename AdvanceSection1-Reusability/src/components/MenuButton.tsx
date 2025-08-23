import Button from "./Button";

type MenuButtonProps = {
  children: string;
  toggle?: () => void;
};

export default function MenuButton({ children, toggle }: MenuButtonProps) {
  return <Button onClick={toggle}>{children}</Button>;
}
