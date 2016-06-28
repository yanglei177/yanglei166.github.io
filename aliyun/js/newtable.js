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
}
;jQuery(function(){
	$(".product-nav-list ul li").click(function(){
    	if(!$(this).hasClass("active")){
    		$(this).addClass("active").siblings().removeClass("active");
    		$("#pageTitle").html($(this).find(".nav-title").html());
    		initData(rkdata[$(this).attr("src")]);
    		$(".modal-header .modal-title").html("创建" + $(this).find(".nav-title").html());
    	}
    });
    initData(rkdata.staffList);
    $(".modal-header .modal-title").html("创建" + $("#pageTitle").html());
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
})





