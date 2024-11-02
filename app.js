// Here we write all our react code

const heading = React.createElement(
  "h1",
  { id: "xyz" },
  "Hello World form React!"
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
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ] // if we want to add one more sibling to it then we need to add that in the array
  )
); // here we have created the html structure


console.warn(
  "This heading is a react element and we can see in the console the react element will be printed in object",
  parentElement
);
const root = ReactDOM.createRoot(document.getElementById("root1"));
root.render(parentElement);