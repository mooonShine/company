$(function(){
  $.ajax({
    type:'post',
    url:'./inc/session.php',
    data:{type:'case'},
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
layui.use('form', function(){
  var form = layui.form;
  });
$("form").submit(function(){
  $.ajax({
    type:'post',
    url:'./inc/user.php',
    data:{method:"case",sub:sub,title:title,author:author,file:file,content:content},
    success:function(res){
      console.log(res);
      // alert(res);
    }

  })
});