function F(e,t){let o;{var n=Error.stackTraceLimit;Error.stackTraceLimit=1/0,o=new Error(e),Error.stackTraceLimit=n}return o.stack=X(o.stack,t),o}function X(e,t){if(!e)return e;const o=ee(e);let n=0;return o.filter(a=>a.includes(" (internal/")||a.includes(" (node:internal")?!1:n<t&&Z(a)?(n++,!1):!0).join(`
`)}function Z(e){return e.startsWith("    at ")}function ee(e){return e.split(/\r?\n/)}const te="0.4.28",m={projectName:"vite-plugin-ssr",projectVersion:te,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr",discordInviteToolChannel:"https://discord.com/invite/qTq92FQzKb"};globalThis.__vite_plugin_ssr__instances=globalThis.__vite_plugin_ssr__instances||[];globalThis.__vite_plugin_ssr__instances.push(m.projectVersion);const O=`[${m.npmPackageName}@${m.projectVersion}]`,oe=`${O}[Bug]`,re=`${O}[Wrong Usage]`,ne=`${O}[Warning]`,se=`${O}[Info]`,W=2;function s(e,t){if(e)return;const o=(()=>{if(!t)return"";const r=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${m.projectName} maintainers; you can ignore this): ${r}.`})();throw F([`${oe} You stumbled upon a bug in ${m.projectName}'s source code.`,`Reach out at ${m.githubRepository}/issues/new or ${m.discordInviteToolChannel} and include this error stack (the error stack is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Do not hesitate to reach out as it makes ${m.projectName} more robust.`,o].join(" "),W)}function g(e,t){if(e)return;const o=t.startsWith("[")?"":" ";throw F(`${re}${o}${t}`,W)}function ae(e){return F(`${O} ${e}`,W)}let P=new Set;function B(e,t,{onlyOnce:o,showStackTrace:n}){if(e)return;const r=`${ne} ${t}`;if(o){const a=o===!0?r:o;if(P.has(a))return;P.add(a)}console.warn(n?new Error(r):r)}function Pr(e,t,{onlyOnce:o}){if(e)return;const n=`${se} ${t}`;if(o){const r=n;if(P.has(r))return;P.add(r)}console.log(n)}function T(e,t,o){return typeof e=="string"?L(e.split(""),t,o).join(""):L(e,t,o)}function L(e,t,o){const n=[];let r=t>=0?t:e.length+t;s(r>=0&&r<=e.length);let a=o>=0?o:e.length+o;for(s(a>=0&&a<=e.length);!(r===a||(r===e.length&&(r=0),r===a));){const l=e[r];s(l!==void 0),n.push(l),r++}return n}function le(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function ie(e,t){s(le(e),{url:e}),s(t.startsWith("/"),{url:e,baseUrl:t});const[o,...n]=e.split("#");s(o!==void 0);const r=["",...n].join("#")||null;s(r===null||r.startsWith("#"));const a=r===null?"":M(r.slice(1)),[l,...i]=o.split("?");s(l!==void 0);const _=["",...i].join("?")||null;s(_===null||_.startsWith("?"),{url:e,searchOriginal:_});const u={},S={};Array.from(new URLSearchParams(_||"")).forEach(([b,y])=>{u[b]=y,S[b]=[...S[b]||[],y]});const{origin:f,pathnameResolved:j}=ce(e,t);s(f===null||f===M(f),{origin:f}),s(j.startsWith("/"),{url:e,pathnameResolved:j}),s(f===null||e.startsWith(f),{url:e,origin:f});const z=l.slice((f||"").length);{const b=`${f||""}${z}${_||""}${r||""}`;s(e===b,{url:e,urlRecreated:b})}let{pathname:c,hasBaseUrl:p}=fe(j,t);return c=_e(c),s(c.startsWith("/")),{origin:f,pathname:c,pathnameOriginal:z,hasBaseUrl:p,search:u,searchAll:S,searchOriginal:_,hash:a,hashOriginal:r}}function M(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function _e(e){return e.split("/").map(t=>M(t).split("/").join("%2F")).join("/")}function ce(e,t){var o;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let n,r;try{const a=new URL(e);n=a.origin,r=a.pathname}catch{n=null;let l=typeof window<"u"&&((o=window==null?void 0:window.document)===null||o===void 0?void 0:o.baseURI);l=l||"http://fake.example.org"+t,r=new URL(e,l).pathname}return s(r.startsWith("/"),{url:e,pathnameResolved:r}),s(r===r.split("?")[0].split("#")[0]),{origin:n,pathnameResolved:r}}function ue(e){s(e.startsWith("/"))}function de(e){s(e.startsWith("/")),s(!e.includes("?")),s(!e.includes("#"))}function fe(e,t){de(e),ue(t);let o=e;if(s(o.startsWith("/")),s(t.startsWith("/")),t==="/")return{pathname:e,hasBaseUrl:!0};let n=t;return t.endsWith("/")&&o===T(t,0,-1)&&(n=T(t,0,-1),s(o===n)),o.startsWith(n)?(s(o.startsWith("/")||o.startsWith("http")),s(o.startsWith(n)),o=o.slice(n.length),o.startsWith("/")||(o="/"+o),s(o.startsWith("/")),{pathname:o,hasBaseUrl:!0}):{pathname:e,hasBaseUrl:!1}}function G(e,t){Object.assign(e,t)}function R(e){return e instanceof Function||typeof e=="function"}function x(e){return typeof e=="object"&&e!==null}function ge(e){return Array.from(new Set(e))}function Tr(e){return(t,o)=>{const n=e(t),r=e(o);return n===r?0:n>r?-1:1}}function pe(e){return(t,o)=>{const n=e(t),r=e(o);if(s([!0,!1,null].includes(n)),s([!0,!1,null].includes(r)),n===r)return 0;if(n===!0||r===!1)return-1;if(r===!0||n===!1)return 1;s(!1)}}function be(e){return pe(t=>{const o=e(t);return o===null?null:!o})}function me(){return typeof window<"u"&&typeof window.scrollY=="number"}function d(e,t,o="unknown"){if(!(typeof e=="object"&&e!==null&&t in e))return o==="undefined";if(o==="unknown")return!0;const r=e[t];return o==="array"?Array.isArray(r):o==="string[]"?Array.isArray(r)&&r.every(a=>typeof a=="string"):o==="function"?R(r):Array.isArray(o)?typeof r=="string"&&o.includes(r):o==="null"?r===null:o==="undefined"?r===void 0:o==="true"?r===!0:o==="false"?r===!1:typeof r===o}function ye(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const ve=e=>e!=null,he="\\";function h(e){s(e&&!e.includes(he),`Wrongly formatted path: ${e}`)}function Se(e){return/\.(c|m)?(j|t)sx?$/.test(e)}const je=["clientRouting"];function xe(e){je.forEach(t=>{if(s(e.fileExports),!(t in e.fileExports))return;const o=`The value of \`${t}\` is only allowed to be \`true\`.`;g(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is forbidden: remove \`export { ${t} }\` instead. (${o})`),g(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${o}`)})}const J=["render","clientRouting","prerender","doNotPrerender"];function Oe(e,t){g(!J.includes(e),`${t} has \`export default { ${e} }\` which is forbidden, use \`export { ${e} }\` instead.`)}function Ne(e){const t={};e.forEach(r=>{$e(r).forEach(({exportName:l,exportValue:i,isFromDefaultExport:_})=>{var u;s(l!=="default"),t[l]=(u=t[l])!==null&&u!==void 0?u:[],t[l].push({exportValue:i,_filePath:r.filePath,_fileType:r.fileType,_isFromDefaultExport:_})})});const o=Pe(),n={};return Object.entries(t).forEach(([r,a])=>{a.forEach(({exportValue:l,_fileType:i,_isFromDefaultExport:_})=>{var u;n[r]=(u=n[r])!==null&&u!==void 0?u:l,i===".page"&&!_&&(r in o||(o[r]=l))})}),s(!("default"in n)),s(!("default"in t)),{exports:n,exportsAll:t,pageExports:o}}function $e(e){const{filePath:t,fileExports:o}=e;s(o);const n=[];return Object.entries(o).sort(be(([r])=>r==="default")).forEach(([r,a])=>{let l=r==="default";if(l)if(!Se(t))r="Page";else{g(x(a),`The \`export default\` of ${t} should be an object.`),Object.entries(a).forEach(([i,_])=>{Oe(i,t),n.push({exportName:i,exportValue:_,isFromDefaultExport:l})});return}n.push({exportName:r,exportValue:a,isFromDefaultExport:l})}),n.forEach(({exportName:r,isFromDefaultExport:a})=>{s(!(a&&J.includes(r)))}),n}function Pe(){return new Proxy({},{get(...e){return me()||B(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function V(e){const t=".page.",o=T(e.split(t),0,-1).join(t);return s(!o.includes("\\")),o}function zr(e){const t=e.filter(o=>I(o));if(g(t.length<=1,`Only one \`_error.page.js\` is allowed. Found several: ${t.join(" ")}`),t.length>0){const o=t[0];return s(o),o}return null}function I(e){return s(!e.includes("\\")),e.includes("/_error")}function Te(e){const t=r=>n.pageId===r||n.isDefaultPageFile&&(n.isRendererPageFile||we(r,n.filePath)),o=ze(e),n={filePath:e,fileType:o,isRelevant:t,isDefaultPageFile:w(e),isRendererPageFile:w(e)&&Me(e),isErrorPageFile:I(e),pageId:V(e)};return n}function ze(e){h(e);const o=e.split("/").slice(-1)[0].split("."),n=o.slice(-3)[0],r=o.slice(-2)[0];if(r==="page")return".page";if(s(n==="page",{filePath:e}),r==="server")return".page.server";if(r==="client")return".page.client";if(r==="route")return".page.route";s(!1,{filePath:e})}function w(e){return h(e),s(e.startsWith("/")),I(e)?!1:e.includes("/_default")}function Me(e){return h(e),s(e.startsWith("/")),e.includes("/renderer/")}function we(e,t){h(e),h(t),s(e.startsWith("/")),s(t.startsWith("/")),s(!e.endsWith("/")),s(!t.endsWith("/")),s(w(t));const o=T(t.split("/"),0,-1).filter(n=>n!=="_default").join("/");return e.startsWith(o)}const Ee=[".page",".page.server",".page.route",".page.client"];function Fe(e){s(d(e,"isGeneratedFile"),"Missing `isGeneratedFile`."),s(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),s(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),s(d(e,"pageFilesLazy","object")),s(d(e,"pageFilesEager","object")),s(d(e,"pageFilesExportNamesLazy","object")),s(d(e,"pageFilesExportNamesEager","object")),s(d(e.pageFilesLazy,".page")),s(d(e.pageFilesLazy,".page.client")||d(e.pageFilesLazy,".page.server"));const t={};N(e.pageFilesLazy).forEach(({filePath:n,pageFile:r,globValue:a})=>{var l;r=t[n]=(l=t[n])!==null&&l!==void 0?l:r;const i=a;A(i),r.loadFile=async()=>{"fileExports"in r||(r.fileExports=await i(),xe(r))}}),N(e.pageFilesExportNamesLazy).forEach(({filePath:n,pageFile:r,globValue:a})=>{var l;r=t[n]=(l=t[n])!==null&&l!==void 0?l:r;const i=a;A(i),r.loadExportNames=async()=>{if(!("exportNames"in r)){const _=await i();s(d(_,"exportNames","string[]"),r.filePath),r.exportNames=_.exportNames}}}),N(e.pageFilesEager).forEach(({filePath:n,pageFile:r,globValue:a})=>{var l;r=t[n]=(l=t[n])!==null&&l!==void 0?l:r;const i=a;s(x(i)),r.fileExports=i}),N(e.pageFilesExportNamesEager).forEach(({filePath:n,pageFile:r,globValue:a})=>{var l;r=t[n]=(l=t[n])!==null&&l!==void 0?l:r;const i=a;s(x(i)),s(d(i,"exportNames","string[]"),r.filePath),r.exportNames=i.exportNames});const o=Object.values(t);return o.forEach(({filePath:n})=>{s(!n.includes("\\"))}),o}function N(e){const t=[];return Object.entries(e).forEach(([o,n])=>{s(Ee.includes(o)),s(x(n)),Object.entries(n).forEach(([r,a])=>{const l=Te(r);s(l.fileType===o),t.push({filePath:r,pageFile:l,globValue:a})})}),t}function A(e){s(R(e))}const v=globalThis.__vite_plugin_ssr__pageFiles=globalThis.__vite_plugin_ssr__pageFiles||{pageFilesAll:void 0,pageFilesGetter:void 0};function Mr(e){v.pageFilesAll=Fe(e)}async function wr(e,t){e?(s(!v.pageFilesGetter),s(t===void 0)):(s(v.pageFilesGetter),s(typeof t=="boolean"),(!v.pageFilesAll||!t)&&await v.pageFilesGetter()),s(v.pageFilesAll);const o=v.pageFilesAll,n=We(o);return{pageFilesAll:o,allPageIds:n}}function We(e){const t=e.filter(({isDefaultPageFile:n})=>!n).map(({filePath:n})=>n).map(V);return ge(t)}function Re(e,t){return H(e,t,!0)}function Er(e,t){return H(e,t,!1)}function H(e,t,o){const n=o?".page.client":".page.server",r=Ie(n,t),a=e.filter(c=>c.isRelevant(t)),l=c=>a.filter(p=>p.isRendererPageFile&&p.fileType===c).sort(r)[0],i=c=>{const p=a.filter(y=>y.pageId===t&&y.fileType===c);g(p.length<=1,`Merge the following files into a single file: ${p.map(y=>y.filePath).join(" ")}`);const b=p[0];return s(b===void 0||!b.isDefaultPageFile),p[0]},_=a.filter(c=>c.isDefaultPageFile&&!c.isRendererPageFile&&(c.fileType===n||c.fileType===".page"));_.sort(r);const u=l(n),S=l(".page"),f=i(n),j=i(".page");return[f,j,..._,u,S].filter(ve)}function Ie(e,t){return(a,l)=>{s(a.isDefaultPageFile&&l.isDefaultPageFile);{const i=a.isRendererPageFile,_=l.isRendererPageFile;if(!i&&_)return-1;if(!_&&i)return 1;s(i===_)}{const i=k(t,a.filePath),_=k(t,l.filePath);if(i<_)return-1;if(_<i)return 1;s(i===_)}{if(a.fileType===e&&l.fileType!==e)return-1;if(l.fileType===e&&a.fileType!==e)return 1}{if(a.fileType===".page"&&l.fileType!==".page")return 1;if(l.fileType===".page"&&a.fileType!==".page")return-1}return 0}}function k(e,t){h(e),h(t),s(e.startsWith("/")),s(t.startsWith("/"));let o=0;for(;o<e.length&&o<t.length&&e[o]===t[o];o++);const n=e.slice(o),r=t.slice(o),a=n.split("/").length,l=r.split("/").length;return a+l}function Le(e,t){return Re(e,t)}const Ae="modulepreload",ke=function(e){return"/"+e},D={},Fr=function(t,o,n){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=ke(r),r in D)return;D[r]=!0;const a=r.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${l}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":Ae,a||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),a)return new Promise((_,u)=>{i.addEventListener("load",_),i.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},De=["overrideDefaultPages"],Wr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:De},Symbol.toStringTag,{value:"Module"})),Ce=[],Rr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ce},Symbol.toStringTag,{value:"Module"})),Ue=[],Ir=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ue},Symbol.toStringTag,{value:"Module"})),Be=[],Lr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Be},Symbol.toStringTag,{value:"Module"})),Ge=[],Ar=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ge},Symbol.toStringTag,{value:"Module"})),Je=["headings","default"],kr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Je},Symbol.toStringTag,{value:"Module"})),Ve=["headings","default"],Dr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ve},Symbol.toStringTag,{value:"Module"})),He=["headings","default"],Cr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:He},Symbol.toStringTag,{value:"Module"})),qe=["headings","default"],Ur=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qe},Symbol.toStringTag,{value:"Module"})),Ke=["headings","default"],Br=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ke},Symbol.toStringTag,{value:"Module"})),Ye=["headings","default"],Gr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ye},Symbol.toStringTag,{value:"Module"})),Qe=["headings","default"],Jr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qe},Symbol.toStringTag,{value:"Module"})),Xe=["headings","default"],Vr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xe},Symbol.toStringTag,{value:"Module"})),Ze=["headings","default"],Hr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ze},Symbol.toStringTag,{value:"Module"})),et=["headings","default"],qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:et},Symbol.toStringTag,{value:"Module"})),tt=["headings","default"],Kr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tt},Symbol.toStringTag,{value:"Module"})),ot=["headings","default"],Yr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ot},Symbol.toStringTag,{value:"Module"})),rt=["headings","default"],Qr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rt},Symbol.toStringTag,{value:"Module"})),nt=["render","Page"],Xr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nt},Symbol.toStringTag,{value:"Module"})),st=["headings","default"],Zr=Object.freeze(Object.defineProperty({__proto__:null,exportNames:st},Symbol.toStringTag,{value:"Module"})),at=["headings","default"],en=Object.freeze(Object.defineProperty({__proto__:null,exportNames:at},Symbol.toStringTag,{value:"Module"})),lt=["headings","default"],tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lt},Symbol.toStringTag,{value:"Module"})),it=["headings","default"],on=Object.freeze(Object.defineProperty({__proto__:null,exportNames:it},Symbol.toStringTag,{value:"Module"})),_t=["headings","default"],rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_t},Symbol.toStringTag,{value:"Module"})),ct=["headings","default"],nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ct},Symbol.toStringTag,{value:"Module"})),ut=["headings","default"],sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ut},Symbol.toStringTag,{value:"Module"})),dt=["headings","default"],an=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dt},Symbol.toStringTag,{value:"Module"})),ft=["headings","default"],ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ft},Symbol.toStringTag,{value:"Module"})),gt=["headings","default"],_n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gt},Symbol.toStringTag,{value:"Module"})),pt=["headings","default"],cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pt},Symbol.toStringTag,{value:"Module"})),bt=["headings","default"],un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bt},Symbol.toStringTag,{value:"Module"})),mt=["headings","default"],dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mt},Symbol.toStringTag,{value:"Module"})),yt=["headings","default"],fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yt},Symbol.toStringTag,{value:"Module"})),vt=["headings","default"],gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vt},Symbol.toStringTag,{value:"Module"})),ht=["headings","default"],pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ht},Symbol.toStringTag,{value:"Module"})),St=["headings","default"],bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:St},Symbol.toStringTag,{value:"Module"})),jt=["headings","default"],mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jt},Symbol.toStringTag,{value:"Module"})),xt=["headings","default"],yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xt},Symbol.toStringTag,{value:"Module"})),Ot=["headings","default"],vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Nt=["headings","default"],hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"})),$t=["headings","default"],Sn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$t},Symbol.toStringTag,{value:"Module"})),Pt=["headings","default"],jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Pt},Symbol.toStringTag,{value:"Module"})),Tt=["headings","default"],xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),zt=["headings","default"],On=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zt},Symbol.toStringTag,{value:"Module"})),Mt=["headings","default"],Nn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mt},Symbol.toStringTag,{value:"Module"})),wt=["headings","default"],$n=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wt},Symbol.toStringTag,{value:"Module"})),Et=["headings","default"],Pn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Et},Symbol.toStringTag,{value:"Module"})),Ft=["headings","default"],Tn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"})),Wt=["headings","default"],zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wt},Symbol.toStringTag,{value:"Module"})),Rt=["headings","default"],Mn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Rt},Symbol.toStringTag,{value:"Module"})),It=["headings","default"],wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"})),Lt=["headings","default"],En=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lt},Symbol.toStringTag,{value:"Module"})),At=["headings","default"],Fn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"})),kt=["headings","default"],Wn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:kt},Symbol.toStringTag,{value:"Module"})),Dt=["headings","default"],Rn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Dt},Symbol.toStringTag,{value:"Module"})),Ct=["headings","default"],In=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ct},Symbol.toStringTag,{value:"Module"})),Ut=["headings","default"],Ln=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ut},Symbol.toStringTag,{value:"Module"})),Bt=["headings","default"],An=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bt},Symbol.toStringTag,{value:"Module"})),Gt=["headings","default"],kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Gt},Symbol.toStringTag,{value:"Module"})),Jt=["headings","default"],Dn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jt},Symbol.toStringTag,{value:"Module"})),Vt=["headings","default"],Cn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vt},Symbol.toStringTag,{value:"Module"})),Ht=["headings","default"],Un=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ht},Symbol.toStringTag,{value:"Module"})),qt=["headings","default"],Bn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qt},Symbol.toStringTag,{value:"Module"})),Kt=["headings","default"],Gn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Kt},Symbol.toStringTag,{value:"Module"})),Yt=["headings","default"],Jn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yt},Symbol.toStringTag,{value:"Module"})),Qt=["headings","default"],Vn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qt},Symbol.toStringTag,{value:"Module"})),Xt=["headings","default"],Hn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xt},Symbol.toStringTag,{value:"Module"})),Zt=["headings","default"],qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zt},Symbol.toStringTag,{value:"Module"})),eo=["headings","default"],Kn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:eo},Symbol.toStringTag,{value:"Module"})),to=["Page"],Yn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:to},Symbol.toStringTag,{value:"Module"})),oo=["headings","default"],Qn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:oo},Symbol.toStringTag,{value:"Module"})),ro=["headings","default"],Xn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ro},Symbol.toStringTag,{value:"Module"})),no=["headings","default"],Zn=Object.freeze(Object.defineProperty({__proto__:null,exportNames:no},Symbol.toStringTag,{value:"Module"})),so=["headings","default"],es=Object.freeze(Object.defineProperty({__proto__:null,exportNames:so},Symbol.toStringTag,{value:"Module"})),ao=["headings","default"],ts=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ao},Symbol.toStringTag,{value:"Module"})),lo=["headings","default"],os=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lo},Symbol.toStringTag,{value:"Module"})),io=["headings","default"],rs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:io},Symbol.toStringTag,{value:"Module"})),_o=["headings","default"],ns=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_o},Symbol.toStringTag,{value:"Module"})),co=["headings","default"],ss=Object.freeze(Object.defineProperty({__proto__:null,exportNames:co},Symbol.toStringTag,{value:"Module"})),uo=["headings","default"],as=Object.freeze(Object.defineProperty({__proto__:null,exportNames:uo},Symbol.toStringTag,{value:"Module"})),fo=["headings","default"],ls=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fo},Symbol.toStringTag,{value:"Module"})),go=["headings","default"],is=Object.freeze(Object.defineProperty({__proto__:null,exportNames:go},Symbol.toStringTag,{value:"Module"})),po=["headings","default"],_s=Object.freeze(Object.defineProperty({__proto__:null,exportNames:po},Symbol.toStringTag,{value:"Module"})),bo=["headings","default"],cs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:bo},Symbol.toStringTag,{value:"Module"})),mo=["headings","default"],us=Object.freeze(Object.defineProperty({__proto__:null,exportNames:mo},Symbol.toStringTag,{value:"Module"})),yo=["headings","default"],ds=Object.freeze(Object.defineProperty({__proto__:null,exportNames:yo},Symbol.toStringTag,{value:"Module"})),vo=["headings","default"],fs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:vo},Symbol.toStringTag,{value:"Module"})),ho=["headings","default"],gs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ho},Symbol.toStringTag,{value:"Module"})),So=["headings","default"],ps=Object.freeze(Object.defineProperty({__proto__:null,exportNames:So},Symbol.toStringTag,{value:"Module"})),jo=["headings","default"],bs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:jo},Symbol.toStringTag,{value:"Module"})),xo=["headings","default"],ms=Object.freeze(Object.defineProperty({__proto__:null,exportNames:xo},Symbol.toStringTag,{value:"Module"})),Oo=["headings","default"],ys=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Oo},Symbol.toStringTag,{value:"Module"})),No=["headings","default"],vs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:No},Symbol.toStringTag,{value:"Module"})),$o=["headings","default"],hs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:$o},Symbol.toStringTag,{value:"Module"})),Po=["headings","default"],Ss=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Po},Symbol.toStringTag,{value:"Module"})),To=["headings","default"],js=Object.freeze(Object.defineProperty({__proto__:null,exportNames:To},Symbol.toStringTag,{value:"Module"})),zo=["headings","default"],xs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:zo},Symbol.toStringTag,{value:"Module"})),Mo=["headings","default"],Os=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Mo},Symbol.toStringTag,{value:"Module"})),wo=["headings","default"],Ns=Object.freeze(Object.defineProperty({__proto__:null,exportNames:wo},Symbol.toStringTag,{value:"Module"})),Eo=["headings","default"],$s=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Eo},Symbol.toStringTag,{value:"Module"})),Fo=["headings","default"],Ps=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Fo},Symbol.toStringTag,{value:"Module"})),Wo=["headings","default"],Ts=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Wo},Symbol.toStringTag,{value:"Module"})),Ro=["headings","default"],zs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ro},Symbol.toStringTag,{value:"Module"})),Io=["headings","default"],Ms=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Io},Symbol.toStringTag,{value:"Module"})),Lo=["headings","default"],ws=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Lo},Symbol.toStringTag,{value:"Module"})),Ao=["headings","default"],Es=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ao},Symbol.toStringTag,{value:"Module"})),ko=["headings","default"],Fs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ko},Symbol.toStringTag,{value:"Module"})),Do=["headings","default"],Ws=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Do},Symbol.toStringTag,{value:"Module"})),Co=["headings","default"],Rs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Co},Symbol.toStringTag,{value:"Module"})),Uo=["headings","default"],Is=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Uo},Symbol.toStringTag,{value:"Module"})),Bo=["headings","default"],Ls=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Bo},Symbol.toStringTag,{value:"Module"})),Go=["headings","default"],As=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Go},Symbol.toStringTag,{value:"Module"})),Jo=["headings","default"],ks=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Jo},Symbol.toStringTag,{value:"Module"})),Vo=["headings","default"],Ds=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Vo},Symbol.toStringTag,{value:"Module"})),Ho=["headings","default"],Cs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ho},Symbol.toStringTag,{value:"Module"})),qo=["headings","default"],Us=Object.freeze(Object.defineProperty({__proto__:null,exportNames:qo},Symbol.toStringTag,{value:"Module"})),Ko=["headings","default"],Bs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ko},Symbol.toStringTag,{value:"Module"})),Yo=["headings","default"],Gs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Yo},Symbol.toStringTag,{value:"Module"})),Qo=["headings","default"],Js=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Qo},Symbol.toStringTag,{value:"Module"})),Xo=["headings","default"],Vs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Xo},Symbol.toStringTag,{value:"Module"})),Zo=["headings","default"],Hs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Zo},Symbol.toStringTag,{value:"Module"})),er=["headings","default"],qs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:er},Symbol.toStringTag,{value:"Module"})),tr=["headings","default"],Ks=Object.freeze(Object.defineProperty({__proto__:null,exportNames:tr},Symbol.toStringTag,{value:"Module"})),or=["headings","default"],Ys=Object.freeze(Object.defineProperty({__proto__:null,exportNames:or},Symbol.toStringTag,{value:"Module"})),rr=["headings","default"],Qs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:rr},Symbol.toStringTag,{value:"Module"})),nr=["headings","default"],Xs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:nr},Symbol.toStringTag,{value:"Module"})),sr=["headings","default"],Zs=Object.freeze(Object.defineProperty({__proto__:null,exportNames:sr},Symbol.toStringTag,{value:"Module"})),ar=["headings","default"],ea=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ar},Symbol.toStringTag,{value:"Module"})),lr=["headings","default"],ta=Object.freeze(Object.defineProperty({__proto__:null,exportNames:lr},Symbol.toStringTag,{value:"Module"})),ir=["headings","default"],oa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ir},Symbol.toStringTag,{value:"Module"})),_r=["headings","default"],ra=Object.freeze(Object.defineProperty({__proto__:null,exportNames:_r},Symbol.toStringTag,{value:"Module"})),cr=["headings","default"],na=Object.freeze(Object.defineProperty({__proto__:null,exportNames:cr},Symbol.toStringTag,{value:"Module"})),ur=["headings","default"],sa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:ur},Symbol.toStringTag,{value:"Module"})),dr=["headings","default"],aa=Object.freeze(Object.defineProperty({__proto__:null,exportNames:dr},Symbol.toStringTag,{value:"Module"})),fr=["headings","default"],la=Object.freeze(Object.defineProperty({__proto__:null,exportNames:fr},Symbol.toStringTag,{value:"Module"})),gr=["headings","default"],ia=Object.freeze(Object.defineProperty({__proto__:null,exportNames:gr},Symbol.toStringTag,{value:"Module"})),pr=["headings","default"],_a=Object.freeze(Object.defineProperty({__proto__:null,exportNames:pr},Symbol.toStringTag,{value:"Module"})),br=["render"],ca=Object.freeze(Object.defineProperty({__proto__:null,exportNames:br},Symbol.toStringTag,{value:"Module"})),{projectVersion:E}=m,C="__vite_plugin_ssr_version",U=globalThis[C]=globalThis[C]=E;g(U===E,`Multiple versions \`vite-pluging-ssr@${U}\` and \`vite-pluging-ssr@${E}\` loaded. Make sure to load the same version.`);const q=Math.random();globalThis.__vite_plugin_ssr__codeId=globalThis.__vite_plugin_ssr__codeId||q;B(q===globalThis.__vite_plugin_ssr__codeId,"vite-plugin-ssr is included twice in your bundle, which should be avoided in order reduce KBs loaded by the browser",{onlyOnce:!0});function ua(e){const t=window.location.href,{origin:o,searchOriginal:n,hashOriginal:r,pathnameOriginal:a}=ie(t,"/");let l;if(e!=null&&e.withoutHash){l=`${a}${n||""}`;const i=`${o||""}${l}${r||""}`;s(t===i,{url:t,urlRecreated:i})}else{l=`${a}${n||""}${r||""}`;const i=`${o||""}${l}`;s(t===i,{url:t,urlRecreated:i})}return l}const mr=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),o=t[1],n=t[2];return new RegExp(o,n)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function K(e){const t=JSON.parse(e);return Y(t)}function Y(e){return typeof e=="string"?yr(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,o])=>{e[t]=Y(o)}),e)}function yr(e){for(const{match:t,deserialize:o}of mr)if(t(e))return o(e,K);return e}function da(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;s(t);const o=K(t);s(d(o,"pageContext","object"));const{pageContext:n}=o;if(s(d(n,"_pageId","string")),"_serverSideErrorWhileStreaming"in n)throw ae("An error occurred on the server while rendering/streaming to HTML. Check your server logs.");return G(n,{_pageContextRetrievedFromServer:{...n},_comesDirectlyFromServer:!0}),n}function vr(e,t){if(!(t in e.exports))return null;const o=e.exports[t],n=e.exportsAll[t][0];s(n.exportValue===o);const r=n._filePath;return s(r),s(!t.endsWith(")")),g(R(o),`\`export { ${t} }\` of ${r} should be a function`),{hook:o,filePath:r}}function hr(e,t){vr(e,t)}function Sr(e){const t=Object.entries(e);for(const o in e)delete e[o];t.sort(([o],[n])=>ye(o,n)).forEach(([o,n])=>{e[o]=n})}function fa(e){s("exports"in e),s("exportsAll"in e),s("pageExports"in e),s(x(e.pageExports));const t=e.exports.Page;return G(e,{Page:t}),$r(e),Sr(e),s([!0,!1].includes(e._comesDirectlyFromServer)),e._comesDirectlyFromServer?Or(e):e}const jr=["then","toJSON"],xr=["_pageId","_serverSideErrorWhileStreaming"];let $=!1;function Or(e){return new Proxy(e,{get:o});function t(n){return!(n in e||jr.includes(n)||typeof n=="symbol"||typeof n!="string"||n.startsWith("__v_"))}function o(n,r){return $!==!1&&$!==r&&Nr(e._pageContextRetrievedFromServer,r,t(r)),$=r,window.setTimeout(()=>{$=!1},0),e[r]}}function Nr(e,t,o){if(!o||e===null)return;const n=Object.keys(e).filter(r=>!xr.includes(r));g(!1,[`\`pageContext.${t}\` is not available in the browser.`,`Make sure that \`passToClient.includes('${t}')\`.`,`(Currently \`passToClient\` is \`[${n.map(r=>`'${r}'`).join(", ")}]\`.)`,"More infos at https://vite-plugin-ssr.com/passToClient"].join(" "))}function $r(e){Object.entries(e).forEach(([t,o])=>{delete e[t],e[t]=o})}const Q="__whileFetchingAssets";async function ga(e,t){const o=Le(e,t);try{await Promise.all(o.map(i=>{var _;return(_=i.loadFile)===null||_===void 0?void 0:_.call(i)}))}catch(i){throw i&&Object.assign(i,{[Q]:!0}),i}const{exports:n,exportsAll:r,pageExports:a}=Ne(o);return{exports:n,exportsAll:r,pageExports:a,_pageFilesLoaded:o}}function pa(e){return e?e[Q]===!0:!1}function ba(e){var t;if(d(e.exports,"render"))hr(e,"render");else{const o=e._pageFilesLoaded.filter(r=>r.fileType===".page.client");let n;if(o.length===0){const r=(t=e.urlOriginal)!==null&&t!==void 0?t:window.location.href;n="No file `*.page.client.*` found for URL "+r}else n="One of the following files should export a `render()` hook: "+o.map(r=>r.filePath).join(" ");g(!1,n)}}export{Sn as $,qr as A,Kr as B,Yr as C,Qr as D,Xr as E,Zr as F,en as G,tn as H,on as I,rn as J,nn as K,sn as L,an as M,ln as N,_n as O,cn as P,un as Q,dn as R,fn as S,gn as T,pn as U,bn as V,mn as W,yn as X,vn as Y,hn as Z,Fr as _,s as a,ws as a$,jn as a0,xn as a1,On as a2,Nn as a3,$n as a4,Pn as a5,Tn as a6,zn as a7,Mn as a8,wn as a9,ns as aA,ss as aB,as as aC,ls as aD,is as aE,_s as aF,cs as aG,us as aH,ds as aI,fs as aJ,gs as aK,ps as aL,bs as aM,ms as aN,ys as aO,vs as aP,hs as aQ,Ss as aR,js as aS,xs as aT,Os as aU,Ns as aV,$s as aW,Ps as aX,Ts as aY,zs as aZ,Ms as a_,En as aa,Fn as ab,Wn as ac,Rn as ad,In as ae,Ln as af,An as ag,kn as ah,Dn as ai,Cn as aj,Un as ak,Bn as al,Gn as am,Jn as an,Vn as ao,Hn as ap,qn as aq,Kn as ar,Yn as as,Qn as at,Xn as au,Zn as av,es as aw,ts as ax,os as ay,rs as az,B as b,Es as b0,Fs as b1,Ws as b2,Rs as b3,Is as b4,Ls as b5,As as b6,ks as b7,Ds as b8,Cs as b9,fa as bA,da as bB,ga as bC,zr as bD,vr as bE,K as bF,ae as bG,ue as bH,wr as bI,Le as bJ,le as bK,Pr as bL,pa as bM,hr as bN,ba as bO,Us as ba,Bs as bb,Gs as bc,Js as bd,Vs as be,Hs as bf,qs as bg,Ks as bh,Ys as bi,Qs as bj,Xs as bk,Zs as bl,ea as bm,ta as bn,oa as bo,ra as bp,na as bq,sa as br,aa as bs,la as bt,ia as bu,_a as bv,ca as bw,Mr as bx,ua as by,Er as bz,g as c,d,x as e,I as f,Wr as g,Tr as h,R as i,Rr as j,Ir as k,Lr as l,pe as m,Ar as n,G as o,ie as p,kr as q,Dr as r,T as s,Cr as t,Ur as u,Br as v,Gr as w,Jr as x,Vr as y,Hr as z};
