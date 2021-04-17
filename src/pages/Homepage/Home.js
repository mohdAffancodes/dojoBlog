//Hook
import useFetch from "../../api/useFetch";
//Components
import LinearLoader from "../../components/linearLoader/LinearLoader";
import { Helmet } from "react-helmet";
import BlogList from "./BlogList";

const Home = () => {
   const { data: blogs, docId, isLoading, error } = useFetch("blog1");
   //.console.log(blogs);
   return (
      <>
         <Helmet>
            <title>Dojo-Blog | Home</title>
         </Helmet>
         <div className="home">
            {error && (
               <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {error}
               </div>
            )}
            {isLoading && <LinearLoader />}
            {!error && blogs && <BlogList blogs={blogs} docId={docId} />}
         </div>
      </>
   );
};

export default Home;
