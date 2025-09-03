import "./App.css";
import Star from "./components/Star";
import Toggle from "./components/Toggle/index";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Star />
        </Toggle.Button>
        <Toggle.On>toggle is on</Toggle.On>
        <Toggle.Off>toggle is off</Toggle.Off>
      </Toggle>
    </>
  );
}

export default App;
