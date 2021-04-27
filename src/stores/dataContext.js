import { createContext, useContext } from "react";
import { useFirestoreQuery } from "../api/useFirestoreQuery";
import AuthContext from "./authContext";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
   const { user } = useContext(AuthContext);
   let email = "blog1";
   if (user) {
      email = user.email;
   }
   const { state, change } = useFirestoreQuery(email);
   const { data, status, error } = state;
   const context = { data, status, error, change };

   return (
      <DataContext.Provider value={context}>{children}</DataContext.Provider>
   );
}
