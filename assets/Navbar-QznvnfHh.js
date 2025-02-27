import{r as h,f as B,j as o,I as E,L as m,u as _,a as f}from"./index-Dt8rkeq2.js";import{V as P,R as H,T as V,C as S,P as W,M as D}from"./Triangle-ViSG70rN.js";import{B as M,H as y,a as b,T as O,I as A}from"./text-DzFZiGcW.js";import{F as I}from"./flex-DDhzDKkt.js";function v(r){const{viewBox:t="0 0 24 24",d:l,displayName:s,defaultProps:c={}}=r,e=h.Children.toArray(r.path),u=B((n,a)=>o.jsx(E,{ref:a,viewBox:t,...c,...n,children:e.length?e:o.jsx("path",{fill:"currentColor",d:l})}));return u.displayName=s,u}const G=v({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),q=v({displayName:"SunIcon",path:o.jsxs("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor",children:[o.jsx("circle",{cx:"12",cy:"12",r:"5"}),o.jsx("path",{d:"M12 1v2"}),o.jsx("path",{d:"M12 21v2"}),o.jsx("path",{d:"M4.22 4.22l1.42 1.42"}),o.jsx("path",{d:"M18.36 18.36l1.42 1.42"}),o.jsx("path",{d:"M1 12h2"}),o.jsx("path",{d:"M21 12h2"}),o.jsx("path",{d:"M4.22 19.78l1.42-1.42"}),o.jsx("path",{d:"M18.36 5.64l1.42-1.42"})]})}),$=v({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),K=v({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"});function L({children:r,className:t="",colors:l=["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:s=8,showBorder:c=!1}){const e={backgroundImage:`linear-gradient(to right, ${l.join(", ")})`,animationDuration:`${s}s`};return o.jsxs("div",{className:`animated-gradient-text ${t}`,children:[c&&o.jsx("div",{className:"gradient-overlay",style:e}),o.jsx("div",{className:"text-content",style:e,children:r})]})}const z=[{label:"Ce que je peux faire pour vous",href:"/#What-Can-I-Do"},{label:"Portfolio",href:"/portfolio"},{label:"Mes Services",href:"/services"},{label:"À propos de moi",href:"/aboutme"}];function F({isMobile:r=!1}){return r?o.jsxs(P,{spacing:4,align:"start",children:[z.map(t=>o.jsx(m,{to:t.href,children:o.jsx(L,{colors:["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:3,showBorder:!1,className:"custom-class",children:t.label})},t.href)),o.jsx(m,{to:"/contact",children:o.jsx(M,{width:"100%",children:"Contact"})})]}):o.jsxs(y,{spacing:6,children:[z.map(t=>o.jsx(m,{to:t.href,children:o.jsx(L,{colors:["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:3,showBorder:!1,className:"custom-class",children:t.label})},t.href)),o.jsx(m,{to:"/contact",children:o.jsx(M,{variant:"outline",children:"Contact"})})]})}const U=`#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`,Z=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;

out vec4 fragColor;

vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
    const vec4 C = vec4(
        0.211324865405187, 0.366025403784439,
        -0.577350269189626, 0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);

    vec3 p = permute(
        permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0)
    );

    vec3 m = max(
        0.5 - vec3(
            dot(x0, x0),
            dot(x12.xy, x12.xy),
            dot(x12.zw, x12.zw)
        ), 
        0.0
    );
    m = m * m;
    m = m * m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

struct ColorStop {
    vec3 color;
    float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                  int index = 0;                                                for (int i = 0; i < 2; i++) {                                      ColorStop currentColor = colors[i];                           bool isInBetween = currentColor.position <= factor;           index = int(mix(float(index), float(i), float(isInBetween)));     }                                                             ColorStop currentColor = colors[index];                       ColorStop nextColor = colors[index + 1];                      float range = nextColor.position - currentColor.position;     float lerpFactor = (factor - currentColor.position) / range;     finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
    // Compute UV coordinates from the fragment coordinate and resolution.
    vec2 uv = gl_FragCoord.xy / uResolution;

    // Build our three color stops from uniform array uColorStops.
    ColorStop colors[3];
    colors[0] = ColorStop(uColorStops[0], 0.0);
    colors[1] = ColorStop(uColorStops[1], 0.5);
    colors[2] = ColorStop(uColorStops[2], 1.0);

    // Interpolate color along uv.x.
    vec3 rampColor;
    COLOR_RAMP(colors, uv.x, rampColor);

    // Noise-based "height," scaled by amplitude.
    float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25))
                   * 0.5 * uAmplitude;
    height = exp(height);
    height = (uv.y * 2.0 - height + 0.2);

    fragColor.rgb = 0.6 * height * rampColor;
    fragColor.a = 1.0;
}
`;function J(r){const{colorStops:t=["#00d8ff","#7cff67","#00d8ff"],amplitude:l=1}=r,s=h.useRef(r);s.current=r;const c=h.useRef(null);return h.useEffect(()=>{const e=c.current;if(!e)return;const u=new H,n=u.gl;n.clearColor(1,1,1,1);let a;function x(){if(!e)return;const i=e.offsetWidth,d=e.offsetHeight;u.setSize(i,d),a&&(a.uniforms.uResolution.value=[i,d])}window.addEventListener("resize",x);const p=new V(n);p.attributes.uv&&delete p.attributes.uv;const g=t.map(i=>{const d=new S(i);return[d.r,d.g,d.b]});a=new W(n,{vertex:U,fragment:Z,uniforms:{uTime:{value:0},uAmplitude:{value:l},uColorStops:{value:g},uResolution:{value:[e.offsetWidth,e.offsetHeight]}}});const N=new D(n,{geometry:p,program:a});e.appendChild(n.canvas);let C=0;const w=i=>{C=requestAnimationFrame(w);const{time:d=i*.01,speed:k=1}=s.current;a.uniforms.uTime.value=d*k*.1,a.uniforms.uAmplitude.value=s.current.amplitude??1;const R=s.current.colorStops??t;a.uniforms.uColorStops.value=R.map(T=>{const j=new S(T);return[j.r,j.g,j.b]}),u.render({scene:N})};return C=requestAnimationFrame(w),x(),()=>{var i;cancelAnimationFrame(C),window.removeEventListener("resize",x),e&&n.canvas.parentNode===e&&e.removeChild(n.canvas),(i=n.getExtension("WEBGL_lose_context"))==null||i.loseContext()}},[l,t]),o.jsx("div",{ref:c,className:"aurora-container"})}function eo(){const[r,t]=h.useState(!1),{colorMode:l,toggleColorMode:s}=_(),c=()=>t(!r),e=()=>{window.scrollTo({top:0,behavior:"smooth"})},u=f("background.light","background.dark"),n=f("transparent","transparent"),a=f("background.light","background.dark"),x=f("text.dark.primary","text.dark.primary"),p=f("secondary.500","secondary.400"),g=f(["#3A29FF","#FF94B4","#FF3232"],["#00FFAA","#3300FF","#8800FF"]);return o.jsxs(b,{position:"relative",children:[o.jsxs(I,{as:"nav",bg:n,padding:"1.2rem",color:x,align:"center",justify:"space-between",boxShadow:"md",position:"fixed",top:"0",width:"100%",zIndex:"1000",children:[o.jsx(b,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"-1",children:o.jsx(J,{colorStops:g,speed:.5})}),o.jsx(m,{to:"/",children:o.jsx(O,{fontSize:"xl",fontWeight:"bold",cursor:"pointer",_hover:{color:p},children:"NEBIE Guillaume"})}),o.jsx(y,{spacing:6,display:{base:"none",md:"flex"},children:o.jsx(F,{})}),o.jsxs(y,{spacing:4,bg:u,children:[o.jsx(A,{"aria-label":"Toggle Dark Mode",icon:l==="light"?o.jsx(G,{}):o.jsx(q,{}),onClick:s,variant:"ghost"}),o.jsx(A,{"aria-label":"Ouvrir le menu",icon:r?o.jsx($,{}):o.jsx(K,{onClick:e}),size:"lg",display:{base:"flex",md:"none"},onClick:c,variant:"ghost"})]})]}),r&&o.jsx(I,{direction:"column",bg:a,position:"absolute",top:"4rem",left:"0",width:"100%",padding:"1rem",zIndex:"10",boxShadow:"lg",transition:"all 0.3s ease-in-out",children:o.jsx(F,{isMobile:!0})}),o.jsx(b,{height:"75px"})]})}export{eo as default};
