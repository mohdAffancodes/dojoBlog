import { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
//Quill JS
import { useQuill } from "react-quilljs";
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

         [{ size: ["small", false, "large", "huge"] }], // custom dropdown
         [{ header: [1, 2, 3, 4, 5, 6, false] }],

         [{ color: [] }, { background: [] }], // dropdown with defaults from theme
         [{ font: [] }],
         [{ align: [] }],

         ["clean"],

         ["undo", "redo"],
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
         document.querySelector(".ql-undo").appendChild(undo);
         document.querySelector(".ql-redo").appendChild(redo);
         handleClick(".ql-undo");
         handleClick(".ql-redo");
      }
   }, [quill, enable, handleClick]);

   if (data && quill && boolean === true) {
      //.console.log(data);
      quill.setContents(JSON.parse(data));
      setBoolean(false);
   } else {
      window.quill = quill;
   }

   return (
      <div id={id}>
         <Helmet>
            {/*Katex for formulas*/}
            <link
               rel="stylesheet"
               href="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css"
               integrity="sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw"
               crossorigin="anonymous"
            />
            <script
               defer
               src="https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js"
               integrity="sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH"
               crossorigin="anonymous"
            ></script>
         </Helmet>
         <div ref={quillRef} />
      </div>
   );
};

export default QuillEditor;