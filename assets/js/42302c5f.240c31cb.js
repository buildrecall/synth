"use strict";(self.webpackChunksynth_docs=self.webpackChunksynth_docs||[]).push([[5792],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(y,i(i({ref:n},s),{},{components:t})):r.createElement(y,i({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5740:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c=void 0,p={unversionedId:"docs/content/object",id:"docs/content/object",isDocsHomePage:!1,title:"object",description:"Synth's object generator type mirrors JSON's objects. They generate key/value pairs whose keys are strings and values",source:"@site/docs/docs/content/object.md",sourceDirName:"docs/content",slug:"/docs/content/object",permalink:"/docs/content/object",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/docs/content/object.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"string",permalink:"/docs/content/string"},next:{title:"array",permalink:"/docs/content/array"}},s=[],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Synth's ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," generator type mirrors JSON's objects. They generate key/value pairs whose keys are strings and values\nare any sampled from any other generator type. With an ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),", you can compose simpler generators into compound\ngenerators that reflect complex data structures."),(0,o.kt)("p",null,"The keys of the JSON object to generate are inlined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"object")," keys (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"identifier"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"name"')," below)."),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "identifier": {\n    "type": "number",\n    "subtype": "u64",\n    "range": {\n      "low": 0,\n      "high": 100,\n      "step": 1\n    }\n  },\n  "name": {\n    "type": "string",\n    "faker": {\n      "generator": "name"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Values of objects can be any of Synth's generator type (including an other object). In the example above, ",(0,o.kt)("inlineCode",{parentName:"p"},'"identifier"'),"\nhas value a ",(0,o.kt)("a",{parentName:"p",href:"number"},(0,o.kt)("inlineCode",{parentName:"a"},"number"))," type and ",(0,o.kt)("inlineCode",{parentName:"p"},'"name"')," has value a ",(0,o.kt)("a",{parentName:"p",href:"string"},(0,o.kt)("inlineCode",{parentName:"a"},"string"))," type."),(0,o.kt)("p",null,"Values of objects can be made nullable by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},'"optional": true')," attribute."),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "email": {\n    "optional": true,\n    "type": "string",\n    "faker": {\n      "generator": "ascii_email"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"By default, optional values that are generated as ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will produce a key-value pair of the form ",(0,o.kt)("inlineCode",{parentName:"p"},"key: null"),". This behavior can be controlled by specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"skip_when_null: true")," attribute on the object generator."),(0,o.kt)("h4",{id:"example-2"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "skip_when_null": true,\n  "email": {\n    "optional": true,\n    "type": "string",\n    "faker": {\n      "generator": "ascii_email"\n    }\n  }\n}\n')),(0,o.kt)("p",null,"If a field should have the name ",(0,o.kt)("inlineCode",{parentName:"p"},'"type"'),", this would clash with the predefined object attribute of the same name.\nThis can be worked around by changing the name to ",(0,o.kt)("inlineCode",{parentName:"p"},'"type_"'),". The additional underscore will be removed in the\ngenerated values."),(0,o.kt)("h4",{id:"example-3"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n  "type": "object",\n  "type_": {\n    "type": "string",\n    "categorical": {\n      "user": 90,\n      "contributor": 8,\n      "admin": 2\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);