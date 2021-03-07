import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CSS/create.css";
import "./CSS/loader.css";

const Create = () => {
   const [title, setTitle] = useState("");
   const [body, setBody] = useState("");
   const [author, setAuthor] = useState("Anonymous");
   const [isSending, setIsSending] = useState(false);
   const history = useHistory();

   const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };

      setIsSending(true);

      fetch("http://localhost:8000/blogs", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(blog),
      }).then(() => {
         console.log("New blog:" + blog);
         setIsSending(false);
         history.push("/");
      });
   };

   return (
      <div className="create">
         <h3 className="create">Add a new blog</h3>
         <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input
               type="text"
               required
               value={title}
               onChange={(e) => {
                  setTitle(e.target.value);
               }}
            />
            <h6>Blog body:</h6>
            <textarea
               required
               value={body}
               onChange={(e) => {
                  setBody(e.target.value);
               }}
            ></textarea>
            <label>Blog author:</label>
            <select
               value={author}
               onChange={(e) => {
                  setAuthor(e.target.value);
               }}
            >
               <option value="mario">mario</option>
               <option value="yoshi">yoshi</option>
               <option value="luigi">luigi</option>
            </select>
            {!isSending && (
               <button className="waves-effect waves-light">Add Blog</button>
            )}
            {isSending && (
               <span className="loader">
                  <span className="loader-inner"></span>
               </span>
            )}
         </form>
      </div>
   );
};

export default Create;
