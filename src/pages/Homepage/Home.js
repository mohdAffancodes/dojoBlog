//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import { Helmet } from "react-helmet-async";
import BlogList from "./BlogList";
//hook
import { useContext } from "react";
import { DataContext } from "../../stores/dataContext";

const Home = () => {
   const { data, status, error } = useContext(DataContext);
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
