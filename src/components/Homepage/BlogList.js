import { Link } from "react-router-dom";
import "./CSS/blogList.css";

const BlogList = ({ blogs, title }) => {
   return (
      <div className="blog-list">
         {blogs.length === 0 && (
            <div>
               <h3>No blogs</h3>
               <h4>
                  <Link to="/create">Create One Now</Link>
               </h4>
            </div>
         )}
         {blogs.length > 0 && <h3>{title}</h3>}
         {blogs.map((blog) => {
            return (
               <Link to={`/blogs/${blog.id}`}>
                  <div className="blog-preview" key={blog.id}>
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
