<?php 

	function jumpUrl($message,$url=null){

		if($url==null){
			echo '<script>alert("'.$message.'");history.go(-1);</script>';
		}else{
			echo '<script>alert("'.$message.'");location.href="'.$url.'"</script>';
		}
		die;
	}



 ?>