"use strict";(self.webpackChunksoccerstat=self.webpackChunksoccerstat||[]).push([[541],{8539:function(n,e,t){t.d(e,{q:function(){return d}});var a=t(4942),o=t(1951),i=t(4554),c=t(1889),r=t(703),l=t(890),s=t(184),d=function(n){var e,t=n.matches,d=Array.from(new Set(null===t||void 0===t?void 0:t.matches.map((function(n){return n.matchday})))).map((function(n){return{matchday:n,matches:null===t||void 0===t?void 0:t.matches.filter((function(e){return e.matchday===n}))}}));return(0,s.jsx)(r.Z,{children:(0,s.jsxs)(c.ZP,{container:!0,rowSpacing:1,sx:{p:1,display:"flex",justifyContent:"center"},children:[(0,s.jsx)(i.Z,{children:(0,s.jsx)(l.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:null!==t&&void 0!==t&&t.competition?"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c ".concat(t.competition.name):""})}),(0,s.jsx)(c.ZP,{container:!0,rowSpacing:1,sx:{p:1,display:"flex",justifyContent:"center",width:"100%"},children:0!==(null===t||void 0===t||null===(e=t.matches)||void 0===e?void 0:e.length)&&(null===d||void 0===d?void 0:d.map((function(n){var e=n.matchday,t=n.matches;return(0,s.jsxs)(c.ZP,{container:!0,item:!0,sx:function(n){return{display:"flex",flexDirection:"column",justifyContent:"center",borderBottom:"1px solid ".concat(n.palette.primary.main)}},children:[(0,s.jsx)(i.Z,{children:(0,s.jsx)(l.Z,{sx:{mb:1.5,textAlign:"center"},color:"text.secondary",children:"".concat(e," \u0422\u0443\u0440")})}),null===t||void 0===t?void 0:t.map((function(n){n.competition;var e=n.utcDate,t=(n.matchday,n.score),i=n.homeTeam,r=n.awayTeam;return(0,s.jsxs)(c.ZP,{container:!0,item:!0,children:[(0,s.jsx)(c.ZP,{item:!0,xs:12,md:6,children:(0,s.jsx)(l.Z,{sx:[{mb:1.5,textAlign:"center"},function(n){return(0,a.Z)({},n.breakpoints.down("md"),{textAlign:"start"})}],color:"text.secondary",children:(0,o.default)(new Date(e),"MM/dd/yyyy k:m")})}),(0,s.jsxs)(c.ZP,{item:!0,xs:12,md:6,children:[(0,s.jsx)(l.Z,{sx:{mb:1.5,textAlign:"start",display:"inline-block"},color:"text.secondary",children:"".concat(i.name)}),(0,s.jsx)(l.Z,{sx:{mb:1.5,mx:1,textAlign:"start",display:"inline-block"},color:"text.secondary",children:"".concat(null===t.fullTime.homeTeam?"":t.fullTime.homeTeam," - ").concat(null===t.fullTime.awayTeam?"":t.fullTime.awayTeam)}),(0,s.jsx)(l.Z,{sx:{mb:1.5,textAlign:"start",display:"inline-block"},color:"text.secondary",children:"".concat(r.name)})]})]},"".concat(e,"-").concat(i.name,"-").concat(r.name))}))]},e)})))})]})})}},6932:function(n,e,t){t.d(e,{O:function(){return s}});var a=t(1413),o=t(885),i=t(2791),c=t(4053),r=t(5093),l=t(184),s=function(n){var e=n.getOptionLabel,t=n.options,s=n.onChange,d=n.label,u=(0,i.useState)(""),m=(0,o.Z)(u,2),x=m[0],h=m[1];return(0,l.jsx)(c.Z,{disablePortal:!0,id:"combo-box-demo",getOptionLabel:e,options:t,sx:{width:"100%",padding:"0px 5px"},onChange:function(n,e){s(e)},inputValue:x,onInputChange:function(n,e){h(e)},renderInput:function(n){return(0,l.jsx)(r.Z,(0,a.Z)((0,a.Z)({},n),{},{label:d}))}})}},9541:function(n,e,t){t.r(e);var a=t(2791),o=t(6030),i=t(7571),c=t(7621),r=t(890),l=t(8539),s=t(6932),d=t(3726),u=t(3214),m=t(1687),x=t(3212),h=t(257),f=t(184);e.default=function(){var n,e,t=(0,i.TH)(),p=(0,i.k6)(),v=(0,o.I0)(),y=(0,o.v9)((function(n){return n.matchesTeam})),j=y.matches,g=y.loading,b=y.error,Z=(0,o.v9)((function(n){return n.filters})),w=Z.dateFrom,C=Z.dateTo,T=(0,o.v9)(m.gw).sort((function(n,e){return n.name.toLowerCase()<e.name.toLowerCase()?-1:n.name.toLowerCase()>e.name.toLowerCase()?1:0}));(0,a.useEffect)((function(){var n;return null!==(n=t.state)&&void 0!==n&&n.id&&v((0,d.o)(t.state.id,[{name:"dateFrom",value:w},{name:"dateTo",value:C}])),function(){v((0,u.nv)(null)),v((0,h.Sm)())}}),[w,C,null===(n=t.state)||void 0===n?void 0:n.id]),(0,a.useEffect)((function(){return v((0,m.A0)(2021)),function(){v((0,h.Sm)())}}),[]);var k=(0,a.useCallback)((function(n){v((0,u.nv)(null===n||void 0===n?void 0:n.id)),p.push({pathname:x.a.teamCalendar,state:{id:"".concat(null===n||void 0===n?void 0:n.id)}})}),[v]);return(0,f.jsx)(f.Fragment,{children:null!==(e=t.state)&&void 0!==e&&e.id?(0,f.jsxs)(f.Fragment,{children:[g&&"loading",!g&&!b&&(0,f.jsx)(l.q,{matches:j}),b&&(0,f.jsx)(r.Z,{variant:"h1",component:"h2",color:"white",align:"center",children:"\u043d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})]}):(0,f.jsxs)(c.Z,{sx:{borderRadius:4,minHeight:"120px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"},children:[(0,f.jsx)(s.O,{getOptionLabel:function(n){return"".concat(n.name,", ").concat(n.area.name)},options:T,onChange:k,label:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443"}),(0,f.jsx)(r.Z,{variant:"h5",color:"initial",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443"})]})})}}}]);
//# sourceMappingURL=541.33017c4f.chunk.js.map