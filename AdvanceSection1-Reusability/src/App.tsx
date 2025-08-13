import "./App.css";
import Button from "./components/Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  // function onClick(): void {
  //   console.log("Logging in...");
  // }

  return (
    <>
      <main>
        <Button size="sm" className="green">
          <FcGoogle />
          Log in with Google
        </Button>
      </main>
    </>
  );
}

export default App;
