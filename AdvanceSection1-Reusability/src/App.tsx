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
        <Button size="lg">
          <FcGoogle />
          Log in with Google
        </Button>
        <Button variant="success">
          <FcGoogle />
          Log in with Google
        </Button>
        <Button size="lg" variant="warning">
          <FcGoogle />
          Log in with Google
        </Button>
        <Button size="sm" variant="danger">
          <FcGoogle />
          Log in with Google
        </Button>
      </main>
    </>
  );
}

export default App;
