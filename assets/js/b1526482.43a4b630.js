"use strict";(self.webpackChunkaries_cloud_agent_python_documentation=self.webpackChunkaries_cloud_agent_python_documentation||[]).push([[7632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=n,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={},l="aries_cloudagent.tails package",i={unversionedId:"code/generated/aries_cloudagent.tails",id:"code/generated/aries_cloudagent.tails",title:"aries_cloudagent.tails package",description:"Submodules",source:"@site/docs/code/generated/aries_cloudagent.tails.md",sourceDirName:"code/generated",slug:"/code/generated/aries_cloudagent.tails",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.tails",draft:!1,editUrl:"https://github.com/hyperledger/aries-acapy-docs/tree/main/docs/docusaurus/docs/code/generated/aries_cloudagent.tails.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aries_cloudagent.storage.vc_holder package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.storage.vc_holder"},next:{title:"aries_cloudagent.transport.inbound package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.transport.inbound"}},s={},c=[{value:"Submodules",id:"submodules",level:2},{value:"aries_cloudagent.tails.base module",id:"aries_cloudagenttailsbase-module",level:2},{value:"<em>class</em> aries_cloudagent.tails.base.BaseTailsServer()",id:"class-aries_cloudagenttailsbasebasetailsserver",level:3},{value:"<em>abstract async</em> upload_tails_file(context: InjectionContext, rev_reg_id: str, tails_file_path: str, interval: float = 1.0, backoff: float = 0.25, max_attempts: int = 5)",id:"abstract-async-upload_tails_filecontext-injectioncontext-rev_reg_id-str-tails_file_path-str-interval-float--10-backoff-float--025-max_attempts-int--5",level:4},{value:"aries_cloudagent.tails.error module",id:"aries_cloudagenttailserror-module",level:2},{value:"<em>exception</em> aries_cloudagent.tails.error.TailsServerNotConfiguredError(*args, error_code: Optional[str] = None, **kwargs)",id:"exception-aries_cloudagenttailserrortailsservernotconfigurederrorargs-error_code-optionalstr--none-kwargs",level:3},{value:"aries_cloudagent.tails.indy_tails_server module",id:"aries_cloudagenttailsindy_tails_server-module",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aries_cloudagenttails-package"},"aries_cloudagent.tails package"),(0,n.kt)("h2",{id:"submodules"},"Submodules"),(0,n.kt)("h2",{id:"aries_cloudagenttailsbase-module"},"aries_cloudagent.tails.base module"),(0,n.kt)("p",null,"Tails server interface base class."),(0,n.kt)("h3",{id:"class-aries_cloudagenttailsbasebasetailsserver"},(0,n.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.tails.base.BaseTailsServer()"),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/abc.html#abc.ABC"},(0,n.kt)("inlineCode",{parentName:"a"},"ABC"))),(0,n.kt)("p",null,"Base class for tails server interface."),(0,n.kt)("h4",{id:"abstract-async-upload_tails_filecontext-injectioncontext-rev_reg_id-str-tails_file_path-str-interval-float--10-backoff-float--025-max_attempts-int--5"},(0,n.kt)("em",{parentName:"h4"},"abstract async")," upload_tails_file(context: ",(0,n.kt)("a",{parentName:"h4",href:"/aries-acapy-docs/code/generated/aries_cloudagent.config#aries_cloudagent.config.injection_context.InjectionContext"},"InjectionContext"),", rev_reg_id: ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", tails_file_path: ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", interval: ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/functions.html#float"},"float")," = 1.0, backoff: ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/functions.html#float"},"float")," = 0.25, max_attempts: ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/functions.html#int"},"int")," = 5)"),(0,n.kt)("p",null,"Upload tails file to tails server."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rev_reg_id")," \u2013 The revocation registry identifier")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* **tails_file** \u2013 The path to the tails file to upload\n\n\n* **interval** \u2013 initial interval between attempts\n\n\n* **backoff** \u2013 exponential backoff in retry interval\n\n\n* **max_attempts** \u2013 maximum number of attempts to make\n")),(0,n.kt)("h2",{id:"aries_cloudagenttailserror-module"},"aries_cloudagent.tails.error module"),(0,n.kt)("p",null,"Tails server related errors."),(0,n.kt)("h3",{id:"exception-aries_cloudagenttailserrortailsservernotconfigurederrorargs-error_code-optionalstr--none-kwargs"},(0,n.kt)("em",{parentName:"h3"},"exception")," aries_cloudagent.tails.error.TailsServerNotConfiguredError(","*","args, error_code: ",(0,n.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,n.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None, ","*","*","kwargs)"),(0,n.kt)("p",null,"Bases: ",(0,n.kt)("a",{parentName:"p",href:"/aries-acapy-docs/code/generated/aries_cloudagent.core#aries_cloudagent.core.error.BaseError"},(0,n.kt)("inlineCode",{parentName:"a"},"BaseError"))),(0,n.kt)("p",null,"Error indicating the tails server plugin hasn\u2019t been configured."),(0,n.kt)("h2",{id:"aries_cloudagenttailsindy_tails_server-module"},"aries_cloudagent.tails.indy_tails_server module"))}u.isMDXComponent=!0}}]);