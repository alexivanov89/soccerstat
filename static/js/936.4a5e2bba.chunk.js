"use strict";(self.webpackChunksoccerstat=self.webpackChunksoccerstat||[]).push([[936],{5797:function(e,t,n){n.d(t,{k:function(){return v}});var a=n(1413),i=n(4942),l=n(9741),r=n(7621),s=n(1889),o=n(9585),d=n(4053),c=n(5093),p=n(703),x=n(9281),m=n(9836),u=n(6890),h=n(5855),b=n(3994),g=n(3382),Z=n(4852),j=n(4554),f=n(890),C=n(2455),k=n(184),w=(0,C.Z)((function(e){var t;return{tableContainer:{padding:"0px 8px 8px 8px","&::-webkit-scrollbar":{width:16,backgroundColor:"#F5F7FA"},"&::-webkit-scrollbar-track":{borderRadius:4,boxShadow:"inset 0 0 16px 16px rgba(13, 26, 51, 0.05)",border:"solid 6px transparent"},"&::-webkit-scrollbar-thumb":{borderRadius:12,boxShadow:"inset 0 0 16px 16px rgba(13, 26, 51, 0.2)",border:"solid 6px transparent"}},paper:{width:"100%",overflow:"hidden",padding:"0px 8px 8px 8px"},table:(t={"& th, td":{padding:4}},(0,i.Z)(t,e.breakpoints.down("sm"),{width:"100%",tableLayout:"fixed","& th, td":{fontSize:"0.65rem"}}),(0,i.Z)(t,"& img",{maxWidth:"20px",maxHeight:"20px",marginRight:"2px"}),t)}})),v=function(e){var t=e.list,n=e.listOptions,i=e.handleChange,C=e.maxHeight,v=w();return(0,k.jsxs)(r.Z,{sx:{borderRadius:4},children:[(0,k.jsxs)(s.ZP,{container:!0,rowSpacing:1,sx:{p:1},children:[(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:(0,k.jsx)(o.Z,{title:n.title,subheader:n.subheader,sx:{p:0}})}),(0,k.jsx)(s.ZP,{item:!0,xs:12,sm:6,children:0!==t.length&&(0,k.jsx)(d.Z,{disablePortal:!0,id:"combo-box-demo",getOptionLabel:n.autocompleteOptions.getOptionLabel,options:t,sx:{width:"100%",padding:"0px 5px"},onChange:function(e,t){i(t)},renderInput:function(e){return(0,k.jsx)(c.Z,(0,a.Z)((0,a.Z)({},e),{},{label:n.autocompleteOptions.label}))}})})]}),(0,k.jsx)(p.Z,{className:v.paper,children:(0,k.jsx)(x.Z,{className:v.tableContainer,sx:{maxHeight:C},children:(0,k.jsxs)(m.Z,{stickyHeader:!0,"aria-label":"sticky table",className:v.table,children:[(0,k.jsx)(u.Z,{children:(0,k.jsx)(h.Z,{children:n.table.tableColumns.map((function(e){return(0,k.jsx)(b.Z,{children:e},e)}))})}),(0,k.jsx)(g.Z,{children:t.map((function(e){return(0,k.jsxs)(h.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,k.jsx)(b.Z,{children:(0,k.jsx)(Z.ZP,{component:n.table.linkPathFirstColummns?l.OL:null,to:{pathname:n.table.linkPathFirstColummns,state:{id:"".concat(e.id)}},sx:{padding:"0px !important"},children:e.name},e.id)}),(0,k.jsx)(b.Z,{children:(0,k.jsxs)(j.Z,{sx:{display:"flex",alignItems:"center"},children:[n.table.imgOption=Boolean(e.area.ensignUrl)?(0,k.jsx)("img",{src:e.area.ensignUrl,alt:"img",loading:"lazy"}):null,n.table.imgOption=Boolean(e.crestUrl)?(0,k.jsx)("img",{src:e.crestUrl,alt:"img",loading:"lazy"}):null,(0,k.jsx)(f.Z,{variant:"p",color:"initial",children:e.area.name})]},e.area.ensignUrl)}),(0,k.jsx)(b.Z,{children:(0,k.jsx)(Z.ZP,{component:l.OL,to:{pathname:n.table.linkPathLastColummns,state:{id:"".concat(e.id)}},sx:{padding:"0px !important"},children:(0,k.jsxs)(f.Z,{variant:"p",color:"initial",children:["\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c ",e.name]})},e.id)})]},e.id)}))})]})})})]})}},2936:function(e,t,n){n.r(t);var a=n(2791),i=n(6030),l=n(7571),r=n(5797),s=n(3212),o=n(3214),d=n(1687),c=n(184);t.default=function(){var e,t=(0,l.TH)(),n=(0,i.I0)(),p=(0,i.v9)(d.gw),x=(0,i.v9)((function(e){return e.teamsLeague})).teamsLeague,m=p.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?-1:e.name.toLowerCase()>t.name.toLowerCase()?1:0}));(0,a.useEffect)((function(){t.state&&n((0,d.A0)(t.state.id))}),[]);var u=(0,a.useCallback)((function(e){n((0,o.nv)(null===e||void 0===e?void 0:e.id))}),[n]),h={title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043c\u0430\u043d\u0434",subheader:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b ".concat(null===x||void 0===x||null===(e=x.competition)||void 0===e?void 0:e.name),autocompleteOptions:{label:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u0443",getOptionLabel:function(e){return"".concat(e.name,", ").concat(e.area.name)}},table:{tableColumns:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b","\u0421\u0442\u0440\u0430\u043d\u0430","\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b"],linkPathFirstColummns:null,linkPathLastColummns:s.a.teamCalendar,imgOption:"crestUrl"}};return(0,c.jsx)(r.k,{list:m,listOptions:h,handleChange:u,maxHeight:"calc(100vh - 220px)"})}}}]);
//# sourceMappingURL=936.4a5e2bba.chunk.js.map