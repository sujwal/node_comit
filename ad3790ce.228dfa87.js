(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{367:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var a=r(1),l=r(9),n=(r(0),r(469)),o={},c={id:"exercises/js/ex_154",title:"ex_154",description:"# Exercise 154",source:"@site/../docs/exercises/js/ex_154.md",permalink:"/node_comit/docs/exercises/js/ex_154",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/exercises/js/ex_154.md",lastUpdatedBy:"prma85",lastUpdatedAt:1583632923,sidebar:"exercises",previous:{title:"ex_153",permalink:"/node_comit/docs/exercises/js/ex_153"},next:{title:"ex_155",permalink:"/node_comit/docs/exercises/js/ex_155"}},i=[{value:"Methods",id:"methods",children:[]},{value:"Rules",id:"rules",children:[]},{value:"Play Time!!!",id:"play-time",children:[]}],b={rightToc:i};function p(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"exercise-154"},"Exercise 154"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a new index154.js"),Object(n.b)("li",{parentName:"ul"},"Define a player variable and assign a literal object with the following properties and methods:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"property: name, value: null"),Object(n.b)("li",{parentName:"ul"},"property: energy, value: 100"),Object(n.b)("li",{parentName:"ul"},"property: lives, value: 3"),Object(n.b)("li",{parentName:"ul"},"method: loseEnergy"),Object(n.b)("li",{parentName:"ul"},"method: recoverEnergy"),Object(n.b)("li",{parentName:"ul"},"method: loseLife"),Object(n.b)("li",{parentName:"ul"},"method: recoverLife")))),Object(n.b)("h2",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value"),Object(n.b)("li",{parentName:"ul"},"The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value"),Object(n.b)("li",{parentName:"ul"},"The loseLife doesn't accept parameters and just subtract one player life every time you call it"),Object(n.b)("li",{parentName:"ul"},"The recoverLife doesn't accept parameters and just adds one player life every time you call it")),Object(n.b)("h2",{id:"rules"},"Rules"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The player energy can't be negative"),Object(n.b)("li",{parentName:"ul"},"The player energy can't be more than 100"),Object(n.b)("li",{parentName:"ul"},"The player lives can't be bigger thant 99"),Object(n.b)("li",{parentName:"ul"},"If the player energy is equal or lees than 0 then the player will lose a life")),Object(n.b)("h2",{id:"play-time"},"Play Time!!!"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Set the player name"),Object(n.b)("li",{parentName:"ol"},"Player lose a life"),Object(n.b)("li",{parentName:"ol"},"Player lose 10 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 5 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 15 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 20 energy value"),Object(n.b)("li",{parentName:"ol"},"Player earn 10 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 30 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 40 energy value"),Object(n.b)("li",{parentName:"ol"},"Player wins a life"),Object(n.b)("li",{parentName:"ol"},"Player lose a life"),Object(n.b)("li",{parentName:"ol"},"Player wins a life")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Simulate each game play using the players object methods"),Object(n.b)("li",{parentName:"ul"},"Show the following output after doing all the object methods calls")),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{}),"The %player name% has %energy% energy % and  %lifes% lifes\n")),Object(n.b)("p",null,"The output should be:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The %player name% has 0 energy and 3 lifes")),Object(n.b)("p",null,"Keep doing the game with the following commands"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Player lose a life"),Object(n.b)("li",{parentName:"ol"},"Player earn 10 energy value"),Object(n.b)("li",{parentName:"ol"},"Player lose 30 energy value")),Object(n.b)("p",null,"The output should be:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"You are dead")))}p.isMDXComponent=!0},469:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return y}));var a=r(0),l=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=l.a.createContext({}),p=function(e){var t=l.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=p(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,y=u["".concat(o,".").concat(m)]||u[m]||s[m]||n;return r?l.a.createElement(y,c({ref:t},b,{components:r})):l.a.createElement(y,c({ref:t},b))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<n;b++)o[b]=r[b];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);