"use strict";(self.webpackChunkaries_cloud_agent_python_documentation=self.webpackChunkaries_cloud_agent_python_documentation||[]).push([[1702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(a),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||n;return a?r.createElement(h,s(s({ref:t},d),{},{components:a})):r.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var r=a(7462),o=(a(7294),a(3905));const n={},s="aries_cloudagent.transport.outbound package",l={unversionedId:"code/generated/aries_cloudagent.transport.outbound",id:"code/generated/aries_cloudagent.transport.outbound",title:"aries_cloudagent.transport.outbound package",description:"Submodules",source:"@site/docs/code/generated/aries_cloudagent.transport.outbound.md",sourceDirName:"code/generated",slug:"/code/generated/aries_cloudagent.transport.outbound",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.transport.outbound",draft:!1,editUrl:"https://github.com/hyperledger/aries-acapy-docs/tree/main/docs/docusaurus/docs/code/generated/aries_cloudagent.transport.outbound.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aries_cloudagent.transport package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.transport"},next:{title:"aries_cloudagent.transport.queue package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.transport.queue"}},p={},i=[{value:"Submodules",id:"submodules",level:2},{value:"aries_cloudagent.transport.outbound.base module",id:"aries_cloudagenttransportoutboundbase-module",level:2},{value:"<em>class</em> aries_cloudagent.transport.outbound.base.BaseOutboundTransport(wire_format: Optional[BaseWireFormat] = None, root_profile: Optional[Profile] = None)",id:"class-aries_cloudagenttransportoutboundbasebaseoutboundtransportwire_format-optionalbasewireformat--none-root_profile-optionalprofile--none",level:3},{value:"<em>property</em> collector(<em>: Collector(/aries-acapy-docs/code/generated/aries_cloudagent.utils#aries_cloudagent.utils.stats.Collector</em> )",id:"property-collector-collectoraries-acapy-docscodegeneratedaries_cloudagentutilsaries_cloudagentutilsstatscollector-",level:4},{value:"<em>abstract async</em> handle_message(profile: Profile, payload: Union[str, bytes], endpoint: str, metadata: Optional[dict] = None)",id:"abstract-async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none",level:4},{value:"<em>abstract async</em> start()",id:"abstract-async-start",level:4},{value:"<em>abstract async</em> stop()",id:"abstract-async-stop",level:4},{value:"<em>property</em> wire<em>format(</em>: BaseWireFormat",id:"property-wireformat-basewireformat",level:4},{value:"<em>exception</em> aries_cloudagent.transport.outbound.base.OutboundDeliveryError(*args, error_code: Optional[str] = None, **kwargs)",id:"exception-aries_cloudagenttransportoutboundbaseoutbounddeliveryerrorargs-error_code-optionalstr--none-kwargs",level:3},{value:"<em>exception</em> aries_cloudagent.transport.outbound.base.OutboundTransportError(*args, error_code: Optional[str] = None, **kwargs)",id:"exception-aries_cloudagenttransportoutboundbaseoutboundtransporterrorargs-error_code-optionalstr--none-kwargs",level:3},{value:"<em>exception</em> aries_cloudagent.transport.outbound.base.OutboundTransportRegistrationError(*args, error_code: Optional[str] = None, **kwargs)",id:"exception-aries_cloudagenttransportoutboundbaseoutboundtransportregistrationerrorargs-error_code-optionalstr--none-kwargs",level:3},{value:"aries_cloudagent.transport.outbound.http module",id:"aries_cloudagenttransportoutboundhttp-module",level:2},{value:"<em>class</em> aries_cloudagent.transport.outbound.http.HttpTransport(**kwargs)",id:"class-aries_cloudagenttransportoutboundhttphttptransportkwargs",level:3},{value:"<em>async</em> handle_message(profile: Profile, payload: Union[str, bytes], endpoint: str, metadata: Optional[dict] = None, api_key: Optional[str] = None)",id:"async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none-api_key-optionalstr--none",level:4},{value:"is<em>external(</em> = Fals_ )",id:"isexternal--fals_-",level:4},{value:"schemes(<em> = (&#39;http&#39;, &#39;https&#39;</em> )",id:"schemes--http-https-",level:4},{value:"<em>async</em> start()",id:"async-start",level:4},{value:"<em>async</em> stop()",id:"async-stop",level:4},{value:"aries_cloudagent.transport.outbound.manager module",id:"aries_cloudagenttransportoutboundmanager-module",level:2},{value:"aries_cloudagent.transport.outbound.message module",id:"aries_cloudagenttransportoutboundmessage-module",level:2},{value:"aries_cloudagent.transport.outbound.status module",id:"aries_cloudagenttransportoutboundstatus-module",level:2},{value:"<em>class</em> aries_cloudagent.transport.outbound.status.OutboundSendStatus(value)",id:"class-aries_cloudagenttransportoutboundstatusoutboundsendstatusvalue",level:3},{value:"QUEUED<em>FOR_DELIVERY(</em> = &#39;queued<em>for_delivery</em> )",id:"queuedfor_delivery--queuedfor_delivery-",level:4},{value:"SENT<em>TO_EXTERNAL_QUEUE(</em> = &#39;sent<em>to_external_queue</em> )",id:"sentto_external_queue--sentto_external_queue-",level:4},{value:"SENT<em>TO_SESSION(</em> = &#39;sent<em>to_session</em> )",id:"sentto_session--sentto_session-",level:4},{value:"UNDELIVERABLE(<em> = &#39;undeliverable</em> )",id:"undeliverable--undeliverable-",level:4},{value:"WAITING<em>FOR_PICKUP(</em> = &#39;waiting<em>for_pickup</em> )",id:"waitingfor_pickup--waitingfor_pickup-",level:4},{value:"<em>property</em> topic()",id:"property-topic",level:4},{value:"aries_cloudagent.transport.outbound.ws module",id:"aries_cloudagenttransportoutboundws-module",level:2},{value:"<em>class</em> aries_cloudagent.transport.outbound.ws.WsTransport(**kwargs)",id:"class-aries_cloudagenttransportoutboundwswstransportkwargs",level:3},{value:"<em>async</em> handle_message(profile: Profile, payload: Union[str, bytes], endpoint: str, metadata: Optional[dict] = None, api_key: Optional[str] = None)",id:"async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none-api_key-optionalstr--none-1",level:4},{value:"is<em>external(</em> = Fals_ )",id:"isexternal--fals_--1",level:4},{value:"schemes(<em> = (&#39;ws&#39;, &#39;wss&#39;</em> )",id:"schemes--ws-wss-",level:4},{value:"<em>async</em> start()",id:"async-start-1",level:4},{value:"<em>async</em> stop()",id:"async-stop-1",level:4}],d={toc:i},u="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aries_cloudagenttransportoutbound-package"},"aries_cloudagent.transport.outbound package"),(0,o.kt)("h2",{id:"submodules"},"Submodules"),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundbase-module"},"aries_cloudagent.transport.outbound.base module"),(0,o.kt)("p",null,"Base outbound transport."),(0,o.kt)("h3",{id:"class-aries_cloudagenttransportoutboundbasebaseoutboundtransportwire_format-optionalbasewireformat--none-root_profile-optionalprofile--none"},(0,o.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.transport.outbound.base.BaseOutboundTransport(wire_format: ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h3",href:"/aries-acapy-docs/code/generated/aries_cloudagent.transport#aries_cloudagent.transport.wire_format.BaseWireFormat"},"BaseWireFormat"),"] = None, root_profile: ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h3",href:"/aries-acapy-docs/code/generated/aries_cloudagent.core#aries_cloudagent.core.profile.Profile"},"Profile"),"] = None)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/abc.html#abc.ABC"},(0,o.kt)("inlineCode",{parentName:"a"},"ABC"))),(0,o.kt)("p",null,"Base outbound transport class."),(0,o.kt)("h4",{id:"property-collector-collectoraries-acapy-docscodegeneratedaries_cloudagentutilsaries_cloudagentutilsstatscollector-"},(0,o.kt)("em",{parentName:"h4"},"property")," collector(",(0,o.kt)("em",{parentName:"h4"},": ","[Collector]","(/aries-acapy-docs/code/generated/aries_cloudagent.utils#aries_cloudagent.utils.stats.Collector")," )"),(0,o.kt)("p",null,"Accessor for the stats collector instance."),(0,o.kt)("h4",{id:"abstract-async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none"},(0,o.kt)("em",{parentName:"h4"},"abstract async")," handle_message(profile: ",(0,o.kt)("a",{parentName:"h4",href:"/aries-acapy-docs/code/generated/aries_cloudagent.core#aries_cloudagent.core.profile.Profile"},"Profile"),", payload: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Union"},"Union"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#bytes"},"bytes"),"], endpoint: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", metadata: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#dict"},"dict"),"] = None)"),(0,o.kt)("p",null,"Handle message."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"profile")," \u2013 the profile that produced the message")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* **payload** \u2013 message payload in string or byte format\n\n\n* **endpoint** \u2013 URI endpoint for delivery\n\n\n* **metadata** \u2013 Additional metadata associated with the payload\n")),(0,o.kt)("h4",{id:"abstract-async-start"},(0,o.kt)("em",{parentName:"h4"},"abstract async")," start()"),(0,o.kt)("p",null,"Start the transport."),(0,o.kt)("h4",{id:"abstract-async-stop"},(0,o.kt)("em",{parentName:"h4"},"abstract async")," stop()"),(0,o.kt)("p",null,"Shut down the transport."),(0,o.kt)("h4",{id:"property-wireformat-basewireformat"},(0,o.kt)("em",{parentName:"h4"},"property")," wire",(0,o.kt)("em",{parentName:"h4"},"format("),": ",(0,o.kt)("a",{parentName:"h4",href:"/aries-acapy-docs/code/generated/aries_cloudagent.transport#aries_cloudagent.transport.wire_format.BaseWireFormat_"},"BaseWireFormat")),(0,o.kt)("p",null,"Accessor for a custom wire format for the transport."),(0,o.kt)("h3",{id:"exception-aries_cloudagenttransportoutboundbaseoutbounddeliveryerrorargs-error_code-optionalstr--none-kwargs"},(0,o.kt)("em",{parentName:"h3"},"exception")," aries_cloudagent.transport.outbound.base.OutboundDeliveryError(","*","args, error_code: ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None, ","*","*","kwargs)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("inlineCode",{parentName:"p"},"OutboundTransportError")),(0,o.kt)("p",null,"Base exception when a message cannot be delivered via an outbound transport."),(0,o.kt)("h3",{id:"exception-aries_cloudagenttransportoutboundbaseoutboundtransporterrorargs-error_code-optionalstr--none-kwargs"},(0,o.kt)("em",{parentName:"h3"},"exception")," aries_cloudagent.transport.outbound.base.OutboundTransportError(","*","args, error_code: ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None, ","*","*","kwargs)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("a",{parentName:"p",href:"/aries-acapy-docs/code/generated/aries_cloudagent.transport#aries_cloudagent.transport.error.TransportError"},(0,o.kt)("inlineCode",{parentName:"a"},"TransportError"))),(0,o.kt)("p",null,"Generic outbound transport error."),(0,o.kt)("h3",{id:"exception-aries_cloudagenttransportoutboundbaseoutboundtransportregistrationerrorargs-error_code-optionalstr--none-kwargs"},(0,o.kt)("em",{parentName:"h3"},"exception")," aries_cloudagent.transport.outbound.base.OutboundTransportRegistrationError(","*","args, error_code: ",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None, ","*","*","kwargs)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("inlineCode",{parentName:"p"},"OutboundTransportError")),(0,o.kt)("p",null,"Outbound transport registration error."),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundhttp-module"},"aries_cloudagent.transport.outbound.http module"),(0,o.kt)("p",null,"Http outbound transport."),(0,o.kt)("h3",{id:"class-aries_cloudagenttransportoutboundhttphttptransportkwargs"},(0,o.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.transport.outbound.http.HttpTransport(","*","*","kwargs)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseOutboundTransport")),(0,o.kt)("p",null,"Http outbound transport class."),(0,o.kt)("h4",{id:"async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none-api_key-optionalstr--none"},(0,o.kt)("em",{parentName:"h4"},"async")," handle_message(profile: ",(0,o.kt)("a",{parentName:"h4",href:"/aries-acapy-docs/code/generated/aries_cloudagent.core#aries_cloudagent.core.profile.Profile"},"Profile"),", payload: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Union"},"Union"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#bytes"},"bytes"),"], endpoint: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", metadata: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#dict"},"dict"),"] = None, api_key: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None)"),(0,o.kt)("p",null,"Handle message from queue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"profile")," \u2013 the profile that produced the message")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* **payload** \u2013 message payload in string or byte format\n\n\n* **endpoint** \u2013 URI endpoint for delivery\n\n\n* **metadata** \u2013 Additional metadata associated with the payload\n")),(0,o.kt)("h4",{id:"isexternal--fals_-"},"is",(0,o.kt)("em",{parentName:"h4"},"external(")," = Fals_ )"),(0,o.kt)("h4",{id:"schemes--http-https-"},"schemes(",(0,o.kt)("em",{parentName:"h4"}," = ('http', 'https'")," )"),(0,o.kt)("h4",{id:"async-start"},(0,o.kt)("em",{parentName:"h4"},"async")," start()"),(0,o.kt)("p",null,"Start the transport."),(0,o.kt)("h4",{id:"async-stop"},(0,o.kt)("em",{parentName:"h4"},"async")," stop()"),(0,o.kt)("p",null,"Stop the transport."),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundmanager-module"},"aries_cloudagent.transport.outbound.manager module"),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundmessage-module"},"aries_cloudagent.transport.outbound.message module"),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundstatus-module"},"aries_cloudagent.transport.outbound.status module"),(0,o.kt)("p",null,"Enum representing captured send status of outbound messages."),(0,o.kt)("h3",{id:"class-aries_cloudagenttransportoutboundstatusoutboundsendstatusvalue"},(0,o.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.transport.outbound.status.OutboundSendStatus(value)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/enum.html#enum.Enum"},(0,o.kt)("inlineCode",{parentName:"a"},"Enum"))),(0,o.kt)("p",null,"Send status of outbound messages."),(0,o.kt)("h4",{id:"queuedfor_delivery--queuedfor_delivery-"},"QUEUED",(0,o.kt)("em",{parentName:"h4"},"FOR_DELIVERY(")," = 'queued",(0,o.kt)("em",{parentName:"h4"},"for_delivery")," )"),(0,o.kt)("h4",{id:"sentto_external_queue--sentto_external_queue-"},"SENT",(0,o.kt)("em",{parentName:"h4"},"TO_EXTERNAL_QUEUE(")," = 'sent",(0,o.kt)("em",{parentName:"h4"},"to_external_queue")," )"),(0,o.kt)("h4",{id:"sentto_session--sentto_session-"},"SENT",(0,o.kt)("em",{parentName:"h4"},"TO_SESSION(")," = 'sent",(0,o.kt)("em",{parentName:"h4"},"to_session")," )"),(0,o.kt)("h4",{id:"undeliverable--undeliverable-"},"UNDELIVERABLE(",(0,o.kt)("em",{parentName:"h4"}," = 'undeliverable")," )"),(0,o.kt)("h4",{id:"waitingfor_pickup--waitingfor_pickup-"},"WAITING",(0,o.kt)("em",{parentName:"h4"},"FOR_PICKUP(")," = 'waiting",(0,o.kt)("em",{parentName:"h4"},"for_pickup")," )"),(0,o.kt)("h4",{id:"property-topic"},(0,o.kt)("em",{parentName:"h4"},"property")," topic()"),(0,o.kt)("p",null,"Return an event topic associated with a given status."),(0,o.kt)("h2",{id:"aries_cloudagenttransportoutboundws-module"},"aries_cloudagent.transport.outbound.ws module"),(0,o.kt)("p",null,"Websockets outbound transport."),(0,o.kt)("h3",{id:"class-aries_cloudagenttransportoutboundwswstransportkwargs"},(0,o.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.transport.outbound.ws.WsTransport(","*","*","kwargs)"),(0,o.kt)("p",null,"Bases: ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseOutboundTransport")),(0,o.kt)("p",null,"Websockets outbound transport class."),(0,o.kt)("h4",{id:"async-handle_messageprofile-profile-payload-unionstr-bytes-endpoint-str-metadata-optionaldict--none-api_key-optionalstr--none-1"},(0,o.kt)("em",{parentName:"h4"},"async")," handle_message(profile: ",(0,o.kt)("a",{parentName:"h4",href:"/aries-acapy-docs/code/generated/aries_cloudagent.core#aries_cloudagent.core.profile.Profile"},"Profile"),", payload: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Union"},"Union"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#bytes"},"bytes"),"], endpoint: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),", metadata: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#dict"},"dict"),"] = None, api_key: ",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/typing.html#typing.Optional"},"Optional"),"[",(0,o.kt)("a",{parentName:"h4",href:"https://docs.python.org/3/library/stdtypes.html#str"},"str"),"] = None)"),(0,o.kt)("p",null,"Handle message from queue."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"profile")," \u2013 the profile that produced the message")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"* **payload** \u2013 message payload in string or byte format\n\n\n* **endpoint** \u2013 URI endpoint for delivery\n\n\n* **metadata** \u2013 Additional metadata associated with the payload\n")),(0,o.kt)("h4",{id:"isexternal--fals_--1"},"is",(0,o.kt)("em",{parentName:"h4"},"external(")," = Fals_ )"),(0,o.kt)("h4",{id:"schemes--ws-wss-"},"schemes(",(0,o.kt)("em",{parentName:"h4"}," = ('ws', 'wss'")," )"),(0,o.kt)("h4",{id:"async-start-1"},(0,o.kt)("em",{parentName:"h4"},"async")," start()"),(0,o.kt)("p",null,"Start the outbound transport."),(0,o.kt)("h4",{id:"async-stop-1"},(0,o.kt)("em",{parentName:"h4"},"async")," stop()"),(0,o.kt)("p",null,"Stop the outbound transport."))}c.isMDXComponent=!0}}]);