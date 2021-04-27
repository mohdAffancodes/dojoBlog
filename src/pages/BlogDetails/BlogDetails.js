//Hooks
import { useParams, useHistory, Link } from "react-router-dom";
import { useState, useEffect, useContext, useReducer } from "react";
//Components
import LinearLoader from "../../components/loaders/LinearLoader";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { Helmet } from "react-helmet-async";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";
//CSS
import "./blogDetails.css";
//db
import db from "../../api/firebase";
import { DataContext } from "../../stores/dataContext";
import AuthContext from "../../stores/authContext";
//checks
var filter = require("leo-profanity");

const reducer = (state, action) => {
   switch (action.type) {
      case "save":
         return {
            editable: false,
            fired: true,
            updating: true,
            deleting: false,
         };
      case "reset":
         return {
            editable: false,
            fired: true,
            updating: false,
            deleting: false,
         };
      case "updated":
         return {
            editable: false,
            fired: true,
            updating: false,
            deleting: false,
         };
      case "delete":
         return {
            editable: false,
            fired: true,
            updating: false,
            deleting: true,
         };
      case "initialLoad":
         return {
            editable: false,
            fired: true,
            updating: false,
            deleting: false,
         };
      case "edit":
         return {
            editable: true,
            fired: true,
            updating: false,
            deleting: false,
         };
      default:
         return state;
   }
};

const BlogDetails = () => {
   const { user } = useContext(AuthContext);

   const initialState = {
      editable: false,
      fired: false,
      updating: false,
      deleting: false,
   };

   const [{ editable, fired, updating, deleting }, dispatch] = useReducer(
      reducer,
      initialState
   );

   const { id } = useParams();
   const history = useHistory();
   const [blog, setBlog] = useState(null);
   //.Using Context
   const { data, status, error, change } = useContext(DataContext);
   const snapshot = change[0];
   const doc = change[1];

   useEffect(() => {
      if (deleting === false) {
         if (snapshot === "modified" && doc === data[id].id) {
            //re-render only if blog is modified
            setBlog(data[id]);
         } else if (
            snapshot === "removed" &&
            doc === data[id].id &&
            deleting === false
         ) {
            openModal();
         } else if (!fired) {
            setBlog(data[id]);
            // console.log("initial");
         }
      }
   }, [data, id, fired, snapshot, doc, deleting]);

   useEffect(() => {
      dispatch({ type: "initialLoad" });
   }, []);

   const deleteBlog = () => {
      dispatch({ type: "delete" });
      //deleting the blog in the database
      db.collection(user.email)
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
      let editorText = document.querySelector("#blogBody .ql-container")
         .textContent;

      if (editIcon.textContent === "edit") {
         showToolbar();
         dispatch({ type: "edit" });
         return;
      }
      if (editIcon.textContent === "check") {
         hideToolbar();
         if (
            !filter.check(editorText) &&
            !filter.check(blogTitle.textContent)
         ) {
            sendData();
            dispatch({ type: "save" });
         } else {
            alert("This Is Prohibited");
            history.push("/dojoBlog");
         }
         return;
      }

      function sendData() {
         //.Getting editor contents
         let body = JSON.stringify(window.quill.getContents());

         db.collection(user.email)
            .doc(data[id].id)
            .update({
               body,
               title: blogTitle.textContent,
            })
            .then(() => {
               dispatch({ type: "updated" });
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

   const openModal = () => {
      var elem = document.querySelector(".modal");
      var instance = M.Modal.init(elem);
      instance.open();
      document.querySelector(".editIcon").style.pointerEvents = "none";
      document.querySelector(".deleteIcon").style.pointerEvents = "none";
   };

   return (
      <>
         <Helmet>{blog && <title>{blog.title} | Dojo-Blog</title>}</Helmet>
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
                  <h6 style={{ marginBottom: "0.766667rem !important" }}>
                     <span id="author">Written by {blog.author}</span>
                  </h6>
                  <QuillEditor
                     id="blogBody"
                     data={blog.body}
                     enable={editable}
                  />
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
            <section className="infomodal">
               <div id="modal3" className="modal">
                  <div className="modal-content">
                     <h3 id="info-modal-heading" style={{ color: "#f1356d" }}>
                        Message
                     </h3>
                     <p className="info-modal-heading">
                        This Blog has been deleted.You will now be redirected to
                        HOME.
                     </p>
                  </div>
                  <div className="modal-footer">
                     <Link
                        to="/dojoBlog"
                        className="modal-close waves-effects btn-flat"
                     >
                        <i
                           className="material-icons closeIcon"
                           style={{ fontSize: "30px" }}
                        >
                           close
                        </i>
                     </Link>
                  </div>
               </div>
            </section>
         </div>
      </>
   );
};

export default BlogDetails;
