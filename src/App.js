import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Create from "./components/CreateBlog/Create";
import NotFound from "./components/NotFound/NotFound";
import BlogDetails from "./components/BlogDetails/BlogDetails";

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <div className="content">
               <Switch>
                  <Route exact path="/dojoBlog">
                     <Home />
                  </Route>
                  <Route exact path="/dojoBlog/create">
                     <Create />
                  </Route>
                  <Route exact path="/dojoBlog/contact">
                     <Contact />
                  </Route>
                  <Route exact path="/dojoBlog/blogs/:id">
                     <BlogDetails />
                  </Route>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </div>
         </div>
      </Router>
   );
}

export default App;
