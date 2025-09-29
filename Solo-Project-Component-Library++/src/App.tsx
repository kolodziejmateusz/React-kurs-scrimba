import "./App.css";
import Badge from "./components/badge/Badge";

function App() {
  const badgeColors = [
    "grey",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ] as const;
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      {badgeColors.map((color, index) => (
        <Badge key={index} color={color} variant="square">
          {capitalize(color)}
        </Badge>
      ))}

      {badgeColors.map((color, index) => (
        <Badge key={index} color={color} variant="pill">
          {capitalize(color)}
        </Badge>
      ))}

      <Badge color="blue" variant="pill">
        Mateusz
      </Badge>
    </>
  );
}

export default App;
