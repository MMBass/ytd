(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],{46:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(13),r=n.n(i),o=n(4),s=(n(46),n(11)),l=n(3),d=n(14),j=n.n(d),u=j.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:25e3,headers:{"X-Custom-Header":"foobar"}}),b=(n(66),n(67),n(5)),h={setMode:function(e){return{type:"setMode",payload:e}},setGlobalFormat:function(e){return{type:"setGlobalFormat",payload:e}}},O=(n(68),n(1));var f=function(e){return Object(O.jsx)("div",{className:"flex-container",children:e.children})},p=(n(70),n(33)),m=n(12);var v=function(){return Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsx)(s.b,{to:"yt-downloader-site/history",children:Object(O.jsx)(m.c,{})}),Object(O.jsx)(s.b,{to:"yt-downloader-site/settings",children:Object(O.jsx)(p.a,{})})]})};n(71);n(72);var x=function(e){return Object(O.jsxs)("div",{className:"select-wrapper",children:[e.title&&Object(O.jsx)("p",{children:e.title}),Object(O.jsx)("select",{className:"select",onChange:function(t){e.handleChange(t.target.value)},children:e.options.map((function(e){return Object(O.jsx)("option",{value:e,children:e})}))})]})};n(73);var y=function(){return Object(o.c)((function(e){return e.loaderLine}))?Object(O.jsx)("div",{className:"loaderLine",children:Object(O.jsx)("div",{className:"innerLoaderLine"})}):null};var g=function(){var e=Object(o.b)(),t=Object(b.a)(h,e).setMode;return Object(O.jsxs)("div",{id:"HEADER",children:[Object(O.jsx)(y,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)(s.b,{className:"h1-link",to:"yt-downloader-site/",children:Object(O.jsx)("h1",{children:"YT DOWNLOADER"})}),Object(O.jsx)(v,{}),Object(O.jsx)(x,{title:"Mode",options:["video","playlist","music"],handleChange:function(e){t(e)}})]})]})};n(74);var w=function(e){return Object(O.jsx)("div",{className:"layout",children:e.children})},N=n(6),F=n(34),C=n.n(F);var k=function(){var e=Object(o.c)((function(e){return e.settings.mode})),t=Object(c.useState)(),n=Object(N.a)(t,2),a=n[0],i=n[1];return Object(c.useEffect)((function(){switch(e){case"video":i("#FFC107");break;case"playlist":i("#4b84ff");break;case"music":i("#ff4949");break;default:i("#FFC107")}}),[e]),Object(O.jsx)("div",{className:"wrapper",children:Object(O.jsx)(C.a,{children:Object(O.jsx)("meta",{name:"theme-color",content:a})})})},S=(n(77),n(78),n(21)),L=n.n(S),E=n(35),I=j.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},M=Array.apply(null,Array(12)),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return e.concat(t.payload);case"resetList":return[];default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},G=n(10),K={mode:"video",globalFormat:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMode":return Object(G.a)(Object(G.a)({},e),{},{mode:t.payload});case"setGlobalFormat":return Object(G.a)(Object(G.a)({},e),{},{globalFormat:t.payload});default:return e}},q=Object(b.b)({player:P,video:A,vidList:T,loaderLine:_,selected:Y,openModal:R,formats:D,settings:H}),B=Object(b.c)(q,{}),V={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},W={openLoader:function(e){return{type:"openLoader",payload:e}}},J=0,U=Object(b.a)(V,B.dispatch),Q=U.resetList,X=U.setList,Z=Object(b.a)(W,B.dispatch).openLoader,z=B.getState().settings.mode;function $(){return($=Object(E.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Z(!0),u.get("ytsr",{params:{term:t,type:z}}).then((function(e){X(e.data),Z(!1)})).catch((function(e){console.log(e),Z(!1)})).then((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ee=function e(t,n){var c=window.localStorage.getItem("API_KEY");Z(!0),0===J&&Q(!0),I.get("search",{params:{q:t,key:c,maxResults:"500",part:"snippet",type:z,pageToken:n}}).then((function(n){var c=[];n.data.items.forEach((function(e,t){c[t]={id:e.id.videoId,thumbnail:e.snippet.thumbnails.default.url,channelName:e.snippet.channelTitle,title:e.snippet.title.length>65?e.snippet.title.substr(0,64)+"...":e.snippet.title,longTitle:e.snippet.title,publishTime:e.publishTime}})),X(c),J<5?(J++,e(t,n.data.nextPageToken)):J=0,Z(!1)})).catch((function(e){400===e.response.status&&window.localStorage.removeItem("API_KEY"),function(e){$.apply(this,arguments)}(t)})).then((function(){}))},te=n(15);n(80);var ne=function(e){return Object(O.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(81);var ce=function(e){return Object(O.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var ae=function(){var e=Object(c.useState)(""),t=Object(N.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(N.a)(i,2),o=r[0],s=r[1],l=function(e){var t=e.target.value;switch(e.target.name){case"key-input":s(t);break;case"video-search":a(d(t));break;default:return}},d=function(e){if(e.indexOf("youtu.be/")>=0){var t=e.indexOf(".be/");return e.slice(t+4,t+4+11)}if(e.indexOf("youtube.com")>=0&&e.indexOf("v=")>=0){var n=e.indexOf("v=");return e.slice(n+2,n+2+11)}return e};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){window.localStorage.setItem("API_KEY",o)},children:[Object(O.jsx)(ce,{onChange:l,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(O.jsx)(ne,{type:"submit",children:Object(O.jsx)(m.d,{})})]}):Object(O.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),ee(n)},children:[Object(O.jsx)(ce,{onChange:l,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(O.jsx)(ne,{type:"submit",children:Object(O.jsx)(te.b,{})})]})},ie=(n(82),n(83),n(84),{setFormats:function(e){return{type:"setFormats",payload:e}}}),re={openModal:function(e){return{type:"openModal",payload:e}}},oe=function(e){var t=Object(b.a)(re,B.dispatch).openModal,n=Object(b.a)(ie,B.dispatch).setFormats,c=Object(b.a)(W,B.dispatch).openLoader;c(!0);var a=window.localStorage.getItem("API_KEY");u.get("info",{params:{v_id:e.id,key:a}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},se=function(e){var t=Object(b.a)(W,B.dispatch).openLoader,n=B.getState();window.localStorage.getItem("API_KEY");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id,"&format=").concat(e),t(!1)},le={setSelected:function(e){return{type:"setSelected",payload:e}}};var de=function(e){var t=Object(o.b)(),n=Object(b.a)(le,t).setSelected,c=Object(o.c)((function(e){return e.settings}));return Object(O.jsxs)("div",{className:"vid-details",children:[Object(O.jsx)("p",{className:"vid-title",children:e.title}),Object(O.jsx)("i",{className:"vid-source",children:e.channelName}),Object(O.jsxs)("small",{className:"vid-footer",onClick:function(t){return function(t){t.stopPropagation(),n(e),c.globalFormat?se(c.globalFormat):oe(e)}(t)},children:[" ",Object(O.jsx)(m.a,{})]})]})};n(85);var je=function(){return Object(O.jsxs)("div",{className:"example-paragraph",children:[Object(O.jsx)("div",{className:"empty top-empty"}),Object(O.jsx)("div",{className:"empty middle-empty"}),Object(O.jsx)("div",{className:"empty bottom-empty"})]})},ue=(n(86),{openPlayer:function(e){return{type:"openPlayer",payload:e}}});var be=function(){var e=Object(o.b)(),t=Object(b.a)(ue,e).openPlayer,n=Object(o.c)((function(e){return e.player}));return Object(O.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(O.jsx)(ne,{children:n?Object(O.jsx)(m.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(O.jsx)(te.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var he=function(e){var t=Object(o.c)((function(e){return e.player})),n=Object(o.c)((function(e){return e.video})),a=Object(c.useState)(""),i=Object(N.a)(a,2),r=i[0],s=i[1],l=Object(c.useRef)(null);Object(c.useEffect)((function(){window.onscroll=function(){d()}}));var d=function(){window.pageYOffset>l.current.offsetTop?s("fixed"):s("")},j=n.id?Object(O.jsx)(de,Object(G.a)({},n)):Object(O.jsx)(je,{}),u=function(){return Object(O.jsxs)("div",{className:"player-outer-wrapper",children:[Object(O.jsx)("div",{className:"frame-wrapper",children:n.id?Object(O.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(n.id),title:e.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(O.jsx)("iframe",{title:"uniqe",frameBorder:"0"})}),j]})};return Object(O.jsxs)("div",{ref:l,className:t?"player "+r:"player fold-player "+r,children:[Object(O.jsx)(be,{}),Object(O.jsx)(u,{})]})},Oe=(n(87),n(88),{setVideo:function(e){return{type:"setVideo",payload:e}}});var fe=function(e){var t=Object(o.b)(),n=Object(b.a)(Oe,t).setVideo,c=Object(b.a)(ue,t).openPlayer;return Object(O.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[e.id?Object(O.jsx)("img",{className:"vid-thumb",src:e.thumbnail,alt:e.id}):Object(O.jsx)("img",{className:"vid-thumb",src:"",alt:null}),e.id?Object(O.jsx)(de,Object(G.a)({},e)):Object(O.jsx)(je,{})]})};var pe=function(){var e=Object(o.c)((function(e){return e.vidList}));return Object(O.jsx)("div",{className:"vid-list",children:Object(O.jsx)(f,{children:e.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(c.createElement)(fe,Object(G.a)(Object(G.a)({},e),{},{key:new Date||e.id}))})}))})})};var me=function(){return Object(O.jsxs)("div",{className:"display-layout",children:[Object(O.jsx)(he,{}),Object(O.jsx)(pe,{})]})};n(89);var ve=function(e){var t=Object(o.b)(),n=Object(b.a)(le,t).setSelected,c=Object(o.c)((function(e){return e.settings})),a=Object(o.c)((function(e){return e.video}));return Object(O.jsx)("div",{className:"down-btn",onClick:function(){return n(a),void(c.globalFormat?se(c.globalFormat):oe(a))},children:Object(O.jsx)(ne,{children:Object(O.jsx)(m.a,{})})})};n(90);var xe=function(e){var t=Object(c.useState)(""),n=Object(N.a)(t,2),a=n[0],i=n[1],r=Object(o.c)((function(e){return e.formats})),s=Object(o.b)(),l=Object(b.a)(re,s).openModal;return Object(O.jsx)("div",{className:"modalcontainer",children:Object(O.jsxs)("div",{className:"modal",children:[Object(O.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(O.jsx)("span",{children:"+"})}),Object(O.jsx)("h2",{children:"Select Format"}),Object(O.jsx)("div",{className:"content",children:r.map((function(e){return Object(O.jsxs)("div",{className:"format-item-wrapper",children:[Object(O.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void i(t);var t}}),Object(O.jsx)("label",{htmlFor:e.quality,children:e.quality}),Object(O.jsx)("label",{className:"format-label",htmlFor:e.format,children:e.format})]})}))}),Object(O.jsxs)("div",{className:"buttons",children:[Object(O.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(O.jsx)("span",{onClick:function(){a&&(se(a),l(!1))},children:"Download"})]})]})})};var ye=function(){var e=Object(o.c)((function(e){return e.video})),t=Object(o.c)((function(e){return e.openModal}));return Object(O.jsxs)("div",{className:"home-page",children:[Object(O.jsx)(ae,{}),Object(O.jsx)(me,{}),e.id&&Object(O.jsx)(ve,{}),t&&Object(O.jsx)(xe,{})]})},ge=(n(91),n(16));n(92);var we=function(e){return Object(O.jsx)("div",{className:"inner-frame",children:e.children})};n(93);var Ne=function(e){return Object(O.jsx)("div",{className:"inner-nav",children:e.items.map((function(t){var n="inner-nav-link";return e.active===t.id&&(n+=" active"),Object(O.jsx)("p",{className:n,onClick:function(){return e.navClick(t.id)},children:t.text})}))})};var Fe=function(){Object(o.b)();var e=Object(c.useState)(1),t=Object(N.a)(e,2),n=t[0];t[1],Object(c.useEffect)((function(){}),[]);var a=function(){if(1===n)return Object(O.jsx)("p",{})};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.b,{className:"back-arrow",to:"../yt-downloader-site/",children:Object(O.jsx)(ge.a,{})}),Object(O.jsx)(Ne,{items:[{text:"Search",id:1},{text:"Watch",id:2},{text:"Download",id:3}],navClick:function(e){},active:n}),Object(O.jsx)(we,{id:"HISTORY_PAGE",children:Object(O.jsx)(a,{})})]})};n(94);var Ce=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.b,{to:"../yt-downloader-site/",className:"back-arrow",children:Object(O.jsx)(ge.a,{})}),Object(O.jsx)(we,{id:"SETTINGS_PAGE",children:Object(O.jsxs)("div",{className:"settings-content",children:[Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Global Quality"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"audio",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"audio",children:"Audio - mp3"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"720",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"720",children:"720p (If exist)"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"lower",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"lower",children:"Lower (video)"}),Object(O.jsx)("input",{type:"radio",name:"globalFormat",value:"higher",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"higher",children:"Higher (video)"})]}),Object(O.jsxs)("div",{className:"settings-item",children:[Object(O.jsx)("p",{children:"Mode"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"music",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"music",children:"music"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"playlist",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"playlist",children:"playlist"}),Object(O.jsx)("input",{type:"radio",name:"mode",value:"video",onChange:function(){}}),Object(O.jsx)("label",{htmlFor:"video",children:"video"})]})]})})]})};n(95);var ke=function(){return Object(O.jsxs)("div",{id:"NO_MATCH_WRAPPER",children:[Object(O.jsx)("p",{children:"404"}),Object(O.jsx)("p",{children:"Nothing Here"})]})};var Se=function(){var e=Object(o.c)((function(e){return e.settings.mode}));return Object(c.useEffect)((function(){u.get("/").then((function(e){e.status})).catch((function(e){console.log(e)}))}),[]),Object(O.jsxs)(s.a,{children:[Object(O.jsx)(k,{}),Object(O.jsxs)("div",{className:e,children:[Object(O.jsx)(g,{}),Object(O.jsx)(w,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/",element:Object(O.jsx)(ye,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/history",element:Object(O.jsx)(Fe,{})}),Object(O.jsx)(l.a,{exact:!0,path:"yt-downloader-site/settings",element:Object(O.jsx)(Ce,{})}),Object(O.jsx)(l.a,{path:"yt-downloader-site/*",element:Object(O.jsx)(ke,{})})]})})]})]})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(o.a,{store:B,children:Object(O.jsx)(Se,{})})}),document.getElementById("root")),Le()}},[[96,1,2]]]);
//# sourceMappingURL=main.d01ce231.chunk.js.map