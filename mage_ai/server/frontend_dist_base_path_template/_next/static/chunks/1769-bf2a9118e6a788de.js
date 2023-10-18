"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1769],{81769:function(n,e,t){t.d(e,{Z:function(){return rn}});var i=t(82394),r=t(82684),l=t(85854),o=t(21831),c=t(65701),u=t(1254),a=t(97618),d=t(55485),s=t(70652),v=t(54193),h=t(44085),f=t(38276),j=t(30160),p=t(35576),x=t(17488),m=t(69650),b=t(70515),Z=t(28598);function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var w=function(n){var e=n.interaction,t=n.setVariables,l=n.showVariableUUID,o=n.variables,c=e||{inputs:{},layout:[],variables:{}},u=c.inputs,g=c.layout,w=c.variables,O=(0,r.useMemo)((function(){var n=[];return null===g||void 0===g||g.forEach((function(e,c){var g=[];null===e||void 0===e||e.forEach((function(n,e){var c,O=n.variable,P=(n.width,(null===w||void 0===w?void 0:w[O])||{uuid:O}),I=P.description,C=P.input,k=P.name,D=P.required,E=(null===u||void 0===u?void 0:u[C])||{options:[],style:null,type:null},S=E.options,M=E.style,B=E.type,R="".concat(O,"-").concat(B),T={required:D},_=[],N="undefined"!==typeof o?null===o||void 0===o?void 0:o[O]:void 0;if(v.bB.CHECKBOX===B)_.push((0,Z.jsx)(d.ZP,{alignItems:"center",children:null===S||void 0===S?void 0:S.map((function(n){var e=n.label,r=n.value,l=(null===o||void 0===o?void 0:o[O])||{};console.log(r,l);var c=(null===l||void 0===l?void 0:l[r])||(null===l||void 0===l?void 0:l[String(r)]);return(0,Z.jsx)(f.Z,{mr:b.cd,children:(0,Z.jsx)(s.Z,y(y({},T),{},{label:e,checked:!!c,onClick:function(){return null===t||void 0===t?void 0:t((function(n){return y(y({},n),{},(0,i.Z)({},O,y(y({},l),{},(0,i.Z)({},r,!c))))}))}}))},String(r||e))}))},"".concat(R,"-").concat(B)));else if(v.bB.TEXT_FIELD===B)_.push((0,Z.jsx)(d.ZP,{flexDirection:"column",children:null!==M&&void 0!==M&&M.multiline?(0,r.createElement)(p.Z,y(y({},T),{},{key:"".concat(R,"-").concat(B),onChange:function(n){return null===t||void 0===t?void 0:t((function(e){return y(y({},e),{},(0,i.Z)({},O,n.target.value))}))},value:N})):(0,r.createElement)(x.Z,y(y({},T),{},{key:"".concat(R,"-").concat(B),onChange:function(n){return null===t||void 0===t?void 0:t((function(e){return y(y({},e),{},(0,i.Z)({},O,n.target.value))}))},type:(null===M||void 0===M?void 0:M.input_type)||null,value:N}))},"".concat(R,"-").concat(B)));else if(v.bB.DROPDOWN_MENU===B)_.push((0,r.createElement)(h.Z,y(y({},T),{},{key:"".concat(R,"-").concat(B),onChange:function(n){return null===t||void 0===t?void 0:t((function(e){return y(y({},e),{},(0,i.Z)({},O,n.target.value))}))},value:N}),(0,Z.jsx)("option",{value:""}),null===S||void 0===S?void 0:S.map((function(n){var e=n.label,t=n.value;return(0,Z.jsx)("option",{value:String(t||e),children:String(e||t)},String(t||e))}))));else if(v.bB.SWITCH===B){var L;g.push((0,Z.jsx)(f.Z,{mt:e>=1?b.cd:0,children:(0,Z.jsxs)(d.ZP,{alignItems:"center",fullWidth:!0,children:[(0,r.createElement)(m.Z,y(y({},T),{},{checked:N,compact:!0,key:"".concat(R,"-").concat(B),onCheck:function(n){return null===t||void 0===t?void 0:t((function(e){return y(y({},e),{},(0,i.Z)({},O,n(N)))}))}})),(k||I)&&(0,Z.jsx)(f.Z,{ml:b.cd}),(k||I||l)&&(0,Z.jsxs)(d.ZP,{alignItems:"flex-start",flexDirection:"row",fullWidth:!0,justifyContent:"space-between",children:[(k||I)&&(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",children:[k&&(0,Z.jsx)(j.ZP,{bold:!0,large:!0,success:!0,children:k}),I&&(null===I||void 0===I||null===(L=I.split("\n"))||void 0===L?void 0:L.map((function(n){return(0,Z.jsx)(j.ZP,{default:!0,children:n},n)})))]}),l&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(j.ZP,{monospace:!0,muted:!0,small:!0,children:O})]})]})]})},R))}(null===_||void 0===_?void 0:_.length)>=1&&g.push((0,Z.jsxs)(f.Z,{mt:e>=1?b.cd:0,children:[(k||I||l)&&(0,Z.jsxs)(d.ZP,{alignItems:"flex-start",justifyContent:"space-between",children:[(0,Z.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,Z.jsxs)(f.Z,{mb:1,children:[k&&(0,Z.jsx)(j.ZP,{bold:!0,large:!0,success:!0,children:k}),I&&(null===I||void 0===I||null===(c=I.split("\n"))||void 0===c?void 0:c.map((function(n){return(0,Z.jsx)(j.ZP,{default:!0,children:n},n)})))]})}),(0,Z.jsx)(f.Z,{mr:b.cd}),l&&(0,Z.jsx)(j.ZP,{monospace:!0,muted:!0,small:!0,children:O})]}),_]},R))})),n.push((0,Z.jsx)(f.Z,{mt:c>=1?b.Mq:0,children:g},"row-".concat(c)))})),n}),[u,g,t,l,w,o]);return(0,Z.jsx)(Z.Fragment,{children:O})},O=t(72473),P=t(38626),I=t(44897),C=t(42631),k=t(55283),D=(b.iI,P.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ry80xj-0"})([""," border-radius:","px;position:relative;border-style:solid;border-width:1px;overflow:hidden;",""],k.Kf,C.n_,(function(n){return"\n    background-color: ".concat((n.theme.background||I.Z.background).panel,";\n  ")}))),E=P.default.div.withConfig({displayName:"indexstyle__HeadlineStyle",componentId:"sc-1ry80xj-1"})(["",""],(function(n){return"\n    background-color: ".concat((n.theme.background||I.Z.background).chartBlock,";\n  ")})),S=P.default.div.withConfig({displayName:"indexstyle__DottedLineStyle",componentId:"sc-1ry80xj-2"})(["",""],(function(n){return"\n    border: 1px dashed ".concat((n.theme.borders||I.Z.borders).light,";\n  ")})),M=P.default.div.withConfig({displayName:"indexstyle__LayoutItemStyle",componentId:"sc-1ry80xj-3"})(["",""],(function(n){return!n.disableDrag&&"\n    &:hover {\n      cursor: move;\n    }\n  "}));var B=function(n){var e=n.columnLayoutSettings,t=n.drag,r=n.drop,l=n.input,o=n.setVariables,c=n.showVariableUUID,u=n.variable,a=n.variables,d=n.width,s=null===u||void 0===u?void 0:u.input,v=null===e||void 0===e?void 0:e.variable;return(0,Z.jsx)(M,{disableDrag:!t,ref:r,style:{width:d},children:(0,Z.jsx)(D,{ref:t,style:{marginLeft:b.iI,marginRight:b.iI},children:(0,Z.jsxs)(f.Z,{p:b.cd,children:[!!t&&(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(O.o0,{default:!0,size:2*b.iI})}),(0,Z.jsx)(w,{interaction:{inputs:(0,i.Z)({},s,l),layout:[[{variable:v,width:1}]],variables:(0,i.Z)({},v,u)},setVariables:o,showVariableUUID:c,variables:a})]})})})},R=t(75582),T=t(26304),_=t(10975),N=t(14567),L=["columnIndex","columnsInRow","onDrop","rowIndex"];function U(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function V(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?U(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var A=function(n){var e=n.columnIndex,t=(n.columnsInRow,n.onDrop),i=n.rowIndex,r=(0,T.Z)(n,L),l=(0,_.c)((function(){return{collect:function(n){return{isDragging:!!n.isDragging()}},item:{columnIndex:e,rowIndex:i},type:"InteractionLayoutItem"}}),[e,i]),o=(0,R.Z)(l,2),c=(o[0],o[1]),u=(0,N.L)((function(){return{accept:"InteractionLayoutItem",drop:function(n){return null===t||void 0===t?void 0:t(n)}}}),[t]),a=(0,R.Z)(u,2)[1];return(0,Z.jsx)(B,V(V({},r),{},{drag:c,drop:a}))};var F=function(n){var e=n.children,t=n.onDrop,i=n.width,r=(0,N.L)((function(){return{accept:"InteractionLayoutItem",drop:function(n){return null===t||void 0===t?void 0:t(n)}}}),[t]),l=(0,R.Z)(r,2)[1];return(0,Z.jsx)("div",{ref:l,style:{width:i},children:(0,Z.jsxs)(f.Z,{p:b.cd,children:[e,(0,Z.jsx)(S,{})]})})},W=t(86735),q=t(19183);var X=function(n){var e=n.containerRef,t=n.containerWidth,i=n.interaction,l=n.setVariables,s=n.showVariableUUID,v=n.updateLayout,h=n.variables,j=(0,q.i)(),p=(0,r.useState)(null),x=p[0],m=p[1];(0,r.useEffect)((function(){var n;null!==e&&void 0!==e&&e.current?m(null===e||void 0===e||null===(n=e.current)||void 0===n?void 0:n.getBoundingClientRect()):t&&m({width:t})}),[t,e,j]);var b=(0,r.useMemo)((function(){return{inputs:null===i||void 0===i?void 0:i.inputs,layout:null===i||void 0===i?void 0:i.layout,variables:null===i||void 0===i?void 0:i.variables}}),[i]),g=b.inputs,y=b.layout,w=b.variables,O=(0,r.useCallback)((function(n,e,t,i,r){var l=(0,o.Z)(y||[]),c=l[n]||[],u=c[e];if(null!==r&&void 0!==r&&r.newRow){var a,d=(0,W.oM)(c,e);return l[n]=d,-1===t?l.unshift([u]):t>=(null===(a=l)||void 0===a?void 0:a.length)?l.push([u]):l=(0,W.VS)([u],t,l),0===(null===d||void 0===d?void 0:d.length)&&(l=(0,W.oM)(l,t<n?n+1:n)),void(null===v||void 0===v||v(l))}if(n===t&&e!==i){var s=(0,W.oM)(c,e);l[n]=(0,W.Hk)(u,i>e?i:i-1,s)}else{var h=(0,W.oM)(c,e);l[n]=h;var f=(0,W.Hk)(u,i,l[t]);l[t]=f,0===(null===h||void 0===h?void 0:h.length)&&(l=(0,W.oM)(l,n))}n===t&&e===i||null===v||void 0===v||v(l)}),[y,v]),P=(0,r.useMemo)((function(){return(null===y||void 0===y?void 0:y.length)||0}),[y]),I=(0,r.useMemo)((function(){var n=[];return null===y||void 0===y||y.forEach((function(e,t){var i=(null===e||void 0===e?void 0:e.length)||0,r=[],o=(0,W.Sm)(null===e||void 0===e?void 0:e.map((function(n){return n.width||0}))),c=(null===e||void 0===e?void 0:e.length)||0,u=null===x||void 0===x?void 0:x.width;null===e||void 0===e||e.forEach((function(n,e){var d=n||{variable:null,width:0},f=d.variable,j=d.max_width_percentage,p=d.width,x=null===w||void 0===w?void 0:w[f],m=null===g||void 0===g?void 0:g[null===x||void 0===x?void 0:x.input],b="undefined"!==typeof j&&null!==j?j>=0?j/100:j:null,y=p/o,P=b&&y>b?b:y,I=v?A:B,C=Math.floor(P*u)-(v?Math.round(24/i):Math.round(50/i));r.push((0,Z.jsx)(a.Z,{flexBasis:"".concat(Math.floor(100*P),"%"),children:(0,Z.jsx)(I,{columnIndex:e,columnLayoutSettings:n,columnsInRow:c,disableDrag:!!v,first:0===e,input:m,onDrop:function(n){var i=n.columnIndex,r=n.rowIndex;O(r,i,t,e)},rowIndex:t,setVariables:l,showVariableUUID:s,variable:x,variables:h,width:C})},"row-".concat(t,"-column-").concat(e,"-").concat(f)))})),0===t&&v&&n.push((0,Z.jsx)(F,{onDrop:function(n){var e=n.columnIndex,i=n.rowIndex;O(i,e,t-1,0,{newRow:!0})}},"layout-divider-".concat(t,"-top"))),n.push((0,Z.jsx)(d.ZP,{children:r},"row-".concat(t))),v?n.push((0,Z.jsx)(F,{onDrop:function(n){var e=n.columnIndex,i=n.rowIndex;O(i,e,t+1,0,{newRow:!0})}},"layout-divider-".concat(t,"-bottom"))):t<P-1&&n.push((0,Z.jsx)(f.Z,{py:2},"layout-divider-".concat(t,"-bottom")))})),n}),[x,g,y,O,P,l,s,v,w,h]);return v?(0,Z.jsx)(c.W,{backend:u.PD,children:I}):(0,Z.jsx)(Z.Fragment,{children:I})},H=t(32013),K=t(98777),Y=t(71180),G=t(15338),z=t(81728),J=t(3314);function Q(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function $(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Q(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var nn=function(n){var e,t,c,u,g=n.children,y=n.containerWidth,P=n.interaction,I=n.removeBlockInteraction,C=n.updateInteraction,k=(0,r.useRef)(null),S=(0,r.useRef)(null),M=(0,r.useRef)(null),B=(0,r.useRef)(null),T=(0,r.useRef)(null),_=(0,r.useState)(!1),N=_[0],L=_[1],U=(0,r.useState)(!1),V=U[0],A=U[1],F=(0,r.useState)(null),q=F[0],Q=F[1],nn=(0,r.useState)(null),en=nn[0],tn=nn[1],rn=(0,r.useState)(null),ln=rn[0],on=rn[1],cn=(0,r.useState)(null),un=cn[0],an=cn[1],dn=(0,r.useState)(null),sn=dn[0],vn=dn[1],hn=(0,r.useState)({}),fn=hn[0],jn=hn[1],pn=P||{layout:null,variables:null,uuid:null},xn=pn.inputs,mn=pn.layout,bn=pn.uuid,Zn=pn.variables,gn=(0,r.useCallback)((function(n){return C($($({},P),n))}),[P,C]),yn=(0,r.useCallback)((function(n,e){var t=$({},Zn),i=$({},xn);return!e?(delete i[n],Object.entries(t||{}).forEach((function(e){var i=(0,R.Z)(e,2),r=i[0],l=i[1];n===(null===l||void 0===l?void 0:l.input)&&(t[r]=$($({},l),{},{input:null}))}))):i[n]=$($({},null===i||void 0===i?void 0:i[n]),e),gn({inputs:i})}),[xn,gn,Zn]),wn=(0,r.useCallback)((function(n,e){var t=[],i=$({},Zn),r=!e;return r?delete i[n]:i[n]=$($({},null===i||void 0===i?void 0:i[n]),e),null===mn||void 0===mn||mn.forEach((function(e){var i=[];null===e||void 0===e||e.forEach((function(e){r&&n===(null===e||void 0===e?void 0:e.variable)||i.push(e)})),(null===i||void 0===i?void 0:i.length)>=1&&t.push(i)})),gn({layout:t,variables:i})}),[mn,gn,Zn]),On=(0,r.useMemo)((function(){return Object.entries(xn||{}).map((function(n,e){var t=(0,R.Z)(n,2),i=t[0],r=t[1]||{options:[],style:null,type:null},l=r.options,o=r.style,c=r.type;return(0,Z.jsx)(f.Z,{mt:e>=1?b.cd:0,children:(0,Z.jsxs)(D,{ref:q===i?S:null,children:[(0,Z.jsx)(E,{children:(0,Z.jsx)(f.Z,{p:b.cd,children:(0,Z.jsxs)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(j.ZP,{large:!0,monospace:!0,children:i}),(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(Y.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return yn(i,null)},children:(0,Z.jsx)(O.x8,{default:!0})})]})})}),(0,Z.jsx)(G.Z,{muted:!0}),(0,Z.jsx)(f.Z,{p:b.cd,children:(0,Z.jsxs)(d.ZP,{fullWidth:!0,children:[(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Type"})}),(0,Z.jsx)(h.Z,{onChange:function(n){return yn(i,{type:n.target.value})},placeholder:"Choose a type of input",value:c,children:v.qS.map((function(n){return(0,Z.jsx)("option",{value:n,children:(0,z.vg)(n)},n)}))})]}),(0,Z.jsx)(f.Z,{mr:b.Mq}),(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",children:[v.bB.TEXT_FIELD===c&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(f.Z,{mb:b.cd,children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsxs)(j.ZP,{bold:!0,default:!0,children:["Style ",(0,z.J3)(c)]})}),(0,Z.jsx)(s.Z,{checked:null===o||void 0===o?void 0:o.multiline,label:"Allow writing multiple lines",onClick:function(){return yn(i,{style:$($({},o),{},{multiline:!(null!==o&&void 0!==o&&o.multiline)})})}})]}),(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(f.Z,{mb:1,children:[(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Text field type"}),(null===o||void 0===o?void 0:o.multiline)&&(0,Z.jsx)(j.ZP,{muted:!0,small:!0,children:"Not available for multiline text field."})]}),(0,Z.jsx)(s.Z,{checked:v.al.NUMBER===(null===o||void 0===o?void 0:o.input_type),disabled:!(null===o||void 0===o||!o.multiline),label:"Numbers only",onClick:function(){return yn(i,{style:$($({},o),{},{input_type:v.al.NUMBER===(null===o||void 0===o?void 0:o.input_type)?null:v.al.NUMBER})})}})]})]}),[v.bB.CHECKBOX,v.bB.DROPDOWN_MENU].includes(c)&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsxs)(j.ZP,{bold:!0,default:!0,children:["Options for ",(0,z.J3)(c)]})}),null===l||void 0===l?void 0:l.map((function(n,e){var t=n.label,r=n.value;return(0,Z.jsx)(f.Z,{mt:e>=1?1:0,children:(0,Z.jsxs)(d.ZP,{alignItems:"center",flexDirection:"row",children:[(0,Z.jsx)(Y.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,onClick:function(){return yn(i,{options:(0,W.oM)(l,e)})},children:(0,Z.jsx)(O.x8,{})}),(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(j.ZP,{default:!0,children:"Label"}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(x.Z,{compact:!0,onChange:function(n){var t;return yn(i,{options:null===(t=l||[])||void 0===t?void 0:t.map((function(t,i){return e===i?$($({},t),{},{label:n.target.value}):t}))})},value:t||""}),(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(j.ZP,{default:!0,children:"Value"}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(x.Z,{compact:!0,onChange:function(n){var t;return yn(i,{options:null===(t=l||[])||void 0===t?void 0:t.map((function(t,i){return e===i?$($({},t),{},{value:n.target.value}):t}))})},value:r||""})]})},"".concat(i,"-option-").concat(e))})),(0,Z.jsx)(f.Z,{mt:1,children:(0,Z.jsx)(Y.Z,{beforeIcon:(0,Z.jsx)(O.mm,{}),compact:!0,onClick:function(){return yn(i,{options:(l||[]).concat({label:"",value:""})})},secondary:!0,children:"Add option"})})]})]})]})})]})},"".concat(i,"-").concat(e))}))}),[xn,q,S,yn]),Pn=(0,r.useMemo)((function(){return Object.entries(Zn||{}).map((function(n,e){var t,r=(0,R.Z)(n,2),l=r[0],o=r[1],c=o||{description:"",name:"",required:!1,types:[]},u=c.description,g=c.input,y=c.name,P=c.required,I=c.types,C=null===xn||void 0===xn?void 0:xn[g];return(0,Z.jsx)(f.Z,{mt:e>=1?b.cd:0,children:(0,Z.jsxs)(D,{ref:en===l?M:null,children:[(0,Z.jsx)(E,{children:(0,Z.jsx)(f.Z,{p:b.cd,children:(0,Z.jsxs)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsxs)(d.ZP,{alignItems:"center",flexDirection:"row",children:[(0,Z.jsx)(j.ZP,{large:!0,monospace:!0,children:l}),(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsxs)(d.ZP,{alignItems:"center",children:[(0,Z.jsx)(m.Z,{checked:P,compact:!0,onCheck:function(n){return wn(l,{required:n(P)})}}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(j.ZP,{muted:!P,success:P,children:"Required"})]})]}),(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(Y.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return wn(l,null)},children:(0,Z.jsx)(O.x8,{default:!0})})]})})}),(0,Z.jsx)(G.Z,{muted:!0}),(0,Z.jsxs)(f.Z,{p:b.cd,children:[(0,Z.jsxs)(d.ZP,{fullWidth:!0,children:[(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Label"})}),(0,Z.jsx)(x.Z,{onChange:function(n){return wn(l,{name:n.target.value})},value:y}),(0,Z.jsxs)(f.Z,{mt:b.Mq,children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Valid data types"})}),(0,Z.jsx)(d.ZP,{alignItems:"center",flexWrap:"wrap",children:v.n8.map((function(n){var e=null===I||void 0===I?void 0:I.includes(n);return(0,Z.jsx)(f.Z,{mr:b.cd,children:(0,Z.jsx)(s.Z,{checked:e,label:(0,z.vg)(n),onClick:function(){return wn(l,{types:e?null===I||void 0===I?void 0:I.filter((function(e){return e!==n})):(I||[]).concat(n)})}})},n)}))})]})]}),(0,Z.jsx)(f.Z,{mr:b.Mq}),(0,Z.jsxs)(a.Z,{flex:1,flexDirection:"column",children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Description"})}),(0,Z.jsx)(p.Z,{onChange:function(n){return wn(l,{description:n.target.value})},rows:Math.max(3,null===u||void 0===u||null===(t=u.split("\n"))||void 0===t?void 0:t.length),value:u})]})]}),(0,Z.jsxs)(f.Z,{mt:b.Mq,children:[(0,Z.jsx)(d.ZP,{alignContent:"center",flexDirection:"row",justifyContent:"space-between",children:(0,Z.jsxs)(d.ZP,{flexDirection:"column",children:[(0,Z.jsx)(j.ZP,{bold:!0,default:!0,children:"Input"}),(0,Z.jsx)(j.ZP,{muted:!0,children:"Associate an existing input to this variable or create a new input and then associate it to this variable."})]})}),(0,Z.jsx)(f.Z,{mt:1,children:(0,Z.jsxs)(h.Z,{monospace:!0,onChange:function(n){var e=n.target.value;"+ Add a new input"===e?(A(!0),on(l),setTimeout((function(){var n;return null===B||void 0===B||null===(n=B.current)||void 0===n?void 0:n.focus()}),1)):wn(l,{input:e})},placeholder:"Select an existing input",value:g,children:[(0,Z.jsx)("option",{value:""}),(0,Z.jsx)("option",{value:"+ Add a new input",children:"+ Add a new input"}),Object.keys(xn||{}).map((function(n){return(0,Z.jsx)("option",{value:n,children:n},n)}))]})})]})]}),g&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(G.Z,{muted:!0}),(0,Z.jsxs)(f.Z,{p:b.cd,children:[(0,Z.jsx)(f.Z,{mb:1,children:(0,Z.jsx)(j.ZP,{muted:!0,rightAligned:!0,small:!0,uppercase:!0,children:"Preview"})}),!(null!==C&&void 0!==C&&C.type)&&(0,Z.jsxs)(j.ZP,{muted:!0,children:["Select an input style for ",g," before seeing a preview."]}),(null===C||void 0===C?void 0:C.type)&&(0,Z.jsx)(w,{interaction:{inputs:(0,i.Z)({},g,null===xn||void 0===xn?void 0:xn[g]),layout:[[{variable:l,width:1}]],variables:(0,i.Z)({},l,o)}})]})]})]})},"".concat(l,"-").concat(e))}))}),[xn,en,M,on,wn,Zn]),In=(0,r.useMemo)((function(){return!(null===Zn||void 0===Zn||!Zn[sn])}),[sn,Zn]),Cn=(0,r.useMemo)((function(){return!(null===xn||void 0===xn||!xn[un])}),[xn,un]),kn=(0,r.useMemo)((function(){return(0,Z.jsx)(X,{containerRef:k,containerWidth:y,interaction:P,showVariableUUID:!0,updateLayout:function(n){return gn({layout:n})}})}),[k,y,P,gn]),Dn=(0,r.useMemo)((function(){return(0,Z.jsxs)(d.ZP,{alignItems:"center",children:[!N&&(0,Z.jsx)(Y.Z,{beforeIcon:(0,Z.jsx)(O.mm,{}),compact:!0,onClick:function(n){(0,J.j)(n),L(!0),setTimeout((function(){var n;return null===T||void 0===T||null===(n=T.current)||void 0===n?void 0:n.focus()}),1)},secondary:!0,small:!0,children:"Add new variable"}),N&&(0,Z.jsxs)(Z.Fragment,{children:[In&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.ZP,{danger:!0,small:!0,children:"Variable already exists"}),(0,Z.jsx)(f.Z,{mr:1})]}),(0,Z.jsx)(x.Z,{compact:!0,meta:{touched:!!In,error:String(In)},monospace:!0,onChange:function(n){(0,J.j)(n),vn(n.target.value)},onClick:function(n){return(0,J.j)(n)},ref:T,small:!0,value:sn||""}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(Y.Z,{disabled:In,compact:!0,onClick:function(n){if((0,J.j)(n),!In){var e=(0,o.Z)(mn||[]);e.push([{width:1,variable:sn}]),gn($($({},P),{},{layout:e,variables:$($({},Zn),{},(0,i.Z)({},sn,{}))})),L(!1),tn(sn),vn(null),jn({0:!0}),setTimeout((function(){var n;null===M||void 0===M||null===(n=M.current)||void 0===n||n.scrollIntoView(),jn({})}),K.e+100)}},primary:!0,small:!0,children:"Create variable"}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(Y.Z,{compact:!0,onClick:function(n){(0,J.j)(n),L(!1),vn(null)},secondary:!0,small:!0,children:"Cancel"})]})]})}),[N,mn,sn,M,T,L,tn,vn,jn,gn,In,Zn]),En=(0,r.useMemo)((function(){return(0,Z.jsxs)(d.ZP,{alignItems:"center",children:[!V&&(0,Z.jsx)(Y.Z,{beforeIcon:(0,Z.jsx)(O.mm,{}),compact:!0,onClick:function(n){(0,J.j)(n),A(!0),setTimeout((function(){var n;return null===B||void 0===B||null===(n=B.current)||void 0===n?void 0:n.focus()}),1)},secondary:!0,small:!0,children:"Add new input"}),V&&(0,Z.jsxs)(Z.Fragment,{children:[Cn&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.ZP,{danger:!0,small:!0,children:"Input already exists"}),(0,Z.jsx)(f.Z,{mr:1})]}),(0,Z.jsx)(x.Z,{compact:!0,meta:{touched:!!Cn,error:String(Cn)},monospace:!0,onClick:function(n){return(0,J.j)(n)},onChange:function(n){(0,J.j)(n),an(n.target.value)},ref:B,small:!0,value:un||""}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(Y.Z,{disabled:Cn,compact:!0,onClick:function(n){(0,J.j)(n),Cn||(ln?gn($($({},P),{},{inputs:$($({},xn),{},(0,i.Z)({},un,{})),variables:$($({},Zn),{},(0,i.Z)({},ln,$($({},null===Zn||void 0===Zn?void 0:Zn[ln]),{},{input:un})))})):yn(un,{}),A(!1),Q(un),on(null),an(null),jn({1:!0}),setTimeout((function(){var n;null===S||void 0===S||null===(n=S.current)||void 0===n||n.scrollIntoView(),jn({})}),K.e+100))},primary:!0,small:!0,children:"Create input"}),(0,Z.jsx)(f.Z,{mr:1}),(0,Z.jsx)(Y.Z,{compact:!0,onClick:function(n){(0,J.j)(n),A(!1),an(null)},secondary:!0,small:!0,children:"Cancel"})]})]})}),[Cn,xn,P,V,ln,un,S,B,A,Q,on,an,jn,yn,Zn]);return(0,Z.jsxs)(D,{ref:k,children:[(0,Z.jsx)(E,{children:(0,Z.jsx)(f.Z,{p:b.cd,children:(0,Z.jsxs)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(j.ZP,{default:!0,large:!0,monospace:!0,children:bn}),I&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f.Z,{mr:b.cd}),(0,Z.jsx)(Y.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return I()},children:(0,Z.jsx)(O.x8,{default:!0})})]})]})})}),(0,Z.jsx)(G.Z,{muted:!0}),g,(0,Z.jsxs)(H.Z,{noBorder:!0,visibleMapping:{0:!0,1:!0,2:!0},visibleMappingForced:fn,children:[(0,Z.jsx)(K.Z,{noBorderRadius:!0,noPaddingContent:!0,onClick:function(){jn({})},titleXPadding:b.cd*b.iI,titleYPadding:b.iI,title:(0,Z.jsxs)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(f.Z,{mr:b.cd,py:1,children:(0,Z.jsx)(l.Z,{level:5,children:"Variables"})}),(null===(e=Object.keys(Zn||{}))||void 0===e?void 0:e.length)>=1&&Dn]}),children:(0,Z.jsxs)(f.Z,{p:b.cd,children:[Pn,!(null!==(t=Object.keys(Zn||{}))&&void 0!==t&&t.length)&&Dn]})}),(0,Z.jsx)(K.Z,{noBorderRadius:!0,noPaddingContent:!0,onClick:function(){jn({})},titleXPadding:b.cd*b.iI,titleYPadding:b.iI,title:(0,Z.jsxs)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,Z.jsx)(f.Z,{mr:b.cd,py:1,children:(0,Z.jsx)(l.Z,{level:5,children:"Inputs"})}),(null===(c=Object.keys(xn||{}))||void 0===c?void 0:c.length)>=1&&En]}),children:(0,Z.jsxs)(f.Z,{p:b.cd,children:[On,!(null!==(u=Object.keys(xn||{}))&&void 0!==u&&u.length)&&En]})}),(0,Z.jsxs)(K.Z,{noBorderRadius:!0,noPaddingContent:!0,onClick:function(){jn({})},titleXPadding:b.cd*b.iI,titleYPadding:b.iI,title:(0,Z.jsx)(d.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,Z.jsx)(f.Z,{mr:b.cd,py:1,children:(0,Z.jsx)(l.Z,{level:5,children:"Interaction layout"})})}),children:[(0,Z.jsx)(f.Z,{p:1,children:kn}),!(null!==mn&&void 0!==mn&&mn.length)&&(0,Z.jsx)(f.Z,{px:b.cd,pb:b.cd,children:(0,Z.jsx)(j.ZP,{muted:!0,children:"Add at least 1 variable and associate an input to it and see a preview."})})]})]})]})};function en(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function tn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?en(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):en(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var rn=function(n){var e=n.blockInteraction,t=n.children,o=n.contained,c=n.containerRef,u=n.containerWidth,a=n.interaction,d=n.isEditing,s=n.removeBlockInteraction,v=n.setInteractionsMapping,h=n.setVariables,p=n.showVariableUUID,x=n.variables,m=(0,r.useMemo)((function(){return e||{description:null,name:null}}),[e]),g=m.description,y=m.name,w=(0,r.useCallback)((function(n){return null===v||void 0===v?void 0:v((function(e){return tn(tn({},e),{},(0,i.Z)({},null===n||void 0===n?void 0:n.uuid,tn(tn({},a),n)))}))}),[a,v]),O=(0,r.useMemo)((function(){var n;return(0,Z.jsxs)(Z.Fragment,{children:[y&&(0,Z.jsxs)(f.Z,{mb:b.cd,pt:b.cd,px:b.cd,children:[(0,Z.jsx)(l.Z,{level:5,children:y}),g&&(null===g||void 0===g||null===(n=g.split("\n"))||void 0===n?void 0:n.map((function(n){return(0,Z.jsx)(j.ZP,{default:!0,children:n},n)})))]}),(0,Z.jsx)(f.Z,{pb:b.Mq,px:1,children:(0,Z.jsx)(X,{containerRef:c,containerWidth:u,interaction:a,setVariables:h,showVariableUUID:p,variables:x})})]})}),[g,y,c,u,a,h,p,x]);return(0,Z.jsxs)("div",{children:[d&&(0,Z.jsx)(nn,{containerWidth:u,interaction:a,removeBlockInteraction:s,updateInteraction:w,children:t}),!d&&(0,Z.jsxs)(Z.Fragment,{children:[o&&O,!o&&(0,Z.jsx)(D,{children:O})]})]})}},54193:function(n,e,t){var i;t.d(e,{al:function(){return o},bB:function(){return i},n8:function(){return c},qS:function(){return l},zj:function(){return r}}),function(n){n.CHECKBOX="checkbox",n.DROPDOWN_MENU="dropdown_menu",n.SWITCH="switch",n.TEXT_FIELD="text_field"}(i||(i={}));var r,l=[i.CHECKBOX,i.DROPDOWN_MENU,i.SWITCH,i.TEXT_FIELD];!function(n){n.BOOLEAN="boolean",n.DATE="date",n.DATETIME="datetime",n.DICTIONARY="dictionary",n.FLOAT="float",n.INTEGER="integer",n.LIST="list",n.STRING="string"}(r||(r={}));var o,c=[r.BOOLEAN,r.DATE,r.DATETIME,r.DICTIONARY,r.FLOAT,r.INTEGER,r.LIST,r.STRING];!function(n){n.NUMBER="number"}(o||(o={}))}}]);