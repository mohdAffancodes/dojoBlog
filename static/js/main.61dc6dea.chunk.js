(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{27:function(e,t,c){e.exports={notFound:"notfound_notFound__33fE5",pulse:"notfound_pulse__T2dsf"}},32:function(e,t,c){},33:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),s=c(25),a=c.n(s),i=(c(32),c(5)),l=c(4),d=(c(33),c(1)),r=function(e){var t=e.blogs,c=e.docId,n=e.title;return Object(d.jsxs)("div",{className:"blog-list",children:[0===t.length&&Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"No blogs"}),Object(d.jsx)("h4",{children:Object(d.jsx)(i.b,{to:"/create",children:"Create One Now"})})]}),t.length>0&&Object(d.jsx)("h3",{children:n}),t.map((function(e,t){return Object(d.jsx)(i.b,{to:"/dojoBlog/blogs/".concat(c[t]),children:Object(d.jsxs)("div",{className:"blog-preview",children:[Object(d.jsx)("h2",{children:e.title}),Object(d.jsxs)("p",{children:["Written by ",e.author]})]},c[t])})}))]})},j=c(8),b=c(23);c(49);b.a.initializeApp({apiKey:"AIzaSyAKfnfgEx5EW76s-9ui9ByEynjgXYNM1nQ",authDomain:"dojoblog-ec6b1.firebaseapp.com",projectId:"dojoblog-ec6b1",storageBucket:"dojoblog-ec6b1.appspot.com",messagingSenderId:"683122392119",appId:"1:683122392119:web:3c4f1db62a0ba37da853b2",measurementId:"G-M6MQ4XJKQ6"});var u=b.a,h=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),o=c[0],s=c[1],a=Object(n.useState)(null),i=Object(j.a)(a,2),l=i[0],d=i[1],r=Object(n.useState)(!0),b=Object(j.a)(r,2),h=b[0],O=b[1],x=Object(n.useState)(null),m=Object(j.a)(x,2),f=m[0],g=m[1];return Object(n.useEffect)((function(){u.firestore().collection(e).orderBy("title").get().then((function(e){var t=[],c=[];e.forEach((function(e){t.push(e.data()),c.push(e.id)})),d(c),s(t),O(!1)})).catch((function(e){O(!1),g(e.message)}))}),[e]),{data:o,docId:l,isLoading:h,error:f}},O=function(){var e=h("blog1"),t=e.data,c=e.docId,n=e.isLoading,o=e.error;return Object(d.jsxs)("div",{className:"home",children:[o&&Object(d.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:o}),n&&Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"indeterminate pink accent-3-only"})}),t&&Object(d.jsx)(r,{blogs:t,docId:c,title:"All Blogs!"})]})},x=(c(40),function(){return Object(n.useEffect)((function(){document.querySelector(".sideNavBtn").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("home").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("contact").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()}))}),[]),Object(d.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog",id:"home",children:Object(d.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",marginLeft:"20px",fontWeight:"900"},children:"Home"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog/contact",id:"contact",children:Object(d.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",fontWeight:"900",marginLeft:"10px"},children:"Contact"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog/create",className:"waves-effect waves-light btn white-text sideNavBtn",children:"New Blog"})})]})}),m=(c(41),function(){return Object(n.useEffect)((function(){document.querySelector(".menu").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).open()}))}),[]),Object(d.jsxs)("section",{id:"nav",children:[Object(d.jsx)("div",{className:"navSpace"}),Object(d.jsx)("nav",{className:"nav-fixed",children:Object(d.jsxs)("div",{className:"nav-wrapper",children:[Object(d.jsx)(i.b,{to:"/dojoBlog",className:"brand-logo",children:"Dojo Blog"}),Object(d.jsx)(i.b,{to:"#",datatarget:"mobile-demo",className:"sidenav-trigger",children:Object(d.jsx)("i",{className:"material-icons menu",children:"menu"})}),Object(d.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog",className:"myTabs waves-effect",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog/contact",className:"myTabs waves-effect",children:Object(d.jsx)("i",{className:"material-icons",children:"call"})})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d",borderRadius:"8px",textTransform:"none"},className:"myTabs waves-effect waves-light btn white-text",children:"New Blog"})})]})]})}),Object(d.jsx)(x,{})]})}),f=(c(42),c(43),c(44),function(){var e=Object(l.f)(),t=Object(n.useState)(""),c=Object(j.a)(t,2),o=c[0],s=c[1],a=Object(n.useState)(""),i=Object(j.a)(a,2),r=i[0],b=i[1],h=Object(n.useState)(!1),O=Object(j.a)(h,2),x=O[0],m=O[1],f=Object(n.useState)(!1),g=Object(j.a)(f,2),v=g[0],p=g[1],N=u.firestore().collection("messages"),y=function(){var e=document.querySelector(".modal");window.M.Modal.init(e).open()};return Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("section",{className:"infomodal",children:Object(d.jsxs)("div",{id:"modal3",className:"modal",children:[Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("h3",{id:"info-modal-heading",style:{color:"#f1356d"},children:"Thanks"}),Object(d.jsx)("p",{className:"info-modal-heading",children:"I hope to read your message soon"})]}),Object(d.jsx)("div",{className:"modal-footer",children:Object(d.jsx)("a",{href:"#",className:"modal-close waves-effects btn-flat",children:Object(d.jsx)("i",{className:"material-icons closeIcon",style:{fontSize:"30px"},onClick:function(){m(!0),setTimeout((function(){e.push("/dojoBlog")}),500)},children:"close"})})})]})}),Object(d.jsxs)("section",{id:"form",children:[Object(d.jsx)("h2",{children:"Contact Me"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(!0),N.add({email:o,message:r}).then((function(){y(),p(!1)}))},children:[Object(d.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"Email Address",onChange:function(e){s(e.target.value)}}),Object(d.jsx)("input",{type:"text",name:"message",required:!0,placeholder:"Your Message",onChange:function(e){b(e.target.value)}}),!v&&!x&&Object(d.jsx)("button",{type:"submit",className:"right waves-effect waves-light",children:"Send"}),x&&!v&&Object(d.jsx)("button",{type:"submit",className:"right waves-effect waves-light",disabled:!0,children:"Send"}),v&&Object(d.jsx)("span",{className:"loader right",children:Object(d.jsx)("span",{className:"loader-inner"})})]})]})]})}),g=(c(45),c(46),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),i=a[0],r=a[1],b=Object(n.useState)("Anonymous"),h=Object(j.a)(b,2),O=h[0],x=h[1],m=Object(n.useState)(!1),f=Object(j.a)(m,2),g=f[0],v=f[1],p=Object(l.f)(),N=u.firestore().collection("blog1");return Object(d.jsxs)("div",{className:"create",children:[Object(d.jsx)("h3",{className:"create",children:"Add a new blog"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(!0),N.add({title:c,body:i,author:O}).then((function(){console.log("New blog Added"),v(!1),p.push("/dojoBlog")}))},children:[Object(d.jsx)("label",{children:"Blog title:"}),Object(d.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){o(e.target.value)}}),Object(d.jsx)("h6",{children:"Blog body:"}),Object(d.jsx)("textarea",{required:!0,value:i,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{children:"Blog author:"}),Object(d.jsx)("input",{type:"text",required:!0,onChange:function(e){x(e.target.value)},className:"authorInput"}),!g&&Object(d.jsx)("button",{className:"waves-effect waves-light",children:"Add Blog"}),g&&Object(d.jsx)("span",{className:"loader",children:Object(d.jsx)("span",{className:"loader-inner"})})]})]})}),v=c(27),p=c.n(v),N=function(){return Object(d.jsxs)("div",{className:p.a.notFound,children:[Object(d.jsx)("h2",{children:"Sorry"}),Object(d.jsx)("p",{children:"That page cannot be found"}),Object(d.jsx)(i.b,{to:"/dojoBlog",children:"Back to the homepage..."})]})},y=(c(47),function(){var e=Object(l.g)().id,t=Object(l.f)(),c=Object(n.useState)(null),o=Object(j.a)(c,2),s=o[0],a=o[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),b=r[0],O=r[1],x=h("blog1"),m=x.isLoading,f=x.error,g=u.firestore().collection("blog1");g.doc(e).get().then((function(e){a(e.data())}));return Object(d.jsxs)("div",{className:"blog-details",children:[(b||m)&&Object(d.jsx)("div",{className:"progress",children:Object(d.jsx)("div",{className:"indeterminate pink accent-3-only"})}),f&&Object(d.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:f}),s&&!b&&Object(d.jsxs)("article",{children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)("span",{id:"title",children:s.title}),Object(d.jsx)("i",{className:"material-icons right deleteIcon",style:{cursor:"pointer",fontSize:"40px"},onClick:function(){g.doc(e).delete().then((function(){t.push("/dojoBlog")}))},children:"delete"})]}),Object(d.jsxs)("h6",{children:[Object(d.jsxs)("span",{id:"author",children:["Written by ",s.author]}),Object(d.jsx)("i",{className:"material-icons editIcon",onClick:function(){var t=document.querySelector(".editIcon"),c=document.querySelector("#blogBody"),n=document.querySelector("#title"),o=[c,n];if("edit"===t.textContent){for(var s=0;s<o.length;s++)o[s].contentEditable=!0;t.textContent="check",alert("You can edit the blog now.")}else if("check"===t.textContent){O(!0);for(var a=0;a<o.length;a++)o[a].contentEditable=!1;g.doc(e).update({body:c.textContent,title:n.textContent}).then((function(){O(!1)})),t.textContent="edit"}},children:"edit"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("p",{id:"blogBody",children:Object(d.jsx)("b",{children:s.body})})})]})]})});var S=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog",children:Object(d.jsx)(O,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog/create",children:Object(d.jsx)(g,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog/contact",children:Object(d.jsx)(f,{})}),Object(d.jsx)(l.a,{exact:!0,path:"/dojoBlog/blogs/:id",children:Object(d.jsx)(y,{})}),Object(d.jsx)(l.a,{path:"*",children:Object(d.jsx)(N,{})})]})})]})})};a.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.61dc6dea.chunk.js.map