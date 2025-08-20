import Button from "./Button";

type MenuButtonProps = {
  buttonText: string;
  onClick: () => void;
};

export default function MenuButton({ buttonText, onClick }: MenuButtonProps) {
  return <Button onClick={onClick}>{buttonText}</Button>;
}
