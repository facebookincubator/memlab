"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[5170],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return a?r.createElement(k,s(s({ref:t},c),{},{components:a})):r.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const l={id:"api_src.BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",sidebar_label:"BrowserInteractionResultReader",custom_edit_url:null},s=void 0,o={unversionedId:"api/classes/api_src.BrowserInteractionResultReader",id:"api/classes/api_src.BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",description:"A utility entity to read all generated files from",source:"@site/docs/api/classes/api_src.BrowserInteractionResultReader.md",sourceDirName:"api/classes",slug:"/api/classes/api_src.BrowserInteractionResultReader",permalink:"/memlab/docs/api/classes/api_src.BrowserInteractionResultReader",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_src.BrowserInteractionResultReader",title:"Class: BrowserInteractionResultReader",sidebar_label:"BrowserInteractionResultReader",custom_edit_url:null},sidebar:"sidebar",previous:{title:"heap-analysis/src",permalink:"/memlab/docs/api/modules/heap_analysis_src"},next:{title:"SnapshotResultReader",permalink:"/memlab/docs/api/classes/api_src.SnapshotResultReader"}},i={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Methods",id:"methods",level:2},{value:'<a id="cleanup"></a><strong>cleanup</strong>()',id:"cleanup",level:3},{value:'<a id="getinteractionsteps"></a><strong>getInteractionSteps</strong>()',id:"getinteractionsteps",level:3},{value:'<a id="getrootdirectory"></a><strong>getRootDirectory</strong>()',id:"getrootdirectory",level:3},{value:'<a id="getrunmetainfo"></a><strong>getRunMetaInfo</strong>()',id:"getrunmetainfo",level:3},{value:'<a id="getsnapshotfiledir"></a><strong>getSnapshotFileDir</strong>()',id:"getsnapshotfiledir",level:3},{value:'<a id="getsnapshotfiles"></a><strong>getSnapshotFiles</strong>()',id:"getsnapshotfiles",level:3},{value:'<a id="from"></a><code>Static</code> <strong>from</strong>(<code>workDir?</code>)',id:"static-fromworkdir",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A utility entity to read all generated files from\nthe directory holding the data and results from the\nlast MemLab browser interaction run"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"default")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BrowserInteractionResultReader"))))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"cleanup"},(0,n.kt)("a",{id:"cleanup"}),(0,n.kt)("strong",{parentName:"h3"},"cleanup"),"()"),(0,n.kt)("p",null,"clean up data/files generated from the memlab browser interaction run"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"void")," | no return value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  // delete all data/files generated by takeSnapshots\n  result.cleanup();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BaseResultReader.ts#L93"},"api/src/result-reader/BaseResultReader.ts:93"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getinteractionsteps"},(0,n.kt)("a",{id:"getinteractionsteps"}),(0,n.kt)("strong",{parentName:"h3"},"getInteractionSteps"),"()"),(0,n.kt)("p",null,"browser interaction step sequence"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"E2EStepInfo"),"[] | an array of browser interaction step information"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  const steps = result.getInteractionSteps();\n  // print each browser interaction's name and JavaScript heap size (in bytes)\n  steps.forEach(step => console.log(step.name, step.JSHeapUsedSize))\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L106"},"api/src/result-reader/BrowserInteractionResultReader.ts:106"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getrootdirectory"},(0,n.kt)("a",{id:"getrootdirectory"}),(0,n.kt)("strong",{parentName:"h3"},"getRootDirectory"),"()"),(0,n.kt)("p",null,"get the directory where the data and generated files of\nthe memlab run were stored"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," | absolute path of the directory"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  // get the directory that stores all the files\n  // generated from the takeSnapshots call\n  const dataDir = result.getRootDirectory();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BaseResultReader.ts#L72"},"api/src/result-reader/BaseResultReader.ts:72"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getrunmetainfo"},(0,n.kt)("a",{id:"getrunmetainfo"}),(0,n.kt)("strong",{parentName:"h3"},"getRunMetaInfo"),"()"),(0,n.kt)("p",null,"general meta data of the browser interaction run"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"RunMetaInfo")," | meta data about the entire browser interaction"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  const metaInfo = result.getRunMetaInfo();\n  // print all browser web console output\n  console.log(metaInfo.browserInfo._consoleMessages.join('\\n'));\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L131"},"api/src/result-reader/BrowserInteractionResultReader.ts:131"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsnapshotfiledir"},(0,n.kt)("a",{id:"getsnapshotfiledir"}),(0,n.kt)("strong",{parentName:"h3"},"getSnapshotFileDir"),"()"),(0,n.kt)("p",null,"get the directory holding all snapshot files"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," | the absolute path of the directory"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  // get the absolute path the directory holding all snapshot files\n  const files = result.getSnapshotFileDir();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L84"},"api/src/result-reader/BrowserInteractionResultReader.ts:84"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getsnapshotfiles"},(0,n.kt)("a",{id:"getsnapshotfiles"}),(0,n.kt)("strong",{parentName:"h3"},"getSnapshotFiles"),"()"),(0,n.kt)("p",null,"get all snapshot files generated from last memlab browser interaction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Returns"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string"),"[] | an array of snapshot file's absolute path"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Examples"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {takeSnapshots} = require('@memlab/api');\n\n(async function () {\n  const scenario = { url: () => 'https://www.npmjs.com'};\n  const result = await takeSnapshots({scenario});\n\n  // get absolute paths of all snapshot files\n  const files = result.getSnapshotFiles();\n})();\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L59"},"api/src/result-reader/BrowserInteractionResultReader.ts:59"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"static-fromworkdir"},(0,n.kt)("a",{id:"from"}),(0,n.kt)("inlineCode",{parentName:"h3"},"Static")," ",(0,n.kt)("strong",{parentName:"h3"},"from"),"(",(0,n.kt)("inlineCode",{parentName:"h3"},"workDir?"),")"),(0,n.kt)("p",null,"build a result reader from a data directory where the data\nand generated files of a memlab run were stored"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"workDir"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," | ",(0,n.kt)("inlineCode",{parentName:"li"},"''")," | absolute path of the data directory"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns"),": ",(0,n.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/api_src.BrowserInteractionResultReader"},(0,n.kt)("inlineCode",{parentName:"a"},"BrowserInteractionResultReader"))," | the ResultReader instance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"const {BrowserInteractionResultReader} = require('@memlab/api');\n\nconst dataDir = '/tmp/memlab'; // where the last memlab run stores results\nconst reader = BrowserInteractionResultReader.from(dataDir);\nreader.cleanup(); // clean up the results\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Source"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/85aceb0/packages/api/src/result-reader/BrowserInteractionResultReader.ts#L39"},"api/src/result-reader/BrowserInteractionResultReader.ts:39"))))))}m.isMDXComponent=!0}}]);