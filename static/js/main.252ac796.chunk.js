(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],{45:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),s=n(4),o=(n(45),n(12)),l=n(3),d=n(14),j=n.n(d),u=j.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:25e3,headers:{"X-Custom-Header":"foobar"}}),b=(n(65),n(66),n(5)),h={setMode:function(e){return{type:"setMode",payload:e}},setGlobalFormat:function(e){return{type:"setGlobalFormat",payload:e}}},O=(n(67),n(1));var f=function(e){return Object(O.jsx)("div",{className:"flex-container",children:e.children})},p=(n(69),n(32)),m=n(11);var v=function(){return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)(o.b,{to:"yt-downloader-site/",children:Object(O.jsx)(m.d,{})}),Object(O.jsx)(o.b,{to:"yt-downloader-site/history",children:Object(O.jsx)(m.c,{})}),Object(O.jsx)(o.b,{to:"yt-downloader-site/settings",children:Object(O.jsx)(p.a,{})})]})};n(70);var x=function(){return Object(O.jsx)("div",{className:"lang-switch",children:Object(O.jsx)("span",{children:" HE "})})};n(71);var y=function(e){return Object(O.jsxs)("div",{className:"select-wrapper",children:[e.title&&Object(O.jsx)("p",{children:e.title}),Object(O.jsx)("select",{className:"select",onChange:function(t){e.handleChange(t.target.value)},children:e.options.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))})]})};n(72);var g=function(){return Object(s.c)((function(e){return e.loaderLine}))?Object(O.jsx)("div",{className:"loaderLine",children:Object(O.jsx)("div",{className:"innerLoaderLine"})}):null};var w=function(){var e=Object(s.b)(),t=Object(b.a)(h,e).setMode;return Object(O.jsxs)("div",{id:"HEADER",children:[Object(O.jsx)(g,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)("h1",{children:"YT DOWNLOADER"}),Object(O.jsx)(v,{}),Object(O.jsx)(y,{title:"Mode",options:["video","playlist","music"],handleChange:function(e){t(e)}}),Object(O.jsx)(x,{})]})]})};n(73);var N=function(e){return Object(O.jsx)("div",{className:"layout",children:e.children})},F=n(7),C=n(33),k=n.n(C);var S=function(){var e=Object(s.c)((function(e){return e.settings.mode})),t=Object(c.useState)(),n=Object(F.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){switch(e){case"video":i("#FFC107");break;case"playlist":i("#4b84ff");break;case"music":i("#FF0000");break;default:i("#FFC107")}}),[e]),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)(k.a,{children:Object(O.jsx)("meta",{name:"theme-color",content:a})})})},L=(n(76),n(77),n(20)),E=n.n(L),I=n(34),P=j.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},A=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return e.concat(t.payload);case"resetList":return[];default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},H=n(10),K={mode:"video",globalFormat:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMode":return Object(H.a)(Object(H.a)({},e),{},{mode:t.payload});case"setGlobalFormat":return Object(H.a)(Object(H.a)({},e),{},{globalFormat:t.payload});default:return e}},B=Object(b.b)({player:M,video:T,vidList:_,loaderLine:R,selected:Y,openModal:D,formats:G,settings:q}),V=Object(b.c)(B,{}),W={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},J={openLoader:function(e){return{type:"openLoader",payload:e}}},U=0,z=Object(b.a)(W,V.dispatch),Q=z.resetList,X=z.setList,Z=Object(b.a)(J,V.dispatch).openLoader,$=V.getState().settings.mode;function ee(){return(ee=Object(I.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(!0),u.get("ytsr",{params:{term:t,type:$}}).then((function(e){console.log(e.data),X(e.data),Z(!1)})).catch((function(e){console.log(e),Z(!1)})).then((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var te=function e(t,n){var c=window.localStorage.getItem("API_KEY");Z(!0),0===U&&Q(!0),P.get("search",{params:{q:t,key:c,maxResults:"500",part:"snippet",type:$,pageToken:n}}).then((function(n){var c=[];n.data.items.forEach((function(e,t){c[t]={id:e.id.videoId,thumbnail:e.snippet.thumbnails.default.url,channelName:e.snippet.channelTitle,title:e.snippet.title.length>65?e.snippet.title.substr(0,64)+"...":e.snippet.title,longTitle:e.snippet.title,publishTime:e.publishTime}})),X(c),U<5?(U++,e(t,n.data.nextPageToken)):U=0,Z(!1)})).catch((function(e){console.log(e),function(e){ee.apply(this,arguments)}(t)})).then((function(){}))},ne=n(15);n(79);var ce=function(e){return Object(O.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(80);var ae=function(e){return Object(O.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var ie=function(){var e=Object(c.useState)(""),t=Object(F.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(F.a)(i,2),s=r[0],o=r[1],l=function(e){var t=e.target.value;switch(e.target.name){case"key-input":o(t);break;case"video-search":a(d(t));break;default:return}},d=function(e){if(e.indexOf("youtu.be/")>=0){var t=e.indexOf(".be/");return e.slice(t+4,t+4+11)}if(e.indexOf("youtube.com")>=0&&e.indexOf("v=")>=0){var n=e.indexOf("v=");return e.slice(n+2,n+2+11)}return e};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){window.localStorage.setItem("API_KEY",s)},children:[Object(O.jsx)(ae,{onChange:l,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(O.jsx)(ce,{type:"submit",children:Object(O.jsx)(m.e,{})})]}):Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),te(n)},children:[Object(O.jsx)(ae,{onChange:l,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(O.jsx)(ce,{type:"submit",children:Object(O.jsx)(ne.b,{})})]})},re=(n(81),n(82),n(83),{setFormats:function(e){return{type:"setFormats",payload:e}}}),se={openModal:function(e){return{type:"openModal",payload:e}}},oe=function(e){var t=Object(b.a)(se,V.dispatch).openModal,n=Object(b.a)(re,V.dispatch).setFormats,c=Object(b.a)(J,V.dispatch).openLoader;c(!0);var a=window.localStorage.getItem("API_KEY");u.get("getInfo",{params:{v_id:e.id,key:a}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},le=function(e){var t=Object(b.a)(J,V.dispatch).openLoader,n=V.getState();window.localStorage.getItem("API_KEY");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id,"&format=").concat(e),t(!1)},de={setSelected:function(e){return{type:"setSelected",payload:e}}};var je=function(e){var t=Object(s.b)(),n=Object(b.a)(de,t).setSelected,c=Object(s.c)((function(e){return e.settings}));return Object(O.jsxs)("div",{className:"vid-details",children:[Object(O.jsx)("p",{className:"vid-title",children:e.title}),Object(O.jsx)("i",{className:"vid-source",children:e.channelTitle}),Object(O.jsxs)("small",{className:"vid-footer",onClick:function(t){return function(t){t.stopPropagation(),n(e),c.globalFormat?le(c.globalFormat):oe(e)}(t)},children:[" ",Object(O.jsx)(m.a,{})]})]})};n(84);var ue=function(){return Object(O.jsxs)("div",{className:"example-paragraph",children:[Object(O.jsx)("div",{className:"empty top-empty"}),Object(O.jsx)("div",{className:"empty middle-empty"}),Object(O.jsx)("div",{className:"empty bottom-empty"})]})},be=(n(85),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var he=function(){var e=Object(s.b)(),t=Object(b.a)(be,e).openPlayer,n=Object(s.c)((function(e){return e.player}));return Object(O.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(O.jsx)(ce,{children:n?Object(O.jsx)(m.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(O.jsx)(ne.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var Oe=function(e){var t=Object(s.c)((function(e){return e.player})),n=Object(s.c)((function(e){return e.video})),c=n.id?Object(O.jsx)(je,Object(H.a)({},n)):Object(O.jsx)(ue,{}),a=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"frame-wrapper",children:n.id?Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id),title:e.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(O.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),c]})};return Object(O.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(O.jsx)(he,{}),t&&Object(O.jsx)(a,{})]})},fe=(n(86),n(87),{setVideo:function(e){return{type:"setVideo",payload:e}}});var pe=function(e){var t=Object(s.b)(),n=Object(b.a)(fe,t).setVideo,c=Object(b.a)(be,t).openPlayer;return Object(O.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[e.id?Object(O.jsx)("img",{className:"vid-thumb",src:e.thumbnail,alt:e.id,lazyload:!0}):Object(O.jsx)("img",{className:"vid-thumb",src:"",alt:null}),e.id?Object(O.jsx)(je,Object(H.a)({},e)):Object(O.jsx)(ue,{})]})};var me=function(){var e=Object(s.c)((function(e){return e.vidList}));return e.length<1&&(e=[{},{},{},{},{},{},{},{},{},{},{},{}]),Object(O.jsx)("div",{className:"vid-list",children:Object(O.jsx)(f,{children:e.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(c.createElement)(pe,Object(H.a)(Object(H.a)({},e),{},{key:new Date||e.id}))})}))})})};var ve=function(){return Object(O.jsxs)("div",{className:"display-layout",children:[Object(O.jsx)(Oe,{"data-src":""}),Object(O.jsx)(me,{})]})};n(88);var xe=function(e){var t=Object(s.b)(),n=Object(b.a)(de,t).setSelected,c=Object(s.c)((function(e){return e.settings})),a=Object(s.c)((function(e){return e.video}));return Object(O.jsx)("div",{className:"down-btn",onClick:function(){return n(a),void(c.globalFormat?le(c.globalFormat):oe(a))},children:Object(O.jsx)(ce,{children:Object(O.jsx)(m.a,{})})})};n(89);var ye=function(e){var t=Object(c.useState)(""),n=Object(F.a)(t,2),a=n[0],i=n[1],r=Object(s.c)((function(e){return e.formats})),o=Object(s.b)(),l=Object(b.a)(se,o).openModal;return Object(O.jsx)("div",{className:"modalcontainer",children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(O.jsx)("span",{children:"+"})}),Object(O.jsx)("h2",{children:"Select Format"}),Object(O.jsx)("div",{className:"content",children:r.map((function(e){return Object(O.jsxs)("div",{className:"format-item-wrapper",children:[Object(O.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void i(t);var t}}),Object(O.jsx)("label",{htmlFor:e.quality,children:e.quality}),Object(O.jsx)("label",{className:"format-label",htmlFor:e.format,children:e.format})]})}))}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(O.jsx)("span",{onClick:function(){a&&(le(a),l(!1))},children:"Download"})]})]})})};var ge=function(){var e=Object(s.c)((function(e){return e.video})),t=Object(s.c)((function(e){return e.openModal}));return Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)(ie,{}),Object(O.jsx)(ve,{}),e.id&&Object(O.jsx)(xe,{}),t&&Object(O.jsx)(ye,{})]})};n(90),n(91);var we=function(e){return Object(O.jsx)("div",{className:"inner-frame",children:e.children})};n(92);var Ne=function(e){return Object(O.jsx)("div",{className:"inner-nav",children:e.items.map((function(t){var n="inner-nav-link";return e.active===t.id&&(n+=" active"),Object(O.jsx)("p",{className:n,onClick:function(){return e.navClick(t.id)},children:t.text})}))})};var Fe=function(){Object(s.b)();var e=Object(c.useState)(1),t=Object(F.a)(e,2),n=t[0];t[1],Object(c.useEffect)((function(){}),[]);var a=function(){if(1===n)return Object(O.jsx)("p",{})};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Ne,{items:[{text:"Search",id:1},{text:"Watch",id:2},{text:"Download",id:3}],navClick:function(e){},active:n}),Object(O.jsx)(we,{id:"HISTORY_PAGE",children:Object(O.jsx)(a,{})})]})};n(93);var Ce=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(we,{id:"SETTINGS_PAGE",children:Object(O.jsxs)("div",{className:"settings-content",children:[Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Global Quality"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"audio",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"audio",children:"audio"})]}),Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Mode"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"music",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"music",children:"music"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"playlist",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"playlist",children:"playlist"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"video",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"video",children:"video"})]})]})})})};n(94);var ke=function(){return Object(O.jsxs)("div",{id:"NO_MATCH_WRAPPER",children:[Object(O.jsx)("p",{children:"404"}),Object(O.jsx)("p",{children:"Nothing Here"})]})};var Se=function(){var e=Object(s.c)((function(e){return e.settings.mode}));return Object(c.useEffect)((function(){u.get("/").then((function(e){e.status})).catch((function(e){console.log(e)}))}),[]),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(S,{}),Object(O.jsxs)("div",{className:e,children:[Object(O.jsx)(w,{}),Object(O.jsx)(N,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/",element:Object(O.jsx)(ge,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/history",element:Object(O.jsx)(Fe,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/settings",element:Object(O.jsx)(Ce,{})}),Object(O.jsx)(l.a,{path:"yt-downloader-site/*",element:Object(O.jsx)(ke,{})})]})})]})]})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(s.a,{store:V,children:Object(O.jsx)(Se,{})})}),document.getElementById("root")),Le()}},[[95,1,2]]]);
//# sourceMappingURL=main.252ac796.chunk.js.map