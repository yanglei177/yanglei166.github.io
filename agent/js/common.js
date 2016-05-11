// JavaScript Document
/* 文档说明： 
 * 开发时间：
 * 开发者： yjs(413903021@qq.com) )   
 * 维护者：
 */
//var SERVER_URL = "http://m.ebaoping.com";  //生产环境
var SERVER_URL = "http://test.ebaoping.com"; //测试环境
 
 var API_URL_ROOT = SERVER_URL + "/baoping-api/api/"; 
 var IMG_PATH_ROOT = SERVER_URL + "/data/image/";

var baopRequest = {
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
	    "sendData": function(interfaceName, reqData, successCallback, errorCallback){            	
			if( interfaceName != "city/init"){
				$.showIndicator();
			}
	        $.ajax({
	            cache: false,
	            type: 'POST',
				dataType: 'json',
	            url: API_URL_ROOT+interfaceName,
	            data:reqData,
	            success: function(data){
	                window.clearTimeout(timer);                
	                successCallback(data);
					$.hideIndicator();
	            }
	        });      	
	        var timer = window.setTimeout(function(){
	            requestTimeout();
	        }, 60000);
	        
	        function requestTimeout(){
	             $.alert('网络好像不给力哦!');            
	        }
	    }
	};