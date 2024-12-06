import Header from "./components/Header";
import Entry from "./components/Entry";
import "./app.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry />
      </main>
    </>
  );
}
