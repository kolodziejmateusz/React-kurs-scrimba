import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import MenuButton from "./components/MenuButton";
import MenuDropdown from "./components/MenuDropdown";
import MenuItem from "./components/MenuItem";

/**
 * Challenge:
 * 1. Convert the Menu component to use props.children
 *    instead of taking an `items` prop. (We'll update
 *    the MenuButton and MenuDropdown components later.)
 *    See note inside the Menu.js file for more info
 *
 * 2. import MenuButton and MenuDropdown into THIS file
 *    and render them as children of the Menu component.
 *    Remember to pass the buttonText and items array to
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 *
 * NOTE: The functionality of the menu will be broken after
 * these changes, but that's okay! As such, don't worry
 * about moving the state or toggle function from the Menu;
 * there's more we need to learn before we can do that.
 */

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];
  const [open, setOpen] = React.useState<boolean>(true);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }
  return (
    <>
      <>
        <Menu>
          <MenuButton onClick={toggle}>Sports</MenuButton>
          {open && (
            <MenuDropdown>
              {sports.map((sport) => (
                <MenuItem key={sport}>{sport}</MenuItem>
              ))}
            </MenuDropdown>
          )}
        </Menu>
      </>
    </>
  );
}

export default App;
