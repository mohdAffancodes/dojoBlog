import { useParams, useHistory } from "react-router-dom";
import QuillEditor from "../QuillEditor/QuillEditor";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import firebase from "../../firebase";
import { Helmet } from "react-helmet";
import "./blogDetails.css";

const BlogDetails = () => {
   const { id } = useParams();
   const history = useHistory();
   const [blog, setBlog] = useState(null);
   const [enable, setEnable] = useState(false);
   const [updated, setUpdated] = useState(false);
   const [isMobile, setIsMobile] = useState(false);
   const [editable, setEditable] = useState(false);
   //.Using fetch hook
   const { isLoading, error } = useFetch("blog1");
   //.useEffect hook for determining if the device is a mobile/tab
   useEffect(() => {
      if (
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
         )
      ) {
         setIsMobile(true);
      }
   }, []);
   //.Calling specified data
   const db = firebase.firestore().collection("blog1");
   db.doc(id)
      .get()
      .then((doc) => {
         setBlog(doc.data());
      });

   const deleteBlog = () => {
      db.doc(id)
         .delete()
         .then(() => {
            history.push("/dojoBlog");
         });
   };

   const editBlog = () => {
      let editIcon = document.querySelector(".editIcon");
      //.element to be edited
      let blogTitle = document.querySelector("#title");
      let toolbar = document.querySelector("#blogBody .ql-toolbar");

      if (editIcon.textContent === "edit") {
         blogTitle.contentEditable = true;
         editIcon.textContent = "check";
         setEditable(true);
         setEnable(true);
         //.make toolbar visible
         toolbar.style.visibility = "visible";
         toolbar.style.setProperty("height", "initial");
         setTimeout(() => {
            setEditable(false);
         }, 1000);
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
      <div className="blog-details">
         <Helmet>{blog && <title>Dojo-Blog | {blog.title}</title>}</Helmet>
         {editable && !updated && <h3>Blog is ready to be edited</h3>}
         {updated && <h2>Saving Changes</h2>}
         {(updated || isLoading) && (
            <div className="progress">
               <div className="indeterminate pink accent-3-only"></div>
            </div>
         )}
         {error && (
            <div style={{ fontSize: "20px", fontWeight: "700" }}>{error}</div>
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
                  {!isMobile && (
                     <i className="material-icons editIcon" onClick={editBlog}>
                        edit
                     </i>
                  )}
               </h6>
               <QuillEditor id="blogBody" data={blog.body} enable={enable} />
            </article>
         )}
         {isMobile && (
            <div className="floater">
               <i className="material-icons editIcon" onClick={editBlog}>
                  edit
               </i>
            </div>
         )}
      </div>
   );
};

export default BlogDetails;
