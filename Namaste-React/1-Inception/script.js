// const container = document.getElementById("root");
// const h1 = document.createElement("h1");

// h1.textContent = "Hello world from js";

// container.appendChild(h1);

// root.render();

const heading = React.createElement("div", {},
    [
        React.createElement("h1",{key:1},"This is a heading"),
        React.createElement("p",{key:2},"This is a p"),
    ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('heading', heading);

root.render(heading);// render method taking createElement object and converting it to into tags and rendering it;
