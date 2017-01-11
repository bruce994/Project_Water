<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no" />
<meta name="format-detection" content="address=no" />
<title>支付</title>
</head>

<body style="margin:0px;padding:0px;">
	<iframe src="index.php?orderid=<?php echo $_GET['orderid'];?>&pname=dingcan_<?php echo $_GET['result'];?>&money=<?php echo $_GET['money'];?>" width="100%" height="800" style="border:0px;"></iframe>
</body>
</html>