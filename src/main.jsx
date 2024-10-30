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

function Reasons() {
  return (
    <ol>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ol>
  );
}

createRoot(document.getElementById("root")).render(<Reasons />);
