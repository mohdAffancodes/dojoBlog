(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{31:function(e,t,c){e.exports={notFound:"notfound_notFound__33fE5",pulse:"notfound_pulse__T2dsf"}},36:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(2),o=c.n(n),s=c(26),i=c.n(s),l=(c(36),c(6)),a=c(5),r=(c(37),c(1)),d=function(e){var t=e.blogs,c=e.docId;return Object(r.jsxs)("div",{className:"blog-list",children:[0===t.length&&Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"No blogs"}),Object(r.jsx)("h4",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",children:"Create One Now"})})]}),t.length>0&&Object(r.jsx)("h3",{children:"All blogs"}),t.map((function(e,t){return Object(r.jsx)(l.b,{to:"/dojoBlog/blogs/".concat(c[t]),children:Object(r.jsxs)("div",{className:"blog-preview",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("p",{children:["Written by ",e.author]})]},t)})}))]})},j=c(14),b=c(7),u=c(24);c(60);u.a.initializeApp({apiKey:"AIzaSyAKfnfgEx5EW76s-9ui9ByEynjgXYNM1nQ",authDomain:"dojoblog-ec6b1.firebaseapp.com",projectId:"dojoblog-ec6b1",storageBucket:"dojoblog-ec6b1.appspot.com",messagingSenderId:"683122392119",appId:"1:683122392119:web:3c4f1db62a0ba37da853b2",measurementId:"G-M6MQ4XJKQ6"});var h=u.a,m=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(null),l=Object(b.a)(i,2),a=l[0],r=l[1],d=Object(n.useState)(!0),j=Object(b.a)(d,2),u=j[0],m=j[1],O=Object(n.useState)(null),x=Object(b.a)(O,2),f=x[0],g=x[1];return Object(n.useEffect)((function(){h.firestore().collection(e).orderBy("title").get().then((function(e){var t=[],c=[];e.forEach((function(e){t.push(e.data()),c.push(e.id)})),r(c),s(t),m(!1)})).catch((function(e){m(!1),g(e.message)}))}),[e]),{data:o,docId:a,isLoading:u,error:f}},O=function(){var e=m("blog1"),t=e.data,c=e.docId,n=e.isLoading,o=e.error;return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Home"})}),o&&Object(r.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:o}),n&&Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate pink accent-3-only"})}),t&&Object(r.jsx)(d,{blogs:t,docId:c})]})},x=(c(44),function(){return Object(n.useEffect)((function(){document.querySelector(".sideNavBtn").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("home").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()})),document.getElementById("contact").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).close()}))}),[]),Object(r.jsxs)("ul",{className:"sidenav",id:"mobile-demo",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog",id:"home",children:Object(r.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",marginLeft:"20px",fontWeight:"900"},children:"Home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/contact",id:"contact",children:Object(r.jsx)("span",{style:{fontSize:"20px",color:"#f1356d",fontWeight:"900",marginLeft:"10px"},children:"Contact"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",className:"waves-effect waves-light btn white-text sideNavBtn",children:"New Blog"})})]})}),f=(c(45),function(){return Object(n.useEffect)((function(){document.querySelector(".menu").addEventListener("click",(function(){var e=document.querySelector(".sidenav");window.M.Sidenav.init(e,{}).open()}))}),[]),Object(r.jsxs)("section",{id:"nav",children:[Object(r.jsx)("div",{className:"navSpace"}),Object(r.jsx)("nav",{className:"nav-fixed",children:Object(r.jsxs)("div",{className:"nav-wrapper",children:[Object(r.jsx)(l.b,{to:"/dojoBlog",className:"brand-logo",children:"Dojo Blog"}),Object(r.jsx)(l.b,{to:"#",datatarget:"mobile-demo",className:"sidenav-trigger",children:Object(r.jsx)("i",{className:"material-icons menu",children:"menu"})}),Object(r.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog",className:"myTabs navIcons",children:Object(r.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"home"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/contact",className:"myTabs navIcons",children:Object(r.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"call"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d",borderRadius:"8px",textTransform:"none"},className:"myTabs waves-effect waves-light btn white-text",children:"New Blog"})})]})]})}),Object(r.jsx)(x,{})]})}),g=(c(46),c(47),c(48),function(){var e=Object(a.f)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(""),l=Object(b.a)(i,2),d=l[0],u=l[1],m=Object(n.useState)(!1),O=Object(b.a)(m,2),x=O[0],f=O[1],g=h.firestore().collection("messages"),p=function(){var e=document.querySelector(".modal");window.M.Modal.init(e).open()};return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Contact"})}),Object(r.jsx)("section",{className:"infomodal",children:Object(r.jsxs)("div",{id:"modal3",className:"modal",children:[Object(r.jsxs)("div",{className:"modal-content",children:[Object(r.jsx)("h3",{id:"info-modal-heading",style:{color:"#f1356d"},children:"Thanks"}),Object(r.jsx)("p",{className:"info-modal-heading",children:"I hope to read your message soon"})]}),Object(r.jsx)("div",{className:"modal-footer",children:Object(r.jsx)("a",{href:"#",className:"modal-close waves-effects btn-flat",children:Object(r.jsx)("i",{className:"material-icons closeIcon",style:{fontSize:"30px"},onClick:function(){setTimeout((function(){e.push("/dojoBlog")}),500)},children:"close"})})})]})}),Object(r.jsxs)("section",{id:"form",children:[Object(r.jsx)("h2",{children:"Contact Me"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!0),document.querySelector(".emailInput").setAttribute("readonly",""),document.querySelector(".messageInput").setAttribute("readonly",""),g.add({email:o,message:d}).then((function(){p(),f(!1),document.querySelector(".emailInput").removeAttribute("readonly",""),document.querySelector(".messageInput").removeAttribute("readonly","")}))},children:[Object(r.jsx)("input",{type:"email",name:"email",className:"emailInput",required:!0,placeholder:"Email Address",onChange:function(e){s(e.target.value)},disabled:x}),Object(r.jsx)("input",{type:"text",name:"message",className:"messageInput",required:!0,placeholder:"Your Message",onChange:function(e){u(e.target.value)},disabled:x}),x?Object(r.jsx)("span",{className:"loader right",children:Object(r.jsx)("span",{className:"loader-inner"})}):Object(r.jsx)("button",{type:"submit",className:"right waves-effect waves-light",disabled:x,children:"Send"})]})]})]})}),p=(c(49),c(50),c(30)),v=(c(56),c(57),document.createElement("i"));v.textContent="rotate_left",v.setAttribute("class","material-icons");var y=document.createElement("i");y.textContent="rotate_right",y.setAttribute("class","material-icons");var N=function(e){var t=e.id,c=e.placeholder,o=e.data,s=e.enable,i=Object(n.useState)(!0),l=Object(b.a)(i,2),a=l[0],d=l[1],u=Object(p.a)({placeholder:c,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block","formula"],["link","image","video"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{align:[]}],[{size:["small",!1,"large","huge"]},{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],["clean"],["undo","redo"]]},formats:["redo","undo","bold","header","italic","align","color","script","strike","size","formula","background","code-block","font","underline","link","list","blockquote","image","video","indent"]}),h=u.quill,m=u.quillRef,O=Object(n.useCallback)((function(e){document.querySelector(e).addEventListener("click",(function(){return".ql-undo"===e?h.history.undo():".ql-redo"===e?h.history.redo():void 0}))}),[h]);return Object(n.useEffect)((function(){h&&(h.enable(s),function(e){var t,c=document.querySelector(".ql-container"),n=document.querySelector(".ql-toolbar");setInterval((function(){(t=e.hasFocus())&&(c.classList.remove("Blur"),n.classList.remove("Blur"),c.classList.add("Focus"),n.classList.add("Focus")),t||(c.classList.remove("Focus"),n.classList.remove("Focus"),c.classList.add("Blur"),n.classList.add("Blur"))}),1e3)}(h),document.querySelector(".ql-undo").appendChild(v),document.querySelector(".ql-redo").appendChild(y),O(".ql-undo"),O(".ql-redo"))}),[h,s,O]),o&&h&&!0===a?(h.setContents(JSON.parse(o)),d(!1)):window.quill=h,Object(r.jsxs)("div",{id:t,children:[Object(r.jsxs)(j.a,{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css",integrity:"sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw",crossorigin:"anonymous"}),Object(r.jsx)("script",{defer:!0,src:"https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.js",integrity:"sha384-FaFLTlohFghEIZkw6VGwmf9ISTubWAVYW8tG8+w2LAIftJEULZABrF9PPFv+tVkH",crossorigin:"anonymous"})]}),Object(r.jsx)("div",{ref:m})]})},S=function(){var e=Object(a.f)(),t=Object(n.useState)(""),c=Object(b.a)(t,2),o=c[0],s=c[1],i=Object(n.useState)(!0),l=Object(b.a)(i,2),d=l[0],u=l[1],m=Object(n.useState)(!1),O=Object(b.a)(m,2),x=O[0],f=O[1],g=Object(n.useState)("Anonymous"),p=Object(b.a)(g,2),v=p[0],y=p[1],S=h.firestore().collection("blog1");return Object(r.jsxs)("div",{className:"create",children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | Create"})}),Object(r.jsx)("h3",{className:"add",children:"Add a new blog"}),Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=window.quill.getContents(),n=c.ops,s=document.querySelector(".ql-container").textContent;if(""===s&&"\n"===n[0].insert&&(n[1].insert,1)){window.quill.setContents({ops:[{attributes:{size:"large",color:"#a10000",bold:!0},insert:"Please Fill this"},{attributes:{align:"center",header:1},insert:"\n"}]})}else f(!0),u(!1),"Please Fill this"===s?(f(!1),e.push("/dojoBlog")):S.add({title:o,body:JSON.stringify(c),author:v}).then((function(){u(!0),f(!1),e.push("/dojoBlog")}))},children:[Object(r.jsx)("label",{children:"Blog title:"}),Object(r.jsx)("input",{type:"text",required:!0,value:o,onChange:function(e){s(e.target.value)},className:"titleInput",disabled:x}),Object(r.jsx)("h6",{children:"Blog body:"}),Object(r.jsx)(N,{placeholder:"Compose an epic",enable:d}),Object(r.jsx)("label",{style:{marginTop:"10px"},children:"Blog author:"}),Object(r.jsx)("input",{type:"text",required:!0,onChange:function(e){y(e.target.value)},className:"authorInput",disabled:x}),x?Object(r.jsx)("span",{className:"loader",children:Object(r.jsx)("span",{className:"loader-inner"})}):Object(r.jsx)("button",{className:"waves-effect waves-light",children:"Add Blog"})]})]})},w=c(31),B=c.n(w),q=function(){return Object(r.jsxs)("div",{className:B.a.notFound,children:[Object(r.jsx)(j.a,{children:Object(r.jsx)("title",{children:"Dojo-Blog | 404"})}),Object(r.jsx)("h2",{children:"Sorry"}),Object(r.jsx)("p",{children:"That page cannot be found"}),Object(r.jsx)(l.b,{to:"/dojoBlog",children:"Back to the homepage..."})]})},k=(c(58),function(){var e=Object(a.g)().id,t=Object(a.f)(),c=Object(n.useState)(null),o=Object(b.a)(c,2),s=o[0],i=o[1],l=Object(n.useState)(!1),d=Object(b.a)(l,2),u=d[0],O=d[1],x=Object(n.useState)(!1),f=Object(b.a)(x,2),g=f[0],p=f[1],v=m("blog1"),y=v.isLoading,S=v.error,w=h.firestore().collection("blog1");w.doc(e).get().then((function(e){i(e.data())}));var B=function(t){var c=(t=t||window.event).target||t.srcElement,n=document.querySelector("#title"),o=document.querySelector("#blogBody .ql-toolbar");if("edit"===c.textContent)n.contentEditable=!0,c.textContent="check",O(!0),o.style.visibility="visible",o.style.setProperty("height","initial");else if("check"===c.textContent){p(!0),n.contentEditable=!0,o.style.visibility="hidden",o.style.height="0px";var s=JSON.stringify(window.quill.getContents());w.doc(e).update({body:s,title:n.textContent}).then((function(){p(!1)})),c.textContent="edit",O(!1)}};return Object(r.jsxs)("div",{className:"blog-details",children:[Object(r.jsx)(j.a,{children:s&&Object(r.jsxs)("title",{children:["Dojo-Blog | ",s.title]})}),g&&Object(r.jsx)("h2",{children:"Saving Changes"}),(g||y)&&Object(r.jsx)("div",{className:"progress",children:Object(r.jsx)("div",{className:"indeterminate pink accent-3-only"})}),S&&Object(r.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:S}),s&&!g&&Object(r.jsxs)("article",{children:[Object(r.jsxs)("h2",{children:[Object(r.jsx)("span",{id:"title",children:s.title}),Object(r.jsx)("i",{className:"material-icons right deleteIcon",style:{cursor:"pointer",fontSize:"40px"},onClick:function(){w.doc(e).delete().then((function(){t.push("/dojoBlog")}))},children:"delete"})]}),Object(r.jsxs)("h6",{children:[Object(r.jsxs)("span",{id:"author",children:["Written by ",s.author]}),Object(r.jsx)("i",{className:"material-icons editIcon hide-on-med-and-down",onClick:B,children:"edit"})]}),Object(r.jsx)(N,{id:"blogBody",data:s.body,enable:u})]}),Object(r.jsx)("div",{className:"floater hide-on-large-only",children:Object(r.jsx)("i",{className:"material-icons editIcon",onClick:B,style:{fontSize:"30px"},children:"edit"})})]})});var C=function(){return Object(r.jsx)(l.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)(a.c,{children:[Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog",children:Object(r.jsx)(O,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/create",children:Object(r.jsx)(S,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/contact",children:Object(r.jsx)(g,{})}),Object(r.jsx)(a.a,{exact:!0,path:"/dojoBlog/blogs/:id",children:Object(r.jsx)(k,{})}),Object(r.jsx)(a.a,{path:"*",children:Object(r.jsx)(q,{})})]})})]})})};i.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.efd4bfcf.chunk.js.map