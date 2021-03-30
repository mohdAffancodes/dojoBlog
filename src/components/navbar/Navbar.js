import MobileNav from "./MobileNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CSS/navbar.css";

const Navbar = () => {
   useEffect(() => {
      document.querySelector(".menu").addEventListener("click", () => {
         var elem = document.querySelector(".sidenav");
         var instance = window.M.Sidenav.init(elem, {});
         instance.open();
      });
   }, []);

   return (
      <section id="nav">
         <div className="navSpace"></div>
         <nav className="nav-fixed">
            <div className="nav-wrapper">
               <Link to="/dojoBlog" className="brand-logo">
                  Dojo Blog
               </Link>
               <Link
                  to="#"
                  datatarget="mobile-demo"
                  className="sidenav-trigger"
               >
                  <i className="material-icons menu">menu</i>
               </Link>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <Link to="/dojoBlog" className="myTabs navIcons">
                        <i
                           className="material-icons"
                           style={{
                              fontSize: "30px",
                           }}
                        >
                           home
                        </i>
                     </Link>
                  </li>
                  <li>
                     <Link to="/dojoBlog/contact" className="myTabs navIcons">
                        <i
                           className="material-icons"
                           style={{
                              fontSize: "30px",
                           }}
                        >
                           call
                        </i>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/dojoBlog/create"
                        style={{
                           backgroundColor: "#f1356d",
                           borderRadius: "8px",
                           textTransform: "none",
                        }}
                        className="myTabs waves-effect waves-light btn white-text"
                     >
                        New Blog
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
         <MobileNav />
      </section>
   );
};

export default Navbar;
