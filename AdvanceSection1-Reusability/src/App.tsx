import "./App.css";
import Toggle from "./components/Toggle/index";
// import Menu from "./components/Menu/index";
// import Star from "./components/Star";

function App() {
  // const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  /**
   * Challenge:
   * Part 1:
   * Create a ToggleDisplay component and attach
   * it to Toggle as Toggle.Display.
   *
   * It should grab the `on` value from the Toggle context
   * and render children by calling children as a function,
   * passing the `on` value to it. (E.g. children(on)).
   */

  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.Display>
            {(isFilled) => {
              return <div className={isFilled ? "box filled" : "box"}></div>;
            }}
          </Toggle.Display>
        </Toggle.Button>
      </Toggle>
    </>
  );
}

{
  /* <Star onChange={() => console.log("Star was clicked")} />
      <Menu onOpen={() => console.log("Menu was clicked")}>
        <Menu.Button>Sports</Menu.Button>
        <Menu.Dropdown>
          {sports.map((sport) => (
            <Menu.Item key={sport}>{sport}</Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu> */
}

export default App;
