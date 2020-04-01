(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{353:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(469)),i={},c={id:"exercises/js/ex_62",title:"ex_62",description:"# Exercise 62",source:"@site/../docs/exercises/js/ex_62.md",permalink:"/node_comit/docs/exercises/js/ex_62",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_62.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"exercises",previous:{title:"ex_61",permalink:"/node_comit/docs/exercises/js/ex_61"},next:{title:"ex_63",permalink:"/node_comit/docs/exercises/js/ex_63"}},l=[],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"exercise-62"},"Exercise 62"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new index62.js file"),Object(o.b)("li",{parentName:"ul"},"Define monthNumber variable and assign a number between 1 and 12"),Object(o.b)("li",{parentName:"ul"},"Define monthName variable and assign null as value"),Object(o.b)("li",{parentName:"ul"},"define monthDays variable and assign null as value"),Object(o.b)("li",{parentName:"ul"},"Use a switch statement"),Object(o.b)("li",{parentName:"ul"},"Depending the monthNumber value assign the corresponding monthName and monthDays values",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"January - 31 days"),Object(o.b)("li",{parentName:"ol"},"February - 28 days in a common year and 29 days in leap years"),Object(o.b)("li",{parentName:"ol"},"March - 31 days"),Object(o.b)("li",{parentName:"ol"},"April - 30 days"),Object(o.b)("li",{parentName:"ol"},"May - 31 days"),Object(o.b)("li",{parentName:"ol"},"June - 30 days"),Object(o.b)("li",{parentName:"ol"},"July - 31 days"),Object(o.b)("li",{parentName:"ol"},"August - 31 days"),Object(o.b)("li",{parentName:"ol"},"September - 30 days"),Object(o.b)("li",{parentName:"ol"},"October - 31 days"),Object(o.b)("li",{parentName:"ol"},"November - 30 days"),Object(o.b)("li",{parentName:"ol"},"December - 31 days"))),Object(o.b)("li",{parentName:"ul"},"If monthName & monthDays are null then show an error message"),Object(o.b)("li",{parentName:"ul"},"Else show the following message: %monthName% is the selected month and has %monthDays%"),Object(o.b)("li",{parentName:"ul"},"Try all the posible cases/scenarios (even the error message) by changing the weekdayNumber value")))}b.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);