//Hooks
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFirestoreQuery } from "../../api/useFirestoreQuery";
//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { Helmet } from "react-helmet-async";
//CSS
import "./blogDetails.css";
//db
import db from "../../api/firebase";

const BlogDetails = () => {
   const { id } = useParams();
   const history = useHistory();
   const [blog, setBlog] = useState(null);
   const [enable, setEnable] = useState(false);
   const [updating, setUpdating] = useState(false);
   //.Using fetch hook
   const { data, status, error } = useFirestoreQuery("blog1", id);
   //.setting the data
   useEffect(() => {
      setBlog(data);
   }, [data]);

   const deleteBlog = () => {
      db.collection("blog1")
         .doc(id)
         .delete()
         .then(() => {
            history.push("/dojoBlog");
         });
   };

   const editBlog = (e) => {
      e = e || window.event;
      let editIcon = e.target || e.srcElement;
      //.elements to be edited
      let blogTitle = document.querySelector("#title");
      let toolbar = document.querySelector("#blogBody .ql-toolbar");

      if (editIcon.textContent === "edit") {
         showToolbar();
         //.enabling the quill editor
         setEnable(true);
      } else if (editIcon.textContent === "check") {
         setUpdating(true);
         hideToolbar();
         //.Getting editor contents
         let delta = JSON.stringify(window.quill.getContents());
         //.Sending to firestore
         sendData(delta, blogTitle.textContent);
         //.Disabling the quill editor
         setEnable(false);
      }

      function sendData(body, title) {
         db.doc(id)
            .update({
               body,
               title,
            })
            .then(() => {
               setUpdating(false);
            });
      }

      function showToolbar() {
         blogTitle.contentEditable = true;
         editIcon.textContent = "check";

         //.make toolbar visible
         toolbar.style.visibility = "visible";
         toolbar.style.setProperty("height", "initial");
      }

      function hideToolbar() {
         blogTitle.contentEditable = true;
         editIcon.textContent = "edit";
         //.hide toolbar
         toolbar.style.visibility = "hidden";
         toolbar.style.height = "0px";
      }
   };

   return (
      <>
         <Helmet>{blog && <title>{blog.title}</title>}</Helmet>
         <div className="blog-details">
            {updating && <h2>Saving Changes</h2>}
            {(updating || status === "loading") && <LinearLoader />}
            {error && (
               <div style={{ fontSize: "20px", fontWeight: "700" }}>
                  {error}
               </div>
            )}
            {blog && !updating && (
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
                  </h6>
                  <QuillEditor id="blogBody" data={blog.body} enable={enable} />
               </article>
            )}
            {status === "success" && !updating && (
               <div className="floater">
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
