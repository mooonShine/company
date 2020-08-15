$(function(){
   $.ajax({
    type:'post',
    url:'./inc/session.php',
    data:{type:'system'},
    success:function(res){
      if(res==''){
        location.href="./login.html";
      }else{
        res = JSON.parse(res);
        $("input[name='id']").val(res['id']);
        $(".user").text(res['user']);
      }  
    }
  })
})



layui.use(['form'], function(data){
  var form = layui.form
  ,layer = layui.layer
  form.verify({
    pwd: [/(.+){6,12}$/, '密码必须6到12位']
    ,newPwd: [/(.+){6,12}$/, '密码必须6到12位']
    ,cPwd: [/(.+){6,12}$/, '密码必须6到12位']
  });
  $('form').submit(function(){
    $.ajax({
      type:"post",
      url:"./inc/system.php",
      data:$('form').serialize(),
      success:function(res){
        if(res=="success"){
          location.href="./login.html";
        }
      }
    })
  })

})



$("input[name='pwd']").blur(function(){

    var pwd = $(this).val();
    var id = $("input[name='id']").val();
    var pwdTest = /(.+){6,12}$/;
    if(pwd.length==0){
      layer.msg('请填写原密码', {icon: 6});
    }else{
      $.ajax({
        type:'post',
        url:'inc/system.php',
        data:{method:'pwd',id:id,pwd:pwd},
        success:function(msg){
          if(msg=='pwdOk'){
            layer.msg('输入正确', {icon: 6});
          }
        }
      })
    }
  })
  $("input[name='newPwd']").blur(function(){
    var newPwd = $(this).val();
    var pwdTest = /(.+){6,12}$/;
    if(newPwd.length<6){
      layer.msg('密码必须6到12位', {icon: 6});
    }else{
       layer.msg('输入正确', {icon: 6});
    }
  })
   $("input[name='cPwd']").blur(function(){
    var cPwd = $(this).val();
    var newPwd = $("input[name='newPwd']").val();
    var pwdTest = /(.+){6,12}$/;
    if(newPwd.length<6){
      layer.msg('密码必须6到12位', {icon: 6});
    }else if(cPwd!=newPwd){
       layer.msg('两次输入新密码不同！', {icon: 6});
    }else{
       layer.msg('输入正确', {icon: 6});
    }
  })