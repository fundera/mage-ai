(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3512],{1210:function(e,n,t){"use strict";t.d(n,{Z:function(){return P}});var r=t(82394),i=t(21831),o=t(82684),u=t(47999),l=t(49894),c=t(93461),a=t(57384),s=t(41424),d=t(72454),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var v=o.forwardRef(p),h=t(32063),b=t(85019),g=t(82531),m=t(66166),S=t(3055),O=t(49125),j=t(91427),T=t(24141);function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,p=e.afterHidden,y=e.afterWidth,P=e.afterWidthOverride,k=e.before,w=e.beforeWidth,Z=e.breadcrumbs,_=e.children,R=e.errors,L=e.headerMenuItems,x=e.headerOffset,M=e.mainContainerHeader,A=e.navigationItems,D=e.setErrors,C=e.subheaderChildren,N=e.title,I=e.uuid,B=(0,T.i)().width,Y="dashboard_after_width_".concat(I),U="dashboard_before_width_".concat(I),W=(0,o.useRef)(null),F=(0,o.useState)(P?y:(0,j.U2)(Y,y)),H=F[0],Q=F[1],X=(0,o.useState)(!1),V=X[0],G=X[1],J=(0,o.useState)(k?Math.max((0,j.U2)(U,w),13*O.iI):null),$=J[0],K=J[1],q=(0,o.useState)(!1),z=q[0],ee=q[1],ne=(0,o.useState)(null)[1],te=g.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];Z?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(Z))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return N}}]),(0,o.useEffect)((function(){null===W||void 0===W||!W.current||V||z||null===ne||void 0===ne||ne(W.current.getBoundingClientRect().width)}),[V,H,z,$,W,ne,B]),(0,o.useEffect)((function(){V||(0,j.t8)(Y,H)}),[p,V,H,Y]),(0,o.useEffect)((function(){z||(0,j.t8)(U,$)}),[z,$,U]);var ue=(0,m.Z)(y);return(0,o.useEffect)((function(){P&&ue!==y&&Q(y)}),[P,y,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{title:N}),(0,f.jsx)(s.Z,{breadcrumbs:oe,menuItems:L,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===A||void 0===A?void 0:A.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:A,showMore:!0})}),(0,f.jsx)(c.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(h.Z,{after:r,afterHeightOffset:S.Mz,afterHidden:p,afterMousedownActive:V,afterWidth:H,before:k,beforeHeightOffset:S.Mz,beforeMousedownActive:z,beforeWidth:d.k1+(k?$:0),headerOffset:x,hideAfterCompletely:!0,leftOffset:k?d.k1:null,mainContainerHeader:M,mainContainerRef:W,setAfterMousedownActive:G,setAfterWidth:Q,setBeforeMousedownActive:ee,setBeforeWidth:K,children:[C&&(0,f.jsx)(v,{children:C}),_]})})]}),R&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===D||void 0===D?void 0:D(null)},children:(0,f.jsx)(l.Z,E(E({},R),{},{onClose:function(){return null===D||void 0===D?void 0:D(null)}}))})]})}},32821:function(e,n,t){"use strict";t.d(n,{IO:function(){return f},V3:function(){return d},a9:function(){return l},jN:function(){return a},lr:function(){return s},u$:function(){return p}});var r=t(17717),i=t(86422),o=t(73828),u=t(90211);function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=n||(t?null:null===e||void 0===e?void 0:e.name);if(null!==e&&void 0!==e&&e.parent){var o=[e.parent.name];return(null===i||void 0===i?void 0:i.length)>=1&&o.push(i),l(e.parent,o.join(r.sep))}return i}function c(e){return null===e||void 0===e?void 0:e.split(r.sep).slice(1).join(r.sep)}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=l(e,n,t);return c(r)}function s(e){var n,t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=l(e,c).split(r.sep);if(!s)return null;if(1===s.length)(s=null===e||void 0===e||null===(t=e.path)||void 0===t?void 0:t.split(r.sep))&&(n=s[0]===i.tf.CUSTOM?s[0]:(0,u.C5)(s[0]||""));else if(s[1]===i.tf.CUSTOM)n=s[1];else{var d=s[1];n=i.tf.DBT===d?d:(0,u.C5)(d||"")}if(!s||i.tf.DBT===n)return null;var f="";f=s.length>=3?s.slice(2,s.length).join(r.sep):s[s.length-1];var p=["\\.".concat(o.Lu.PY),"\\.".concat(o.Lu.R),"\\.".concat(o.Lu.SQL),"\\.".concat(o.Lu.YAML),"\\.".concat(o.Lu.YML)].join("|"),v=new RegExp("".concat(p,"$")),h=a?i.Q3:i.$W;if(h.concat(i.tf.DBT).includes(n)&&f.match(v)){var b=f.lastIndexOf("."),g=f.slice(b+1);return{language:o.nB[g],type:n,uuid:f.slice(0,b)}}}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=l(e,n).split(r.sep);if(t[1]){var c=(0,u.C5)(t[n?0:1]);t[1]===i.tf.DBT&&(c=i.tf.DBT);var a=t[t.length-1],s=new RegExp(".".concat(o.Lu.YAML,"$")),d=new RegExp(".".concat(o.Lu.R,"$")),f=new RegExp(".".concat(o.Lu.SQL,"$")),p=new RegExp(".".concat(o.Lu.MD,"$"));if(a.match(s)&&i.VZ.includes(c))return{type:c,uuid:a.replace(s,"")};if(a.match(d)&&i.J8.includes(c))return{type:c,uuid:a.replace(d,"")};if(a.match(f)&&i.HX.includes(c)){var v=a.replace(/[.]/g,"_"),h=c===i.tf.DBT?t.slice(2,-1).join("_").concat("_".concat(v)):a.replace(f,"");return{type:c,uuid:h}}return a.match(p)&&c===i.tf.MARKDOWN?{type:c,uuid:a.replace(p,"")}:void 0}}function f(e,n){var t=e.split("."),i=t[t.length-1];o.n6.includes(i)&&t.pop();var u=t.join("").split(r.sep),l=u.slice(1,u.length).join("");return n.find((function(e){return e.uuid===l}))}function p(e){var n=e||{},t=n.language,r=n.name,l=n.type;if(r&&t&&l){var c=l===i.tf.CUSTOM?l:"".concat(l,"s"),a=o.JD[t],s=(0,u.kE)(r);return"".concat(c,"/").concat(s,".").concat(a)}}},91207:function(e,n,t){"use strict";t.d(n,{Z:function(){return N}});var r=t(82394),i=t(75582),o=t(17717),u=t(82684),l=t(37958),c=t(83455),a=t(35490),s=t(86422),d=t(60328),f=t(38626),p=t(93461),v=t(67971),h=t(28598),b=f.default.div.withConfig({displayName:"ButtonGroup__ButtonGroupStyle",componentId:"sc-15vbmc8-0"})([""]),g=f.default.div.withConfig({displayName:"ButtonGroup__VerticalDivider",componentId:"sc-15vbmc8-1"})(["width:1px;"]),m=function(e){var n=e.children,t=e.divider,r=u.Children.toArray(n).length;return(0,h.jsx)(b,{children:(0,h.jsx)(v.ZP,{children:u.Children.map(n,(function(e,n){return e&&(0,h.jsxs)(p.Z,{children:[n>=1&&t&&(0,h.jsx)(g,{}),u.cloneElement(e,{borderRadiusLeft:r>=2&&0===n,borderRadiusRight:r>=2&&n===r-1,halfPaddingLeft:r>=2&&0!==n,halfPaddingRight:r>=2&&n!==r-1,noBorder:r>=2&&n>0&&n<r-1,noBorderRight:r>=2&&n!==r-1})]},"button-group-child-".concat(n))}))})})},S=t(57722),O=t(73828),j=t(11135),T=t(98781),y=t(86673),E=t(82531),P=t(16115),k=t(94353),w=t(60701),Z=t(55512),_=t(24224),R=t(32821),L=t(90211),x=t(96510),M=t(51504),A=t(41150);function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var N=function(e){var n=e.active,t=e.addNewBlock,f=e.disableRefreshWarning,p=e.fetchPipeline,b=e.fetchVariables,g=e.filePath,D=e.hideHeaderButtons,N=e.onContentChange,I=e.onUpdateFileSuccess,B=e.openSidekickView,Y=e.pipeline,U=e.saveFile,W=e.selectedFilePath,F=e.sendTerminalMessage,H=e.setDisableShortcuts,Q=e.setErrors,X=e.setFilesTouched,V=e.setSelectedBlock,G=(0,l.j)("apiReloads"),J=(0,i.Z)(G,2)[1],$=(0,u.useState)(null),K=$[0],q=$[1],z=(0,u.useState)(!1),ee=z[0],ne=(z[1],(0,u.useRef)(null)),te=(0,u.useMemo)((function(){return new a.Z}),[]),re=(0,u.useMemo)((function(){return{api_key:k.l,token:te.decodedToken.token}}),[te]),ie=E.ZP.statuses.list().data,oe=(0,u.useMemo)((function(){var e,n;return null===ie||void 0===ie||null===(e=ie.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.repo_path}),[ie]),ue=E.ZP.file_contents.detail(g).data;(0,u.useEffect)((function(){null!==ue&&void 0!==ue&&ue.file_content&&q(ue.file_content)}),[ue]);var le=(0,u.useState)(null===K||void 0===K?void 0:K.content),ce=le[0],ae=le[1],se=(0,u.useCallback)((function(e){ae(e),N&&(null===N||void 0===N||N(e))}),[N]),de=(0,u.useState)(!1),fe=de[0],pe=de[1];(0,u.useEffect)((function(){n&&H&&(null===H||void 0===H||H(!0))}),[n,H]),(0,u.useEffect)((function(){var e;W&&(null===ne||void 0===ne||null===(e=ne.current)||void 0===e||e.scrollIntoView())}),[W]);var ve=(0,c.Db)(E.ZP.file_contents.useUpdate((null===K||void 0===K?void 0:K.path)&&encodeURIComponent(null===K||void 0===K?void 0:K.path)),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(e){var n=e.file_content;J((function(e){return C(C({},e),{},(0,r.Z)({},"FileVersions/".concat(null===K||void 0===K?void 0:K.path),Number(new Date)))})),I&&(null===I||void 0===I||I(n))},onErrorCallback:function(e,n){return null===Q||void 0===Q?void 0:Q({errors:n,response:e})}})}}),he=(0,i.Z)(ve,1)[0],be=(0,u.useCallback)((function(e,n){if(U)return U(e,n);he({file_content:C(C({},n),{},{content:e})}).then((function(){decodeURIComponent(g).split(o.sep).pop()===O.dT.METADATA_YAML&&b&&(null===b||void 0===b||b())})),X((function(e){return C(C({},e),{},(0,r.Z)({},null===n||void 0===n?void 0:n.path,!1))})),pe(!1)}),[b,g,U,X,he]),ge=(0,u.useMemo)((function(){return(0,Z.lU)()}),[]),me=(0,u.useMemo)((function(){var e,n,t,r;return null===(null===K||void 0===K||null===(e=K.path)||void 0===e?void 0:e.match(ge))?O.Lu.TXT:null===K||void 0===K||null===(n=K.path)||void 0===n||null===(t=n.match(ge))||void 0===t||null===(r=t[0])||void 0===r?void 0:r.split(".")[1]}),[ge,K]),Se=(0,u.useMemo)((function(){if(null!==K&&void 0!==K&&K.path)return(0,h.jsx)(S.Z,{autoHeight:!0,language:O.nB[me],onChange:function(e){se(e),X((function(e){return C(C({},e),{},(0,r.Z)({},null===K||void 0===K?void 0:K.path,!0))})),pe(!0)},onSave:function(e){be(e,K)},selected:!0,textareaFocused:!0,value:(0,L.Pb)(null===K||void 0===K?void 0:K.content)?JSON.stringify(JSON.parse(null===K||void 0===K?void 0:K.content),null,2):null===K||void 0===K?void 0:K.content,width:"100%"})}),[K,me,be,se,X]),Oe=null!==Y&&void 0!==Y&&Y.blocks?(0,_.sE)(null===Y||void 0===Y?void 0:Y.blocks,(function(e){var n=e.type;return s.tf.DATA_EXPORTER===n})):null,je=(0,c.Db)(E.ZP.blocks.pipelines.useUpdate(null===Y||void 0===Y?void 0:Y.uuid,null===Oe||void 0===Oe?void 0:Oe.uuid),{onSuccess:function(e){return(0,x.wD)(e,{callback:function(){null===p||void 0===p||p()}})}}),Te=(0,i.Z)(je,1)[0],ye=t&&Y&&(me===O.Lu.PY||me===O.Lu.SQL||(me===O.Lu.YAML||me===O.Lu.R)&&(0,R.V3)(K,null===K||void 0===K?void 0:K.path))&&(0,Z.ck)(K.path.split(o.sep))!==s.tf.SCRATCHPAD&&(0,R.lr)(K)&&(0,h.jsx)(d.Z,{onClick:function(){var e=(null===Y||void 0===Y?void 0:Y.type)===T.qL.INTEGRATION,n=(0,Z.TU)(K,oe,Y);t(n,(function(n){e&&Oe&&Te({block:C(C({},Oe),{},{upstream_blocks:[n.uuid]})}),null===V||void 0===V||V(n)}))},primary:!0,children:"Add to current pipeline"}),Ee=F&&(0,h.jsx)(y.Z,{m:2,children:(0,h.jsx)(j.ZP,{disabled:!oe,inline:!0,loading:ee,onClick:function(){null===B||void 0===B||B(w.cH.TERMINAL),null===F||void 0===F||F(JSON.stringify(C(C({},re),{},{command:["stdin","pip install -r ".concat(oe,"/requirements.txt\r")]})))},title:oe?"Pip install packages from your saved requirements.txt file (\u2318+S to save).":"Please use right panel terminal to install packages.",uuid:"FileEditor/InstallPackages",children:"Install packages"})}),Pe="FileEditor/".concat(null===K||void 0===K?void 0:K.path),ke=(0,A.y)(),we=ke.registerOnKeyDown,Ze=ke.unregisterOnKeyDown;return(0,u.useEffect)((function(){return function(){Ze(Pe)}}),[Ze,Pe]),we(Pe,(function(e,t){if(n&&!f)if((0,M.y)([P.zX,P.Um],t)||(0,M.y)([P.PQ,P.Um],t))e.preventDefault(),be(ce,K);else if(fe&&(0,M.y)([P.zX,P.hS],t)){e.preventDefault();var r="".concat(K.path," has changes that are unsaved. ")+"Click cancel and save your changes before reloading page.";"undefined"!==typeof location&&window.confirm(r)&&location.reload()}}),[n,ce,f,K,be,fe]),(0,h.jsxs)("div",{ref:ne,children:[!D&&(0,h.jsx)(y.Z,{p:2,children:(0,h.jsxs)(v.ZP,{justifyContent:"space-between",children:[(0,h.jsxs)(m,{children:[ye,(0,h.jsx)(d.Z,{disabled:!ce,onClick:function(e){e.preventDefault(),be(ce,K)},title:ce?null:"No changes have been made to this file.",children:"Save file content"})]}),B&&(0,h.jsx)(m,{children:(0,h.jsx)(d.Z,{compact:!0,onClick:function(){B(w.cH.FILE_VERSIONS)},small:!0,title:"View previous changes to this file.",children:"Show versions"})})]})}),Se,g===O.dT.REQS_TXT&&Ee]})}},55512:function(e,n,t){"use strict";t.d(n,{TU:function(){return f},ck:function(){return s},lU:function(){return d}});var r=t(21831),i=t(17717),o=t(86422),u=t(98781),l=t(73828),c=t(24224),a=t(90211),s=function(e){var n=e[0];return n===o.tf.DBT||n===o.tf.CUSTOM?n:e[0].slice(0,-1)};function d(){return new RegExp(Object.keys(l.nB).map((function(e){return".(".concat(e,")$")})).join("|"))}function f(e,n,t){var f,p,v=null===e||void 0===e||null===(f=e.path.match(d())[0])||void 0===f?void 0:f.split(".")[1],h=t.type===u.qL.INTEGRATION,b=(0,c.sE)(null===t||void 0===t?void 0:t.blocks,(function(e){var n=e.type;return o.tf.DATA_EXPORTER===n})),g=e.path.replace(n,"").split(i.sep),m=e.path.split(i.sep)[0]===o.tf.DBT,S=(p=g)[0]===o.tf.DBT?p.slice(1).join(i.sep):function(e){return e.at(-1)}(p).split(".")[0];if(g.length>=3&&!m){var O=g.slice(1,g.length-1).join(i.sep);S="".concat(O,"/").concat(S)}var j=s(e.path.split(i.sep)),T={configuration:{file_path:m?S:null},language:l.nB[v],name:(0,a.wE)(S),type:j};if(j===o.tf.CUSTOM&&(T.color=o.Lq.TEAL),h){var y=(0,c.sE)(t.blocks,(function(e){var n=e.type;return o.tf.DATA_LOADER===n})),E=(0,c.sE)(t.blocks,(function(e){var n=e.type;return o.tf.TRANSFORMER===n})),P=[];E?P.push(E.uuid):null!==b&&void 0!==b&&b.upstream_blocks?P.push.apply(P,(0,r.Z)(b.upstream_blocks)):y&&P.push(y.uuid),T.upstream_blocks=P}return T}},84392:function(e,n,t){"use strict";t.d(n,{HF:function(){return u},L6:function(){return r}});var r,i=t(46336),o=t(22341);function u(e,n,t){var u=e.owner,l=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&l.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),n==i.k.MAIN&&l.push({Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),l}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(r||(r={}))},3849:function(e,n,t){"use strict";var r=t(82684),i=t(1210),o=t(82531),u=t(49125),l=t(84392),c=t(9736),a=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,s=void 0===t?[]:t,d=e.children,f=e.errors,p=e.pageName,v=e.subheaderChildren,h=o.ZP.statuses.list().data,b=(0,r.useMemo)((function(){var e,n;return null===h||void 0===h||null===(e=h.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[h]),g=(0,c.PR)()||{};return(0,a.jsx)(i.Z,{before:n,beforeWidth:n?50*u.iI:0,breadcrumbs:s,errors:f,navigationItems:(0,l.HF)(g,b,p),subheaderChildren:v,title:"Workspaces",uuid:"workspaces/index",children:d})}},73828:function(e,n,t){"use strict";t.d(n,{JD:function(){return h},Lu:function(){return o},PF:function(){return f},dT:function(){return u},n6:function(){return a},nB:function(){return v},oy:function(){return p},xF:function(){return d}});var r,i,o,u,l=t(82394),c=t(86422);!function(e){e.CSV="csv",e.JSON="json",e.MD="md",e.PY="py",e.R="r",e.SQL="sql",e.TXT="txt",e.YAML="yaml",e.YML="yml"}(o||(o={})),function(e){e.INIT_PY="__init__.py",e.METADATA_YAML="metadata.yaml",e.REQS_TXT="requirements.txt"}(u||(u={}));var a=[o.PY,o.SQL],s=[o.JSON,o.MD,o.PY,o.R,o.SQL,o.TXT,o.YAML,o.YML],d=new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),f=(new RegExp(s.map((function(e){return".".concat(e,"$")})).join("|")),"charts"),p="pipelines",v=(r={},(0,l.Z)(r,o.MD,c.t6.MARKDOWN),(0,l.Z)(r,o.JSON,o.JSON),(0,l.Z)(r,o.PY,c.t6.PYTHON),(0,l.Z)(r,o.R,c.t6.R),(0,l.Z)(r,o.SQL,c.t6.SQL),(0,l.Z)(r,o.TXT,"text"),(0,l.Z)(r,o.YAML,c.t6.YAML),(0,l.Z)(r,o.YML,c.t6.YAML),r),h=(i={},(0,l.Z)(i,c.t6.MARKDOWN,o.MD),(0,l.Z)(i,c.t6.PYTHON,o.PY),(0,l.Z)(i,c.t6.R,o.R),(0,l.Z)(i,c.t6.SQL,o.SQL),(0,l.Z)(i,c.t6.YAML,o.YAML),(0,l.Z)(i,"text",o.TXT),i)},46336:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2"}(r||(r={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},3938:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(38860),o=t.n(i),u=t(82684),l=t(91207),c=t(41788),a=t(3849),s=t(84392),d=t(28598);function f(){var e=(0,u.useState)(null),n=e[0];e[1];return(0,d.jsx)(a.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Settings"}}],errors:n,pageName:s.L6.SETTINGS,children:(0,d.jsx)(l.Z,{active:!0,filePath:"metadata.yaml",selectedFilePath:"metadata.yaml",setFilesTouched:function(){return null}})})}f.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,c.Z)(f)},37958:function(e,n,t){"use strict";t.d(n,{j:function(){return r}});var r=(0,t(44152).r)({apiReloads:{}}).useGlobalState},1116:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/settings",function(){return t(3938)}])}},function(e){e.O(0,[844,9902,8789,4398,1424,1005,6422,7722,9774,2888,179],(function(){return n=1116,e(e.s=n);var n}));var n=e.O();_N_E=n}]);