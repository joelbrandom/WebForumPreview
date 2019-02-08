<?php if($_COOKIE['username'] !== 'simon' && $_COOKIE['username'] !== 'notharryjarry') { die(''); } ?><html>
<head>
</head>
<body>
<form enctype="multipart/form-data" action="?submit=true" method="post" id="simon">
	Upload this level: <input type="text" name="lvl" /><br />
	<input type="file" name="ufile" /><br />
	<input type="submit" value="Upload them levels, yo!" />
</form>
<?php
if($_GET['submit']==true) {
	$lvl = $_POST['lvl'];
	$target = "/var/www/layout/level/lvl" . $lvl .".jpg";
	
	if(move_uploaded_file($_FILES['ufile']['tmp_name'], $target)) 
	{
		echo "uploaded!";
	} else {
		echo "error :(";
	}
}
?>
</body>
</html>
