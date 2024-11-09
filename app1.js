import React from "react";
import ReactDOM from "react-dom/client";


// JSX React (transpiled before it reaches the JS engine) - this is done by parcel
const jsxHeading = (
  <h1 className="head" id="tag">
    This is h1 tag using JSX 🚀
  </h1>
);
// This is not HTML this is JSX. JSX is different than HTML its HTML like syntax

// React Components
// There are two types of components in react
//1.Class Based Components - Old way of writing react components
//2.Functional Components - New way of writing react components
//Functional components
// const FunctionalComponent = () => {
    
//     return <h1 className="functionComp">Namaste Guys React Functional Component</h1>
// };
//These code are same code as below we can write like this also

const ele = <h2>Abhijit Gore</h2>;
const Title = () => (
    
    <h2>This is how we can render the one functional comp into another function comp using "Title/" this</h2>
);
const text = (
  <> 
    <span>{ele}</span>
    <h1>
      {ele}, This is how we can render the data in the functional comp using
      using curly brace
    </h1>
  </>
);

const FunctionalComponent = () => (
  <div id="container">
    <Title /> // Here we render one functional comp into another functional comp
    <h2>{text}</h2> // Using the {} these curly braces we can write the
    javascript code in the function component
    <h1>THIS IS FUNCETIONAL COMP</h1>
    <h1 className="functionComp">Namaste Guys React Functional Component</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root2"));

root.render(<FunctionalComponent />);
