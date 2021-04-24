//Hooks
import { useHistory } from "react-router-dom";
import { useState } from "react";
//Components
import SquareLoader from "../../components/loaders/squareLoader/SquareLoader";
import QuillEditor from "../../components/QuillEditor/QuillEditor";
import { Helmet } from "react-helmet-async";
//CSS
import "./create.css";
//db
import db from "../../api/firebase";

const Create = () => {
   const history = useHistory();

   const [title, setTitle] = useState("");
   const [enable, setEnable] = useState(true);
   const [isSending, setIsSending] = useState(false);
   const [author, setAuthor] = useState("Anonymous");

   const handleSubmit = (e) => {
      e.preventDefault();
      let delta = window.quill.getContents();
      let options = delta.ops;
      let media = false;
      //.console.log(options);
      function compareKeys(a, b) {
         var aKeys = Object.keys(a).sort();
         var bKeys = Object.keys(b).sort();
         return JSON.stringify(aKeys) === JSON.stringify(bKeys);
      }
      //.checking for img or vid
      for (let i = 0; i < options.length; i++) {
         if (
            compareKeys(options[i].insert, { video: "" }) ||
            compareKeys(options[i].insert, { image: "" })
         ) {
            media = true;
            //.console.log(media);
         }
      }

      let editor = document.querySelector(".ql-container").textContent;
      if (
         media === false &&
         ((editor === "" && options[0].insert === "\n") || editor === "")
      ) {
         let pleaseFillThis = {
            ops: [
               {
                  attributes: { size: "large", color: "#a10000", bold: true },
                  insert: "Please Fill this",
               },
               { attributes: { align: "center", header: 1 }, insert: "\n" },
            ],
         };
         window.quill.setContents(pleaseFillThis);
      } else {
         //.console.log("not editable");
         setIsSending(true);
         setEnable(false);

         if (editor === "Please Fill this") {
            setIsSending(false);
            history.push("/dojoBlog");
         } else {
            db.collection("blog1")
               .add({
                  createdAt: Date.now(),
                  title: title,
                  body: JSON.stringify(delta),
                  author: author,
               })
               .then(() => {
                  setEnable(true);
                  //console.log("New blog Added");
                  setIsSending(false);
                  history.push("/dojoBlog");
               });
         }
      }
   };

   return (
      <>
         <Helmet>
            <title>Dojo-Blog | Create</title>
         </Helmet>
         <div className="create">
            <h3 className="add">Add a new blog</h3>
            <form onSubmit={handleSubmit}>
               <label>Blog title:</label>
               <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => {
                     setTitle(e.target.value);
                  }}
                  className="titleInput"
                  disabled={isSending}
               />
               <h6>Blog body:</h6>
               <QuillEditor
                  id="ql-parent"
                  placeholder={"Compose an epic"}
                  enable={enable}
               />
               <label style={{ marginTop: "10px" }}>Blog author:</label>
               <input
                  type="text"
                  required
                  onChange={(e) => {
                     setAuthor(e.target.value);
                  }}
                  className="authorInput"
                  disabled={isSending}
               />
               {isSending ? (
                  <SquareLoader />
               ) : (
                  <button className="waves-effect waves-light">Add Blog</button>
               )}
            </form>
         </div>
      </>
   );
};

export default Create;
