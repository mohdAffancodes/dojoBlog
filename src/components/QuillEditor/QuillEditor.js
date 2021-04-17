import { useState, useEffect, useCallback } from "react";
//Quill JS
import { useQuill } from "react-quilljs";
//CSS
import "quill/dist/quill.snow.css";
import "./quill.css";
//.undo
let undo = document.createElement("i");
undo.textContent = "rotate_left";
undo.setAttribute("class", "material-icons");
//.redo
let redo = document.createElement("i");
redo.textContent = "rotate_right";
redo.setAttribute("class", "material-icons");

const QuillEditor = ({ id, placeholder, data, enable }) => {
   const [boolean, setBoolean] = useState(true);

   const modules = {
      toolbar: [
         ["bold", "italic", "underline", "strike"], // toggled buttons
         ["blockquote", "code-block", "formula"],

         ["link", "image", "video"],

         [{ header: 1 }, { header: 2 }], // custom button values
         [{ list: "ordered" }, { list: "bullet" }],
         [{ script: "sub" }, { script: "super" }], // superscript/subscript
         [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
         [{ align: [] }],

         [
            { size: ["small", false, "large", "huge"] },
            { header: [1, 2, 3, 4, 5, 6, false] },
         ],

         [{ color: [] }, { background: [] }], // dropdown with defaults from theme
         [{ font: [] }],

         ["clean"],

         ["undo", "redo"],
         [{ direction: "rtl" }],
      ],
   };

   const formats = [
      "redo",
      "undo",
      "bold",
      "header",
      "italic",
      "align",
      "color",
      "script",
      "strike",
      "size",
      "formula",
      "background",
      "code-block",
      "font",
      "underline",
      "link",
      "list",
      "blockquote",
      "image",
      "video",
      "indent",
      "direction",
   ];

   const { quill, quillRef } = useQuill({
      placeholder,
      modules,
      formats,
   });

   const handleClick = useCallback(
      (className) => {
         document.querySelector(className).addEventListener("click", () => {
            if (className === ".ql-undo") return quill.history.undo();
            if (className === ".ql-redo") return quill.history.redo();
         });
      },
      [quill]
   );

   useEffect(() => {
      if (quill) {
         quill.enable(enable);
      }
   }, [quill, enable, handleClick]);

   useEffect(() => {
      if (quill) {
         //.undo and redo buttons
         document.querySelector(".ql-undo").appendChild(undo);
         document.querySelector(".ql-redo").appendChild(redo);
         handleClick(".ql-undo");
         handleClick(".ql-redo");
      }
   }, [quill, handleClick]);

   if (data && quill && boolean === true) {
      //.console.log(data);
      quill.setContents(JSON.parse(data));
      setBoolean(false);
   } else {
      window.quill = quill;
   }

   return (
      <div id={id}>
         <div ref={quillRef} />
      </div>
   );
};

export default QuillEditor;
