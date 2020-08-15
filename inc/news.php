<?php 
header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
include_once('./../library/jumpPage.php');
$method = isset($_POST['method']) ? $_POST['method'] : '';

if($method=="ready"){
	$sql = "SELECT * FROM `news` ORDER BY `time` DESC LIMIT 3";
	$result = $db->getData($sql);
	if($result){
		echo json_encode($result);
	}
}
if($method=="newstype"){
	$type = isset($_POST['type']) ? $_POST['type'] : '';
	$sql = "SELECT * FROM `news` WHERE type = '{$type}' ORDER BY `time` DESC LIMIT 3 ";
	$result = $db->getData($sql);
	if($result){
		echo json_encode($result);
	}
}







 ?>