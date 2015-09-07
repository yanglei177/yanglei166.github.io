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
 var SERVER_URL = "http://test.ebaoping.com";
 
 var API_URL_ROOT = SERVER_URL + "/baoping-api/api/";
 //API_URL_ROOT = "http://localhost:8080" + "/baoping-api/api/";  //zyg test
 
 var IMG_PATH_ROOT = SERVER_URL + "/data/image/"

 //window.localStorage.setItem("uid","cacafbeaa0c444148d4bff09633c6822");
 
 var baopRequest = {
    "printLog": function(object){
        console.log(object);
    },
	"bp_alert":function(title,oAuto){
		var html = '<div class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close"><span aria-hidden="true">×</span></button><h4 class="modal-title">' + title + '</h4></div></div></div></div><div class="modal-backdrop"></div>';
		var backdrop = document.createElement("div");
		backdrop.className = "bp_showbox";
		backdrop.innerHTML = html;	
		document.body.appendChild(backdrop);		
		
		$(".modal").animate({"opacity":"1"},200,function(){
			$(".modal-dialog").css("-webkit-transform","translate(0, 0)");
			$(".modal-backdrop").addClass("in");
			if(oAuto){
				setTimeout(function(){
					$(".modal-dialog").css("-webkit-transform","translate(0, -200%)");
					$(".modal").fadeOut(300);
					$(".modal-backdrop").removeClass("in").fadeOut(400);
					$(".bp_showbox").remove();
				},oAuto)
			}else{
				$(document).click(function() {
					$(".modal-dialog").css("-webkit-transform","translate(0, -200%)");
					$(".modal").fadeOut(300);
					$(".modal-backdrop").removeClass("in").fadeOut(400);
					$(".bp_showbox").remove();
				});
			}			
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
    },
	"is_weixin":function(){
		var ua = navigator.userAgent.toLowerCase();
		if(ua.match(/MicroMessenger/i)=="micromessenger") {
			return true;
		} else {
			return false;
		}
	},
    "sendData": function(interfaceName, reqData, successCallback, errorCallback){        
    	baopRequest.printLog(reqData);
		$("#loading,#loadingbox").show();
        $.ajax({
            cache: false,
            type: 'POST',
			dataType: 'json',
            url: API_URL_ROOT+interfaceName,
            data:reqData,
            success: function(data){
                window.clearTimeout(timer);                
                successCallback(data);
				$("#loading,#loadingbox").hide();
            }
        });      	
        var timer = window.setTimeout(function(){
            requestTimeout();
        }, 30000);
        
        function requestTimeout(){
            alert("网络好像不给力哦!");            
        }
    }
	
 }
 
 $(function(){
	 // select
	 alert($(".datetime").val())
	 $(".text_box .select,.text_box .datetime").on("change",function(){	alert($(".datetime").val())
	 	if($(this).val() != "请选择"){
			$(this).prev(".textarr").val($(this).val());		
			$(this).parents(".verifydes").siblings(".des").css("visibility","hidden"); 	
		}	 					
	 });
	 
	 
	 //radio button  (common class "simulateradio")
	 $(".simulateradio").click(function(){
		 $(this).find("i").addClass("on").end().siblings(".simulateradio").find("i").removeClass("on");
	 });	  
	 
	 //ye or no
	 $(".orbtn").click(function(){
		$(this).toggleClass("on");
	 });
	 
	 
	 
	 
	 
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 