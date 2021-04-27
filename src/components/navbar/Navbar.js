import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import AuthContext from "../../stores/authContext";
import M from "../../../node_modules/materialize-css/dist/js/materialize.min.js";

const Navbar = () => {
   const { user, logout } = useContext(AuthContext);

   const dropDown = () => {
      let elem = document.querySelector(".dropdown-trigger");
      let instance = M.Dropdown.init(elem, {});
      instance.open();
   };

   return (
      <section id="nav">
         <div className="navSpace"></div>
         <nav className="nav-fixed">
            <div className="nav-wrapper">
               {user !== null && (
                  <>
                     <div
                        className="user left dropdown-trigger"
                        data-target="dropdown1"
                        onClick={dropDown}
                     >
                        {user.user_metadata.full_name[0]}
                     </div>
                     <ul id="dropdown1" className="dropdown-content">
                        <li>
                           <a href="#Logout" onClick={logout}>
                              Logout
                           </a>
                        </li>
                     </ul>
                  </>
               )}
               <Link to="/dojoBlog/" className="brandLogo">
                  Dojo Blog
               </Link>
               <ul id="nav-mobile" className="right">
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
                        <span className="hide-on-small-only">Home</span>
                     </Link>
                  </li>
                  <li>
                     <Link
                        to="/dojoBlog/contact"
                        className="myTabs navIcons call"
                     >
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
               </ul>
            </div>
         </nav>
      </section>
   );
};

export default Navbar;
