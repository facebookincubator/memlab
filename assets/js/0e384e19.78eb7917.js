"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Why did we build memlab?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",next:{title:"Installation",permalink:"/docs/installation"}},s={},m=[{value:"Why did we build memlab?",id:"why-did-we-build-memlab",level:2},{value:"What is memlab?",id:"what-is-memlab",level:2},{value:"What else can memlab do?",id:"what-else-can-memlab-do",level:2}],c={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("h2",{id:"why-did-we-build-memlab"},"Why did we build memlab?"),(0,a.kt)("p",null,"One of the challenges in building a single-page application (SPA) like\nFacebook.com is to monitor & detect memory leaks at scale. Especially\nconsidering the number of changes that go live continuously, we built\nmemlab that automates memory leak detection."),(0,a.kt)("h2",{id:"what-is-memlab"},"What is memlab?"),(0,a.kt)("p",null,"memlab is a memory testing framework for JS in browsers."),(0,a.kt)("p",null,"If you define a ",(0,a.kt)("a",{parentName:"p",href:"./api/interfaces/core_src.IScenario"},"test scenario"),"\n(using ",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page#methods"},"Puppeteer API"),")\nteaching memlab how to interact with your Single-page Application (SPA),\nmemlab can handle the rest automatically:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interact with browser"),(0,a.kt)("li",{parentName:"ul"},"Take JavaScript heap snapshots"),(0,a.kt)("li",{parentName:"ul"},"Analyze heap snapshots and filter out memory leaks"),(0,a.kt)("li",{parentName:"ul"},"Aggregate and group memory leaks"),(0,a.kt)("li",{parentName:"ul"},"Generate retainer traces for memory leaks")),(0,a.kt)("p",null,"This can be useful if you want to set up continuous tests finding\nand reporting memory leaks in your SPA."),(0,a.kt)("h2",{id:"what-else-can-memlab-do"},"What else can memlab do?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Object-oriented heap traversing API")," - Supports self-defined memory leak\ndetector and programmatically analyzing JS heap snapshots taken from\nChromium-based browsers, Node.js, Electron.js, and Hermes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory CLI Toolbox")," - Built-in toolbox and APIs for finding memory\noptimization opportunities (not necessarily memory leaks)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory assertions in Node.js")," - Enables unit test or running node.js\nprogram to take a heap snapshot of its own state, do self memory checking,\nor write advanced memory assertions")),(0,a.kt)("p",null,"If you feel curious to test it out on your own:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Head over to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started"},"Getting Started")," section"),(0,a.kt)("li",{parentName:"ul"},"Want to learn more about the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api"},"APIs"),"?")))}p.isMDXComponent=!0}}]);