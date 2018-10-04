var verifyCode = new GVerify("v_container");
$("#button").click(function(){
	var res = verifyCode.validate($("#code_input").val());
	if(!res){
		$("#tip").html("图片验证码不正确")
	}else{
		$("#tip").html("");
			$.ajax({
				type:"post",
				url:url+"login",
				data:{
					username : $("#username").val(),
					userpwd: $("#password").val(),
				},
				async:true,
				success:function(data){
					if(data.errcode==0){
						location.href="index.html";
					}else{
						$("#tip").html(data.msg);	
					}
			    }
		    })
	    }
    })


