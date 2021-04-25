import { createContext } from "react";
import { useFirestoreQuery } from "../api/useFirestoreQuery";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
   const { state , snapshot} = useFirestoreQuery("blog1");
   const { data, status, error } = state;

   return <DataContext.Provider value={data, status, error, snapshot}>{children}</DataContext.Provider>;
}
