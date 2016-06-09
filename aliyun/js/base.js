// JavaScript Document
/* 文档说明： 
 * 注意事项： 共用JS文件
 */
 ;$(function(){
    // NProgress.set(0.4);
    NProgress.start();
    NProgress.done();
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
 		bpcommon.tooltip($(this).attr("title"),$(this).parents(".sidebar-title")[0].offsetTop + 55,180);
 	},function(){
 		$(".tooltip.right").animate({"opacity":"0"},400,function(){
 			$(this).remove();
 		});
 	});
 	$(".sidebar-title-inner,.nav-icon").hover(function(){
 		if($(this).parents(".viewFramework-body").hasClass("viewFramework-sidebar-mini")){
 			bpcommon.tooltip($(this).attr("title"),$(this).parents(".sidebar-title,li.nav-item")[0].offsetTop + 55,50);
 		}
 	},function(){
 		if($(".tooltip.right")[0]){
 			$(".tooltip.right").animate({"opacity":"0"},400,function(){
	 			$(this).remove();
	 		});
 		}
 	});

    $(document).pjax('li.nav-item a', '#rigContainer');

    document.oncontextmenu=function(){return false;}
    document.onkeydown=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode==116){
            return false;
        }
    }
 	//click li load html
 	// $("li.nav-item").click(function(){
 	// 	var  src = $(this).attr("src");
 	// 	$(this).parents(".sidebar-content").find("li.nav-item").removeClass("on").end().end().addClass("on");
 	// 	$("#rigContainer").load(src);  
 	// });
    // $("li.nav-item").click(function(event){
    //     var url = $(this).attr("src");
    //     $.pjax({url: url, container: '.home-section-main'});
    //     $.pjax.reload('.home-section-main');
    // });
    // $(document).pjax('a', '.home-section-main',{timeout:6000});
    // $.pjax({
    //     selector: 'a',
    //     container: '.home-section-main', //内容替换的容器
    //     show: 'fade',  //展现的动画，支持默认和fade, 可以自定义动画方式，这里为自定义的function即可。
    //     cache: true,  //是否使用缓存
    //     storage: true,  //是否使用本地存储
    //     titleSuffix: '', //标题后缀
    //     filter: function(){},
    //     callback: function(){}
    // })
    

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
 	},
    "refresh":function(){
        
    }
 };













