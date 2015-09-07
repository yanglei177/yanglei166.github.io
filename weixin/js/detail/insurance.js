$(function(){
	 // init form
	var oJjbz = {
		 "clssx" : {
			 	"val" : "投保"
		 	},
		 "dsfzrx" : {
			 	"val" : "30万"
		 	},
		 "qcdqx" : {
			 	"val" : "投保"
		 	},
		 "sjzwzrx" : {
			 	"val" : "1万"
		 	},
		 "ckzwzrx" : {
			 	"val" : "1万/座"
		 	},
		 "blddpsx" : {
			 	"val" : "国产玻璃"
		 	},
		 "cshhx" : {
			 	"val" : "不投保"
		 	},
		 "ssssx" : {
			 	"val" : "不投保"
		 	},
		 "zrssx" : {
			 	"val" : "不投保"
		 	},
		 "dsftyx" : {
			 	"val" : "投保"
		 	},	
		 "bjmp" : {
			 	"val" : "投保"
		 	}
	 };
	 var oQmbz = {
		 "clssx" : {
			 	"val" : "投保"
		 	},
		 "dsfzrx" : {
			 	"val" : "50万"
		 	},
		 "qcdqx" : {
			 	"val" : "投保"
		 	},
		  "sjzwzrx" : {
			 	"val" : "1万"
		 	},
		 "ckzwzrx" : {
			 	"val" : "1万"
		 	},
		 "blddpsx" : {
			 	"val" : "国产玻璃"
		 	},
		 "cshhx" : {
			 	"val" : "5000元"
		 	},
		 "ssssx" : {
			 	"val" : "1万"
		 	},
		 "zrssx" : {
			 	"val" : "投保"
		 	},
		 "dsftyx" : {
			 	"val" : "投保"
		 	},	
		 "bjmp" : {
			 	"val" : "投保"
		 	}
	 };
	 var oJbbz = {
		 "clssx" : {
			 	"val" : "投保"
		 	},
		 "dsfzrx" : {
			 	"val" : "20万"
		 	},
		 "qcdqx" : {
			 	"val" : "不投保"
		 	},
		 "sjzwzrx" : {
			 	"val" : "不投保"
		 	},
		 "ckzwzrx" : {
			 	"val" : "不投保"
		 	},
		 "blddpsx" : {
			 	"val" : "不投保"
		 	},
		 "cshhx" : {
			 	"val" : "不投保"
		 	},
		 "ssssx" : {
			 	"val" : "不投保"
		 	},
		 "zrssx" : {
			 	"val" : "不投保"
		 	},
		 "dsftyx" : {
			 	"val" : "不投保"
		 	},	
		 "bjmp" : {
			 	"val" : "投保"
		 	}
	 };
	 var oButb = {
		 "clssx" : {
			 	"val" : "不投保"
		 	},
		 "dsfzrx" : {
			 	"val" : "不投保"
		 	},
		 "qcdqx" : {
			 	"val" : "不投保"
		 	},
		 "sjzwzrx" : {
			 	"val" : "不投保"
		 	},
		 "ckzwzrx" : {
			 	"val" : "不投保"
		 	},
		 "blddpsx" : {
			 	"val" : "不投保"
		 	},
		 "cshhx" : {
			 	"val" : "不投保"
		 	},
		 "ssssx" : {
			 	"val" : "不投保"
		 	},
		 "zrssx" : {
			 	"val" : "不投保"
		 	},
		 "dsftyx" : {
			 	"val" : "不投保"
		 	},	
		 "bjmp" : {
			 	"val" : "不投保"
		 	}
	 };
	 var oOther = {		
		 "blddpsx" : {
			 	"val" : "不投保"
		 	},
		 "cshhx" : {
			 	"val" : "不投保"
		 	},
		 "ssssx" : {
			 	"val" : "不投保"
		 	},
		 "zrssx" : {
			 	"val" : "不投保"
		 	},
		 "dsftyx" : {
			 	"val" : "不投保"
		 	}
	 };
	 localStorage.setItem("oJjbz",JSON.stringify(oJjbz));
	 localStorage.setItem("oQmbz",JSON.stringify(oQmbz));
	 localStorage.setItem("oJbbz",JSON.stringify(oJbbz));
	 localStorage.setItem("oButb",JSON.stringify(oButb));
	 localStorage.setItem("oOther",JSON.stringify(oOther));
	 
	 function initData(data,bPart){			 
		 var data = JSON.parse(data);
		 //$(".select option").removeAttr("selected");
		 
		 if(carCompareCity != "北京市"){
			  $("div[name=dsftyx]").parents(".text_box").find(".select option").removeAttr("selected");
			  $("div[name=dsftyx]").html(data.dsftyx.val).parents(".text_box").find(".select option[value='" + data.dsftyx.val + "']").attr("selected","selected");
		 }
		 if(!bPart){
			 $("div[name=clssx]").parents(".text_box").find(".select option").removeAttr("selected");
			 $("div[name=clssx]").html(data.clssx.val).parents(".text_box").find(".select option[value='" + data.clssx.val + "']").attr("selected","selected");
			 $("div[name=dsfzrx]").parents(".text_box").find(".select option").removeAttr("selected");
			 $("div[name=dsfzrx]").html(data.dsfzrx.val).parents(".text_box").find(".select option[value='" + data.dsfzrx.val + "']").attr("selected","selected");	
			 $("div[name=qcdqx]").parents(".text_box").find(".select option").removeAttr("selected");	 
			 $("div[name=qcdqx]").html(data.qcdqx.val).parents(".text_box").find(".select option[value='" + data.qcdqx.val + "']").attr("selected","selected");
			 $("div[name=sjzwzrx]").parents(".text_box").find(".select option").removeAttr("selected");
			 $("div[name=sjzwzrx]").html(data.sjzwzrx.val).parents(".text_box").find(".select option[value='" + data.sjzwzrx.val + "']").attr("selected","selected");
			 $("div[name=ckzwzrx]").parents(".text_box").find(".select option").removeAttr("selected");
			 $("div[name=ckzwzrx]").html(data.ckzwzrx.val).parents(".text_box").find(".select option[value='" + data.ckzwzrx.val + "']").attr("selected","selected");
			 $("div[name=bjmp]").parents(".text_box").find(".select option").removeAttr("selected");
			 $("div[name=bjmp]").html(data.bjmp.val).parents(".text_box").find(".select option[value='" + data.bjmp.val + "']").attr("selected","selected");
		 }
		 
		 $("div[name=blddpsx]").parents(".text_box").find(".select option").removeAttr("selected");		
		 $("div[name=blddpsx]").html(data.blddpsx.val).parents(".text_box").find(".select option[value='" + data.blddpsx.val + "']").attr("selected","selected");
		 $("div[name=cshhx]").parents(".text_box").find(".select option").removeAttr("selected");
		 $("div[name=cshhx]").html(data.cshhx.val).parents(".text_box").find(".select option[value='" + data.cshhx.val + "']").attr("selected","selected");
		 $("div[name=ssssx]").parents(".text_box").find(".select option").removeAttr("selected");
		 $("div[name=ssssx]").html(data.ssssx.val).parents(".text_box").find(".select option[value='" + data.ssssx.val + "']").attr("selected","selected");
		 $("div[name=zrssx]").parents(".text_box").find(".select option").removeAttr("selected");
		 $("div[name=zrssx]").html(data.zrssx.val).parents(".text_box").find(".select option[value='" + data.zrssx.val + "']").attr("selected","selected");				 	 
	 }	
		 
	// init data
	if(localStorage.getItem("carCompare1")){
		var carCompare1 = JSON.parse(localStorage.getItem("carCompare1"));
	 	var carCompareCity = carCompare1.insuranceCity;
		if(carCompareCity != "北京市"){$("#tyx").show();}
	}	 
	 
	 if(localStorage.getItem("oDiy")){
		 initData(localStorage.getItem("oDiy"));
	 }else{
		 initData(localStorage.getItem("oJjbz"));
	 }
	 
	 // Call interface to get the data			
	baopRequest.sendData("insurance/type", "", function(data){
		if (data.code == 0) {
			console.log(data)
		}else{
			baopRequest.bp_alert(data.message,2000);
		}
	});	
	/*$("#signupForm").validate({		
		submitHandler:function(form){
			
		}
	});*/	
	$(".nextbtn").click(function(){
		var oJqcc = {
			"jqx" : {
					"val" : "投保",
					"id" : "4a3c9a6b-41b7-11e5-bd9a-52540003"
				},
			 "carcs" : {
					"val" : "代缴",
					"id" : "4a45b578-41b7-11e5-bd9a-52540003"
				}
		};
		var oDiy = {
			 "clssx" : {
					"val" : $("div[name=clssx]").html(),
					"id" : $("div[name=clssx]").attr("id"),
					"name" : $("div[name=clssx]").prev(".text").val()
				},
			 "dsfzrx" : {
					"val" : $("div[name=dsfzrx]").html(),
					"id" : $("div[name=dsfzrx]").attr("id"),
					"name" : $("div[name=dsfzrx]").prev(".text").val()
				},
			 "qcdqx" : {
					"val" : $("div[name=qcdqx]").html(),
					"id" : $("div[name=qcdqx]").attr("id"),
					"name" : $("div[name=qcdqx]").prev(".text").val()
				},
			 "sjzwzrx" : {
					"val" : $("div[name=sjzwzrx]").html(),
					"id" : $("div[name=sjzwzrx]").attr("id"),
					"name" : $("div[name=sjzwzrx]").prev(".text").val()
				},
			 "ckzwzrx" : {
					"val" : $("div[name=ckzwzrx]").html(),
					"id" : $("div[name=ckzwzrx]").attr("id"),
					"name" : $("div[name=ckzwzrx]").prev(".text").val()
				},
			 "blddpsx" : {
					"val" : $("div[name=blddpsx]").html(),
					"id" : $("div[name=blddpsx]").attr("id"),
					"name" : $("div[name=blddpsx]").prev(".text").val()
				},
			 "cshhx" : {
					"val" : $("div[name=cshhx]").html(),
					"id" : $("div[name=cshhx]").attr("id"),
					"name" : $("div[name=cshhx]").prev(".text").val()
				},
			 "ssssx" : {
					"val" : $("div[name=ssssx]").html(),
					"id" : $("div[name=ssssx]").attr("id"),
					"name" : $("div[name=ssssx]").prev(".text").val()
				},
			 "zrssx" : {
					"val" : $("div[name=zrssx]").html(),
					"id" : $("div[name=zrssx]").attr("id"),
					"name" : $("div[name=zrssx]").prev(".text").val()
				},
			"dsftyx" : {
					"val" : $("div[name=dsftyx]").html(),
					"id" : $("div[name=dsftyx]").attr("id"),
					"name" : $("div[name=dsftyx]").prev(".text").val()
				},	
			 "bjmp" : {
					"val" : $("div[name=bjmp]").html(),
					"id" : $("div[name=bjmp]").attr("id"),
					"name" : $("div[name=bjmp]").prev(".text").val()
				}
	 	};
		if($("#insurance").hasClass("off")){
			localStorage.removeItem("oJqcc");
		}else{
			localStorage.setItem("oJqcc",JSON.stringify(oJqcc));			
		}
		localStorage.setItem("oDiy",JSON.stringify(oDiy));
		if(carCompareCity != "北京市"){
			location.href="upload.html";
		}else{
			location.href="select_company.html";
		}
	});
	
	
	// other_insur		
	$(".text_box .select").on("change",function(){
		 var iNotb = 10;		 
		 //$(this).prev(".textarr").val($(this).val());
		 $(this).prev(".text2arr").html($(this).val()).removeClass("error");
		 $(".text2arr").each(function(){			
			if($(this).html() == "不投保"){
				iNotb--;
			}			
		});
		if(iNotb == 0){
			$("#business").addClass("off").next("span").html("不投保");	
		}else{
			$("#business").removeClass("off").next("span").html("投保");
		}
		
		if($("div[name=clssx]").html() == "不投保"){
			initData(localStorage.getItem("oOther"),true);
			$("div[name=blddpsx]").parents(".text_box").attr("title","yjs").find(".select").hide();
			 $("div[name=cshhx]").parents(".text_box").attr("title","yjs").find(".select").hide();
			 $("div[name=ssssx]").parents(".text_box").attr("title","yjs").find(".select").hide();
			 $("div[name=dsftyx]").parents(".text_box").attr("title","yjs").find(".select").hide();
			 $("div[name=zrssx]").parents(".text_box").attr("title","yjs").find(".select").hide();
			 
			 $("div[title='yjs']").find(".text2arr").on("click",function(){
				 var title = $(this).parents(".verifydes").find(".text").val();
				 baopRequest.bp_alert("选择车辆损失险后才能选择" + title + "!",2500); 
			 });
		}else{
			$("div[name=blddpsx]").parents(".text_box").removeAttr("title").find(".select").show();
			$("div[name=cshhx]").parents(".text_box").removeAttr("title").find(".select").show();
			$("div[name=ssssx]").parents(".text_box").removeAttr("title").find(".select").show();
			$("div[name=dsftyx]").parents(".text_box").removeAttr("title").find(".select").show();
			$("div[name=zrssx]").parents(".text_box").removeAttr("title").find(".select").show();
		}
	 });
	 
	 
	
	
	// tab init
	function count(){
		var comhei = Math.floor($('.tabnav li').width()/195 * 75);
		if(comhei > 38){
			$(".tabnav li").css({"height":"38px","line-height":"38px"});
		}else{
			$(".tabnav li").css({"height":comhei,"line-height":comhei+"px"});
		}		
	}
	count();
	
	$(".tabnav ul li").click(function(){
		var index = $(".tabnav ul li").index(this);
		$(this).addClass("current").siblings().removeClass("current");
		switch (index){
			case 0:
			  initData(localStorage.getItem("oJjbz"));
			  break;
			case 1:
			  initData(localStorage.getItem("oQmbz"));
			  break;
			case 2:
			  initData(localStorage.getItem("oJbbz"));
			  break;  
			default:			  
		}
		
	});
		
	//交强险
	$("#insurance").click(function(){		
		if(!$(this).hasClass("off")){
			$(this).addClass("off");
			$(".col_red").show();				
		}else{
			$(this).removeClass("off");	
			$(".col_red").hide();		
		}
	});
	 //商业险
	$("#business").click(function(){
		if(!$(this).hasClass("off")){
			$(this).addClass("off").next("span").html("不投保");				
			initData(localStorage.getItem("oButb"));
		}else{
			$(this).removeClass("off").next("span").html("投保");
			initData(localStorage.getItem("oJjbz"));
		}
		
		});	
		
	
});