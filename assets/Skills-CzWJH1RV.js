import{N as g,f as S,o as B,m as V,j as e,n as k,l as z,a as m,t as H}from"./index-Dt8rkeq2.js";import{a as j,H as v}from"./text-DzFZiGcW.js";import{V as y}from"./Triangle-ViSG70rN.js";import{H as u,T as M}from"./Routes-BV_3_b-L.js";import{D as N}from"./divider-DasR8UhF.js";import"./index-Jzg2dse_.js";function _(o,s,t){return(o-s)*100/(t-s)}g({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}});g({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}});const F=g({"0%":{left:"-40%"},"100%":{left:"100%"}}),E=g({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function K(o){const{value:s=0,min:t,max:a,valueText:r,getValueText:n,isIndeterminate:i,role:c="progressbar"}=o,l=_(s,t,a);return{bind:{"data-indeterminate":i?"":void 0,"aria-valuemax":a,"aria-valuemin":t,"aria-valuenow":i?void 0:s,"aria-valuetext":(()=>{if(s!=null)return typeof n=="function"?n(s,l):r})(),role:c},percent:l,value:s}}const[O,$]=z({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),q=S((o,s)=>{const{min:t,max:a,value:r,isIndeterminate:n,role:i,...c}=o,l=K({value:r,min:t,max:a,isIndeterminate:n,role:i}),h={height:"100%",...$().filledTrack};return e.jsx(k.div,{ref:s,style:{width:`${l.percent}%`,...c.style},...l.bind,...c,__css:h})}),P=S((o,s)=>{var f;const{value:t,min:a=0,max:r=100,hasStripe:n,isAnimated:i,children:c,borderRadius:l,isIndeterminate:d,"aria-label":h,"aria-labelledby":A,"aria-valuetext":C,title:D,role:w,...T}=B(o),p=V("Progress",o),x=l??((f=p.track)==null?void 0:f.borderRadius),I={animation:`${E} 1s linear infinite`},L={...!d&&n&&i&&I,...d&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${F} 1s ease infinite normal none running`}},R={overflow:"hidden",position:"relative",...p.track};return e.jsx(k.div,{ref:s,borderRadius:x,__css:R,...T,children:e.jsxs(O,{value:p,children:[e.jsx(q,{"aria-label":h,"aria-labelledby":A,"aria-valuetext":C,min:a,max:r,value:t,isIndeterminate:d,css:L,borderRadius:x,title:D,role:w}),c]})})});P.displayName="Progress";const b=H(j),Q=[{category:"Backend",technologies:["Python","FastAPI","Flask","Django (Notions)","REST API","Microservices"]},{category:"Intelligence Artificielle",technologies:["TensorFlow","PyTorch","OpenAI API","LangChain","NLP","Computer Vision"]},{category:"DevOps & Cloud",technologies:["Docker","Kubernetes","CI/CD","Linux","Bash","Automatisation"]},{category:"Bases de Données",technologies:["PostgreSQL","MongoDB","Redis","SQLite"]},{category:"Soft Skills",technologies:["Gestion de projet","Lead technique","Travail en équipe","Résolution de problèmes"]}],G=[{skill:"Optimisation Backend",level:90},{skill:"Scalabilité & Haute Disponibilité",level:85},{skill:"Automatisation IA",level:80},{skill:"Sécurité API",level:75}];function re(){const o=m("surface.light.200","surface.dark.200"),s=m("white","surface.dark.100"),t=m("text.light.primary","text.dark.primary"),a=m("primary.500","secondary.500");return e.jsx(j,{bg:o,p:8,children:e.jsxs(y,{spacing:12,align:"stretch",children:[e.jsx(u,{color:t,size:"xl",textAlign:"center",children:"🚀 Mes Compétences"}),Q.map((r,n)=>e.jsxs(b,{bg:s,p:6,borderRadius:"lg",boxShadow:"lg",whileHover:{scale:1.02},transition:{duration:.3},children:[e.jsx(u,{size:"md",color:a,mb:3,children:r.category}),e.jsx(v,{spacing:3,wrap:"wrap",children:r.technologies.map(i=>e.jsx(M,{size:"lg",variant:"subtle",colorScheme:"blue",children:i},i))})]},n)),e.jsx(N,{}),e.jsx(u,{color:t,size:"lg",children:"📈 Compétences Avancées"}),e.jsx(y,{spacing:4,align:"start",children:G.map(r=>e.jsxs(b,{bg:s,p:4,borderRadius:"md",boxShadow:"md",whileHover:{scale:1.03},transition:{duration:.3},width:"100%",children:[e.jsxs(v,{justify:"space-between",children:[e.jsx(u,{size:"sm",color:a,children:r.skill}),e.jsxs(u,{size:"sm",color:t,children:[r.level,"%"]})]}),e.jsx(P,{colorScheme:"blue",size:"lg",value:r.level,mt:2})]},r.skill))})]})})}export{re as default};
