"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[4129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=i(a),d=r,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||o;return a?n.createElement(u,p(p({ref:t},c),{},{components:a})):n.createElement(u,p({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={id:"core_src.IHeapSnapshot",title:"Interface: IHeapSnapshot",sidebar_label:"IHeapSnapshot",custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/core_src.IHeapSnapshot",id:"api/interfaces/core_src.IHeapSnapshot",title:"Interface: IHeapSnapshot",description:"A heap snapshot is generally a graph where graph nodes are JS heap objects",source:"@site/docs/api/interfaces/core_src.IHeapSnapshot.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core_src.IHeapSnapshot",permalink:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"core_src.IHeapSnapshot",title:"Interface: IHeapSnapshot",sidebar_label:"IHeapSnapshot",custom_edit_url:null},sidebar:"sidebar",previous:{title:"IHeapNodes",permalink:"/memlab/docs/api/interfaces/core_src.IHeapNodes"},next:{title:"IHeapStringNode",permalink:"/memlab/docs/api/interfaces/core_src.IHeapStringNode"}},s={},i=[{value:"Properties",id:"properties",level:2},{value:'<a id="edges" name="edges"></a> <strong>edges</strong>: <code>IHeapEdges</code>',id:"-edges-iheapedges",level:3},{value:'<a id="nodes" name="nodes"></a> <strong>nodes</strong>: <code>IHeapNodes</code>',id:"-nodes-iheapnodes",level:3},{value:"Methods",id:"methods",level:2},{value:'<a id="getanyobjectwithclassname"></a><strong>getAnyObjectWithClassName</strong>(<code>className</code>)',id:"getanyobjectwithclassnameclassname",level:3},{value:'<a id="getnodebyid"></a><strong>getNodeById</strong>(<code>id</code>)',id:"getnodebyidid",level:3},{value:'<a id="hasobjectwithclassname"></a><strong>hasObjectWithClassName</strong>(<code>className</code>)',id:"hasobjectwithclassnameclassname",level:3},{value:'<a id="hasobjectwithpropertyname"></a><strong>hasObjectWithPropertyName</strong>(<code>nameOrIndex</code>)',id:"hasobjectwithpropertynamenameorindex",level:3},{value:'<a id="hasobjectwithtag"></a><strong>hasObjectWithTag</strong>(<code>tag</code>)',id:"hasobjectwithtagtag",level:3}],c={toc:i};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A heap snapshot is generally a graph where graph nodes are JS heap objects\nand graph edges are JS references among JS heap objects. For more details\non the structure of nodes and edges in the heap graph, check out\n",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")," and ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},"IHeapEdge"),"."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"-edges-iheapedges"},(0,r.kt)("a",{id:"edges",name:"edges"})," ",(0,r.kt)("strong",{parentName:"h3"},"edges"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapEdges"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapEdges"))),(0,r.kt)("p",null,"A pseudo array containing all heap graph edges (references to heap objects\nin heap). A JS heap could contain millions of references, so memlab uses\na pseudo array as the collection of all the heap edges. The pseudo\narray provides API to query and traverse all heap references."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, IHeapEdge} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  // get the total number of heap references\n  heap.edges.length;\n\n  heap.edges.forEach((edge: IHeapEdge) => {\n    // traverse each reference in the heap\n  });\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1069"},"core/src/lib/Types.ts:1069"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-nodes-iheapnodes"},(0,r.kt)("a",{id:"nodes",name:"nodes"})," ",(0,r.kt)("strong",{parentName:"h3"},"nodes"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNodes"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNodes"))),(0,r.kt)("p",null,"A pseudo array containing all heap graph nodes (JS objects in heap).\nA JS heap could contain millions of heap objects, so memlab uses\na pseudo array as the collection of all the heap objects. The pseudo\narray provides API to query and traverse all heap objects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, IHeapNode} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  // get the total number of heap objects\n  heap.nodes.length;\n\n  heap.nodes.forEach((node: IHeapNode) => {\n    // traverse each heap object\n  });\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1043"},"core/src/lib/Types.ts:1043"))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"getanyobjectwithclassnameclassname"},(0,r.kt)("a",{id:"getanyobjectwithclassname"}),(0,r.kt)("strong",{parentName:"h3"},"getAnyObjectWithClassName"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"className"),")"),(0,r.kt)("p",null,"Search for the heap and get one of the JS object instances with\na specified constructor name (if there is any)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"className"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | The constructor name of the object instance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),"<",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode")),">"," | a handle pointing to any one of the object instances, returns\n",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if no such object exists in the heap.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {takeNodeMinimalHeap} from '@memlab/core';\n\nclass TestObject {\n  public arr1 = [1, 2, 3];\n  public arr2 = ['1', '2', '3'];\n}\n\n(async function () {\n  const obj = new TestObject();\n  // get a heap snapshot of the current program state\n  const heap: IHeapSnapshot = await takeNodeMinimalHeap();\n\n  const node = heap.getAnyObjectWithClassName('TestObject');\n  console.log(node?.name); // should be 'TestObject'\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1158"},"core/src/lib/Types.ts:1158"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnodebyidid"},(0,r.kt)("a",{id:"getnodebyid"}),(0,r.kt)("strong",{parentName:"h3"},"getNodeById"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"id"),")"),(0,r.kt)("p",null,"If you have the id of a heap node (JS object in heap), use this API\nto get an ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")," associated with the id."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," | id of the heap node (JS object in heap) you would like to query"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),"<",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode")),">"," | the API returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if no heap object has the specified id.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  const node = heap.getNodeById(351);\n  node?.id; // should be 351\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1091"},"core/src/lib/Types.ts:1091"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasobjectwithclassnameclassname"},(0,r.kt)("a",{id:"hasobjectwithclassname"}),(0,r.kt)("strong",{parentName:"h3"},"hasObjectWithClassName"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"className"),")"),(0,r.kt)("p",null,"Search for the heap and check if there is any JS object instance with\na specified constructor name."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"className"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | The constructor name of the object instance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," | ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if there is at least one such object in the heap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),": you can write a jest unit test with memory assertions:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// save as example.test.ts\nimport type {IHeapSnapshot, Nullable} from '@memlab/core';\nimport {config, takeNodeMinimalHeap} from '@memlab/core';\n\nclass TestObject {\n  public arr1 = [1, 2, 3];\n  public arr2 = ['1', '2', '3'];\n}\n\ntest('memory test with heap assertion', async () => {\n  config.muteConsole = true; // no console output\n\n  let obj: Nullable<TestObject> = new TestObject();\n  // get a heap snapshot of the current program state\n  let heap: IHeapSnapshot = await takeNodeMinimalHeap();\n\n  // call some function that may add references to obj\n  rabbitHole(obj)\n\n  expect(heap.hasObjectWithClassName('TestObject')).toBe(true);\n  obj = null;\n\n  heap = await takeNodeMinimalHeap();\n  // if rabbitHole does not have any side effect that\n  // adds new references to obj, then obj can be GCed\n  expect(heap.hasObjectWithClassName('TestObject')).toBe(false);\n\n}, 30000);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1130"},"core/src/lib/Types.ts:1130"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasobjectwithpropertynamenameorindex"},(0,r.kt)("a",{id:"hasobjectwithpropertyname"}),(0,r.kt)("strong",{parentName:"h3"},"hasObjectWithPropertyName"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"nameOrIndex"),")"),(0,r.kt)("p",null,"Search for the heap and check if there is any JS object instance with\na specified property name."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nameOrIndex"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," | The property name (string) or element index (number) on the object instance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," | returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if there is at least one such object in the heap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  const object = {'memlab-test-heap-property': 'memlab-test-heap-value'};\n\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n\n  // should be true\n  console.log(heap.hasObjectWithPropertyName('memlab-test-heap-property'));\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1184"},"core/src/lib/Types.ts:1184"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hasobjectwithtagtag"},(0,r.kt)("a",{id:"hasobjectwithtag"}),(0,r.kt)("strong",{parentName:"h3"},"hasObjectWithTag"),"(",(0,r.kt)("inlineCode",{parentName:"h3"},"tag"),")"),(0,r.kt)("p",null,"Search for the heap and check if there is any JS object instance with\na marker tagged by ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/modules/core_src#tagobject"},"tagObject"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tagObject")," API does not modify the object instance in any way\n(e.g., no additional or hidden properties added to the tagged object)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | marker name on the object instances tagged by ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#tagobject"},"tagObject")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," | returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if there is at least one such object in the heap")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, AnyValue} from '@memlab/core';\nimport {config, takeNodeMinimalHeap, tagObject} from '@memlab/core';\n\ntest('memory test', async () => {\n  config.muteConsole = true;\n  const o1: AnyValue = {};\n  let o2: AnyValue = {};\n\n  // tag o1 with marker: \"memlab-mark-1\", does not modify o1 in any way\n  tagObject(o1, 'memlab-mark-1');\n  // tag o2 with marker: \"memlab-mark-2\", does not modify o2 in any way\n  tagObject(o2, 'memlab-mark-2');\n\n  o2 = null;\n\n  const heap: IHeapSnapshot = await takeNodeMinimalHeap();\n\n  // expect object with marker \"memlab-mark-1\" exists\n  expect(heap.hasObjectWithTag('memlab-mark-1')).toBe(true);\n\n  // expect object with marker \"memlab-mark-2\" can be GCed\n  expect(heap.hasObjectWithTag('memlab-mark-2')).toBe(false);\n\n}, 30000);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1222"},"core/src/lib/Types.ts:1222"))))))}m.isMDXComponent=!0}}]);