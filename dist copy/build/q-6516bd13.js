import{r as p}from"./q-4f3865aa.js";import{_ as r,c as h,a as g,f as N,v as w,x as C}from"./q-8afd426d.js";function W(e){return e&&e.ownerDocument||document}function $({controlled:e,default:s,name:t,state:n="value"}){const{current:o}=p.useRef(e!==void 0),[u,a]=p.useState(s),i=o?e:u,c=p.useCallback(l=>{o||a(l)},[]);return[i,c]}function x(e){return typeof e=="string"}function E(e,s={},t){return x(e)?s:r({},s,{ownerState:r({},s.ownerState,t)})}function k(e,s=[]){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&typeof e[n]=="function"&&!s.includes(n)).forEach(n=>{t[n]=e[n]}),t}function H(e,s){return typeof e=="function"?e(s):e}function P(e){if(e===void 0)return{};const s={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&typeof e[t]=="function")).forEach(t=>{s[t]=e[t]}),s}function O(e){const{getSlotProps:s,additionalProps:t,externalSlotProps:n,externalForwardedProps:o,className:u}=e;if(!s){const y=h(o==null?void 0:o.className,n==null?void 0:n.className,u,t==null?void 0:t.className),S=r({},t==null?void 0:t.style,o==null?void 0:o.style,n==null?void 0:n.style),m=r({},t,o,n);return y.length>0&&(m.className=y),Object.keys(S).length>0&&(m.style=S),{props:m,internalRef:void 0}}const a=k(r({},o,n)),i=P(n),c=P(o),l=s(a),d=h(l==null?void 0:l.className,t==null?void 0:t.className,u,o==null?void 0:o.className,n==null?void 0:n.className),v=r({},l==null?void 0:l.style,t==null?void 0:t.style,o==null?void 0:o.style,n==null?void 0:n.style),f=r({},l,t,c,i);return d.length>0&&(f.className=d),Object.keys(v).length>0&&(f.style=v),{props:f,internalRef:l.ref}}const R=["elementType","externalSlotProps","ownerState"];function D(e){var s;const{elementType:t,externalSlotProps:n,ownerState:o}=e,u=g(e,R),a=H(n,o),{props:i,internalRef:c}=O(r({},u,{externalSlotProps:a})),l=N(c,a==null?void 0:a.ref,(s=e.additionalProps)==null?void 0:s.ref);return E(t,r({},i,{ref:l}),o)}function F(){return w(C)}const T=e=>!e||!x(e),V=T;export{D as a,F as b,E as c,x as i,W as o,H as r,V as s,$ as u};