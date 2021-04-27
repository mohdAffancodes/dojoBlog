import { createContext, useState, useEffect } from "react";
import netlifyIdentity from "netlify-identity-widget";

const AuthContext = createContext({
   user: null,
   login: () => {},
   logout: () => {},
   authReady: false,
});

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [authReady, setAuthReady] = useState(false);

   useEffect(() => {
      netlifyIdentity.on("login", (user) => {
         setUser(user);
         netlifyIdentity.close();
         console.log("login event");
      });

      netlifyIdentity.on("logout", () => {
         setUser(null);
         console.log("logout event");
      });

      netlifyIdentity.on("init", (user) => {
         setUser(user);
         //.console.log(user);
         if (user === null) login();
         setAuthReady(true);
         console.log("init event");
      });

      netlifyIdentity.on("close", () => {
         document.querySelector(".nav-fixed").style.zIndex = 999;
      });

      // init netlify identity connection
      netlifyIdentity.init();

      return () => {
         netlifyIdentity.off("login");
         netlifyIdentity.off("logout");
         netlifyIdentity.off("close");
      };
   }, []);

   const login = () => {
      document.querySelector(".nav-fixed").style.zIndex = 50;
      netlifyIdentity.open();
   };

   const logout = () => {
      netlifyIdentity.logout();
   };

   const context = { user, login, logout, authReady };

   return (
      <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
   );
};

export default AuthContext;
