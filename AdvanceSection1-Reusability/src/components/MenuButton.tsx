import Button from "./Button";

type MenuButtonProps = {
  children: string;
  // toggle?: () => void;
};

export default function MenuButton({ children }: MenuButtonProps) {
  return <Button>{children}</Button>;
}
