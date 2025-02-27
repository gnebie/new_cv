import{r as u,j as n,t as X,a as q}from"./index-Dt8rkeq2.js";import{a as V,T as F}from"./text-DzFZiGcW.js";import{V as J}from"./Triangle-ViSG70rN.js";import{F as T}from"./flex-DDhzDKkt.js";import{I as Y,H as $}from"./Routes-BV_3_b-L.js";import"./index-Jzg2dse_.js";function D(i){u.useEffect(()=>{let r;const a=()=>{i(),r=requestAnimationFrame(a)};return r=requestAnimationFrame(a),()=>cancelAnimationFrame(r)},[i])}function H(i){const r=u.useRef({x:0,y:0});return u.useEffect(()=>{const a=(s,c)=>{if(i!=null&&i.current){const f=i.current.getBoundingClientRect();r.current={x:s-f.left,y:c-f.top}}else r.current={x:s,y:c}},p=s=>a(s.clientX,s.clientY),m=s=>{const c=s.touches[0];a(c.clientX,c.clientY)};return window.addEventListener("mousemove",p),window.addEventListener("touchmove",m),()=>{window.removeEventListener("mousemove",p),window.removeEventListener("touchmove",m)}},[i]),r}const x=u.forwardRef((i,r)=>{const{label:a,fromFontVariationSettings:p,toFontVariationSettings:m,containerRef:s,radius:c=50,falloff:f="linear",className:M="",onClick:R,style:E,...z}=i,y=u.useRef([]),S=u.useRef([]),v=H(s),C=u.useMemo(()=>{const o=t=>new Map(t.split(",").map(l=>l.trim()).map(l=>{const[h,g]=l.split(" ");return[h.replace(/['"]/g,""),parseFloat(g)]})),e=o(p),d=o(m);return Array.from(e.entries()).map(([t,l])=>({axis:t,fromValue:l,toValue:d.get(t)??l}))},[p,m]),k=(o,e,d,t)=>Math.sqrt((d-o)**2+(t-e)**2),A=o=>{const e=Math.min(Math.max(1-o/c,0),1);switch(f){case"exponential":return e**2;case"gaussian":return Math.exp(-((o/(c/2))**2)/2);case"linear":default:return e}};D(()=>{if(!(s!=null&&s.current))return;const o=s.current.getBoundingClientRect();y.current.forEach((e,d)=>{if(!e)return;const t=e.getBoundingClientRect(),l=t.left+t.width/2-o.left,h=t.top+t.height/2-o.top,g=k(v.current.x,v.current.y,l,h);if(g>=c){e.style.fontVariationSettings=p;return}const N=A(g),b=C.map(({axis:L,fromValue:w,toValue:B})=>{const I=w+(B-w)*N;return`'${L}' ${I}`}).join(", ");S.current[d]=b,e.style.fontVariationSettings=b})});const j=a.split(" ");let P=0;return n.jsxs("span",{ref:r,className:`${M} variable-proximity`,onClick:R,style:{display:"inline",...E},...z,children:[j.map((o,e)=>n.jsxs("span",{style:{display:"inline-block",whiteSpace:"nowrap"},children:[o.split("").map(d=>{const t=P++;return n.jsx(X.span,{ref:l=>{y.current[t]=l},style:{display:"inline-block",fontVariationSettings:S.current[t]},"aria-hidden":"true",children:d},t)}),e!=null&&e<j.length-1&&n.jsx("span",{style:{display:"inline-block"},children:" "})]},e)),n.jsx("span",{className:"sr-only",children:a})]})});x.displayName="VariableProximity";function Z(){const i=q("surface.light.100","surface.dark.100"),r=u.useRef(null),a=u.useRef(null);return n.jsx(V,{padding:"4rem",bg:i,children:n.jsx(J,{spacing:4,align:"start",children:n.jsxs(T,{children:[n.jsx(Y,{src:"/portrait.png",borderRadius:"full",boxSize:"80px",marginX:10}),n.jsxs(V,{children:[n.jsx($,{fontSize:"3xl",children:"À propos de moi"}),n.jsx(F,{fontSize:"lg",ref:r,children:n.jsx(x,{label:"Je suis un développeur backend spécialisé en Python et intégration de solutions IA. Avec plus de 5 ans d’expérience, j’ai conçu des architectures backend robustes, des solutions automatisées et des intégrations de services intelligents.",className:"variable-proximity-demo",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:r,radius:100,falloff:"linear"})}),n.jsx(F,{fontSize:"lg",ref:a,children:n.jsx(x,{label:"J’ai travaillé sur des projets d’envergure dans la finance, les systèmes distribués, et la rétro-ingénierie de systèmes complexes. Je suis passionné par les technologies émergentes et l’automatisation.",className:"variable-proximity-demo",fromFontVariationSettings:"'wght' 400, 'opsz' 9",toFontVariationSettings:"'wght' 1000, 'opsz' 40",containerRef:a,radius:100,falloff:"linear"})})]})]})})})}export{Z as default};
