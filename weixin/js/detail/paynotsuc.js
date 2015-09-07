$(function(){
	var reqData = "id=" + baopRequest.getURLParam("id");
	if(decodeURI(baopRequest.getURLParam("diff")) == 1){
		$(".storebox ul li").addClass("diff");
	}
	if(decodeURI(baopRequest.getURLParam("status")) == "已取消"){
		$("#tbinfo_box").hide();
		$("#cancel").html("<input type='button' class='combtn disable' value='已取消'>");
	}	
	if(decodeURI(baopRequest.getURLParam("status")) == "已确认"){	
		$("#updBtn").remove();	
		$("#cancel").append("<input type='button' id='comfirmbtn' class='editbtn' value='已确认'>")
	}	
	
	$(document).delegate("#comfirmbtn", "click", function() {
		location.href="offline.html";
	});
	baopRequest.sendData("scheme/findById", reqData, function(data){
		if (data.code == 0) {
			$(".p_title").html(localStorage.getItem("title"));
			$(".tb_city").html(localStorage.getItem("tb_city"));
			$(".cz_name").html(localStorage.getItem("cz_name"));	
			$(".cz_tel").html(localStorage.getItem("cz_tel"));	
			
			localStorage.setItem("agentName",data.quotation.agentName);
			localStorage.setItem("agentPhone",data.insurantInfo.agentPhone);
			localStorage.setItem("agentaddress",data.insurantInfo.agentaddress);
			localStorage.setItem("officetime",data.insurantInfo.opeanTime + "-" + data.insurantInfo.closeTime );
			localStorage.setItem("agentRemark",data.insurantInfo.agentRemark);						
			localStorage.setItem("orderId",data.quotation.orderId);	
			if(data.insurantInfo.receiptType == 1){
				var receiptType = "公司";
			}else{
				var receiptType = "个人";
			}
			if(data.quotation.orderStatus){
				var status = data.quotation.orderStatus, statusClass = "status";
				if(status == "已取消"){
					statusClass = "status gray";
				}
				$("#status").attr("class",statusClass).html(status);
			}						
			$(".wxts").html(data.quotation.assuranceMark);	
			var iscarowner = "";
			if(data.insurantInfo.isCarOwener == "1"){
				iscarowner = "被保险人是车主";
			}else{
				iscarowner = "被保险人不是车主";
			}
			if(data.insurantInfo){
				$(".iscarowner").html(iscarowner);
				$(".tbxx_name").html("姓名："+ data.insurantInfo.name);
				$(".tbxx_sfz").html("身份证号码：" + data.insurantInfo.identificationNo);
				$(".tbxx_img1").html("<img src='" + data.insurantInfo.identificationImgFront + "' />").height(92);
				$(".tbxx_img2").html("<img src='" + data.insurantInfo.identificationImgBack + "' />").height(92);
				$(".ad_name").html(data.insurantInfo.assuranceMark);
				$(".ad_tel").html(data.insurantInfo.assuranceMark);
				$(".ad_adress").html(data.insurantInfo.address);
				$(".postcode").html(data.insurantInfo.zipCode);
				$(".is_com").html(receiptType);	
				if(data.insurantInfo.receiptTitle){
					$(".fptt").html(data.insurantInfo.receiptTitle);
				}else{
					$(".fptt").hide();
				}				
			}													
			//险种详情
			var xzxq = "", xznum = 0 , orbjmp = "", bOrjqx = false, bOrbjmp = false, tab1Html = "", tab2Html = "";
			for(var j=0;j<data.quotation.itemList.length;j++){
				if(data.quotation.itemList[j].insuranceType == 0){
					bOrjqx = true;
					tab2Html += "<tr><td>" + data.quotation.itemList[j].insuranceName + "</td><td>" + data.quotation.itemList[j].discountPrice + "</td></tr>"
				}else{
					tab1Html += "<tr class='dashline'><td>" + data.quotation.itemList[j].insuranceName + "</td><td class='tc'>" + data.quotation.itemList[j].insuranceAmount + "</td><td>" + data.quotation.itemList[j].discountPrice + "</td></tr>"
				}
				if(data.quotation.itemList[j].insuranceType == 1 && data.quotation.itemList[j].insuranceName == "不计免赔"){
					bOrbjmp = true;
					orbjmp += "，有不计免赔";
				}				
			}
			if(bOrjqx){
				xzxq += "<p>投保交强险并代缴车船税</p><p>商业险：</p><p>";
				$("#jqandbus").html("交强险及商业险");
			}else{
				xzxq += "<p>商业险：</p><p>";
				$("#jqandbus").html("商业险");
			}								
			for(var i=0;i<data.quotation.itemList.length;i++){
				if(data.quotation.itemList[i].insuranceType == 1 && data.quotation.itemList[i].insuranceName != "不计免赔"){
					if(data.quotation.itemList[i].insuranceAmount == "投保")	{
						xzxq += data.quotation.itemList[i].insuranceName + "、";
					}else if(data.quotation.itemList[i].insuranceAmount == "不投保"){
						xzxq = xzxq;
					}else{
						xzxq += data.quotation.itemList[i].insuranceName + data.quotation.itemList[i].insuranceAmount + "、";
					}
					xznum++;
				}				
			}	
			if(bOrbjmp){xzxq += "</p><p>不计免赔";}
			xzxq += "</p>";	
			$(".bxinfo").html(xzxq);	
			$("#orbjmp").html(orbjmp);	
			$(".colyel").html("&nbsp;" + xznum + "&nbsp;");	
			$(".tab").eq(0).append(tab1Html);
			$(".tab").eq(1).append(tab2Html);
			// activity
			var activity = "";
			for(var i=0;i<data.activitylist.length;i++){
				activity += (i+1) + "." + data.activitylist[i].content
			}
			$("#activity").html(activity);			
			//service
			var serviceHtml = "" ,agent_star = "", agent_ico = "";
			for(var i=0;i<data.additionService.serviceItems.length;i++){
				serviceHtml += "<dl><dt class='" + service(data.additionService.serviceItems[i].id) + "'></dt><dd class='bold'>" +data.additionService.serviceItems[i].name + "</dd><dd>" + data.additionService.serviceItems[i].description  + "</dd></dl>";
				agent_ico += "<i class='" + service(data.additionService.serviceItems[i].id) + "'></i>";
			}
			agent_star += "<span class='star " + converse(data.quotation.star) + "'></span>";
			if(data.quotation.service){
				serviceHtml += "<dl><dt class='lb'></dt><dd class='bold'>" + data.quotation.service + "</dd><dd>" + data.quotation.serviceRemark + "</dd></dl>";
				agent_ico += "<i class='ico5'></i>";
			}
			$("#service").append(serviceHtml);
			$(".agent_name").html(data.quotation.agentName);
			$(".agent_ico").html(agent_ico);
			$(".agent_star").html(agent_star);
			$(".agent_price").html(data.quotation.discountSumPrice);				
			function service(str){
				switch (str){
					case "14d6ecb7-5119-11e5-bf0a-52540003":
					  return "zp ico1";
					  break;
					case "5738ba3f-5119-11e5-bf0a-52540003":
					  return "ds ico2";
					  break;
					case "a6d72f81-5119-11e5-bf0a-52540003":
					  return "jy ico3";
					  break;
					case "b15c7a31-5119-11e5-bf0a-52540003":
					  return "fb ico4";
					  break;										 
					default:					  
				}
			}
			function converse(num){
				switch (num){
					case "0":
					  return "s0";
					  break;
					case "0.5":
					  return "s0p5";
					  break;
					case "1":
					  return "s1";
					  break;
					case "1.5":
					  return "s1p5";
					  break;
					case "2":
					  return "s2";
					  break;
					case "2.5":
					  return "s2p5";
					  break;
					case "3":
					  return "s3";
					  break;
					case "3.5":
					  return "s3p5";
					  break;
					case "4":
					  return "s4";
					  break;
					case "4.5":
					  return "s4p5";
					  break;
					case "5":
					  return "s5";
					  break;					 
					default:					  
				}
			}
			console.log(data);			
		}else{baopRequest.bp_alert(data.message,2000);}
	});
	
	var uid = localStorage.getItem("uid");
	 if(localStorage.getItem("wid")){
		var wid = localStorage.getItem("wid");
	}
	// toggle
	$(".togglebtn").click(function(){
		$(this).toggleClass("down").parent(".botstatus").siblings(".bxinfo").slideToggle(400);		
	});
		
	
	// change submit value;
	if(localStorage.getItem("agent_price")){
		$(".editbtn").val("微信支付(￥" + localStorage.getItem("agent_price") + ")");
	}
	
	$("#delBtn").click(function(){
		var reqData = "orderId=" + localStorage.getItem("orderId");				
		baopRequest.sendData("order/cancel", reqData, function(data){
			if (data.code == 0) {
				localStorage.clear();
				localStorage.setItem("uid",uid);
				if(wid){
					localStorage.setItem("wid",wid);
				}
				location.href="liststatus.html";
			}
		});
	});
	
});