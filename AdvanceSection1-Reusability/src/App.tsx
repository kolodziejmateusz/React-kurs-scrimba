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
      </Toggle>
    </>
  );
}

export default App;
