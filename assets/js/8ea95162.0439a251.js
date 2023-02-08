"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3591],{6794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var a=n(7462),i=(n(7294),n(3905)),l=n(1698);const o="/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * @nolint\n * @oncall web_perf_infra\n */\n\n// leakFilter is called with each object (node) in browser\n// allocated by `action` but not released after the `back` call\nfunction leakFilter(node, _snapshot, _leakedNodeIds) {\n  return node.retainedSize > 1000 * 1000;\n}\n\nmodule.exports = {leakFilter};\n",r="/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * @nolint\n * @oncall web_perf_infra\n */\n\nfunction url() {\n  return 'http://localhost:3000/';\n}\n\n// action where you suspect the memory leak might be happening\nasync function action(page) {\n  await page.click('a[href=\"/examples/oversized-object\"]');\n}\n\n// how to go back to the state before actionw\nasync function back(page) {\n  await page.click('a[href=\"/\"]');\n}\n\nmodule.exports = {action, back, url};\n",s="/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * @nolint\n * @oncall web_perf_infra\n */\n\nfunction url() {\n  return 'http://localhost:3000/';\n}\n\n// action where you suspect the memory leak might be happening\nasync function action(page) {\n  await page.click('a[href=\"/examples/oversized-object\"]');\n}\n\n// how to go back to the state before actionw\nasync function back(page) {\n  await page.click('a[href=\"/\"]');\n}\n\n// leakFilter is called with each object (node) in browser\n// allocated by `action` but not released after the `back` call\nfunction leakFilter(node, _snapshot, _leakedNodeIds) {\n  return node.retainedSize > 1000 * 1000;\n}\n\nmodule.exports = {action, back, leakFilter, url};\n",c="/**\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * @nolint\n * @oncall web_perf_infra\n */\n\nimport Link from 'next/link';\nimport React, {useEffect} from 'react';\n\nexport default function OversizedObject() {\n  const bigArray = Array(1024 * 1024 * 2).fill(0);\n\n  const eventHandler = () => {\n    // the eventHandler closure keeps a reference\n    // to the bigArray in the outter scope\n    console.log('Using hugeObject', bigArray);\n  };\n\n  useEffect(() => {\n    // eventHandler is never unregistered\n    window.addEventListener('custom-click', eventHandler);\n  }, []);\n\n  return (\n    <div className=\"container\">\n      <div className=\"row\">\n        <Link href=\"/\">Go back</Link>\n      </div>\n      <br />\n      <div className=\"row\">\n        Object<code>bigArray</code>is leaked. Please check <code>Memory</code>{' '}\n        tab in devtools\n      </div>\n    </div>\n  );\n}\n",d={id:"guides-detect-oversized-object"},p="Detect Oversized Object",m={unversionedId:"guides/guides-detect-oversized-object",id:"guides/guides-detect-oversized-object",title:"Detect Oversized Object",description:"This is a tutorial demonstrating how to detect oversized objects that are not",source:"@site/docs/guides/02-detect-oversized-object.mdx",sourceDirName:"guides",slug:"/guides/guides-detect-oversized-object",permalink:"/memlab/docs/guides/guides-detect-oversized-object",draft:!1,editUrl:"https://github.com/facebook/memlab/blob/main/website/docs/guides/02-detect-oversized-object.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"guides-detect-oversized-object"},sidebar:"sidebar",previous:{title:"Detect Leaks in a Demo App",permalink:"/memlab/docs/guides/guides-detached-dom"},next:{title:"Find Memory Leaks Not Reported",permalink:"/memlab/docs/guides/guides-find-leaks"}},u={},k=[{value:"Set up the Example Web App Under Test",id:"set-up-the-example-web-app-under-test",level:2},{value:"1. Clone Repo",id:"1-clone-repo",level:3},{value:"2. Run the Example App",id:"2-run-the-example-app",level:3},{value:"First Attempt to Find Leaks",id:"first-attempt-to-find-leaks",level:2},{value:"1. Create a Scenario File",id:"1-create-a-scenario-file",level:3},{value:"2. Run memlab",id:"2-run-memlab",level:3},{value:"Filter Out Large Objects",id:"filter-out-large-objects",level:2}],h={toc:k},b="wrapper";function g(e){let{components:t,...d}=e;return(0,i.kt)(b,(0,a.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"detect-oversized-object"},"Detect Oversized Object"),(0,i.kt)("p",null,"This is a tutorial demonstrating how to detect oversized objects that are not\nreleased by a web app."),(0,i.kt)("p",null,"We recommend reading\n",(0,i.kt)("a",{parentName:"p",href:"/memlab/docs/guides/guides-detached-dom"},"Detect Leaks in a Demo App"),", which will walk you through\nhow to interpret memlab results and debug leak traces."),(0,i.kt)("h2",{id:"set-up-the-example-web-app-under-test"},"Set up the Example Web App Under Test"),(0,i.kt)("p",null,"The demo app leaks a big array in each React rendering call (through the\nunregistered event handler and the closure scope chain)."),(0,i.kt)(l.Z,{showLineNumbers:!0,language:"jsx",mdxType:"CodeBlock"},c),(0,i.kt)("p",null,"Source file: ",(0,i.kt)("a",{target:"_blank",href:n(7298).Z},"packages/e2e/static/example/pages/examples/oversized-object.jsx")),(0,i.kt)("h3",{id:"1-clone-repo"},"1. Clone Repo"),(0,i.kt)("p",null,"To run the demo web app on you local machine, clone the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab"},(0,i.kt)("inlineCode",{parentName:"a"},"memlab")," github repo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:facebook/memlab.git\n")),(0,i.kt)("h3",{id:"2-run-the-example-app"},"2. Run the Example App"),(0,i.kt)("p",null,"Once you have cloned the repo on your local machine, run the following commands\nfrom the root directory of the ",(0,i.kt)("inlineCode",{parentName:"p"},"memlab")," project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install && npm run build\ncd packages/e2e/static/example\nnpm install && npm run dev\n")),(0,i.kt)("p",null,"This will spin up an example Nextjs app. Let's make sure it is\nrunning by visiting from your browser ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),":"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The port number ",(0,i.kt)("inlineCode",{parentName:"p"},":3000")," may be different in your case."))),(0,i.kt)("h2",{id:"first-attempt-to-find-leaks"},"First Attempt to Find Leaks"),(0,i.kt)("h3",{id:"1-create-a-scenario-file"},"1. Create a Scenario File"),(0,i.kt)(l.Z,{language:"jsx",showLineNumbers:!0,mdxType:"CodeBlock"},r),(0,i.kt)("p",null,"Let's save this file as ",(0,i.kt)("inlineCode",{parentName:"p"},"~/memlab/scenarios/oversized-object.js"),"."),(0,i.kt)("h3",{id:"2-run-memlab"},"2. Run memlab"),(0,i.kt)("p",null,"This will take a few minutes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario ~/memlab/scenarios/oversized-object.js\n")),(0,i.kt)("p",null,"This time memlab didn't find any memory leaks."),(0,i.kt)("p",null,"The current built-in Leak detector only considers objects\nthat meet all of the following criteria to be memory leaks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The object is allocated by interaction triggered by the ",(0,i.kt)("inlineCode",{parentName:"li"},"action")," callback."),(0,i.kt)("li",{parentName:"ul"},"The object is not released after the interaction triggered by the ",(0,i.kt)("inlineCode",{parentName:"li"},"back")," callback."),(0,i.kt)("li",{parentName:"ul"},"The object is a detached DOM element or an unmounted React Fiber node.")),(0,i.kt)("p",null,"The other objects allocated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," callback could be caches retained\nby the web app on purpose, so by default memlab will not report them as leaks."),(0,i.kt)("h2",{id:"filter-out-large-objects"},"Filter Out Large Objects"),(0,i.kt)("p",null,"One rule we often find useful is to check for unreleased objects with\nnon-trivial sizes (for example 1MB)."),(0,i.kt)("p",null,"memlab provides an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"leakFilter")," callback to filter\nout leaked objects with self-defined rules."),(0,i.kt)(l.Z,{language:"jsx",showLineNumbers:!0,mdxType:"CodeBlock"},s),(0,i.kt)("p",null,"Now let's rerun memlab with the updated scenario file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario ~/memlab/scenarios/oversized-object.js\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"memlab run result",src:n(7291).Z,width:"1080",height:"726"})),(0,i.kt)("p",null,"By examining the leak trace, we can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"elements")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"bigArray")," are\nbeing retained because ",(0,i.kt)("inlineCode",{parentName:"p"},"bigArray")," is retained by the ",(0,i.kt)("inlineCode",{parentName:"p"},"eventHandler"),"\nclosure which is in turn retained because it is still registered as the handler\nfor an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventListener"),". If we add a cleanup function to our ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect"),",\nas demonstrated below, and run the scenario again, we will see that there are\nno longer any leaks reported by memlab."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n  window.addEventListener('custom-click', eventHandler);\n  return () => {\n    // clean up\n    window.removeEventListener('custom-click', eventHandler);\n  };\n}, []);\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"An alternative is creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"leak-filter.js")," and passing it to ",(0,i.kt)("inlineCode",{parentName:"p"},"memlab find-leaks"),"\nif you have run ",(0,i.kt)("inlineCode",{parentName:"p"},"memlab run")," already."))),(0,i.kt)(l.Z,{language:"jsx",showLineNumbers:!0,mdxType:"CodeBlock"},o),(0,i.kt)("p",null,"Break out the ",(0,i.kt)("inlineCode",{parentName:"p"},"leakFilter")," function and save it in a file,\nfor example, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/memlab/leak-filters/leak-filter-by-retained-size.js")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --leak-filter ~/memlab/leak-filters/leak-filter-by-retained-size.js\n")),(0,i.kt)("p",null,"If you need more advanced filtering logic, here are\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebook/memlab/tree/main/packages/cli/src/options/heap/leak-filter/examples/"},"more examples"),"."))}g.isMDXComponent=!0},7298:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/oversized-object-f3d388d124f5e1c019bcb1f7e0c59455.jsx"},7291:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oversized-object-21a4b02ccc4715569c63f5dade563e38.png"}}]);