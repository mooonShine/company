<?php 
session_start();
header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
include_once('./../library/fileupload.class.php');
include_once('./../library/jumpPage.php');
$method = isset($_POST['method']) ? $_POST['method'] : '';
//新闻发布
if($method=='news'){
	$title= isset($_POST['title'])    ? $_POST['title']    : '';
	$author= isset($_POST['author'])     ? $_POST['author']     : '';
	$editorValue= isset($_POST['editorValue'])     ? $_POST['editorValue']     : '';
	$sex= isset($_POST['sex'])     ? $_POST['sex']     : '';
	$file = isset($_POST['file'])     ? $_POST['file']     : '';

	#文件上传
	$up = new FileUpload();
	$up->set('allowtype',array('jpg','png','gif'));
	$up->set('maxsize',1024*1024*2);
	$up->set('path','../upload/');
	
	if(!$up->upload('file')){
		print_r($up->getErrorMsg());
		die;
	}
	$file = json_encode($up->getFileName());


	$sql = "insert into `news`(title,author,content,file,type) values  
			('{$title}','{$author}','{$editorValue}','{$file}','{$sex}')";	
			
	$result = $db->toExec($sql);
	if($result){
		jumpUrl('发布成功！','./../news.html');
	}
}


//新闻列表
$sql = "SELECT id,title,author,state,type FROM news";
$sql1 = "SELECT count(id) AS c FROM news";
$result = $db->getData($sql,true);
$result1 = $db->getData($sql1,false);
if(count($result)>0){
echo '{"code":0,"msg":"1231231","count":'.$result1['c'].',"data":[';
$i=1;
foreach($result as $v){
	if($v['type']==0){
		$v['type']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;">行业新闻</div></div>';
	}elseif($v['type']==1){
		$v['type']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;">建站学堂</div></div>';
	}elseif($v['type']==2){
		$v['type']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;">常见问题</div></div>';
	}
	if($v['state']==1){
		$v['state']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;"><input type="checkbox" checked="" id="'.$v['id'].'" name="open" lay-skin="switch" lay-filter="switchTest" lay-text="开|关"></div></div>';
	}else{
		$v['state']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;"><input type="checkbox" name="close"  id="'.$v['id'].'" lay-skin="switch" lay-filter="switchTest" lay-text="开|关"></div></div>';
	}
	echo json_encode($v);
	if($i!=$result1['c']){
		echo ",";
	}
	$i++;
}
echo "]}";
}



 ?>