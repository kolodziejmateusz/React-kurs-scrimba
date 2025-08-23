import Button from "./Button";

type MenuButtonProps = {
  children: string;
  onClick?: () => void;
};

export default function MenuButton({ children, onClick }: MenuButtonProps) {
  return <Button onClick={onClick}>{children}</Button>;
}
