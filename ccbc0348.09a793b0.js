(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(469)),o={},c={id:"exercises/debug/ex_4",title:"ex_4",description:"# Exercise 4",source:"@site/../docs/exercises/debug/ex_4.md",permalink:"/node_comit/docs/exercises/debug/ex_4",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/debug/ex_4.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_3",permalink:"/node_comit/docs/exercises/debug/ex_3"},next:{title:"ex_5",permalink:"/node_comit/docs/exercises/debug/ex_5"}},l=[{value:"Todo",id:"todo",children:[]},{value:"Result",id:"result",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-4"},"Exercise 4"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create the following folder/file structure:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_4\n  |-- index.html\n  |-- scripts.js\n")))),Object(i.b)("h2",{id:"todo"},"Todo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add the following files to the folder:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"index.html"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta http-equiv="X-UA-Compatible" content="ie=edge" />\n    <title>Hello World</title>\n    <script src="./scripts.js"><\/script>\n  </head>\n  <body>\n    <h1 id="heading"></h1>\n  </body>\n</html>\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"scripts.js"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'window.onload = () => {\n  let page = { title: "Hello world" };\n  let heading = document.querySelector("h1");\n  heading.innerText = page.heading;\n};\n'))))),Object(i.b)("li",{parentName:"ul"},"Run the application using ",Object(i.b)("inlineCode",{parentName:"li"},"http-server")," or just open the ",Object(i.b)("inlineCode",{parentName:"li"},"index.html"))),Object(i.b)("h2",{id:"result"},"Result"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Once we start the project it will output the following message on the page ",Object(i.b)("strong",{parentName:"li"},"Hello world"))))}u.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(o,".").concat(b)]||d[b]||s[b]||i;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);