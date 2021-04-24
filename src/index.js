import { StrictMode } from "react";
import ReactDOM from "react-dom";
//App Component and stylesheet
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./index.css";
import "./mIcons.css";
import App from "./App";

ReactDOM.render(
   <StrictMode>
      <App />
   </StrictMode>,
   document.getElementById("root")
);
