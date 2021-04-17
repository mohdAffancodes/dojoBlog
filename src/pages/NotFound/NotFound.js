//Hooks
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
//Component
import { Helmet } from "react-helmet";
//CSS
import styles from "./notfound.module.css";

const NotFound = () => {
   let history = useHistory();

   useEffect(() => {
      setTimeout(() => {
         history.push("/dojoBlog");
      }, 1000);
   }, [history]);

   return (
      <div className={styles.notFound}>
         <Helmet>
            <title>Dojo-Blog | 404</title>
         </Helmet>
         <h2>Sorry</h2>
         <p>That page cannot be found</p>
         <Link to="/dojoBlog">Back to the homepage...</Link>
      </div>
   );
};

export default NotFound;
