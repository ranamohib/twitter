"use strict";(self.webpackChunktwitter=self.webpackChunktwitter||[]).push([[694],{761:function(e,t,n){n.d(t,{S:function(){return r}});var r=(0,n(2791).createContext)({})},4155:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(1413),s=n(5861),a=n(885),i=n(7757),c=n.n(i),u=n(9062),o=n(2791),l=n(3273),d=n(4483),f=n(1297),p=n(3174),m=n(6871),x=n(761),h=n(184);function v(e){var t=e.data,n=t.likes,i=t.replies,v=t.tweet,g=t.user,b=t.timestamp,j=t.id,w=(0,o.useState)({}),N=(0,a.Z)(w,2),y=N[0],k=N[1],Z=(0,m.s0)(),C=(0,o.useContext)(x.S);return(0,o.useEffect)((function(){(0,s.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.QT)((0,u.JU)(l.db,"users",g));case 2:t=e.sent,k((0,r.Z)({id:t.id},t.data()));case 4:case"end":return e.stop()}}),e)})))()}),[]),(0,h.jsx)("div",{onClick:function(){return Z("/"+j)},className:"w-full border-b p-4 border-gray-600 hover:bg-[#1C2732] cursor-pointer",children:(0,h.jsxs)("li",{className:"flex py-4 first:pt-0 last:pb-0",children:[(0,h.jsx)("div",{onClick:function(e){return function(e){e.stopPropagation(),Z("/p/"+y.id)}(e)},className:"shrink-0",children:(0,h.jsx)("img",{className:"h-12 w-12 object-cover rounded-full",src:y.photoURL||"https://avatars.dicebear.com/api/initials/".concat(y.fullName,".svg"),alt:"Current profile photo"})}),(0,h.jsxs)("div",{className:"ml-3 w-full",children:[(0,h.jsxs)("p",{className:"text-sm font-semibold",children:[y&&y.fullName,(0,h.jsxs)("span",{className:"text-sm font-medium text-slate-400 truncate",children:[" @",y&&y.username," . ",b]})]}),(0,h.jsx)("p",{className:"mt-1 text-sm font-medium",children:v}),(0,h.jsxs)("div",{className:"flex gap-24 mt-2",children:[(0,h.jsxs)("button",{onClick:function(){return Z("/"+j)},className:"-ml-2 flex w-14 items-center group text-".concat(i.find((function(e){return e.user===C.id}))?"blue":"gray","-400"),children:[(0,h.jsx)("div",{className:"transition h-8 w-8 flex items-center justify-center rounded-full group-hover:bg-blue-400/20",children:(0,h.jsx)(d.G,{className:"group-hover:text-blue-400",icon:i.find((function(e){return e.user===C.id}))?p.Mzg:f.Mzg})}),(0,h.jsx)("span",{className:"ml-1 text-sm group-hover:text-blue-400",children:i.length||""})]}),(0,h.jsxs)("button",{onClick:function(e){return function(e,t,n){e.stopPropagation(),(0,l.V7)(t,n)}(e,j,C.id)},className:"flex items-center text-gray-400 group ".concat(n.includes(C.id)&&"text-pink-700"),children:[(0,h.jsx)("div",{className:"transition h-8 w-8 flex items-center justify-center rounded-full group-hover:bg-pink-700/20",children:(0,h.jsx)(d.G,{className:"group-hover:text-pink-700",icon:n.includes(C.id)?p.m6i:f.m6i})}),(0,h.jsx)("span",{className:"ml-1 text-sm group-hover:text-pink-700",children:n.length||""})]})]})]})]})})}},7694:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),s=n(1413),a=n(4925),i=n(885),c=n(7757),u=n.n(c),o=n(2791),l=n(4155),d=n(3273),f=n(9062),p=n(6871),m=n(761),x=n(184),h=["timestamp"],v=["timestamp"];function g(){var e=(0,o.useState)(!1),t=(0,i.Z)(e,2),n=t[0],c=t[1],g=(0,o.useState)(""),b=(0,i.Z)(g,2),j=b[0],w=b[1],N=(0,o.useState)([]),y=(0,i.Z)(N,2),k=y[0],Z=y[1],C=(0,o.useContext)(m.S),S=(0,p.UO)().tweetID;function O(){return(O=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.$Z)(C.id,j);case 2:t=e.sent.id,(0,d.Bn)(S,{id:t,user:C.id}),w("");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){return(0,f.cf)((0,f.JU)(d.db,"timeline",S),(function(e){var t=e.data(),n=t.timestamp,r=(0,a.Z)(t,h);c((0,s.Z)((0,s.Z)({},r),{},{timestamp:n&&n.toDate().toLocaleDateString(),id:e.id}))}))}),[S]),(0,o.useEffect)((function(){(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.replies){e.next=6;break}return e.t0=Z,e.next=4,Promise.all(n.replies.map(function(){var e=(0,r.Z)(u().mark((function e(t){var n,r,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Z3)(t.id);case 2:return n=e.sent,r=n.timestamp,i=(0,a.Z)(n,v),e.abrupt("return",(0,x.jsx)(l.Z,{data:(0,s.Z)((0,s.Z)({},i),{},{timestamp:r&&r.toDate().toLocaleDateString()})},t.id));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})))()}),[n]),(0,x.jsxs)(x.Fragment,{children:[n&&(0,x.jsx)(l.Z,{data:n}),C&&(0,x.jsx)("div",{className:" w-full border-b p-4 border-gray-600",children:(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"shrink-0",children:(0,x.jsx)("img",{className:"h-12 w-12 object-cover rounded-full",src:C.photo||"https://avatars.dicebear.com/api/initials/".concat(C.fullName,".svg"),alt:"Current profile photo"})}),(0,x.jsxs)("div",{className:"ml-3 overflow-hidden w-full flex",children:[(0,x.jsx)("input",{className:"w-full font-medium text-lg bg-transparent  pl-4 bg-gray-600 rounded-full rounded-r-none focus-visible:outline-none",id:"tweet",placeholder:"Tweet your reply",value:j,onChange:function(e){return w(e.target.value)},type:"text"}),(0,x.jsx)("button",{onClick:function(){return O.apply(this,arguments)},type:"button",className:"border-l p-4 bg-gray-600 rounded-full rounded-l-none hover:bg-gray-700",children:"Reply"})]})]})}),k,(0,x.jsx)("div",{className:"h-52"})]})}},4925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=694.dd584672.chunk.js.map