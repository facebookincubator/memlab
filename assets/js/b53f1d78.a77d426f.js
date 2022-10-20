"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[471],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={id:"core_src.IHeapLocation",title:"Interface: IHeapLocation",sidebar_label:"IHeapLocation",custom_edit_url:null},l=void 0,i={unversionedId:"api/interfaces/core_src.IHeapLocation",id:"api/interfaces/core_src.IHeapLocation",title:"Interface: IHeapLocation",description:"An IHeapLocation instance contains a source location information",source:"@site/docs/api/interfaces/core_src.IHeapLocation.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IHeapLocation",permalink:"/memlab/docs/api/interfaces/core_src.IHeapLocation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IHeapLocation",title:"Interface: IHeapLocation",sidebar_label:"IHeapLocation",custom_edit_url:null},sidebar:"sidebar",previous:{title:"IHeapEdges",permalink:"/memlab/docs/api/interfaces/core_src.IHeapEdges"},next:{title:"IHeapNode",permalink:"/memlab/docs/api/interfaces/core_src.IHeapNode"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:'<a id="column" name="column"></a> <strong>column</strong>: <code>number</code>',id:"-column-number",level:3},{value:'<a id="line" name="line"></a> <strong>line</strong>: <code>number</code>',id:"-line-number",level:3},{value:'<a id="node" name="node"></a> <strong>node</strong>: <code>Nullable</code>&lt;<code>IHeapNode</code>&gt;',id:"-node-nullableiheapnode",level:3},{value:'<a id="script_id" name="script_id"></a> <strong>script_id</strong>: <code>number</code>',id:"-script_id-number",level:3},{value:'<a id="snapshot" name="snapshot"></a> <strong>snapshot</strong>: <code>IHeapSnapshot</code>',id:"-snapshot-iheapsnapshot",level:3}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"IHeapLocation")," instance contains a source location information\nassociated with a JS heap object.\nA heap snapshot is generally a graph where graph nodes are JS heap objects\nand graph edges are JS references among JS heap objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"readonly"))," it is not recommended to modify any ",(0,r.kt)("inlineCode",{parentName:"p"},"IHeapLocation")," instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": V8 or hermes heap snapshot can be parsed by the\n",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/heap_analysis_src#getfullheapfromfile"},"getFullHeapFromFile")," API.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, IHeapNode, IHeapLocation} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  // iterate over each node (heap object)\n  heap.nodes.forEach((node: IHeapNode, i: number) => {\n    const location: Nullable<IHeapLocation> = node.location;\n    if (location) {\n      // use the location API here\n      location.line;\n      // ...\n    }\n  });\n})();\n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"-column-number"},(0,r.kt)("a",{id:"column",name:"column"})," ",(0,r.kt)("strong",{parentName:"h3"},"column"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"get the column number"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/981d16d/packages/core/src/lib/Types.ts#L1202"},"core/src/lib/Types.ts:1202"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-line-number"},(0,r.kt)("a",{id:"line",name:"line"})," ",(0,r.kt)("strong",{parentName:"h3"},"line"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"get the line number"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/981d16d/packages/core/src/lib/Types.ts#L1198"},"core/src/lib/Types.ts:1198"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-node-nullableiheapnode"},(0,r.kt)("a",{id:"node",name:"node"})," ",(0,r.kt)("strong",{parentName:"h3"},"node"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Nullable"),"<",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode")),">"),(0,r.kt)("p",null,"get the heap object this location this location represents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/981d16d/packages/core/src/lib/Types.ts#L1190"},"core/src/lib/Types.ts:1190"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-script_id-number"},(0,r.kt)("a",{id:"script\\_id",name:"script\\_id"})," ",(0,r.kt)("strong",{parentName:"h3"},"script","_","id"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"number")),(0,r.kt)("p",null,"get the script ID of the source file"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/981d16d/packages/core/src/lib/Types.ts#L1194"},"core/src/lib/Types.ts:1194"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-snapshot-iheapsnapshot"},(0,r.kt)("a",{id:"snapshot",name:"snapshot"})," ",(0,r.kt)("strong",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))),(0,r.kt)("p",null,"get the ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")," containing this location instance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/981d16d/packages/core/src/lib/Types.ts#L1186"},"core/src/lib/Types.ts:1186"))))))}m.isMDXComponent=!0}}]);