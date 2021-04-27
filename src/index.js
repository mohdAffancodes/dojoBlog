import { StrictMode } from "react";
import ReactDOM from "react-dom";
//App Component and stylesheet
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./index.css";
import "./mIcons.css";
import App from "./App";
//providers
import { HelmetProvider } from "react-helmet-async";
import DataProvider from "./stores/dataContext";
import { AuthProvider } from "./stores/authContext";

const Provider = () => {
   return (
      <HelmetProvider>
         <AuthProvider>
            <DataProvider>
               <App />
            </DataProvider>
         </AuthProvider>
      </HelmetProvider>
   );
};

ReactDOM.render(
   <StrictMode>
      <Provider />
   </StrictMode>,
   document.getElementById("root")
);
