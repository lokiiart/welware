(function(){var n=navigator.userAgent.toLowerCase(),r="&#97;&#98;&#115;&#111;&#108;&#117;&#116;&#101;".replace(/&#([\da-fA-F]{1,5});/g,function(a,b){return String.fromCharCode(b)});if(typeof _acR=="undefined"){var f=window._acR=function(a,b,c,e,h,g){return new f.prototype.init(a,b,c,e,h,g)};f.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};f.extend(f,{supportFixed:!(window.ActiveXObject&&(document.compatMode=="BackCompat"||n.match(/msie[ ]([\d.]+)/)[1]<=6)),$:function(a){return typeof a==
"string"?document.getElementById(a):a},bind:function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},unbind:function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},element:function(a,b,c,e){a=document.createElement(a);if(b)for(var h in b)a.setAttribute(h,b[h]);c&&f.css(a,c);if(e)a.innerHTML=e;return a},swf:function(a,b,c,e,h,g){if(window.ActiveXObject){var d=f.element("span");d.innerHTML='<object id="'+a+'" name="'+a+'" width="'+c+'" height="'+
e+'"  classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"><param name="movie" value="'+b+'" /><param name="wmode" value="'+h+'" /><param name="flashvars" value="'+g+'" /><param name="allowScriptAccess" value="always" /><param name="menu" value="false" /></objcet>';a=d.childNodes[0]}else a=f.element("embed",{id:a,name:a,width:c,height:e,src:b,type:"application/x-shockwave-flash",allowscriptaccess:"always",wmode:h,menu:"false",flashvars:g});return a},img:function(a,b,c,e){return f.element("img",{id:a,
border:0,src:b},{width:c+"px",height:e+"px"})},iframe:function(a,b,c,e){return f.element("iframe",{id:a,width:c,height:e,frameBorder:0,marginwidth:0,marginheight:0,scrolling:"no",src:b})},ifmcode:function(a,b,c,e){var h,g="",d,j=Math.ceil(Math.random()*1E6),a={id:a+"_"+j,name:a+"_"+j,src:"about:blank",width:c,height:e,vspace:"0",hspace:"0",allowTransparency:"true",scrolling:"no",marginHeight:"0",marginWidth:"0",frameBorder:"0"},i=!(window.opera||n.indexOf("msie")!=-1),k=function(a){for(var b=document.getElementsByTagName("base"),
c=null,d=b.length;d--;)if(b[d].target&&b[d].target.toLowerCase()!=="_self"){c=b[d];break}c?(c.setAttribute("preTarget",c.target),c.target="_self",a&&a(function(){c.target=c.getAttribute("preTarget")})):a&&a()},l=function(){k(function(a){g=g.replace(/[\'\"\/\\]/g,"\\$&");g=g.replace(/\r/g,"\\r");g=g.replace(/\n/g,"\\n");g=g.replace(/\t/g,"\\t");g="javascript:(function(){document.open('text/html','replace');document.domain=\""+document.domain+'";document.write("'+g+'");'+(i?"document.close();":"")+
"})();";try{h.src=g}catch(b){}a&&a()})},g=function(a){a.indexOf("<body>")==-1&&(a='<!doctype html><html><head><meta charset="utf-8" /><style>html,body{margin:0;padding:0;}</style></head><body>'+a+"</body></html>");return a}(b);h=f.element("iframe",a,{border:0,verticalAlign:"bottom",margin:0,display:"block"});f.bind(h,"load",function(){f.unbind(h,"load",arguments.callee);try{d=h.contentWindow.document;try{d.open("text/html","replace"),d.write(g),i&&d.close()}catch(a){}}catch(b){isIE?setTimeout(function(){l()},
0):l()}});return h},css:function(a,b){var c=f.$(a);if(typeof b=="string"){if(c.currentStyle)return c.currentStyle[b];if(window.getComputedStyle)return document.defaultView.getComputedStyle(c,null)[b]}else if(typeof b=="object")for(var e in b)c.style[e]=b[e]},getClient:function(a){a=a.charAt(0).toUpperCase()+a.substr(1).toLowerCase();return document.compatMode=="BackCompat"?document.body["client"+a]:document.documentElement["client"+a]},getScroll:function(a){a=a.charAt(0).toUpperCase()+a.substr(1).toLowerCase();
return Math.max(document.documentElement["scroll"+a],document.body["scroll"+a])},getPosition:function(a){for(var a=f.$(a),b=[a.offsetLeft,a.offsetTop],a=a.offsetParent;a;)b[0]+=a.offsetLeft,b[1]+=a.offsetTop,a=a.offsetParent;return b},random:function(a){a=a||0;if(a==-1)for(var b in _a.random)_a.random[b]!=Object.prototype[b]&&(_a.random[b]=null);else return _a.random["_"+a]||(_a.random["_"+a]=(new Date).getTime()+Math.floor(Math.random()*1E3)),_a.random["_"+a]},getPreviousUrl:function(){var a="";
try{a=top.document.referrer}catch(b){try{a=document.referrer}catch(c){}}return encodeURI(a)},send:function(a,b){var c;b?(c=document.createElement("img"),c.style.display="none"):(c=document.createElement("script"),c.type="text/javascript",c.async=!0);document.body.insertBefore(c,document.body.firstChild);c.src=a+(a.indexOf("?")>0?"&cb=":"?cb=")+Math.ceil(Math.random()*1E9)}});f.prototype={init:function(a,b,c,e,h,g){var d=this;d.aid=a;d.mid=b;d.cid=c;d.hrs=e;d.surl=d.info("serverbaseurl")?location.protocol+
"//"+d.info("serverbaseurl"):/^\?pv=1&sp=\d+,1,\d+,\d+,0,0,1,9$/.test(location.search)&&/a\.htm$/.test(location.pathname)?/(.+)a\.htm/.exec(location.href)[1]:"http://afp.csbew.com/";d.purl=f.getPreviousUrl();d.wmode=["opaque","transparent","window"];d._targets=["_blank","_parent","_self","_top"];d.fs=g;d.ts={ct:(new Date).getTime()};typeof ac_info_ware=="undefined"&&(ac_info_ware={});ac_info_ware["tag_"+a]&&ac_info_ware["tag_"+a].erase();d._setState(h);ac_info_ware["tag_"+a]=d;if(d.info("hidetime"))d.hidei=
setTimeout(function(){d.erase()},d.info("hidetime"))},setState:function(a){for(var b=this,c=b.fs[b.state-1],e=null,f=0,g=c.length;f<g;f++)c[f][5]===0&&c[f][6]===0?(a!=b.state&&(e=1),f==g-1?b.heighten(f+1,e,function(){b._setState(a)}):b.heighten(f+1,e)):b._setState(a)},_setState:function(a){if(this.state!=a&&(this.ts.st=(new Date).getTime(),this.state=a,this.erase(),a>0&&a<=this.fs.length&&this.render(),this.info("state_change")))try{this.info("state_change")(a,this.fs.length)}catch(b){}},setSize:function(a,
b,c,e,h,g){var d=this,j=["left","right","top","bottom"],h=[h||0,g||0],a=parseInt(a,10)-1,b=parseInt(b,10),c=parseInt(c,10);if(a>=0&&a<d.fs[d.state-1].length){if(e&&e.indexOf("_")!=-1){e=e.toLowerCase();e=e.split("_");for(g=j.length-1;g>=0;g--)d.ys[a].style[j[g]]=null;for(j=e.length-1;j>=0;j--)d.ys[a].style[e[j]]=h[j]+"px"}d.fs[d.state-1][a][5]==1&&(d.fs[d.state-1][a][7]===0&&f.css(d.xs[a],{left:"-10000px",top:"-10000px"}),f.css(d.xs[a],{width:b+"px",height:c+"px"}));f.css(d.ys[a],{width:b+"px",height:c+
"px"});f.css(d.zs[a],{width:b+"px",height:c+"px"});d.cs[a].setAttribute("width",b);d.cs[a].setAttribute("height",c);d.position&&setTimeout(function(){d.position()},0)}},heighten:function(a,b,c){var e=this,h=0,g=0,d=1;a-=1;if(a>=0&&a<e.fs[e.state-1].length)if(h=parseInt(f.css(e.xs[a],"height"),10),b=b||parseInt(f.css(e.cs[a],"height"),10),h==b)c&&(c(),c=null);else{d=Math.abs(b-h)/(b-h);g=10*d;if(e.xs[a].interval)clearInterval(e.xs[a].interval),e.xs[a].interval=null;e.xs[a].interval=setInterval(function(){h=
parseInt(f.css(e.xs[a],"height"),10);h+=g;h*d>=b*d?(f.css(e.xs[a],{height:b+"px"}),clearInterval(e.xs[a].interval),e.xs[a].interval=null,c&&(c(),c=null)):f.css(e.xs[a],{height:h+"px"})},10)}},setPosition:function(){if(!(this.state<0||this.state>this.fs.length))for(var a=null,b=null,c=f.getClient("width"),e=f.getClient("height"),h=0,g=0,d=f.supportFixed,j=0,i=0,k=0,l=k=h=0,m=0,o=0,p=0,q=a=0,n=this.fs[this.state-1].length;q<n;q++)a=this.fs[this.state-1][q],b=this.xs[q].style,h=parseInt(b.width,10),
g=parseInt(b.height,10),a[8]==1&&!d&&(j=f.getScroll("left"),i=f.getScroll("top"),f.css(document.body,"position")!="static"&&(j-=document.body.offsetLeft,i-=document.body.offsetTop)),k=a[9][0],l=a[9][1],m=a[9][2]||0,o=a[9][3]||0,p=a[9][4]||0,a=a[9][5]||0,k=String(k).indexOf("%")!=-1?Math.floor((c-parseInt(h,10))*parseInt(k,10)/100)+j:parseInt(k,10)+j,k+=String(m).indexOf("%")!=-1?Math.floor(c*parseInt(m,10)/100):parseInt(m,10),k+=String(p).indexOf("%")!=-1?Math.floor(h*parseInt(p,10)/100):parseInt(p,
10),h=String(l).indexOf("%")!=-1?Math.floor((e-parseInt(g,10))*parseInt(l,10)/100)+i:parseInt(l,10)+i,h+=String(o).indexOf("%")!=-1?Math.floor(e*parseInt(o,10)/100):parseInt(o,10),h+=String(a).indexOf("%")!=-1?Math.floor(g*parseInt(a,10)/100):parseInt(a,10),b.left=k+"px",b.top=h+"px"},append:function(a){var b=this.info("destid"),c=null,e=null;if(b&&f.$(b))f.$(b).appendChild(a);else if(c=f.$("ac_js86_"+this.aid))(e=c.parentNode)&&e.insertBefore(a,c)},open:function(a,b){var c,b=b||"_blank";window.ActiveXObject?
(c=f.element("a",{href:a,target:b},{display:"none"}),document.body.insertBefore(c,document.body.firstChild),c.click(),c.parentNode.removeChild(c)):window.open(a,b)},report:function(a,b,c,e){if(!(this.mid<=10)){var h=(new Date).getTime(),g;g=this.surl+"v.htm?pv=1";g+="&sp="+[this.aid,this.mid,this.cid,a,h-this.ts.ct,b,c].join(",");g+="&ex="+[this.state,this.count(a),h-this.ts.st,e].join(",");this.purl&&(g+="&url="+this.purl);typeof window.ac_content_id!="undefined"&&(g+="&ctid="+encodeURIComponent(window.ac_content_id));
g+="&ts="+h;f.send(g,1)}},info:function(a,b){typeof ac_info_ware=="undefined"&&(ac_info_ware={});ac_info_ware[this.aid]||(ac_info_ware[this.aid]={});b&&(ac_info_ware[this.aid][a]=b);return ac_info_ware[this.aid][a]},count:function(a){if(!this.es)this.es={};this.es[a]||(this.es[a]=0);return++this.es[a]},erase:function(){if(this.xs)for(var a=0,b=this.xs.length;a<b;a++){this.xs[a].style.display="none";if(window.ActiveXObject)for(var c in this.cs[a])typeof this.cs[a][c]=="function"&&(this.cs[a][c]=null);
this.xs[a].parentNode.removeChild(this.xs[a]);this.cs[a]=null;this.zs[a]=null;this.ys[a]=null;this.xs[a]=null}if(this.interval)clearInterval(this.interval),this.interval=null;this.xs=[];this.ys=[];this.zs=[];this.cs=[]},render:function(){for(var a=this,b=null,c=null,e=null,h=null,g=c=null,d=null,d=d=null,e="",j=0,i=0,k=a.fs[a.state-1].length;i<k;i++){e=["ac_cs_",a.aid,"_",i+1].join("");b=a.fs[a.state-1][i];g=/^http/i.test(b[0])?/swf/i.test(b[0])?f.swf(e,b[0],b[1],b[2],a.wmode[b[3]],a.hrs==1?"cfg="+
encodeURIComponent(b[4]):""):/gif|jpg|jpeg|png|bmp/i.test(b[0])?f.img(e,b[0],b[1],b[2],b[4]):f.iframe(e,b[0],b[1],b[2]):f.ifmcode(e,b[0],b[1],b[2]);c={overflow:"hidden",position:r,display:"block",width:b[1]+"px",height:b[2]+"px",background:"none",border:0,textAlign:"left"};e=f.element("span",null,c);h=f.element("span",null,c);c=f.element("span",null,c);if(a.hrs===0&&(typeof b[4]=="string"&&b[4]||typeof b[4]=="object"&&b[4].cu))typeof b[4]=="object"?(d=b[4].cu,j=b[4].tg?b[4].tg:0):d=b[4],d=f.element("a",
{href:d,target:a._targets[j]},{position:"absolute",display:"block",top:0,left:0,margin:0,padding:0,width:b[1]+"px",height:b[2]+"px",textDecoration:"none",opacity:0,filter:"alpha(opacity=0)",zIndex:1,cursor:"pointer",background:"#ffffff"}),d.onclick=function(){var c=b[4].tu;b[11]||a.report(1,0,0,"i");if(c)for(var d=0,c=c.split("|||"),e=c.length;d<e;d++)f.send(c[d],1)},c.appendChild(d);if(a.hrs===0&&b[7]===0&&b[10])d=f.element("img",{src:b[10],alt:""},{cursor:"pointer",right:0,top:0,position:r,display:"block",
border:0}),d.onclick=function(){a.report(3,0,0,"i");a.erase()},c.appendChild(d);if(b[4].logo&&b[4].logo.show!=0){var l=[{top:0,left:0},{right:0,top:0},{bottom:0,right:0},{bottom:0,left:0}][b[4].logo.pos],d=f.element("img",{src:b[4].logo.ni[0]},{width:b[4].logo.ni[1]+"px",height:b[4].logo.ni[2]+"px",position:"absolute",border:"none"}),m;for(m in l)d.style[m]=l[m];if(b[4].logo.cu)d.onclick=function(){window.open(b[4].logo.cu)};c.appendChild(d)}c.appendChild(g);h.appendChild(c);e.appendChild(h);a.cs.push(g);
a.zs.push(c);a.ys.push(h);a.xs.push(e);a.append(e,i);b[6]==1?f.css(a.xs[i],{overflow:"visible"}):f.css(a.xs[i],{overflow:"hidden"});a.position=function(){return a.setPosition.call(a)};if(a.interval)clearInterval(a.interval),a.interval=null;b[7]==1?f.css(a.xs[i],{position:"relative"}):(f.css(a.ys[i],{overflow:"auto"}),f.css(a.xs[i],{zIndex:"2147483647",left:"-1000px",top:"-1000px"}),a.interval=setInterval(function(){a.position()},100),b[8]==1&&f.supportFixed&&f.css(a.xs[i],{position:"fixed"}))}}};
f.prototype.init.prototype=f.prototype;_AC_RJS_VERSION_="5.0.7.6"}})();
