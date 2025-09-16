import Toggle from "./Toggle";
import ToggleButton from "./ToggleButton";
import ToggleOn from "./ToggleOn";
import ToggleOff from "./ToggleOff";
import ToggleDisplay from "./ToggleDisplay";

type CompoundToggle = typeof Toggle & {
  Button: typeof ToggleButton;
  On: typeof ToggleOn;
  Off: typeof ToggleOff;
  Display: typeof ToggleDisplay;
};

const CompoundToggle = Toggle as CompoundToggle;

CompoundToggle.Button = ToggleButton;
CompoundToggle.On = ToggleOn;
CompoundToggle.Off = ToggleOff;
CompoundToggle.Display = ToggleDisplay;

export default CompoundToggle;
