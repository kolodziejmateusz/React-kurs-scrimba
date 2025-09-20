import useToggle from "../hooks/useToggle";
// import Toggle from "./Toggle/index";
import { BsStar, BsStarFill } from "react-icons/bs";

type StarProps = {
  onChange?: () => void;
};

export default function Star({ onChange }: StarProps) {
  const [on, toggle] = useToggle();
  return (
    <>
      {on ? (
        <BsStarFill className="star filled" onClick={toggle} />
      ) : (
        <BsStar className="star" onClick={toggle} />
      )}
    </>
    // <Toggle onToggle={onChange}>
    //   <Toggle.Button>
    //     <Toggle.On>
    //       <BsStarFill className="star filled" />
    //     </Toggle.On>
    //     <Toggle.Off>
    //       <BsStar className="star" />
    //     </Toggle.Off>
    //   </Toggle.Button>
    // </Toggle>
  );
}
