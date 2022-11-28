"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3306],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),k=r,h=d["".concat(p,".").concat(k)]||d[k]||m[k]||o;return t?n.createElement(h,l(l({ref:a},c),{},{components:t})):n.createElement(h,l({ref:a},c))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3980:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),r=(t(7294),t(3905));const o={id:"core_src",title:"Package: @memlab/core",sidebar_label:"core/src",sidebar_position:0,custom_edit_url:null},l=void 0,i={unversionedId:"api/modules/core_src",id:"api/modules/core_src",title:"Package: @memlab/core",description:"Interfaces",source:"@site/docs/api/modules/core_src.md",sourceDirName:"api/modules",slug:"/api/modules/core_src",permalink:"/memlab/docs/api/modules/core_src",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"core_src",title:"Package: @memlab/core",sidebar_label:"core/src",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"api/src",permalink:"/memlab/docs/api/modules/api_src"},next:{title:"heap-analysis/src",permalink:"/memlab/docs/api/modules/heap_analysis_src"}},p={},s=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:'<a id="checkpageloadcallback" name="checkpageloadcallback"></a> <strong>CheckPageLoadCallback</strong>: (<code>page</code>: <code>Page</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;',id:"-checkpageloadcallback-page-page--promiseboolean",level:3},{value:'<a id="cookies" name="cookies"></a> <strong>Cookies</strong>: { <code>domain?</code>: <code>string</code> ; <code>name</code>: <code>string</code> ; <code>value</code>: <code>string</code>  }[]',id:"-cookies--domain-string--name-string--value-string--",level:3},{value:'<a id="edgeiterationcallback" name="edgeiterationcallback"></a> <strong>EdgeIterationCallback</strong>: (<code>edge</code>: <code>IHeapEdge</code>) =&gt; <code>Optional</code>&lt;{ <code>stop</code>: <code>boolean</code>  }&gt; | <code>void</code>',id:"-edgeiterationcallback-edge-iheapedge--optional-stop-boolean----void",level:3},{value:'<a id="initleakfiltercallback" name="initleakfiltercallback"></a> <strong>InitLeakFilterCallback</strong>: (<code>snapshot</code>: <code>IHeapSnapshot</code>, <code>leakedNodeIds</code>: <code>HeapNodeIdSet</code>) =&gt; <code>void</code>',id:"-initleakfiltercallback-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--void",level:3},{value:'<a id="interactionscallback" name="interactionscallback"></a> <strong>InteractionsCallback</strong>: (<code>page</code>: <code>Page</code>, <code>args?</code>: <code>OperationArgs</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;',id:"-interactionscallback-page-page-args-operationargs--promisevoid",level:3},{value:'<a id="leakfiltercallback" name="leakfiltercallback"></a> <strong>LeakFilterCallback</strong>: (<code>node</code>: <code>IHeapNode</code>, <code>snapshot</code>: <code>IHeapSnapshot</code>, <code>leakedNodeIds</code>: <code>HeapNodeIdSet</code>) =&gt; <code>boolean</code>',id:"-leakfiltercallback-node-iheapnode-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--boolean",level:3},{value:'<a id="page" name="page"></a> <strong>Page</strong>: <code>PuppeteerPage</code>',id:"-page-puppeteerpage",level:3},{value:'<a id="predicator" name="predicator"></a> <strong>Predicator</strong>&lt;<code>T</code>&gt;: (<code>entity</code>: <code>T</code>) =&gt; <code>boolean</code>',id:"-predicatort-entity-t--boolean",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:'<a id="runmetainfo" name="runmetainfo"></a> <strong>RunMetaInfo</strong>: <code>Object</code>',id:"-runmetainfo-object",level:3},{value:"Functions",id:"functions",level:2},{value:'<a id="dumpnodeheapsnapshot"></a><strong>dumpNodeHeapSnapshot</strong>()',id:"dumpnodeheapsnapshot",level:3},{value:'<a id="tagobject"></a><strong>tagObject</strong>&lt;<code>T</code>&gt;(<code>o</code>, <code>tag</code>)',id:"tagobjectto-tag",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:'<a id="takenodeminimalheap"></a><strong>takeNodeMinimalHeap</strong>()',id:"takenodeminimalheap",level:3}],c={toc:s};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IBrowserInfo"},"IBrowserInfo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},"IHeapEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdges"},"IHeapEdges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapLocation"},"IHeapLocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNodes"},"IHeapNodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapStringNode"},"IHeapStringNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter"},"ILeakFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IScenario"},"IScenario"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"-checkpageloadcallback-page-page--promiseboolean"},(0,r.kt)("a",{id:"checkpageloadcallback",name:"checkpageloadcallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"CheckPageLoadCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"page"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page")),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean"),">"),(0,r.kt)("p",null,"Callback function to provide if the page is loaded.\nFor concrete example, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#ispageloaded"},"isPageLoaded"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," | puppeteer's ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page/"},"Page")," object. To import this type, check out ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#page"},"Page"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"," | a boolean value, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", memlab will consider\nthe navigation completes, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", memlab will keep calling\nthis callback until it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This is an async callback, you can\nalso ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," until some async logic is resolved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L906"},"core/src/lib/Types.ts:906"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-cookies--domain-string--name-string--value-string--"},(0,r.kt)("a",{id:"cookies",name:"cookies"})," ",(0,r.kt)("strong",{parentName:"h3"},"Cookies"),": { ",(0,r.kt)("inlineCode",{parentName:"h3"},"domain?"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"h3"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"h3"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),"  }[]"),(0,r.kt)("p",null,"Data structure for holding cookies.\nFor concrete example, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#cookies"},"cookies"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L185"},"core/src/lib/Types.ts:185"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-edgeiterationcallback-edge-iheapedge--optional-stop-boolean----void"},(0,r.kt)("a",{id:"edgeiterationcallback",name:"edgeiterationcallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"EdgeIterationCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"edge"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional"),"<{ ",(0,r.kt)("inlineCode",{parentName:"h3"},"stop"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean"),"  }",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"h3"},"void")),(0,r.kt)("p",null,"Executes a provided callback once for JavaScript references.\nFor concrete examples, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode#foreachreference"},"forEachReference"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode#foreachreferrer"},"forEachReferrer"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edge"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapEdge"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," | this API returns void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L1438"},"core/src/lib/Types.ts:1438"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-initleakfiltercallback-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--void"},(0,r.kt)("a",{id:"initleakfiltercallback",name:"initleakfiltercallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"InitLeakFilterCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"HeapNodeIdSet"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"void")),(0,r.kt)("p",null,"Lifecycle function callback that is invoked initially once before calling any\nleak filter function.\nFor concrete example, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter#beforeleakfilter"},"beforeLeakFilter"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))," | heap snapshot see ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"HeapNodeIdSet")," | the set of leaked object (node) ids."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L410"},"core/src/lib/Types.ts:410"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-interactionscallback-page-page-args-operationargs--promisevoid"},(0,r.kt)("a",{id:"interactionscallback",name:"interactionscallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"InteractionsCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"page"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/modules/core_src#page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"args?"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"OperationArgs"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"void"),">"),(0,r.kt)("p",null,"The callback defines browser interactions which are\nused by memlab to interact with the web app under test.\nFor concrete examples, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#action"},"action")," or ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IScenario#back"},"back"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," | the puppeteer ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page"))," object, which provides APIs to interact with the web browser. To import this type, check out ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/modules/core_src#page"},"Page"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"OperationArgs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"," | no return value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L453"},"core/src/lib/Types.ts:453"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-leakfiltercallback-node-iheapnode-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--boolean"},(0,r.kt)("a",{id:"leakfiltercallback",name:"leakfiltercallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"LeakFilterCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"node"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"HeapNodeIdSet"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,"Callback that can be used to define a logic to filter the\nleaked objects. The callback is only called for every node\nallocated but not released from the target interaction\nin the heap snapshot."),(0,r.kt)("p",null,"For concrete examples, check out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter#leakfilter"},"leakFilter"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode"))," | the node that is kept alive in the memory in the heap snapshot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))," | the snapshot of target interaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"HeapNodeIdSet")," | the set of leaked node ids"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," | the value indicating whether the given node in the snapshot\nshould be considered as leaked."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// any node in the heap snapshot that is greater than 1MB\nfunction leakFilter(node, _snapshot, _leakedNodeIds) {\n return node.retainedSize > 1000000;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L437"},"core/src/lib/Types.ts:437"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-page-puppeteerpage"},(0,r.kt)("a",{id:"page",name:"page"})," ",(0,r.kt)("strong",{parentName:"h3"},"Page"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"PuppeteerPage")),(0,r.kt)("p",null,"This is the puppeteer ",(0,r.kt)("a",{parentName:"p",href:"https://pptr.dev/api/puppeteer.page"},(0,r.kt)("inlineCode",{parentName:"a"},"Page")),"\nclass used by MemLab. The puppeteer ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," class instance provides\nAPIs to interact with the web browser."),(0,r.kt)("p",null,"The puppeteer ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," type can be incompatible across different versions.\nYour local npm-installed puppeteer version may be different from\nthe puppeteer used by MemLab. This may cause some type errors, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {Page} from 'puppeteer';\nimport type {RunOptions} from '@memlab/api';\n\nconst runOptions: RunOptions = {\n  scenario: {\n    // initial page load url: Google Maps\n    url: () => {\n      return \"https://www.google.com/maps/@37.386427,-122.0428214,11z\";\n    },\n    // type error here if your local puppeeter version is different\n    // from the puppeteer used by MemLab\n    action: async function (page: Page) {\n      await page.click('button[aria-label=\"Hotels\"]');\n    },\n  },\n};\n")),(0,r.kt)("p",null,"To avoid the type error in the code example above, MemLab exports the\npuppeteer ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," type used by MemLab so that your code can import it\nwhen necessary:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {Page} from '@memlab/core' // import Page type from memlab\nimport type {RunOptions} from 'memlab';\n\nconst runOptions: RunOptions = {\n  scenario: {\n    // initial page load url: Google Maps\n    url: () => {\n      return \"https://www.google.com/maps/@37.386427,-122.0428214,11z\";\n    },\n    // no type error here\n    action: async function (page: Page) {\n      await page.click('button[aria-label=\"Hotels\"]');\n    },\n  },\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L166"},"core/src/lib/Types.ts:166"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-predicatort-entity-t--boolean"},(0,r.kt)("a",{id:"predicator",name:"predicator"})," ",(0,r.kt)("strong",{parentName:"h3"},"Predicator"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),">",": (",(0,r.kt)("inlineCode",{parentName:"h3"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the type of the entity to be checked")))),(0,r.kt)("p",null,"the predicate callback is used to decide if a\nentity of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),".\nFor more concrete examples on where it is used,\ncheck out ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode#findanyreference"},"findAnyReference"),", ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode#findanyreferrer"},"findAnyReferrer"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapNode#findreferrers"},"findReferrers"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"entity"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," | the entity to be checked"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")," | whether the entity passes the predicate check")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L179"},"core/src/lib/Types.ts:179"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-runmetainfo-object"},(0,r.kt)("a",{id:"runmetainfo",name:"runmetainfo"})," ",(0,r.kt)("strong",{parentName:"h3"},"RunMetaInfo"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Object")),(0,r.kt)("p",null,"This data structure holds the information about memlab run.\nYou can retrieve the instance of this type through ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/classes/api_src.BrowserInteractionResultReader#getrunmetainfo"},"getRunMetaInfo"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"browserInfo")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/memlab/docs/api/interfaces/core_src.IBrowserInfo"},(0,r.kt)("inlineCode",{parentName:"a"},"IBrowserInfo"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"input configuration for the browser and output data from the browser")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"type of the memlab run")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/Types.ts#L986"},"core/src/lib/Types.ts:986"))))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"dumpnodeheapsnapshot"},(0,r.kt)("a",{id:"dumpnodeheapsnapshot"}),(0,r.kt)("strong",{parentName:"h3"},"dumpNodeHeapSnapshot"),"()"),(0,r.kt)("p",null,"Take a heap snapshot of the current program state and save it as a\n",(0,r.kt)("inlineCode",{parentName:"p"},".heapsnapshot")," file under a randomly generated folder inside the system's\ntemp folder."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": All ",(0,r.kt)("inlineCode",{parentName:"p"},".heapsnapshot")," files could also be loaded by Chrome DevTools."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," | the absolute file path to the saved ",(0,r.kt)("inlineCode",{parentName:"p"},".heapsnapshot")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getFullHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getFullHeapFromFile(heapFile);\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/NodeHeap.ts#L84"},"core/src/lib/NodeHeap.ts:84"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tagobjectto-tag"},(0,r.kt)("a",{id:"tagobject"}),(0,r.kt)("strong",{parentName:"h3"},"tagObject"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"h3"},"o"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"tag"),")"),(0,r.kt)("p",null,"Tags a string marker to an object instance, which can later be checked by\n",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot#hasobjectwithtag"},"hasObjectWithTag"),". This API does not modify the object instance in\nany way (e.g., no additional or hidden properties added to the tagged\nobject)."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"o"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," | specify the object instance you want to tag, you cannot tag a ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"primitive"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | marker name to tag on the object instance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," | returns the tagged object instance (same reference as\nthe input argument ",(0,r.kt)("inlineCode",{parentName:"li"},"o"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, AnyValue} from '@memlab/core';\nimport {config, takeNodeMinimalHeap, tagObject} from '@memlab/core';\n\ntest('memory test', async () => {\n  config.muteConsole = true;\n  const o1: AnyValue = {};\n  let o2: AnyValue = {};\n\n  // tag o1 with marker: \"memlab-mark-1\", does not modify o1 in any way\n  tagObject(o1, 'memlab-mark-1');\n  // tag o2 with marker: \"memlab-mark-2\", does not modify o2 in any way\n  tagObject(o2, 'memlab-mark-2');\n\n  o2 = null;\n\n  const heap: IHeapSnapshot = await takeNodeMinimalHeap();\n\n  // expect object with marker \"memlab-mark-1\" exists\n  expect(heap.hasObjectWithTag('memlab-mark-1')).toBe(true);\n\n  // expect object with marker \"memlab-mark-2\" can be GCed\n  expect(heap.hasObjectWithTag('memlab-mark-2')).toBe(false);\n\n}, 30000);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/NodeHeap.ts#L59"},"core/src/lib/NodeHeap.ts:59"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"takenodeminimalheap"},(0,r.kt)("a",{id:"takenodeminimalheap"}),(0,r.kt)("strong",{parentName:"h3"},"takeNodeMinimalHeap"),"()"),(0,r.kt)("p",null,"Take a heap snapshot of the current program state\nand parse it as ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot"),". Notice that\nthis API does not calculate some heap analysis meta data\nfor heap analysis. But this also means faster heap parsing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),">"," | heap representation without heap analysis meta data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Examples:")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {takeNodeMinimalHeap} from '@memlab/core';\n\n(async function () {\n  const heap: IHeapSnapshot = await takeNodeMinimalHeap();\n})();\n")),(0,r.kt)("p",null,"If you need to get the heap snapshot with heap analysis meta data, please\nuse ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/modules/heap_analysis_src#getfullheapfromfile"},"getFullHeapFromFile"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/memlab/blob/96cf726/packages/core/src/lib/NodeHeap.ts#L152"},"core/src/lib/NodeHeap.ts:152"))))))}m.isMDXComponent=!0}}]);