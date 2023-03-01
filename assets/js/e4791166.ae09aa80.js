"use strict";(self.webpackChunkaries_cloud_agent_python_documentation=self.webpackChunkaries_cloud_agent_python_documentation||[]).push([[266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},s="Aries Agents in context: The Big Picture",i={unversionedId:"developer/AriesBigPicture",id:"developer/AriesBigPicture",title:"Aries Agents in context: The Big Picture",description:'Aries agents can be used in a lot of places. This classic Indy Architecture picture shows five agents - the four around the outside (on a phone, a tablet, a laptop and an enterprise server) are referred to as "edge agents", and many cloud agents in the blue circle.',source:"@site/docs/developer/AriesBigPicture.md",sourceDirName:"developer",slug:"/developer/AriesBigPicture",permalink:"/aries-acapy-docs/developer/AriesBigPicture",draft:!1,editUrl:"https://github.com/hyperledger/aries-acapy-docs/tree/main/docs/docusaurus/docs/developer/AriesBigPicture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"What is Aries?",permalink:"/aries-acapy-docs/developer/AriesBasics"},next:{title:"Developer Demos and Samples of Aries Agent",permalink:"/aries-acapy-docs/developer/AriesDeveloperDemos"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aries-agents-in-context-the-big-picture"},"Aries Agents in context: The Big Picture"),(0,o.kt)("p",null,'Aries agents can be used in a lot of places. This classic Indy Architecture picture shows five agents - the four around the outside (on a phone, a tablet, a laptop and an enterprise server) are referred to as "edge agents", and many cloud agents in the blue circle.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cryptocalibur.com/wp-content/uploads/2018/06/sovrin-ico-3-600x402.png",alt:"image"})),(0,o.kt)("p",null,"The agents in the picture shares many attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"They have some sort of storage for keys and other data related to their role as an agent"),(0,o.kt)("li",{parentName:"ul"},"They interact with other agents using secure. peer-to-peer messaging protocols"),(0,o.kt)("li",{parentName:"ul"},'They have some associated mechanism to provide "business rules" to control the behaviour of the agent',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"That is often a person for phone, tablet, laptop, etc. based agents"),(0,o.kt)("li",{parentName:"ul"},"That is often backend enterprise systems for enterprise agents"),(0,o.kt)("li",{parentName:"ul"},"Business rules for cloud agents are often about the routing of messages to and from edge agents")))),(0,o.kt)("p",null,"While there can be many other agent setups, the picture above shows the most common ones - edge agents for people, edge agents for organizations and cloud agents for routing messages (although cloud agents could be edge agents. Sigh...). A significant emerging use case missing from that picture are agents embedded within/associated with IoT devices. In the common IoT case, IoT device agents are just variants of other edge agents, connected to the rest of the ecosystem through a cloud agent. All the same principles apply."),(0,o.kt)("p",null,"Misleading in the picture is that (almost) all agents connect directly to the Ledger network. In this picture it's the Sovrin ledger, but that could be any Indy network (e.g. set of nodes running indy-node software) and in future, ledgers from other providers. That implies most agents embed the ledger SDK (e.g. indy-sdk) and makes calls to the ledger SDK to interact with the ledger and other SDK controlled resources (e.g. secure storage). Thus, unlike what is implied in the picture, edge agents (commonly) do not call a cloud agent to interact with the ledger - they do it directly. Super small IoT devices are an instance of an exception to that - lacking compute/storage resources and/or connectivity, they might communicate with a cloud agent that would communicate with the ledger."),(0,o.kt)("p",null,"While current Aries agents currently only support Indy-based ledgers, the intention is to add support for other ledgers."),(0,o.kt)("p",null,'The (most common) purpose of cloud agents is to enable secure and privacy preserving routing of messages between edge agents. Rather than messages going directly from edge agent to edge agent (which is often impossible - for example sending to a mobile agent), messages sent from edge agent to edge agent are routed through a sequence of cloud agents. Some of those cloud agents might be controlled by the sender, some by the receiver and others might be gateways owned by agent vendors (called "Agencies"). In all cases, an edge agent tells routing agents "here\'s how to send messages to me", so a routing agent sending a message only has to know how to send a peer-to-peer message. While quite complicated, the protocols used by the agents largely take care of this complexity, and most developers don\'t have to know much about it.'),(0,o.kt)("p",null,'Note the many caveats in this section - "most common", "commonly", etc. There are many small building blocks available in Aries and underlying components that can be combined in infinite ways. We recommend not worrying about the alternate use cases for now. Focus on understanding the common use cases while remembering that other configurations are possible.'),(0,o.kt)("p",null,"We also recommend ",(0,o.kt)("strong",{parentName:"p"},"not")," digging into all the layers described here. Just as you don't have to know how TCP/IP works to write a web app, you don't need to know how indy-node or indy-sdk work to be able to build your first Aries-based application. Later in this guide we'll covering the starting point you do need to know."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Back to the ",(0,o.kt)("a",{parentName:"p",href:"/aries-acapy-docs/developer/"},"Aries Developer - Getting Started Guide"),".")))}p.isMDXComponent=!0}}]);