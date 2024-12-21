import React from 'react';
import {createRoot} from 'react-dom/client';


const heading = React.createElement("div", {},
    [
        React.createElement("h1",{key:1},"This is a heading"),
        React.createElement("p",{key:2},"This is a p"),
    ]
);
const root = createRoot(document.getElementById("root"));
console.log('heading', heading);

root.render(heading);