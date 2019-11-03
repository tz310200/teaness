(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/Form/Components/Cascader.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=a("./node_modules/react/index.js"),r=a.n(l),c=a("./node_modules/@mdx-js/react/dist/index.es.js"),o=a("./node_modules/docz/dist/index.esm.js"),i=(a("./node_modules/antd/dist/antd.css"),a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js")),d=a("./node_modules/antd/es/cascader/index.js"),b=a("./node_modules/classnames/index.js"),u=a.n(b);a("./src/Form/Components/styles/cascader.scss");"undefined"!==typeof CancellablePromise&&CancellablePromise&&CancellablePromise===Object(CancellablePromise)&&Object.isExtensible(CancellablePromise)&&Object.defineProperty(CancellablePromise,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CancellablePromise",filename:"src\\Form\\Components\\Cascader.tsx"}}),"undefined"!==typeof CascaderProps&&CascaderProps&&CascaderProps===Object(CascaderProps)&&Object.isExtensible(CascaderProps)&&Object.defineProperty(CascaderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CascaderProps",filename:"src\\Form\\Components\\Cascader.tsx"}});var p=function(e){var n=e.onChange,a=e.options,c=e.requestMethod,o=e.errorCallback,b=(e.value,e.className),p=Object(s.a)(e,["onChange","options","requestMethod","errorCallback","value","className"]),m=Object(l.useMemo)((function(){return new Set}),[]),f=Object(l.useState)(a),j=Object(t.a)(f,2),O=j[0],C=j[1],h=Object(l.useState)(!1),v=Object(t.a)(h,2),g=v[0],y=v[1],P=Object(l.useCallback)((function(e){if(e){var n=e[e.length-1];if(n.loading=!0,c){var a=c(n.value);m.add(a),a.then((function(e){n.loading=!1,n.children=e,C((function(e){if(e)return Object(i.a)(e)}))})).catch((function(n){o?o(n,e):console.error(n)})).finally((function(){m.delete(a)}))}}}),[c]),_=Object(l.useMemo)((function(){return e.value?e.value.split("-").reduce((function(e,n){return e.length>0?e.push("".concat(e[e.length-1],"-").concat(n)):e.push(n),e}),[]):void 0}),[e.value]);Object(l.useEffect)((function(){if(c){var e=c();m.add(e),e.then((function(e){return C(e)})).catch((function(e){o?o(e):console.error(e)})).finally((function(){m.delete(e)}))}return function(){Array.from(m).forEach((function(e){e.cancel()}))}}),[c]),Object(l.useEffect)((function(){!g&&c&&O&&Array.isArray(_)&&_.length>1&&function e(n,a,t,s,l,r,c){if(c&&a.length>n){var o=a[n-1],d=c.find((function(e){return e.value===o}));if(d)if(d.children)e(n+1,a,t,s,l,r,d.children);else{var b=s(o);t.add(b),b.then((function(e){d.loading=!1,d.children=e,l((function(e){if(e)return Object(i.a)(e)}))})).catch((function(e){r?r(e,o):console.error(e)})).finally((function(){t.delete(b)}))}}}(1,_,m,c,C,o,O)}),[O,_]);var x=Object(l.useCallback)((function(e,a){y(!0),n&&(e.length>0?n(e[e.length-1],a):n(void 0,a))}),[n]);return r.a.createElement(d.a,Object.assign({className:u()("tea-cascader",b),value:_,onChange:x,options:O,loadData:P},p))},m=p;p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Cascader",filename:"src\\Form\\Components\\Cascader.tsx"}}),a.d(n,"default",(function(){return O}));var f={},j="wrapper";function O(e){var n=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)(j,Object.assign({},f,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"cascader\u9009\u62e9\u5668"},"Cascader(\u9009\u62e9\u5668)"),Object(c.b)("p",null,"antd ",Object(c.b)("a",Object.assign({parentName:"p"},{href:"https://ant.design/components/Cascader-cn/"}),"Cascader")," \u5dee\u4e0d\u591a"),Object(c.b)("h2",{id:"\u57fa\u672c\u7528\u6cd5basic-usage"},"\u57fa\u672c\u7528\u6cd5(Basic usage)"),Object(c.b)(o.Playground,{__position:0,__code:"() => {\n  const [value, setValue] = useState(undefined)\n  return (\n    <div>\n      <Cascader\n        onChange={setValue}\n        value={value}\n        options={[\n          {\n            label: '\u6c5f\u82cf\u7701',\n            value: '32',\n            isLeaf: false,\n            children: [\n              {\n                label: '\u5357\u4eac\u5e02',\n                value: '32-01',\n                isLeaf: false,\n                children: [\n                  {\n                    label: '\u5e02\u8f96\u533a',\n                    value: '32-01-01',\n                    isLeaf: true,\n                  },\n                ],\n              },\n            ],\n          },\n          {\n            label: '\u5e7f\u897f\u7701',\n            value: '54',\n            isLeaf: false,\n            children: [\n              {\n                label: '\u67f3\u5dde\u5e02',\n                value: '54-50',\n                isLeaf: false,\n                children: [\n                  {\n                    label: '\u57ce\u4e2d\u533a',\n                    value: '54-50-00',\n                    isLeaf: true,\n                  },\n                ],\n              },\n            ],\n          },\n        ]}\n      />\n    </div>\n  )\n}",__scope:{props:this?this.props:a,Playground:o.Playground,Props:o.Props,useState:l.useState,Cascader:m},__codesandbox:"undefined",mdxType:"Playground"},(function(){var e=Object(l.useState)(void 0),n=Object(t.a)(e,2),a=n[0],s=n[1];return Object(c.b)("div",null,Object(c.b)(m,{onChange:s,value:a,options:[{label:"\u6c5f\u82cf\u7701",value:"32",isLeaf:!1,children:[{label:"\u5357\u4eac\u5e02",value:"32-01",isLeaf:!1,children:[{label:"\u5e02\u8f96\u533a",value:"32-01-01",isLeaf:!0}]}]},{label:"\u5e7f\u897f\u7701",value:"54",isLeaf:!1,children:[{label:"\u67f3\u5dde\u5e02",value:"54-50",isLeaf:!1,children:[{label:"\u57ce\u4e2d\u533a",value:"54-50-00",isLeaf:!0}]}]}],mdxType:"Cascader"}))})),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6b64\u5916\u8fd8\u652f\u6301 ",Object(c.b)("inlineCode",{parentName:"p"},"requestMethod")," \u65b9\u6cd5 \u9700\u8981\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"() => CancellablePromise<CascaderOptionType[]>"),"\u8fd9\u6837\u7684\u65b9\u6cd5\n\u4f1a\u81ea\u52a8\u8bf7\u6c42 ",Object(c.b)("inlineCode",{parentName:"p"},"requestMethod")," \u52a0\u8f7d ",Object(c.b)("inlineCode",{parentName:"p"},"options")),Object(c.b)("pre",{parentName:"blockquote"},Object(c.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"interface CascaderOptionType {\n    value?: string;\n    label?: React.ReactNode;\n    disabled?: boolean;\n    isLeaf?: boolean;\n    loading?: boolean;\n    children?: Array<CascaderOptionType>;\n"))),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"[key: string]: any;\n")),Object(c.b)("p",null,"}"),Object(c.b)("pre",null,Object(c.b)("code",Object.assign({parentName:"pre"},{}),"\n```ts\ntype CancellablePromise<T> = Promise<T> & {\n  cancel(): void;\n};\n")),Object(c.b)("h2",{id:"\u5c5e\u6027properties"},"\u5c5e\u6027(Properties)"),Object(c.b)(o.Props,{of:m,mdxType:"Props"}))}O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src\\Form\\Components\\Cascader.mdx"}}),O.isMDXComponent=!0},"./src/Form/Components/styles/cascader.scss":function(e,n,a){}}]);
//# sourceMappingURL=src-form-components-cascader.cfab57e2c69a4cc07491.js.map