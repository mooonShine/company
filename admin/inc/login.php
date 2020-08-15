<?php 

session_start();
header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
include_once('./../library/fileupload.class.php');
include_once('./../library/jumpPage.php');
$name = isset($_POST['f']['name']) ? $_POST['f']['name'] : '';
$password = isset($_POST['f']['password']) ? $_POST['f']['password'] : '';
$pwd = md5($password);
$sql = "SELECT * FROM admin WHERE username = '{$name}' AND userpwd = '{$pwd}'";
$result = $db->getData($sql);
if($result){
	$_SESSION['name'] = $result[0]['username'];//账号
	$_SESSION['grade'] = $result[0]['grade'];//管理员级别
	$_SESSION['id'] = $result[0]['id'];
	echo "success";
}else{
	echo 'error';
}
 ?>