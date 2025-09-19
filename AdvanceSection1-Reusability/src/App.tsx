import "./App.css";
import Toggle from "./components/Toggle/index";

function App() {
  // const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <>
      <Toggle onToggle={() => console.log("Toggled")}>
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
