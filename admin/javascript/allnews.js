$(function(){
  $.ajax({
    type:'post',
    url:'./inc/session.php',
    data:{type:'allnews'},
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

layui.use('table', function(){
  var table = layui.table;
  //第一个实例
  table.render({
    elem: '#demo'
    ,height: 312
    ,url: './inc/usernews.php' //数据接口
    ,page: false //开启分页
    ,cols: [[ //表头
      {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
      ,{field: 'title', title: '标题'}
      ,{field: 'author', title: '作者', sort: true}
      ,{field: 'type', title: '类型', sort: true}
      ,{field: 'state', title: '状态'}
    ]]
  ,done:function(res,curr,count){
  }
  });
  
});
layui.use('form',function(){
  var form = layui.form;
  form.on('switch(switchTest)', function(data){
    var state;
    if(this.checked){
      state=1;
    }else{
      state=0;
    }
    var pid = $(this).attr('id');
    $.ajax({
      url:'inc/upload.php',
      type:'post',
      data:{method:"changeState1",state:state,pid:pid},
      success:function(res){
        console.log(res);
        if(res=="success"&&state==1){
          layer.msg("ID为"+pid+"的动态已发布");
        }else if(res=="success"&&state==0){
          layer.msg("ID为"+pid+"的动态已取消发布");
        }
      }
    })
  });

})