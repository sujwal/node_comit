(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(469)),c={},i={id:"exercises/browser/ex_48",title:"ex_48",description:"# Exercise 48",source:"@site/../docs/exercises/browser/ex_48.md",permalink:"/node_comit/docs/exercises/browser/ex_48",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/browser/ex_48.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_47",permalink:"/node_comit/docs/exercises/browser/ex_47"},next:{title:"ex_49",permalink:"/node_comit/docs/exercises/browser/ex_49"}},l=[{value:"index.html",id:"indexhtml",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-48"},"Exercise 48"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the following folder/file structure:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/ex_48\n  |-- index.html\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="UTF-8" />\n    <title>Form elements event</title>\n  </head>\n  <body>\n    <form\n      action="save_user.html"\n      method="post"\n      enctype="application/x-www-form-urlencoded"\n      name="login"\n    >\n      <input type="text" id="username" name="username" />\n      <input type="password" id="pass" name="pass" />\n      <input type="submit" name="submit" value="Send" />\n    </form>\n  </body>\n</html>\n')),Object(o.b)("h2",{id:"indexhtml"},"index.html"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a basic HTML document"),Object(o.b)("li",{parentName:"ul"},"Create a script tag on the document head element"),Object(o.b)("li",{parentName:"ul"},"Select the form element using any of the JavaScript selectors"),Object(o.b)("li",{parentName:"ul"},"Add the element a box shadow when the user sets focus on the inputs"),Object(o.b)("li",{parentName:"ul"},"Remove the box shadow when the user removes input focus"),Object(o.b)("li",{parentName:"ul"},"Add a form submit handler and prevent the default form behaivour"),Object(o.b)("li",{parentName:"ul"},"Show an alert message with the username and password values")))}u.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?a.a.createElement(b,i({ref:t},s,{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);