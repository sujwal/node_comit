(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{293:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),i=(r(0),r(469)),o={},c={id:"exercises/js/ex_142",title:"ex_142",description:"# Exercise 142",source:"@site/../docs/exercises/js/ex_142.md",permalink:"/node_comit/docs/exercises/js/ex_142",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_142.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_141",permalink:"/node_comit/docs/exercises/js/ex_141"},next:{title:"ex_143",permalink:"/node_comit/docs/exercises/js/ex_143"}},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"exercise-142"},"Exercise 142"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create a new index142.js"),Object(i.b)("li",{parentName:"ul"},"Define a firstPerson variable"),Object(i.b)("li",{parentName:"ul"},"Define a secondPerson variable"),Object(i.b)("li",{parentName:"ul"},"Assign a new array to each defined variable with the following structure",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The first item is the person first name (string)"),Object(i.b)("li",{parentName:"ul"},"The second item is the person last name (string)"),Object(i.b)("li",{parentName:"ul"},"The third item is the person address (string)"),Object(i.b)("li",{parentName:"ul"},"The fourth item is the person age (number)"))),Object(i.b)("li",{parentName:"ul"},"Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them"),Object(i.b)("li",{parentName:"ul"},"Compare the strings result to see if they are the same person (if they are they should match)"),Object(i.b)("li",{parentName:"ul"},"Try using the same person (with different variables) and also try different people")))}u.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,m=p["".concat(o,".").concat(f)]||p[f]||b[f]||i;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);