import { useParams, useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "./blogDetails.css";

const BlogDetails = () => {
   const { id } = useParams();
   const { data: blog, isLoading, error } = useFetch(
      "https://my-json-server.typicode.com/mohdaffancodes/jsonServer/blogs" + id
   );
   const history = useHistory();

   const deleteBlog = () => {
      fetch("https://my-json-server.typicode.com/mohdaffancodes/jsonServer/blogs" + blog.id, {
         method: "DELETE",
      }).then(() => {
         history.push("/");
      });
   };

   return (
      <div className="blog-details">
         {isLoading && (
            <div className="progress">
               <div className="indeterminate pink accent-3-only"></div>
            </div>
         )}
         {error && (
            <div style={{ fontSize: "20px", fontWeight: "700" }}>{error}</div>
         )}
         {blog && (
            <article>
               <h2>
                  <span>{blog.title}</span>
                  <i
                     className="material-icons right"
                     style={{
                        cursor: "pointer",
                        fontSize: "40px",
                     }}
                     onClick={deleteBlog}
                  >
                     delete
                  </i>
               </h2>
               <h6>Written by {blog.author}</h6>
               <div>
                  <p>
                     <b>{blog.body}</b>
                  </p>
               </div>
            </article>
         )}
      </div>
   );
};

export default BlogDetails;
