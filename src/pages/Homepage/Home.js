//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import { Helmet } from "react-helmet";
import BlogList from "./BlogList";
//hook
import { useFirestoreQuery } from "../../api/useFirestoreQuery";

const Home = () => {
   const { data, status, error } = useFirestoreQuery("blog1");
   //.console.log(data);
   return (
      <>
         <Helmet>
            <title>Dojo-Blog | Home</title>
         </Helmet>
         <div className="home">
            {status === "error" && (
               <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {error.message}
               </div>
            )}
            {status === "loading" && <LinearLoader />}
            {status === "success" && <BlogList blogs={data} />}
         </div>
      </>
   );
};

export default Home;
