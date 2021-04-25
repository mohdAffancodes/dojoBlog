import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import DataProvider from "./stores/dataContext";
//Components
import Home from "./pages/Homepage/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Create from "./pages/CreateBlog/Create";
import NotFound from "./pages/NotFound/NotFound";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

function App() {
   return (
      <Router>
         <div className="App">
            <Navbar />
            <div className="content">
               <HelmetProvider>
                  <DataProvider>
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
                  </DataProvider>
               </HelmetProvider>
            </div>
         </div>
      </Router>
   );
}

export default App;
