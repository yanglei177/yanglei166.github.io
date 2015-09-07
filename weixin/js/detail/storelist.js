$(function(){
	var reqData = "id=" + baopRequest.getURLParam("id");				
	baopRequest.sendData("inquerySheet/findById", reqData, function(data){
		if (data.code == 0) {
			$(".p_title").html(data.carUserInfo.carLabel);
			$(".tb_city").html(data.carUserInfo.insuranceCity);
			$(".cz_name").html(data.carUserInfo.carOwer);	
			$(".cz_tel").html(data.carUserInfo.telephone);	
			localStorage.setItem("title", data.carUserInfo.carLabel);
			localStorage.setItem("tb_city",data.carUserInfo.insuranceCity);
			localStorage.setItem("cz_name",data.carUserInfo.carOwer);
			localStorage.setItem("cz_tel",data.carUserInfo.telephone);						
			//险种详情
			var xzxq = "", xznum = 0 , orbjmp = "", bOrjqx = false, bOrbjmp = false, 
				oDiy = JSON.parse(localStorage.getItem("oDiy"));
			for(var j=0;j<data.insuranceList.length;j++){
				if(data.insuranceList[j].insuranceType == 0){
					bOrjqx = true;
				}
				if(data.insuranceList[j].insuranceType == 1 && data.insuranceList[j].name == "不计免赔"){
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
			for(var i=0;i<data.insuranceList.length;i++){
				if(data.insuranceList[i].insuranceType == 1 && data.insuranceList[i].name != "不计免赔"){
					if(data.insuranceList[i].insuranceAmount == "投保")	{
						xzxq += data.insuranceList[i].name + "、";
					}else{
						xzxq += data.insuranceList[i].name + data.insuranceList[i].insuranceAmount + "、";
					}
					xznum++;
				}				
			}	
			if(bOrbjmp){xzxq += "</p><p>不计免赔";}
			xzxq += "</p>";	
			$(".bxinfo").html(xzxq);	
			$("#orbjmp").html(orbjmp);	
			$(".colyel").html("&nbsp;" + xznum + "&nbsp;");	
			// activity
			var activity = "";
			for(var i=0;i<data.activitylist.length;i++){
				activity += (i+1) + "." + data.activitylist[i].content
			}
			$("#activity").html(activity);
			var status = decodeURIComponent(baopRequest.getURLParam("status")), statusClass = "status";
			if(status == "已取消"){
				statusClass = "status gray";
			}
			$("#status").attr("class",statusClass).html(status);			
			//保险公司			
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
			function service(str){
				switch (str){
					case "14d6ecb7-5119-11e5-bf0a-52540003":
					  return "ico1";
					  break;
					case "5738ba3f-5119-11e5-bf0a-52540003":
					  return "ico2";
					  break;
					case "a6d72f81-5119-11e5-bf0a-52540003":
					  return "ico3";
					  break;
					case "b15c7a31-5119-11e5-bf0a-52540003":
					  return "ico4";
					  break;										 
					default:					  
				}
			}
			var oneHtml = "", statusMark = "";		
			for(var i=0;i<data.quotationList.length;i++){
				var twoHtml = "" , thrHtml = "";
				oneHtml += "<li><div class='overhidden pad_b_05'><div class='fl'><img src='../images/icons/" + data.quotationList[i].insuranceId + ".png'>" + data.quotationList[i].shortName + "</div><div class='fr'>￥<span class='big'>" + data.quotationList[i].list[0].discountSumPrice + "</span> 起</div></div><div class='store dis_none'><div class='storebox'><ul>";				
				for(var j=0;j<data.quotationList[i].list.length;j++){
					var serviceHtml = "";
					var orderStatus = "投保",statusClass= "yellowbtn";
					if(data.quotationList[i].list[j].orderStatus){
						statusMark = orderStatus = data.quotationList[i].list[j].orderStatus;
						if(data.quotationList[i].list[j].orderStatus = "已取消"){
							statusClass= "yellowbtn gray";
						}
					}
					if(data.quotationList[i].list[j].isChageList.length > 0){
						thrHtml = "<li id='" + data.quotationList[i].list[j].id + "' status='" + orderStatus + "' diff=1" + ">";
					}else{
						thrHtml = "<li id='" + data.quotationList[i].list[j].id + "' status='" + orderStatus + "' diff=0" + ">";
					}
					for(var m=0;m<data.quotationList[i].list[j].serviceList.length;m++){						
						serviceHtml += "<i class='" + service(data.quotationList[i].list[j].serviceList[m]) + "'></i>";						
					}
					if(data.quotationList[i].list[j].giftList){
						serviceHtml += "<i class='ico5'></i>";	
					}					
					twoHtml += thrHtml + "<div class='storename'><p>" + data.quotationList[i].list[j].name + "</p><p>" + serviceHtml + "</p><p><span class='star " + converse(data.quotationList[i].list[j].star) + "'></span></p></div><div class='storeprice'><p>￥" + data.quotationList[i].list[j].discountSumPrice + "</p><p><input type='button' class='" + statusClass + "' value='" + orderStatus  + "'></p></div><div class='clr'></div></li>";					
				}
				oneHtml += twoHtml + "</ul></div></div></li>";			
			}
			$(".bxgslist ul").html(oneHtml);
			$(".storebox").delegate("li","click",function(){
				var status_index = $(this).attr("status");
				if(statusMark == "已确认" && statusMark != status_index){
					baopRequest.bp_alert("您在当前询价单中，有已确认订单，如需改换，请先将已确认订单取消。",3000);
				}else if(statusMark == "待支付"  && statusMark != status_index){
					baopRequest.bp_alert("您在当前询价单中，有待支付订单，如需改换，请先将待支付订单取消。",3000);
				}else if(statusMark == status_index){
					location.href="paynotsuc.html?id=" + $(this).attr("id") + "&status=" + $(this).attr("status") + "&diff=" + $(this).attr("diff");
				}else{
					location.href="storedetail.html?id=" + $(this).attr("id") + "&status=" + $(this).attr("status") + "&diff=" + $(this).attr("diff");
				}
			});
			$(".bxgslist").delegate("li","click",function(){
				$(this).siblings().find(".store").slideUp();
				$(this).find(".store").slideToggle(400);
			}); 
			$(".store").delegate("li","click",function(){
				return false;
			});			
			
			console.log(data);      
		}else{baopRequest.bp_alert(data.message,2000);}
	});	
	
	// toggle
	$(".togglebtn").click(function(){
		$(this).toggleClass("down").parent(".botstatus").siblings(".bxinfo").slideToggle(400);		
	});
	
});