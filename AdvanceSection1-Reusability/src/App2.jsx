import Decision from "./components2/Decision";

function App() {
  return (
    <div>
      <Decision>
        {(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      </Decision>
    </div>
  );
}

export default App;
