import { createRoot } from "react-dom/client";

const navbar = (
  <nav>
    <h1>Bob Bistro</h1>
    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

createRoot(document.getElementById("root")).render(navbar);
