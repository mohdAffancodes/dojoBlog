import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage/Home";
import Navbar from "./components/navbar/Navbar";
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
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route exact path="/create">
                     <Create />
                  </Route>
                  <Route path="/blogs/:id">
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
