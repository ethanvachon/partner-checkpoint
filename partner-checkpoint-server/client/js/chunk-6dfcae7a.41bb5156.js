(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dfcae7a"],{d60d:function(t,e,a){},ebd1:function(t,e,a){"use strict";a("d60d")},f517:function(t,e,a){"use strict";a.r(e);var d=a("7a23");const s=Object(d["I"])("data-v-da65f1ca");Object(d["u"])("data-v-da65f1ca");const r={id:"board-scroll",class:"fancy-scrollbar"},n={id:"lists",class:"d-flex align-items-start mx-1"};Object(d["s"])();const i=s((t,e,a,s,i,o)=>{const c=Object(d["y"])("nav-component"),l=Object(d["y"])("board-modal"),b=Object(d["y"])("list-modal"),g=Object(d["y"])("task-modal"),u=Object(d["y"])("list-component");return Object(d["r"])(),Object(d["e"])("div",{id:"page-board",class:"page",style:`background: linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url('${s.board.imgUrl}') no-repeat center center /cover;`},[Object(d["h"])(c,{page:"Board","board-id":s.board.id},null,8,["board-id"]),s.showModal&&"board"===s.modalType?(Object(d["r"])(),Object(d["e"])(l,{key:0})):Object(d["f"])("",!0),s.showModal&&"list"===s.modalType?(Object(d["r"])(),Object(d["e"])(b,{key:1})):Object(d["f"])("",!0),s.showModal&&"task"===s.modalType?(Object(d["r"])(),Object(d["e"])(g,{key:2})):Object(d["f"])("",!0),Object(d["h"])("div",r,[Object(d["h"])("div",n,[(Object(d["r"])(!0),Object(d["e"])(d["a"],null,Object(d["x"])(s.lists,t=>(Object(d["r"])(),Object(d["e"])(u,{key:t.name,list:t},null,8,["list"]))),128))])])],4)});var o=a("5fb1"),c=a("83fc"),l=a("617f"),b=a("d8e7"),g=a("6c02"),u=a("b012");function m(){let t,e;const a=document.createElement("div");a.classList.add("taskShadow"),document.addEventListener("drag",(function(t){}),!1),document.addEventListener("dragstart",(function(a){e=a.target,t=e.parentNode,e.classList.add("dragShadow"),e.classList.add("dragging"),c["a"].dragging=!0}),!1),document.addEventListener("dragend",(function(t){e.classList.remove("dragShadow"),e.classList.remove("dragging"),c["a"].dragging=!1}),!1),document.addEventListener("dragover",(function(t){t.preventDefault()}),!1),document.addEventListener("dragenter",(function(t){t.target.classList.contains("dropzone")&&(t.target.classList.add("hover"),t.target.children[0].appendChild(a))}),!1),document.addEventListener("dragleave",(function(t){t.target.classList.contains("dropzone")&&(t.target.classList.remove("hover"),t.target.children[0].removeChild(a))}),!1),document.addEventListener("drop",(function(d){if(d.preventDefault(),d.target.classList.contains("dropzone")){d.target.classList.remove("hover"),e.parentNode.removeChild(e),d.target.children[0].removeChild(a),d.target.children[0].appendChild(e);const s=t.children;for(let t=0;t<s.length;t++){const e=s[t].getAttribute("task-id");c["a"].tasks[c["a"].tasks.findIndex(t=>t.id===e)].order=t+1,c["a"].tasks=c["a"].tasks.sort((t,e)=>t.order-e.order).sort((t,e)=>t.listId>e.listId?1:t.listId===e.listId?0:-1),b["a"].putTask({order:t+1},e)}b["a"].putTask({list:d.target.children[0].getAttribute("list-id"),order:parseInt(d.target.children[0].getAttribute("task-count"))+1},e.getAttribute("task-id"),e.getAttribute("board-id"))}}),!1)}var p=a("75fd"),h={components:{ListModal:p["default"]},setup(){const t=Object(g["c"])();return Object(d["p"])(()=>{m();const e=setInterval((function(){c["a"].user.isAuthenticated&&(l["a"].getBoard(t.params.id),o["a"].getLists(t.params.id),b["a"].getTasks(t.params.id),clearInterval(e))}),10);c["a"].lists=[{name:"Hi this is a board",id:"1"},{name:"hi 2"},{name:" REEEEE",id:"3"},{name:"goteeeem"},{name:"board three"}],c["a"].tasks=[{name:"this is a task",listId:"1"},{name:"this should be on the third",listId:"3"}]}),{board:Object(d["c"])(()=>c["a"].board),lists:Object(d["c"])(()=>c["a"].lists),showModal:Object(d["c"])(()=>c["a"].showModal),modalType:Object(d["c"])(()=>c["a"].modalType),addList(){o["a"].postList({name:"Hi this is a list",boardId:t.params.id,color:"red"})},login(){u["a"].loginWithPopup()}}}};a("ebd1");h.render=i,h.__scopeId="data-v-da65f1ca";e["default"]=h}}]);