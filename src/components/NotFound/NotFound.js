import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styles from "./notfound.module.css";

const NotFound = () => {
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
