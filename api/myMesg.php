<?php
	//查找留言
	include 'conn.php';
	if (isset($_POST['userid'])&&$_POST['userid']!=""){
		$userId=$_POST['userid'];
		if($result=mysqli_query($conn,"SELECT userAvatar,userName,comment,title,b.createDate FROM users a,comments b,chatlist c WHERE a.userid=$userId")){
			$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
			echo json_encode($rows);//返回用户名，头像，留言内容，留言时间
		}
	}