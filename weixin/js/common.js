// JavaScript Document
/* 文档说明： 
 * 开发时间：
 * 开发者： yjs(413903021@qq.com) )   
 * 维护者：
 *
 * 样式版本： v1.1
 * 版本时间：
 * 注意事项： 共用JS文件
 */
 
 var baopingRequest = {
    "printLog": function(object){
        console.log(object);
    },
	"bp_alert":function(title){
		var html = '<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close"><span aria-hidden="true">×</span></button><h4 class="modal-title">用户名不能为空！</h4></div></div></div></div><div class="modal-backdrop"></div>';
		var backdrop = document.createElement("div");
		backdrop.className = "bp_showbox";
		backdrop.innerHTML = html;	
		document.body.appendChild(backdrop);		
		
		$(".modal").animate({"opacity":"1"},200,function(){
			$(".modal-dialog").css("-webkit-transform","translate(0, 0)");
			$(".modal-backdrop").addClass("in");
			setTimeout(function(){
				$(".modal-dialog").css("-webkit-transform","translate(0, 900%)");
				$(".modal").fadeOut(300);
				$(".modal-backdrop").removeClass("in").fadeOut(400);
			},1000)
		});
	},
	"getURLParam": function(params){
        var url = location.href;
        var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
        var paraObj = {}
        for (i = 0; j = paraString[i]; i++) {
            paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
        }
        var returnValue = paraObj[params.toLowerCase()];
        if (typeof(returnValue) == "undefined") {
            return "";
        }
        else {
            return returnValue;
        }
    },
	"isAndroid": function(){
        if (navigator.userAgent.toLowerCase().indexOf("android") > 0) {
            return true;
        }
        else {
            return false;
        }
    }
	
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 