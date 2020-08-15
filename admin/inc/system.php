<?php 
session_start();
include_once('./../library/pdoManager.class.php');
include_once('./../library/jumpPage.php');

$method = isset($_POST['method']) ? $_POST['method'] : '';
if($method == ''){
	die('非法登录');
}

//查询原始密码
if($method == 'pwd'){
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';
	$sql = "SELECT p_password FROM pj_user WHERE p_id = '{$id}'";
	$result = $db->getData($sql);
	if($result[0]['p_password']==md5($pwd)){
		echo "pwdOk";
	}
}
if($method=="newPwd"){
	$id = isset($_POST['id']) ? $_POST['id'] : '';
	$pwd = isset($_POST['pwd']) ? $_POST['pwd'] : '';
	$newPwd = isset($_POST['newPwd']) ? $_POST['newPwd'] : '';
	$newPwd = md5($newPwd);
	$sql = "UPDATE pj_user SET p_password = '{$newPwd}' WHERE p_id = '{$id}'";
	$result = $db->toExec($sql);
	if($result){
		echo 'success';
	}

}
 ?>