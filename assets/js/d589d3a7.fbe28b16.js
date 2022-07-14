"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Getting Started",l={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"In this section, you will learn how to use memlab to detect a memory leak.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Command Line Interface",permalink:"/docs/cli/CLI-commands"}},s={},c=[{value:"Write a Test Scenario",id:"write-a-test-scenario",level:3},{value:"Running memlab",id:"running-memlab",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"In this section, you will learn how to use memlab to detect a memory leak.\nPlease make sure you have completed a ",(0,r.kt)("a",{parentName:"p",href:"/docs/installation"},"installation")," step\nin your local machine. We start with defining the scenario file where we\nspecify how memlab should interact with our page."),(0,r.kt)("h3",{id:"write-a-test-scenario"},"Write a Test Scenario"),(0,r.kt)("p",null,"A scenario file is a ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," file that exports functions to provide details about\nhow to navigate to and interact with your page. Now let's copy the following\nexample and save it as ",(0,r.kt)("inlineCode",{parentName:"p"},"~/memlab/scenraio.js")," file somewhere we can find later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// initial page load\'s url\nfunction url() {\n  return "https://www.youtube.com";\n}\n\n// action where you suspect the memory leak might be happening\nasync function action(page) {\n  await page.click(\'[id="video-title-link"]\');\n}\n\n// how to go back to the state before action\nasync function back(page) {\n  await page.click(\'[id="logo-icon"]\');\n}\n\nmodule.exports = { action, back, url };\n')),(0,r.kt)("p",null,"For more details, check out the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core_src.IScenario"},"IScenario API doc"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Feel free to save the scenario file anywhere. We will be running memlab\nwith this file shortly."))),(0,r.kt)("h3",{id:"running-memlab"},"Running memlab"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab")," in your console to make sure it is installed. You should see\nthe help instructions in console."),(0,r.kt)("p",null,"Now let's pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/memlab/scenario.js")," file we created earlier to ",(0,r.kt)("inlineCode",{parentName:"p"},"memlab"),"\nas shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ memlab run --scenario ~/memlab/scenario.js\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It is highly recommended that the web app under test serves unminified code,\nwhich makes the retainer trace and symbols in leak report easier to understand."))),(0,r.kt)("p",null,"memlab will lively update a breadcrumb showing the progress of interaction\nwith the target web page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"page-load(baseline)[s1] > action-on-page(target)[s2] > revert(final)[s3]\nConnecting to web server...\n")),(0,r.kt)("p",null,"After memlab finishes running, the console will show the JavaScript heap size\nof each navigation step and all leak objects grouped by their potential root\ncauses. The details may differ in your case but it will be something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"page-load[23MB](baseline)[s1] > action-on-page[37.3MB](target)[s2] > revert[35.9MB](final)[s3]\n")),(0,r.kt)("p",null,"A breakdown of each step in the breadcrumb:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"page-load (baseline)")," - this is our starting point where we see how much\nmemory was allocated when the page is loaded"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"action-on-page(target)")," - after performing the action - in our case, it is\nclicking the link with id ",(0,r.kt)("inlineCode",{parentName:"li"},'"video-title-link"')," - we see how much memory\nwas allocated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"revert(final)")," - this is when we perform the back/reverse action.\nIn this example, it is going back to the home page.")),(0,r.kt)("p",null,"Continue ",(0,r.kt)("a",{parentName:"p",href:"guides/guides-detached-dom"},"reading here")," on how to debug the\nmemory leak traces reported by memlab."),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-memlab-works"},"here")," if you would like to\nlearn how memlab detects memory leak."))}p.isMDXComponent=!0}}]);