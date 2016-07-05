var rkdata = {
	"infoList":[
		{"name":"兽药信息Id",
		 "require":true,
		 "type":"select",
		 "option":["10病药","11病药","12病药","13病药"],
		 "default":"0"
		},
		{"name":"总数量",
		 "require":true,
		 "type":"text",
		 "default":"0"
		},
		{"name":"单价",
		 "require":true,
		 "type":"text",
		 "default":"0"
		},
		{"name":"总金额",
		 "require":true,
		 "type":"text",
		 "default":"0"
		},
		{"name":"赠送数量",
		 "require":true,
		 "type":"text",
		 "default":"0"
		}
	],
	"staffList":[
		{"name":"兽药名称",
		 "require":true,
		 "type":"text",
		 "default":"0"
		},
		{"name":"兽药类型 ",
		 "require":true,
		 "option":["富安达"],
		 "type":"select",
		 "default":"0"
		},
		{"name":"规格 ",
		 "require":true,
		 "type":"text",
		 "default":""
		},
		{"name":"供应商",
		 "require":true,
		 "type":"text",
		 "default":"0"
		},
		{"name":"备 注",
		 "require":true,
		 "type":"text",
		 "default":"0"
		}
	]
};

var data = shortData = {
	"listHead": 
		[{"title":"磁盘ID/磁盘名称",
		  "condition":"",
		  "default":0,
		  "orcheck":true,
		  "del":""
		 },
		 {"title":"磁盘种类",
		  "condition":["全部","普通云盘","高效云盘","SSD云盘","本地SSD盘","本地磁盘"],	
		  "default":3,
		  "del":""
		 },
		 {"title":"磁盘状态",
		  "condition":["全部","使用中","待挂载","挂载中","卸载中","创建中","初始化中","已过期"],	
		  "default":5,
		  "del":""
		 },
		 {"title":"付费类型",
		  "condition":"",	
		  "default":2,
		  "del":""
		 },
		 {"title":"可卸载",
		  "condition":["全部","支持","不支持"],	
		  "default":2,
		  "del":""
		 },
		 {"title":"可用区",
		  "condition":"",	
		  "default":1,
		  "del":""
		 },
		 {"title":"磁盘属性",
		  "condition":["全部","数据盘","系统盘"],	
		  "default":2,
		  "del":""
		 },
		 {"title":"标签",
		  "condition":"",	
		  "default":0,
		  "del":""
		 },
		 {"title":"操作",
		  "condition":"",	
		  "default":0,
		  "orcheck":true,
		  "del":""
		 }],
	"listBody":
		[
		 	["424423/磁盘一","127.0.23.1种类","磁盘状态(使用中)","支付宝收","是否卸载(支持)","可用区","磁盘属性(数据盘)","yjs","修改"],
		 	["424323/磁盘二","127.0.3.12种类","磁盘状态(待挂载)","支付宝收","是否卸载(支持)","可用区","磁盘属性(系统盘)","机房","修改"],
		 	["424323/磁盘三","127.2.3.32种类","磁盘状态(卸载中)","支付宝收","是否卸载(支持)","可用区","磁盘属性(数据盘)","工程","修改"],
		 	["424323/磁盘四","127.54.23.1种类","磁盘状态(创建中)","支付宝收","是否卸载(支持)","可用区","磁盘属性(数据盘)","new","修改"],
		 	["424323/磁盘五","127.0.3.1种类","磁盘状态(使用中)","支付宝收","是否卸载(支持)","可用区","磁盘属性(数据盘)","old","修改"]
		],
	eachFun:function(ele){
		var innerHtml = "";			
		if(ele.condition){
			innerHtml = "<th><div class='dropdown'><a href='' class='dropdown-toggle' data-toggle='dropdown'><span>" + ele.title + "</span><span>(" + ele.condition[ele.default] + ")</span> <span class='caret'></span></a><ul class='dropdown-menu aliyun-console-table-search-list'>",liHtml = "";
			for(var j=0;j<ele.condition.length;j++){
				if(j == ele.default){
					liHtml += "<li><a href='javascript:void(0)'><span class='icon-yes'></span> <span>" + ele.condition[j] + "</span></a></li>";
				}else{
					liHtml += "<li><a href='javascript:void(0)'><span>" + ele.condition[j] + "</span></a></li>";
				}
				
			}
			innerHtml += liHtml + "</ul></div></th>"; 
		}else{
			innerHtml += "<th>" + ele.title + "</th>";
		}
		return innerHtml;
	},
	headFun:function(ele){
		var headHtml = "<th><input type='checkbox' aria-label='全选'></th>";
		tanHtml = "";
		for(var i=0;i<ele.listHead.length;i++){	
			var checkHtml = "<input type='checkbox' checked='true' class='margin-right-1'>";
			if(ele.listHead[i].orcheck){
				checkHtml = "<input type='checkbox' disabled='disabled' checked='true class='margin-right-1'>"		
			}else if(ele.listHead[i].del){
				checkHtml = "<input type='checkbox' class='margin-right-1'>"
			}
			tanHtml += "<div class='pull-left list-user-preferences-uint nowrap'><label style='cursor: pointer' class='inline-block text-muted'> " + checkHtml + ele.listHead[i].title + "</label></div>";
			if(ele.listHead[i].del){continue;}		
			headHtml += data.eachFun(ele.listHead[i]);
		}
		$("#dataTab thead tr").append(headHtml);
		$(".dropdown-menu li:not(.disabled) a").on('click.bs.dropdown', function(){
			$(this).parent().siblings("li").find("a .icon-yes").remove();
			$(this).parents("ul").prev("a").find("span").eq(1).html("(" + $(this).find("span").html() + ")");
			$(this).prepend("<span class='icon-yes'></span>");
		});
	},
	bodyFun:function(ele,arr){
		for(var j=0;j<ele.listBody.length;j++){
			var bodyHtml = "<td><input type='checkbox' aria-label='选中' ></td>";
			if(arr && arr.length > 0){
				listlabel:for(var k=0;k<ele.listBody[j].length;k++){	
					for(var m=0;m<arr.length;m++){
						if(k == arr[m]){continue listlabel;}
					}
					//bodyHtml += "<td>" + ele.listBody[j][k] + "</td>";
					if(k == ele.listBody[j].length-1){
						bodyHtml += "<td><a href='javascript:void(0)' data-target='#showbox' data-toggle='modal'>" + ele.listBody[j][k] + "</a></td>";
					}else{
						bodyHtml += "<td>" + ele.listBody[j][k] + "</td>";
					}
				}
			}else{
				for(var k=0;k<ele.listBody[j].length;k++){
					if(k == ele.listBody[j].length-1){
						bodyHtml += "<td><a href='javascript:void(0)' data-target='#showbox' data-toggle='modal'>" + ele.listBody[j][k] + "</a></td>";
					}else{
						bodyHtml += "<td>" + ele.listBody[j][k] + "</td>";
					}	
				}
			}
			bodyHtml = "<tr>" + bodyHtml +"</tr>";
			$("#dataTab tbody").append(bodyHtml);
		}
	}
};
var tanHtml = "";
jQuery(function(){
	//init	
	$(".con-title-box").width($(".viewFramework-product-body").width()*0.98 + "px");
	data.headFun(data);
	data.bodyFun(data);
	initData(rkdata.staffList);
	$(".modal-header .modal-title").html("创建" + $("#pageTitle").html());

	$(".product-nav-list ul li").click(function(){
    	if(!$(this).hasClass("active")){
    		$(this).addClass("active").siblings().removeClass("active");
    		$("#pageTitle").html($(this).find(".nav-title").html());
    		initData(rkdata[$(this).attr("src")]);
    		$(".modal-header .modal-title").html("创建" + $(this).find(".nav-title").html());
    	}
    });
        
    function initData(data){
    	var showHtml = "";
    	for(var i=0;i<data.length;i++){
    		var textHtml = "" ,requireHtml = "";
    		if(data[i].type == "text"){
    			textHtml += "<input type='text' placeholder='请输入" + data[i].name + "' value='" + data[i].default + "' class='form-text' autocomplete='off'>";
    		}
    		if(data[i].type == "select"){
    			for(var j=0;j<data[i].option.length;j++){
    				textHtml += "<option>" + data[i].option[j] + "</option>";
    			}
    			textHtml = "<select style='width: 260px;' class='form-control'>" + textHtml + "</select>";
    		}
    		if(data[i].require){
    			requireHtml += "<span class='form-label'><span class='star'>*</span>" + data[i].name + "</span>";
    		}else{
    			requireHtml += "<span class='form-label'>" + data[i].name + "</span>";
    		}
    		showHtml += "<div class='form-item'>" + requireHtml + textHtml + "</div>"
    	}
    	$("#user-form").html(showHtml);
    }

    $(".list-tool-bar-button").hover(function(){
		$(this).after("<div class='popover left in' style='top:-5px; left:-105px; display:block;''><div class='arrow'></div><div class='popover-inner'><div>自定义列表项</div></div></div>");
	},function(){
		$(this).next(".popover").remove();
	}).click(function(e){
		$("body").addClass("modal-open").append("<div class='modal fade in' style='display:block;' tabindex='-1' role='dialog' id='defined'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>自定义列表项</h4></div><div class='modal-body clearfix row'><div class='col-sm-12 clearfix'>" + tanHtml + "</div></div><div class='modal-footer'><button class='btn btn-primary' id='modelSure'>确定</button> <button class='btn btn-default' id='cancel'>取消</button></div></div></div></div>");
		$(".modal-backdrop").addClass("in");
		e.stopPropagation();
	});    

	$(document).click(function(e){
		if(e.target.className == "modal fade in" || e.target.className == "close" || e.target.id == "cancel" || e.target.id == "modelSure"){
			$("body").removeClass("modal-open");
	    	$(".modal-backdrop").removeClass("in");
	    	$("#defined").remove();
		}
	});

	$(document).delegate("#modelSure","click",function(){
		var arr = [];
	    $(".modal-body .pull-left.nowrap").each(function(index,ele){
	    	$("#dataTab thead tr").html("");
	    	$("#dataTab tbody").html("");
	    	shortData = data;
	    	if(!$(ele).find(":checkbox").prop("checked")){
	    		shortData.listHead[index].del = true;
	    		arr.push(index);    		
	    	}else{
	    		shortData.listHead[index].del = "";
	    	}
	    	
	    });
	    data.bodyFun(shortData,arr);   
	    data.headFun(shortData);
	});
})





