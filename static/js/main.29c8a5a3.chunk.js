(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{27:function(e,t,c){e.exports={notFound:"notfound_notFound__33fE5",pulse:"notfound_pulse__T2dsf"}},32:function(e,t,c){},33:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),s=c(25),i=c.n(s),a=(c(32),c(7)),l=c(4),d=(c(33),c(1)),j=function(e){var t=e.blogs,c=e.docId,n=e.title;return Object(d.jsxs)("div",{className:"blog-list",children:[0===t.length&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"No blogs"}),Object(d.jsx)("h4",{children:Object(d.jsx)(a.b,{to:"/dojoBlog/create",children:"Create One Now"})})]}),t.length>0&&Object(d.jsx)("h3",{children:n}),t.map((function(e,t){return Object(d.jsx)(a.b,{to:"/dojoBlog/blogs/".concat(c[t]),children:Object(d.jsxs)("div",{className:"blog-preview",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsxs)("p",{children:["Written by ",e.author]})]},c[t])})}))]})},r=c(12),b=c(23);c(46);b.a.initializeApp({apiKey:"AIzaSyAKfnfgEx5EW76s-9ui9ByEynjgXYNM1nQ",authDomain:"dojoblog-ec6b1.firebaseapp.com",projectId:"dojoblog-ec6b1",storageBucket:"dojoblog-ec6b1.appspot.com",messagingSenderId:"683122392119",appId:"1:683122392119:web:3c4f1db62a0ba37da853b2",measurementId:"G-M6MQ4XJKQ6"});var u=b.a,h=function(e){var t=Object(n.useState)(null),c=Object(r.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(null),a=Object(r.a)(i,2),l=a[0],d=a[1],j=Object(n.useState)(!0),b=Object(r.a)(j,2),h=b[0],O=b[1],x=Object(n.useState)(null),g=Object(r.a)(x,2),f=g[0],m=g[1];return Object(n.useEffect)((function(){u.firestore().collection("blog1").get().then((function(e){var t=[],c=[];e.forEach((function(e){t.push(e.data()),c.push(e.id)})),d(c),s(t),O(!1)})).catch((function(e){O(!1),m(e.message)}))}),[]),{data:o,docId:l,isLoading:h,error:f}},O=function(){var e=h(),t=e.data,c=e.docId,n=e.isLoading,o=e.error;return Object(d.jsxs)("div",{className:"home",children:[o&&Object(d.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:o}),n&&Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"indeterminate pink accent-3-only"})}),t&&Object(d.jsx)(j,{blogs:t,docId:c,title:"All Blogs!"})]})},x=(c(40),function(){return Object(n.useEffect)((function(){document.querySelector(".sideNavBtn").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("home").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()}))}),[]),Object(d.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/dojoBlog",id:"home",children:Object(d.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",marginLeft:"20px",fontWeight:"900"},children:"Home"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/dojoBlog/create",className:"waves-effect waves-light btn white-text sideNavBtn",children:"New Blog"})})]})}),g=(c(41),function(){return Object(n.useEffect)((function(){document.querySelector(".menu").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).open()}))}),[]),Object(d.jsxs)("section",{id:"nav",children:[Object(d.jsx)("nav",{className:"nav-fixed",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)(a.b,{to:"/",className:"brand-logo",children:"Dojo Blog"}),Object(d.jsx)(a.b,{to:"#",datatarget:"mobile-demo",className:"sidenav-trigger",children:Object(d.jsx)("i",{className:"material-icons menu",children:"menu"})}),Object(d.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/dojoBlog",className:"myTabs waves-effect",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(a.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d",borderRadius:"8px",textTransform:"none"},className:"myTabs waves-effect waves-light btn white-text",children:"New Blog"})})]})]})}),Object(d.jsx)(x,{})]})}),f=(c(42),c(43),function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),a=i[0],j=i[1],b=Object(n.useState)("Anonymous"),h=Object(r.a)(b,2),O=h[0],x=h[1],g=Object(n.useState)(!1),f=Object(r.a)(g,2),m=f[0],v=f[1],p=Object(l.f)(),N=u.firestore().collection("blog1");return Object(d.jsxs)("div",{className:"create",children:[Object(d.jsx)("h3",{className:"create",children:"Add a new blog"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0),N.add({title:c,body:a,author:O}).then((function(){console.log("New blog Added"),v(!1),p.push("/dojoBlog")}))},children:[Object(d.jsx)("label",{children:"Blog title:"}),Object(d.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("h6",{children:"Blog body:"}),Object(d.jsx)("textarea",{required:!0,value:a,onChange:function(e){j(e.target.value)}}),Object(d.jsx)("label",{children:"Blog author:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:function(e){x(e.target.value)},className:"authorInput"}),!m&&Object(d.jsx)("button",{className:"waves-effect waves-light",children:"Add Blog"}),m&&Object(d.jsx)("span",{className:"loader",children:Object(d.jsx)("span",{className:"loader-inner"})})]})]})}),m=c(27),v=c.n(m),p=function(){return Object(d.jsxs)("div",{className:v.a.notFound,children:[Object(d.jsx)("h2",{children:"Sorry"}),Object(d.jsx)("p",{children:"That page cannot be found"}),Object(d.jsx)(a.b,{to:"/dojoBlog",children:"Back to the homepage..."})]})},N=(c(44),function(){var e=Object(l.g)().id,t=Object(l.f)(),c=Object(n.useState)(null),o=Object(r.a)(c,2),s=o[0],i=o[1],a=h(),j=a.isLoading,b=a.error,O=u.firestore().collection("blog1");O.doc(e).get().then((function(e){i(e.data())}));return Object(d.jsxs)("div",{className:"blog-details",children:[j&&Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"indeterminate pink accent-3-only"})}),b&&Object(d.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:b}),s&&Object(d.jsxs)("article",{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("span",{children:s.title}),Object(d.jsx)("i",{className:"material-icons right deleteIcon",style:{cursor:"pointer",fontSize:"40px"},onClick:function(){O.doc(e).delete().then((function(){t.push("/dojoBlog")}))},children:"delete"})]}),Object(d.jsxs)("h6",{children:["Written by ",s.author]}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:s.body})})})]})]})});var y=function(){return Object(d.jsx)(a.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog",children:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog/create",children:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{path:"/dojoBlog/blogs/:id",children:Object(d.jsx)(N,{})}),Object(d.jsx)(l.a,{path:"/dojoBlog/*",children:Object(d.jsx)(p,{})})]})})]})})};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.29c8a5a3.chunk.js.map