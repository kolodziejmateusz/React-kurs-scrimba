import "./App.css";
import Button from "./components/Button";
import { FaMoneyBill } from "react-icons/fa6";

function App() {
  return (
    <>
      <main>
        <Button>
          <FaMoneyBill />
          Buy now!
        </Button>
      </main>
    </>
  );
}

export default App;
