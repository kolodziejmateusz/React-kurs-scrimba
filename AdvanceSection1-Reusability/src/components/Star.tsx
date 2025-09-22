import useToggle from "../hooks/useToggle";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Star() {
  const [on, toggle] = useToggle();
  return (
    <>
      {on ? (
        <BsStarFill className="star filled" onClick={toggle} />
      ) : (
        <BsStar className="star" onClick={toggle} />
      )}
    </>
  );
}
