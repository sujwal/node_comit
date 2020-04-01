(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{382:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(469)),i={},c={id:"exercises/browser/ex_19",title:"ex_19",description:"# Exercise 19",source:"@site/../docs/exercises/browser/ex_19.md",permalink:"/node_comit/docs/exercises/browser/ex_19",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_19.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_18",permalink:"/node_comit/docs/exercises/browser/ex_18"},next:{title:"ex_20",permalink:"/node_comit/docs/exercises/browser/ex_20"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-19"},"Exercise 19"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_19\n  |-- index.html\n")),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Add the following html code")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <title>Setting attributes</title>\n    <style>\n      .bold {\n        font-weight: bold;\n      }\n\n      .striked {\n        text-decoration: line-through;\n      }\n    </style>\n  </head>\n  <body>\n    <h1 id="main">Playing with attributes</h1>\n    <div name="divy">\n      We have more control over our documents as we learn about JavaScript and\n      DOM elements!!!\n    </div>\n  </body>\n</html>\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Select the h1 and div element and assign them to a new variable"),Object(o.b)("li",{parentName:"ul"},"If any of these elements has attributes then add the striked class to both of them"),Object(o.b)("li",{parentName:"ul"},"Else add the bold class"),Object(o.b)("li",{parentName:"ul"},"Remove the name attribute from the div element (use the web console elements tab to see the result)")))}u.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);