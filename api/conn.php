<?php
	header('Access-Control-Allow-Origin:*');
	//指定允许其它域名访问
	header('Access-Control-Allow-Headers:x-requested-with,content-type');
	header('Access-Control-Allow-Methods:GET');
	// 响应类型
	header('Access-Control-Allow-Credentials:true');
	header('Context-type:text/html;charset=utf-8');
	//  声明文件的编码格式，采用utf8
	date_default_timezone_set('Asia/Shanghai');
	// 设置当前时区为中国上海时区
	
	ini_set('display_errors','On');
	error_reporting(E_ALL);

	define('DATETIME',date("Y-m-d H:i:s"));
	define('DATE',date("Y-m-d"));
	
    define('DBHOST','localhost');
    define('DBUSER','root');
    define('DBPASS','');
    define('DBNAME','chat');

    $conn = new mysqli(DBHOST,DBUSER,DBPASS,DBNAME);
    mysqli_query($conn,"set character set utf8");
    mysqli_query($conn,"set names utf8");

    if($conn->connect_error){
    	die('数据库连接失败'.$conn->connect_error);
    }else{
    	// echo json_encode(
     //        array('vaild'=>true,'success'=>'数据库连接成功'.DATE),JSON_UNESCAPED_UNICODE
     //    );
    }
?>