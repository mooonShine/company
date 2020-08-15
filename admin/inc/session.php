<?php 
session_start();
include_once('./../library/jumpPage.php');
$type=isset($_POST['type']) ? $_POST['type'] : '';
if($type=="index"){
	if(isset($_SESSION['grade'])){
		echo $_SESSION['grade'];
	}else{
		echo 'error';
	}
}
if($type=="case"){
	if(isset($_SESSION['grade'])){
		echo $_SESSION['grade'];
	}else{
		echo 'error';
	}
}
if($type=="allcase"){
	if(isset($_SESSION['grade'])){
		echo $_SESSION['grade'];
	}else{
		echo 'error';
	}
}
if($type=="news"){
	if(isset($_SESSION['grade'])){
		echo $_SESSION['grade'];
	}else{
		echo 'error';
	}
}
if($type=="allnews"){
	if(isset($_SESSION['grade'])){
		echo $_SESSION['grade'];
	}else{
		echo 'error';
	}
}
if($type=="system"){
	if(isset($_SESSION['grade'])){
		echo json_encode($_SESSION);
	}else{
		echo 'error';
	}
}



 ?>