(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/2_display/Avatar/Avatar.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"button.o_avatar{background-color:transparent;border:0;cursor:pointer;padding:0}a.o_avatar{text-decoration:none}.o_avatar{display:flex;justify-content:flex-start;align-items:center;-webkit-transition:opacity .125s ease-in-out;-moz-transition:opacity .125s ease-in-out;-ms-transition:opacity .125s ease-in-out;-o-transition:opacity .125s ease-in-out;transition:opacity .125s ease-in-out}.o_avatar:disabled,.o_avatar.disabled{opacity:.5;cursor:not-allowed}.o_avatar:not(:disabled):hover .o_avatar_name{color:#05f}.o_avatar .o_avatar_img{border:4px solid #f0f5ff;border-radius:9999px;background-color:#f0f5ff}.o_avatar .o_avatar_img.o_avatar_img_placeholder{display:flex;justify-content:center;align-items:center;text-align:center}.o_avatar .o_avatar_info .o_avatar_name{color:#203663;text-align:left}.o_avatar .o_avatar_info .o_avatar_desc{color:#8192b5;text-align:left}.o_avatar.o_avatar_sm .o_avatar_img{height:32px;width:32px}.o_avatar.o_avatar_sm .o_avatar_img.o_avatar_img_placeholder{font-size:16px}.o_avatar.o_avatar_sm .o_avatar_info{margin-left:12px}.o_avatar.o_avatar_sm .o_avatar_info .o_avatar_name{font-size:16px}.o_avatar.o_avatar_sm .o_avatar_info .o_avatar_desc{margin-top:-8px;font-size:12px}.o_avatar.o_avatar_md .o_avatar_img{height:48px;width:48px}.o_avatar.o_avatar_md .o_avatar_img.o_avatar_img_placeholder{font-size:20px}.o_avatar.o_avatar_md .o_avatar_info{margin-left:16px}.o_avatar.o_avatar_md .o_avatar_info .o_avatar_name{font-size:18px}.o_avatar.o_avatar_md .o_avatar_info .o_avatar_desc{margin-top:-8px;font-size:14px}.o_avatar.o_avatar_lg .o_avatar_img{height:64px;width:64px}.o_avatar.o_avatar_lg .o_avatar_img.o_avatar_img_placeholder{font-size:36px}.o_avatar.o_avatar_lg .o_avatar_info{margin-left:16px}.o_avatar.o_avatar_lg .o_avatar_info .o_avatar_name{font-size:24px}.o_avatar.o_avatar_lg .o_avatar_info .o_avatar_desc{margin-top:-8px;font-size:18px}.o_avatar.o_avatar_xl .o_avatar_img{height:128px;width:128px}.o_avatar.o_avatar_xl .o_avatar_img.o_avatar_img_placeholder{font-size:60px}.o_avatar.o_avatar_xl .o_avatar_info{margin-left:24px}.o_avatar.o_avatar_xl .o_avatar_info .o_avatar_name{font-size:60px}.o_avatar.o_avatar_xl .o_avatar_info .o_avatar_desc{margin-top:-24px;font-size:36px}","",{version:3,sources:["webpack://./src/components/2_display/Avatar/Avatar.scss","webpack://./src/styles/_mixins.scss"],names:[],mappings:"AAEA,gBACI,4BAAA,CACA,QAAA,CACA,cAAA,CACA,SAAA,CAGJ,WACI,oBAAA,CAGJ,UACI,YAAA,CACA,0BAAA,CACA,kBAAA,CCoEF,4CAAA,CACA,yCAAA,CACA,wCAAA,CACA,uCAAA,CACA,oCAAA,CDrEE,sCCqFF,UAAA,CACA,kBAAA,CDjFM,8CACI,UCpBA,CDwBR,wBACI,wBAAA,CACA,oBAAA,CACA,wBCFC,CDGD,iDACI,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CAKJ,wCACI,aCjBH,CDkBG,eAAA,CAEJ,wCACI,aCnBH,CDoBG,eAAA,CAMJ,oCACI,WCVA,CDWA,UCXA,CDYA,6DACI,cCGF,CAAA,qCDCF,gBCpBA,CDqBA,oDACI,cCHF,CDKF,oDACI,eAAA,CACA,cCTF,CDcN,oCACI,WC5BA,CD6BA,UC7BA,CD8BA,6DACI,cCdF,CDiBN,qCACI,gBCtCA,CDuCA,oDACI,cCrBF,CDuBF,oDACI,eAAA,CACA,cC3BF,CDgCN,oCACI,WC9CA,CD+CA,UC/CA,CDgDA,6DACI,cC9BF,CDiCN,qCACI,gBCzDA,CD0DA,oDACI,cCtCF,CDwCF,oDACI,eAAA,CACA,cC5CF,CDiDN,oCACI,YC/DA,CDgEA,WChEA,CDiEA,6DACI,cC/CF,CDkDN,qCACI,gBC3EA,CD4EA,oDACI,cCrDF,CDuDF,oDACI,gBAAA,CACA,cC3DF",sourcesContent:['@import "src/styles/_mixins.scss";\r\n\r\nbutton.o_avatar {\r\n    background-color: transparent;\r\n    border: 0;\r\n    cursor: pointer;\r\n    padding: 0;\r\n}\r\n\r\na.o_avatar {\r\n    text-decoration: none;\r\n}\r\n\r\n.o_avatar {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    @include transition(opacity);\r\n\r\n    &:disabled, &.disabled {\r\n        @include disabled();\r\n    }\r\n\r\n    &:not(:disabled):hover {\r\n        .o_avatar_name {\r\n            color: $primary_1;\r\n        }\r\n    }\r\n\r\n    .o_avatar_img {\r\n        border: 4px solid $gray_4;\r\n        border-radius: 9999px;\r\n        background-color: $gray_4;\r\n        &.o_avatar_img_placeholder {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n    }\r\n    \r\n    .o_avatar_info {\r\n        .o_avatar_name {\r\n            color: $gray_0;\r\n            text-align: left;\r\n        }\r\n        .o_avatar_desc {\r\n            color: $gray_2;\r\n            text-align: left;\r\n        }\r\n    }\r\n    \r\n\r\n    &.o_avatar_sm {\r\n        .o_avatar_img {\r\n            height: $spacing_5;\r\n            width: $spacing_5;\r\n            &.o_avatar_img_placeholder {\r\n                font-size: $text_size_2;\r\n            }\r\n        }\r\n        .o_avatar_info {\r\n            margin-left: $spacing_2;\r\n            .o_avatar_name {\r\n                font-size: $text_size_2;\r\n            }\r\n            .o_avatar_desc {\r\n                margin-top: -$spacing_1;\r\n                font-size: $text_size_0;\r\n            }\r\n        }\r\n    }\r\n    &.o_avatar_md {\r\n        .o_avatar_img {\r\n            height: $spacing_6;\r\n            width: $spacing_6;\r\n            &.o_avatar_img_placeholder {\r\n                font-size: $text_size_4;\r\n            }\r\n        }\r\n        .o_avatar_info {\r\n            margin-left: $spacing_3;\r\n            .o_avatar_name {\r\n                font-size: $text_size_3;\r\n            }\r\n            .o_avatar_desc {\r\n                margin-top: -$spacing_1;\r\n                font-size: $text_size_1;\r\n            }\r\n        }\r\n    }\r\n    &.o_avatar_lg {\r\n        .o_avatar_img {\r\n            height: $spacing_7;\r\n            width: $spacing_7;\r\n            &.o_avatar_img_placeholder {\r\n                font-size: $text_size_7;\r\n            }\r\n        }\r\n        .o_avatar_info {\r\n            margin-left: $spacing_3;\r\n            .o_avatar_name {\r\n                font-size: $text_size_5;\r\n            }\r\n            .o_avatar_desc {\r\n                margin-top: -$spacing_1;\r\n                font-size: $text_size_3;\r\n            }\r\n        }\r\n    }\r\n    &.o_avatar_xl {\r\n        .o_avatar_img {\r\n            height: $spacing_9;\r\n            width: $spacing_9;\r\n            &.o_avatar_img_placeholder {\r\n                font-size: $text_size_9;\r\n            }\r\n        }\r\n        .o_avatar_info {\r\n            margin-left: $spacing_4;\r\n            .o_avatar_name {\r\n                font-size: $text_size_9;\r\n            }\r\n            .o_avatar_desc {\r\n                margin-top: -$spacing_4;\r\n                font-size: $text_size_7;\r\n            }\r\n        }\r\n    }\r\n}',"// ------------------ COLOR THEME ------------------ //\r\n\r\n// Accents\r\n\r\n$primary_0: #003EBB;\r\n$primary_1: #0055FF;\r\n$primary_2: #8CB3FF;\r\n\r\n$primary_text: #a1e9ff;\r\n\r\n$secondary_0: #10D38E;\r\n$secondary_1: #43FEBB;\r\n$secondary_2: #BAFFE6;\r\n\r\n$secondary_text: #a1ffc0;\r\n\r\n$warning_0: #E4BB26;\r\n$warning_1: #FDD64B;\r\n$warning_2: #FFEEB0;\r\n\r\n$danger_0: #DB3A24;\r\n$danger_1: #FF5E48;\r\n$danger_2: #FFC1B9;\r\n\r\n// Grays\r\n\r\n$gray_0: #203663;\r\n$gray_1: #485E89;\r\n$gray_2: #8192B5;\r\n$gray_3: #B0BDD7;\r\n$gray_4: #F0F5FF;\r\n\r\n$white: #fff;\r\n\r\n// --------------------- GLOBAL -------------------- //\r\n\r\n$container-width: 1100px;\r\n\r\n// -------------------- SPACINGS ------------------- //\r\n\r\n$spacing_0: 4px; // ll\r\n$spacing_1: 8px; // llll\r\n$spacing_2: 12px; // llllll\r\n$spacing_3: 16px; // llllllll\r\n$spacing_4: 24px; // llllllllllll\r\n$spacing_5: 32px; // llllllllllllllll\r\n$spacing_6: 48px; // llllllllllllllllllllllll\r\n$spacing_7: 64px; // llllllllllllllllllllllllllllllll\r\n$spacing_8: 96px; // llllllllllllllllllllllllllllllllllllllllllllllll\r\n$spacing_9: 128px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\r\n$spacing_10: 192px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\r\n$spacing_11: 256px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\r\n$spacing_12: 384px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll...\r\n$spacing_13: 512px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll...\r\n$spacing_14: 640px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll...\r\n$spacing_15: 768px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll...\r\n\r\n// ------------------- TEXT SCALE ------------------ //\r\n\r\n$text_size_0: 12px; // llllllllllll\r\n$text_size_1: 14px; // llllllllllllll\r\n$text_size_2: 16px; // llllllllllllllll\r\n$text_size_3: 18px; // llllllllllllllllll\r\n$text_size_4: 20px; // llllllllllllllllllll\r\n$text_size_5: 24px; // llllllllllllllllllllllll\r\n$text_size_6: 30px; // llllllllllllllllllllllllllllll\r\n$text_size_7: 36px; // llllllllllllllllllllllllllllllllllll\r\n$text_size_8: 48px; // llllllllllllllllllllllllllllllllllllllllllllllll\r\n$text_size_9: 60px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\r\n$text_size_10: 72px; // llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll\r\n\r\n// ------------------ SCREEN SIZES ----------------- //\r\n\r\n$screen_lg: 992px;\r\n\r\n// --------------------- TIMING -------------------- //\r\n\r\n$fast: 0.125s;\r\n$medium: 0.2s;\r\n$slow: 0.275s;\r\n\r\n// --------------------- MIXINS -------------------- //\r\n\r\n@mixin transition($property: none) {\r\n  -webkit-transition: $property $fast ease-in-out;\r\n  -moz-transition: $property $fast ease-in-out;\r\n  -ms-transition: $property $fast ease-in-out;\r\n  -o-transition: $property $fast ease-in-out;\r\n  transition: $property $fast ease-in-out;\r\n}\r\n\r\n@mixin border-radius() {\r\n  -webkit-border-radius: $spacing_4;\r\n  -moz-border-radius: $spacing_4;\r\n  border-radius: $spacing_4;\r\n}\r\n\r\n@mixin max-border-radius() {\r\n    -webkit-border-radius: 50%;\r\n    -moz-border-radius: 50%;\r\n    border-radius: 50%;\r\n}\r\n\r\n@mixin disabled() {\r\n  opacity: 0.5;\r\n  cursor: not-allowed;\r\n}\r\n\r\n/* This function determines, from a background color, which */\r\n/*   color between light or dark should the text be.        */\r\n@function set-color($color) {\r\n    @if (lightness($color) > 65) {\r\n      @return $gray_0;\r\n    }\r\n    @else {\r\n      @return white;\r\n    }\r\n}\r\n\r\n@mixin shadow() {\r\n  box-shadow: 0px 0px 100px rgba(32, 54, 99, 0.3);\r\n}"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},"./src/components/2_display/Avatar/Avatar.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"ThumbnailOnly",(function(){return ThumbnailOnly})),__webpack_require__.d(__webpack_exports__,"WithThumbnail",(function(){return WithThumbnail})),__webpack_require__.d(__webpack_exports__,"AsLink",(function(){return AsLink}));__webpack_require__("./node_modules/react/index.js");var _Avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/2_display/Avatar/Avatar.tsx"),_interfaces_Size__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/interfaces/Size.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Display/Avatar",component:_Avatar__WEBPACK_IMPORTED_MODULE_1__.a};__webpack_exports__.default=meta;var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Avatar__WEBPACK_IMPORTED_MODULE_1__.a,_objectSpread({},args))};Template.displayName="Template";var Default=Template.bind({});Default.args={name:"Alicia Anderson",disabled:!1,onClick:function onClick(){console.log("You clicked the avatar !")},size:_interfaces_Size__WEBPACK_IMPORTED_MODULE_2__.a.MD};var ThumbnailOnly=Template.bind({});ThumbnailOnly.args={thumbnail:"img/avatar_1.jpg",disabled:!1,onClick:function onClick(){console.log("You clicked the avatar !")},size:_interfaces_Size__WEBPACK_IMPORTED_MODULE_2__.a.MD};var WithThumbnail=Template.bind({});WithThumbnail.args={thumbnail:"img/avatar_1.jpg",name:"Alicia Anderson",desc:"Head of Marketing",disabled:!1,onClick:function onClick(){console.log("You clicked the avatar !")},size:_interfaces_Size__WEBPACK_IMPORTED_MODULE_2__.a.MD};var AsLink=Template.bind({});AsLink.args={thumbnail:"img/avatar_1.jpg",name:"Alicia Anderson",desc:"Head of Marketing",disabled:!1,href:"https://www.example.com",target:"_blank",size:_interfaces_Size__WEBPACK_IMPORTED_MODULE_2__.a.MD},Default.parameters=_objectSpread({storySource:{source:"(args) => <Avatar {...args}/>"}},Default.parameters),ThumbnailOnly.parameters=_objectSpread({storySource:{source:"(args) => <Avatar {...args}/>"}},ThumbnailOnly.parameters),WithThumbnail.parameters=_objectSpread({storySource:{source:"(args) => <Avatar {...args}/>"}},WithThumbnail.parameters),AsLink.parameters=_objectSpread({storySource:{source:"(args) => <Avatar {...args}/>"}},AsLink.parameters)},"./src/components/2_display/Avatar/Avatar.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Avatar_Avatar_Avatar}));__webpack_require__("./node_modules/react/index.js");var index_es=__webpack_require__("./node_modules/@fortawesome/react-fontawesome/index.es.js"),free_solid_svg_icons_index_es=__webpack_require__("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),Size=__webpack_require__("./src/interfaces/Size.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),Avatar=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/2_display/Avatar/Avatar.scss"),options={insert:"head",singleton:!1},jsx_runtime=(injectStylesIntoStyleTag_default()(Avatar.a,options),Avatar.a.locals,__webpack_require__("./node_modules/react/jsx-runtime.js"));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Size.a.MD;function Avatar_Avatar_Avatar(_ref){var thumbnail=_ref.thumbnail,name=_ref.name,desc=_ref.desc,disabled=_ref.disabled,href=_ref.href,target=_ref.target,onClick=_ref.onClick,size=_ref.size,className=_ref.className,style=_ref.style,getClassname=function getClassname(){return"o_avatar "+"o_avatar_".concat(size," ")+"".concat(disabled?"disabled ":"")+"".concat(className||"")},renderImg=function renderImg(){return thumbnail?Object(jsx_runtime.jsx)("img",{className:"o_avatar_img",src:thumbnail}):Object(jsx_runtime.jsx)("div",{className:"o_avatar_img o_avatar_img_placeholder",children:Object(jsx_runtime.jsx)(index_es.a,{icon:free_solid_svg_icons_index_es.i})})},renderContent=function renderContent(){return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[renderImg(),name?Object(jsx_runtime.jsxs)("div",{className:"o_avatar_info",children:[name?Object(jsx_runtime.jsx)("div",{className:"o_avatar_name",children:name}):null,desc?Object(jsx_runtime.jsx)("div",{className:"o_avatar_desc",children:desc}):null]}):null]})};return href&&-1!==target.indexOf("_blank")?Object(jsx_runtime.jsx)("a",{href:href,target:"_blank",rel:"noreferrer",className:getClassname(),style:_objectSpread({pointerEvents:disabled?"none":"all"},style),children:renderContent()}):href&&-1===target.indexOf("_blank")?Object(jsx_runtime.jsx)("div",{className:getClassname(),style:style,children:renderContent()}):Object(jsx_runtime.jsx)("button",{className:getClassname(),disabled:disabled,onClick:onClick,style:style,children:renderContent()})}try{Avatar_Avatar_Avatar.displayName="Avatar",Avatar_Avatar_Avatar.__docgenInfo={description:"Displays a user's avatar.",displayName:"Avatar",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/2_display/Avatar/Avatar.tsx#Avatar"]={docgenInfo:Avatar_Avatar_Avatar.__docgenInfo,name:"Avatar",path:"src/components/2_display/Avatar/Avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/interfaces/Size.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Size}));var Size={XS:"xs",SM:"sm",MD:"md",LG:"lg",XL:"xl"}}}]);