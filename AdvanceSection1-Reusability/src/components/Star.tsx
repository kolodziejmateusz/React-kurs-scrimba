import Toggle from "./Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

type StarProps = {
  onChange: () => void;
};

export default function Star({ onChange }: StarProps) {
  return (
    <Toggle onToggle={onChange}>
      <Toggle.Button>
        <Toggle.On>
          <BsStarFill className="star filled" />
        </Toggle.On>
        <Toggle.Off>
          <BsStar className="star" />
        </Toggle.Off>
      </Toggle.Button>
    </Toggle>
  );
}
