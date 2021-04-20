//Hooks
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../../api/useFetch";
//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { Helmet } from "react-helmet";
//CSS
import "./blogDetails.css";

const BlogDetails = () => {
   const { id } = useParams();
   const history = useHistory();
   const [blog, setBlog] = useState(null);
   const [enable, setEnable] = useState(false);
   const [updated, setUpdated] = useState(false);
   //.Using fetch hook
   const { db, data, isLoading, error } = useFetch("blog1", id);
   //.setting the data
   useEffect(() => {
      setBlog(data);
   }, [data]);

   const deleteBlog = () => {
      db.doc(id)
         .delete()
         .then(() => {
            history.push("/dojoBlog");
         });
   };

   const editBlog = (e) => {
      e = e || window.event;
      let editIcon = e.target || e.srcElement;
      //.element to be edited
      let blogTitle = document.querySelector("#title");
      let toolbar = document.querySelector("#blogBody .ql-toolbar");

      if (editIcon.textContent === "edit") {
         blogTitle.contentEditable = true;
         editIcon.textContent = "check";
         setEnable(true);
         //.make toolbar visible
         toolbar.style.visibility = "visible";
         toolbar.style.setProperty("height", "initial");
      } else if (editIcon.textContent === "check") {
         setUpdated(true);
         blogTitle.contentEditable = true;
         //.hide toolbar
         toolbar.style.visibility = "hidden";
         toolbar.style.height = "0px";
         //.Getting editor contents
         let delta = JSON.stringify(window.quill.getContents());
         //.Sending to firestore
         db.doc(id)
            .update({
               body: delta,
               title: blogTitle.textContent,
            })
            .then(() => {
               setUpdated(false);
            });
         editIcon.textContent = "edit";
         setEnable(false);
      }
   };

   return (
      <>
         <Helmet>{blog && <title>{blog.title}</title>}</Helmet>
         <div className="blog-details">
            {updated && <h2>Saving Changes</h2>}
            {(updated || isLoading) && <LinearLoader />}
            {error && (
               <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {error}
               </div>
            )}
            {blog && !updated && (
               <article>
                  <h2>
                     <span id="title">{blog.title}</span>
                     <i
                        className="material-icons right deleteIcon"
                        style={{
                           cursor: "pointer",
                           fontSize: "40px",
                        }}
                        onClick={deleteBlog}
                     >
                        delete
                     </i>
                  </h2>
                  <h6>
                     <span id="author">Written by {blog.author}</span>
                     <i
                        className="material-icons editIcon hide-on-med-and-down"
                        onClick={editBlog}
                     >
                        edit
                     </i>
                  </h6>
                  <QuillEditor id="blogBody" data={blog.body} enable={enable} />
               </article>
            )}
            {!isLoading && !updated && (
               <div className="floater hide-on-large-only">
                  <i
                     className="material-icons editIcon"
                     onClick={editBlog}
                     style={{ fontSize: "30px" }}
                  >
                     edit
                  </i>
               </div>
            )}
         </div>
      </>
   );
};

export default BlogDetails;
