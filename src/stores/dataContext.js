import { createContext } from "react";
import { useFirestoreQuery } from "../api/useFirestoreQuery";

export const DataContext = createContext(null);

export default function DataProvider({ children }) {
   const { ...query } = useFirestoreQuery("blog1");

   return <DataContext.Provider value={query}>{children}</DataContext.Provider>;
}
