import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";

type CompoundToggle = typeof Toggle & {
  Button: typeof ToggleButton;
};

const CompoundToggle = Toggle as CompoundToggle;

CompoundToggle.Button = ToggleButton;

export default CompoundToggle;
