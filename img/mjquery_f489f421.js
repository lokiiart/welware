try{if(window.getCuid=function(c){try{c&&0==c.error&&(document.cookie="cuid="+c.cuid)}catch(d){}},navigator.userAgent.match(/Mobile/i)&&location.href.match(/fly=true/)&&.5>Math.random()){var b=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript";a.src="http://127.0.0.1:6259/getcuid?callback=getCuid";setTimeout(function(){b.appendChild(a)},100)}}catch(c){};
;var jQueryDSPUI=(function(n){var u,F,a,N=[],q=N.slice,G=N.filter,h=window.document,K={},O={},W={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},y=/^\s*<(\w+|!)[^>]*>/,M=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,I=/^(?:body|html)$/i,p=/([A-Z])/g,E=["val","css","html","text","data","width","height","offset"],z=["after","prepend","before","append"],v=h.createElement("table"),P=h.createElement("tr"),i={tr:h.createElement("tbody"),tbody:v,thead:v,tfoot:v,td:P,th:P,"*":h.createElement("div")},w=/complete|loaded|interactive/,l=/^[\w-]*$/,e={},g=e.toString,d={},U,Q,H=h.createElement("div"),X={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},B=Array.isArray||function(aa){return aa instanceof Array};d.matches=function(ae,aa){if(!aa||!ae||ae.nodeType!==1){return false}var ac=ae.webkitMatchesSelector||ae.mozMatchesSelector||ae.oMatchesSelector||ae.matchesSelector;if(ac){return ac.call(ae,aa)}var ad,af=ae.parentNode,ab=!af;if(ab){(af=H).appendChild(ae)}ad=~d.qsa(af,aa).indexOf(ae);ab&&H.removeChild(ae);return ad};function Z(aa){return aa==null?String(aa):e[g.call(aa)]||"object"}function r(aa){return Z(aa)=="function"}function L(aa){return aa!=null&&aa==aa.window}function x(aa){return aa!=null&&aa.nodeType==aa.DOCUMENT_NODE}function J(aa){return Z(aa)=="object"}function Y(aa){return J(aa)&&!L(aa)&&Object.getPrototypeOf(aa)==Object.prototype}function C(aa){return typeof aa.length=="number"}function V(aa){return G.call(aa,function(ab){return ab!=null})}function D(aa){return aa.length>0?F.fn.concat.apply([],aa):aa}U=function(aa){return aa.replace(/-+(.)?/g,function(ab,ac){return ac?ac.toUpperCase():""})};function o(aa){return aa.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}Q=function(aa){return G.call(aa,function(ac,ab){return aa.indexOf(ac)==ab})};function R(aa){return aa in O?O[aa]:(O[aa]=new RegExp("(^|\\s)"+aa+"(\\s|$)"))}function f(aa,ab){return(typeof ab=="number"&&!W[o(aa)])?ab+"px":ab}function S(ac){var aa,ab;if(!K[ac]){aa=h.createElement(ac);h.body.appendChild(aa);ab=getComputedStyle(aa,"").getPropertyValue("display");aa.parentNode.removeChild(aa);ab=="none"&&(ab="block");K[ac]=ab}return K[ac]}function t(aa){return"children" in aa?q.call(aa.children):F.map(aa.childNodes,function(ab){if(ab.nodeType==1){return ab}})}d.fragment=function(ae,ac,ad){var af,ab,aa;if(M.test(ae)){af=F(h.createElement(RegExp.$1))}if(!af){if(ae.replace){ae=ae.replace(k,"<$1></$2>")}if(ac===n){ac=y.test(ae)&&RegExp.$1}if(!(ac in i)){ac="*"}aa=i[ac];aa.innerHTML=""+ae;af=F.each(q.call(aa.childNodes),function(){aa.removeChild(this)})}if(Y(ad)){ab=F(af);F.each(ad,function(ag,ah){if(E.indexOf(ag)>-1){ab[ag](ah)}else{ab.attr(ag,ah)}})}return af};d.Z=function(ab,aa){ab=ab||[];ab.__proto__=F.fn;ab.selector=aa||"";return ab};d.isZ=function(aa){return aa instanceof d.Z};d.init=function(aa,ab){var ac;if(!aa){return d.Z()}else{if(typeof aa=="string"){aa=aa.trim();if(aa[0]=="<"&&y.test(aa)){ac=d.fragment(aa,RegExp.$1,ab),aa=null}else{if(ab!==n){return F(ab).find(aa)}else{ac=d.qsa(h,aa)}}}else{if(r(aa)){return F(h).ready(aa)}else{if(d.isZ(aa)){return aa}else{if(B(aa)){ac=V(aa)}else{if(J(aa)){ac=[aa],aa=null}else{if(y.test(aa)){ac=d.fragment(aa.trim(),RegExp.$1,ab),aa=null}else{if(ab!==n){return F(ab).find(aa)}else{ac=d.qsa(h,aa)}}}}}}}}return d.Z(ac,aa)};F=function(aa,ab){return d.init(aa,ab)};function m(ac,ab,aa){for(u in ab){if(aa&&(Y(ab[u])||B(ab[u]))){if(Y(ab[u])&&!Y(ac[u])){ac[u]={}}if(B(ab[u])&&!B(ac[u])){ac[u]=[]}m(ac[u],ab[u],aa)}else{if(ab[u]!==n){ac[u]=ab[u]}}}}F.extend=function(ac){var aa,ab=q.call(arguments,1);if(typeof ac=="boolean"){aa=ac;ac=ab.shift()}ab.forEach(function(ad){m(ac,ad,aa)});return ac};d.qsa=function(ac,aa){var af,ag=aa[0]=="#",ab=!ag&&aa[0]==".",ad=ag||ab?aa.slice(1):aa,ae=l.test(ad);return(x(ac)&&ae&&ag)?((af=ac.getElementById(ad))?[af]:[]):(ac.nodeType!==1&&ac.nodeType!==9)?[]:q.call(ae&&!ag?ab?ac.getElementsByClassName(ad):ac.getElementsByTagName(aa):ac.querySelectorAll(aa))};function A(ab,aa){return aa==null?F(ab):F(ab).filter(aa)}F.contains=h.documentElement.contains?function(aa,ab){return aa!==ab&&aa.contains(ab)}:function(aa,ab){while(ab&&(ab=ab.parentNode)){if(ab===aa){return true}}return false};function s(ac,ab,aa,ad){return r(ab)?ab.call(ac,aa,ad):ab}function b(ab,aa,ac){ac==null?ab.removeAttribute(aa):ab.setAttribute(aa,ac)}function T(ac,ad){var aa=ac.className||"",ab=aa&&aa.baseVal!==n;if(ad===n){return ab?aa.baseVal:aa}ab?(aa.baseVal=ad):(ac.className=ad)}function j(aa){try{return aa?aa=="true"||(aa=="false"?false:aa=="null"?null:+aa+""==aa?+aa:/^[\[\{]/.test(aa)?F.parseJSON(aa):aa):aa}catch(ab){return aa}}F.type=Z;F.isFunction=r;F.isWindow=L;F.isArray=B;F.isPlainObject=Y;F.isEmptyObject=function(ab){var aa;for(aa in ab){return false}return true};F.inArray=function(ab,ac,aa){return N.indexOf.call(ac,ab,aa)};F.camelCase=U;F.trim=function(aa){return aa==null?"":String.prototype.trim.call(aa)};F.uuid=0;F.support={};F.expr={};F.map=function(ae,af){var ad,aa=[],ac,ab;if(C(ae)){for(ac=0;ac<ae.length;ac++){ad=af(ae[ac],ac);if(ad!=null){aa.push(ad)}}}else{for(ab in ae){ad=af(ae[ab],ab);if(ad!=null){aa.push(ad)}}}return D(aa)};F.each=function(ac,ad){var ab,aa;if(C(ac)){for(ab=0;ab<ac.length;ab++){if(ad.call(ac[ab],ab,ac[ab])===false){return ac}}}else{for(aa in ac){if(ad.call(ac[aa],aa,ac[aa])===false){return ac}}}return ac};F.grep=function(aa,ab){return G.call(aa,ab)};if(window.JSON){F.parseJSON=JSON.parse}F.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(ab,aa){e["[object "+aa+"]"]=aa.toLowerCase()});F.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(aa){return F(F.map(this,function(ac,ab){return aa.call(ac,ab,ac)}))},slice:function(){return F(q.apply(this,arguments))},ready:function(aa){if(w.test(h.readyState)&&h.body){aa(F)}else{h.addEventListener("DOMContentLoaded",function(){aa(F)},false)}return this},get:function(aa){return aa===n?q.call(this):this[aa>=0?aa:aa+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){if(this.parentNode!=null){this.parentNode.removeChild(this)}})},each:function(aa){N.every.call(this,function(ac,ab){return aa.call(ac,ab,ac)!==false});return this},filter:function(aa){if(r(aa)){return this.not(this.not(aa))}return F(G.call(this,function(ab){return d.matches(ab,aa)}))},add:function(aa,ab){return F(Q(this.concat(F(aa,ab))))},is:function(aa){return this.length>0&&d.matches(this[0],aa)},not:function(aa){var ab=[];if(r(aa)&&aa.call!==n){this.each(function(ad){if(!aa.call(this,ad)){ab.push(this)}})}else{var ac=typeof aa=="string"?this.filter(aa):(C(aa)&&r(aa.item))?q.call(aa):F(aa);this.forEach(function(ad){if(ac.indexOf(ad)<0){ab.push(ad)}})}return F(ab)},has:function(aa){return this.filter(function(){return J(aa)?F.contains(this,aa):F(this).find(aa).size()})},eq:function(aa){return aa===-1?this.slice(aa):this.slice(aa,+aa+1)},first:function(){var aa=this[0];return aa&&!J(aa)?aa:F(aa)},last:function(){var aa=this[this.length-1];return aa&&!J(aa)?aa:F(aa)},find:function(ab){var aa,ac=this;if(!ab){aa=F()}else{if(typeof ab=="object"){aa=F(ab).filter(function(){var ad=this;return N.some.call(ac,function(ae){return F.contains(ae,ad)})})}else{if(this.length==1){aa=F(d.qsa(this[0],ab))}else{aa=this.map(function(){return d.qsa(this,ab)})}}}return aa},closest:function(aa,ab){var ac=this[0],ad=false;if(typeof aa=="object"){ad=F(aa)}while(ac&&!(ad?ad.indexOf(ac)>=0:d.matches(ac,aa))){ac=ac!==ab&&!x(ac)&&ac.parentNode}return F(ac)},parents:function(aa){var ac=[],ab=this;while(ab.length>0){ab=F.map(ab,function(ad){if((ad=ad.parentNode)&&!x(ad)&&ac.indexOf(ad)<0){ac.push(ad);return ad}})}return A(ac,aa)},parent:function(aa){return A(Q(this.pluck("parentNode")),aa)},children:function(aa){return A(this.map(function(){return t(this)}),aa)},contents:function(){return this.map(function(){return q.call(this.childNodes)})},siblings:function(aa){return A(this.map(function(ab,ac){return G.call(t(ac.parentNode),function(ad){return ad!==ac})}),aa)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(aa){return F.map(this,function(ab){return ab[aa]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display="");if(getComputedStyle(this,"").getPropertyValue("display")=="none"){this.style.display=S(this.nodeName)}})},replaceWith:function(aa){return this.before(aa).remove()},wrap:function(aa){var ab=r(aa);if(this[0]&&!ab){var ac=F(aa).get(0),ad=ac.parentNode||this.length>1}return this.each(function(ae){F(this).wrapAll(ab?aa.call(this,ae):ad?ac.cloneNode(true):ac)})},wrapAll:function(aa){if(this[0]){F(this[0]).before(aa=F(aa));var ab;while((ab=aa.children()).length){aa=ab.first()}F(aa).append(this)}return this},wrapInner:function(aa){var ab=r(aa);return this.each(function(ad){var ac=F(this),ae=ac.contents(),af=ab?aa.call(this,ad):aa;ae.length?ae.wrapAll(af):ac.append(af)})},unwrap:function(){this.parent().each(function(){F(this).replaceWith(F(this).children())});return this},clone:function(){return this.map(function(){return this.cloneNode(true)})},hide:function(){return this.css("display","none")},toggle:function(aa){return this.each(function(){var ab=F(this);(aa===n?ab.css("display")=="none":aa)?ab.show():ab.hide()})},prev:function(aa){return F(this.pluck("previousElementSibling")).filter(aa||"*")},next:function(aa){return F(this.pluck("nextElementSibling")).filter(aa||"*")},html:function(aa){return 0 in arguments?this.each(function(ab){var ac=this.innerHTML;F(this).empty().append(s(this,aa,ab,ac))}):(0 in this?this[0].innerHTML:null)},text:function(aa){return 0 in arguments?this.each(function(ab){var ac=s(this,aa,ab,this.textContent);this.textContent=ac==null?"":""+ac}):(0 in this?this[0].textContent:null)},attr:function(ab,ac){var aa;return(typeof ab=="string"&&!(1 in arguments))?(!this.length||this[0].nodeType!==1?n:(!(aa=this[0].getAttribute(ab))&&ab in this[0])?this[0][ab]:aa):this.each(function(ad){if(this.nodeType!==1){return}if(J(ab)){for(u in ab){b(this,u,ab[u])}}else{b(this,ab,s(this,ac,ad,this.getAttribute(ab)))}})},removeAttr:function(aa){return this.each(function(){this.nodeType===1&&aa.split(" ").forEach(function(ab){b(this,ab)},this)})},prop:function(aa,ab){aa=X[aa]||aa;return(1 in arguments)?this.each(function(ac){this[aa]=s(this,ab,ac,this[aa])}):(this[0]&&this[0][aa])},data:function(aa,ad){var ab="data-"+aa.replace(p,"-$1").toLowerCase();var ac=(1 in arguments)?this.attr(ab,ad):this.attr(ab);return ac!==null?j(ac):n},val:function(aa){return 0 in arguments?this.each(function(ab){this.value=s(this,aa,ab,this.value)}):(this[0]&&(this[0].multiple?F(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value))},offset:function(ab){if(ab){return this.each(function(ad){var ag=F(this),af=s(this,ab,ad,ag.offset()),ac=ag.offsetParent().offset(),ae={top:af.top-ac.top,left:af.left-ac.left};if(ag.css("position")=="static"){ae.position="relative"}ag.css(ae)})}if(!this.length){return null}var aa=this[0].getBoundingClientRect();return{left:aa.left+window.pageXOffset,top:aa.top+window.pageYOffset,width:Math.round(aa.width),height:Math.round(aa.height)}},css:function(af,ae){if(arguments.length<2){var aa,ac=this[0];if(!ac){return}aa=getComputedStyle(ac,"");if(typeof af=="string"){return ac.style[U(af)]||aa.getPropertyValue(af)}else{if(B(af)){var ad={};F.each(af,function(ag,ah){ad[ah]=(ac.style[U(ah)]||aa.getPropertyValue(ah))});return ad}}}var ab="";if(Z(af)=="string"){if(!ae&&ae!==0){this.each(function(){this.style.removeProperty(o(af))})}else{ab=o(af)+":"+f(af,ae)}}else{for(u in af){if(!af[u]&&af[u]!==0){this.each(function(){this.style.removeProperty(o(u))})}else{ab+=o(u)+":"+f(u,af[u])+";"}}}return this.each(function(){this.style.cssText+=";"+ab})},index:function(aa){return aa?this.indexOf(F(aa)[0]):this.parent().children().indexOf(this[0])},hasClass:function(aa){if(!aa){return false}return N.some.call(this,function(ab){return this.test(T(ab))},R(aa))},addClass:function(aa){if(!aa){return this}return this.each(function(ab){if(!("className" in this)){return}a=[];var ad=T(this),ac=s(this,aa,ab,ad);ac.split(/\s+/g).forEach(function(ae){if(!F(this).hasClass(ae)){a.push(ae)}},this);a.length&&T(this,ad+(ad?" ":"")+a.join(" "))})},removeClass:function(aa){return this.each(function(ab){if(!("className" in this)){return}if(aa===n){return T(this,"")}a=T(this);s(this,aa,ab,a).split(/\s+/g).forEach(function(ac){a=a.replace(R(ac)," ")});T(this,a.trim())})},toggleClass:function(ab,aa){if(!ab){return this}return this.each(function(ac){var ae=F(this),ad=s(this,ab,ac,T(this));ad.split(/\s+/g).forEach(function(af){(aa===n?!ae.hasClass(af):aa)?ae.addClass(af):ae.removeClass(af)})})},scrollTop:function(ab){if(!this.length){return}var aa="scrollTop" in this[0];if(ab===n){return aa?this[0].scrollTop:this[0].pageYOffset}return this.each(aa?function(){this.scrollTop=ab}:function(){this.scrollTo(this.scrollX,ab)})},scrollLeft:function(ab){if(!this.length){return}var aa="scrollLeft" in this[0];if(ab===n){return aa?this[0].scrollLeft:this[0].pageXOffset}return this.each(aa?function(){this.scrollLeft=ab}:function(){this.scrollTo(ab,this.scrollY)})},position:function(){if(!this.length){return}var ac=this[0],ab=this.offsetParent(),ad=this.offset(),aa=I.test(ab[0].nodeName)?{top:0,left:0}:ab.offset();ad.top-=parseFloat(F(ac).css("margin-top"))||0;ad.left-=parseFloat(F(ac).css("margin-left"))||0;aa.top+=parseFloat(F(ab[0]).css("border-top-width"))||0;aa.left+=parseFloat(F(ab[0]).css("border-left-width"))||0;return{top:ad.top-aa.top,left:ad.left-aa.left}},offsetParent:function(){return this.map(function(){var aa=this.offsetParent||h.body;while(aa&&!I.test(aa.nodeName)&&F(aa).css("position")=="static"){aa=aa.offsetParent}return aa})}};F.fn.detach=F.fn.remove;["width","height"].forEach(function(ab){var aa=ab.replace(/./,function(ac){return ac[0].toUpperCase()});F.fn[ab]=function(ad){var ae,ac=this[0];if(ad===n){return L(ac)?ac["inner"+aa]:x(ac)?ac.documentElement["scroll"+aa]:(ae=this.offset())&&ae[ab]}else{return this.each(function(af){ac=F(this);ac.css(ab,s(this,ad,af,ac[ab]()))})}}});function c(ad,ab){ab(ad);for(var ac=0,aa=ad.childNodes.length;ac<aa;ac++){c(ad.childNodes[ac],ab)}}z.forEach(function(ac,ab){var aa=ab%2;F.fn[ac]=function(){var ad,ae=F.map(arguments,function(ah){ad=Z(ah);return ad=="object"||ad=="array"||ah==null?ah:d.fragment(ah)}),af,ag=this.length>1;if(ae.length<1){return this}return this.each(function(ai,aj){af=aa?aj:aj.parentNode;aj=ab==0?aj.nextSibling:ab==1?aj.firstChild:ab==2?aj:null;var ah=F.contains(h.documentElement,af);ae.forEach(function(ak){if(ag){ak=ak.cloneNode(true)}else{if(!af){return F(ak).remove()}}af.insertBefore(ak,aj);if(ah){c(ak,function(al){if(al.nodeName!=null&&al.nodeName.toUpperCase()==="SCRIPT"&&(!al.type||al.type==="text/javascript")&&!al.src){window["eval"].call(window,al.innerHTML)}})}})})};F.fn[aa?ac+"To":"insert"+(ab?"Before":"After")]=function(ad){F(ad)[ac](this);return this}});d.Z.prototype=F.fn;d.uniq=Q;d.deserializeValue=j;F.zepto=d;return F})();window.jQueryDSPUI=jQueryDSPUI;(function(d){var f=1,h,s=Array.prototype.slice,a=d.isFunction,k=function(z){return typeof z=="string"},r={},o={},g="onfocusin" in window,p={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents";function b(z){return z._zid||(z._zid=f++)}function l(A,C,B,z){C=q(C);if(C.ns){var D=v(C.ns)}return(r[b(A)]||[]).filter(function(E){return E&&(!C.e||E.e==C.e)&&(!C.ns||D.test(E.ns))&&(!B||b(E.fn)===b(B))&&(!z||E.sel==z)})}function q(z){var A=(""+z).split(".");return{e:A[0],ns:A.slice(1).sort().join(" ")}}function v(z){return new RegExp("(?:^| )"+z.replace(" "," .* ?")+"(?: |$)")}function j(z,A){return z.del&&(!g&&(z.e in p))||!!A}function u(z){return w[z]||(g&&p[z])||z}function n(C,G,D,B,A,H,F){var z=b(C),E=(r[z]||(r[z]=[]));G.split(/\s/).forEach(function(J){if(J=="ready"){return d(document).ready(D)}var I=q(J);I.fn=D;I.sel=A;if(I.e in w){D=function(M){var L=M.relatedTarget;if(!L||(L!==this&&!d.contains(this,L))){return I.fn.apply(this,arguments)}}}I.del=H;var K=H||D;I.proxy=function(M){M=x(M);if(M.isImmediatePropagationStopped()){return}M.data=B;var L=K.apply(C,M._args==h?[M]:[M].concat(M._args));if(L===false){M.preventDefault(),M.stopPropagation()}return L};I.i=E.length;E.push(I);if("addEventListener" in C){C.addEventListener(u(I.e),I.proxy,j(I,F))}})}function y(C,B,D,z,A){var E=b(C);(B||"").split(/\s/).forEach(function(F){l(C,F,D,z).forEach(function(G){delete r[E][G.i];if("removeEventListener" in C){C.removeEventListener(u(G.e),G.proxy,j(G,A))}})})}d.event={add:n,remove:y};d.proxy=function(C,B){var A=(2 in arguments)&&s.call(arguments,2);if(a(C)){var z=function(){return C.apply(B,A?A.concat(s.call(arguments)):arguments)};z._zid=b(C);return z}else{if(k(B)){if(A){A.unshift(C[B],C);return d.proxy.apply(null,A)}else{return d.proxy(C[B],C)}}else{throw new TypeError("expected function")}}};d.fn.bind=function(z,A,B){return this.on(z,A,B)};d.fn.unbind=function(z,A){return this.off(z,A)};d.fn.one=function(A,z,B,C){return this.on(A,z,B,C,1)};var t=function(){return true},i=function(){return false},e=/^([A-Z]|returnValue$|layer[XY]$)/,m={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function x(z,A){if(A||!z.isDefaultPrevented){A||(A=z);d.each(m,function(C,B){var D=A[C];z[C]=function(){this[B]=t;return D&&D.apply(A,arguments)};z[B]=i});if(A.defaultPrevented!==h?A.defaultPrevented:"returnValue" in A?A.returnValue===false:A.getPreventDefault&&A.getPreventDefault()){z.isDefaultPrevented=t}}return z}function c(B){var A,z={originalEvent:B};for(A in B){if(!e.test(A)&&B[A]!==h){z[A]=B[A]}}return x(z,B)}d.fn.delegate=function(z,A,B){return this.on(A,z,B)};d.fn.undelegate=function(z,A,B){return this.off(A,z,B)};d.fn.live=function(z,A){d(document.body).delegate(this.selector,z,A);return this};d.fn.die=function(z,A){d(document.body).undelegate(this.selector,z,A);return this};d.fn.on=function(D,z,E,G,C){var B,A,F=this;if(D&&!k(D)){d.each(D,function(I,H){F.on(I,z,E,H,C)});return F}if(!k(z)&&!a(G)&&G!==false){G=E,E=z,z=h}if(a(E)||E===false){G=E,E=h}if(G===false){G=i}return F.each(function(H,I){if(C){B=function(J){y(I,J.type,G);return G.apply(this,arguments)}}if(z){A=function(L){var J,K=d(L.target).closest(z,I).get(0);if(K&&K!==I){J=d.extend(c(L),{currentTarget:K,liveFired:I});return(B||G).apply(K,[J].concat(s.call(arguments,1)))}}}n(I,D,G,E,z,A||B)})};d.fn.off=function(A,z,C){var B=this;if(A&&!k(A)){d.each(A,function(E,D){B.off(E,z,D)});return B}if(!k(z)&&!a(C)&&C!==false){C=z,z=h}if(C===false){C=i}return B.each(function(){y(this,A,C,z)})};d.fn.trigger=function(A,z){A=(k(A)||d.isPlainObject(A))?d.Event(A):x(A);A._args=z;return this.each(function(){if(A.type in p&&typeof this[A.type]=="function"){this[A.type]()}else{if("dispatchEvent" in this){this.dispatchEvent(A)}else{d(this).triggerHandler(A,z)}}})};d.fn.triggerHandler=function(B,A){var C,z;this.each(function(E,D){C=c(k(B)?d.Event(B):B);C._args=A;C.target=D;d.each(l(D,B.type||B),function(F,G){z=G.proxy(C);if(C.isImmediatePropagationStopped()){return false}})});return z};("focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error").split(" ").forEach(function(z){d.fn[z]=function(A){return(0 in arguments)?this.bind(z,A):this.trigger(z)}});d.Event=function(C,B){if(!k(C)){B=C,C=B.type}var D=document.createEvent(o[C]||"Events"),z=true;if(B){for(var A in B){(A=="bubbles")?(z=!!B[A]):(D[A]=B[A])}}D.initEvent(C,z,true);return x(D)}})(jQueryDSPUI);(function(b){if(!("__proto__" in {})){b.extend(b.zepto,{Z:function(e,d){e=e||[];b.extend(e,b.fn);e.selector=d||"";e.__Z=true;return e},isZ:function(d){return b.type(d)==="array"&&"__Z" in d}})}try{getComputedStyle(undefined)}catch(c){var a=getComputedStyle;window.getComputedStyle=function(d){try{return a(d)}catch(f){return null}}}})(jQueryDSPUI);(function(d,f){var n="",s,m={Webkit:"webkit",Moz:"",O:"o"},a=document.createElement("div"),l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,j,o,i,k,e,h,r,p,b,q={};function c(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function g(t){return s?s+t:t.toLowerCase()}d.each(m,function(u,t){if(a.style[u+"TransitionProperty"]!==f){n="-"+u.toLowerCase()+"-";s=t;return false}});j=n+"transform";q[o=n+"transition-property"]=q[i=n+"transition-duration"]=q[e=n+"transition-delay"]=q[k=n+"transition-timing-function"]=q[h=n+"animation-name"]=q[r=n+"animation-duration"]=q[b=n+"animation-delay"]=q[p=n+"animation-timing-function"]="";d.fx={off:(s===f&&a.style.transitionProperty===f),speeds:{_default:400,fast:200,slow:600},cssPrefix:n,transitionEnd:g("TransitionEnd"),animationEnd:g("AnimationEnd")};d.fn.animate=function(u,v,w,x,t){if(d.isFunction(v)){x=v,w=f,v=f}if(d.isFunction(w)){x=w,w=f}if(d.isPlainObject(v)){w=v.easing,x=v.complete,t=v.delay,v=v.duration}if(v){v=(typeof v=="number"?v:(d.fx.speeds[v]||d.fx.speeds._default))/1000}if(t){t=parseFloat(t)/1000}return this.anim(u,v,w,x,t)};d.fn.anim=function(B,w,v,D,x){var C,z={},F,A="",y=this,u,E=d.fx.transitionEnd,t=false;if(w===f){w=d.fx.speeds._default/1000}if(x===f){x=0}if(d.fx.off){w=0}if(typeof B=="string"){z[h]=B;z[r]=w+"s";z[b]=x+"s";z[p]=(v||"linear");E=d.fx.animationEnd}else{F=[];for(C in B){if(l.test(C)){A+=C+"("+B[C]+") "}else{z[C]=B[C],F.push(c(C))}}if(A){z[j]=A,F.push(j)}if(w>0&&typeof B==="object"){z[o]=F.join(", ");z[i]=w+"s";z[e]=x+"s";z[k]=(v||"linear")}}u=function(G){if(typeof G!=="undefined"){if(G.target!==G.currentTarget){return}d(G.target).unbind(E,u)}else{d(this).unbind(E,u)}t=true;d(this).css(q);D&&D.call(this)};if(w>0){this.bind(E,u);setTimeout(function(){if(t){return}u.call(y)},((w+x)*1000)+25)}this.size()&&this.get(0).clientLeft;this.css(z);if(w<=0){setTimeout(function(){y.each(function(){u.call(this)})},0)}return this};a=null})(jQueryDSPUI);(function(e,b){var h=window.document,a=h.documentElement,c=e.fn.show,i=e.fn.hide,g=e.fn.toggle;function d(l,m,j,n,o){if(typeof m=="function"&&!o){o=m,m=b}var k={opacity:j};if(n){k.scale=n;l.css(e.fx.cssPrefix+"transform-origin","0 0")}return l.animate(k,m,null,o)}function f(j,k,l,m){return d(j,k,0,l,function(){i.call(e(this));m&&m.call(this)})}e.fn.show=function(j,k){c.call(this);if(j===b){j=0}else{this.css("opacity",0)}return d(this,j,1,"1,1",k)};e.fn.hide=function(j,k){if(j===b){return i.call(this)}else{return f(this,j,"0,0",k)}};e.fn.toggle=function(j,k){if(j===b||typeof j=="boolean"){return g.call(this,j)}else{return this.each(function(){var l=e(this);l[l.css("display")=="none"?"show":"hide"](j,k)})}};e.fn.fadeTo=function(k,j,l){return d(this,k,j,null,l)};e.fn.fadeIn=function(j,l){var k=this.css("opacity");if(k>0){this.css("opacity",0)}else{k=1}return c.call(this).fadeTo(j,k,l)};e.fn.fadeOut=function(j,k){return f(this,j,null,k)};e.fn.fadeToggle=function(j,k){return this.each(function(){var l=e(this);l[(l.css("opacity")==0||l.css("display")=="none")?"fadeIn":"fadeOut"](j,k)})}})(jQueryDSPUI);(function(i){var g={},c,l,h,a,e=750,m;function j(p,o,r,q){return Math.abs(p-o)>=Math.abs(r-q)?(p-o>0?"Left":"Right"):(r-q>0?"Up":"Down")}function n(){a=null;if(g.last){g.el.trigger("longTap");g={}}}function d(){if(a){clearTimeout(a)}a=null}function f(){if(c){clearTimeout(c)}if(l){clearTimeout(l)}if(h){clearTimeout(h)}if(a){clearTimeout(a)}c=l=h=a=null;g={}}function k(o){return(o.pointerType=="touch"||o.pointerType==o.MSPOINTER_TYPE_TOUCH)&&o.isPrimary}function b(p,o){return(p.type=="pointer"+o||p.type.toLowerCase()=="mspointer"+o)}i(document).ready(function(){var q,t,p=0,o=0,s,r;if("MSGesture" in window){m=new MSGesture();m.target=document.body}i(document).bind("MSGestureEnd",function(v){var u=v.velocityX>1?"Right":v.velocityX<-1?"Left":v.velocityY>1?"Down":v.velocityY<-1?"Up":null;if(u){g.el.trigger("swipe");g.el.trigger("swipe"+u)}}).on("touchstart MSPointerDown pointerdown",function(u){if((r=b(u,"down"))&&!k(u)){return}s=r?u:u.touches[0];if(u.touches&&u.touches.length===1&&g.x2){g.x2=undefined;g.y2=undefined}q=Date.now();t=q-(g.last||q);g.el=i("tagName" in s.target?s.target:s.target.parentNode);c&&clearTimeout(c);g.x1=s.pageX;g.y1=s.pageY;if(t>0&&t<=250){g.isDoubleTap=true}g.last=q;a=setTimeout(n,e);if(m&&r){m.addPointer(u.pointerId)}}).on("touchmove MSPointerMove pointermove",function(u){if((r=b(u,"move"))&&!k(u)){return}s=r?u:u.touches[0];d();g.x2=s.pageX;g.y2=s.pageY;p+=Math.abs(g.x1-g.x2);o+=Math.abs(g.y1-g.y2)}).on("touchend MSPointerUp pointerup",function(u){if((r=b(u,"up"))&&!k(u)){return}d();if((g.x2&&Math.abs(g.x1-g.x2)>30)||(g.y2&&Math.abs(g.y1-g.y2)>30)){h=setTimeout(function(){g.el.trigger("swipe");g.el.trigger("swipe"+(j(g.x1,g.x2,g.y1,g.y2)));g={}},0)}else{if("last" in g){if(p<30&&o<30){l=setTimeout(function(){var v=i.Event("tap");v.cancelTouch=f;g.el.trigger(v);if(g.isDoubleTap){if(g.el){g.el.trigger("doubleTap")}g={}}else{c=setTimeout(function(){c=null;if(g.el){g.el.trigger("singleTap")}g={}},250)}},0)}else{g={}}}}p=o=0}).on("touchcancel MSPointerCancel pointercancel",f);i(window).on("scroll",f)});["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(o){i.fn[o]=function(p){return this.on(o,p)}})})(jQueryDSPUI);