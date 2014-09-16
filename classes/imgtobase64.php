<?php
	class imgtobase64{
	
		function  imgtob64($path){
			$path= "../".$path;
			$type = pathinfo($path, PATHINFO_EXTENSION);
			$data = file_get_contents($path);
			$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
			return $base64;
		}
	
}

?>
