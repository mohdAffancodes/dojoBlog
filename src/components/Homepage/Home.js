import BlogList from "./BlogList";
import { Helmet } from "react-helmet";
import useFetch from "../hooks/useFetch";

const Home = () => {
   const { data: blogs, docId, isLoading, error } = useFetch("blog1");

   return (
      <div className="home">
         <Helmet>
            <title>Dojo-Blog | Home</title>
         </Helmet>
         {error && (
            <div style={{ fontSize: "20px", fontWeight: "700" }}>{error}</div>
         )}
         {isLoading && (
            <div className="progress">
               <div className="indeterminate pink accent-3-only"></div>
            </div>
         )}
         {blogs && <BlogList blogs={blogs} docId={docId} title="All Blogs!" />}
      </div>
   );
};

export default Home;
