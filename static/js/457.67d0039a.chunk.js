"use strict";(self.webpackChunksoccerstat=self.webpackChunksoccerstat||[]).push([[457],{8539:function(n,e,t){t.d(e,{q:function(){return s}});var a=t(1951),o=t(1889),c=t(703),i=t(890),r=t(2455),l=t(184),u=(0,r.Z)((function(n){return{root:{}}})),s=function(n){var e,t,r=n.matches;u();return(0,l.jsx)(c.Z,{children:(0,l.jsx)(o.ZP,{container:!0,rowSpacing:1,sx:{p:1,display:"flex",justifyContent:"center"},children:0!==(null===r||void 0===r||null===(e=r.matches)||void 0===e?void 0:e.length)&&(null===r||void 0===r||null===(t=r.matches)||void 0===t?void 0:t.map((function(n){var e=n.competition,t=n.utcDate,c=n.matchday,u=n.score,s=n.homeTeam,d=n.awayTeam;return(0,l.jsxs)(o.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,children:[(0,l.jsx)(i.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:null!==r&&void 0!==r&&r.competition?"".concat(r.competition.name,", ").concat(c," \u0442\u0443\u0440"):"".concat(null===e||void 0===e?void 0:e.name,", ").concat(c," \u0442\u0443\u0440")}),(0,l.jsx)(i.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:(0,a.default)(new Date(t),"MM/dd/yyyy k:m")}),(0,l.jsx)(i.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:"".concat(s.name," ").concat(null===u.fullTime.homeTeam?"":u.fullTime.homeTeam," - ").concat(null===u.fullTime.awayTeam?"":u.fullTime.awayTeam," ").concat(d.name)})]},"".concat(t,"-").concat(s.name,"-").concat(d.name))})))})})}},6932:function(n,e,t){t.d(e,{O:function(){return u}});var a=t(1413),o=t(885),c=t(2791),i=t(4053),r=t(5093),l=t(184),u=function(n){var e=n.getOptionLabel,t=n.options,u=n.onChange,s=n.label,d=(0,c.useState)(""),m=(0,o.Z)(d,2),f=m[0],h=m[1];return(0,l.jsx)(i.Z,{disablePortal:!0,id:"combo-box-demo",getOptionLabel:e,options:t,sx:{width:"100%",padding:"0px 5px"},onChange:function(n,e){u(e)},inputValue:f,onInputChange:function(n,e){h(e)},renderInput:function(n){return(0,l.jsx)(r.Z,(0,a.Z)((0,a.Z)({},n),{},{label:s}))}})}},1457:function(n,e,t){t.r(e);var a=t(2791),o=t(6030),c=t(7571),i=t(8539),r=t(6505),l=t(7621),u=t(890),s=t(6932),d=t(4915),m=t(6992),f=t(3212),h=t(6785),x=t(184);e.default=function(){var n,e,t=(0,c.TH)(),v=(0,o.I0)(),p=(0,c.k6)(),g=(0,o.v9)((function(n){return n.matchesLeague})),j=g.matches,y=g.loading,b=g.error,C=(0,o.v9)((function(n){return n.filters})),Z=C.dateFrom,T=C.dateTo,w=(0,o.v9)(d.TY).sort((function(n,e){return n.name.toLowerCase()<e.name.toLowerCase()?-1:n.name.toLowerCase()>e.name.toLowerCase()?1:0}));(0,a.useEffect)((function(){var n;return null!==(n=t.state)&&void 0!==n&&n.id&&v((0,r.o)(t.state.id,[{name:"dateFrom",value:Z},{name:"dateTo",value:T}])),function(){v((0,m.OL)(null)),v((0,h.s6)())}}),[Z,T,null===(n=t.state)||void 0===n?void 0:n.id]),(0,a.useEffect)((function(){return v((0,d.VQ)()),function(){v((0,h.s6)())}}),[]);var L=(0,a.useCallback)((function(n){v((0,m.OL)(null===n||void 0===n?void 0:n.id)),p.push({pathname:f.a.leagueCalendar,state:{id:"".concat(null===n||void 0===n?void 0:n.id)}})}),[v]);return(0,x.jsx)(x.Fragment,{children:null!==(e=t.state)&&void 0!==e&&e.id?(0,x.jsxs)(x.Fragment,{children:[y&&"loading",!y&&!b&&(0,x.jsx)(i.q,{matches:j}),b&&(0,x.jsx)(u.Z,{variant:"h1",component:"h2",color:"white",align:"center",children:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]}):(0,x.jsxs)(l.Z,{sx:{borderRadius:4,minHeight:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},children:[(0,x.jsx)(s.O,{getOptionLabel:function(n){return"".concat(n.name,", ").concat(n.area.countryCode)},options:w,onChange:L,label:"\u041d\u0430\u0439\u0442\u0438 \u0427\u0435\u043c\u043f\u0438\u043e\u043d\u0430\u0442"}),(0,x.jsx)(u.Z,{variant:"h5",color:"initial",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0427\u0435\u043c\u043f\u0438\u043e\u043d\u0430\u0442"})]})})}}}]);
//# sourceMappingURL=457.67d0039a.chunk.js.map