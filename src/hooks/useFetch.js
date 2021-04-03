import firebase from "../firebase";
import { useState, useEffect } from "react";

const useFetch = (collection, id) => {
   const [data, setData] = useState(null);
   const [docId, setDocId] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   let db = firebase.firestore().collection(collection);

   useEffect(() => {
      const abort = new AbortController();
      if (id) {
         db.doc(id)
            .get()
            .then((doc) => {
               setData(doc.data());
               setIsLoading(false);
            })
            .catch((err) => {
               //.auto catches network / connection error
               setIsLoading(false);
               setError(err.message);
            });
      } else {
         db.orderBy("createdAt", "desc")
            .get()
            .then((querySnapshot) => {
               let items = [];
               let ids = [];
               querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  items.push(doc.data());
                  ids.push(doc.id);
               });
               //.console.log(ids);
               setDocId(ids);
               setData(items);
               setIsLoading(false);
            })
            .catch((err) => {
               //.auto catches network / connection error
               setIsLoading(false);
               setError(err.message);
            });
      }
      return () => abort.abort();
   }, [collection, db, id]);

   return { db, data, docId, isLoading, error };
};

export default useFetch;
