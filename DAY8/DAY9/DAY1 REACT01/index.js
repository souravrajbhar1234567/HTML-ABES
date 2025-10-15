// Create headings
const heading = React.createElement("h1", { id: "title" }, "Hello World from React");
const heading2 = React.createElement("h2", { id: "title2" }, "Hello World from React - 2");
const heading3 = React.createElement("h3", { id: "title3" }, "Hello World from React - 3");

// Create a <span> element
const span = React.createElement("span", { id: "heading" }, "Hello World");

// Create nested divs
const innerDiv = React.createElement("div", { id: "inner" }, [heading3, span]);
const outerDiv = React.createElement("div", { id: "outer" }, [heading, heading2, innerDiv]);

// Render everything
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(outerDiv);
