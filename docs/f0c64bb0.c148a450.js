(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(147)),c={id:"autoclose",title:"Closing resources automatically",slug:"autoclose.html"},l={unversionedId:"framework/autoclose",id:"framework/autoclose",isDocsHomePage:!1,title:"Closing resources automatically",description:"You can let Kotest close resources automatically after all tests have been run:",source:"@site/docs/framework/autoclose.md",slug:"/framework/autoclose.html",permalink:"/docs/framework/autoclose.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/framework/autoclose.md",version:"current",sidebar:"framework",previous:{title:"Grouping Tests with Tags",permalink:"/docs/framework/tags.html"},next:{title:"Temporary Files",permalink:"/docs/framework/temporary-files"}},s=[],i={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"You can let Kotest close resources automatically after all tests have been run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-kotlin"}),'class StringSpecExample : StringSpec() {\n\n  val reader = autoClose(StringReader("xyz"))\n\n  init {\n    "your test case" {\n      // use resource reader here\n    }\n  }\n}\n')),Object(a.b)("p",null,"Resources that should be closed this way must implement ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/AutoCloseable.html"}),Object(a.b)("inlineCode",{parentName:"a"},"java.lang.AutoCloseable")),". Closing is performed in\nreversed order of declaration after the return of the last spec interceptor."))}u.isMDXComponent=!0},147:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(b,l(l({ref:t},i),{},{components:r})):o.a.createElement(b,l({ref:t},i))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);