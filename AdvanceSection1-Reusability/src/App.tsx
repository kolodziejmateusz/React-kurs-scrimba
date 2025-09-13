import "./App.css";
import Menu from "./components/Menu/index";
import Toggle from "./components/Toggle/index";

function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"];

  return (
    <>
      <Toggle>
        <Menu>
          <Toggle.Button>
            <Menu.Button>Sports</Menu.Button>
            <Toggle.On>
              <Menu.Dropdown>
                {sports.map((sport) => (
                  <Menu.Item key={sport}>{sport}</Menu.Item>
                ))}
              </Menu.Dropdown>
            </Toggle.On>
          </Toggle.Button>
        </Menu>
      </Toggle>
    </>
  );
}

export default App;
