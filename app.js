import React from "react";
import ReactDOM from "react-dom/client";

// Here we write all our react code

const heading = React.createElement(
  "h1",
  { id: "xyz" },
  "Hello World form React! This is react heading"
); // This createElement basically takes the 3 parameter first the tag, object in that object we will give the attribute and third is what we have to put in that tag


// As we know the HTML structure is not a basic structure we have complex structure
/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1>I'm H1 Tag means heading tag</h1>
 *          <h2>This is another siblings</h2>
 *      </div>
 *      <div id = "child">
 *          <h1>I'm H1 Tag means heading tag</h1>
 *          <h2>This is another siblings</h2>
 *      </div>
 * </div>
 */

// So how we can create this structure here
const parentElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {id:"xyz1"}, "This is namaste react By Abhijit gore And its App.js"),
      React.createElement("h2", {id:"tag"}, "This is Another tag here app.js"),
    ] // if we want to add one more sibling to it then we need to add that in the array
  )
); // here we have created the html structure


console.warn(
  "This heading is a react element and we can see in the console the react element will be printed in object",
  parentElement
);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(heading);