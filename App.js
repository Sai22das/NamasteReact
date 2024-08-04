const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


const parent=React.createElement("div",{id:"parent"},
  React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am an h1 tag"),
    React.createElement("h2",{},"I am h2 tag")
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am on h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),
  ]),
);


