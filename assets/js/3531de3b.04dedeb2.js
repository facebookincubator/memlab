"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3432],{5788:(e,r,n)=>{n.d(r,{Iu:()=>p,yg:()=>f});var t=n(1504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||g[m]||a;return n?t.createElement(f,s(s({ref:r},p),{},{components:n})):t.createElement(f,s({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9576:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(5072),o=(n(1504),n(5788));const a={id:"core_src.IBrowserInfo",title:"Interface: IBrowserInfo",sidebar_label:"IBrowserInfo",custom_edit_url:null},s=void 0,i={unversionedId:"api/interfaces/core_src.IBrowserInfo",id:"api/interfaces/core_src.IBrowserInfo",title:"Interface: IBrowserInfo",description:"This data structure contains the input configuration for the browser and",source:"@site/docs/api/interfaces/core_src.IBrowserInfo.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IBrowserInfo",permalink:"/memlab/docs/api/interfaces/core_src.IBrowserInfo",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IBrowserInfo",title:"Interface: IBrowserInfo",sidebar_label:"IBrowserInfo",custom_edit_url:null},sidebar:"sidebar",previous:{title:"StringAnalysis",permalink:"/memlab/docs/api/classes/heap_analysis_src.StringAnalysis"},next:{title:"IHeapEdge",permalink:"/memlab/docs/api/interfaces/core_src.IHeapEdge"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:'<a id="_browserversion" name="_browserversion"></a> <strong>_browserVersion</strong>: <code>string</code>',id:"-_browserversion-string",level:3},{value:'<a id="_consolemessages" name="_consolemessages"></a> <strong>_consoleMessages</strong>: <code>string</code>[]',id:"-_consolemessages-string",level:3},{value:'<a id="_puppeteerconfig" name="_puppeteerconfig"></a> <strong>_puppeteerConfig</strong>: <code>LaunchOptions</code>',id:"-_puppeteerconfig-launchoptions",level:3}],p={toc:c},u="wrapper";function g(e){let{components:r,...n}=e;return(0,o.yg)(u,(0,t.c)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This data structure contains the input configuration for the browser and\noutput data from the browser. You can retrieve the instance of this type\nthrough ",(0,o.yg)("a",{parentName:"p",href:"/memlab/docs/api/modules/core_src#runmetainfo"},"RunMetaInfo"),"."),(0,o.yg)("h2",{id:"properties"},"Properties"),(0,o.yg)("h3",{id:"-_browserversion-string"},(0,o.yg)("a",{id:"\\_browserversion",name:"\\_browserversion"})," ",(0,o.yg)("strong",{parentName:"h3"},"_","browserVersion"),": ",(0,o.yg)("inlineCode",{parentName:"h3"},"string")),(0,o.yg)("p",null,"browser version"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Source"),":",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/6de17a7/packages/core/src/lib/Types.ts#L1194"},"core/src/lib/Types.ts:1194"))))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"-_consolemessages-string"},(0,o.yg)("a",{id:"\\_consolemessages",name:"\\_consolemessages"})," ",(0,o.yg)("strong",{parentName:"h3"},"_","consoleMessages"),": ",(0,o.yg)("inlineCode",{parentName:"h3"},"string"),"[]"),(0,o.yg)("p",null,"all web console output"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Source"),":",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/6de17a7/packages/core/src/lib/Types.ts#L1202"},"core/src/lib/Types.ts:1202"))))),(0,o.yg)("hr",null),(0,o.yg)("h3",{id:"-_puppeteerconfig-launchoptions"},(0,o.yg)("a",{id:"\\_puppeteerconfig",name:"\\_puppeteerconfig"})," ",(0,o.yg)("strong",{parentName:"h3"},"_","puppeteerConfig"),": ",(0,o.yg)("inlineCode",{parentName:"h3"},"LaunchOptions")),(0,o.yg)("p",null,"configuration for puppeteer"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Source"),":",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/6de17a7/packages/core/src/lib/Types.ts#L1198"},"core/src/lib/Types.ts:1198"))))))}g.isMDXComponent=!0}}]);