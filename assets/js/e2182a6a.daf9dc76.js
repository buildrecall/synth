"use strict";(self.webpackChunksynth_docs=self.webpackChunksynth_docs||[]).push([[9752],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5339:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Complex Procedural Rust Macros",author:"Andre Bogus",author_title:"Chief Rustacean",author_url:"https://github.com/getsynth",author_image_url:"https://avatars.githubusercontent.com/u/4200835?v=4",tags:["rust","macros"],description:"In this post, we write a procedural macro that generates code to bind functions and types including arbitrary many impl blocks to a scripting language. The problems encountered and techniques learned can be applied to other tasks where complex compile-time analysis that spans multiple macro invocations is required.",image:"https://live.staticflickr.com/2785/4317096083_24697db960_b.jpg",hide_table_of_contents:!1},l=void 0,d={permalink:"/blog/2021/08/09/macro",source:"@site/blog/2021-08-09-macro.md",title:"Complex Procedural Rust Macros",description:"In this post, we write a procedural macro that generates code to bind functions and types including arbitrary many impl blocks to a scripting language. The problems encountered and techniques learned can be applied to other tasks where complex compile-time analysis that spans multiple macro invocations is required.",date:"2021-08-09T00:00:00.000Z",formattedDate:"August 9, 2021",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"macros",permalink:"/blog/tags/macros"}],readingTime:7.945,truncated:!1,authors:[{name:"Andre Bogus",title:"Chief Rustacean",url:"https://github.com/getsynth",imageURL:"https://avatars.githubusercontent.com/u/4200835?v=4"}],prevItem:{title:"Seeding test databases in 2021 - best practices",permalink:"/blog/2021/08/31/seeding-databases-tutorial"},nextItem:{title:"Why not to use prod data for testing - and what to do instead",permalink:"/blog/2021/08/04/test-data"}},c={authorsImageUrls:[void 0]},p=[{value:"The Background",id:"the-background",children:[]},{value:"Early Beginnings",id:"early-beginnings",children:[]},{value:"Dirty tricks avoided",id:"dirty-tricks-avoided",children:[]},{value:"Expanding Our Vision",id:"expanding-our-vision",children:[]},{value:"The Takeaway",id:"the-takeaway",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I recently wrote the most complex procedural Rust macro I\u2019ve ever attempted. This post tries to outline the problems I\u2019ve encountered and tells how I overcame them."),(0,r.kt)("h2",{id:"the-background"},"The Background"),(0,r.kt)("p",null,"With synth, we are building a declarative command line test data generator. For now, the specification that declares what test data to build is just JSON that gets deserialised to our data structures using ",(0,r.kt)("inlineCode",{parentName:"p"},"serde_json"),". This was a quick and easy way to configure our application without much overhead in terms of code. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"synth",synth:!0},'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "constant": 3\n    },\n    "content": {\n        "type": "object",\n        "id": {\n            "type": "number",\n            "id": {}\n        },\n        "name": {\n            "type": "string",\n            "faker": {\n                "generator": "name"\n            }\n        },\n        "email": {\n            "type": "string",\n            "faker": {\n                "generator": "ascii_email"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"However, it\u2019s also not very nice to write (for example JSON has no comments, no formulas, etc.), so we wanted to bind our specification to a scripting language. Our end goal is to extend the language (both in terms of builtin functions and syntax) to make the configuration really elegant. After some testing and benchmarking different runtimes, our choice fell on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/koto-lang/koto"},"koto"),", a nice little scripting language that was built foremost for live coding. "),(0,r.kt)("p",null,"Unfortunately, koto has a very bare interface to bind to external Rust code. Since we are talking about a rather large number of types we want to include, it was clear from the start that we would want to generate the code to bind to koto."),(0,r.kt)("h2",{id:"early-beginnings"},"Early Beginnings"),(0,r.kt)("p",null,"So I started with a somewhat simple macro to wrangle koto types (e.g. Maps) into our Rust types. However, I soon found that the marshalling overhead would have been fine for an initial setup phase, but not for recurrent calls into koto (for example for filter functions called for each row). Thus I changed my approach to try and bind functions, then extended that to types and impl blocks."),(0,r.kt)("p",null,"I found \u2013 as I then thought \u2013 a genius technique of generating functions that would call each other, thus daisy-chaining a series of code blocks into one that could then be called with another ",(0,r.kt)("inlineCode",{parentName:"p"},"bindlang_main!()")," proc macro:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"static FN_NUMBER: AtomicUsize = AtomicUsize::new(0);\n\nfn next_fn(mut b: Block, arg: &Expr) -> Item {\n    let number = FN_NUMBER.fetch_add(1, SeqCst);\n    let this_fn = fn_ident(number);\n    if let Some(n) = number.checked_sub(1) {\n        let last_fn = fn_ident(n);\n        b.stmts.push(parse_quote! { #last_fn(#arg); });\n    }\n    b.stmts.extend(last_call);\n    parse_quote! { fn #this_fn(#arg) { #b } }\n}\n\n#[proc_macro]\nfn bindlang_main(arg: TokenStream) -> TokenStream {\n    let arg = ident(arg.to_string());\n    TokenStream::from(if let Some(n) = FN_NUMBER.load(SeqCst).checked_sub(1) {\n        let last_fn = fn_ident(n);\n        quote! { #last_fn(#arg) }\n    } else {\n        proc_macro2::TokenStream::default()\n    })\n}\n")),(0,r.kt)("p",null,"I also wrote a derive macro to implement the marshalling traits. This worked well for a small example that was entirely contained within one module, but failed once the code was spread out through multiple modules: The functions would no longer be in the same scope and therefore stopped finding each other."),(0,r.kt)("p",null,"Worse, I needed a number of pre-defined maps with functions for method dispatch for our external types within koto. A type in Rust can have an arbitrary number of impl blocks but I needed exactly ",(0,r.kt)("em",{parentName:"p"},"one")," table, and I couldn\u2019t simply daisy-chain those."),(0,r.kt)("p",null,"It was clear I needed a different solution. After thinking long and hard I came to the conclusion that I needed to pull all the code together in one scope, by the ",(0,r.kt)("inlineCode",{parentName:"p"},"bindlang_main!()")," macro. My idea was that I create a ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"syn::Item"),"s to be quoted together into one ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenStream"),". A lazy static ",(0,r.kt)("inlineCode",{parentName:"p"},"Arc<Mutex<Vec<Context>>>")," was to collect the information from multiple attribute invocations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Default)]\nstruct Context {\n    bare_fns: Vec<MethodSig>,\n    modules: HashMap<String, Vec<MethodSig>>,\n    vtables: HashMap<String, Vec<MethodSig>>,\n    types: HashMap<String, String>,\n}\nlazy_static::lazy_static! {\n    static ref CONTEXT: Arc<Mutex<Context>> = Arc::new(Mutex::new(Context::default()));\n}\n\n#[proc_macro_attribute]\npub fn bindlang(_attrs: TokenStream, code: TokenStream) -> TokenStream {\n    let code_cloned = code.clone();\n    let input = parse_macro_input!(code_cloned as Item);\n    // evaluate input here, and store information in Context\n    // CONTEXT.lock().unwrap()...\n    code\n}\n")),(0,r.kt)("p",null,"This was when I found out that none of ",(0,r.kt)("inlineCode",{parentName:"p"},"syn"),"'s type is ",(0,r.kt)("inlineCode",{parentName:"p"},"Send")," and therefore cannot be stored within a ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutex"),". My first attempt to circumvent this was moving everything to ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"s and using ",(0,r.kt)("inlineCode",{parentName:"p"},"syn::parse_str")," to get the items out. This failed because of macro hygiene: Each identifier in Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"proc_macro"),"s has an identity. Two identifiers resulting from two macro operations will get different identities, no matter if their textual representation is the same."),(0,r.kt)("p",null,"I also found that ",(0,r.kt)("inlineCode",{parentName:"p"},"proc_macro_derive"),"s have no way to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(..)]")," attribute of the type, and I wanted to also bind derived trait implementations (at least for ",(0,r.kt)("inlineCode",{parentName:"p"},"Default"),", because some types have no other constructors). So I removed the derive and moved the implementation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[bindlang]")," attribute macro, which now works on types, impl blocks and fns."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Beware: This makes use of the (unspecified, but as of now working) top-down order of macro expansion to work!")),(0,r.kt)("h2",{id:"dirty-tricks-avoided"},"Dirty tricks avoided"),(0,r.kt)("p",null,"There is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Span::mixed_context()")," variant that will yield semi-hygienic macros (like with ",(0,r.kt)("inlineCode",{parentName:"p"},"macro_rules"),"). However, this looked risky (macro hygiene is there to protect us, so we better have a good reason to override it), so I took the data oriented approach, collecting the info I needed to create the code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy_static")," to walk within ",(0,r.kt)("inlineCode",{parentName:"p"},"bindlang_main!()"),". I still tried to generate the trait impls for marshalling directly in the attribute macro, but this again ran into macro hygiene trouble, because I could not recreate the virtual dispatch table identifiers. After moving this part to the main macro, too, the macro finally expanded successfully."),(0,r.kt)("p",null,"Except it didn\u2019t compile successfully."),(0,r.kt)("p",null,"I had forgotten to ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," the items I was creating code for in the macro, and koto requires all external types to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Display"),". So I added those imports as macro arguments and added the ",(0,r.kt)("inlineCode",{parentName:"p"},"Display")," ",(0,r.kt)("inlineCode",{parentName:"p"},"impl"),"s to be met with a type inference error within the macro invocation. Clearly I needed some type annotations, but the error message only showed me the macro invocation, which was pretty unhelpful."),(0,r.kt)("h2",{id:"expanding-our-vision"},"Expanding Our Vision"),(0,r.kt)("p",null,"My solution to debug those was to ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo expand")," the code, comment out the macro invocation and copy the expanded portions in its place so that my IDE would pinpoint the error for me. I had to manually un-expand some ",(0,r.kt)("inlineCode",{parentName:"p"},"format!")," invocations so the code would resolve correctly, and finally found where I needed more type annotations. With those added, the code finally compiled. Whew!"),(0,r.kt)("p",null,"I then extended the bindings to also cover trait impls and ",(0,r.kt)("inlineCode",{parentName:"p"},"Option"),"s, while my colleague Christos changed the code to marshall Rust values into koto values to mangle ",(0,r.kt)("inlineCode",{parentName:"p"},"Result::Err(_)")," into koto\u2019s runtime errors. Remembering that implicit constructors (structs and enum variants) are also useful, I added support to binding those if public. There was another error where intermediate code generated wouldn't parse, but some ",(0,r.kt)("inlineCode",{parentName:"p"},"eprintln!")," debugging helped pinpoint the piece of code where it happened."),(0,r.kt)("p",null,"When trying to bind functions taking a non ",(0,r.kt)("inlineCode",{parentName:"p"},"self")," referenced argument (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"fn from(value: &Value) -> Self"),"), I found that the bindings would not work, because my ",(0,r.kt)("inlineCode",{parentName:"p"},"FromValue")," implementation could not get references. Remember, a function in Rust cannot return a borrow into a value that lives only within it. It took me a while to remember I ",(0,r.kt)("a",{parentName:"p",href:"https://llogiq.github.io/2015/08/19/closure.html"},"blogged")," about the solution in 2015! Closures to the rescue! The basic idea is to have a function that takes a closure with a reference argument and return the result of that closure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait RefFromValue {\n    fn ref_from_value<R, F: Fn(&Self) -> R>(\n        key_path: &KeyPath<'_>,\n        value: &Value,\n        f: F,\n    ) -> Result<R, RuntimeError>;\n}\n")),(0,r.kt)("p",null,"Having this in a separate trait allows us to distinguish types where the borrow isn't ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),", e.g. for ",(0,r.kt)("inlineCode",{parentName:"p"},"&str"),". Also we gain a bit of simplicity by using unified function call syntax (",(0,r.kt)("inlineCode",{parentName:"p"},"MyType::my_fn(..)")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.my_fn"),"). This also meant I had to nest the argument parsing: I did this by creating the innermost ",(0,r.kt)("inlineCode",{parentName:"p"},"Expr")," and wrap it in argument extractors in reverse argument order:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"let mut expr: Expr = parse_quote! { #path(#(#inner_idents),*) };\nfor (i, ((a, v), mode)) in idents.iter().zip(args.iter()).enumerate().rev() {\n    expr = if mode.is_ref() {\n        parse_quote! { \n            ::lang_bindings::RefFromValue::ref_from_value(\n                &::lang_bindings::KeyPath::Index(#i, None),\n                #a,\n                |#v| #expr\n            )?\n        }\n    } else {\n        parse_quote! {\n            match (::lang_bindings::FromValue::from_value(\n                &::lang_bindings::KeyPath::Index(#i, None),\n                #a\n            )?) { \n                (#v) => #expr\n            }\n        }\n    };\n}\n")),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," part is there to introduce a binding without requiring a ",(0,r.kt)("inlineCode",{parentName:"p"},"Block"),", a common macro trick. Now all that was left to do was add ",(0,r.kt)("inlineCode",{parentName:"p"},"#[bindlang]")," attributes to our ",(0,r.kt)("inlineCode",{parentName:"p"},"Namespace")," and its contents, and also add a lot of ",(0,r.kt)("inlineCode",{parentName:"p"},"Display")," implementations because koto requires this for all ",(0,r.kt)("inlineCode",{parentName:"p"},"ExternalValue")," implementors."),(0,r.kt)("p",null,"In conclusion, our test configuration should now look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'synth.Namespace({\n    synth.Name("users"): synth.Content.Array (\n    {\n            synth.Name("id"): synth.Content.Number(NumberContent.Id(schema.Id)),\n            synth.Name("name"): synth.Content.String(StringContent.Faker("firstname", ["EN"])),\n            synth.Name("email"): synth.Content.String(StringContent.Faker("email", ["EN"])),\n    },\n    synth.Content.Number(NumberContent.Constant(10))\n    })\n})\n')),(0,r.kt)("p",null,"That's only the beginning: I want to introduce a few coercions, a custom koto prelude and perhaps some syntactic sugar to make this even easier to both read and write."),(0,r.kt)("h2",{id:"the-takeaway"},"The Takeaway"),(0,r.kt)("p",null,"Macros that collect state to use later are possible (well, as long as the expansion order stays as it is) and useful, especially where code is strewn across various blocks (or even files or modules). However, if code relies on other code, it best be emitted in one go, otherwise module visibility and macro hygiene conspire to make life hard for the macro author. And if at one point the expansion order gets changed in a way that breaks the macro, I can change it to a standalone crate to be called from build.rs thanks to ",(0,r.kt)("inlineCode",{parentName:"p"},"proc_macro2")," being decoupled from the actual implementation."))}m.isMDXComponent=!0}}]);