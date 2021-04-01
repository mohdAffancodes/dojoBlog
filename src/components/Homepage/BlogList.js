import { Link } from "react-router-dom";
import "./blogList.css";

const BlogList = ({ blogs, docId }) => {
   return (
      <div className="blog-list">
         {blogs.length === 0 && (
            <div>
               <h3>No blogs</h3>
               <h4>
                  <Link to="/dojoBlog/create">Create One Now</Link>
               </h4>
            </div>
         )}
         {blogs.length > 0 && (
            <h3>
               All blogs
               <Link
                  to="/dojoBlog/create"
                  style={{
                     backgroundColor: "#f1356d",
                     borderRadius: "8px",
                     textTransform: "none",
                  }}
                  className="myTabs waves-effect waves-light btn white-text new hide-on-small-only"
               >
                  New Blog
               </Link>
               <Link
                  to="/dojoBlog/create"
                  style={{
                     backgroundColor: "#f1356d",
                  }}
                  className="myTabs waves-effect waves-light btn white-text newfloater hide-on-med-and-up"
               >
                  <i
                     className="material-icons"
                     style={{
                        fontSize: "40px",
                     }}
                  >
                     add
                  </i>
               </Link>
            </h3>
         )}
         {blogs.map((blog, index) => {
            return (
               <Link to={`/dojoBlog/blogs/${docId[index]}`}>
                  <div className="blog-preview" key={index}>
                     <h2>{blog.title}</h2>
                     <p>Written by {blog.author}</p>
                  </div>
               </Link>
            );
         })}
      </div>
   );
};

export default BlogList;
