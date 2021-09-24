(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(144)),i=["components"],b={},l={unversionedId:"integrations/postgres",id:"integrations/postgres",isDocsHomePage:!1,title:"postgres",description:"---",source:"@site/docs/integrations/postgres.md",slug:"/integrations/postgres",permalink:"/synth/integrations/postgres",editUrl:"https://github.com/getsynth/synth/edit/master/docs/docs/integrations/postgres.md",version:"current",sidebar:"docsSidebar",previous:{title:"bank_db",permalink:"/synth/examples/bank"},next:{title:"Table of Contents",permalink:"/synth/content/toc"}},c=[{value:"title: PostgreSQL",id:"title-postgresql",children:[]},{value:"Usage",id:"usage",children:[{value:"URI format",id:"uri-format",children:[]}]},{value:"Import",id:"import",children:[{value:"Example Import",id:"example-import",children:[]},{value:"Example Import Command",id:"example-import-command",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Generate",id:"generate",children:[{value:"Example Generation Command",id:"example-generation-command",children:[]}]}],p={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("h2",{id:"title-postgresql"},"title: PostgreSQL"),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The Synth PostgreSQL integration is currently ",Object(o.b)("strong",{parentName:"p"},"in beta"),"."))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," can use ",Object(o.b)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," as a data source or\nsink. Connecting ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," to a PostgreSQL is as simple as specifying a URI\nand schema during the ",Object(o.b)("inlineCode",{parentName:"p"},"import")," or ",Object(o.b)("inlineCode",{parentName:"p"},"generate"),"\nphase."),Object(o.b)("h3",{id:"uri-format"},"URI format"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"postgres://<username>:<password>@<host>:<port>/<catalog>\n")),Object(o.b)("h2",{id:"import"},"Import"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," can import directly from a ",Object(o.b)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"\ndatabase and create a data model from the database schema. During import, a\nnew ",Object(o.b)("a",{parentName:"p",href:"../getting_started/core-concepts#namespaces"},"namespace"),"\nwill be created from your database schema, and\na ",Object(o.b)("a",{parentName:"p",href:"../getting_started/core-concepts#collections"},"collection")," is created for each\ntable in a separate JSON file. ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," will map database columns to fields in\nthe collections it creates. It then provides default generators for every\ncollection. Synth will default to the ",Object(o.b)("inlineCode",{parentName:"p"},"public")," schema but this can be\noverriden with the ",Object(o.b)("inlineCode",{parentName:"p"},"--schema")," flag."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," will automatically detect primary key and foreign key constraints at\nimport time and update the namespace and collection to reflect them. ",Object(o.b)("strong",{parentName:"p"},"Primary\nkeys")," get mapped to ",Object(o.b)("inlineCode",{parentName:"p"},"synth"),"'s ",Object(o.b)("a",{parentName:"p",href:"../content/number#id"},"id"),"\ngenerator, and ",Object(o.b)("strong",{parentName:"p"},"foreign keys")," get mapped to the ",Object(o.b)("a",{parentName:"p",href:"/synth/content/same-as"},"same_as"),"\ngenerator."),Object(o.b)("p",null,"Finally ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," will sample data randomly from every table in order to create a\nmore realistic data model by automatically inferring bounds on types."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," has its own internal data model, and so does Postgres, therefore a\nconversion occurs between ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," types and Postgres types. The inferred type\ncan be seen below. The synth types link to default generator ",Object(o.b)("em",{parentName:"p"},"variant"),"\ngenerated during the ",Object(o.b)("inlineCode",{parentName:"p"},"import")," process for that PostgreSQL type."),Object(o.b)("p",null,"Note, not all PostgreSQL types have been covered yet. If there is a type you\nneed, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/getsynth/synth/issues/new?assignees=&labels=New+feature&template=feature_request.md&title="},"open an issue"),"\non GitHub."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"PostgreSQL Type"),Object(o.b)("th",{parentName:"tr",align:null},"Synth Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"Null ","|"," T"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/one-of"},"one_of"),"<",Object(o.b)("a",{parentName:"td",href:"../content/null"},"null"),", T>")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"boolean"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/bool#frequency"},"bool"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"char"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#pattern"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"varchar(x)"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#pattern"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"text"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#pattern"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"bpchar(x)"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#pattern"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"name"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#pattern"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"int2"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"i64"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"int4"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"i32"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"int8"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"i64"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"float4"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"f32"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"float8"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"f64"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"numeric"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/number#range"},"f64"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"timestamptz"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#date_time"},"date_time"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"timestamp"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#date_time"},"naive_date_time"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"date"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#date_time"},"naive_date"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"uuid"),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"../content/string#uuid"},"string"))))),Object(o.b)("h3",{id:"example-import"},"Example Import"),Object(o.b)("p",null,"Below is an example import for a single table."),Object(o.b)("p",null,"Postgres table definition:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sql"},"create table doctors\n(\n    id          int primary key,\n    hospital_id int not null, \n    name        varchar(255) not null,\n    date_joined date,\n    constraint hospital_fk\n        foreign key(hospital_id)\n            references hospitals(id)\n);\n")),Object(o.b)("p",null,"And the corresponding ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," collection:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "array",\n  "length": {\n    "type": "number",\n    "range": {\n      "low": 0,\n      "high": 2,\n      "step": 1\n    },\n    "subtype": "u64"\n  },\n  "content": {\n    "type": "object",\n    "date_joined": {\n      "type": "one_of",\n      "variants": [\n        {\n          "weight": 1.0,\n          "type": "string",\n          "date_time": {\n            "format": "%Y-%m-%d",\n            "subtype": "naive_date",\n            "begin": null,\n            "end": null\n          }\n        },\n        {\n          "weight": 1.0,\n          "type": "null"\n        }\n      ]\n    },\n    "hospital_id": {\n      "type": "same_as",\n      "ref": "hospitals.content.id"\n    },\n    "id": {\n      "type": "number",\n      "id": {},\n      "subtype": "u64"\n    },\n    "name": {\n      "type": "string",\n      "pattern": "[a-zA-Z0-9]{0, 255}"\n    }\n  }\n\n')),Object(o.b)("h3",{id:"example-import-command"},"Example Import Command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"synth import --from postgres://user:pass@localhost:5432/postgres --schema \nmain my_namespace \n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("h2",{id:"generate"},"Generate"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," can generate data directly into your PostgreSQL database. First ",Object(o.b)("inlineCode",{parentName:"p"},"synth"),"\nwill generate as much data as required, then open a connection to your database,\nand then perform batch insert to quickly insert as much data as you need."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"synth")," will also respect primary key and foreign key constraints, by performing\na ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Topological_sorting"},"topological sort")," on the\ndata and inserting it in the right order such that no constraints are violated."),Object(o.b)("h3",{id:"example-generation-command"},"Example Generation Command"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"synth generate --to postgres://user:pass@localhost:5432/ --schema \nmain my_namespace\n")))}s.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.a.createElement(u,b(b({ref:t},c),{},{components:n})):r.a.createElement(u,b({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);