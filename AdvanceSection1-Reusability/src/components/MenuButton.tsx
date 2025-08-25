import Button from "./Button";

type MenuButtonProps = {
  children: string;
  toggle?: () => void;
  open?: boolean;
};

export default function MenuButton({
  children,
  toggle,
  open,
}: MenuButtonProps) {
  console.log("MenuButton");
  console.log(open);
  console.log(toggle);
  console.log("------------");
  return <Button onClick={toggle}>{children}</Button>;
}
