// JavaScript Document
/* 文档说明： 
 * 注意事项： 共用JS文件
 */
 ;$(function(){
 	//toggle menu
 	$(".sidebar-title").click(function(){
 		$(this).parent(".sidebar-nav").toggleClass("sidebar-nav-fold").end()
 			   .next(".sidebar-trans").slideToggle(400);
 	});
 	
 	// toggle full or mini 
 	$(".sidebar-fold").click(function(){
 		if($(this).parents("[name=viewBody]").attr("class") == "viewFramework-body viewFramework-sidebar-full"){
 			$(this).parents("[name=viewBody]").attr("class","viewFramework-body viewFramework-sidebar-mini");
 		}else{
 			$(this).parents("[name=viewBody]").attr("class","viewFramework-body viewFramework-sidebar-full");
 		}
 	});
 	
 	$(".sidebar-title .sidebar-manage").hover(function(){
 		bpcommon.tooltip($(this).attr("title"),$(this).parents(".sidebar-title")[0].offsetTop + 60,180);
 	},function(){
 		$(".tooltip.right").animate({"opacity":"0"},400,function(){
 			$(this).remove();
 		});
 	});
 	$(".sidebar-title-inner,.nav-icon").hover(function(){
 		if($(this).parents(".viewFramework-body").hasClass("viewFramework-sidebar-mini")){
 			bpcommon.tooltip($(this).attr("title"),$(this).parents(".sidebar-title,li.nav-item")[0].offsetTop + 60,50);
 		}
 	},function(){
 		if($(".tooltip.right")[0]){
 			$(".tooltip.right").animate({"opacity":"0"},400,function(){
	 			$(this).remove();
	 		});
 		}
 	});

 	// click li load html
 	$("li.nav-item").click(function(){
 		var index = 0 , src = $(this).attr("src");
 		$(this).parents(".sidebar-content").find("li.nav-item").removeClass("on").end().end().addClass("on");
 		//$(".home-section-main").load($(this).attr("src"));  
 		$.pjax({
            url: src,
            data:"one=1",
            container : '.home-section-main'
        });  	
 	});

 	$(document).on('pjax:send', function() {
	  $('#loading').show()
	})
	$(document).on('pjax:complete', function() {
	  $('#loading').hide()
	})

 });

 var bpcommon = {
 	"tooltip" : function(item,itemTop,itemLeft){
 		$("body").append("<div role='tooltip' class='tooltip right' style='top:" + (itemTop) + "px;left:" + itemLeft + "px;opacity:1;'" + "><div class='tooltip-arrow'></div><div class='tooltip-inner'>" + item + "</div></div>");
 	},
 	"sendData" : function(){
        $.pjax({
            cache: false,
            type: 'POST',
			dataType: 'json',
            url: API_URL_ROOT+interfaceName,
            data:reqData,
            container : '#pjax-container'
        });      	
 	}
 };













