import { createRoot } from "react-dom/client";
import "./main.css";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
