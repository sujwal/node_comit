(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{430:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),o=(r(0),r(469)),c={},i={id:"exercises/browser/ex_1",title:"ex_1",description:"# Exercise 1",source:"@site/../docs/exercises/browser/ex_1.md",permalink:"/node_comit/docs/exercises/browser/ex_1",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_1.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_163",permalink:"/node_comit/docs/exercises/js/ex_163"},next:{title:"ex_2",permalink:"/node_comit/docs/exercises/browser/ex_2"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-1"},"Exercise 1"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"/ex_1\n  |-- index.html\n")),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Define a firstName and lastName variables and assign your first and last name"),Object(o.b)("li",{parentName:"ul"},"Using console.log show the following message as output:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"Welcome to the browser %firstName% %lastName% again!!\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Start the http-server inside this folder")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"http-server\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open the browser and navigate to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://localhost:8080"}),"http://localhost:8080")),Object(o.b)("li",{parentName:"ul"},"Open the developer tools"),Object(o.b)("li",{parentName:"ul"},"Check out your message"),Object(o.b)("li",{parentName:"ul"},"Now change the first and last name values, save the file and resfresh the browser document to se the change")))}u.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||o;return r?a.a.createElement(d,i({ref:t},s,{components:r})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);