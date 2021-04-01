import { Link } from "react-router-dom";
import "./CSS/navbar.css";

const Navbar = () => {
   return (
      <section id="nav">
         <div className="navSpace"></div>
         <nav className="nav-fixed">
            <div className="nav-wrapper">
               <Link to="/dojoBlog" className="brandLogo">
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
