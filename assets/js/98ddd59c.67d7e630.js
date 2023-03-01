"use strict";(self.webpackChunkaries_cloud_agent_python_documentation=self.webpackChunkaries_cloud_agent_python_documentation||[]).push([[5321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Developer's Read Me for Hyperledger Aries Cloud Agent - Python"},o="Developer's Read Me for Hyperledger Aries Cloud Agent - Python \x3c!-- omit in toc --\x3e",s={unversionedId:"docs/DevReadMe",id:"docs/DevReadMe",title:"Developer's Read Me for Hyperledger Aries Cloud Agent - Python",description:"See the README for details about this repository and information about how the Aries Cloud Agent - Python fits into the Aries project and relates to Indy.",source:"@site/docs/docs/DevReadMe.md",sourceDirName:"docs",slug:"/docs/DevReadMe",permalink:"/aries-acapy-docs/docs/DevReadMe",draft:!1,editUrl:"https://github.com/hyperledger/aries-acapy-docs/tree/main/docs/docusaurus/docs/docs/DevReadMe.md",tags:[],version:"current",frontMatter:{title:"Developer's Read Me for Hyperledger Aries Cloud Agent - Python"},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/aries-acapy-docs/docs/Databases"},next:{title:"Transaction Endorser Support",permalink:"/aries-acapy-docs/docs/Endorser"}},l={},p=[{value:"Table of Contents  omit in toc ",id:"table-of-contents--omit-in-toc-",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Developer Demos",id:"developer-demos",level:2},{value:"Running",id:"running",level:2},{value:"Configuring ACA-PY: Command Line Parameters",id:"configuring-aca-py-command-line-parameters",level:3},{value:"Docker",id:"docker",level:3},{value:"Locally Installed",id:"locally-installed",level:3},{value:"About ACA-Py Command Line Parameters",id:"about-aca-py-command-line-parameters",level:3},{value:"Provisioning a Wallet",id:"provisioning-a-wallet",level:3},{value:"Mediation",id:"mediation",level:3},{value:"Multi-tenancy",id:"multi-tenancy",level:3},{value:"JSON-LD Credentials",id:"json-ld-credentials",level:3},{value:"Developing",id:"developing",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running Locally",id:"running-locally",level:3},{value:"Logging",id:"logging",level:3},{value:"Running Tests",id:"running-tests",level:3},{value:"Running Aries Agent Test Harness Tests",id:"running-aries-agent-test-harness-tests",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Publishing Releases",id:"publishing-releases",level:2},{value:"Dynamic Injection of Services",id:"dynamic-injection-of-services",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developers-read-me-for-hyperledger-aries-cloud-agent---python--omit-in-toc-"},"Developer's Read Me for Hyperledger Aries Cloud Agent - Python "),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/"},"README")," for details about this repository and information about how the Aries Cloud Agent - Python fits into the Aries project and relates to Indy."),(0,r.kt)("h2",{id:"table-of-contents--omit-in-toc-"},"Table of Contents "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#developer-demos"},"Developer Demos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running"},"Running"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuring-aca-py-command-line-parameters"},"Configuring ACA-PY: Command Line Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker"},"Docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#locally-installed"},"Locally Installed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#about-aca-py-command-line-parameters"},"About ACA-Py Command Line Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#provisioning-a-wallet"},"Provisioning a Wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mediation"},"Mediation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multi-tenancy"},"Multi-tenancy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#json-ld-credentials"},"JSON-LD Credentials")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#developing"},"Developing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-locally"},"Running Locally")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#logging"},"Logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-tests"},"Running Tests")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-aries-agent-test-harness-tests"},"Running Aries Agent Test Harness Tests")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#development-workflow"},"Development Workflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#publishing-releases"},"Publishing Releases")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dynamic-injection-of-services"},"Dynamic Injection of Services"))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Aries Cloud Agent Python (ACA-Py) is a configurable, extensible, non-mobile Aries agent that implements an easy way for developers to build decentralized identity services that use verifiable credentials."),(0,r.kt)("p",null,"The information on this page assumes you are developer with a background in decentralized identity, Indy, Aries and verifiable credentials. If you aren't familiar with those concepts and projects, please use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/GettingStartedAriesDev/README.md"},"Getting Started Guide")," to learn more."),(0,r.kt)("h2",{id:"developer-demos"},"Developer Demos"),(0,r.kt)("p",null,"To put ACA-Py through its paces at the command line, checkout our ",(0,r.kt)("a",{parentName:"p",href:"/docs/GettingStartedAriesDev/AriesDeveloperDemos.md"},"demos")," page."),(0,r.kt)("h2",{id:"running"},"Running"),(0,r.kt)("h3",{id:"configuring-aca-py-command-line-parameters"},"Configuring ACA-PY: Command Line Parameters"),(0,r.kt)("p",null,"ACA-Py agent instances are configured through the use of command line parameters. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," option\nto discover the available command line parameters."),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"To run a docker container based on the code in the current repo, use the following commands from the root folder of the repository to check the version, list the available modes of operation, and see all of the command line parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"scripts/run_docker --version\nscripts/run_docker --help\nscripts/run_docker provision --help\nscripts/run_docker start --help\n")),(0,r.kt)("h3",{id:"locally-installed"},"Locally Installed"),(0,r.kt)("p",null,"If you installed the PyPi package, the executable ",(0,r.kt)("inlineCode",{parentName:"p"},"aca-py")," should be available on your PATH."),(0,r.kt)("p",null,"Use the following commands from the root folder of the repository to check the version, list the available modes of operation, and see all of the command line parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aca-py --version\naca-py --help\naca-py provision --help\naca-py start --help\n")),(0,r.kt)("p",null,"If you get an error about a missing module ",(0,r.kt)("inlineCode",{parentName:"p"},"indy")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleNotFoundError: No module named 'indy'"),") when running ",(0,r.kt)("inlineCode",{parentName:"p"},"aca-py"),", you will need to install the Indy libraries from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install python3_indy\n")),(0,r.kt)("p",null,"Once that completes successfully, you should be able to run ",(0,r.kt)("inlineCode",{parentName:"p"},"aca-py --version")," and the other examples above."),(0,r.kt)("h3",{id:"about-aca-py-command-line-parameters"},"About ACA-Py Command Line Parameters"),(0,r.kt)("p",null,"ACA-Py invocations are separated into two types - initially provisioning an agent (",(0,r.kt)("inlineCode",{parentName:"p"},"provision"),") and starting a new agent process (",(0,r.kt)("inlineCode",{parentName:"p"},"start"),"). This separation enables not having to pass in some encryption-related parameters required for provisioning when starting an agent instance. This improves security in production deployments."),(0,r.kt)("p",null,"When starting an agent instance, at least one ",(0,r.kt)("em",{parentName:"p"},"inbound")," and one ",(0,r.kt)("em",{parentName:"p"},"outbound")," transport MUST be specified."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aca-py start    --inbound-transport http 0.0.0.0 8000 \\\n                --outbound-transport http\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aca-py start    --inbound-transport http 0.0.0.0 8000 \\\n                --inbound-transport ws 0.0.0.0 8001 \\\n                --outbound-transport ws \\\n                --outbound-transport http\n")),(0,r.kt)("p",null,"ACA-Py ships with both inbound and outbound transport drivers for ",(0,r.kt)("inlineCode",{parentName:"p"},"http")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ws")," (websockets). Additional transport drivers can be added as pluggable implementations. See the existing implementations in the ",(0,r.kt)("a",{parentName:"p",href:"aries_cloudagent/transport"},"transports module")," for getting starting on adding a new transport."),(0,r.kt)("p",null,"Most configuration parameters are provided to the the agent at startup. Refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Running")," sections above for details on listing the available command line parameters."),(0,r.kt)("h3",{id:"provisioning-a-wallet"},"Provisioning a Wallet"),(0,r.kt)("p",null,"It is possible to provision an Indy wallet before running an agent to avoid passing in the wallet seed on every invocation of an agent (e.g. on every ",(0,r.kt)("inlineCode",{parentName:"p"},"aca-py start ..."),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aca-py provision --wallet-type indy --seed $SEED\n")),(0,r.kt)("p",null,"For additional ",(0,r.kt)("inlineCode",{parentName:"p"},"provision")," options, execute ",(0,r.kt)("inlineCode",{parentName:"p"},"aca-py provision --help"),"."),(0,r.kt)("p",null,"Additional information about wallet storages can be found ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/Databases"},"here"),"."),(0,r.kt)("h3",{id:"mediation"},"Mediation"),(0,r.kt)("p",null,"ACA-Py can also run in mediator mode - ACA-Py can be run ",(0,r.kt)("em",{parentName:"p"},"as")," a mediator (it can mediate connections for other agents), or it can connect to an external mediator to mediate its own connections. See the ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/Mediation"},"docs on mediation")," for more info."),(0,r.kt)("h3",{id:"multi-tenancy"},"Multi-tenancy"),(0,r.kt)("p",null,"ACA-Py can also be started in multi-tenant mode. This allows the agent to serve multiple tenants, that each have their own wallet. See the ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/Multitenancy"},"docs on multi-tenancy")," for more info."),(0,r.kt)("h3",{id:"json-ld-credentials"},"JSON-LD Credentials"),(0,r.kt)("p",null,"ACA-Py can issue W3C Verifiable Credentials using Linked Data Proofs. See the ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/JsonLdCredentials"},"docs on JSON-LD Credentials")," for more info."),(0,r.kt)("h2",{id:"developing"},"Developing"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," must be installed to run software locally and to run the test suite."),(0,r.kt)("h3",{id:"running-locally"},"Running Locally"),(0,r.kt)("p",null,"For local development, we recommend using the provided Docker scripts to run the ACA-Py software."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_docker start <args>\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_docker start --inbound-transport http 0.0.0.0 10000 --outbound-transport http --debug --log-level DEBUG\n")),(0,r.kt)("p",null,"To enable the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/ptvsd"},"ptvsd")," Python debugger for Visual Studio/VSCode use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--debug")," command line parameter."),(0,r.kt)("p",null,"Any ports you will be using from the docker container should be published using the ",(0,r.kt)("inlineCode",{parentName:"p"},"PORTS")," environment variable. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PORTS="5000:5000 8000:8000 10000:10000" ./scripts/run_docker start --inbound-transport http 0.0.0.0 10000 --outbound-transport http --debug --log-level DEBUG\n')),(0,r.kt)("p",null,"Refer to ",(0,r.kt)("a",{parentName:"p",href:"#Running"},"the previous section")," for instructions on how to run the software."),(0,r.kt)("h3",{id:"logging"},"Logging"),(0,r.kt)("p",null,"You can find more details about logging and log levels ",(0,r.kt)("a",{parentName:"p",href:"/aries-acapy-docs/docs/Logging"},"here"),"."),(0,r.kt)("h3",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,"To run the ACA-Py test suite, use the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_tests\n")),(0,r.kt)("p",null,"To run the ACA-Py test suite with ptvsd debugger enabled:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_tests --debug\n")),(0,r.kt)("p",null,"To run specific tests pass parameters as defined by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/usage.html#specifying-tests-selecting-tests"},"pytest"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_tests aries_cloudagent/protocols/connections\n")),(0,r.kt)("p",null,"To run the tests including ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/indy-sdk"},"Indy SDK")," and related dependencies, run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/run_tests_indy\n")),(0,r.kt)("h3",{id:"running-aries-agent-test-harness-tests"},"Running Aries Agent Test Harness Tests"),(0,r.kt)("p",null,"You can run a full suite of integration tests using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-agent-test-harness"},"Aries Agent Test Harness (AATH)"),"."),(0,r.kt)("p",null,"Check out and run AATH tests as follows (this tests the aca-py ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/hyperledger/aries-agent-test-harness.git\ncd aries-agent-test-harness\n./manage build -a acapy-master\n./manage run -d acapy-master -t @AcceptanceTest -t ~@wip\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"manage")," script is described in detail ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-agent-test-harness#the-manage-bash-script"},"here"),", including how to modify the AATH code to run the tests against your aca-py repo/branch."),(0,r.kt)("h2",{id:"development-workflow"},"Development Workflow"),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"http://flake8.pycqa.org/en/latest/"},"Flake8")," to enforce a coding style guide."),(0,r.kt)("p",null,"We use ",(0,r.kt)("a",{parentName:"p",href:"https://black.readthedocs.io/en/stable/"},"Black")," to automatically format code."),(0,r.kt)("p",null,"Please write tests for the work that you submit."),(0,r.kt)("p",null,"Tests should reside in a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"tests")," alongside the code under test. Generally, there is one test file for each file module under test. Test files ",(0,r.kt)("em",{parentName:"p"},"must")," have a name starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"test_")," to be automatically picked up the test runner."),(0,r.kt)("p",null,"There are some good examples of various test scenarios for you to work from including mocking external imports and working with async code so take a look around!"),(0,r.kt)("p",null,"The test suite also displays the current code coverage after each run so you can see how much of your work is covered by tests. Use your best judgement for how much coverage is sufficient."),(0,r.kt)("p",null,"Please also refer to the ",(0,r.kt)("a",{parentName:"p",href:"/CONTRIBUTING.md"},"contributing guidelines")," and ",(0,r.kt)("a",{parentName:"p",href:"/CODE_OF_CONDUCT.md"},"code of conduct"),"."),(0,r.kt)("h2",{id:"publishing-releases"},"Publishing Releases"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hyperledger/aries-cloudagent-python/blob/main/PUBLISHING.md"},"publishing")," document provides information on tagging a release and publishing the release artifacts to PyPi."),(0,r.kt)("h2",{id:"dynamic-injection-of-services"},"Dynamic Injection of Services"),(0,r.kt)("p",null,"The Agent employs a dynamic injection system whereby providers of base classes are registered with the ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestContext")," instance, currently within ",(0,r.kt)("inlineCode",{parentName:"p"},"conductor.py"),". Message handlers and services request an instance of the selected implementation using ",(0,r.kt)("inlineCode",{parentName:"p"},"context.inject(BaseClass)"),"; for instance the wallet instance may be injected using ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet = context.inject(BaseWallet)"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," method normally throws an exception if no implementation of the base class is provided, but can be called with ",(0,r.kt)("inlineCode",{parentName:"p"},"required=False")," for optional dependencies (in which case a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," may be returned)."),(0,r.kt)("p",null,"Providers are registered with either ",(0,r.kt)("inlineCode",{parentName:"p"},"context.injector.bind_instance(BaseClass, instance)")," for previously-constructed (singleton) object instances, or ",(0,r.kt)("inlineCode",{parentName:"p"},"context.injector.bind_provider(BaseClass, provider)")," for dynamic providers. In some cases it may be desirable to write a custom provider which switches implementations based on configuration settings, such as the wallet provider."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseProvider")," classes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.provider")," module include ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassProvider"),", which can perform dynamic module inclusion when given the combined module and class name as a string (for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"aries_cloudagent.wallet.indy.IndyWallet"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassProvider")," accepts additional positional and keyword arguments to be passed into the class constructor. Any of these arguments may be an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassProvider.Inject(BaseClass)"),", allowing dynamic injection of dependencies when the class instance is instantiated."))}u.isMDXComponent=!0}}]);