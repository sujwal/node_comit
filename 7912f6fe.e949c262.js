(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{288:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),i=n(9),a=(n(0),n(469)),o={},c={id:"exercises/browser/ex_30",title:"ex_30",description:"# Exercise 30",source:"@site/../docs/exercises/browser/ex_30.md",permalink:"/node_comit/docs/exercises/browser/ex_30",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_30.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_29",permalink:"/node_comit/docs/exercises/browser/ex_29"},next:{title:"ex_31",permalink:"/node_comit/docs/exercises/browser/ex_31"}},l=[{value:"index.html",id:"indexhtml",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"exercise-30"},"Exercise 30"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_30\n  |-- index.html\n")),Object(a.b)("h2",{id:"indexhtml"},"index.html"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(a.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(a.b)("li",{parentName:"ul"},"Add the following html code")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<!DOCTYPE html>\n<html>\n  <head>\n    <title>Products</title>\n  </head>\n  <body>\n    <ul>\n      <li>Bannana</li>\n      <li>Apple</li>\n      <li>Peach</li>\n      <li>Eggs</li>\n      <li>Tomatto</li>\n      <li>Lettuce</li>\n      <li>Milk</li>\n    </ul>\n  </body>\n</html>\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Select the ul element"),Object(a.b)("li",{parentName:"ul"},"Remove each list item starting from the last item until the first one"),Object(a.b)("li",{parentName:"ul"},"(first remove milk, then lettuce and so on..)"),Object(a.b)("li",{parentName:"ul"},"Use a ",Object(a.b)("inlineCode",{parentName:"li"},"iterator")," to accomplish this task")))}s.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return n?i.a.createElement(d,c({ref:t},u,{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);