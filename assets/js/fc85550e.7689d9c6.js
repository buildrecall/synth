"use strict";(self.webpackChunksynth_docs=self.webpackChunksynth_docs||[]).push([[1272],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},3080:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return N},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return y}});var a=n(7462),r=n(3366),o=n(7294),i=n(3905),l=n(9443);var s=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),p="tabItem_1uMI",u="tabItemActive_2DSg";var d=function(e){var t,n=e.lazy,a=e.block,r=e.defaultValue,i=e.values,l=e.groupId,d=e.className,m=o.Children.toArray(e.children),h=null!=i?i:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=r?r:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=s(),f=g.tabGroupChoices,y=g.setTabGroupChoices,k=(0,o.useState)(v),N=k[0],b=k[1],w=[];if(null!=l){var x=f[l];null!=x&&x!==N&&h.some((function(e){return e.value===x}))&&b(x)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;b(a),null!=l&&(y(l,a),setTimeout((function(){var e,n,a,r,o,i,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,n>=0&&o<=s&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},d)},h.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":N===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,o.cloneElement)(m.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))};var m=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],v={title:"Installation"},g=void 0,f={unversionedId:"docs/getting_started/installation",id:"docs/getting_started/installation",isDocsHomePage:!1,title:"Installation",description:'<Tabs defaultValue="linux"',source:"@site/docs/docs/getting_started/installation.md",sourceDirName:"docs/getting_started",slug:"/docs/getting_started/installation",permalink:"/docs/getting_started/installation",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/docs/getting_started/installation.md",tags:[],version:"current",frontMatter:{title:"Installation"},sidebar:"docsSidebar",previous:{title:"What is Synth?",permalink:"/docs/getting_started/synth"},next:{title:"Hello world",permalink:"/docs/getting_started/hello-world"}},y=[],k={toc:y};function N(e){var t=e.components,n=(0,r.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"},{label:"Nix",value:"nix"},{label:"Compile from source",value:"cargo"}],mdxType:"Tabs"},(0,i.kt)(m,{value:"linux",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following command to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"synth")," binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://getsynth.com/install | sh\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ci")," flag.")))),(0,i.kt)(m,{value:"windows",mdxType:"TabItem"},(0,i.kt)("p",null,"To install on Windows, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getsynth/synth/releases/latest/download/synth-windows-latest-x86_64.exe"},"download")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"synth")," executable and run it from your ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Git BASH")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Windows PowerShell"),"."),(0,i.kt)("p",null,"Then copy the downloaded executable to a suitable folder (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"C:\\synth\\synth.exe"),")."),(0,i.kt)("p",null,"Finally ",(0,i.kt)("a",{parentName:"p",href:"https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/"},"add ",(0,i.kt)("inlineCode",{parentName:"a"},"synth")," to your PATH")," via your environment variables."),(0,i.kt)("p",null,"You should now be able to use ",(0,i.kt)("inlineCode",{parentName:"p"},"synth"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"PS C:\\Users\\user\\workspace> synth version\n"))),(0,i.kt)(m,{value:"nix",mdxType:"TabItem"},(0,i.kt)("p",null,"If you happen to be running the ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/download.html#nix-quick-install"},"Nix")," package manager or if you're on ",(0,i.kt)("a",{parentName:"p",href:"https://nixos.org/"},"NixOS"),", you can use our automated Nix packaging that will set everything up for you."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We recommend you add ",(0,i.kt)("a",{parentName:"p",href:"https://app.cachix.org/cache/getsynth"},"getsynth.cachix.org")," to your list of binary caches. This will speed up your installation considerably by downloading ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/getsynth/synth/actions/workflows/cachix.yml"},"GitHub Actions build artifacts")," instead of compiling everything locally."))),(0,i.kt)("p",null,"To install the latest released version of ",(0,i.kt)("inlineCode",{parentName:"p"},"synth")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"nix >= 2.4"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nix-env -i -f https://github.com/getsynth/synth/releases/latest/download/install-nix\n")),(0,i.kt)("p",null,"For versions of ",(0,i.kt)("inlineCode",{parentName:"p"},"nix < 2.4"),", run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"SYNTH_TMP=$(mktemp); \\\n    curl -L --output - https://github.com/getsynth/synth/releases/latest/download/install-nix |\\\n    tar -xO > $SYNTH_TMP; \\\n    nix-env -i -f $SYNTH_TMP\n"))),(0,i.kt)(m,{value:"cargo",mdxType:"TabItem"},(0,i.kt)("p",null,"To get started, make sure you have a recent version of the ",(0,i.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust nightly toolchain"),". Then run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly install --locked --git https://github.com/getsynth/synth.git synth\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If compilation fails, it may be because some required dependencies are not installed. On Ubuntu, you can try:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"sudo apt-get install libssl-dev libsqlite3-dev\n"))))),(0,i.kt)(m,{value:"mac",mdxType:"TabItem"},(0,i.kt)("p",null,"Run the following command to install the ",(0,i.kt)("inlineCode",{parentName:"p"},"synth")," binary:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSL https://getsynth.com/install | sh\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To skip the telemetry prompt (if you are installing Synth in CI for example) you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ci")," flag."))))))}N.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);