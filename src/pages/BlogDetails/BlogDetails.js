//Hooks
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { Helmet } from "react-helmet-async";
//CSS
import "./blogDetails.css";
//db
import db from "../../api/firebase";
import { DataContext } from "../../stores/dataContext";

const BlogDetails = () => {
   const { id } = useParams();
   const history = useHistory();
   const [blog, setBlog] = useState(null);
   const [enable, setEnable] = useState(false);
   const [fired, setFired] = useState(false);
   const [updating, setUpdating] = useState(false);
   //.Using Context
   const { state, snapshot } = useContext(DataContext);
   //.console.log(snapshot);
   const { data, status, error } = state;

   //.setting the data
   useEffect(() => {
      if (!fired) {
         setBlog(data[id]);
      } else if (fired && snapshot !== "removed") {
         setBlog(data[id]);
      }
      //console.log(fired);
   }, [data, id, fired, snapshot]);

   useEffect(() => {
      setFired(true);
   }, []);

   const deleteBlog = () => {
      db.collection("blog1")
         .doc(data[id].id)
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
         setEnable(true); //enabling the quill editor
         return;
      }
      if (editIcon.textContent === "check") {
         hideToolbar();
         setUpdating(true);
         sendData();
         setEnable(false); //Disabling the quill editor
         return;
      }

      function sendData() {
         //.Getting editor contents
         let body = JSON.stringify(window.quill.getContents());

         db.collection("blog1")
            .doc(data[id].id)
            .update({
               body,
               title: blogTitle.textContent,
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
