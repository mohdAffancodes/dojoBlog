import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./CSS/sideNav.css";

const MobileNav = () => {
   useEffect(() => {
      document.querySelector(".sideNavBtn").addEventListener("click", () => {
         var elem = document.querySelector(".sidenav");
         var instance = window.M.Sidenav.init(elem, {
            edge: "bottom",
         });
         instance.close();
      });

      document.getElementById("home").addEventListener("click", () => {
         var elem = document.querySelector(".sidenav");
         var instance = window.M.Sidenav.init(elem, {});
         instance.close();
      });

      document.getElementById("contact").addEventListener("click", () => {
         var elem = document.querySelector(".sidenav");
         var instance = window.M.Sidenav.init(elem, {});
         instance.close();
      });
   }, []);

   return (
      <ul className="sidenav" id="mobile-demo">
         <li>
            <Link to="/dojoBlog" id="home">
               <span
                  style={{
                     fontSize: "20px",
                     color: "#f1356d",
                     marginLeft: "20px",
                     fontWeight: "900",
                  }}
               >
                  Home
               </span>
            </Link>
         </li>
         <li>
            <Link to="/dojoBlog/contact" id="contact">
               <span
                  style={{
                     fontSize: "20px",
                     color: "#f1356d",
                     fontWeight: "900",
                     marginLeft: "10px",
                  }}
               >
                  Contact
               </span>
            </Link>
         </li>
         <li>
            <Link
               to="/dojoBlog/create"
               className="waves-effect waves-light btn white-text sideNavBtn"
            >
               New Blog
            </Link>
         </li>
      </ul>
   );
};

export default MobileNav;
