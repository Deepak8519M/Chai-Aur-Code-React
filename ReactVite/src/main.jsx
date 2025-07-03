import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// import { jsx as _jsx } from "react/jsx-runtime.js";

function MyApp() {
  return (
    <div>
      <h1>Hello Sir</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click me to Visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },

  "click me to visit google"
);

createRoot(document.getElementById("root")).render(<App />);
