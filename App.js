
// 1st  way to create Hello word
// const heading =  document.createElement("h1")
// heading.innerHTML = "Hello Worldasd"
// const root = document.getElementById("root")
// root.appendChild(heading)

/*
2nd way
const heading = React.createElement("h1",{id:"heading"},"Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
*/
const parent = React.createElement(
    "div",{id:"parent"},
    [
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am a h1 Tag"),
        React.createElement("h1",{},"I am a h1 Tag")
        ]),
        React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"I am a h1 Tag"),
        React.createElement("h1",{},"I am a h1 Tag")
        ]),
    ]
   
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)