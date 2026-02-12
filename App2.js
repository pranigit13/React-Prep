import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement  => JS object => HTMLelement (render)
const content = React.createElement(
  "h2", // tag name
  { id: "heading2" }, // atrributes
  "No Rendered",
); // text or other elements or array of elements

// React elements are rendered just as variables
const heading2 = <h2 className="heading2">Not rendered</h2>;

// React functional components are rendered in <tag/> fashion
const HeaderComponent = () => (
  <div>
    <h1>Heading</h1>
    {heading2}
  </div>
);
// JSX => transpiled to React.createElement by Babel  => JS object => HTMLelement (render)





// react        → Core library (logic, hooks, components, reconciliation)
// react-dom    → DOM renderer (browser-specific rendering)

// react-dom is the package responsible for rendering React components into the browser DOM.
/**
 * Your Component (JSX)
 *      ↓
 * React (creates Virtual DOM)
 *      ↓
 * Reconciliation (diffing)
 *      ↓
 * ReactDOM (applies changes to real DOM)
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
// root render replaces everything that is present in root
root.render(<HeaderComponent/>);
