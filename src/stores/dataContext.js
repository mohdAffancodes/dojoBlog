import { createContext } from "react";
import { useFirestoreQuery } from "../api/useFirestoreQuery";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
   const { state , snapshot} = useFirestoreQuery("blog1");

   return <DataContext.Provider value={state, snapshot}>{children}</DataContext.Provider>;
}
