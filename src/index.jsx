import React from "react";
import ReactDOM from "react-dom/client";
import Number from "./Number";

function App() {

return(
    <React.Fragment>
    <Number Number = {20 + 20} />
    </React.Fragment>
)

}

const root = document.getElementById("root");
 ReactDOM.createRoot(root).render(<App />);