(this["webpackJsonpyt-downloader-site"]=this["webpackJsonpyt-downloader-site"]||[]).push([[0],Array(28).concat([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),i=n(12),s=n.n(i),j=n(6),a=(n(28),n(10)),o=n(3),l=(n(29),n(30),n(31),n(1));var d=function(e){return Object(l.jsx)("div",{className:"flex-container",children:e.children})};n(33);var u=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)(a.b,{to:"/",children:"Home"}),Object(l.jsx)(a.b,{to:"history",children:"History"}),Object(l.jsx)(a.b,{to:"settings",children:"Settings"})]})};n(34);var b=function(){return Object(l.jsx)("div",{className:"lang-switch",children:Object(l.jsx)("span",{children:" HE "})})};var O=function(){return Object(l.jsx)("div",{id:"HEADER",children:Object(l.jsxs)(d,{children:[Object(l.jsx)("h1",{children:"YT DOWNLOADER"}),Object(l.jsx)(u,{}),Object(l.jsx)(b,{})]})})};n(35);var x=function(e){return Object(l.jsx)("div",{className:"layout",children:e.children})},h=(n(36),n(37),n(13));n(38);var f=function(e){return Object(l.jsx)("button",{children:e.children||e.btnContent})};n(39);var v=function(e){return Object(l.jsx)("input",{placeholder:e.placeholder})};var m=function(){return Object(l.jsxs)("form",{onSubmit:function(){},children:[Object(l.jsx)(v,{onChange:function(){},name:"video-search",type:"text",placeholder:"Search video or playlist ..."}),Object(l.jsx)(f,{children:Object(l.jsx)(h.b,{})})]})},p=(n(40),n(41),n(42),n(8));var y=function(e){return Object(l.jsxs)("div",{className:"vid-details",children:[Object(l.jsx)("p",{className:"vid-title",children:e.title}),Object(l.jsx)("i",{className:"vid-source",children:e.source}),Object(l.jsxs)("small",{className:"vid-footer",children:[e.views," \xb7 ",e.duration," ",Object(l.jsx)(p.a,{})]})]})};n(43);var N=function(){return Object(l.jsxs)("div",{className:"example-paragraph",children:[Object(l.jsx)("div",{className:"empty top-empty"}),Object(l.jsx)("div",{className:"empty middle-empty"}),Object(l.jsx)("div",{className:"empty bottom-empty"})]})},g=(n(44),n(7)),E={openPlayer:function(e){return{type:"open",payload:e}}};var w=function(){var e=Object(j.b)(),t=Object(g.a)(E,e).openPlayer,n=Object(j.c)((function(e){return e.player}));return Object(l.jsx)("div",{id:"MINIMIZE_PLAYER",children:Object(l.jsx)(f,{children:n?Object(l.jsx)(p.b,{className:"react-icons",onClick:function(){return t(!1)}}):Object(l.jsx)(h.a,{className:"react-icons",onClick:function(){return t(!0)}})})})};var C=function(e){var t=Object(j.c)((function(e){return e.player})),n=Object(j.c)((function(e){return e.video}));console.log(n);var c=e.title?Object(l.jsx)(y,{video:!0}):Object(l.jsx)(N,{}),r=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"frame-wrapper",children:Object(l.jsx)("iframe",{frameBorder:"0"})}),c]})};return Object(l.jsxs)("div",{className:t?"player":"player fold-player",children:[Object(l.jsx)(w,{}),t&&Object(l.jsx)(r,{})]})},P=n(11),A=(n(45),n(46),{setVideo:function(e){return{type:"set",payload:e}}});var S=function(e){var t=Object(j.b)(),n=Object(g.a)(A,t).setVideo;return Object(l.jsxs)("div",{className:"vid-item",onClick:function(){return n(e.id)},children:[Object(l.jsx)("img",{className:"vid-thumb",src:e.title?e.img:null,alt:e.title?"video thumbnail":null}),e.title?Object(l.jsx)(y,Object(P.a)({},e)):Object(l.jsx)(N,{})]})};var F=function(){return Object(l.jsx)("div",{className:"vid-list",children:[" "," "," "," "," "," "," "," "].map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(c.createElement)(S,Object(P.a)(Object(P.a)({},e),{},{key:e.title}))})}))})};var H=function(){return Object(l.jsxs)("div",{className:"display-layout",children:[Object(l.jsx)(C,{"data-src":""}),Object(l.jsx)(F,{})]})};n(47);var I=function(){return Object(l.jsx)("div",{className:"down-btn",children:Object(l.jsx)(f,{children:Object(l.jsx)(p.a,{})})})};var T=function(){return Object(l.jsxs)("div",{className:"home-page",children:[Object(l.jsx)(m,{}),Object(l.jsx)(H,{}),Object(l.jsx)(I,{})]})};n(48),n(49);var k=function(e){return Object(l.jsx)("div",{className:"inner-frame",children:e.children})};var R=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(k,{id:"HISTORY_PAGE"})})};n(50);var _=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(k,{id:"SETTINGS_PAGE"})})};var D=function(){return Object(l.jsx)("div",{id:"NO_MATCH_WRAPPER",children:Object(l.jsx)("h1",{children:"Nothing Here"})})};var L=function(){return Object(l.jsxs)(a.a,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(x,{children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",element:Object(l.jsx)(T,{})}),Object(l.jsx)(o.a,{exact:!0,path:"history",element:Object(l.jsx)(R,{})}),Object(l.jsx)(o.a,{exact:!0,path:"settings",element:Object(l.jsx)(_,{})}),Object(l.jsx)(o.a,{path:"*",element:Object(l.jsx)(D,{})})]})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))},B=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"open":return e.payload;default:return!0}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set":return t.payload||e;default:return""}},Y=Object(g.b)({player:B,video:G}),J=Object(g.c)(Y,{});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(j.a,{store:J,children:Object(l.jsx)(L,{})})}),document.getElementById("root")),M()}]),[[51,1,2]]]);
//# sourceMappingURL=main.3a41c5af.chunk.js.map