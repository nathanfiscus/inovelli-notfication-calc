(this["webpackJsonpinovelli-notification-util"]=this["webpackJsonpinovelli-notification-util"]||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/Inovelli-LZW30-SN.b878040d.gif"},56:function(e,t,a){e.exports=a(75)},75:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),o=a(13),c=a(27),s=a(20),u=a(42),m=a(43),p=a(49),d=a(76),v=a(114),h=a(107),f=a(108),E=a(115),g=a(113),b=a(117),y=a(118),w=a(111),C=a(112),O=a(41),k=a(4),S=a(47),x=a.n(S),j=a(48),V=a.n(j),B=a(44),D=a.n(B);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var W=new(a(61))({colors:["red","orange","yellow","green","cyan","blue","violet","red"],steps:256,model:"rgb"}).toArray("hex"),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).setValue=function(e){return function(t,n){a.setState(Object(o.a)({},e,"color"===e||"level"===e?n:t.target.value),(function(){a.setState((function(e){return{value:parseInt(e.color)+256*e.level+65536*e.duration+16777216*e.effect}}))}))}},a.handleCopy=function(){a.configValue.current&&(a.configValue.current.select(),document.execCommand("copy"))},a.state={color:"1",duration:"255",level:"10",effect:"1",value:"33488897"},a.configValue=l.a.createRef(),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="",t={};switch(t.opacity=this.state.level/10,this.state.effect){case"2":e+=" ".concat(this.props.classes.fastBlink);break;case"3":e+=" ".concat(this.props.classes.slowBlink);break;case"4":e+=" ".concat(this.props.classes.strobe)}return this.state.duration,e+=" ".concat(this.props.classes.forever),l.a.createElement("div",{className:this.props.classes.root},l.a.createElement(d.a,{variant:"h2"},"Inovelli Notification Calculator"),l.a.createElement("div",{className:this.props.classes.switchWrapper},l.a.createElement("div",{className:this.props.classes.switchContainer},l.a.createElement("img",{alt:"Inovelli-LZW30-SN",src:D.a,height:"600px",width:"400px"}),l.a.createElement("span",{id:"notification-led",className:this.props.classes.notificationLED+e,style:I({backgroundColor:W[parseInt(this.state.color)],zIndex:"2"},t)}),l.a.createElement("span",{id:"notification-led",className:this.props.classes.notificationLED})),l.a.createElement("div",null,l.a.createElement(d.a,{variant:"h4",gutterBottom:!0},"Options"),l.a.createElement(d.a,{id:"discrete-slider",gutterBottom:!0},"Color"),l.a.createElement("div",{className:this.props.classes.colorHelper}),l.a.createElement(v.a,{defaultValue:1,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,min:1,max:255,value:this.state.color,onChange:this.setValue("color")}),l.a.createElement(d.a,{gutterBottom:!0},"Brightness Level"),l.a.createElement(h.a,{container:!0,spacing:2},l.a.createElement(h.a,{item:!0},l.a.createElement(x.a,null)),l.a.createElement(h.a,{item:!0,xs:!0},l.a.createElement(v.a,{value:this.state.level,valueLabelDisplay:"auto",min:0,max:10,onChange:this.setValue("level")})),l.a.createElement(h.a,{item:!0},l.a.createElement(V.a,null))),l.a.createElement(f.a,{fullWidth:!0,margin:"normal"},l.a.createElement(E.a,null,"Duration"),l.a.createElement(g.a,{value:this.state.duration,onChange:this.setValue("duration")},l.a.createElement(b.a,{value:"1"},"1 Seconds"),l.a.createElement(b.a,{value:"2"},"2 Seconds"),l.a.createElement(b.a,{value:"3"},"3 Seconds"),l.a.createElement(b.a,{value:"4"},"4 Seconds"),l.a.createElement(b.a,{value:"5"},"5 Seconds"),l.a.createElement(b.a,{value:"6"},"6 Seconds"),l.a.createElement(b.a,{value:"7"},"7 Seconds"),l.a.createElement(b.a,{value:"8"},"8 Seconds"),l.a.createElement(b.a,{value:"9"},"9 Seconds"),l.a.createElement(b.a,{value:"10"},"10 Seconds"),l.a.createElement(b.a,{value:"20"},"20 Seconds"),l.a.createElement(b.a,{value:"30"},"30 Seconds"),l.a.createElement(b.a,{value:"40"},"40 Seconds"),l.a.createElement(b.a,{value:"50"},"50 Seconds"),l.a.createElement(b.a,{value:"60"},"1 Minute"),l.a.createElement(b.a,{value:"120"},"2 Minutes"),l.a.createElement(b.a,{value:"180"},"3 Minutes"),l.a.createElement(b.a,{value:"240"},"4 Minutes"),l.a.createElement(b.a,{value:"255"},"Indefinitely"))),l.a.createElement(f.a,{fullWidth:!0,margin:"normal"},l.a.createElement(E.a,null,"Effect"),l.a.createElement(g.a,{value:this.state.effect,onChange:this.setValue("effect")},l.a.createElement(b.a,{value:"1"},"Solid"),l.a.createElement(b.a,{value:"2"},"Strobe\\Fast Blink"),l.a.createElement(b.a,{value:"3"},"Slow Blink"),l.a.createElement(b.a,{value:"4"},"Pulse"))),l.a.createElement(y.a,{style:{marginTop:"60px"},value:this.state.value,readOnly:!0,label:"Configuration Value",fullWidth:!0,margin:"normal",variant:"outlined",inputRef:this.configValue,InputProps:{endAdornment:l.a.createElement(w.a,{position:"end"},l.a.createElement(C.a,{edge:"end",onClick:this.handleCopy},l.a.createElement(O.a,null,l.a.createElement("svg",{viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})))))}}))))}}]),t}(l.a.Component),H=Object(k.a)((function(e){return{"@global":{"@keyframes pulse":{"50%":{background:"#CCCCCC"}},"@keyframes blink":{"50%":{opacity:"0.0"}}},switchWrapper:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center","&>*":{minWidth:"400px"}},switchContainer:{position:"relative"},notificationLED:{position:"absolute",width:"7px",height:"38px",backgroundColor:"#CCCCCC",bottom:"161px",right:"129px"},colorHelper:{height:"10px",width:"100%",background:"linear-gradient(to right, red, orange , yellow, green, cyan, blue, violet,red)"},forever:{animationIterationCount:"infinite"},strobe:{animationDuration:"1s",animationName:"pulse"},fastBlink:{animationDuration:"0.80s",animationName:"blink",animationTimingFunction:"step-start"},slowBlink:{animationDuration:"2s",animationName:"blink",animationTimingFunction:"step-start"}}}))(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.97ecdccb.chunk.js.map