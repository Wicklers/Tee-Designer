<?php
session_start();
//ROOT DIRECTORY PATH
$path1 = explode('core',__DIR__);
$path =  $path1[0];


define("ROOT_DIR",$path);

/**************************************************/
include ROOT_DIR . 'core/config.php';

spl_autoload_register(function($class){
	require_once ROOT_DIR . 'classes/'.$class.'.php';	
});

require_once ROOT_DIR.'functions/sanitize.php';
require_once ROOT_DIR.'functions/validateEmail.php';


?>
