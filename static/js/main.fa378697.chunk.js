(this.webpackJsonpytd=this.webpackJsonpytd||[]).push([[0],{125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},143:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},150:function(e,t,n){},151:function(e,t,n){},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(34),s=n.n(a),o=n(3),r=(n(87),n(20)),l=n(4),d=n(71),u=n.n(d),j=n(38),b=n.n(j),h=b.a.create({baseURL:"https://bass-ytd.herokuapp.com/",timeout:25e3,headers:{"x-access-token":window.sessionStorage.getItem("ACCESS_TOKEN")},httpsAgent:new u.a.Agent({keepAlive:!0})}),m=n(46),p=(n(125),n(126),n(127),n(1));var f=function(e){return Object(p.jsx)("div",{className:"flex-container",children:e.children})},O=(n(129),n(75)),v=n(24);var x=function(){return Object(p.jsxs)("nav",{className:"navbar",children:[Object(p.jsx)(r.b,{to:"ytd/history",children:Object(p.jsx)(v.c,{})}),Object(p.jsx)(r.b,{to:"ytd/settings",children:Object(p.jsx)(O.a,{})})]})};n(130);var g=function(e){return Object(p.jsxs)("div",{className:"select-wrapper",children:[e.title&&Object(p.jsx)("p",{children:e.title}),Object(p.jsxs)("select",{className:"select",onChange:function(t){e.handleChange(t.target.value)},children:[Object(p.jsx)("option",{value:e.first,children:e.first}),e.options.map((function(e){return Object(p.jsx)("option",{value:e,children:e})}))]})]})};n(131);var y=function(){return Object(o.c)((function(e){return e.loaderLine}))?Object(p.jsx)("div",{className:"loaderLine",children:Object(p.jsx)("div",{className:"innerLoaderLine"})}):null};var w=function(){var e=Object(o.c)((function(e){return e.settings.mode}));return Object(p.jsxs)("div",{id:"HEADER",children:[Object(p.jsx)(y,{}),Object(p.jsxs)(f,{children:[Object(p.jsx)(r.b,{className:"h1-link",to:"ytd/",children:Object(p.jsx)("h1",{children:"YT DOWNLOADER"})}),Object(p.jsx)(x,{}),Object(p.jsx)(g,{title:"Mode",first:e,options:["music","playlist","video"].filter((function(t){return t!==e})),handleChange:function(e){window.localStorage.setItem("mode",e),window.location.reload()}})]})]})};n(132);var N=function(e){return Object(p.jsx)("div",{className:"layout",children:e.children})},S=n(12),k=n(76),F=n.n(k);var C=function(){var e=Object(o.c)((function(e){return e.settings.mode})),t=Object(c.useState)(),n=Object(S.a)(t,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){switch(e){case"video":a("#FFC107");break;case"playlist":a("#4b84ff");break;case"music":a("#ff4949");break;default:a("#FFC107")}}),[e]),Object(p.jsx)("div",{className:"wrapper",children:Object(p.jsx)(F.a,{children:Object(p.jsx)("meta",{name:"theme-color",content:i})})})},I=(n(135),n(136),n(32)),E=n.n(I),L=n(41),A=n(13),P=n(5),T=b.a.create({baseURL:"https://www.googleapis.com/youtube/v3/"}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openPlayer":return t.payload;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setVideo":return t.payload;default:return e}},M=Array.apply(null,Array(12)),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setList":return e.concat(t.payload);case"resetList":return[];default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openLoader":return t.payload;default:return e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setSelected":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"openModal":return t.payload;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setFormats":return t.payload;default:return e}},H={mode:window.localStorage.getItem("mode")||"music",globalFormat:window.localStorage.getItem("globalFormat")},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setMode":return Object(A.a)(Object(A.a)({},e),{},{mode:t.payload});case"setGlobalFormat":return Object(A.a)(Object(A.a)({},e),{},{globalFormat:t.payload});default:return e}},V=Object(P.b)({player:_,video:K,vidList:Y,loaderLine:R,selected:D,openModal:q,formats:G,settings:B}),W=Object(P.c)(V,{}),z={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},J={openLoader:function(e){return{type:"openLoader",payload:e}}},U={openPlayer:function(e){return{type:"openPlayer",payload:e}}},Q=0,Z=Object(P.a)(z,W.dispatch),X=Z.resetList,$=Z.setList,ee=Object(P.a)(J,W.dispatch).openLoader,te=Object(P.a)(U,W.dispatch).openPlayer,ne=W.getState().settings.mode;function ce(){return(ce=Object(L.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ee(!0),h.get("ytsr",{headers:{"x-access-token":window.sessionStorage.getItem("ACCESS_TOKEN")},params:{term:t,type:"music"===ne?"video":ne}}).then((function(e){X(!0),$(e.data),ee(!1)})).catch((function(e){console.log(e),ee(!1)})).then((function(){}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=function e(t,n){var c=window.localStorage.getItem("API_KEY");ee(!0),te(!1),T.get("search",{params:Object(A.a)({q:t,key:c,maxResults:"500",part:"snippet",type:"video",pageToken:n},"music"===ne?{videoCategoryId:10}:null)}).then((function(n){var c=[];n.data.items.forEach((function(e,t){c[t]={id:e.id.videoId,thumbnail:e.snippet.thumbnails.default.url,channelName:e.snippet.channelTitle,title:e.snippet.title.length>65?e.snippet.title.substr(0,64)+"...":e.snippet.title,longTitle:e.snippet.title,publishTime:e.publishTime}})),0===Q&&X(!0),$(c),Q<2?(Q++,e(t,n.data.nextPageToken)):Q=0,ee(!1)})).catch((function(e){400==e.response.status&&window.localStorage.removeItem("API_KEY"),function(e){ce.apply(this,arguments)}(t)})).then((function(){}))},ae={setList:function(e){return{type:"setList",payload:e}},resetList:function(e){return{type:"resetList",payload:e}}},se=Object(P.a)(ae,W.dispatch),oe=se.resetList,re=se.setList,le=Object(P.a)(J,W.dispatch).openLoader,de=Object(P.a)(U,W.dispatch).openPlayer,ue=W.getState().settings.mode,je=function(e){le(!0),de(!1),h.get("ytsr",{headers:{"x-access-token":window.sessionStorage.getItem("ACCESS_TOKEN")},params:{term:e,type:ue}}).then((function(e){oe(!0),re(e.data),le(!1)})).catch((function(e){console.log(e),le(!1)})).then((function(){}))},be=n(42);n(138);var he=function(e){return Object(p.jsx)("button",{type:e.type,children:e.children||e.btnContent})};n(139);var me=function(e){return Object(p.jsx)("input",{name:e.name,placeholder:e.placeholder,onChange:e.onChange})};var pe=function(){var e=Object(c.useState)(""),t=Object(S.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),s=Object(S.a)(a,2),r=s[0],l=s[1],d=Object(o.c)((function(e){return e.settings.mode})),u=function(e){var t=e.target.value;switch(e.target.name){case"key-input":l(t);break;case"video-search":i(j(t));break;default:return}},j=function(e){if(e.indexOf("youtu.be/")>=0){var t=e.indexOf(".be/");return e.slice(t+4,t+4+11)}if(e.indexOf("youtube.com")>=0&&e.indexOf("v=")>=0){var n=e.indexOf("v=");return e.slice(n+2,n+2+11)}return e};return!window.localStorage.getItem("API_KEY")||window.localStorage.getItem("API_KEY").length<6?Object(p.jsxs)("form",{className:"search-form",onSubmit:function(){window.localStorage.setItem("API_KEY",r),window.location.reload()},children:[Object(p.jsx)(me,{onChange:u,name:"key-input",type:"text",placeholder:"Enter the api key first"}),Object(p.jsx)(he,{type:"submit",children:Object(p.jsx)(v.d,{})})]}):Object(p.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),n.length>1&&("playlist"===d?je(n):ie(n))},children:[Object(p.jsx)(me,{onChange:u,name:"video-search",type:"text",placeholder:"Search text / video id / link..."}),Object(p.jsx)(he,{type:"submit",children:Object(p.jsx)(be.b,{})})]})},fe=(n(140),n(141),n(142),{setFormats:function(e){return{type:"setFormats",payload:e}}}),Oe={openModal:function(e){return{type:"openModal",payload:e}}},ve=function(e){var t=Object(P.a)(Oe,W.dispatch).openModal,n=Object(P.a)(fe,W.dispatch).setFormats,c=Object(P.a)(J,W.dispatch).openLoader;c(!0),h.get("info",{headers:{"x-access-token":window.sessionStorage.getItem("ACCESS_TOKEN")},params:{v_id:e.id}}).then((function(e){n(e.data),t(!0),c(!1)})).catch((function(e){console.log(e),c(!1)})).then((function(){c(!1)}))},xe=function(e){var t=Object(P.a)(J,W.dispatch).openLoader,n=W.getState();if("playlist"!==n.settings.mode){var c=window.sessionStorage.getItem("ACCESS_TOKEN");t(!0),window.location.href="https://bass-ytd.herokuapp.com/download?v_id=".concat(n.selected.id,"&format=").concat(e,"&accessToken=").concat(c),setTimeout((function(){t(!1)}),3e3)}},ge=Object(P.a)(J,W.dispatch).openLoader;function ye(e,t){var n,c=window.sessionStorage.getItem("ACCESS_TOKEN"),i=Object(m.a)("https://bass-ytd.herokuapp.com/");function a(){n&&(n.close(),n=void 0),ge(!1),window.onbeforeunload=function(){},i.disconnect(),i=void 0}i.on("listContinue",(function(){n&&(n.close(),n=void 0),t.shift(),console.log(t[0]),n=window.open("https://bass-ytd.herokuapp.com/download"+"?type=list&v_id=".concat(t[0].id,"&format=").concat(e,"&accessToken=").concat(c,"&index=").concat(1==t.length&&"last"),"_blank")})),i.on("listFinish",(function(e){a()})),i.on("listError",(function(e){console.log(e),a()}))}var we=function(){var e=Object(L.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.onbeforeunload=function(){return"are you sure?"},n=window.localStorage.getItem("API_KEY");try{T.get("playlistItems",{params:{key:n,playlistId:t,part:"snippet",maxResults:50}}).then((function(e){var t=[];e.data.items.forEach((function(e,n){t[n]={id:e.snippet.resourceId.videoId,title:e.snippet.title}})),ye("audio",t)})).catch((function(e){400==e.response.status&&window.localStorage.removeItem("API_KEY")})).then((function(){}))}catch(c){console.error("get playlist items error")}case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ne={setSelected:function(e){return{type:"setSelected",payload:e}}};var Se=function(e){var t=Object(o.b)(),n=Object(P.a)(Ne,t).setSelected,c=Object(o.c)((function(e){return e.settings}));return Object(p.jsxs)("div",{className:"vid-details",children:[Object(p.jsx)("p",{className:"vid-title",children:e.title}),Object(p.jsx)("i",{className:"vid-source",children:e.channelName}),Object(p.jsxs)("small",{className:"vid-footer",onClick:function(t){return function(t){t.stopPropagation(),n(e),"playlist"===c.mode?we(e.id):"music"===c.mode?xe("audio"):c.globalFormat?xe(c.globalFormat):ve(e)}(t)},children:[" ",Object(p.jsx)(v.a,{})]})]})};n(143);var ke=function(){return Object(p.jsxs)("div",{className:"example-paragraph",children:[Object(p.jsx)("div",{className:"empty top-empty"}),Object(p.jsx)("div",{className:"empty middle-empty"}),Object(p.jsx)("div",{className:"empty bottom-empty"})]})};n(144);var Fe=function(e){var t=Object(o.b)(),n=Object(P.a)(U,t).openPlayer,c=Object(o.c)((function(e){return e.player}));return Object(p.jsxs)("div",{id:"MINIMIZE_PLAYER",children:[Object(p.jsx)(he,{children:c?Object(p.jsx)(v.b,{className:"react-icons",onClick:function(){return n(!1)}}):Object(p.jsx)(be.a,{className:"react-icons",onClick:function(){return n(!0)}})}),c||Object(p.jsx)("p",{children:e.title})]})};var Ce=function(){var e=Object(o.c)((function(e){return e.player})),t=Object(o.c)((function(e){return e.video})),n=Object(o.c)((function(e){return e.settings.mode})),i=Object(c.useRef)(null),a=Object(c.useRef)(null);Object(c.useEffect)((function(){window.onscroll=function(){s()}}),[]);var s=function(){window.innerWidth<768&&(window.pageYOffset>i.current.offsetTop?(i.current.style.position="fixed",i.current.style.top="0"):i.current.style="")},r=function(){return"playlist"===n?Object(p.jsx)("iframe",{id:"list-iframe",src:"https://www.youtube.com/embed/videoseries?list=".concat(t.id),title:t.title||"playlist",frameborder:"0",allowFullScreen:!0,ref:a}):t.id?Object(p.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.id),title:t.title||"video",frameBorder:"0",allowFullScreen:!0}):Object(p.jsx)("iframe",{title:"uniqe",frameBorder:"0"})},l=t.id?Object(p.jsx)(Se,Object(A.a)({},t)):Object(p.jsx)(ke,{}),d=function(){return Object(p.jsxs)("div",{className:"player-outer-wrapper",children:[Object(p.jsx)("div",{className:"frame-wrapper",children:Object(p.jsx)(r,{})}),l]})};return Object(p.jsxs)("div",{ref:i,className:e?"player ":"player fold-player ",children:[Object(p.jsx)(Fe,{title:t.title}),Object(p.jsx)(d,{})]})},Ie=(n(145),n(146),{setVideo:function(e){return{type:"setVideo",payload:e}}});var Ee=function(e){var t=Object(o.b)(),n=Object(P.a)(Ie,t).setVideo,c=Object(P.a)(U,t).openPlayer;return Object(p.jsxs)("div",{className:"vid-item",onClick:function(){return n(e),void c(!0)},children:[e.id?Object(p.jsxs)(p.Fragment,{children:[e.length&&Object(p.jsx)("div",{className:"list-length",children:Object(p.jsx)("p",{children:e.length})}),Object(p.jsx)("img",{className:"vid-thumb",src:e.thumbnail,alt:e.id})]}):Object(p.jsx)("img",{className:"vid-thumb",src:"",alt:null}),e.id?Object(p.jsx)(Se,Object(A.a)({},e)):Object(p.jsx)(ke,{})]})};var Le=function(){var e=Object(o.c)((function(e){return e.vidList}));return Object(p.jsx)("div",{className:"vid-list",children:Object(p.jsx)(f,{children:e.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(c.createElement)(Ee,Object(A.a)(Object(A.a)({},e),{},{key:new Date||e.id}))})}))})})};var Ae=function(){return Object(p.jsxs)("div",{className:"display-layout",children:[Object(p.jsx)(Ce,{}),Object(p.jsx)(Le,{})]})};n(147);var Pe=function(){var e=Object(o.b)(),t=Object(P.a)(Ne,e).setSelected,n=Object(o.c)((function(e){return e.settings})),c=Object(o.c)((function(e){return e.video}));return Object(p.jsx)("div",{className:"down-btn",onClick:function(){return t(c),void("playlist"===n.mode?we(c.id):"music"===n.mode?xe("audio"):n.globalFormat?xe(n.globalFormat):ve(c))},children:Object(p.jsx)(he,{children:Object(p.jsx)(v.a,{})})})};n(148);var Te=function(e){var t=Object(c.useState)(""),n=Object(S.a)(t,2),i=n[0],a=n[1],s=Object(o.c)((function(e){return e.formats})),r=Object(o.b)(),l=Object(P.a)(Oe,r).openModal;return Object(p.jsx)("div",{className:"modalcontainer",children:Object(p.jsxs)("div",{className:"modal",children:[Object(p.jsx)("div",{className:"close",onClick:function(){return l(!1)},children:Object(p.jsx)("span",{children:"+"})}),Object(p.jsx)("h2",{children:"Select Format"}),Object(p.jsx)("h3",{children:Object(p.jsx)("i",{children:e.title})}),Object(p.jsx)("div",{className:"content",children:s.map((function(e){return Object(p.jsxs)("div",{className:"format-item-wrapper",children:[Object(p.jsx)("input",{type:"radio",id:e.quality,name:"format",value:e.code,onChange:function(){return t=e.code,void a(t);var t}}),Object(p.jsx)("label",{htmlFor:e.quality,children:e.quality}),Object(p.jsx)("label",{className:"format-label",htmlFor:e.format,children:e.format})]})}))}),Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("span",{onClick:function(){return l(!1)},children:"Cancel"}),Object(p.jsx)("span",{onClick:function(){i&&(xe(i),l(!1))},children:"Download"})]})]})})};var _e=function(){var e=Object(o.c)((function(e){return e.video})),t=Object(o.c)((function(e){return e.openModal}));return Object(p.jsxs)("div",{className:"home-page",children:[Object(p.jsx)(pe,{}),Object(p.jsx)(Ae,{}),e.id&&Object(p.jsx)(Pe,{}),t&&Object(p.jsx)(Te,{title:e.title})]})},Ke=(n(149),n(43));n(150);var Me=function(e){return Object(p.jsx)("div",{className:"inner-frame",children:e.children})};n(151);var Ye=function(e){return Object(p.jsx)("div",{className:"inner-nav",children:e.items.map((function(t){var n="inner-nav-link";return e.active===t.id&&(n+=" active"),Object(p.jsx)("p",{className:n,onClick:function(){return e.navClick(t.id)},children:t.text})}))})};var Re=function(){Object(o.b)();var e=Object(c.useState)(1),t=Object(S.a)(e,2),n=t[0];t[1],Object(c.useEffect)((function(){window.history.pushState({},void 0,"/ytd")}),[]);var i=function(){if(1===n)return Object(p.jsx)("p",{})};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.b,{className:"back-arrow",to:"../ytd/",children:Object(p.jsx)(Ke.a,{})}),Object(p.jsx)(Ye,{items:[{text:"Search",id:1},{text:"Watch",id:2},{text:"Download",id:3}],navClick:function(e){},active:n}),Object(p.jsx)(Me,{id:"HISTORY_PAGE",children:Object(p.jsx)(i,{})})]})};n(152);var De=function(){var e=Object(o.c)((function(e){return e.settings.mode})),t=Object(o.c)((function(e){return e.settings.globalFormat}));return Object(c.useEffect)((function(){window.history.pushState({},void 0,"/ytd")}),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.b,{to:"../ytd/",className:"back-arrow",children:Object(p.jsx)(Ke.a,{})}),Object(p.jsx)(Me,{id:"SETTINGS_PAGE",children:Object(p.jsxs)("div",{className:"settings-content",children:[Object(p.jsxs)("div",{className:"settings-item",onChange:function(e){var t=e.target.value;"choose"===t?window.localStorage.removeItem("globalFormat"):window.localStorage.setItem("globalFormat",t),window.location.reload()},children:[Object(p.jsx)("p",{children:"Global Quality"}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"audio",disabled:"music"===e,checked:"audio"===t}),Object(p.jsx)("label",{htmlFor:"audio",children:"Audio - mp3"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"136",disabled:"music"===e,checked:"136"===t}),Object(p.jsx)("label",{htmlFor:"720",children:"720p (If exist)"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"18",disabled:"music"===e,checked:"18"===t}),Object(p.jsx)("label",{htmlFor:"720",children:"360p (If exist)"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"lowestvideo",disabled:"music"===e,checked:"lowestvideo"===t}),Object(p.jsx)("label",{htmlFor:"lowest",children:"Lowest (video)"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"highestvideo",disabled:"music"===e,checked:"highestvideo"===t}),Object(p.jsx)("label",{htmlFor:"highest",children:"Highest (video)"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"globalFormat",value:"choose",disabled:"music"===e,checked:null==t}),Object(p.jsx)("label",{htmlFor:"choose",children:"Choose-every-time"})]})]}),Object(p.jsxs)("div",{className:"settings-item mode-settings",onChange:function(e){var t=e.target.value;window.localStorage.setItem("mode",t),window.location.reload()},children:[Object(p.jsx)("p",{children:"Mode"}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"mode",value:"music",checked:"music"===e}),Object(p.jsx)("label",{htmlFor:"music",children:"music"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"mode",value:"playlist",checked:"playlist"===e}),Object(p.jsx)("label",{htmlFor:"playlist",children:"playlist"})]}),Object(p.jsxs)("div",{className:"settings-line",children:[Object(p.jsx)("input",{type:"radio",name:"mode",value:"video",checked:"video"===e}),Object(p.jsx)("label",{htmlFor:"video",children:"video"})]})]})]})})]})};n(153);var qe=function(){return Object(p.jsxs)("div",{id:"NO_MATCH_WRAPPER",children:[Object(p.jsx)("p",{children:"404"}),Object(p.jsx)("p",{children:"Nothing Here"})]})};var Ge=function(){var e=Object(o.c)((function(e){return e.settings.mode}));return Object(c.useEffect)((function(){null!==window.localStorage.getItem("API_KEY")&&h.get("/",{headers:{"x-api-key":window.localStorage.getItem("API_KEY")}}).then((function(e){200===e.status&&e.headers["access-token"]?window.sessionStorage.setItem("ACCESS_TOKEN",e.headers["access-token"]):console.log("access-token problem")})).catch((function(e){console.log(e)}))}),[]),Object(p.jsxs)(r.a,{children:[Object(p.jsx)(C,{}),Object(p.jsxs)("div",{className:e,children:[Object(p.jsx)(w,{}),Object(p.jsxs)(N,{children:["video"===e&&Object(p.jsx)("div",{style:{background:"pink",border:"1px solid red",fontSize:"13px",padding:"20px",textAlign:"center"},children:"This mode doesnt work properly, the video may downloaded without audio, or low quality."}),"playlist"===e&&Object(p.jsx)("div",{style:{background:"pink",border:"1px solid red",fontSize:"13px",padding:"20px",textAlign:"center"},children:"Playlist mode not finished yet."}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"ytd/",element:Object(p.jsx)(_e,{})}),Object(p.jsx)(l.a,{exact:!0,path:"ytd/history",element:Object(p.jsx)(Re,{})}),Object(p.jsx)(l.a,{exact:!0,path:"ytd/settings",element:Object(p.jsx)(De,{})}),Object(p.jsx)(l.a,{path:"ytd/*",element:Object(p.jsx)(qe,{})})]})]})]})]})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,155)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{store:W,children:Object(p.jsx)(Ge,{})})}),document.getElementById("root")),He()},87:function(e,t,n){},92:function(e,t){},94:function(e,t){}},[[154,1,2]]]);
//# sourceMappingURL=main.fa378697.chunk.js.map