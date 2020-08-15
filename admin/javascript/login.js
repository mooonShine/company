layui.use(['layer','form'], function(){
    var form = layui.form;
    var layer = layui.layer;
    //监听提交
    form.on('submit(formDemo)', function (data) {
        var action = data.form.action;//表单提交URL地址
        // console.log(JSON.stringify(data.field));//表单数据
        $.ajax({
            url:'./inc/login.php',
            type:'post',
            data:{method:'login',f:data.field},
            success:function(res){
                console.log(res);
                if(res=='success'){
                    // layer.msg('登录成功', {
                    //     icon: 1,
                    //     time: 5500 //20s后自动关闭
                    // });
                    location.href='./index.html';
                }else if(res=="error"){
                    layer.msg('登录失败，请联系开发者', {
                        icon: 3,
                        time: 1500 //20s后自动关闭
                    });
                }
            }
        })
        return false;//注释掉这行代码后，表单将会以普通方式提交表单，否则以ajax方式提交表单
    });
});