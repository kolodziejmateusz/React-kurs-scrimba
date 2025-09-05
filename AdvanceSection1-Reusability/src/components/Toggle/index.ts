import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";

type CompoundToggle = typeof Toggle & {
  Button: typeof ToggleButton;
  On: typeof ToggleOn;
  Off: typeof ToggleOff;
};

const CompoundToggle = Toggle as CompoundToggle;

CompoundToggle.Button = ToggleButton;
CompoundToggle.On = ToggleOn;
CompoundToggle.Off = ToggleOff;

export default CompoundToggle;
