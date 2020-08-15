<?php 

header('content-type:text/html;charset=utf-8');
include_once('./../library/pdoManager.class.php');
include_once('./../library/jumpPage.php');
$method = isset($_POST['method']) ? $_POST['method'] : '';

if($method == "newsinfo"){
	$newsid = isset($_POST['newsid']) ? $_POST['newsid'] : '';
	$sql = "SELECT * FROM `news` WHERE id = '{$newsid}'";
	$result = $db->getData($sql);
	if($result){
		echo json_encode($result);
	}
}



 ?>