import { createContext } from "react";
import { useFirestoreQuery } from "../api/useFirestoreQuery";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
   const { state, change } = useFirestoreQuery("blog1");
   const { data, status, error } = state;
   const context = { data, status, error, change };

   return (
      <DataContext.Provider value={context}>{children}</DataContext.Provider>
   );
}
