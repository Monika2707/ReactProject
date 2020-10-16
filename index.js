import React from "react";
import ReactDom from "react-dom";

//First step
ReactDom.render(<p>Monika Mangal</p>, document.getElementById("root"));

//second step
ReactDom.render(
  <div>
    <h1>Monika Mangal</h1>
    <p>Created in 2020</p>
  </div>,
  document.getElementById("root")
);

//Challenge
ReactDom.render(
  <div>
    <h1>My Favorite food</h1>
    <ul>
      <li>Manchurian</li>
      <li>Aloo Paratha</li>
      <li>South Indian</li>
    </ul>
  </div>,
  document.getElementById("root")
);

//Third step (Javascript in React with {})
const Name = "Monika";
const lName = "Mangal";
const Lucky = Math.floor(Math.random() * 10);
ReactDom.render(
  <div>
    <h1>
      Hello {Name}
      {lName}
    </h1>
    {/* {Name + " "+ lName} */}
    {/* {`${Name} ${lName}}` */}

    <p>your lucky number is: {Lucky}</p>
  </div>,
  document.getElementById("root")
);

//Rule:  (can't use function or if else or any statements in Rneder method)
//         ,onlu expressions can use. find exp vs statements)

//Challenge
const name = "Monika Mangal";
const currentYear = new Date().getFullYear();
ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {currentYear} </p>
  </div>,
  document.getElementById("root")
);
