import Button from "../Button/Button";

type MenuButtonProps = {
  children: string;
};

export default function MenuButton({ children }: MenuButtonProps) {
  return <Button>{children}</Button>;
}
