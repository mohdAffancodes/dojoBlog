(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{34:function(e,t,n){e.exports={notFound:"notfound_notFound__2JOlx",pulse:"notfound_pulse__4FxCZ"}},41:function(e,t,n){},42:function(e,t,n){},47:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n(29),i=n.n(o),s=(n(40),n(41),n(42),n(8)),a=n(5),l=n(14),r=n(35),d=n(9),j=n(19);n(70);j.a.apps.length?j.a.app():j.a.initializeApp({apiKey:"AIzaSyAKfnfgEx5EW76s-9ui9ByEynjgXYNM1nQ",authDomain:"dojoblog-ec6b1.firebaseapp.com",projectId:"dojoblog-ec6b1",storageBucket:"dojoblog-ec6b1.appspot.com",messagingSenderId:"683122392119",appId:"1:683122392119:web:3c4f1db62a0ba37da853b2",measurementId:"G-M6MQ4XJKQ6"}),j.a.firestore().settings({timeStampsInSnapshots:!0});var b=j.a.firestore(),u=function(e,t){switch(t.type){case"idle":return{status:"idle",data:void 0,error:void 0};case"loading":return{status:"loading",data:void 0,error:void 0};case"success":return{status:"success",data:t.payload,error:void 0};case"error":return{status:"error",data:void 0,error:t.payload};default:throw new Error("invalid action")}};function h(e,t){var n=b.collection(e).orderBy("createdAt","desc");t&&(n=b.collection(e).doc(t));var o={status:n?"loading":"idle",data:void 0,error:void 0},i=Object(c.useState)(null),s=Object(d.a)(i,2),a=s[0],l=s[1],r=Object(c.useReducer)(u,o),j=Object(d.a)(r,2),h=j[0],f=j[1],m=function(e,t){var n=Object(c.useRef)(),o=n.current,i=t(o,e);return Object(c.useEffect)((function(){i||(n.current=e)})),i?o:e}(n,(function(e){return e&&n&&n.isEqual(e)}));return Object(c.useEffect)((function(){if(m)return f({type:"loading"}),m.onSnapshot((function(e){e.docChanges().forEach((function(e){l([e.type,e.doc.id])}));var t=e.docs?function(e){return e.docs.map(O)}(e):O(e);f({type:"success",payload:t})}),(function(e){f({type:"error",payload:e})}));f({type:"idle"})}),[m]),{state:h,change:a}}function O(e){return!0===e.exists?Object(r.a)({id:e.id},e.data()):null}var f=n(1),m=Object(c.createContext)(null);function x(e){var t=e.children,n=h("blog1"),c=n.state,o=n.change,i={data:c.data,status:c.status,error:c.error,snapshot:o[0],doc:o[1]};return Object(f.jsx)(m.Provider,{value:i,children:t})}var g=function(){return Object(f.jsx)("div",{className:"progress",children:Object(f.jsx)("div",{className:"indeterminate pink accent-3-only"})})},p=(n(47),function(e){var t=e.blogs;return Object(f.jsxs)("div",{className:"blog-list",children:[0===t.length&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"No blogs"}),Object(f.jsx)("h4",{children:Object(f.jsx)(s.b,{to:"/dojoBlog/create",children:"Create One Now"})})]}),t.length>0&&Object(f.jsxs)("h3",{children:["All blogs",Object(f.jsx)(s.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d",borderRadius:"8px",textTransform:"none"},className:"myTabs waves-effect waves-light btn white-text new hide-on-small-only",children:"New Blog"}),Object(f.jsx)(s.b,{to:"/dojoBlog/create",style:{backgroundColor:"#f1356d"},className:"myTabs waves-effect waves-light btn white-text newfloater hide-on-med-and-up",children:Object(f.jsx)("i",{className:"material-icons",style:{fontSize:"40px"},children:"add"})})]}),t.map((function(e,t){return Object(f.jsx)(s.b,{to:"/dojoBlog/blogs/".concat(t),children:Object(f.jsxs)("div",{className:"blog-preview",children:[Object(f.jsx)("h2",{children:e.title}),Object(f.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))]})}),v=function(){var e=Object(c.useContext)(m),t=e.data,n=e.status,o=e.error;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:Object(f.jsx)("title",{children:"Dojo-Blog | Home"})}),Object(f.jsxs)("div",{className:"home",children:["error"===n&&Object(f.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:o.message}),"loading"===n&&Object(f.jsx)(g,{}),"success"===n&&Object(f.jsx)(p,{blogs:t})]})]})},y=(n(50),function(){return Object(f.jsxs)("section",{id:"nav",children:[Object(f.jsx)("div",{className:"navSpace"}),Object(f.jsx)("nav",{className:"nav-fixed",children:Object(f.jsxs)("div",{className:"nav-wrapper",children:[Object(f.jsx)(s.b,{to:"/dojoBlog",className:"brandLogo",children:"dojoblog"}),Object(f.jsxs)("ul",{id:"nav-mobile",className:"right",children:[Object(f.jsx)("li",{children:Object(f.jsxs)(s.b,{to:"/dojoBlog",className:"myTabs navIcons",children:[Object(f.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"home"}),Object(f.jsx)("span",{className:"hide-on-small-only",children:"Home"})]})}),Object(f.jsx)("li",{children:Object(f.jsx)(s.b,{to:"/dojoBlog/contact",className:"myTabs navIcons call",children:Object(f.jsx)("i",{className:"material-icons",style:{fontSize:"30px"},children:"call"})})})]})]})})]})}),N=(n(51),function(e){var t=e.alignment;return Object(f.jsx)("span",{className:"loader "+t,children:Object(f.jsx)("span",{className:"loader-inner"})})}),S=(n(52),n(53),n(21)),w=n.n(S),B=function(){var e=Object(a.f)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)(""),r=Object(d.a)(s,2),j=r[0],u=r[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),m=O[0],x=O[1],g=function(){var e=document.querySelector(".modal");w.a.Modal.init(e).open()};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:Object(f.jsx)("title",{children:"Dojo-Blog | Contact"})}),Object(f.jsxs)("div",{className:"contact",children:[Object(f.jsx)("section",{className:"infomodal",children:Object(f.jsxs)("div",{id:"modal3",className:"modal",children:[Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("h3",{id:"info-modal-heading",style:{color:"#f1356d"},children:"Thanks"}),Object(f.jsx)("p",{className:"info-modal-heading",children:"I hope to read your message soon"})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)("a",{href:"#",className:"modal-close waves-effects btn-flat",children:Object(f.jsx)("i",{className:"material-icons closeIcon",style:{fontSize:"30px"},onClick:function(){setTimeout(e.push("/dojoBlog"),500)},children:"close"})})})]})}),Object(f.jsxs)("section",{id:"form",children:[Object(f.jsx)("h2",{children:"Contact Me"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x(!0),b.collection("messages").add({email:o,message:j}).then((function(){g(),x(!1)}))},children:[Object(f.jsx)("input",{type:"email",name:"email",className:"emailInput",required:!0,placeholder:"Email Address",onChange:function(e){i(e.target.value)},disabled:m}),Object(f.jsx)("input",{type:"text",name:"message",className:"messageInput",required:!0,placeholder:"Your Message",onChange:function(e){u(e.target.value)},disabled:m}),m?Object(f.jsx)(N,{alignment:"right"}):Object(f.jsx)("button",{type:"submit",className:"right waves-effect waves-light",disabled:m,children:"Send"})]})]})]})]})},C=n(33),q=(n(59),n(60),document.createElement("i"));q.textContent="rotate_left",q.setAttribute("class","material-icons");var k=document.createElement("i");k.textContent="rotate_right",k.setAttribute("class","material-icons");var E=function(e){var t=e.id,n=e.placeholder,o=e.data,i=e.enable,s=Object(c.useState)(!0),a=Object(d.a)(s,2),l=a[0],r=a[1],j=Object(C.a)({placeholder:n,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block","formula"],["link","image","video"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{align:[]}],[{size:["small",!1,"large","huge"]},{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],["clean"],["undo","redo"],[{direction:"rtl"}]]},formats:["redo","undo","bold","header","italic","align","color","script","strike","size","formula","background","code-block","font","underline","link","list","blockquote","image","video","indent","direction"]}),b=j.quill,u=j.quillRef,h=Object(c.useCallback)((function(e){document.querySelector(e).addEventListener("click",(function(){return".ql-undo"===e?b.history.undo():".ql-redo"===e?b.history.redo():void 0}))}),[b]);return Object(c.useEffect)((function(){b&&b.enable(i)}),[b,i]),Object(c.useEffect)((function(){b&&(document.querySelector(".ql-undo").appendChild(q),document.querySelector(".ql-redo").appendChild(k),h(".ql-undo"),h(".ql-redo"))}),[b,h]),Object(c.useEffect)((function(){r(!0)}),[o]),o&&b&&!0===l?(b.setContents(JSON.parse(o)),r(!1)):window.quill=b,Object(f.jsx)("div",{id:t,children:Object(f.jsx)("div",{ref:u})})},I=(n(61),n(28)),z=function(){var e=Object(a.f)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),o=n[0],i=n[1],s=Object(c.useState)(""),r=Object(d.a)(s,2),j=r[0],u=r[1],h=Object(c.useState)(!0),O=Object(d.a)(h,2),m=O[0],x=O[1],g=Object(c.useState)(!1),p=Object(d.a)(g,2),v=p[0],y=p[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:Object(f.jsx)("title",{children:"Dojo-Blog | Create"})}),Object(f.jsxs)("div",{className:"create",children:[Object(f.jsx)("h3",{className:"add",children:"Add a new blog"}),Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n,c=window.quill.getContents(),i=c.ops,s=document.querySelector(".ql-container").textContent;!1===function(e){var t=!1;function n(e,t){var n=Object.keys(e).sort(),c=Object.keys(t).sort();return JSON.stringify(n)===JSON.stringify(c)}for(var c=0;c<e.length;c++)(n(e[c].insert,{video:""})||n(e[c].insert,{image:""}))&&(t=!0);return t}(i)&&(""===s&&"\n"===i[0].insert||""===s)?function(){var e={ops:[{attributes:{size:"large",color:"#a10000",bold:!0},insert:"Please Fill this"},{attributes:{align:"center",header:1},insert:"\n"}]};window.quill.setContents(e)}():I.check(s)?function(){var e={ops:[{attributes:{size:"large",color:"#a10000",bold:!0},insert:"This IS  Prohibited"},{attributes:{align:"center",header:1},insert:"\n"}]};window.quill.setContents(e)}():(y(!0),x(!1),"Please Fill this"===s?(y(!1),e.push("/dojoBlog")):(n=c,b.collection("blog1").add({createdAt:Date.now(),title:o,body:JSON.stringify(n),author:j}).then((function(){x(!0),y(!1),e.push("/dojoBlog")}))))},children:[Object(f.jsx)("label",{children:"Blog title:"}),Object(f.jsx)("input",{type:"text",required:!0,value:o,onChange:function(e){I.check(e.target.value)?i(""):i(e.target.value)},className:"titleInput",disabled:v}),Object(f.jsx)("h6",{children:"Blog body:"}),Object(f.jsx)(E,{id:"ql-parent",placeholder:"Compose an epic",enable:m}),Object(f.jsx)("label",{style:{marginTop:"10px"},children:"Blog author:"}),Object(f.jsx)("input",{type:"text",required:!0,value:j,onChange:function(e){I.check(e.target.value)?u(""):u(e.target.value)},className:"authorInput",disabled:v}),v?Object(f.jsx)(N,{}):Object(f.jsx)("button",{className:"waves-effect waves-light addBlog",children:"Add Blog"})]})]})]})},T=n(34),A=n.n(T),F=function(){var e=Object(a.f)();return Object(c.useEffect)((function(){setTimeout((function(){e.push("/dojoBlog")}),2e3)}),[e]),Object(f.jsxs)("div",{className:A.a.notFound,children:[Object(f.jsx)(l.a,{children:Object(f.jsx)("title",{children:"Dojo-Blog | 404"})}),Object(f.jsx)("h2",{children:"Sorry"}),Object(f.jsx)("p",{children:"That page cannot be found"}),Object(f.jsx)(s.b,{to:"/dojoBlog",children:"Back to the homepage..."})]})},M=(n(68),n(28)),D=function(e,t){switch(t.type){case"save":return{editable:!1,fired:!0,updating:!0,deleting:!1};case"reset":case"updated":return{editable:!1,fired:!0,updating:!1,deleting:!1};case"delete":return{editable:!1,fired:!0,updating:!1,deleting:!0};case"initialLoad":return{editable:!1,fired:!0,updating:!1,deleting:!1};case"edit":return{editable:!0,fired:!0,updating:!1,deleting:!1};default:return e}},J=function(){var e=Object(c.useReducer)(D,{editable:!1,fired:!1,updating:!1,deleting:!1}),t=Object(d.a)(e,2),n=t[0],o=n.editable,i=n.fired,r=n.updating,j=n.deleting,u=t[1],h=Object(a.g)().id,O=Object(a.f)(),x=Object(c.useState)(null),p=Object(d.a)(x,2),v=p[0],y=p[1],N=Object(c.useContext)(m),S=N.data,B=N.status,C=N.error,q=N.snapshot,k=N.doc;Object(c.useEffect)((function(){"modified"===q&&k===S[h].id?y(S[h]):"removed"===q&&k===S[h].id&&!1===j?I():i||y(S[h])}),[S,h,i,q,k,j]),Object(c.useEffect)((function(){u({type:"initialLoad"})}),[]);var I=function(){var e=document.querySelector(".modal");w.a.Modal.init(e).open(),document.querySelector(".editIcon").style.pointerEvents="none",document.querySelector(".deleteIcon").style.pointerEvents="none"};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{children:v&&Object(f.jsxs)("title",{children:[v.title," | Dojo-Blog"]})}),Object(f.jsxs)("div",{className:"blog-details",children:[r&&Object(f.jsx)("h2",{children:"Saving Changes"}),(r||"loading"===B)&&Object(f.jsx)(g,{}),C&&Object(f.jsx)("div",{style:{fontSize:"20px",fontWeight:"700"},children:C}),v&&!r&&Object(f.jsxs)("article",{children:[Object(f.jsxs)("h2",{children:[Object(f.jsx)("span",{id:"title",children:v.title}),Object(f.jsx)("i",{className:"material-icons right deleteIcon",style:{cursor:"pointer",fontSize:"40px"},onClick:function(){u({type:"delete"}),b.collection("blog1").doc(S[h].id).delete().then((function(){O.push("/dojoBlog")}))},children:"delete"})]}),Object(f.jsx)("h6",{style:{marginBottom:"0.766667rem !important"},children:Object(f.jsxs)("span",{id:"author",children:["Written by ",v.author]})}),Object(f.jsx)(E,{id:"blogBody",data:v.body,enable:o})]}),"success"===B&&!r&&Object(f.jsx)("div",{className:"floater",children:Object(f.jsx)("i",{className:"material-icons editIcon",onClick:function(e){var t=(e=e||window.event).target||e.srcElement,n=document.querySelector("#title"),c=document.querySelector("#blogBody .ql-toolbar"),o=document.querySelector("#blogBody .ql-container").textContent;if("edit"===t.textContent)return n.contentEditable=!0,t.textContent="check",c.style.visibility="visible",c.style.setProperty("height","initial"),void u({type:"edit"});if("check"===t.textContent)return n.contentEditable=!0,t.textContent="edit",c.style.visibility="hidden",c.style.height="0px",void(M.check(o)||M.check(n.textContent)?(alert("This Is Prohibited"),O.push("/dojoBlog")):(!function(){var e=JSON.stringify(window.quill.getContents());b.collection("blog1").doc(S[h].id).update({body:e,title:n.textContent}).then((function(){u({type:"updated"})}))}(),u({type:"save"})))},style:{fontSize:"30px"},children:"edit"})}),Object(f.jsx)("section",{className:"infomodal",children:Object(f.jsxs)("div",{id:"modal3",className:"modal",children:[Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("h3",{id:"info-modal-heading",style:{color:"#f1356d"},children:"Message"}),Object(f.jsx)("p",{className:"info-modal-heading",children:"This Blog has been deleted.You will now be redirected to HOME."})]}),Object(f.jsx)("div",{className:"modal-footer",children:Object(f.jsx)(s.b,{to:"/dojoBlog",className:"modal-close waves-effects btn-flat",children:Object(f.jsx)("i",{className:"material-icons closeIcon",style:{fontSize:"30px"},children:"close"})})})]})})]})]})};var _=function(){return Object(f.jsx)(s.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(y,{}),Object(f.jsx)("div",{className:"content",children:Object(f.jsx)(l.b,{children:Object(f.jsx)(x,{children:Object(f.jsxs)(a.c,{children:[Object(f.jsx)(a.a,{exact:!0,path:"/dojoBlog",children:Object(f.jsx)(v,{})}),Object(f.jsx)(a.a,{exact:!0,path:"/dojoBlog/create",children:Object(f.jsx)(z,{})}),Object(f.jsx)(a.a,{exact:!0,path:"/dojoBlog/contact",children:Object(f.jsx)(B,{})}),Object(f.jsx)(a.a,{exact:!0,path:"/dojoBlog/blogs/:id",children:Object(f.jsx)(J,{})}),Object(f.jsx)(a.a,{path:"*",children:Object(f.jsx)(F,{})})]})})})})]})})};i.a.render(Object(f.jsx)(c.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.82e063b8.chunk.js.map