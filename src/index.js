import { StrictMode } from "react";
import ReactDOM from "react-dom";
//App Component and stylesheet
import "./index.css";
import App from "./App";

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById("root")
);
