(()=>{"use strict";var e={92505:function(e,t,r){r(27530);var n=r(85893),i=r(41310),s=r(67294),a=r(90948),o=r(99226),l=r(61730),d=r(2734);let c=(0,a.ZP)("main",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:r}=e;return{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(i.RK,"px"),...r&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0}}});t.Z=e=>{let t=(0,d.Z)(),[r,a]=s.useState(!1),u=(0,l.Z)(t.breakpoints.up("md")),[h,j]=s.useState(!1);return u&&!h&&(console.debug("Defaulting menu to open for wide screens"),a(!0),j(!0)),(0,n.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,n.jsx)(i.g4,{open:r,setOpen:a}),(0,n.jsxs)(c,{open:r,children:[(0,n.jsx)(i.OX,{}),e.children]})]})}},82062:function(e,t,r){r(40777),r(59560),r(59734);var n=r(85893);r(67294);var i=r(43907),s=r(38798),a=r(61495),o=r(65294),l=r(1474),d=r(44976),c=r(66797),u=r(2734),h=r(67510),j=r(94658);let x={xAccessor:e=>e.x,yAccessor:e=>e.y,onPointerUp:()=>console.log("test"),onPointerMove:()=>console.log("test"),onPointerOut:()=>console.log("test"),onBlur:()=>console.log("test"),onFocus:()=>console.log("test"),onPointerDown:()=>console.log("test")},p={top:10,right:10,left:40,bottom:40},m=e=>t=>{var r,i,s;let{tooltipData:a,colorScale:o}=t,l=null==a?void 0:null===(r=a.nearestDatum)||void 0===r?void 0:r.datum;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{color:o&&o((null==a?void 0:null===(i=a.nearestDatum)||void 0===i?void 0:i.key)||"")},children:[null==a?void 0:null===(s=a.nearestDatum)||void 0===s?void 0:s.key,":"," ",l&&x.yAccessor(l)," ",e&&e]}),(0,n.jsx)("br",{}),l&&x.xAccessor(l)]})},f=(e,t)=>{if("DateTime"===t)return(0,j.$)(e);if("Date"===t)return(0,j.s)(e);throw Error("Unsupported date type")},g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.Z.DateTime;return e.map(e=>({x:f(e.x,t),y:e.y}))},Z=(e,t)=>t?"".concat(e," (").concat(t,")"):e;t.Z=e=>{let{height:t,data:r=[],xAxisLabel:h,xAxisUnit:j,xAxisType:f}=e,v=(0,u.Z)(),b=(0,i.Z)({backgroundColor:v.palette.background.paper,colors:[v.palette.secondary.main],tickLength:1,gridColor:v.palette.grey[200],gridColorDark:v.palette.grey[600]});r=g(r,f);let w=Z(h,j),y=m(j);return(0,n.jsx)("div",{style:{height:t},children:(0,n.jsxs)(s.Z,{theme:b,margin:p,height:200,xScale:{type:"band"},yScale:{type:"linear"},children:[(0,n.jsx)(a.Z,{numTicks:4,label:"Date",orientation:"bottom"}),(0,n.jsx)(a.Z,{label:w,orientation:"left"}),(0,n.jsx)(o.Z,{columns:!0}),(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{dataKey:h,data:r,...x})}),(0,n.jsx)(c.Z,{renderTooltip:y})]})})}},40890:function(e,t,r){r(27530);var n=r(85893),i=r(67294),s=r(23972),a=r(90965),o=r(47034);class l extends i.Component{static getDerivedStateFromError(e){return{hasError:e}}componentDidCatch(e,t){console.error("Uncaught error:",e,t)}render(){return null!==this.state.hasError?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{variant:"h2",component:"h3",children:"Sorry..."}),(0,n.jsx)("p",{children:"There was an error:"}),(0,n.jsx)("code",{children:this.state.hasError.message}),(0,n.jsxs)("p",{children:["Please raise an issue on our"," ",(0,n.jsx)(o.Z,{href:"https://github.com/thedumbterminal/ci-speed-ui/issues",target:"_blank",title:"Log issue",children:"GitHub Project"}),"."]})]})}):this.props.children}constructor(...e){super(...e),this.state={hasError:null}}}t.Z=l},13571:function(e,t,r){r.d(t,{r:function(){return a}}),r(27530);var n=r(85893),i=r(51272),s=r(67294);let a=e=>{let{rows:t,columns:r,isLoading:a,sortModel:o=[]}=e,[l,d]=s.useState({pageSize:10,page:0});return(0,n.jsx)(i._,{initialState:{sorting:{sortModel:o},pagination:{paginationModel:{pageSize:10}}},paginationModel:l,onPaginationModelChange:d,rows:t,columns:r,pageSizeOptions:[10,50,100],autoHeight:!0,disableColumnMenu:!0,isRowSelectable:()=>!1,loading:a,sx:{boxShadow:2,border:2,borderColor:"primary.light","& .MuiDataGrid-cell--editable":{}}})}},90965:function(e,t,r){var n=r(85893),i=r(41310);r(67294);var s=r(90948),a=r(99226),o=r(66720),l=r(83808),d=r(23972),c=r(19058),u=r(47034);let h=(0,s.ZP)("main",{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:r}=e;return{flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(i.RK,"px"),...r&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0}}});t.Z=e=>(0,n.jsxs)(a.Z,{sx:{display:"flex"},children:[(0,n.jsx)(o.ZP,{}),(0,n.jsx)(i.xG,{position:"fixed",open:!1,children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(d.Z,{variant:"h5",noWrap:!0,component:"h1",sx:{flexGrow:1},children:(0,n.jsx)(u.Z,{href:"",variant:"inherit",color:"inherit",underline:"hover",title:"CI-Speed",children:"CI-Speed"})})})}),(0,n.jsx)(c.ZP,{sx:{width:i.RK,flexShrink:0,"& .MuiDrawer-paper":{width:i.RK,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:!1}),(0,n.jsxs)(h,{children:[(0,n.jsx)(i.OX,{}),e.children]})]})},16491:function(e,t,r){var n=r(85893);r(67294);var i=r(6531),s=r(47034);t.Z=()=>{let e=(0,i.m)("/login");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Please login to gain access to CI-Speed features."}),(0,n.jsx)("p",{children:(0,n.jsx)(s.Z,{href:e,children:"Login via OAUTH with GitHub"})})]})}},56889:function(e,t,r){r(27530),r(59560),r(59734);var n=r(85893),i=r(67294),s=r(5108),a=r(52293),o=r(16310),l=r(95492),d=r(6531),c=r(63931),u=r(74509),h=r(53640),j=r(16012),x=r(60974),p=r(60076);let m=o.Ry().shape({name:o.Z_().required().matches(/^[a-zA-Z0-9_\-/]+$/)}),f=()=>{let{data:e,error:t}=(0,x.ZP)("/available_projects/",d.V.simpleGet);return{data:e,error:t,isLoading:!t&&!e}},g=e=>(0,n.jsx)(c.Z,{value:e,children:e},e);t.Z=()=>{var e,t,r;let{register:o,handleSubmit:c,formState:{errors:x}}=(0,a.cI)({resolver:(0,l.X)(m)}),Z=[],{data:v,error:b,isLoading:w}=f();if(b)throw b;v&&(Z=v);let[y,_]=i.useState(!1),P=async e=>{_(!0),await d.V.post({url:"/projects/",params:{name:e.name}}),_(!1)},S=(0,n.jsx)(j.Z,{...o("name"),labelId:"available-project-select-label",id:"available-project-select",defaultValue:"",label:"Available Project Name",error:!!(null===(e=x.name)||void 0===e?void 0:e.message),children:Z.map(g)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Enable a new project, so results can be uploaded to CI-Speed."}),(0,n.jsxs)("form",{onSubmit:c(P),children:[(0,n.jsxs)(h.Z,{fullWidth:!0,error:!!(null===(t=x.name)||void 0===t?void 0:t.message),children:[(0,n.jsx)(p.Z,{id:"available-project-select-label",children:"Available Projects"}),!w&&S,(0,n.jsx)(u.Z,{children:null===(r=x.name)||void 0===r?void 0:r.message})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("br",{}),(0,n.jsx)(s.Z,{type:"submit",loading:y,variant:"contained",loadingIndicator:"Activating...",children:"Activate Project"})]})]})]})}},50534:function(e,t,r){var n=r(85893),i=r(82062),s=r(6531),a=r(60974),o=r(67510),l=r(1755);let d=e=>{let t=(0,l.L)(),{data:r,error:n}=(0,a.ZP)(()=>({url:"/projects/".concat(e.toString(),"/num_builds"),params:{days:t}}),s.V.get);return{data:r,error:n,isLoading:!n&&!r}};t.Z=e=>{let{data:t,error:r}=d(e.projectId);if(r)throw r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Number of builds per day"}),(0,n.jsx)(i.Z,{height:200,data:t,xAxisLabel:"Builds",xAxisType:o.Z.Date})]})}},92545:function(e,t,r){var n=r(85893),i=r(82062),s=r(6531),a=r(60974),o=r(67510),l=r(1755);let d=e=>{let t=(0,l.L)(),{data:r,error:n}=(0,a.ZP)(()=>({url:"/projects/".concat(e.toString(),"/num_tests"),params:{days:t}}),s.V.get);return{data:r,error:n,isLoading:!n&&!r}};t.Z=e=>{let{data:t,error:r}=d(e.projectId);if(r)throw r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Number of tests per day"}),(0,n.jsx)(i.Z,{height:200,data:t,xAxisLabel:"Tests",xAxisType:o.Z.Date})]})}},8681:function(e,t,r){r(27530),r(59560),r(59734);var n=r(85893),i=r(60974),s=r(60076),a=r(63931),o=r(53640),l=r(16012),d=r(6531),c=r(27197);let u=()=>{let{data:e,error:t}=(0,i.ZP)("/projects/",d.V.simpleGet);return{data:e,error:t,isLoading:!t&&!e}},h=e=>(0,n.jsx)(a.Z,{value:e.id,children:e.name},e.id);t.Z=()=>{let e=[],{data:t,error:r,isLoading:i}=u();if(r)throw r;let a=0;t&&t.length&&(a=(e=t)[0].id);let[d,j]=(0,c.Z)("projectId",{defaultValue:a}),x=(0,n.jsx)(l.Z,{labelId:"project-select-label",id:"project-select",value:d.toString(),label:"Project",onChange:e=>{j(parseInt(e.target.value,10))},children:e.map(h)});return(0,n.jsxs)(o.Z,{fullWidth:!0,children:[(0,n.jsx)(s.Z,{id:"project-select-label",children:"Projects"}),!i&&x]})}},89505:function(e,t,r){var n=r(85893),i=r(82062),s=r(6531),a=r(60974),o=r(67510),l=r(1755);let d=e=>{let t=(0,l.L)(),{data:r,error:n}=(0,a.ZP)(()=>({url:"/projects/".concat(e.toString(),"/test_duration"),params:{days:t}}),s.V.get);return{data:r,error:n,isLoading:!n&&!r}};t.Z=e=>{let{data:t,error:r}=d(e.projectId);if(r)throw r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Duration of tests per day"}),(0,n.jsx)(i.Z,{height:200,data:t,xAxisLabel:"Duration",xAxisUnit:"Secs",xAxisType:o.Z.Date})]})}},67775:function(e,t,r){var n=r(85893),i=r(6531),s=r(60974),a=r(23972);let o=e=>{let{data:t,error:r}=(0,s.ZP)("/projects/".concat(e.toString(),"/test_pass_percentage"),i.V.simpleGet);return{data:t,error:r,isLoading:!r&&!t}},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return e?e.toFixed(2)+" %":"No data yet"};t.Z=e=>{let{data:t,error:r}=o(e.projectId);if(r)throw r;let i=l(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Test pass percentage"}),(0,n.jsx)(a.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:i})]})}},31104:function(e,t,r){var n=r(85893),i=r(82062),s=r(6531),a=r(60974),o=r(67510),l=r(1755);let d=e=>{let t=(0,l.L)(),{data:r,error:n}=(0,a.ZP)(()=>({url:"/projects/".concat(e.toString(),"/test_success"),params:{days:t}}),s.V.get);return{data:r,error:n,isLoading:!n&&!r}};t.Z=e=>{let{data:t,error:r}=d(e.projectId);if(r)throw r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Percentage of successful tests per day"}),(0,n.jsx)(i.Z,{height:200,data:t,xAxisLabel:"Success",xAxisUnit:"%",xAxisType:o.Z.Date})]})}},9056:function(e,t,r){var n=r(85893),i=r(82062),s=r(6531),a=r(60974),o=r(67510),l=r(1755);let d=e=>{let t=(0,l.L)(),{data:r,error:n}=(0,a.ZP)(()=>({url:"/projects/".concat(e.toString(),"/tests_skipped"),params:{days:t}}),s.V.get);return{data:r,error:n,isLoading:!n&&!r}};t.Z=e=>{let{data:t,error:r}=d(e.projectId);if(r)throw r;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Percentage of tests skipped per day"}),(0,n.jsx)(i.Z,{height:200,data:t,xAxisLabel:"Skipped",xAxisUnit:"%",xAxisType:o.Z.Date})]})}},41310:function(e,t,r){r.d(t,{OX:function(){return k},RK:function(){return P},g4:function(){return L},xG:function(){return S}});var n=r(85893);r(67294);var i=r(90948),s=r(2734),a=r(19058),o=r(66720),l=r(89206),d=r(83808),c=r(18843),u=r(47034),h=r(23972),j=r(67720),x=r(54799),p=r(326),m=r(19572),f=r(26215),g=r(29861),Z=r(48885),v=r(59334),b=r(79655),w=r(60974),y=r(1755),_=r(6531);let P=240,S=(0,i.ZP)(l.Z,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:r}=e;return{transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),...r&&{width:"calc(100% - ".concat(P,"px)"),marginLeft:"".concat(P,"px"),transition:t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}}}),A=()=>{let e=(0,y.v)(),{data:t,error:r}=(0,w.ZP)("/projects/".concat(e.toString()),_.V.simpleGet);return{data:t,error:r,isLoading:!r&&!t}},k=(0,i.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",padding:t.spacing(0,1),...t.mixins.toolbar,justifyContent:"flex-end"}}),L=e=>{let{open:t,setOpen:r}=e,i=(0,s.Z)(),{data:l,error:w,isLoading:y}=A();if(w)throw w;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.ZP,{}),(0,n.jsx)(S,{position:"fixed",open:t,children:(0,n.jsxs)(d.Z,{children:[(0,n.jsx)(x.Z,{color:"inherit","aria-label":"open drawer",onClick:()=>{r(!0)},edge:"start",sx:{mr:2,...t&&{display:"none"}},children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(h.Z,{variant:"h5",noWrap:!0,component:"h1",sx:{flexGrow:1},children:(0,n.jsx)(u.Z,{href:"",variant:"inherit",color:"inherit",underline:"hover",title:"CI-Speed",children:"CI-Speed"})}),!y&&l&&(0,n.jsxs)(h.Z,{align:"right",variant:"h6",noWrap:!0,component:"h2",children:["[",(0,n.jsx)(u.Z,{title:"View repository on GitHub",underline:"hover",variant:"inherit",color:"inherit",href:l.vcs_url,rel:"noopener",target:"_blank",children:l.name}),"]"]})]})}),(0,n.jsxs)(a.ZP,{sx:{width:P,flexShrink:0,"& .MuiDrawer-paper":{width:P,boxSizing:"border-box"}},variant:"persistent",anchor:"left",open:t,children:[(0,n.jsx)(k,{children:(0,n.jsx)(x.Z,{onClick:()=>{r(!1)},children:"ltr"===i.direction?(0,n.jsx)(m.default,{}):(0,n.jsx)(f.default,{})})}),(0,n.jsx)(j.Z,{}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(b.OL,{to:"/",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Home"})]},"Home")}),(0,n.jsx)(b.OL,{to:"/summary",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Summary"})]},"Summary")}),(0,n.jsx)(b.OL,{to:"/analyse",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Analyse"})]},"Analyse")}),(0,n.jsx)(b.OL,{to:"/project",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Detail"})]},"Detail")})]}),(0,n.jsx)(j.Z,{}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(b.OL,{to:"/choose_project",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Choose Project"})]},"ChooseProject")}),(0,n.jsx)(b.OL,{to:"/add_project",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Add Project"})]},"AddProject")}),(0,n.jsx)(b.OL,{to:"/account",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Account"})]},"Account")}),(0,n.jsx)(b.OL,{to:"/api_key",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"API Key"})]},"ApiKey")})]}),(0,n.jsx)(j.Z,{}),(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(u.Z,{href:"/doc",rel:"noopener",target:"_blank",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"API"})]},"API")}),(0,n.jsx)(u.Z,{href:"https://github.com/thedumbterminal/ci-speed/wiki",rel:"noopener",target:"_blank",children:(0,n.jsxs)(g.ZP,{button:!0,children:[(0,n.jsx)(Z.Z,{children:(0,n.jsx)(p.default,{})}),(0,n.jsx)(v.Z,{primary:"Wiki"})]},"Wiki")})]})]})]})}},34719:function(e,t,r){var n=r(85893),i=r(6531),s=r(60974),a=r(98537),o=r(23972);let l=e=>{let{data:t,error:r}=(0,s.ZP)("/projects/".concat(e.toString(),"/total_test_duration"),i.V.simpleGet);return{data:t,error:r,isLoading:!r&&!t}},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(!e)return"No data yet";let t=new Date(0),r=new Date(1e3*e);return(0,a.H)(r,t)};t.Z=e=>{let{data:t,error:r}=l(e.projectId);if(r)throw r;let i=d(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Total Test Duration"}),(0,n.jsx)(o.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:i})]})}},11957:function(e,t,r){r.d(t,{a:function(){return c}});var n=r(85893),i=r(67294),s=r(6531),a=r(60974),o=r(89250);let l=(0,i.createContext)(null),d=()=>{let{data:e,error:t}=(0,a.ZP)("/user/",s.V.simpleGet);return{data:e,error:t,isLoading:!t&&!e}};t.Z=e=>{let{children:t}=e,{data:r,isLoading:i}=d();return i?(0,n.jsx)("p",{children:"Loading..."}):r?(0,n.jsx)(l.Provider,{value:r,children:t}):(console.log("Redirecting to login..."),(0,n.jsx)(o.Fg,{to:"/login"}))};let c=()=>(0,i.useContext)(l)},17204:function(e,t,r){var n=r(85893),i=r(20745),s=r(67294),a=r(84279),o=r(48852),l=r(90765),d=r(35477),c=r(69298),u=r(75336),h=r(10016),j=r(18012),x=r(37769),p=r(8872),m=r(3034),f=r(27721),g=r(1364),Z=r(13484),v=r(67059),b=r(35451),w=r(79655),y=r(89250);r(86351),r(48314),r(4610),r(71724);let _=document.getElementById("root");(0,i.createRoot)(_).render((0,n.jsx)(s.StrictMode,{children:(0,n.jsx)(w.UT,{children:(0,n.jsx)(y.Z5,{children:(0,n.jsxs)(y.AW,{path:"/",element:(0,n.jsx)(a.Z,{}),children:[(0,n.jsx)(y.AW,{path:"login",element:(0,n.jsx)(c.Z,{})}),(0,n.jsxs)(y.AW,{element:(0,n.jsx)(o.Z,{}),children:[(0,n.jsx)(y.AW,{path:"account",element:(0,n.jsx)(d.Z,{})}),(0,n.jsx)(y.AW,{path:"api_key",element:(0,n.jsx)(u.Z,{})}),(0,n.jsx)(y.AW,{path:"summary",element:(0,n.jsx)(h.Z,{})}),(0,n.jsx)(y.AW,{path:"analyse",element:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(y.AW,{path:"choose_project",element:(0,n.jsx)(x.Z,{})}),(0,n.jsx)(y.AW,{path:"add_project",element:(0,n.jsx)(m.Z,{})}),(0,n.jsx)(y.AW,{path:"project",element:(0,n.jsx)(p.Z,{})}),(0,n.jsx)(y.AW,{path:"build",element:(0,n.jsx)(f.Z,{})}),(0,n.jsx)(y.AW,{path:"test_run",element:(0,n.jsx)(g.Z,{})}),(0,n.jsx)(y.AW,{path:"test_suite",element:(0,n.jsx)(Z.Z,{})}),(0,n.jsx)(y.AW,{path:"test_failure",element:(0,n.jsx)(v.Z,{})}),(0,n.jsx)(y.AW,{path:"skipped_test",element:(0,n.jsx)(b.Z,{})}),(0,n.jsx)(y.AW,{index:!0,element:(0,n.jsx)(l.Z,{})})]})]})})})}))},6531:function(e,t,r){r.d(t,{V:function(){return o},m:function(){return a}}),r(40777);var n=r(12008),i=r(80129),s=r.n(i);let a=e=>"https://ci-speed.herokuapp.com/api"+e;class o{static async get(e){try{let{data:t,headers:r}=await n.Z.get(a(e.url),{params:e.params,withCredentials:!0});if("application/json"!==r["content-type"])throw Error("Invalid response content type: '".concat(r["content-type"],"'"));return t}catch(e){throw console.error("API error:",e),e}}static simpleGet(e){return o.get({url:e,params:{}})}static async post(e){let t=s().stringify(e.params);try{let{data:r}=await n.Z.post(a(e.url),t,{withCredentials:!0,headers:{"content-type":"application/x-www-form-urlencoded"}});return r}catch(e){throw console.error("API error:",e),e}}static simplePost(e){return o.post({url:e,params:{}})}}},94658:function(e,t,r){r.d(t,{$:function(){return i},s:function(){return s}});var n=r(361);let i=e=>{try{let t=new Date(e);return(0,n.WU)(t,"dd/MM/yyyy kk:mm:ss")}catch(t){console.error("Problem with date: '".concat(e,"'"),t)}return"Unknown"},s=e=>{let t=new Date(e);return(0,n.WU)(t,"dd/MM/yyyy")}},1755:function(e,t,r){r.d(t,{L:function(){return s},v:function(){return i}}),r(27530);var n=r(27197);let i=()=>{let[e]=(0,n.Z)("projectId",{defaultValue:0});return e},s=()=>{let[e]=(0,n.Z)("analyseDays",{defaultValue:30});return e}},11333:function(e,t,r){r(59560),r(59734);class n{static _statusForTestCase(e){return e.test_failures.length?"Failure":e.skipped_tests.length?"Skipped":"Success"}static _transformRow(e){let t=e.test_failures[0],r=e.skipped_tests[0];return{id:e.id,name:e.name,duration:e.time,status:n._statusForTestCase(e),failure_id:t,skipped_id:r,test_suite_id:e.test_suite_id}}static transformRows(e){return e.map(n._transformRow)}}t.Z=n},35477:function(e,t,r){var n=r(85893),i=r(23972),s=r(11957);t.Z=()=>{let e=(0,s.a)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",children:"Account"}),(0,n.jsxs)("p",{children:["Logged in via GitHub as ",(0,n.jsx)("b",{children:e&&e.email}),"."]})]})}},3034:function(e,t,r){var n=r(85893),i=r(23972),s=r(56889);t.Z=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",children:"Add Project"}),(0,n.jsx)(s.Z,{})]})},18012:function(e,t,r){r(27530),r(59560),r(59734);var n=r(85893),i=r(23972),s=r(50534),a=r(92545),o=r(89505),l=r(31104),d=r(9056),c=r(1755),u=r(16012),h=r(63931),j=r(27197),x=r(53640),p=r(60076);let m=e=>(0,n.jsx)(h.Z,{value:e.toString(),children:e+" days"},e.toString());t.Z=()=>{let e=(0,c.v)(),[t,r]=(0,j.Z)("analyseDays",{defaultValue:30});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",gutterBottom:!0,children:"Analyse"}),(0,n.jsxs)(x.Z,{fullWidth:!0,children:[(0,n.jsx)(p.Z,{id:"duration-select-label",children:"Duration"}),(0,n.jsx)(u.Z,{labelId:"duration-select-label",id:"duration-select",value:t.toString(),label:"Duration",onChange:e=>{r(parseInt(e.target.value,10))},children:[7,14,30,60,90,365].map(m)})]}),e&&(0,n.jsx)(s.Z,{projectId:e}),e&&(0,n.jsx)(a.Z,{projectId:e}),e&&(0,n.jsx)(o.Z,{projectId:e}),e&&(0,n.jsx)(l.Z,{projectId:e}),e&&(0,n.jsx)(d.Z,{projectId:e})]})}},75336:function(e,t,r){r(27530);var n=r(85893),i=r(6531),s=r(60974),a=r(5108),o=r(67294),l=r(51368),d=r(23972);let c=()=>{let{data:e,error:t}=(0,s.ZP)("/token/",i.V.simplePost);return{data:e,error:t,isLoading:!t&&!e}},u=()=>{let{data:e}=c();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"Your API key is:"}),(0,n.jsx)(l.Z,{defaultValue:e&&e.token}),(0,n.jsx)("p",{children:"Please copy this key as it will be not shown again."})]})},h=e=>{let{loading:t,onClick:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{children:"In order to access CI-Speed programmatically or from CLI tools, please generate an API key using the button below."}),(0,n.jsx)(a.Z,{loading:t,variant:"contained",onClick:r,loadingIndicator:"Generating...",children:"Generate API Key"})]})};t.Z=()=>{let e;let[t,r]=o.useState(!1);return e=t?(0,n.jsx)(u,{}):(0,n.jsx)(h,{loading:t,onClick:()=>{console.log("_generateClick()"),r(!0)}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{variant:"h2",component:"h3",children:"API Key"}),e]})}},84279:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(85893),i=r(89250),s=r(22233),a=r(66720),o=r(66294),l=r(56571),d=r(40890);let c=(0,n.jsx)(o.Z,{styles:{"pre.terminal":{color:"white",backgroundColor:"black",padding:"10px"}}});function u(){return(0,n.jsxs)(s.Z,{theme:l.Z,children:[(0,n.jsx)(a.ZP,{}),c,(0,n.jsx)(d.Z,{children:(0,n.jsx)(i.j3,{})})]})}},48852:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(85893),i=r(89250),s=r(92505),a=r(11957);function o(){return(0,n.jsx)(a.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(i.j3,{})})})}},27721:function(e,t,r){r(59560),r(59734),r(27530),r(40777);var n=r(85893),i=r(94658),s=r(79655),a=r(6531),o=r(60974),l=r(23972),d=r(13571),c=r(11333);let u=e=>e.map(e=>({id:e.id,created:e.created_at,fileName:e.file_name})),h=[{field:"created",headerName:"Created",width:160,valueFormatter:e=>(0,i.$)(e)},{field:"fileName",headerName:"File Name",width:160},{field:"id",headerName:"View",width:160,valueFormatter:e=>"/test_run/?id=".concat(e),renderCell:e=>{let t=e.formattedValue;return(0,n.jsx)(s.rU,{to:t,children:"View test run"})}}],j=[{field:"name",headerName:"Name",width:300},{field:"duration",headerName:"Duration",width:120},{field:"test_suite_id",headerName:"View",width:120,valueFormatter:e=>"/test_suite/?id=".concat(e),renderCell:e=>{let t=e.formattedValue;return(0,n.jsx)(s.rU,{to:t,children:"View test suite"})}}],x=e=>{let{data:t,error:r}=(0,o.ZP)("/builds/"+e,a.V.simpleGet),{data:n,error:i}=(0,o.ZP)(()=>({url:"/slow_test_cases/",params:{build_id:t.id+""}}),a.V.get),{data:s,error:l}=(0,o.ZP)(()=>({url:"/test_runs/",params:{build_id:t.id+""}}),a.V.get);return{data:{build:t,slowCases:n,testRuns:s},error:r||i||l,isLoading:{testRuns:!l&&!s,slowCases:!i&&!n}}};t.Z=()=>{let[e]=(0,s.lr)(),t=e.get("id"),r=[],i=[];if(!t)throw Error("No build ID given");let{data:a,error:o,isLoading:p}=x(t);if(o)throw o;return(null==a?void 0:a.testRuns)&&(r=u(a.testRuns)),(null==a?void 0:a.slowCases)&&(i=c.Z.transformRows(a.slowCases)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.Z,{variant:"h2",component:"h3",children:["Build ",a.build&&a.build.ref]}),(0,n.jsx)("p",{children:"Slowest 3 test cases for this build:"}),(0,n.jsx)(d.r,{rows:i,columns:j,isLoading:p.slowCases}),(0,n.jsx)("p",{children:"Test runs for this build:"}),(0,n.jsx)(d.r,{rows:r,columns:h,isLoading:p.testRuns})]})}},37769:function(e,t,r){var n=r(85893),i=r(23972),s=r(8681);t.Z=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",gutterBottom:!0,children:"Choose Project"}),(0,n.jsx)(s.Z,{})]})},90765:function(e,t,r){var n=r(85893),i=r(23972),s=r(47034),a=r(79655);t.Z=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",children:"Home"}),(0,n.jsx)("p",{children:"Welcome to CI-Speed."}),(0,n.jsx)(i.Z,{variant:"h3",component:"h4",children:"Quick start"}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(a.rU,{to:"/account",children:"Login via OAUTH with GitHub."})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.rU,{to:"/add_project",children:"Add a project."})}),(0,n.jsx)("li",{children:(0,n.jsx)(a.rU,{to:"/api_key",children:"Generate an API Key."})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.Z,{href:"https://github.com/thedumbterminal/ci-speed/wiki/Documentation",rel:"noopener",target:"_blank",children:"Upload test results."})})]})]})},69298:function(e,t,r){var n=r(85893),i=r(16491),s=r(23972),a=r(90965);t.Z=()=>(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(s.Z,{variant:"h2",component:"h3",children:"Login"}),(0,n.jsx)(i.Z,{})]})})},8872:function(e,t,r){r(59560),r(59734),r(40777);var n=r(85893),i=r(47034),s=r(79655),a=r(6531),o=r(60974),l=r(23972),d=r(94658),c=r(13571),u=r(1755);let h=e=>e.map(e=>({id:e.id,ref:e.ref,commitSha:e.commit_sha,commitUrl:e.commit_url,created:e.created_at})),j=[{field:"created",headerName:"Created",width:160,valueFormatter:e=>(0,d.$)(e)},{field:"ref",headerName:"Reference",width:160},{field:"commitSha",headerName:"Commit",width:160,renderCell:e=>{let t=e.formattedValue,r=e.row.commitUrl;return(0,n.jsx)(i.Z,{href:r,rel:"noopener",target:"_blank",title:"View commit on GitHub",children:t})}},{field:"id",headerName:"View",width:160,valueFormatter:e=>"/build/?id=".concat(e),renderCell:e=>{let t=e.formattedValue;return(0,n.jsx)(s.rU,{to:t,children:"View build"})}}],x=e=>{let{data:t,error:r}=(0,o.ZP)("/projects/"+e,a.V.simpleGet),{data:n,error:i}=(0,o.ZP)(()=>({url:"/builds/",params:{project_id:t.id+""}}),a.V.get);return{data:{project:t,builds:n},error:r||i,isLoading:!i&&!n}};t.Z=()=>{let e=[],t=(0,u.v)();if(!t)throw Error("No project ID given");let{data:r,error:i,isLoading:s}=x(t);if(i)throw i;return(null==r?void 0:r.builds)&&(e=h(r.builds)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{variant:"h2",component:"h3",children:"Project"}),(0,n.jsxs)("p",{children:["Builds for project ",(0,n.jsx)("b",{children:r.project&&r.project.name}),"."]}),(0,n.jsx)(c.r,{rows:e,columns:j,isLoading:s,sortModel:[{field:"created",sort:"desc"}]})]})}},35451:function(e,t,r){r(27530),r(40777);var n=r(85893),i=r(6531),s=r(60974),a=r(23972),o=r(79655);let l=e=>{let{data:t,error:r}=(0,s.ZP)("/skipped_tests/"+e,i.V.simpleGet),{data:n,error:a}=(0,s.ZP)(()=>"/test_cases/"+t.test_case_id,i.V.simpleGet);return{data:{testCase:n,skippedTests:t},error:a||r,isLoading:!r&&!t}};t.Z=()=>{var e,t;let[r]=(0,o.lr)(),i=r.get("id");if(!i)throw Error("No test case ID given");let{data:s,error:d}=l(i);if(d)throw d;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{variant:"h2",component:"h3",children:"Skipped Test"}),(0,n.jsxs)("p",{children:["Skipped test reason for test case ",(0,n.jsx)("b",{children:null==s?void 0:null===(e=s.testCase)||void 0===e?void 0:e.name}),"."]}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{className:"terminal",children:(0,n.jsx)("code",{children:null==s?void 0:null===(t=s.skippedTests)||void 0===t?void 0:t.reason})})]})}},10016:function(e,t,r){var n=r(85893),i=r(23972),s=r(34719),a=r(67775),o=r(1755),l=r(89250),d=r(11957);t.Z=()=>{let e=(0,o.v)();return(0,d.a)()?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{variant:"h2",component:"h3",gutterBottom:!0,children:"Summary"}),e&&(0,n.jsx)(s.Z,{projectId:e}),e&&(0,n.jsx)(a.Z,{projectId:e})]}):(console.log("Redirecting to login..."),(0,n.jsx)(l.Fg,{to:"/login"}))}},67059:function(e,t,r){r(27530),r(40777);var n=r(85893),i=r(6531),s=r(60974),a=r(23972),o=r(79655);let l=e=>{let{data:t,error:r}=(0,s.ZP)("/test_failures/"+e,i.V.simpleGet),{data:n,error:a}=(0,s.ZP)(()=>"/test_cases/"+t.test_case_id,i.V.simpleGet);return{data:{testCase:n,testFailures:t},error:a||r,isLoading:!r&&!t}};t.Z=()=>{var e,t;let[r]=(0,o.lr)(),i=r.get("id");if(!i)throw Error("No test case ID given");let{data:s,error:d}=l(i);if(d)throw d;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{variant:"h2",component:"h3",children:"Test Failure"}),(0,n.jsxs)("p",{children:["Test failure reason for test case ",(0,n.jsx)("b",{children:null==s?void 0:null===(e=s.testCase)||void 0===e?void 0:e.name}),"."]}),(0,n.jsx)("br",{}),(0,n.jsx)("pre",{className:"terminal",children:(0,n.jsx)("code",{children:null==s?void 0:null===(t=s.testFailures)||void 0===t?void 0:t.reason})})]})}},1364:function(e,t,r){r(59560),r(59734),r(27530),r(40777);var n=r(85893),i=r(6531),s=r(79655),a=r(60974),o=r(23972),l=r(13571);let d=e=>e.map(e=>({id:e.id,name:e.name,duration:e.time})),c=[{field:"name",headerName:"Name",width:160},{field:"duration",headerName:"Duration",width:160},{field:"id",headerName:"View",width:160,valueFormatter:e=>"/test_suite/?id=".concat(e),renderCell:e=>{let t=e.formattedValue;return(0,n.jsx)(s.rU,{to:t,children:"View test suite"})}}],u=e=>{let{data:t,error:r}=(0,a.ZP)("/test_runs/"+e,i.V.simpleGet),{data:n,error:s}=(0,a.ZP)(()=>({url:"/test_suites/",params:{test_run_id:t.id}}),i.V.get);return{data:{testRun:t,testSuites:n},error:r||s,isLoading:!s&&!n}};t.Z=()=>{let[e]=(0,s.lr)(),t=e.get("id"),r=[];if(!t)throw Error("No test run ID given");let{data:i,error:a,isLoading:h}=u(t);if(a)throw a;return(null==i?void 0:i.testSuites)&&(r=d(i.testSuites)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{variant:"h2",component:"h3",children:"Test Run"}),(0,n.jsxs)("p",{children:["Test suites for test run ",(0,n.jsx)("b",{children:i.testRun&&i.testRun.id}),"."]}),(0,n.jsx)(l.r,{rows:r,columns:c,isLoading:h})]})}},13484:function(e,t,r){r(27530),r(40777);var n=r(85893),i=r(6531),s=r(60974),a=r(23972),o=r(79655),l=r(13571),d=r(11333);let c=e=>"/test_failure/?id=".concat(e),u=e=>"/skipped_test/?id=".concat(e),h=[{field:"name",headerName:"Name",width:300},{field:"duration",headerName:"Duration",width:120},{field:"status",headerName:"Status",width:120},{field:"view",headerName:"View",width:120,renderCell:e=>{let t=e.row.failure_id,r=e.row.skipped_id;if(t){let e=c(t);return(0,n.jsx)(o.rU,{to:e,children:"View"})}if(r){let e=u(r);return(0,n.jsx)(o.rU,{to:e,children:"View"})}}}],j=e=>{let{data:t,error:r}=(0,s.ZP)("/test_suites/"+e,i.V.simpleGet),{data:n,error:a}=(0,s.ZP)(()=>({url:"/test_cases/",params:{test_suite_id:e}}),i.V.get);return{data:{testSuite:t,testCases:n},error:r||a,isLoading:!a&&!n}};t.Z=()=>{let[e]=(0,o.lr)(),t=e.get("id"),r=[];if(!t)throw Error("No test suite ID given");let{data:i,error:s,isLoading:c}=j(t);if(s)throw s;return(null==i?void 0:i.testCases)&&(r=d.Z.transformRows(i.testCases)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{variant:"h2",component:"h3",children:"Test Suite"}),(0,n.jsxs)("p",{children:["Test cases for test suite ",(0,n.jsx)("b",{children:i.testSuite&&i.testSuite.name}),"."]}),(0,n.jsx)(l.r,{rows:r,columns:h,isLoading:c})]})}},56571:function(e,t,r){var n=r(10185),i=r(60265);let s=(0,n.Z)({palette:{primary:{main:"#3f50b5"},secondary:{main:"#683fb5"},error:{main:i.Z.A400}}});t.Z=s},67510:function(e,t){var r,n;(n=r||(r={})).DateTime="DateTime",n.Date="Date",t.Z=r},18925:function(){}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};r.t=function(n,i){if(1&i&&(n=this(n)),8&i||"object"==typeof n&&n&&(4&i&&n.__esModule||16&i&&"function"==typeof n.then))return n;var s=Object.create(null);r.r(s);var a={};e=e||[null,t({}),t([]),t(t)];for(var o=2&i&&n;"object"==typeof o&&!~e.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach(function(e){a[e]=function(){return n[e]}});return a.default=function(){return n},r.d(s,a),s}})(),r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=[];r.O=function(t,n,i,s){if(n){s=s||0;for(var a=e.length;a>0&&e[a-1][2]>s;a--)e[a]=e[a-1];e[a]=[n,i,s];return}for(var o=1/0,a=0;a<e.length;a++){for(var n=e[a][0],i=e[a][1],s=e[a][2],l=!0,d=0;d<n.length;d++)(!1&s||o>=s)&&Object.keys(r.O).every(function(e){return r.O[e](n[d])})?n.splice(d--,1):(l=!1,s<o&&(o=s));if(l){e.splice(a--,1);var c=i();void 0!==c&&(t=c)}}return t}})(),(()=>{var e={980:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i=n[0],s=n[1],a=n[2],o,l,d=0;if(i.some(function(t){return 0!==e[t]})){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(a)var c=a(r)}for(t&&t(n);d<i.length;d++)l=i[d],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(c)},n=self.webpackChunkci_speed_ui=self.webpackChunkci_speed_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,["126","72","707","361","118","158"],function(){return r("17204")});n=r.O(n)})();