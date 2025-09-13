import Button from "../Button/Button";
import Toggle from "../Toggle/index";

type MenuButtonProps = {
  children: string;
};

export default function MenuButton({ children }: MenuButtonProps) {
  return (
    <Toggle.Button>
      <Button>{children}</Button>
    </Toggle.Button>
  );
}
