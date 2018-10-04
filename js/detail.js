$(function(){
	var goodsid=window.location.search.substr(1);
	$.ajax({
		type:"get",
		url:url+"goodsdetail",
		data:{
			goodsid:goodsid
		},
		async:true,
		success:function(data){
			$("#good-pic").attr("src",imgurl+data.list.goodspic)
			$("#goods-name").text(data.list.goodsname);
			$("#goods-price").text(data.list.goodsprice);
			$("#goods-major").text(data.list.goodsmajor);
			$("#good-detail1").css("background",'url('+imgurl+data.list.goodsdetail+')')
			$("#good-detail2").css("background",'url('+imgurl+data.list.goodsparameter+')')
			var html="";
			for(var i=0;i<data.list.goodsdiscuss.goodsdiscusscon.length;i++){
				html+='<div id="gooddiscusser">'+data.list.goodsdiscuss.goodsdiscusser[i]+'说：</div><div id="gooddiscusscon">'+data.list.goodsdiscuss.goodsdiscusscon[i]+'</div>'
			}
			$("#good-detail3").html(html);
		
		}
	});
	$("#button1").click(function(){
		$("#good-detail1").show()
		$("#good-detail2").hide()
		$("#good-detail3").hide()
	})
	$("#button2").click(function(){
		$("#good-detail2").show()
		$("#good-detail1").hide()
		$("#good-detail3").hide()
	})
	$("#button3").click(function(){
		$("#good-detail3").show()
		$("#good-detail1").hide()
		$("#good-detail2").hide()
	})
	$('.detail-hd li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	
	
})