import firebase from "../../firebase";
import { useState, useEffect } from "react";

const useFetch = (collection) => {
   const [data, setData] = useState(null);
   const [docId, setDocId] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const db = firebase.firestore().collection(collection);
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
   }, [collection]);

   return { data, docId, isLoading, error };
};

export default useFetch;
