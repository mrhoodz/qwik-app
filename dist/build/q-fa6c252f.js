import{J as d,T as o,_ as a,b as l,o as u,a as n,E as _,z as p,p as h,A as c,H as v}from"./q-a92c5382.js";import{j as m}from"./q-e9f2d92f.js";const b=()=>{d(o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_p4UiTwsJc7c"));const r=m(),e=l({count:0,number:20});return u(o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_V0Y6u0VD1eY",[e])),n(h,{children:[n("input",{type:"range",get value(){return e.number},max:50,onInput$:o(()=>a(()=>Promise.resolve().then(()=>s),void 0),"s_dznIGAlrcag",[e]),[_]:{value:p(e,"number")}}),n("div",{style:{"--state":`${e.count*.1}`},class:{host:!0,pride:r.query.pride==="true"},children:Array.from({length:e.number},(i,t)=>n("div",{class:{square:!0,odd:t%2===0},style:{"--index":`${t+1}`}},t)).reverse()})]},"zc_0")},g=r=>{const[e]=c();e.number=r.target.valueAsNumber},f=`.host{display:grid;align-items:center;justify-content:center;justify-items:center;--rotation: 135deg;--rotation: 225deg;--size-step: 10px;--odd-color-step: 5;--even-color-step: 5;--center: 12;width:100%;height:500px;contain:strict}input{width:100%}.square{--size: calc(40px + var(--index) * var(--size-step));display:block;width:var(--size);height:var(--size);transform:rotate(calc(var(--rotation) * var(--state) * (var(--center) - var(--index))));transition-property:transform,border-color;transition-duration:5s;transition-timing-function:ease-in-out;grid-area:1 / 1;background:white;border-width:2px;border-style:solid;border-color:#000;box-sizing:border-box;will-change:transform,border-color;contain:strict}.square.odd{--luminance: calc(1 - calc(calc(var(--index) * var(--odd-color-step)) / 256));background:rgb(calc(172 * var(--luminance)),calc(127 * var(--luminance)),calc(244 * var(--luminance)))}.pride .square:nth-child(12n + 1){background:#e70000}.pride .square:nth-child(12n + 3){background:#ff8c00}.pride .square:nth-child(12n + 5){background:#ffef00}.pride .square:nth-child(12n + 7){background:#00811f}.pride .square:nth-child(12n + 9){background:#0044ff}.pride .square:nth-child(12n + 11){background:#760089}
`,y=f,x=({cleanup:r})=>{const[e]=c(),i=setTimeout(()=>e.count=1,500);r(()=>clearTimeout(i));const t=setInterval(()=>e.count++,7e3);r(()=>clearInterval(t))},s=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_OW4nu0I1yZ8:b,s_V0Y6u0VD1eY:x,s_dznIGAlrcag:g,s_p4UiTwsJc7c:y},Symbol.toStringTag,{value:"Module"}));export{v as _hW,b as s_OW4nu0I1yZ8,x as s_V0Y6u0VD1eY,g as s_dznIGAlrcag,y as s_p4UiTwsJc7c};
