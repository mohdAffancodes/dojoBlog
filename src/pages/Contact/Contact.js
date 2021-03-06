//Hooks
import { useHistory } from "react-router-dom";
import { useState } from "react";
//Components
import { Helmet } from "react-helmet-async";
import SquareLoader from "../../components/loaders/squareLoader/SquareLoader";
//CSS
import "./CSS/contact.css";
import "./CSS/modal.css";
//db
import db from "../../api/firebase";
//Materialize
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";

const Contact = () => {
   const history = useHistory();
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [isSending, setIsSending] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();
      setIsSending(true);

      db.collection("messages")
         .add({
            email: email,
            message: message,
         })
         .then(() => {
            openModal();
            setIsSending(false);
         });
   };

   const openModal = () => {
      var elem = document.querySelector(".modal");
      var instance = M.Modal.init(elem);
      instance.open();
   };

   return (
      <>
         <Helmet>
            <title>Dojo-Blog | Contact</title>
         </Helmet>
         <div className="contact">
            <section className="infomodal">
               <div id="modal3" className="modal">
                  <div className="modal-content">
                     <h3 id="info-modal-heading" style={{ color: "#f1356d" }}>
                        Thanks
                     </h3>
                     <p className="info-modal-heading">
                        I hope to read your message soon
                     </p>
                  </div>
                  <div className="modal-footer">
                     <a href="#" className="modal-close waves-effects btn-flat">
                        <i
                           className="material-icons closeIcon"
                           style={{ fontSize: "30px" }}
                           onClick={() => {
                              setTimeout(history.push("/dojoBlog"), 500);
                           }}
                        >
                           close
                        </i>
                     </a>
                  </div>
               </div>
            </section>

            <section id="form">
               <h2>Contact Me</h2>
               <form onSubmit={handleSubmit}>
                  <input
                     type="email"
                     name="email"
                     className="emailInput"
                     required
                     placeholder="Email Address"
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                     disabled={isSending}
                  />
                  <input
                     type="text"
                     name="message"
                     className="messageInput"
                     required
                     placeholder="Your Message"
                     onChange={(e) => {
                        setMessage(e.target.value);
                     }}
                     disabled={isSending}
                  />
                  {!isSending ? (
                     <button
                        type="submit"
                        className="right waves-effect waves-light"
                        disabled={isSending}
                     >
                        Send
                     </button>
                  ) : (
                     <SquareLoader alignment="right" />
                  )}
               </form>
            </section>
         </div>
      </>
   );
};

export default Contact;
