$(function(){
  $.ajax({
    type:'post',
    url:'./inc/session.php',
    data:{type:'allcase'},
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
    ,height: 900
    ,url: './inc/user.php' //数据接口
    ,page: false //开启分页
    ,cols: [[ //表头
      {field: 'p_id', title: 'ID', width:80, sort: true, fixed: 'left'}
      ,{field: 'p_title', title: '标题', width:400}
      ,{field: 'p_sub', title: '副标题', width:400}
      ,{field: 'p_author', title: '作者', width:400, sort: true}
      ,{field: 'p_state', title: '状态', width:400} 
      ,{field: 'p_t', title: '类型', width:400} 
    ]]
  ,done:function(res,curr,count){
    console.log(res);
    console.log(curr);
    console.log(count);
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
    var pid = $(this).attr('p_id');
    $.ajax({
      url:'inc/upload.php',
      type:'post',
      data:{method:"changeState",state:state,pid:pid},
      success:function(res){
        if(res=="success"&&state==1){
          layer.msg("ID为"+pid+"的案例已发布");
        }else if(res=="success"&&state==0){
          layer.msg("ID为"+pid+"的案例已取消发布");
        }
      }
    })
  });

})