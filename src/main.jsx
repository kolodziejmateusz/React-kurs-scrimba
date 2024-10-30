import { createRoot } from "react-dom/client";

// const page = (
//   <>
//     <img src="./src/assets/react-logo.png" alt="react-logo" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </>
// );

// createRoot(document.getElementById("root")).render(page);

function Page() {
  return (
    <>
      <header>
        <nav>
          <img
            src="./src/assets/react-logo.png"
            alt="react-logo"
            width="40px"
          />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          Its a popular library, so Ill be able to fit in with the cool kids!
        </li>
        <li>Im more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2024 Mateusz development. All rights reserved.</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <>
    <Page />
    <Page />
    <Page />
  </>
);
