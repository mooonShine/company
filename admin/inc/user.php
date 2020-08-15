<?php 

session_start();
header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
include_once('./../library/fileupload.class.php');
include_once('./../library/jumpPage.php');
$method = isset($_POST['method']) ? $_POST['method'] : '';
//案例发布
if($method=='case'){

	

	$title= isset($_POST['title'])    ? $_POST['title']    : '';
	$sub= isset($_POST['sub'])    ? $_POST['sub']    : '';
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
	$sql = "insert into `p_case`(p_title,p_sub,p_author,p_content,p_headSrc,p_t) values  
			('{$title}','{$sub}','{$author}','{$editorValue}','{$file}','{$sex}')";
	print_r($sql);die;
	$result = $db->toExec($sql);
	if($result){
		jumpUrl('发布成功！','./../case.html');
	}
}


//案例列表

$sql = "SELECT p_id,p_title,p_sub,p_author,p_t,p_state FROM p_case";
$sql1 = "SELECT count(p_id) AS c FROM p_case";
$result = $db->getData($sql,true);
$result1 = $db->getData($sql1,false);
if(count($result)>0){
	echo '{"code":0,"msg":"1231231","count":'.$result1['c'].',"data":[';
	$i=1;
	foreach($result as $v){
		if($v['p_state']==1){
			$v['p_state']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;"><input type="checkbox" checked="" p_id="'.$v['p_id'].'" name="open" lay-skin="switch" lay-filter="switchTest" lay-text="开|关"></div></div>';
		}else{
			$v['p_state']='<div class="layui-form-item"><div class="layui-input-block" style="margin-left:0;"><input type="checkbox" name="close"  p_id="'.$v['p_id'].'" lay-skin="switch" lay-filter="switchTest" lay-text="开|关"></div></div>';
		}
		if($v['p_t']==1){
			$v['p_t']="公司推广案例";
		}else{
			$v['p_t']="客户案例";
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