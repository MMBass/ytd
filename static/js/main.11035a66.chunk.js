(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(13),a=n.n(r),s=n(5),o=(n(38),n(12)),j=n(3),l=(n(39),n(40),n(41),n(1));var d=function(e){return Object(l.jsx)("div",{className:"flex-container",children:e.children})};n(43);var u=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(o.b,{to:"/",children:"Home"}),Object(l.jsx)(o.b,{to:"history",children:"History"}),Object(l.jsx)(o.b,{to:"settings",children:"Settings"})]})};n(44);var b=function(){return Object(l.jsx)("div",{className:"lang-switch",children:Object(l.jsx)("span",{children:" HE "})})};n(45);var O=function(){return Object(s.c)((function(e){return e.loaderLine}))?Object(l.jsx)("div",{className:"loaderLine",children:Object(l.jsx)("div",{className:"innerLoaderLine"})}):null};var h=function(){return Object(l.jsxs)("div",{id:"HEADER",children:[Object(l.jsx)(O,{}),Object(l.jsxs)(d,{children:[Object(l.jsx)("h1",{children:"YT DOWNLOADER"}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{})]})]})};n(46);var x=function(e){return Object(l.jsx)("div",{className:"layout",children:e.children})},f=(n(47),n(9)),p=(n(48),n(8)),v=n(27),m=n.n(v).a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},N=[{},{},{},{},{},{},{},{},{},{},{},{}],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return t.payload;default:return e}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},E=Object(p.b)({player:y,video:g,vidList:w,loaderLine:L}),I=Object(p.c)(E,{}),P={setList:function(e){return{type:"setList",payload:e}}},S={openLoader:function(e){return{type:"openLoader",payload:e}}},C=function(e){var t=Object(p.a)(S,I.dispatch).openLoader;t(!0);var n=Object(p.a)(P,I.dispatch).setList,c=window.localStorage.getItem("API_KEY");m.get("search",{params:{key:c,maxResults:"100",part:"snippet",type:"video"}}).then((function(e){n(e.data.items),t(!1)})).catch((function(e){console.log(e),t(!1)})).then((function(){}))},k=n(14),A=n(10);n(67);var T=function(e){return Object(l.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(68);var _=function(e){return Object(l.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var F=function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(""),a=Object(f.a)(r,2),s=a[0],o=a[1],j=function(e){switch(e.target.name){case"key-input":o(e.target.value);break;case"video-search":i(e.target.value);break;default:return}};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(l.jsxs)("form",{onSubmit:function(e){window.localStorage.setItem("API_KEY",s)},children:[Object(l.jsx)(_,{onChange:j,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(l.jsx)(T,{type:"submit",children:Object(l.jsx)(A.c,{})})]}):Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),C(n)},children:[Object(l.jsx)(_,{onChange:j,name:"video-search",type:"text",placeholder:"Search video or playlist ..."}),Object(l.jsx)(T,{type:"submit",children:Object(l.jsx)(k.b,{})})]})},R=(n(69),n(11));n(70),n(71);var H=function(e){return Object(l.jsxs)("div",{className:"vid-details",children:[Object(l.jsx)("p",{className:"vid-title",children:e.snippet.title}),Object(l.jsx)("i",{className:"vid-source",children:e.snippet.channelTitle}),Object(l.jsxs)("small",{className:"vid-footer",children:[" ",e.publishTime," ",Object(l.jsx)(A.a,{})]})]})};n(72);var Y=function(){return Object(l.jsxs)("div",{className:"example-paragraph",children:[Object(l.jsx)("div",{className:"empty top-empty"}),Object(l.jsx)("div",{className:"empty middle-empty"}),Object(l.jsx)("div",{className:"empty bottom-empty"})]})},D=(n(73),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var B=function(){var e=Object(s.b)(),t=Object(p.a)(D,e).openPlayer,n=Object(s.c)((function(e){return e.player}));return Object(l.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(l.jsx)(T,{children:n?Object(l.jsx)(A.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(l.jsx)(k.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var K=function(e){var t=Object(s.c)((function(e){return e.player})),n=Object(s.c)((function(e){return e.video})),c=n.id?Object(l.jsx)(H,Object(R.a)({},n)):Object(l.jsx)(Y,{}),i=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"frame-wrapper",children:n.id?Object(l.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id.videoId),title:n.snippet.title||"video",frameBorder:"0",allowFullScreen:"true"}):Object(l.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),c]})};return Object(l.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(l.jsx)(B,{}),t&&Object(l.jsx)(i,{})]})},M=(n(74),n(75),{setVideo:function(e){return{type:"setVideo",payload:e}}});var V=function(e){var t=Object(s.b)(),n=Object(p.a)(M,t).setVideo,c=Object(p.a)(D,t).openPlayer;return Object(l.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[Object(l.jsx)("img",{className:"vid-thumb",src:e.id?e.snippet.thumbnails.default.url:null,alt:e.id?"video thumbnail":null}),e.id?Object(l.jsx)(H,Object(R.a)({},e)):Object(l.jsx)(Y,{})]})};var G=function(){var e=Object(s.c)((function(e){return e.vidList}));return Object(l.jsx)("div",{className:"vid-list",children:Object(l.jsx)(d,{children:e.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(V,Object(R.a)({},e))})}))})})};var J=function(){return Object(l.jsxs)("div",{className:"display-layout",children:[Object(l.jsx)(K,{"data-src":""}),Object(l.jsx)(G,{})]})};n(76);var W=function(){return Object(l.jsx)("div",{className:"down-btn",children:Object(l.jsx)(T,{children:Object(l.jsx)(A.a,{})})})};var q=function(){return Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)(F,{}),Object(l.jsx)(J,{}),Object(l.jsx)(W,{})]})};n(77),n(78);var U=function(e){return Object(l.jsx)("div",{className:"inner-frame",children:e.children})};var Z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(U,{id:"HISTORY_PAGE"})})};n(79);var z=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(U,{id:"SETTINGS_PAGE"})})};var Q=function(){return Object(l.jsx)("div",{id:"NO_MATCH_WRAPPER",children:Object(l.jsx)("h1",{children:"Nothing Here"})})};var X=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(h,{}),Object(l.jsx)(x,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",element:Object(l.jsx)(q,{})}),Object(l.jsx)(j.a,{exact:!0,path:"history",element:Object(l.jsx)(Z,{})}),Object(l.jsx)(j.a,{exact:!0,path:"settings",element:Object(l.jsx)(z,{})}),Object(l.jsx)(j.a,{path:"*",element:Object(l.jsx)(Q,{})})]})})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(s.a,{store:I,children:Object(l.jsx)(X,{})})}),document.getElementById("root")),$()}},[[80,1,2]]]);
//# sourceMappingURL=main.11035a66.chunk.js.map