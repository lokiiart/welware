var aa = location.href.match(/(\w+)\.html/)[1],
	dd;
if(aa.split("_").length == 3){
	dd = parseInt(aa.split("_")[1])
	}
if(aa.split("_").length == 2){
	if(aa.split("_")[0] == "a"){
		dd = aa.split("_")[1]
		}else{
			dd = aa.split("_")[0]
			}
	}
if(aa.split("_").length == 1){
	dd = aa
	}

window["_BFD"] = window["_BFD"] || {};
_BFD.BFD_INFO = {
	//文章id
 	id:dd,
	page_type : (function(){
		switch(location.host){
			case 'wapjbk.39.net':
				return 'jbbk_detail';
				break;
			default:
				return '';
				break;
		};
	})()
};


_BFD.BFD_USER = {
	"user_id": "", //登录后的用户id，未登录传0
	"user_cookie": document.cookie    //不管是否登录都需要传，对于网站用户的标识
};
_BFD.client_id = "C39jiankang";
_BFD.script = document.createElement("script");
_BFD.script.type = "text/javascript";
_BFD.script.async = true;
_BFD.script.charset = "utf-8";
_BFD.script.src = (('https:' == document.location.protocol?'https://ssl-static1':'http://static1')+'.baifendian.com/service/39jiankang/39jiankang_M.js');
document.getElementsByTagName("head")[0].appendChild(_BFD.script);

switch(location.host){
	case 'wapjbk.39.net':
		//适配文章页
		if(location.href.match(/\/\d+.html/)){
			//文章推荐
			_BFD.articleVAV = function(data,bid,req_id){
				var html = '';
				$.each(data, function(i, v){
					html += '<li><a href="' + v.url + '">' + (i ? '<i' + (i < 4 ? ' class="h"' : '') + '>' + (i + 1) + '.</i>' : '<em>HOT</em>') + v.name + '</a></li>';
				});
				$('.bfd-art').append('<ul class="list">' + html + '</ul>');
				_BFD.bind(data,"articleVAV",bid,req_id); //此处是推荐返回时百分点绑定事件的方法，请不要修改。
			};
			//药品推荐
			_BFD.drugVAV = function(data,bid,req_id){
				var html = '';
				$.each(data, function(i, v){
					html += '<li><a class="flexbox" href="' + v.url + '"><img src="' + v.img + '"><span class="flex"><b>' + v.name + '</b><i>厂商：' + (v.merchant.length ? v.merchant[0] : '暂无') + '</i></span><em>药品说明</em></a></li>';
				});
				$('.bfd-drug').append('<ul class="listHelp drug">' + html + '</ul>');
				_BFD.bind(data,"drugVAV",bid,req_id);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			};
		};
		break;
	default:
		break;
};