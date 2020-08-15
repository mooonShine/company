<?php 
session_start();
header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
$method = isset($_POST['method']) ? $_POST['method'] : '';

if($method=="changeState"){
	$state = isset($_POST['state']) ? $_POST['state'] : '';
	$pid = isset($_POST['pid']) ? $_POST['pid'] : '';
	$sql = "UPDATE case SET state = {$state} WHERE id ={$pid}";
	$result = $db->toExec($sql);
	if($result){
		echo "success";
	}else{
		echo "error";
	}
	
} 



if($method=="changeState1"){
	$state = isset($_POST['state']) ? $_POST['state'] : '';
	$pid = isset($_POST['pid']) ? $_POST['pid'] : '';
	$sql = "UPDATE news SET state = {$state} WHERE id ={$pid}";
	$result = $db->toExec($sql);
	if($result){
		echo "success";
	}else{
		echo "error";
	}
	
} 


 ?>