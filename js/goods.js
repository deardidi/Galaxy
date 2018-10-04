$(function(){
	var width1 = $(window).width()
	$(".box").css("width",width1*3)
	$(".box img").css("width",width1)
	$.ajax({
		type:"get",
		url:url+"goodslist",
		async:true,
		data:{
			goodstype:1,
			goodsnum:10
		},
		success:function(data){
			var html="";
			for(var i=0;i<data.list.length;i++){
				html+='<li><a href="detail.html?'+data.list[i]._id+'"><em><img src="'+imgurl+data.list[i].goodspic+'"/></em><span>'+data.list[i].goodsname+'</span><span>￥'+data.list[i].goodsprice+'</span><span>评论数为:'+data.list[i].goodsdiscuss.goodsdiscusscon.length+'<i>98%好评</i></span></a></li>'			    
		 }
			$("#goods-list").html(html)
		}
	});
})
