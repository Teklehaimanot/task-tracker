(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{26:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=(n(26),n(21)),s=n.n(a),o=n(24),i=n(14),u=n(6),l=n.n(u),j=n(11),d=n(10),b=n(8),h=n(2),f=n(1),p=function(e){var t=e.text,n=e.color,r=e.onClick;return Object(f.jsx)("button",{className:"btn",style:{background:n},onClick:r,children:t})},O=function(e){var t=e.title,n=e.toggleAdd,r=e.showAdd,c=Object(h.e)();return Object(f.jsxs)("header",{className:"header",children:[Object(f.jsx)("h1",{children:t}),"/"===c.pathname&&Object(f.jsx)(p,{text:r?"Cancel":"Add",color:r?"red":"green",onClick:function(){n()}})]})},x=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Version 1.0.0"}),Object(f.jsx)(b.b,{to:"/",children:"Go Back"})]})},m=function(){return Object(f.jsxs)("footer",{children:[Object(f.jsx)("p",{children:"Copyright \xa9 2021"}),Object(f.jsx)(b.b,{to:"/about",children:"About"})]})},k=n(23),v=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(f.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){r(t.id)},children:[Object(f.jsxs)("h3",{children:[t.text,Object(f.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(f.jsx)("p",{children:t.day})]})},g=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(f.jsx)(f.Fragment,{children:t.map((function(e){return Object(f.jsx)(v,{task:e,onToggle:r,onDelete:n},e.id)}))})},y=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],l=i[1],j=Object(r.useState)(!1),b=Object(d.a)(j,2),h=b[0],p=b[1];return Object(f.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:u,reminder:h}),s(""),l(""),p(!1)):alert("please add Task")},children:[Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Task"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control",children:[Object(f.jsx)("label",{children:"Day and Time"}),Object(f.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:u,onChange:function(e){return l(e.target.value)}})]}),Object(f.jsxs)("div",{className:"form-control form-control-check",children:[Object(f.jsx)("label",{children:"Set Reminder"}),Object(f.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return p(e.target.checked)}})]}),Object(f.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var T=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),u=s[0],p=s[1];Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var k=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:p(u.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),console.log(r),e.next=7,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 7:return c=e.sent,e.next=10,c.json();case 10:a=e.sent,p(u.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:a.reminder}):e})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(o.a)(u),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{title:"Task Tracker",showAdd:n,toggleAdd:function(){c(!n)}}),Object(f.jsx)(h.a,{path:"/",exact:!0,render:function(e){return Object(f.jsxs)(f.Fragment,{children:[n?Object(f.jsx)(y,{onAdd:C}):"",u.length>0?Object(f.jsx)(g,{tasks:u,onToggle:w,onDelete:T}):"No Tasks to show"]})}}),Object(f.jsx)(h.a,{path:"/about",component:x}),Object(f.jsx)(m,{})]})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(T,{})}),document.getElementById("root")),w()}},[[37,1,2]]]);
//# sourceMappingURL=main.b19f81d2.chunk.js.map