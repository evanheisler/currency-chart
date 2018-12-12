(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(33)},30:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),c=t.n(s),o=t(5),l=t(3),i=t(4),u=t(1),m={},d={},p=Object(l.b)({base:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_BASE":return a.payload;default:return e}},currentRates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_EXCHANGE_RATES":var t=a.payload,n=t.base,r=t.date,s=t.rates;return Object(u.a)({},e,Object(i.a)({},n,{date:r,rates:s}));default:return e}},previousRates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PREV_EXCHANGE_RATES":var t=a.payload,n=t.base,r=t.date,s=t.rates;return Object(u.a)({},e,Object(i.a)({},n,{date:r,rates:s}));default:return e}}}),v=Object(l.c)(p),h=(t(30),t(15)),E=t(16),g=t(18),f=t(17),b=t(19),y=function(e){var a=e.json();return e.status>=200&&e.status<300?a:a.then(function(e){throw e})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EUR",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"latest";return new Promise(function(t,n){fetch("https://api.exchangeratesapi.io/".concat(a,"?base=").concat(e)).then(y).then(function(e){t(e)}).catch(function(e){n(new Error(e))})})},N=t(20),k=t(7),R=t.n(k);function S(){return(S=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var x=r.a.createElement("g",{fill:"none",fillRule:"evenodd",strokeWidth:2},r.a.createElement("circle",{cx:22,cy:22,r:1},r.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:22,cy:22,r:1},r.a.createElement("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}))),O=function(e){return r.a.createElement("svg",S({width:44,height:44,viewBox:"0 0 44 44",stroke:"#000"},e),x)};t.p;function j(){return(j=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var C=r.a.createElement("path",{d:"M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm17-1h-4v8h-2v-8h-4l5-6 5 6z"}),T=function(e){return r.a.createElement("svg",j({width:24,height:24,viewBox:"0 0 24 24"},e),C)},V=(t.p,function(e){var a=e.data,t=a.symbol,n=a.currency,s=a.currentRate,c=a.previousRate,o=e.sample,l="---";return null!==c&&(l=s>c?r.a.createElement(T,null):s===c?"---":r.a.createElement(T,{className:"down"})),r.a.createElement("div",{className:"row table-row"},r.a.createElement("div",{className:"col-2 px-1"},n),r.a.createElement("div",{className:"col-3 px-1"},s),r.a.createElement("div",{className:"col-2 trending px-1"},l),r.a.createElement("div",{className:"col-4 offset-md-1 converted-value px-1"},r.a.createElement("span",{className:"mr-1 text-muted"},t),(o*s).toFixed(2)))});V.defaultProps={data:{symbol:"",currency:"",currentRate:0,previousRate:0},sample:0};var A=V,P=function(e){for(var a=e.loading,t=e.status,n=e.conversionValue,s=Object(N.a)(e,["loading","status","conversionValue"]),c=[],o=0;o<5;o++)c.push(r.a.createElement("div",{key:o,className:"row table-row"}));if(a)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message-overlay"},r.a.createElement(O,null)),c);if(!s.rows)return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"message-overlay"},r.a.createElement("span",{className:"lead text-black-50 p-3"},t)),c);var l=Object.keys(s.rows.rates).map(function(e){return{symbol:R()(e),currency:e,currentRate:s.rows.rates[e],previousRate:s.previous.rates[e]}});return r.a.createElement(r.a.Fragment,null,l.map(function(e){return r.a.createElement(A,{key:e.currency,data:e,sample:n})}))};P.defaultProps={loading:!1,status:"Checking Service\u2026"};var _=Object(o.b)(function(e){return{rows:e.currentRates[e.base],previous:e.previousRates[e.base]}})(P),B=function(e){var a=e.options,t=e.change;return r.a.createElement("select",{className:"bg-white form-control",defaultValue:"Select",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:"Select",disabled:!0},"Select\u2026"),a.length>0&&r.a.createElement("option",{value:"EUR"},"EUR"),a.map(function(e){return r.a.createElement("option",{key:e,value:e},e)}))},M=function(e){return r.a.createElement("div",{className:"modal fade show",tabIndex:"-1",role:"dialog","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},e.msg),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e.dismiss},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),e.description&&r.a.createElement("div",{className:"modal-body"},"..."),e.action&&r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn btn-secondary",onClick:e.action},e.actionLabel)))))},D=function(e){var a=e.base,t=e.conversionValue,n=e.change;return r.a.createElement("div",{className:"row table-heading"},r.a.createElement("div",{className:"col-2 px-1"},"Origin"),r.a.createElement("div",{className:"col-3 px-1"}," Rate "),r.a.createElement("div",{className:"col-2 px-1"},r.a.createElement("span",{className:"d-none d-sm-block"},"Trending")),r.a.createElement("div",{className:"col-4 offset-md-1 px-1"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},R()(a))),r.a.createElement("input",{type:"number",className:"form-control","aria-label":"Amount (to the nearest dollar)",value:t,onChange:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text"},".00")))))};D.defaultProps={base:"",conversionValue:0,change:function(){}};var F=D,G=function(e){function a(){var e,t;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(g.a)(this,(e=Object(f.a)(a)).call.apply(e,[this].concat(r)))).state={status:"",loading:!1,currencies:[],modal:{show:!1,msg:""},conversionValue:1500},t.handleCurrencyChange=function(e){t.props.availableRates[e]?t.props.setBase(e):w(e).then(function(a){var n=new Date(a.date);n.setDate(n.getDate()-1),n=n.toISOString().split("T")[0],w(e,n).then(function(e){t.props.setPreviousRates(e)}).then(function(){t.props.setExchangeRates(a),t.props.setBase(e)})})},t.handleConversionValue=function(e){t.setState({conversionValue:parseInt(e.target.value,10)})},t}return Object(b.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0,status:"Checking Service\u2026"},function(){w().then(function(a){e.setState({loading:!1,currencies:Object.keys(a.rates).map(function(e){return e}),status:"Please select a base currency"})}).catch(function(){e.setState({loading:!1,modal:{show:!0,msg:"Sorry we are having trouble connecting or that currency is not available. Please try again."}})})})}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.status,s=a.currencies,c=a.modal,o=a.conversionValue;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto"},r.a.createElement("div",{className:"row mt-5 mb-2"},r.a.createElement("div",{className:"col col-md-4 ml-auto px-0 text-right"},r.a.createElement(B,{options:s,change:this.handleCurrencyChange}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto mb-5 pb-5 bg-white rounded"},r.a.createElement(F,{base:this.props.base,conversionValue:o,change:this.handleConversionValue}),r.a.createElement(_,{loading:t,status:n,conversionValue:o}))),c.show&&r.a.createElement(M,{msg:c.msg,action:function(){return window.location.reload()},actionLabel:"Refresh",dismiss:function(){e.setState(function(e){return{modal:{show:!e.modal.show}}})}}))}}]),a}(n.Component),H=Object(o.b)(function(e){return{availableRates:e.currentRates,base:e.base}},{setExchangeRates:function(e){return{type:"SET_EXCHANGE_RATES",payload:Object(u.a)({},e)}},setPreviousRates:function(e){return{type:"SET_PREV_EXCHANGE_RATES",payload:Object(u.a)({},e)}},setBase:function(e){return{type:"SET_BASE",payload:e}}})(G);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=document.getElementById("root");c.a.render(r.a.createElement(o.a,{store:v},r.a.createElement(H,null)),I),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.95cd8853.chunk.js.map