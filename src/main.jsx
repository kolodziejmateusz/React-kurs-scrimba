import { createRoot } from "react-dom/client";
import "./main.css";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav-logo"
          src="./src/assets/react-logo.png"
          alt="react-logo"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

const Footer = () => (
  <footer>
    <small>© 2024 Mateusz development. All rights reserved.</small>
  </footer>
);

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <Page />
  </>
);
