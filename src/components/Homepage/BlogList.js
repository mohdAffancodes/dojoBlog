import { Link } from "react-router-dom";
import "./blogList.css";

const BlogList = ({ blogs, docId, title }) => {
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
         {blogs.length > 0 && <h3>{title}</h3>}
         {blogs.map((blog, index) => {
            return (
               <Link to={`/dojoBlog/blogs/${docId[index]}`}>
                  <div className="blog-preview" key={docId[index]}>
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
