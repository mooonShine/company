$(function(){
  $.ajax({
    type:'post',
    url:'./inc/session.php',
    data:{type:'index'},
    success:function(res){
    	if(res==''){
    		location.href="./login.html";
    	}else if(res=="error"){
    		location.href="./login.html";
    	}else{
    		$(".user").text(res);
    	}
    }
  })
})
layui.use(['element'], function () {
});