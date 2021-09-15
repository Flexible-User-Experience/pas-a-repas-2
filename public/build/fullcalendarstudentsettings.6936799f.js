(self.webpackChunk=self.webpackChunk||[]).push([[491],{6369:(e,t,o)=>{"use strict";var n=o(9665),s=o(6842),r=o(8658),i=o(1996),a=o(9563),u=o(1323),l=o(9337),c=o(5101),d=o.n(c),h=o(8501);d().setRoutingData(h),document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("calendar-holder"),t=e.dataset.eventsUrl;new n.faS(e,{plugins:[s.ZP,r.ZP,i.ZP,a.Z,u.Z],initialView:"timeGridWeek",timeZone:"UTC",headerToolbar:{start:"prev today next",center:"title",end:"timeGridDay,timeGridWeek,dayGridMonth listWeek"},views:{timeGrid:{nowIndicator:!0,allDaySlot:!1,slotLabelFormat:{hour:"2-digit",minute:"2-digit",omitZeroMinute:!1,meridiem:"short"},scrollTime:"09:00:00",slotMinTime:"08:00:00",slotMaxTime:"23:00:00",hiddenDays:[0]}},height:735,locale:l.Z,timeFormat:"HH:mm",firstDay:1,lazyFetching:!1,editable:!1,navLinks:!0,eventLimit:!0,businessHours:!1,displayEventTime:!0,fixedWeekCount:!1,weekNumbers:!1,defaultView:"timeGridWeek",themeSystem:"bootstrap3",googleCalendarApiKey:"AIzaSyCZZYZV-LqX2qDtggiEo1GmeNhxe3SAhfI",eventSources:[{googleCalendarId:"es.spain#holiday@group.v.calendar.google.com",backgroundColor:"#FED3D7",textColor:"#FF0000",color:"#FED3D7"},{url:t,type:"POST",data:{},error:function(e){console.error("error!",e.responseText)}}]}).render()}))},5101:function(e,t,o){var n,s,r,i;function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o(9601),o(2526),o(1817),o(1539),o(2165),o(6992),o(8783),o(3948),o(9070),o(3371),o(4603),o(4916),o(9714),o(9554),o(4747),o(2772),o(7941),o(9600),o(5306),i=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},o="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function(){function s(t,o){e(this,s),this.context_=t||{base_url:"",prefix:"",host:"",port:"",scheme:"",locale:""},this.setRoutes(o||{})}return n(s,[{key:"setRoutingData",value:function(e){this.setBaseUrl(e.base_url),this.setRoutes(e.routes),"prefix"in e&&this.setPrefix(e.prefix),"port"in e&&this.setPort(e.port),"locale"in e&&this.setLocale(e.locale),this.setHost(e.host),this.setScheme(e.scheme)}},{key:"setRoutes",value:function(e){this.routes_=Object.freeze(e)}},{key:"getRoutes",value:function(){return this.routes_}},{key:"setBaseUrl",value:function(e){this.context_.base_url=e}},{key:"getBaseUrl",value:function(){return this.context_.base_url}},{key:"setPrefix",value:function(e){this.context_.prefix=e}},{key:"setScheme",value:function(e){this.context_.scheme=e}},{key:"getScheme",value:function(){return this.context_.scheme}},{key:"setHost",value:function(e){this.context_.host=e}},{key:"getHost",value:function(){return this.context_.host}},{key:"setPort",value:function(e){this.context_.port=e}},{key:"getPort",value:function(){return this.context_.port}},{key:"setLocale",value:function(e){this.context_.locale=e}},{key:"getLocale",value:function(){return this.context_.locale}},{key:"buildQueryParams",value:function(e,t,n){var s=this,r=void 0,i=new RegExp(/\[\]$/);if(t instanceof Array)t.forEach((function(t,r){i.test(e)?n(e,t):s.buildQueryParams(e+"["+("object"===(void 0===t?"undefined":o(t))?r:"")+"]",t,n)}));else if("object"===(void 0===t?"undefined":o(t)))for(r in t)this.buildQueryParams(e+"["+r+"]",t[r],n);else n(e,t)}},{key:"getRoute",value:function(e){var t=[this.context_.prefix+e,e+"."+this.context_.locale,this.context_.prefix+e+"."+this.context_.locale,e];for(var o in t)if(t[o]in this.routes_)return this.routes_[t[o]];throw new Error('The route "'+e+'" does not exist.')}},{key:"generate",value:function(e,o){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.getRoute(e),i=o||{},a=t({},i),u="",l=!0,c="",d=void 0===this.getPort()||null===this.getPort()?"":this.getPort();if(r.tokens.forEach((function(t){if("text"===t[0])return u=s.encodePathComponent(t[1])+u,void(l=!1);if("variable"!==t[0])throw new Error('The token type "'+t[0]+'" is not supported.');var o=r.defaults&&t[3]in r.defaults;if(!1===l||!o||t[3]in i&&i[t[3]]!=r.defaults[t[3]]){var n=void 0;if(t[3]in i)n=i[t[3]],delete a[t[3]];else{if(!o){if(l)return;throw new Error('The route "'+e+'" requires the parameter "'+t[3]+'".')}n=r.defaults[t[3]]}if(!0!==n&&!1!==n&&""!==n||!l){var c=s.encodePathComponent(n);"null"===c&&null===n&&(c=""),u=t[1]+c+u}l=!1}else o&&t[3]in a&&delete a[t[3]]})),""===u&&(u="/"),r.hosttokens.forEach((function(e){var t=void 0;return"text"===e[0]?void(c=e[1]+c):void("variable"===e[0]&&(e[3]in i?(t=i[e[3]],delete a[e[3]]):r.defaults&&e[3]in r.defaults&&(t=r.defaults[e[3]]),c=e[1]+t+c))})),u=this.context_.base_url+u,r.requirements&&"_scheme"in r.requirements&&this.getScheme()!=r.requirements._scheme){var h=c||this.getHost();u=r.requirements._scheme+"://"+h+(h.indexOf(":"+d)>-1||""===d?"":":"+d)+u}else if(void 0!==r.schemes&&void 0!==r.schemes[0]&&this.getScheme()!==r.schemes[0]){var f=c||this.getHost();u=r.schemes[0]+"://"+f+(f.indexOf(":"+d)>-1||""===d?"":":"+d)+u}else c&&this.getHost()!==c+(c.indexOf(":"+d)>-1||""===d?"":":"+d)?u=this.getScheme()+"://"+c+(c.indexOf(":"+d)>-1||""===d?"":":"+d)+u:!0===n&&(u=this.getScheme()+"://"+this.getHost()+(this.getHost().indexOf(":"+d)>-1||""===d?"":":"+d)+u);if(Object.keys(a).length>0){var m=void 0,p=[],v=function(e,t){t=null===(t="function"==typeof t?t():t)?"":t,p.push(s.encodeQueryComponent(e)+"="+s.encodeQueryComponent(t))};for(m in a)this.buildQueryParams(m,a[m],v);u=u+"?"+p.join("&")}return u}}],[{key:"getInstance",value:function(){return r}},{key:"setData",value:function(e){s.getInstance().setRoutingData(e)}},{key:"customEncodeURIComponent",value:function(e){return encodeURIComponent(e).replace(/%2F/g,"/").replace(/%40/g,"@").replace(/%3A/g,":").replace(/%21/g,"!").replace(/%3B/g,";").replace(/%2C/g,",").replace(/%2A/g,"*").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/'/g,"%27")}},{key:"encodePathComponent",value:function(e){return s.customEncodeURIComponent(e).replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%21/g,"!").replace(/%7C/g,"|")}},{key:"encodeQueryComponent",value:function(e){return s.customEncodeURIComponent(e).replace(/%3F/g,"?")}}]),s}();s.Route,s.Context;var r=new s;return{Router:s,Routing:r}}(),s=[],n=i.Routing,void 0===(r="function"==typeof n?n.apply(t,s):n)||(e.exports=r)},8501:e=>{"use strict";e.exports=JSON.parse('{"base_url":"","routes":{"fc_load_events":{"tokens":[["text","/admin/fc-load-events"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"sonata_admin_dashboard":{"tokens":[["text","/admin/dashboard"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_studentabsence_notification":{"tokens":[["text","/notification"],["variable","/","[^/]++","id"],["text","/admin/students/absence"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiget":{"tokens":[["text","/api/get"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apiattendedclass":{"tokens":[["text","/attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_event_apinotattendedclass":{"tokens":[["text","/not-attended-the-class"],["variable","/","[^/]++","student"],["text","/api"],["variable","/","[^/]++","id"],["text","/admin/classrooms/timetable"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"admin_app_filedummy_exportCalendarPdfList":{"tokens":[["variable","/","[^/]++","end"],["text","/to"],["variable","/","[^/]++","start"],["text","/admin/extras/export-calendar-pdf-list/from"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]}},"prefix":"","host":"localhost","port":"","scheme":"http","locale":[]}')}},e=>{e.O(0,[473,560],(()=>{return t=6369,e(e.s=t);var t}));e.O()}]);