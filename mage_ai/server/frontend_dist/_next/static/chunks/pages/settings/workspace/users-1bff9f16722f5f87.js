(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2287],{60921:function(e,r,n){"use strict";n.r(r);var t=n(77837),u=n(82394),i=n(38860),s=n.n(i),o=n(82684),c=n(34376),a=n(60328),l=n(87372),d=n(41788),f=n(30775),p=n(86673),v=n(58180),O=n(19711),_=n(20582),h=n(82531),j=n(66166),w=n(10503),b=n(49125),m=n(79585),y=n(63153),P=n(9736),g=n(33766),Z=n(7715),x=n(59e3),E=n(28598);function S(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?S(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function D(){var e=(0,c.useRouter)(),r=((0,P.PR)()||{}).id,n=(0,o.useState)(null),t=n[0],u=n[1],i=h.ZP.users.list({},{revalidateOnFocus:!1}),s=i.data,d=i.mutate,S=(0,o.useMemo)((function(){return(null===s||void 0===s?void 0:s.users)||[]}),[s]),D=h.ZP.users.detail(null===t||void 0===t?void 0:t.user_id,{},{revalidateOnFocus:!1}),A=D.data,C=D.mutate,H=null===A||void 0===A?void 0:A.user,N=(0,x.iV)(),R=(0,j.Z)(N);(0,o.useEffect)((function(){var e=N.add_new_user,r=N.user_id;if(!(0,Z.Xy)(N,R)){var n=k(k({},R),N);r?n.user_id=r:delete n.user_id,e?n.add_new_user=e:delete n.add_new_user,u(n)}}),[N,R]);var F=null===t||void 0===t?void 0:t.add_new_user,M=(0,o.useMemo)((function(){return F?(0,E.jsx)(p.Z,{p:b.cd,children:(0,E.jsx)(_.Z,{newUser:!0,onSaveSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),d()},title:"Add new user",user:{}})}):H?(0,E.jsx)(p.Z,{p:b.cd,children:(0,E.jsx)(_.Z,{hideFields:[y.s7],onDeleteSuccess:function(){(0,g.u7)({add_new_user:null,user_id:null}),d()},onSaveSuccess:function(){C(),d()},showDelete:!0,title:"Edit user",user:H})}):null}),[C,d,F,H]);return(0,E.jsxs)(f.Z,{after:M,afterHidden:!H&&!F,uuidItemSelected:m.eC,uuidWorkspaceSelected:m.WH,children:[(0,E.jsx)(p.Z,{p:b.cd,children:(0,E.jsx)(a.Z,{beforeIcon:(0,E.jsx)(w.mm,{}),onClick:function(){return(0,g.u7)({add_new_user:1,user_id:null})},primary:!0,children:"Add new user"})}),(0,E.jsx)(p.Z,{p:b.cd,children:(0,E.jsx)(l.Z,{children:"Users"})}),(0,E.jsx)(v.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var r;return(null===(r=S[e])||void 0===r?void 0:r.id)===(null===H||void 0===H?void 0:H.id)},onClickRow:function(n){var t,u=null===(t=S[n])||void 0===t?void 0:t.id;u===r?e.push("/settings/account/profile"):(0,g.u7)({add_new_user:null,user_id:u})},rows:S.map((function(e){var r=e.email,n=e.roles_display,t=e.username;return[(0,E.jsx)(O.ZP,{bold:!0,children:t},"username"),(0,E.jsx)(O.ZP,{default:!0,children:r},"email"),(0,E.jsx)(O.ZP,{default:!0,children:n},"roles")]})),uuid:"pipeline-runs"})]})}D.getInitialProps=(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),r.default=(0,d.Z)(D)},33766:function(e,r,n){"use strict";n.d(r,{O2:function(){return d},g_:function(){return p},u7:function(){return f}});var t=n(75582),u=n(82394),i=n(34376),s=n.n(i),o=n(59e3),c=n(24224);function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d="_offset";function f(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.preserveParams,u=r.pushHistory,i=r.replaceParams,c=(0,o.iV)(),a={};n&&n.forEach((function(e){c[e]&&(a[e]=c[e])}));var d,f=i?a:c;d=window.location.pathname;var p=u?s().push:s().replace,v=l(l({},f),e);Object.entries(e).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],u=r[1];"undefined"!==typeof u&&null!==u||delete v[n]}));var O=(0,o.uM)(v);O.length>=1&&(O="?".concat(O));var _="".concat(d.split("?")[0]).concat(O);return p(s().router.pathname,_,{shallow:!0})}function p(e,r,n){var u=n.addingMultipleValues,i=n.isList,s=n.itemsPerPage,o=n.pushHistory,a=void 0!==o&&o,p=n.resetLimitParams,v=l({},e);u?Object.entries(r).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],u=r[1];if(Array.isArray(u)){var i="".concat(n,"[]");v[i]=u.map(String)}})):i?Object.entries(r).forEach((function(e){var r=(0,t.Z)(e,2),n=r[0],u=r[1],i=String(u),s="".concat(n,"[]"),o=v[s];o&&Array.isArray(o)?(o=o.map(String)).includes(i)?v[s]=(0,c.Od)(o,(function(e){return e===i})):v[s]=o.concat(i):v[s]=[i]})):v=l(l({},v),r),p&&(v._limit=s||20,v[d]=0),f(v,{pushHistory:a})}},48673:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/workspace/users",function(){return n(60921)}])}},function(e){e.O(0,[3879,5716,881,4506,8180,5477,9774,2888,179],(function(){return r=48673,e(e.s=r);var r}));var r=e.O();_N_E=r}]);