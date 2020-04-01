(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),o=t(9),a=(t(0),t(469)),s={},i={id:"exercises/debug/ex_3",title:"ex_3",description:"# Exercise 3",source:"@site/../docs/exercises/debug/ex_3.md",permalink:"/node_comit/docs/exercises/debug/ex_3",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/debug/ex_3.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_2",permalink:"/node_comit/docs/exercises/debug/ex_2"},next:{title:"ex_4",permalink:"/node_comit/docs/exercises/debug/ex_4"}},c=[{value:"Todo",id:"todo",children:[]},{value:"index.js",id:"indexjs",children:[]}],l={rightToc:c};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-3"},"Exercise 3"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_3\n  |-- index.js\n  |-- package.json\n")))),Object(a.b)("h2",{id:"todo"},"Todo"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Add the following files to the folder:"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"index.js")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const oneLinerJoke = require("one-liner-joke");\nconst express = require("express");\nconst app = express();\nconst port = process.env.PORT || 3000;\n\napp.get("/", (req, res) => {\n  const getRandomJoke = oneLinerJoke.getRandomJoke();\n  const response = getRandomJoke.text.toUpperCase();\n  res.json(response);\n});\n\napp.listen(port, () => console.log(`Open at http://localhost:${port}`));\n'))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"package.json")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "ex_3",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "nodemon"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1",\n    "nodemon": "^2.0.2",\n    "one-liner-joke": "^1.2.0"\n  }\n}\n'))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run the application using ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Resolve the following error in terminal"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"TypeError: Cannot read property 'toUpperCase' of undefined\n  at app.get (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/index.js:8:39)\n  at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)\n  at next (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/route.js:137:13)\n  at Route.dispatch (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/route.js:112:3)\n  at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)\n  at /Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:281:22\n  at Function.process_params (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:335:12)\n  at next (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/index.js:275:10)\n  at expressInit (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/middleware/init.js:40:5)\n  at Layer.handle [as handle_request] (/Users/davidcrossman/Development/web/nodeyqr-exercises/debug/ex_3/node_modules/express/lib/router/layer.js:95:5)\n")))),Object(a.b)("h2",{id:"indexjs"},"index.js"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Once we start the project it will otuput the following message:",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"Open at http://localhost:3000\n"))),Object(a.b)("li",{parentName:"ul"},"The page should load with the joke in uppercase from one line jokes")))}p.isMDXComponent=!0},469:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||b[u]||a;return t?o.a.createElement(m,i({ref:n},l,{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);