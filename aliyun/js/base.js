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
    //伸缩3级菜单
    $(document).delegate(".product-navbar-collapse","click",function(){
      $(this).parents(".viewFramework-product").toggleClass("viewFramework-product-col-1");
    });
    //日历插件    
    $("input[name='calendar']").datetimepicker({            
        format: 'YYYY-MM-DD',
        defaultDate: '2016-11-01',
        minDate : new Date()  //当前日期前不可选择
    });


    //后期可以通过ajax改变右侧区域
    $("li.nav-item").click(function(){
        if(!$(this).hasClass("on")){
            $(this).parents(".sidebar-content").find("li.nav-item").removeClass("on").end().end().addClass("on");
            $(document).pjax('li.nav-item a', '#rigContainer');
        }else{
            return false;
        }
    });
    //
     $("#loading").ajaxStart(function(){
       $(this).show();
     }).ajaxStop(function(){
       $(this).hide();
     });
      

 });

 var bpcommon = {
    "tooltip" : function(item,itemTop,itemLeft){
        $("body").append("<div role='tooltip' class='tooltip right' style='top:" + (itemTop) + "px;left:" + itemLeft + "px;opacity:1;'" + "><div class='tooltip-arrow'></div><div class='tooltip-inner'>" + item + "</div></div>");
    },
 	"sendData" : function(interfaceName,reqData,succCall,errorCall){
        $.ajax({
            cache: false,
            type: 'POST',
			dataType: 'json',
            url: API_URL_ROOT+interfaceName,
            data:reqData,
            success: function(data){
                window.clearTimeout(timer); 
                succCall();
            }            
        }); 
        var timer = window.setTimeout(requestTimeout, 80000);
            function requestTimeout(){
                alert("网络好像不给力哦!");            
            }     	
 	}
 };













