//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import { Helmet } from "react-helmet-async";
import BlogList from "./BlogList";
//hook
import { useContext } from "react";
import { DataContext } from "../../stores/dataContext";
import AuthContext from "../../stores/authContext";

const Home = () => {
   const { user, logout, login } = useContext(AuthContext);
   const { data, status, error } = useContext(DataContext);
   //.console.log(data);
   return (
      <>
         <Helmet>
            <title>Dojo-Blog | Home</title>
         </Helmet>
         <div className="home">
            {user ? (
               <>
                  {status === "error" && (
                     <div style={{ fontSize: "20px", fontWeight: "700" }}>
                        {error.message}
                     </div>
                  )}
                  {status === "loading" && <LinearLoader />}
                  {status === "success" && <BlogList blogs={data} />}
               </>
            ) : (
               <>
                  <h3 className="center loginHeader">
                     Please <span onClick={login}>Login/Signup</span> to proceed
                  </h3>
               </>
            )}
         </div>
      </>
   );
};

export default Home;
