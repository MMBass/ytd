(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],Array(42).concat([function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),o=n(4),s=(n(42),n(12)),l=n(3),d=n(14),j=n.n(d),u=j.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:25e3,headers:{"X-Custom-Header":"foobar"}}),b=(n(62),n(63),n(5)),h={setMode:function(e){return{type:"setMode",payload:e}},setGlobalFormat:function(e){return{type:"setGlobalFormat",payload:e}}},O=(n(64),n(1));var f=function(e){return Object(O.jsx)("div",{className:"flex-container",children:e.children})},p=(n(66),n(30)),m=n(11);var v=function(){return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)(s.b,{to:"yt-downloader-site/",children:Object(O.jsx)(m.d,{})}),Object(O.jsx)(s.b,{to:"yt-downloader-site/history",children:Object(O.jsx)(m.c,{})}),Object(O.jsx)(s.b,{to:"yt-downloader-site/settings",children:Object(O.jsx)(p.a,{})})]})};n(67);var x=function(){return Object(O.jsx)("div",{className:"lang-switch",children:Object(O.jsx)("span",{children:" HE "})})};n(68);var y=function(e){return Object(O.jsxs)("div",{className:"select-wrapper",children:[e.title&&Object(O.jsx)("p",{children:e.title}),Object(O.jsx)("select",{className:"select",onChange:function(t){e.handleChange(t.target.value)},children:e.options.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))})]})};n(69);var g=function(){return Object(o.c)((function(e){return e.loaderLine}))?Object(O.jsx)("div",{className:"loaderLine",children:Object(O.jsx)("div",{className:"innerLoaderLine"})}):null};var w=function(){var e=Object(o.b)(),t=Object(b.a)(h,e).setMode;return Object(O.jsxs)("div",{id:"HEADER",children:[Object(O.jsx)(g,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)("h1",{children:"YT DOWNLOADER"}),Object(O.jsx)(v,{}),Object(O.jsx)(y,{title:"Mode",options:["video","playlist","music"],handleChange:function(e){t(e)}}),Object(O.jsx)(x,{})]})]})};n(70);var N=function(e){return Object(O.jsx)("div",{className:"layout",children:e.children})},C=(n(71),n(9)),F=(n(72),n(20)),k=n.n(F),S=n(31),L=j.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),E=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},P=[],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return e.concat(t.payload);case"resetList":return[];default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},Y=n(10),D={mode:"video",globalFormat:""},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMode":return Object(Y.a)(Object(Y.a)({},e),{},{mode:t.payload});case"setGlobalFormat":return Object(Y.a)(Object(Y.a)({},e),{},{globalFormat:t.payload});default:return e}},H=Object(b.b)({player:E,video:I,vidList:M,loaderLine:A,selected:T,openModal:_,formats:R,settings:G}),K=Object(b.c)(H,{}),q={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},B={openLoader:function(e){return{type:"openLoader",payload:e}}},V=0,W=Object(b.a)(q,K.dispatch),J=W.resetList,U=W.setList,z=Object(b.a)(B,K.dispatch).openLoader,Q=K.getState().settings.mode;function X(){return(X=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z(!0),u.get("ytsr",{params:{term:t,type:Q}}).then((function(e){console.log(e.data),U(e.data),z(!1)})).catch((function(e){console.log(e),z(!1)})).then((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=function e(t,n){var c=window.localStorage.getItem("API_KEY");z(!0),0===V&&J(!0),L.get("search",{params:{q:t,key:c,maxResults:"500",part:"snippet",type:Q,pageToken:n}}).then((function(n){var c=[];n.data.items.forEach((function(e,t){c[t]={id:e.id.videoId,thumbnail:e.snippet.thumbnails.default.url,channelName:e.snippet.channelTitle,title:e.snippet.title.length>65?e.snippet.title.substr(0,64)+"...":e.snippet.title,longTitle:e.snippet.title,publishTime:e.publishTime}})),U(c),V<5?(V++,e(t,n.data.nextPageToken)):V=0,z(!1)})).catch((function(e){console.log(e),function(e){X.apply(this,arguments)}(t)})).then((function(){}))},$=n(15);n(74);var ee=function(e){return Object(O.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(75);var te=function(e){return Object(O.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var ne=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(C.a)(i,2),o=r[0],s=r[1],l=function(e){var t=e.target.value;switch(e.target.name){case"key-input":s(t);break;case"video-search":a(d(t));break;default:return}},d=function(e){if(e.indexOf("youtu.be/")>=0){var t=e.indexOf(".be/");return e.slice(t+4,t+4+11)}if(e.indexOf("youtube.com")>=0&&e.indexOf("v=")>=0){var n=e.indexOf("v=");return e.slice(n+2,n+2+11)}return e};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){window.localStorage.setItem("API_KEY",o)},children:[Object(O.jsx)(te,{onChange:l,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(O.jsx)(ee,{type:"submit",children:Object(O.jsx)(m.e,{})})]}):Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),Z(n)},children:[Object(O.jsx)(te,{onChange:l,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(O.jsx)(ee,{type:"submit",children:Object(O.jsx)($.b,{})})]})},ce=(n(76),n(77),n(78),{setFormats:function(e){return{type:"setFormats",payload:e}}}),ae={openModal:function(e){return{type:"openModal",payload:e}}},ie=function(e){var t=Object(b.a)(ae,K.dispatch).openModal,n=Object(b.a)(ce,K.dispatch).setFormats,c=Object(b.a)(B,K.dispatch).openLoader;c(!0);var a=window.localStorage.getItem("API_KEY");u.get("getInfo",{params:{v_id:e.id,key:a}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},re=function(e){var t=Object(b.a)(B,K.dispatch).openLoader,n=K.getState();window.localStorage.getItem("API_KEY");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id,"&format=").concat(e),t(!1)},oe={setSelected:function(e){return{type:"setSelected",payload:e}}};var se=function(e){var t=Object(o.b)(),n=Object(b.a)(oe,t).setSelected,c=Object(o.c)((function(e){return e.settings}));return Object(O.jsxs)("div",{className:"vid-details",children:[Object(O.jsx)("p",{className:"vid-title",children:e.title}),Object(O.jsx)("i",{className:"vid-source",children:e.channelTitle}),Object(O.jsxs)("small",{className:"vid-footer",onClick:function(t){return function(t){t.stopPropagation(),n(e),c.globalFormat?re(c.globalFormat):ie(e)}(t)},children:[" ",Object(O.jsx)(m.a,{})]})]})};n(79);var le=function(){return Object(O.jsxs)("div",{className:"example-paragraph",children:[Object(O.jsx)("div",{className:"empty top-empty"}),Object(O.jsx)("div",{className:"empty middle-empty"}),Object(O.jsx)("div",{className:"empty bottom-empty"})]})},de=(n(80),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var je=function(){var e=Object(o.b)(),t=Object(b.a)(de,e).openPlayer,n=Object(o.c)((function(e){return e.player}));return Object(O.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(O.jsx)(ee,{children:n?Object(O.jsx)(m.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(O.jsx)($.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var ue=function(e){var t=Object(o.c)((function(e){return e.player})),n=Object(o.c)((function(e){return e.video})),c=n.id?Object(O.jsx)(se,Object(Y.a)({},n)):Object(O.jsx)(le,{}),a=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"frame-wrapper",children:n.id?Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id),title:e.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(O.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),c]})};return Object(O.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(O.jsx)(je,{}),t&&Object(O.jsx)(a,{})]})},be=(n(81),n(82),{setVideo:function(e){return{type:"setVideo",payload:e}}});var he=function(e){var t=Object(o.b)(),n=Object(b.a)(be,t).setVideo,c=Object(b.a)(de,t).openPlayer;return Object(O.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[e.id?Object(O.jsx)("img",{className:"vid-thumb",src:e.thumbnail,alt:e.id,lazyload:!0}):Object(O.jsx)("img",{className:"vid-thumb",src:"",alt:null}),e.id?Object(O.jsx)(se,Object(Y.a)({},e)):Object(O.jsx)(le,{})]})};var Oe=function(){var e=Object(o.c)((function(e){return e.vidList}));return e.length<1&&(e=[{},{},{},{},{},{},{},{},{},{},{},{}]),Object(O.jsx)("div",{className:"vid-list",children:Object(O.jsx)(f,{children:e.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(c.createElement)(he,Object(Y.a)(Object(Y.a)({},e),{},{key:new Date||e.id}))})}))})})};var fe=function(){return Object(O.jsxs)("div",{className:"display-layout",children:[Object(O.jsx)(ue,{"data-src":""}),Object(O.jsx)(Oe,{})]})};n(83);var pe=function(e){var t=Object(o.b)(),n=Object(b.a)(oe,t).setSelected,c=Object(o.c)((function(e){return e.settings})),a=Object(o.c)((function(e){return e.video}));return Object(O.jsx)("div",{className:"down-btn",onClick:function(){return n(a),void(c.globalFormat?re(c.globalFormat):ie(a))},children:Object(O.jsx)(ee,{children:Object(O.jsx)(m.a,{})})})};n(84);var me=function(e){var t=Object(c.useState)(""),n=Object(C.a)(t,2),a=n[0],i=n[1],r=Object(o.c)((function(e){return e.formats})),s=Object(o.b)(),l=Object(b.a)(ae,s).openModal;return Object(O.jsx)("div",{className:"modalcontainer",children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(O.jsx)("span",{children:"+"})}),Object(O.jsx)("h2",{children:"Select Format"}),Object(O.jsx)("div",{className:"content",children:r.map((function(e){return Object(O.jsxs)("div",{className:"format-item-wrapper",children:[Object(O.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void i(t);var t}}),Object(O.jsx)("label",{htmlFor:e.quality,children:e.quality}),Object(O.jsx)("label",{className:"format-label",htmlFor:e.format,children:e.format})]})}))}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(O.jsx)("span",{onClick:function(){a&&(re(a),l(!1))},children:"Download"})]})]})})};var ve=function(){var e=Object(o.c)((function(e){return e.video})),t=Object(o.c)((function(e){return e.openModal}));return Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)(ne,{}),Object(O.jsx)(fe,{}),e.id&&Object(O.jsx)(pe,{}),t&&Object(O.jsx)(me,{})]})};n(85),n(86);var xe=function(e){return Object(O.jsx)("div",{className:"inner-frame",children:e.children})};n(87);var ye=function(e){return Object(O.jsx)("div",{className:"inner-nav",children:e.items.map((function(t){var n="inner-nav-link";return e.active===t.id&&(n+=" active"),Object(O.jsx)("p",{className:n,onClick:function(){return e.navClick(t.id)},children:t.text})}))})};var ge=function(){Object(o.b)();var e=Object(c.useState)(1),t=Object(C.a)(e,2),n=t[0];t[1],Object(c.useEffect)((function(){}),[]);var a=function(){if(1===n)return Object(O.jsx)("p",{})};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(ye,{items:[{text:"Search",id:1},{text:"Watch",id:2},{text:"Download",id:3}],navClick:function(e){},active:n}),Object(O.jsx)(xe,{id:"HISTORY_PAGE",children:Object(O.jsx)(a,{})})]})};n(88);var we=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(xe,{id:"SETTINGS_PAGE",children:Object(O.jsxs)("div",{className:"settings-content",children:[Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Global Quality"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"audio",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"audio",children:"audio"})]}),Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Mode"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"music",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"music",children:"music"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"playlist",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"playlist",children:"playlist"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"video",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"video",children:"video"})]})]})})})};n(89);var Ne=function(){return Object(O.jsxs)("div",{id:"NO_MATCH_WRAPPER",children:[Object(O.jsx)("p",{children:"404"}),Object(O.jsx)("p",{children:"Nothing Here"})]})};var Ce=function(){var e=Object(o.c)((function(e){return e.settings.mode}));return Object(c.useEffect)((function(){u.get("/").then((function(e){e.status})).catch((function(e){console.log(e)}))}),[]),Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{className:e,children:[Object(O.jsx)(w,{}),Object(O.jsx)(N,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/",element:Object(O.jsx)(ve,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/history",element:Object(O.jsx)(ge,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/settings",element:Object(O.jsx)(we,{})}),Object(O.jsx)(l.a,{path:"yt-downloader-site/*",element:Object(O.jsx)(Ne,{})})]})})]})})},Fe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{store:K,children:Object(O.jsx)(Ce,{})})}),document.getElementById("root")),Fe()}]),[[90,1,2]]]);
//# sourceMappingURL=main.9f2adbf6.chunk.js.map