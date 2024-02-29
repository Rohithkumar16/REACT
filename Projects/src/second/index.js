import React from "react";
import ReactDom from "react-dom/client";
import { Books } from "./books";
import Bookslist from "./bookslist";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Bookslist/>
);