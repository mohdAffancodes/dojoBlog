(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{31:function(e,t,c){e.exports={notFound:"notfound_notFound__33fE5",pulse:"notfound_pulse__T2dsf"}},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),i=c(26),s=c.n(i),l=(c(36),c(7)),a=c(6),r=(c(37),c(1)),d=function(e){var t=e.blogs,c=e.docId,n=e.title;return Object(r.jsxs)("div",{className:"blog-list",children:[0===t.length&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"No blogs"}),Object(r.jsx)("h4",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",children:"Create One Now"})})]}),t.length>0&&Object(r.jsx)("h3",{children:n}),t.map((function(e,t){return Object(r.jsx)(l.b,{to:"/dojoBlog/blogs/".concat(c[t]),children:Object(r.jsxs)("div",{className:"blog-preview",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("p",{children:["Written by ",e.author]})]},c[t])})}))]})},j=c(14),b=c(5),u=c(24);c(60);u.a.initializeApp({apiKey:"AIzaSyAKfnfgEx5EW76s-9ui9ByEynjgXYNM1nQ",authDomain:"dojoblog-ec6b1.firebaseapp.com",projectId:"dojoblog-ec6b1",storageBucket:"dojoblog-ec6b1.appspot.com",messagingSenderId:"683122392119",appId:"1:683122392119:web:3c4f1db62a0ba37da853b2",measurementId:"G-M6MQ4XJKQ6"});var h=u.a,m=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),o=c[0],i=c[1],s=Object(n.useState)(null),l=Object(b.a)(s,2),a=l[0],r=l[1],d=Object(n.useState)(!0),j=Object(b.a)(d,2),u=j[0],m=j[1],O=Object(n.useState)(null),x=Object(b.a)(O,2),f=x[0],g=x[1];return Object(n.useEffect)((function(){h.firestore().collection(e).orderBy("title").get().then((function(e){var t=[],c=[];e.forEach((function(e){t.push(e.data()),c.push(e.id)})),r(c),i(t),m(!1)})).catch((function(e){m(!1),g(e.message)}))}),[e]),{data:o,docId:a,isLoading:u,error:f}},O=function(){var e=m("blog1"),t=e.data,c=e.docId,n=e.isLoading,o=e.error;return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Home"})}),o&&Object(r.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:o}),n&&Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate pink accent-3-only"})}),t&&Object(r.jsx)(d,{blogs:t,docId:c,title:"All Blogs!"})]})},x=(c(44),function(){return Object(n.useEffect)((function(){document.querySelector(".sideNavBtn").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{edge:"bottom"}).close()})),document.getElementById("home").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("contact").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()}))}),[]),Object(r.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog",id:"home",children:Object(r.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",marginLeft:"20px",fontWeight:"900"},children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/contact",id:"contact",children:Object(r.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",fontWeight:"900",marginLeft:"10px"},children:"Contact"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",className:"waves-effect waves-light btn white-text sideNavBtn",children:"New Blog"})})]})}),f=(c(45),function(){return Object(n.useEffect)((function(){document.querySelector(".menu").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).open()}))}),[]),Object(r.jsxs)("section",{id:"nav",children:[Object(r.jsx)("div",{className:"navSpace"}),Object(r.jsx)("nav",{className:"nav-fixed",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)(l.b,{to:"/dojoBlog",className:"brand-logo",children:"Dojo Blog"}),Object(r.jsx)(l.b,{to:"#",datatarget:"mobile-demo",className:"sidenav-trigger",children:Object(r.jsx)("i",{className:"material-icons menu",children:"menu"})}),Object(r.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog",className:"myTabs waves-effect navIcons",children:Object(r.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/contact",className:"myTabs waves-effect navIcons",children:Object(r.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"call"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d",borderRadius:"8px",textTransform:"none"},className:"myTabs waves-effect waves-light btn white-text",children:"New Blog"})})]})]})}),Object(r.jsx)(x,{})]})}),g=(c(46),c(47),c(48),function(){var e=Object(a.f)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),o=c[0],i=c[1],s=Object(n.useState)(""),l=Object(b.a)(s,2),d=l[0],u=l[1],m=Object(n.useState)(!1),O=Object(b.a)(m,2),x=O[0],f=O[1],g=Object(n.useState)(!1),p=Object(b.a)(g,2),v=p[0],y=p[1],S=h.firestore().collection("messages"),N=function(){var e=document.querySelector(".modal");window.M.Modal.init(e).open()};return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Contact"})}),Object(r.jsx)("section",{className:"infomodal",children:Object(r.jsxs)("div",{id:"modal3",className:"modal",children:[Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("h3",{id:"info-modal-heading",style:{color:"#f1356d"},children:"Thanks"}),Object(r.jsx)("p",{className:"info-modal-heading",children:"I hope to read your message soon"})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("a",{href:"#",className:"modal-close waves-effects btn-flat",children:Object(r.jsx)("i",{className:"material-icons closeIcon",style:{fontSize:"30px"},onClick:function(){f(!0),setTimeout((function(){e.push("/dojoBlog")}),500)},children:"close"})})})]})}),Object(r.jsxs)("section",{id:"form",children:[Object(r.jsx)("h2",{children:"Contact Me"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),y(!0),document.querySelector(".emailInput").setAttribute("readonly",""),document.querySelector(".messageInput").setAttribute("readonly",""),S.add({email:o,message:d}).then((function(){N(),y(!1),document.querySelector(".emailInput").removeAttribute("readonly",""),document.querySelector(".messageInput").removeAttribute("readonly","")}))},children:[Object(r.jsx)("input",{type:"email",name:"email",className:"emailInput",required:!0,placeholder:"Email Address",onChange:function(e){i(e.target.value)}}),Object(r.jsx)("input",{type:"text",name:"message",className:"messageInput",required:!0,placeholder:"Your Message",onChange:function(e){u(e.target.value)}}),!v&&!x&&Object(r.jsx)("button",{type:"submit",className:"right waves-effect waves-light",children:"Send"}),x&&!v&&Object(r.jsx)("button",{type:"submit",className:"right waves-effect waves-light",disabled:!0,children:"Send"}),v&&Object(r.jsx)("span",{className:"loader right",children:Object(r.jsx)("span",{className:"loader-inner"})})]})]})]})}),p=(c(49),c(50),c(30)),v=(c(56),c(57),document.createElement("i"));v.textContent="rotate_left",v.setAttribute("class","material-icons");var y=document.createElement("i");y.textContent="rotate_right",y.setAttribute("class","material-icons");var S=function(e){var t=e.id,c=e.placeholder,o=e.data,i=e.enable,s=Object(n.useState)(!0),l=Object(b.a)(s,2),a=l[0],d=l[1],u=Object(p.a)({placeholder:c,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block","formula"],["link","image","video"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["undo","redo"]]},formats:["redo","undo","bold","header","italic","align","color","script","strike","size","formula","background","code-block","font","underline","link","list","blockquote","image","video","indent"]}),h=u.quill,m=u.quillRef,O=Object(n.useCallback)((function(e){document.querySelector(e).addEventListener("click",(function(){return".ql-undo"===e?h.history.undo():".ql-redo"===e?h.history.redo():void 0}))}),[h]);return Object(n.useEffect)((function(){h&&(h.enable(i),document.querySelector(".ql-undo").appendChild(v),document.querySelector(".ql-redo").appendChild(y),O(".ql-undo"),O(".ql-redo"))}),[h,i,O]),o&&h&&!0===a?(h.setContents(JSON.parse(o)),d(!1)):window.quill=h,Object(r.jsxs)("div",{id:t,children:[Object(r.jsxs)(j.a,{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css",integrity:"sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw",crossorigin:"anonymous"}),Object(r.jsx)("script",{defer:!0,src:"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js",integrity:"sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH",crossorigin:"anonymous"})]}),Object(r.jsx)("div",{ref:m})]})},N=function(){var e=Object(a.f)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),o=c[0],i=c[1],s=Object(n.useState)(!0),l=Object(b.a)(s,2),d=l[0],u=l[1],m=Object(n.useState)(!1),O=Object(b.a)(m,2),x=O[0],f=O[1],g=Object(n.useState)("Anonymous"),p=Object(b.a)(g,2),v=p[0],y=p[1],N=h.firestore().collection("blog1");return Object(r.jsxs)("div",{className:"create",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Create"})}),Object(r.jsx)("h3",{className:"add",children:"Add a new blog"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=window.quill.getContents(),n=document.querySelector(".ql-container").textContent;if(""===n&&"\n"===c.ops[0].insert){window.quill.setContents({ops:[{attributes:{size:"large",color:"#a10000",bold:!0},insert:"Please Fill this"},{attributes:{align:"center",header:1},insert:"\n"}]})}else f(!0),u(!1),document.querySelector(".authorInput").setAttribute("readonly",""),document.querySelector(".titleInput").setAttribute("readonly",""),"Please Fill this"===n?(f(!1),e.push("/dojoBlog")):N.add({title:o,body:JSON.stringify(c),author:v}).then((function(){u(!0),document.querySelector(".authorInput").removeAttribute("readonly",""),document.querySelector(".titleInput").removeAttribute("readonly",""),f(!1),e.push("/dojoBlog")}))},children:[Object(r.jsx)("label",{children:"Blog title:"}),Object(r.jsx)("input",{type:"text",required:!0,value:o,onChange:function(e){i(e.target.value)},className:"titleInput"}),Object(r.jsx)("h6",{children:"Blog body:"}),Object(r.jsx)(S,{placeholder:"Compose an epic",enable:d}),Object(r.jsx)("label",{style:{marginTop:"10px"},children:"Blog author:"}),Object(r.jsx)("input",{type:"text",required:!0,onChange:function(e){y(e.target.value)},className:"authorInput"}),!x&&Object(r.jsx)("button",{className:"waves-effect waves-light",children:"Add Blog"}),x&&Object(r.jsx)("span",{className:"loader",children:Object(r.jsx)("span",{className:"loader-inner"})})]})]})},w=c(31),B=c.n(w),q=function(){return Object(r.jsxs)("div",{className:B.a.notFound,children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | 404"})}),Object(r.jsx)("h2",{children:"Sorry"}),Object(r.jsx)("p",{children:"That page cannot be found"}),Object(r.jsx)(l.b,{to:"/dojoBlog",children:"Back to the homepage..."})]})},k=(c(58),function(){var e=Object(a.g)().id,t=Object(a.f)(),c=Object(n.useState)(null),o=Object(b.a)(c,2),i=o[0],s=o[1],l=Object(n.useState)(!1),d=Object(b.a)(l,2),u=d[0],O=d[1],x=Object(n.useState)(!1),f=Object(b.a)(x,2),g=f[0],p=f[1],v=Object(n.useState)(!1),y=Object(b.a)(v,2),N=y[0],w=y[1],B=Object(n.useState)(!1),q=Object(b.a)(B,2),k=q[0],I=q[1],C=m("blog1"),A=C.isLoading,E=C.error;Object(n.useEffect)((function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&w(!0)}),[]);var M=h.firestore().collection("blog1");M.doc(e).get().then((function(e){s(e.data())}));var z=function(){var t=document.querySelector(".editIcon"),c=document.querySelector("#title"),n=document.querySelector("#blogBody .ql-toolbar");if("edit"===t.textContent)c.contentEditable=!0,t.textContent="check",I(!0),O(!0),n.style.visibility="visible",n.style.setProperty("height","initial"),setTimeout((function(){I(!1)}),1e3);else if("check"===t.textContent){p(!0),c.contentEditable=!0,n.style.visibility="hidden",n.style.height="0px";var o=JSON.stringify(window.quill.getContents());M.doc(e).update({body:o,title:c.textContent}).then((function(){p(!1)})),t.textContent="edit",O(!1)}};return Object(r.jsxs)("div",{className:"blog-details",children:[Object(r.jsx)(j.a,{children:i&&Object(r.jsxs)("title",{children:["Dojo-Blog | ",i.title]})}),k&&!g&&Object(r.jsx)("h3",{children:"Blog is ready to be edited"}),g&&Object(r.jsx)("h2",{children:"Saving Changes"}),(g||A)&&Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate pink accent-3-only"})}),E&&Object(r.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:E}),i&&!g&&Object(r.jsxs)("article",{children:[Object(r.jsxs)("h2",{children:[Object(r.jsx)("span",{id:"title",children:i.title}),Object(r.jsx)("i",{className:"material-icons right deleteIcon",style:{cursor:"pointer",fontSize:"40px"},onClick:function(){M.doc(e).delete().then((function(){t.push("/dojoBlog")}))},children:"delete"})]}),Object(r.jsxs)("h6",{children:[Object(r.jsxs)("span",{id:"author",children:["Written by ",i.author]}),!N&&Object(r.jsx)("i",{className:"material-icons editIcon",onClick:z,children:"edit"})]}),Object(r.jsx)(S,{id:"blogBody",data:i.body,enable:u})]}),N&&Object(r.jsx)("div",{className:"floater",children:Object(r.jsx)("i",{className:"material-icons editIcon",onClick:z,children:"edit"})})]})});var I=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog",children:Object(r.jsx)(O,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/create",children:Object(r.jsx)(N,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/contact",children:Object(r.jsx)(g,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/blogs/:id",children:Object(r.jsx)(k,{})}),Object(r.jsx)(a.a,{path:"*",children:Object(r.jsx)(q,{})})]})})]})})};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.907d3cea.chunk.js.map