var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(e){"use strict";var t=e.GreenSockGlobals||e,i=function(e){var i,n="com.greensock.utils".split("."),s=t;for(i=0;i<n.length;i++)s[n[i]]=s=s[n[i]]||{};return s}(),n=function(e){var t=e.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=n(e)}else if(3===t||4===t)return e.nodeValue;return i},s=document,o=s.defaultView?s.defaultView.getComputedStyle:function(){},r=/([A-Z])/g,a=function(e,t,i,n){var s;return(i=i||o(e,null))?s=(e=i.getPropertyValue(t.replace(r,"-$1").toLowerCase()))||i.length?e:i[t]:e.currentStyle&&(s=(i=e.currentStyle)[t]),n?s:parseInt(s,10)||0},l=function(e){return!!(e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},h=/(?:\r|\n|\t\t)/g,d=/(?:\s\s+)/g,p=127462,u=127487,f=function(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536},c=" style='position:relative;display:inline-block;"+(s.all&&!s.addEventListener?"*display:inline;*zoom:1;'":"'"),g=function(e,t){var i=-1!==(e=e||"").indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+c+(e?" class='"+e+(i?n++:"")+"'>":">")}},m=i.SplitText=t.SplitText=function(e,t){if("string"==typeof e&&(e=m.selector(e)),!e)throw"cannot split a null element.";this.elements=l(e)?function(e){var t,i,n,s=[],o=e.length;for(t=0;o>t;t++)if(i=e[t],l(i))for(n=i.length,n=0;n<i.length;n++)s.push(i[n]);else s.push(i);return s}(e):[e],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},this.split(t)},v=function(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)v(e,t,i);else(3===n||4===n)&&(e.nodeValue=e.nodeValue.split(t).join(i))},y=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},b=function(e){var t,i=[],n=e.length;for(t=0;t!==n;i.push(e[t++]));return i},x=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}return!1},S=function(e){var t,i,n=b(e.childNodes),s=n.length;for(t=0;s>t;t++)(i=n[t])._isSplit?S(i):(t&&3===i.previousSibling.nodeType?i.previousSibling.nodeValue+=3===i.nodeType?i.nodeValue:i.firstChild.nodeValue:3!==i.nodeType&&e.insertBefore(i.firstChild,i),e.removeChild(i))},w=function(e,t,i,n,r,l,h){var d,p,u,f,c,g,m,b,w,_,E,C,T=o(e),L=a(e,"paddingLeft",T),A=-999,N=a(e,"borderBottomWidth",T)+a(e,"borderTopWidth",T),I=a(e,"borderLeftWidth",T)+a(e,"borderRightWidth",T),k=a(e,"paddingTop",T)+a(e,"paddingBottom",T),M=a(e,"paddingLeft",T)+a(e,"paddingRight",T),W=.2*a(e,"fontSize"),B=a(e,"textAlign",T,!0),j=[],D=[],F=[],O=t.wordDelimiter||" ",$=t.span?"span":"div",q=t.type||t.split||"chars,words,lines",H=r&&-1!==q.indexOf("lines")?[]:null,K=-1!==q.indexOf("words"),P=-1!==q.indexOf("chars"),R="absolute"===t.position||!0===t.absolute,V=t.linesClass,Q=-1!==(V||"").indexOf("++"),G=[];for(H&&1===e.children.length&&e.children[0]._isSplit&&(e=e.children[0]),Q&&(V=V.split("++").join("")),u=(p=e.getElementsByTagName("*")).length,c=[],d=0;u>d;d++)c[d]=p[d];if(H||R)for(d=0;u>d;d++)((g=(f=c[d]).parentNode===e)||R||P&&!K)&&(C=f.offsetTop,H&&g&&Math.abs(C-A)>W&&"BR"!==f.nodeName&&(m=[],H.push(m),A=C),R&&(f._x=f.offsetLeft,f._y=C,f._w=f.offsetWidth,f._h=f.offsetHeight),H&&((f._isSplit&&g||!P&&g||K&&g||!K&&f.parentNode.parentNode===e&&!f.parentNode._isSplit)&&(m.push(f),f._x-=L,x(f,e,O)&&(f._wordEnd=!0)),"BR"===f.nodeName&&f.nextSibling&&"BR"===f.nextSibling.nodeName&&H.push([])));for(d=0;u>d;d++)g=(f=c[d]).parentNode===e,"BR"!==f.nodeName?(R&&(w=f.style,K||g||(f._x+=f.parentNode._x,f._y+=f.parentNode._y),w.left=f._x+"px",w.top=f._y+"px",w.position="absolute",w.display="block",w.width=f._w+1+"px",w.height=f._h+"px"),!K&&P?f._isSplit?(f._next=f.nextSibling,f.parentNode.appendChild(f)):f.parentNode._isSplit?(f._parent=f.parentNode,!f.previousSibling&&f.firstChild&&(f.firstChild._isFirst=!0),f.nextSibling&&" "===f.nextSibling.textContent&&!f.nextSibling.nextSibling&&G.push(f.nextSibling),f._next=f.nextSibling&&f.nextSibling._isFirst?null:f.nextSibling,f.parentNode.removeChild(f),c.splice(d--,1),u--):g||(C=!f.nextSibling&&x(f.parentNode,e,O),f.parentNode._parent&&f.parentNode._parent.appendChild(f),C&&f.parentNode.appendChild(s.createTextNode(" ")),t.span&&(f.style.display="inline"),j.push(f)):f.parentNode._isSplit&&!f._isSplit&&""!==f.innerHTML?D.push(f):P&&!f._isSplit&&(t.span&&(f.style.display="inline"),j.push(f))):H||R?(f.parentNode&&f.parentNode.removeChild(f),c.splice(d--,1),u--):K||e.appendChild(f);for(d=G.length;--d>-1;)G[d].parentNode.removeChild(G[d]);if(H){for(R&&(_=s.createElement($),e.appendChild(_),E=_.offsetWidth+"px",C=_.offsetParent===e?0:e.offsetLeft,e.removeChild(_)),w=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(b=" "===O&&(!R||!K&&!P),d=0;d<H.length;d++){for(m=H[d],(_=s.createElement($)).style.cssText="display:block;text-align:"+B+";position:"+(R?"absolute;":"relative;"),V&&(_.className=V+(Q?d+1:"")),F.push(_),u=m.length,p=0;u>p;p++)"BR"!==m[p].nodeName&&(f=m[p],_.appendChild(f),b&&f._wordEnd&&_.appendChild(s.createTextNode(" ")),R&&(0===p&&(_.style.top=f._y+"px",_.style.left=L+C+"px"),f.style.top="0px",C&&(f.style.left=f._x-C+"px")));0===u?_.innerHTML="&nbsp;":K||P||(S(_),v(_,String.fromCharCode(160)," ")),R&&(_.style.width=E,_.style.height=f._h+"px"),e.appendChild(_)}e.style.cssText=w}R&&(h>e.clientHeight&&(e.style.height=h-k+"px",e.clientHeight<h&&(e.style.height=h+N+"px")),l>e.clientWidth&&(e.style.width=l-M+"px",e.clientWidth<l&&(e.style.width=l+I+"px"))),y(i,j),y(n,D),y(r,F)},_=function(e,t,i,o){var r,l,c=b(e.childNodes),g=c.length,m="absolute"===t.position||!0===t.absolute;if(3!==e.nodeType||g>1){for(t.absolute=!1,r=0;g>r;r++)(3!==(l=c[r]).nodeType||/\S+/.test(l.nodeValue))&&(m&&3!==l.nodeType&&"inline"===a(l,"display",null,!0)&&(l.style.display="inline-block",l.style.position="relative"),l._isSplit=!0,_(l,t,i,o));return t.absolute=m,void(e._isSplit=!0)}!function(e,t,i,o){var r,a,l,c,g,m,y,b,x,S=t.span?"span":"div",w=t.type||t.split||"chars,words,lines",_=(w.indexOf("words"),-1!==w.indexOf("chars")),E="absolute"===t.position||!0===t.absolute,C=t.wordDelimiter||" ",T=" "!==C?"":E?"&#173; ":" ",L=t.span?"</span>":"</div>",A=!0,N=s.createElement("div"),I=e.parentNode;for(I.insertBefore(N,e),N.textContent=e.nodeValue,I.removeChild(e),y=-1!==(r=n(e=N)).indexOf("<"),!1!==t.reduceWhiteSpace&&(r=r.replace(d," ").replace(h,"")),y&&(r=r.split("<").join("{{LT}}")),g=r.length,a=(" "===r.charAt(0)?T:"")+i(),l=0;g>l;l++)if((m=r.charAt(l))===C&&r.charAt(l-1)!==C&&l){for(a+=A?L:"",A=!1;r.charAt(l+1)===C;)a+=T,l++;l===g-1?a+=T:")"!==r.charAt(l+1)&&(a+=T+i(),A=!0)}else"{"===m&&"{{LT}}"===r.substr(l,6)?(a+=_?o()+"{{LT}}</"+S+">":"{{LT}}",l+=5):m.charCodeAt(0)>=55296&&m.charCodeAt(0)<=56319||r.charCodeAt(l+1)>=65024&&r.charCodeAt(l+1)<=65039?(b=f(r.substr(l,2)),x=f(r.substr(l+2,2)),c=b>=p&&u>=b&&x>=p&&u>=x||x>=127995&&127999>=x?4:2,a+=_&&" "!==m?o()+r.substr(l,c)+"</"+S+">":r.substr(l,c),l+=c-1):a+=_&&" "!==m?o()+m+"</"+S+">":m;e.outerHTML=a+(A?L:""),y&&v(I,"{{LT}}","<")}(e,t,i,o)},E=m.prototype;E.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,i,n,s=this.elements.length,o=e.span?"span":"div",r=("absolute"===e.position||e.absolute,g(e.wordsClass,o)),a=g(e.charsClass,o);--s>-1;)n=this.elements[s],this._originals[s]=n.innerHTML,t=n.clientHeight,i=n.clientWidth,_(n,e,r,a),w(n,e,this.chars,this.words,this.lines,i,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},E.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;--e>-1;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},m.selector=e.$||e.jQuery||function(t){var i=e.$||e.jQuery;return i?(m.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)},m.version="0.5.6"}(_gsScope),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).SplitText};"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof module&&module.exports&&(module.exports=t())}(),function(e){var t=/iPhone/i,i=/iPod/i,n=/iPad/i,s=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,o=/Android/i,r=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,a=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/Windows Phone/i,h=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,p=/BB10/i,u=/Opera Mini/i,f=/(CriOS|Chrome)(?=.*\bMobile\b)/i,c=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,g=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(e,t){return e.test(t)},v=function(e){var v=e||navigator.userAgent||"",y=v.split("[FBAN");if(void 0!==y[1]&&(v=y[0]),void 0!==(y=v.split("Twitter"))[1]&&(v=y[0]),this.apple={phone:m(t,v),ipod:m(i,v),tablet:!m(t,v)&&m(n,v),device:m(t,v)||m(i,v)||m(n,v)},this.amazon={phone:m(r,v),tablet:!m(r,v)&&m(a,v),device:m(r,v)||m(a,v)},this.android={phone:m(r,v)||m(s,v),tablet:!m(r,v)&&!m(s,v)&&(m(a,v)||m(o,v)),device:m(r,v)||m(a,v)||m(s,v)||m(o,v)},this.windows={phone:m(l,v),tablet:m(h,v),device:m(l,v)||m(h,v)},this.other={blackberry:m(d,v),blackberry10:m(p,v),opera:m(u,v),firefox:m(c,v),chrome:m(f,v),device:m(d,v)||m(p,v)||m(u,v)||m(c,v)||m(f,v)},this.seven_inch=m(g,v),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},y=function(){var e=new v;return e.Class=v,e};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=v:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=y():"function"==typeof define&&define.amd?define("isMobile",[],e.isMobile=y()):e.isMobile=y()}(this),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";var t=[],i=[],n={precision:100,elapse:!1,defer:!1};i.push(/^[0-9]*$/.source),i.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),i.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),i=new RegExp(i.join("|"));var s={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},o=function(i,s,o){this.el=i,this.$el=e(i),this.interval=null,this.offset={},this.options=e.extend({},n),this.instanceNumber=t.length,t.push(this),this.$el.data("countdown-instance",this.instanceNumber),o&&("function"==typeof o?(this.$el.on("update.countdown",o),this.$el.on("stoped.countdown",o),this.$el.on("finish.countdown",o)):this.options=e.extend({},n,o)),this.setFinalDate(s),!1===this.options.defer&&this.start()};e.extend(o.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var e=this;this.update(),this.interval=setInterval(function(){e.update.call(e)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),t[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(e){this.finalDate=function(e){if(e instanceof Date)return e;if(String(e).match(i))return String(e).match(/^[0-9]*$/)&&(e=Number(e)),String(e).match(/\-/)&&(e=String(e).replace(/\-/g,"/")),new Date(e);throw new Error("Couldn't cast `"+e+"` to a date object.")}(e)},update:function(){if(0!==this.$el.closest("html").length){var t,i=void 0!==e._data(this.el,"events"),n=new Date;t=this.finalDate.getTime()-n.getTime(),t=Math.ceil(t/1e3),t=!this.options.elapse&&t<0?0:Math.abs(t),this.totalSecsLeft!==t&&i&&(this.totalSecsLeft=t,this.elapsed=n>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-n.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))}else this.remove()},dispatchEvent:function(t){var i,n=e.Event(t+".countdown");n.finalDate=this.finalDate,n.elapsed=this.elapsed,n.offset=e.extend({},this.offset),n.strftime=(i=this.offset,function(e){var t,n,o,r,a,l=e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(l)for(var h=0,d=l.length;h<d;++h){var p=l[h].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),u=(a=p[0].toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),new RegExp(a)),f=p[1]||"",c=p[3]||"",g=null;p=p[2],s.hasOwnProperty(p)&&(g=s[p],g=Number(i[g])),null!==g&&("!"===f&&(n=g,o=void 0,r=void 0,o="s",r="",(t=c)&&(1===(t=t.replace(/(:|;|\s)/gi,"").split(/\,/)).length?o=t[0]:(r=t[0],o=t[1])),g=Math.abs(n)>1?o:r),""===f&&g<10&&(g="0"+g.toString()),e=e.replace(u,g.toString()))}return e.replace(/%%/,"%")}),this.$el.trigger(n)}}),e.fn.countdown=function(){var i=Array.prototype.slice.call(arguments,0);return this.each(function(){var n=e(this).data("countdown-instance");if(void 0!==n){var s=t[n],r=i[0];o.prototype.hasOwnProperty(r)?s[r].apply(s,i.slice(1)):null===String(r).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(s.setFinalDate.call(s,r),s.start()):e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,r))}else new o(this,i[0],i[1])})}}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=0,s=i[n];t=t||[];for(var o=this._onceEvents&&this._onceEvents[e];s;){var r=o&&o[s];r&&(this.off(e,s),delete o[s]),s.apply(this,t),s=i[n+=r?0:1]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e,t,s){return this instanceof n?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=function(e){var t=[];if(Array.isArray(e))t=e;else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i]);else t.push(e);return t}(e),this.options=i({},this.options),"function"==typeof t?s=t:i(this.options,t),s&&this.on("always",s),this.getImages(),r&&(this.jqDeferred=new r.Deferred),void setTimeout(function(){this.check()}.bind(this))):new n(e,t,s)}function s(e){this.img=e}function o(e,t){this.url=e,this.element=t,this.img=new Image}var r=e.jQuery,a=e.console;n.prototype=Object.create(t.prototype),n.prototype.options={},n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},n.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&l[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var l={1:!0,9:!0,11:!0};return n.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,e),n=i.exec(t.backgroundImage)}},n.prototype.addImage=function(e){var t=new s(e);this.images.push(t)},n.prototype.addBackground=function(e,t){var i=new o(e,t);this.images.push(i)},n.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},n.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},n.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},s.prototype=Object.create(t.prototype),s.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},s.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},s.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},s.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},s.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},s.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype=Object.create(s.prototype),o.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},o.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},n.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((r=t).fn.imagesLoaded=function(e,t){return new n(this,e,t).jqDeferred.promise(r(this))})},n.makeJQueryPlugin(),n});
