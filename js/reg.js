var verifyCode = new GVerify("v_container");
$("#reg").click(function(){
	var res = verifyCode.validate($("#piccode").val());
	if(!res){
		$("#tip").html("图片验证码不正确")
	}else{
		$("#tip").html("");
		if($("#username").val().length<6||$("#username").val().length>12){
			$("#tip").html("用户名必须是6-12位");
			return;
		}else if($("#password").val().length<6||$("#password").val().length>12){
			$("#tip").html("密码必须是6-12位");
			return;
		}else if($("#password").val()!=$("#passwordAg").val()){
			$("#tip").html("密码与重复密码不一致");
			return;
		}else if($("#tel").val()==""){
			$("#tip").html("请输入手机号");
			return;
		}else if($("#telcode").val()==""){
			$("#tip").html("请输入手机验证码");
			return;
		}else{
			$.ajax({
				type:"post",
				url:url+"reg",
				data:{
					username : $("#username").val(),
					userpwd: $("#password").val(),
					tel: $("#tel").val(),
					telcode: $("#telcode").val()
				},
				async:true,
				success:function(data){
					if(data.errcode==0){
						location.href="login.html";
					}else{
						$("#tip").html(data.msg);	
					}
				}
			});
			
		}
	}
})
//手机验证码
$("#gettel").click(function(){
	var t=3;
	var time;
	$("#gettel").attr("disabled","disabled");
	$("#gettel").css("background","#999");
	$("#gettel").text(t+"秒后可以再次发送");
	time=setInterval(timechange,1000);
	function timechange(){
		t--;
		$("#gettel").text(t+"秒后可以再次发送");
		if(t<=0){
			clearInterval(time);
			$("#gettel").removeAttr("disabled");
			$("#gettel").css("background","#1F6CA1");
			$("#gettel").text("点击发送手机验证码");
		}
	}
})


