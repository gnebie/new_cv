import{r as m,f as _,j as o,I as P,L as h,u as H,a as d}from"./index-C0afV5FN.js";import{V as O,G as V,R as W,P as D,M as $,F as S}from"./Mesh-nDsBk6Ov.js";import{B as A,H as j,a as b,T as q,I as M}from"./text-CxeNQ9bt.js";function g(e){const{viewBox:t="0 0 24 24",d:s,displayName:i,defaultProps:c={}}=e,r=m.Children.toArray(e.path),u=_((n,a)=>o.jsx(P,{ref:a,viewBox:t,...c,...n,children:r.length?r:o.jsx("path",{fill:"currentColor",d:s})}));return u.displayName=i,u}const U=g({d:"M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z",displayName:"MoonIcon"}),K=g({displayName:"SunIcon",path:o.jsxs("g",{strokeLinejoin:"round",strokeLinecap:"round",strokeWidth:"2",fill:"none",stroke:"currentColor",children:[o.jsx("circle",{cx:"12",cy:"12",r:"5"}),o.jsx("path",{d:"M12 1v2"}),o.jsx("path",{d:"M12 21v2"}),o.jsx("path",{d:"M4.22 4.22l1.42 1.42"}),o.jsx("path",{d:"M18.36 18.36l1.42 1.42"}),o.jsx("path",{d:"M1 12h2"}),o.jsx("path",{d:"M21 12h2"}),o.jsx("path",{d:"M4.22 19.78l1.42-1.42"}),o.jsx("path",{d:"M18.36 5.64l1.42-1.42"})]})}),Z=g({displayName:"CloseIcon",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"}),J=g({displayName:"HamburgerIcon",viewBox:"0 0 24 24",d:"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"});function I({children:e,className:t="",colors:s=["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:i=8,showBorder:c=!1}){const r={backgroundImage:`linear-gradient(to right, ${s.join(", ")})`,animationDuration:`${i}s`};return o.jsxs("div",{className:`animated-gradient-text ${t}`,children:[c&&o.jsx("div",{className:"gradient-overlay",style:r}),o.jsx("div",{className:"text-content",style:r,children:e})]})}const L=[{label:"Ce que je peux faire pour vous",href:"/#What-Can-I-Do"},{label:"Portfolio",href:"/portfolio"},{label:"Mes Services",href:"/services"},{label:"À propos de moi",href:"/aboutme"}];function z({isMobile:e=!1}){return e?o.jsxs(O,{spacing:4,align:"start",children:[L.map(t=>o.jsx(h,{to:t.href,children:o.jsx(I,{colors:["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:3,showBorder:!1,className:"custom-class",children:t.label})},t.href)),o.jsx(h,{to:"/contact",children:o.jsx(A,{width:"100%",children:"Contact"})})]}):o.jsxs(j,{spacing:6,children:[L.map(t=>o.jsx(h,{to:t.href,children:o.jsx(I,{colors:["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:3,showBorder:!1,className:"custom-class",children:t.label})},t.href)),o.jsx(h,{to:"/contact",children:o.jsx(A,{variant:"outline",children:"Contact"})})]})}const F={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function N(e){e.length===4&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function Q(e){return e=parseInt(e),[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function R(e){return e===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(e)?e[0]==="#"?N(e):F[e.toLowerCase()]?N(F[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):Q(e)}class k extends Array{constructor(t){return Array.isArray(t)?super(...t):super(...R(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(t){this[0]=t}set g(t){this[1]=t}set b(t){this[2]=t}set(t){return Array.isArray(t)?this.copy(t):this.copy(R(...arguments))}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this}}class X extends V{constructor(t,{attributes:s={}}={}){Object.assign(s,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,s)}}const Y=`#version 300 es
in vec2 position;
void main() {
    gl_Position = vec4(position, 0.0, 1.0);
}
`,oo=`#version 300 es
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
`;function eo(e){const{colorStops:t=["#00d8ff","#7cff67","#00d8ff"],amplitude:s=1}=e,i=m.useRef(e);i.current=e;const c=m.useRef(null);return m.useEffect(()=>{const r=c.current;if(!r)return;const u=new W,n=u.gl;n.clearColor(1,1,1,1);let a;function p(){if(!r)return;const l=r.offsetWidth,f=r.offsetHeight;u.setSize(l,f),a&&(a.uniforms.uResolution.value=[l,f])}window.addEventListener("resize",p);const x=new X(n);x.attributes.uv&&delete x.attributes.uv;const v=t.map(l=>{const f=new k(l);return[f.r,f.g,f.b]});a=new D(n,{vertex:Y,fragment:oo,uniforms:{uTime:{value:0},uAmplitude:{value:s},uColorStops:{value:v},uResolution:{value:[r.offsetWidth,r.offsetHeight]}}});const B=new $(n,{geometry:x,program:a});r.appendChild(n.canvas);let C=0;const w=l=>{C=requestAnimationFrame(w);const{time:f=l*.01,speed:T=1}=i.current;a.uniforms.uTime.value=f*T*.1,a.uniforms.uAmplitude.value=i.current.amplitude??1;const E=i.current.colorStops??t;a.uniforms.uColorStops.value=E.map(G=>{const y=new k(G);return[y.r,y.g,y.b]}),u.render({scene:B})};return C=requestAnimationFrame(w),p(),()=>{var l;cancelAnimationFrame(C),window.removeEventListener("resize",p),r&&n.canvas.parentNode===r&&r.removeChild(n.canvas),(l=n.getExtension("WEBGL_lose_context"))==null||l.loseContext()}},[s,t]),o.jsx("div",{ref:c,className:"aurora-container"})}function so(){const[e,t]=m.useState(!1),{colorMode:s,toggleColorMode:i}=H(),c=()=>t(!e),r=()=>{window.scrollTo({top:0,behavior:"smooth"})},u=d("background.light","background.dark"),n=d("transparent","transparent"),a=d("background.light","background.dark"),p=d("text.dark.primary","text.dark.primary"),x=d("secondary.500","secondary.400"),v=d(["#3A29FF","#FF94B4","#FF3232"],["#00FFAA","#3300FF","#8800FF"]);return o.jsxs(b,{position:"relative",children:[o.jsxs(S,{as:"nav",bg:n,padding:"1.2rem",color:p,align:"center",justify:"space-between",boxShadow:"md",position:"fixed",top:"0",width:"100%",zIndex:"1000",children:[o.jsx(b,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"-1",children:o.jsx(eo,{colorStops:v,speed:.5})}),o.jsx(h,{to:"/",children:o.jsx(q,{fontSize:"xl",fontWeight:"bold",cursor:"pointer",_hover:{color:x},children:"NEBIE Guillaume"})}),o.jsx(j,{spacing:6,display:{base:"none",md:"flex"},children:o.jsx(z,{})}),o.jsxs(j,{spacing:4,bg:u,children:[o.jsx(M,{"aria-label":"Toggle Dark Mode",icon:s==="light"?o.jsx(U,{}):o.jsx(K,{}),onClick:i,variant:"ghost"}),o.jsx(M,{"aria-label":"Ouvrir le menu",icon:e?o.jsx(Z,{}):o.jsx(J,{onClick:r}),size:"lg",display:{base:"flex",md:"none"},onClick:c,variant:"ghost"})]})]}),e&&o.jsx(S,{direction:"column",bg:a,position:"absolute",top:"4rem",left:"0",width:"100%",padding:"1rem",zIndex:"10",boxShadow:"lg",transition:"all 0.3s ease-in-out",children:o.jsx(z,{isMobile:!0})}),o.jsx(b,{height:"75px"})]})}export{so as default};
