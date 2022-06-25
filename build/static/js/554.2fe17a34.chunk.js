"use strict";(self.webpackChunkfinal_project=self.webpackChunkfinal_project||[]).push([[554],{195:function(n,e,r){var t,i,o,s=r(168),a=(r(2791),r(7939)),c=r(241),d=r(184),l=a.default.div(t||(t=(0,s.Z)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),u=a.default.div(i||(i=(0,s.Z)(["\n  width: 450px;\n  background: white;\n  padding: 1.5rem;\n  border-radius: 4px;\n  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n  }\n\n  p {\n    margin-bottom: 3rem;\n  }\n\n  .buttons {\n    display: flex;\n    justify-content: flex-end;\n  }\n"]))),f=(0,a.default)(c.Z)(o||(o=(0,s.Z)(["\n  height: 2rem;\n\n  & + & {\n    margin-left: 0.75rem;\n  }\n"])));e.Z=function(n){var e=n.visible,r=n.title,t=n.description,i=n.onCancel,o=void 0===i?function(){}:i,s=n.cancelContext,a=void 0===s?"\ucde8\uc18c":s,c=n.onConfirm,x=n.confirmText,h=void 0===x?"\ud655\uc778":x,p=n.checker,g=void 0!==p&&p;return e?(0,d.jsx)(l,{children:(0,d.jsxs)(u,{children:[(0,d.jsx)("h2",{children:r}),(0,d.jsx)("p",{children:t}),(0,d.jsxs)("div",{className:"buttons",children:[!g&&(0,d.jsx)(f,{onClick:o,children:a}),(0,d.jsx)(f,{cyan:!0,onClick:c,children:h})]})]})}):null}},241:function(n,e,r){var t,i,o,s,a,c,d=r(1413),l=r(168),u=(r(2791),r(7939)),f=r(2478),x=r(3504),h=r(184),p=(0,u.css)(t||(t=(0,l.Z)(["\n  border: none;\n  border-radius: 4px;\n  font-size: 1rem;\n  font-weight: bold;\n  padding: 0.25rem 1rem;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  margin-top: 0px !important;\n  background: ",";\n  transition: all 0.5s ease;\n  &:hover {\n    background: ",";\n  }\n\n  ","\n\n  ","\n\n  ","\n\n\t&:disabled {\n    background: ",";\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),f.Z.gray[8],f.Z.gray[6],(function(n){return n.cyan&&(0,u.css)(i||(i=(0,l.Z)(["\n      background: ",";\n      &:hover {\n        background: ",";\n      }\n    "])),f.Z.cyan[7],f.Z.cyan[6])}),(function(n){return n.yellow&&(0,u.css)(o||(o=(0,l.Z)(["\n      background: #f5d922;\n      &:hover {\n        background: #f5cb22;\n      }\n    "])))}),(function(n){return n.fullWidth&&(0,u.css)(s||(s=(0,l.Z)(["\n      padding: 0.5rem 0rem;\n      width: 100%;\n      font-size: 0.9rem;\n    "])))}),f.Z.gray[3],f.Z.gray[5]),g=u.default.button(a||(a=(0,l.Z)(["\n  ","\n"])),p),m=(0,u.default)(x.rU)(c||(c=(0,l.Z)(["\n  ","\n"])),p);e.Z=function(n){return n.to?(0,h.jsx)(m,(0,d.Z)((0,d.Z)({},n),{},{cyan:n.cyan?1:0})):(0,h.jsx)(g,(0,d.Z)({},n))}},1219:function(n,e,r){var t,i=r(1413),o=r(5987),s=r(168),a=(r(2791),r(7939)),c=r(184),d=["children"],l=a.default.div(t||(t=(0,s.Z)(["\n  margin: 0 auto;\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));e.Z=function(n){var e=n.children,r=(0,o.Z)(n,d);return(0,c.jsx)(l,(0,i.Z)((0,i.Z)({},r),{},{children:e}))}},3921:function(n,e,r){r.d(e,{Z:function(){return b}});r(2791);var t,i,o,s,a=r(9434),c=r(168),d=r(7939),l=r(1219),u=r(241),f=r(3504),x=r(184),h=d.default.div(t||(t=(0,c.Z)(["\n  width: 100%;\n  position: fixed;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);\n  z-index: 100;\n  background: rgba(255, 255, 255, 0.8);\n"]))),p=(0,d.default)(l.Z)(i||(i=(0,c.Z)(["\n  height: 4rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    text-decoration: none;\n  }\n\n  .logo {\n    font-size: 1.125rem;\n    font-weight: 800;\n    letter-spacing: 2px;\n    color: black;\n    margin-left: 60px;\n  }\n\n  .right {\n    display: flex;\n    align-items: center;\n  }\n"]))),g=d.default.div(o||(o=(0,c.Z)(["\n  height: 4rem;\n"]))),m=d.default.div(s||(s=(0,c.Z)(["\n  font-weight: 800;\n  margin-right: 1rem;\n"]))),j=function(n){var e=n.user,r=n.onLogout;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h,{children:(0,x.jsxs)(p,{children:[(0,x.jsx)(f.rU,{to:"/",className:"logo",children:"STUIK ( Study In Kert )"}),e?(0,x.jsxs)("div",{className:"right",children:[(0,x.jsx)(m,{children:e.username}),(0,x.jsx)(u.Z,{onClick:r,children:"\ub85c\uadf8\uc544\uc6c3"})]}):(0,x.jsx)("div",{className:"right",children:(0,x.jsx)(u.Z,{to:"/login",children:"\ub85c\uadf8\uc778"})})]})}),(0,x.jsx)(g,{})]})},Z=r(4098),v=r(6871),b=function(){var n=(0,v.s0)(),e=(0,a.v9)((function(n){return{user:n.user.user}})).user,r=(0,a.I0)();return(0,x.jsx)(j,{user:e,onLogout:function(){r((0,Z.kS)()),n("/")}})}},1386:function(n,e,r){r.d(e,{Z:function(){return C}});var t,i,o,s=r(885),a=r(2791),c=r(1413),d=r(5987),l=r(168),u=r(7939),f=r(1219),x=r(813),h="common_iconOuter__tm0-n",p=r(3504),g=r(184),m=["IconComponent","text","children"],j=u.default.div(t||(t=(0,l.Z)(["\n  position: fixed;\n  height: 100%;\n  width: 15rem;\n  background: rgb(30, 35, 39);\n  left: -15rem;\n  transition: all 0.5s ease;\n  top: 4rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 102;\n"]))),Z=(0,u.default)(f.Z)(i||(i=(0,l.Z)(["\n  height: auto;\n  width: 100%;\n  color: #a7adb2;\n  padding: 20px 20px;\n  background: rgb(44, 50, 56);\n  font-size: 1.2rem;\n\n  a {\n    transition: all 0.5s ease;\n    font-weight: 700;\n  }\n\n  div + div {\n    margin-top: 23px;\n  }\n\n  a:hover {\n    color: white;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n    cursor: pointer;\n  }\n"]))),v=(0,u.default)(f.Z)(o||(o=(0,l.Z)(["\n  height: auto;\n  width: 100%;\n  color: white;\n  padding: 20px 20px;\n  font-size: 1.1rem;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),b=function(n){var e=n.IconComponent,r=n.text,t=n.children,i=(0,d.Z)(n,m);return(0,g.jsxs)("div",(0,c.Z)((0,c.Z)({},i),{},{className:h,children:[(0,g.jsx)(e,{style:{fontSize:20}}),(0,g.jsx)("span",{children:r}),t]}))},y=function(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",{type:"checkbox",id:"menuicon"}),(0,g.jsxs)("label",{htmlFor:"menuicon",children:[(0,g.jsx)("span",{}),(0,g.jsx)("span",{}),(0,g.jsx)("span",{})]})]})},k=function(n){var e=n.navItemList,r=n.isLoggedIn,t=n.onLogout,i=n.user;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(y,{}),(0,g.jsxs)(j,{children:[e.map((function(n){return"HomePage"===n?(0,g.jsx)(Z,{children:(0,g.jsx)(p.rU,{to:"/",children:"\ud648"})},n):r&&"MyPost"===n?(0,g.jsx)(Z,{children:(0,g.jsx)(p.rU,{to:"/?username=".concat(null===i||void 0===i?void 0:i.username),children:"\ub0b4 \uc2a4\ud130\ub514 \ud655\uc778\ud558\uae30"})},n):r&&"EditProfile"===n?(0,g.jsx)(Z,{children:(0,g.jsx)(p.rU,{to:"/profile",children:"\ud504\ub85c\ud544 \uc218\uc815"})},n):r||"Login"!==n?r||"Register"!==n?r&&"Logout"===n?(0,g.jsx)(Z,{children:(0,g.jsx)("a",{onClick:t,style:{cursor:"pointer"},children:"\ub85c\uadf8\uc544\uc6c3"})},n):null:(0,g.jsx)(Z,{children:(0,g.jsx)(p.rU,{to:"/register",children:"\ud68c\uc6d0\uac00\uc785"})},n):(0,g.jsx)(Z,{children:(0,g.jsx)(p.rU,{to:"/login",children:"\ub85c\uadf8\uc778"})},n)})),(0,g.jsx)(v,{children:(0,g.jsx)(b,{text:"Study",IconComponent:x.Z})})]})]})},w=r(9434),I=r(4098),C=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return{user:n.user.user}})).user,r=(0,a.useState)(["HomePage","EditProfile","MyPost","Login","Register","Logout"]),t=(0,s.Z)(r,2),i=t[0];t[1];return(0,g.jsx)(k,{navItemList:i,isLoggedIn:!!e,onLogout:function(){n((0,I.kS)())},user:e})}},2478:function(n,e){e.Z={gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"]}},554:function(n,e,r){r.r(e),r.d(e,{default:function(){return cn}});var t,i,o,s,a,c,d,l,u,f,x,h,p,g,m=r(2791),j=r(8214),Z=r(5861),v=r(9434),b=r(8522),y=r(885),k=r(168),w=r(7939),I=r(2478),C=r(1219),_=r(6907),S=r(241),z=r(4694),L=r(151),U=r(7895),N=r(1601),E=r(195),F=r(184),P=function(n){var e=n.visible,r=n.onConfirm,t=n.description;return(0,F.jsx)(E.Z,{visible:e,onConfirm:r,description:t,confirmText:"\ud655\uc778",title:"\uc2a4\ud130\ub514 \uc778\uc6d0 \ud655\uc778",checker:!0})},T=r(3385),M=r(3504),O=(r(763),(0,w.default)(C.Z)(t||(t=(0,k.Z)(["\n  margin-top: 3rem;\n"])))),R=w.default.div(i||(i=(0,k.Z)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 2rem;\n  margin-bottom: 2rem;\n  display: flex;\n  row-gap: 10px;\n  flex-direction: column;\n  h1 {\n    font-size: 2rem;\n    text-align: center;\n    line-height: 1.5;\n    margin: 0;\n  }\n"])),I.Z.gray[2]),B=w.default.div(o||(o=(0,k.Z)(["\n  margin-top: 1rem;\n  color: ",";\n  text-align: right;\n\n  // \uad6c\ubd84\uc790\n  span + span:before {\n    color: ",';\n    padding: 0px 0.25rem;\n    content: "\\B7";\n  }\n'],["\n  margin-top: 1rem;\n  color: ",";\n  text-align: right;\n\n  // \uad6c\ubd84\uc790\n  span + span:before {\n    color: ",';\n    padding: 0px 0.25rem;\n    content: "\\\\B7";\n  }\n'])),I.Z.gray[6],I.Z.gray[5]),D=w.default.div(s||(s=(0,k.Z)(["\n  margin-top: 0.5rem;\n  .tag {\n    display: inline-block;\n    color: ",";\n    text-decoration: none;\n    margin-right: 0.5rem;\n\n    &:hover {\n      color: ",";\n      cursor: pointer;\n    }\n  }\n"])),I.Z.cyan[7],I.Z.cyan[4]),A=w.default.div(a||(a=(0,k.Z)(["\n  font-size: 1.3125rem;\n  color: ",";\n"])),I.Z.gray[8]),H=(0,w.default)(S.Z)(c||(c=(0,k.Z)(["\n  width: 150px;\n"]))),K=(0,w.default)(z.Z)(d||(d=(0,k.Z)(["\n  display: inline-block;\n"]))),q=(0,w.default)(L.Z)(l||(l=(0,k.Z)(["\n  display: inline-block;\n"]))),G=w.default.div(u||(u=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 10px;\n"]))),W=w.default.div(f||(f=(0,k.Z)(["\n  text-align: right;\n"]))),J=w.default.table(x||(x=(0,k.Z)(["\n  border: 1px solid black;\n  border-collapse: collapse;\n  width: 90%;\n  margin: auto;\n\n  td {\n    border: 1px solid black;\n    padding: 10px;\n  }\n\n  tr.info {\n    background: ",";\n  }\n\n  tr.host {\n    background: #ebd534;\n  }\n"])),I.Z.gray[5]),Q=(0,w.default)(T.Z)(h||(h=(0,k.Z)(["\n  font-size: 12px;\n  margin-right: 10px;\n"]))),V=function(n){var e=n.post,r=n.loading,t=n.error,i=n.actionButtons,o=n.user,s=n.onStudyIn,a=n.onSutdyOut,c=n.like_user,d=(0,m.useState)(!1),l=(0,y.Z)(d,2),u=l[0],f=l[1];if(t)return t.response&&404===t.response.status?(0,F.jsx)(O,{children:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud3ec\uc2a4\ud2b8\uc785\ub2c8\ub2e4"}):(0,F.jsx)(O,{children:"\uc624\ub958 \ubc1c\uc0dd!"});if(r||!e)return(0,F.jsx)(U.Z,{sx:{color:"#fff",zIndex:function(n){return n.zIndex.drawer+1}},open:r,children:(0,F.jsx)(N.Z,{color:"inherit"})});var x=e.title,h=e.body,p=e.publishedDate,g=e.creator,j=g.username,Z=g._id,v=g.email,b=e.tags,k=e._id;if(o)var w=o._id;var C=(0,F.jsxs)(J,{children:[(0,F.jsxs)("tr",{className:"info",children:[(0,F.jsx)("td",{children:"username"}),(0,F.jsx)("td",{children:"email"})]}),(0,F.jsxs)("tr",{className:"host",children:[(0,F.jsxs)("td",{children:[o&&j&&o.username===j&&(0,F.jsx)(Q,{fontSize:"12"}),j]}),(0,F.jsx)("td",{children:v})]}),c.map((function(n){var e=n.username,r=n.email;return(0,F.jsxs)("tr",{children:[(0,F.jsxs)("td",{children:[o&&e&&o.username===e&&(0,F.jsx)(Q,{fontSize:"12"}),e]}),(0,F.jsx)("td",{children:r})]},e)}))]});return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(P,{visible:u,onConfirm:function(){f(!1)},description:C}),(0,F.jsxs)(O,{children:[(0,F.jsx)(_.ql,{children:(0,F.jsxs)("title",{children:[x," - STUIK"]})}),(0,F.jsxs)(R,{children:[(0,F.jsxs)(G,{children:[o?Z===w?(0,F.jsx)(q,{style:{color:I.Z.cyan[6]}}):c.includes(w)?(0,F.jsx)(K,{style:{color:I.Z.cyan[6]}}):(0,F.jsx)(K,{style:{color:I.Z.gray[5]}}):null,(0,F.jsx)("h1",{children:x})]}),(0,F.jsx)(W,{children:(0,F.jsx)(S.Z,{cyan:!0,onClick:function(){f(!0)},children:"\uc2a4\ud130\ub514 \uc778\uc6d0 \ud655\uc778"})}),(0,F.jsxs)(B,{children:[(0,F.jsx)("span",{children:(0,F.jsx)("b",{children:j})}),(0,F.jsx)("span",{children:new Date(p).toLocaleDateString()})]}),(0,F.jsx)(D,{children:b.map((function(n){return(0,F.jsxs)(M.rU,{className:"tag",to:"/?tag=".concat(n),children:["#",n]},n)}))}),o?Z===w?(0,F.jsx)(H,{disabled:!0,onClick:function(){return alert("\uc2a4\ud130\ub514 \uc7a5\uc785\ub2c8\ub2e4.")},children:"\uc2a4\ud130\ub514 \uc7a5"}):c.includes(w)?(0,F.jsx)(H,{cyan:!0,onClick:function(){a({postId:k,userId:w}),alert("\ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\uc2a4\ud130\ub514 \ud0c8\ud1f4"}):(0,F.jsx)(H,{cyan:!0,onClick:function(){s({postId:k,userId:w}),alert("\ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},children:"\uc2a4\ud130\ub514 \ucc38\uc5ec"}):null]}),i,(0,F.jsx)(A,{dangerouslySetInnerHTML:{__html:h}})]})]})},X=r(6871),Y=function(n){var e=n.visible,r=n.onConfirm,t=n.onCancel;return(0,F.jsx)(E.Z,{visible:e,onConfirm:r,onCancel:t,description:"\uc815\ub9d0 \uc2a4\ud130\ub514\ub97c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",confirmText:"\uc0ad\uc81c",title:"\uc2a4\ud130\ub514 \uc0ad\uc81c"})},$=w.default.div(p||(p=(0,k.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 2rem;\n  margin-top: -1.5rem;\n"]))),nn=w.default.button(g||(g=(0,k.Z)(["\n  padding: 0.25rem, 0.5rem;\n  border-radius: 4px;\n  color: ",";\n  border: none;\n  outline: none;\n  font-size: 0.875rem;\n  cursor: pointer;\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  & + & {\n    margin-left: 0.25rem;\n  }\n"])),I.Z.gray[6],I.Z.gray[1],I.Z.cyan[7]),en=function(n){var e=n.onEdit,r=n.onRemove,t=(0,m.useState)(!1),i=(0,y.Z)(t,2),o=i[0],s=i[1];return(0,F.jsxs)($,{children:[(0,F.jsx)(nn,{onClick:e,children:"\uc218\uc815"}),(0,F.jsx)(nn,{onClick:function(){s(!0)},children:"\uc0ad\uc81c"}),(0,F.jsx)(Y,{visible:o,onConfirm:function(){s(!1),r()},onCancel:function(){s(!1)}})]})},rn=r(4955),tn=r(8436),on=function(){var n=(0,X.UO)().postId,e=(0,v.I0)(),r=(0,X.s0)(),t=(0,v.v9)((function(n){var e=n.post,r=e.post,t=e.error,i=e.like_user,o=n.loading,s=n.user.user;return{post:r,error:t,like_user:i,loading:o["post/READ_POST"],user:s}})),i=t.post,o=t.error,s=t.like_user,a=t.loading,c=t.user;(0,m.useEffect)((function(){return e((0,b.Uq)(n)),function(){e((0,b.dG)())}}),[e,n]),(0,m.useEffect)((function(){if(i){var n=i.likeId.like_user;e((0,b._L)(n))}}),[e,i]);var d=(c&&c._id)===(i&&i.user._id),l=function(){var e=(0,Z.Z)((0,j.Z)().mark((function e(){return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,tn.M8)(n);case 3:r("/"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var n=(0,Z.Z)((0,j.Z)().mark((function n(r){var t,i;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=r.postId,i=r.userId,e((0,b.wN)({postId:t,userId:i}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,Z.Z)((0,j.Z)().mark((function n(r){var t,i;return(0,j.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=r.postId,i=r.userId,e((0,b.wN)({postId:t,userId:i}));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,F.jsx)(V,{post:i,loading:a,error:o,actionButtons:d&&(0,F.jsx)(en,{onEdit:function(){e((0,rn.Ae)(i)),r("/write")},onRemove:l}),user:c,onStudyIn:u,onSutdyOut:f,like_user:s})},sn=r(3921),an=r(1386),cn=function(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(an.Z,{}),(0,F.jsx)(sn.Z,{}),(0,F.jsx)(on,{})]})}},3385:function(n,e,r){var t=r(5318);e.Z=void 0;var i=t(r(5649)),o=r(184),s=(0,i.default)((0,o.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");e.Z=s}}]);
//# sourceMappingURL=554.2fe17a34.chunk.js.map