import BlogList from "./BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
   const { data: blogs, isLoading, error } = useFetch(
      "https://my-json-server.typicode.com/mohdaffancodes/jsonServer/blogs"
   );

   return (
      <div className="home">
         {error && (
            <div style={{ fontSize: "20px", fontWeight: "700" }}>{error}</div>
         )}
         {isLoading && (
            <div className="progress">
               <div className="indeterminate pink accent-3-only"></div>
            </div>
         )}
         {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      </div>
   );
};

export default Home;
