(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),a=(n(0),n(469)),i={id:"02-internet",title:"Internet"},c={id:"02-internet",title:"Internet",description:"## What is the Internet?",source:"@site/../docs/02-internet.md",permalink:"/node_comit/docs/02-internet",editUrl:"https://github.com/prma85/node_comit/edit/master/../docs/02-internet.md",lastUpdatedBy:"Paulo Andrade",lastUpdatedAt:1580851092,sidebar:"course",previous:{title:"Introduction to Development",permalink:"/node_comit/docs/01-intro"},next:{title:"Our First Site",permalink:"/node_comit/docs/03-first-site"}},s=[{value:"What is the Internet?",id:"what-is-the-internet",children:[]},{value:"How do we stay connected with the Internet?",id:"how-do-we-stay-connected-with-the-internet",children:[{value:"A simple network",id:"a-simple-network",children:[]},{value:"A network of networks",id:"a-network-of-networks",children:[]}]},{value:"Finding computers",id:"finding-computers",children:[]},{value:"Packets explained",id:"packets-explained",children:[]},{value:"How the Internet Works",id:"how-the-internet-works",children:[]},{value:"Extras",id:"extras",children:[]},{value:"Reference",id:"reference",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"what-is-the-internet"},"What is the Internet?"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Internet")," is the backbone of the Web, the technical infrastructure that makes the Web possible. At its most basic, the Internet is a large network of computers which communicate all together."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Dxcc6ycZ73M"}),"VIDEO: What is the Internet?")),Object(a.b)("h2",{id:"how-do-we-stay-connected-with-the-internet"},"How do we stay connected with the Internet?"),Object(a.b)("p",null,"The Internet consists of this whole infrastructure of networks."),Object(a.b)("h3",{id:"a-simple-network"},"A simple network"),Object(a.b)("p",null,"When two computers need to communicate, you have to link them, either physically (usually with an Ethernet cable) or wirelessly (for example with WiFi or Bluetooth systems). You can connect as many computers as you wish. But it gets complicated quickly."),Object(a.b)("p",null,"To solve this problem, each computer on a network is connected to a special tiny computer called a ",Object(a.b)("em",{parentName:"p"},"router"),". This router has only one job: like a signaler at a railway station, it makes sure that a message sent from a given computer arrives at the right destination computer."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://mdn.mozillademos.org/files/8445/internet-schema-3.png",alt:"Ten computers with a router"}))),Object(a.b)("h3",{id:"a-network-of-networks"},"A network of networks"),Object(a.b)("p",null,"So far so good. But what about connecting hundreds, thousands, billions of computers? Of course a single router can't scale that far, but, if you read carefully, we said that a router is a computer like any other, so what keeps us from connecting two routers together? Nothing, so let's do that. By connecting computers to routers, then routers to routers, we are able to scale infinitely."),Object(a.b)("p",null,"Now that works for inside your home but we want to connect outside our home. We can accomplish this by connecting our network to the telephone infrastructure, we need a special piece of equipment called a ",Object(a.b)("em",{parentName:"p"},"modem"),". This modem turns the information from our network into information manageable by the telephone infrastructure and vice versa."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://mdn.mozillademos.org/files/8451/internet-schema-6.png",alt:"A router linked to a modem"}))),Object(a.b)("p",null,"So we are connected to the telephone infrastructure. The next step is to send the messages from our network to the network we want to reach. To do that, we will connect our network to an Internet Service Provider (ISP). An ISP is a company that manages some special routers that are all linked together and can also access other ISPs' routers. So the message from our network is carried through the network of ISP networks to the destination network. The Internet consists of this whole infrastructure of networks."),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=ZhEf7e4kopM"}),"VIDEO: The Internet: Wires, Cables & Wifi")),Object(a.b)("h2",{id:"finding-computers"},"Finding computers"),Object(a.b)("p",null,'If you want to send a message to a computer, you have to specify which one. Thus any computer linked to a network has a unique address that identifies it, called an "IP address" (where IP stands for ',Object(a.b)("em",{parentName:"p"},"Internet Protocol"),"). It's an address made of a series of four numbers separated by dots, for example: ",Object(a.b)("inlineCode",{parentName:"p"},"192.168.2.10"),"."),Object(a.b)("p",null,"That's perfectly fine for computers, but we human beings have a hard time remembering that sort of address. To make things easier, we can alias an IP address with a human readable name called a ",Object(a.b)("em",{parentName:"p"},"domain name"),". For example, google.com is the domain name used on top of the IP address ",Object(a.b)("inlineCode",{parentName:"p"},"173.194.121.32"),". So using the domain name is the easiest way for us to reach a computer over the Internet."),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"https://mdn.mozillademos.org/files/8405/dns-ip.png",alt:"Show how a domain name can alias an IP address"}))),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=5o8CwafCxnU"}),"VIDEO: The Internet: IP Addresses & DNS")),Object(a.b)("h2",{id:"packets-explained"},"Packets explained"),Object(a.b)("p",null,'Earlier we used the term "packets" to describe the format in which the data is sent from server to client. What do we mean here? Basically, when data is sent across the web, it is sent as thousands of small chunks, so that many different web users can download the same website at the same time. If websites were sent as single big chunks, only one user could download one at a time, which obviously would make the web very inefficient and not much fun to use.'),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=AYdF7b3nMto"}),"VIDEO: The Internet: Packets, Routing & Reliability")),Object(a.b)("h2",{id:"how-the-internet-works"},"How the Internet Works"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"../resources/images/internet/browser1.png",alt:"User's interaction with the Internet"}))),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=kBXQZMmiA4s"}),"VIDEO: The Internet: HTTP & HTML")),Object(a.b)("h2",{id:"extras"},"Extras"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=ZghMPWGXexs"}),"The Internet: Encryption & Public Keys")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=AuYNXgO_f3Y"}),"The Internet: Cybersecurity & Crime")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=LVV_93mBfSU"}),"The Internet: How Search Works"))),Object(a.b)("h2",{id:"reference"},"Reference"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work"}),"MDN How does the Internet work?"))))}u.isMDXComponent=!0},469:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},h=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(i,".").concat(p)]||h[p]||b[p]||a;return n?o.a.createElement(m,c({ref:t},l,{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);