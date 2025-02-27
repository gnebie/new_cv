import{r as o,j as e,t as S,A as X,a as y,I as Y,L as Z}from"./index-Dt8rkeq2.js";import{m as _}from"./index-Jzg2dse_.js";import{V as R}from"./Triangle-ViSG70rN.js";import{H as x,T as $}from"./Routes-BV_3_b-L.js";import{T as I,H as M,B as ee,a as te}from"./text-DzFZiGcW.js";import{D as re}from"./divider-DasR8UhF.js";function C(...g){return g.filter(Boolean).join(" ")}const q=o.forwardRef((g,l)=>{const{texts:r,transition:f={type:"spring",damping:25,stiffness:300},initial:d={y:"100%",opacity:0},animate:w={y:0,opacity:1},exit:H={y:"-120%",opacity:0},animatePresenceMode:B="wait",animatePresenceInitial:F=!1,rotationInterval:P=2e3,staggerDuration:u=0,staggerFrom:m="first",loop:j=!0,auto:T=!0,splitBy:p="characters",onNext:A,mainClassName:L,splitLevelClassName:V,elementLevelClassName:E,...O}=g,[a,Q]=o.useState(0),J=t=>{if(typeof Intl<"u"&&Intl.Segmenter){const s=new Intl.Segmenter("en",{granularity:"grapheme"});return Array.from(s.segment(t),n=>n.segment)}return Array.from(t)},G=o.useMemo(()=>{const t=r[a];if(p==="characters"){const s=t.split(" ");return s.map((n,i)=>({characters:J(n),needsSpace:i!==s.length-1}))}return p==="words"?t.split(" ").map((s,n,i)=>({characters:[s],needsSpace:n!==i.length-1})):p==="lines"?t.split(`
`).map((s,n,i)=>({characters:[s],needsSpace:n!==i.length-1})):t.split(p).map((s,n,i)=>({characters:[s],needsSpace:n!==i.length-1}))},[r,a,p]),K=o.useCallback((t,s)=>{const n=s;if(m==="first")return t*u;if(m==="last")return(n-1-t)*u;if(m==="center"){const i=Math.floor(n/2);return Math.abs(i-t)*u}if(m==="random"){const i=Math.floor(Math.random()*n);return Math.abs(i-t)*u}return Math.abs(m-t)*u},[m,u]),c=o.useCallback(t=>{Q(t),A&&A(t)},[A]),b=o.useCallback(()=>{const t=a===r.length-1?j?0:a:a+1;t!==a&&c(t)},[a,r.length,j,c]),N=o.useCallback(()=>{const t=a===0?j?r.length-1:a:a-1;t!==a&&c(t)},[a,r.length,j,c]),z=o.useCallback(t=>{const s=Math.max(0,Math.min(t,r.length-1));s!==a&&c(s)},[r.length,a,c]),D=o.useCallback(()=>{a!==0&&c(0)},[a,c]);return o.useImperativeHandle(l,()=>({next:b,previous:N,jumpTo:z,reset:D}),[b,N,z,D]),o.useEffect(()=>{if(!T)return;const t=setInterval(b,P);return()=>clearInterval(t)},[b,P,T]),e.jsxs(S.span,{className:C("text-rotate",L),...O,layout:!0,transition:f,children:[e.jsx("span",{className:"text-rotate-sr-only",children:r[a]}),e.jsx(X,{mode:B,initial:F,children:e.jsx(S.div,{className:C(p==="lines"?"text-rotate-lines":"text-rotate"),layout:!0,"aria-hidden":"true",children:G.map((t,s,n)=>{const i=n.slice(0,s).reduce((k,v)=>k+v.characters.length,0);return e.jsxs("span",{className:C("text-rotate-word",V),children:[t.characters.map((k,v)=>e.jsx(S.span,{initial:d,animate:w,exit:H,transition:{...f,delay:K(i+v,n.reduce((U,W)=>U+W.characters.length,0))},className:C("text-rotate-element",E),children:k},v)),t.needsSpace&&e.jsx("span",{className:"text-rotate-space",children:" "})]},s)})},a)})]})});q.displayName="RotatingText";const h=S(te);function le(){const g=y("surface.light.300","surface.dark.300"),l=y("surface.light.100","surface.dark.100"),r=y("text.light.primary","text.dark.primary"),f=y("primary.500","secondary.500");return e.jsx(h,{bg:g,p:8,borderRadius:"lg",boxShadow:"xl",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},mx:"auto",mt:10,children:e.jsxs(R,{spacing:8,align:"start",children:[e.jsxs(h,{bg:l,p:6,borderRadius:"lg",boxShadow:"lg",whileHover:{scale:1.02},transition:{duration:.3},width:"100%",children:[e.jsx(x,{color:r,size:"xl",textAlign:"center",children:"🚀 Qui suis-je ?"}),e.jsxs(I,{fontSize:"lg",color:r,mt:3,textAlign:"center",children:["Je suis ",e.jsx("strong",{children:"Guillaume Nebie"}),", **freelance expert en Backend Python & Intelligence Artificielle**. J’aide les entreprises à **développer des API performantes**, à **intégrer des modèles IA avancés** et à **optimiser leurs infrastructures cloud**."]})]}),e.jsx(x,{color:r,size:"lg",children:"📜 Mon parcours atypique"}),e.jsx(h,{bg:l,p:6,borderRadius:"lg",boxShadow:"lg",width:"100%",children:e.jsx(I,{fontSize:"md",color:r,children:"Tout a commencé loin du code, dans une **cuisine de pâtisserie**. De la rigueur des recettes à la précision des algorithmes, mon parcours m’a appris une chose essentielle : **peu importe le domaine, c’est la qualité qui fait la différence**. Aujourd’hui, j’applique cette même exigence en développement logiciel, où **chaque ligne de code doit être optimisée et maîtrisée**. Après un parcours à l’École **42 (6ᵉ de ma promo)** et 7 ans d’expérience en **finance, machine learning, backend & DevOps**, je suis prêt à relever vos défis techniques les plus ambitieux."})}),e.jsx(x,{color:r,size:"lg",children:"🔥 Quelques chiffres sur moi"}),e.jsx(M,{spacing:6,wrap:"wrap",children:["🎓 6ᵉ de ma promo à 42 (2016)","💼 +7 ans d'expérience","🚀 +10 projets en production","🏆 Vainqueur du Corewar Championship 2017"].map((d,w)=>e.jsx(h,{bg:l,p:4,borderRadius:"md",boxShadow:"md",whileHover:{scale:1.05},transition:{duration:.3},children:e.jsxs(M,{children:[e.jsx(Y,{as:_,color:f}),e.jsx(I,{fontSize:"md",color:r,children:d})]})},w))}),e.jsx(x,{color:r,size:"lg",children:"💡 Pourquoi me faire confiance ?"}),e.jsx(R,{align:"start",spacing:5,width:"100%",children:e.jsx(h,{bg:l,p:4,borderRadius:"md",boxShadow:"md",whileHover:{scale:1.03},transition:{duration:.3},width:"100%",children:e.jsx(q,{texts:["✅ **Spécialiste Backend & API** - Conception de **microservices** robustes avec **FastAPI, Flask, Django**.","🤖 **Expert en IA** - Intégration de **modèles OpenAI, TensorFlow, NLP et Computer Vision**.","⚡ **Performance & Scalabilité** - Optimisation et mise en production avec **Docker, Kubernetes, CI/CD**.","🛠 **Accompagnement & Conseil** - Audit, formation et stratégie d’optimisation technique."],rotationInterval:5e3})})}),e.jsx(re,{}),e.jsx(x,{color:r,size:"lg",children:"🔧 Technologies Maîtrisées"}),e.jsx(M,{spacing:3,wrap:"wrap",children:["Python","FastAPI","Flask","REST API","Microservices","PostgreSQL","unix","Docker","bash","OpenAI API"].map(d=>e.jsx($,{size:"lg",variant:"subtle",colorScheme:"blue",children:d},d))}),e.jsxs(h,{mt:6,p:6,borderRadius:"lg",boxShadow:"lg",bg:l,whileHover:{scale:1.05},transition:{duration:.3},width:"100%",textAlign:"center",children:[e.jsx(I,{fontSize:"lg",color:r,children:"🚀 **Vous avez un projet ambitieux ?** Discutons-en et voyons comment je peux vous aider !"}),e.jsx(ee,{as:Z,to:"/contact",colorScheme:"primary",size:"lg",mt:3,children:"Me Contacter"})]})]})})}export{le as default};
