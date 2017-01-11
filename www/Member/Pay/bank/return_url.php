<?php
/* * 
 * 功能：支付宝页面跳转同步通知页面
 * 版本：3.3
 * 日期：2012-07-23
 * 说明：
 * 以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 * 该代码仅供学习和研究支付宝接口使用，只是提供一个参考。

 *************************页面功能说明*************************
 * 该页面可在本机电脑测试
 * 可放入HTML等美化页面的代码、商户业务逻辑程序代码
 * 该页面可以使用PHP开发工具调试，也可以使用写文本函数logResult，该函数已被默认关闭，见alipay_notify_class.php中的函数verifyReturn
 */

require_once("alipay.config.php");
require_once("lib/alipay_notify.class.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
	<meta http-equiv="Content-Type" content="text/html; charset=gbk">
    <title>支付宝纯网关接口</title>
	</head>
    <body>


<?php
//计算得出通知验证结果
$alipayNotify = new AlipayNotify($alipay_config);
$verify_result = $alipayNotify->verifyReturn();
if($verify_result) {//验证成功
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//请在这里加上商户的业务逻辑程序代码
	
	//——请根据您的业务逻辑来编写程序（以下代码仅作参考）——
    //获取支付宝的通知返回参数，可参考技术文档中页面跳转同步通知参数列表

	//商户订单号
	$out_trade_no = $_GET['out_trade_no'];

	//支付宝交易号
	$trade_no = $_GET['trade_no'];

	//交易状态
	$trade_status = $_GET['trade_status'];



    if($_GET['trade_status'] == 'TRADE_FINISHED' || $_GET['trade_status'] == 'TRADE_SUCCESS') {
		//判断该笔订单是否在商户网站中已经做过处理
			//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
			//如果有做过处理，不执行商户的业务程序
	    $tmp = $db->get_one("SELECT aid FROM `{$cfg['tb_pre']}member_operation` where sta = 0 and buyid='".$out_trade_no."' ");
	    if($tmp){


			$inquery = "UPDATE `{$cfg['tb_pre']}member_operation` SET sta=1 WHERE buyid='".$out_trade_no."'";
			$db->query($inquery);

			$operation = $db->get_one("SELECT mid,`money`,pname  FROM `{$cfg['tb_pre']}member_operation`  where  buyid='".$out_trade_no."' ");
			$mid = $operation['mid'];
			$pname = $operation['pname'];

			$score = $operation['money'] * $infoconfig['cfg_recharge'];
			$inquery = "UPDATE `{$cfg['tb_pre']}member` SET scores=scores+".$score." WHERE mid='".$mid."'";
			$db->query($inquery);

			//insert log
			$inquery = "INSERT INTO  `{$cfg['tb_pre']}score_log`(mid,score,typeid,summary,addtime) VALUES('".$mid."','".$score."','4','".$pname."(".$operation['money'].")',".time().")  ";
			$db->query($inquery);
		}

		echo "支付成功,请刷新付款页.";

    }
    else {
      echo "trade_status=".$_GET['trade_status'];
      echo '支付失败,请联系管理员。';
    }
		

	//——请根据您的业务逻辑来编写程序（以上代码仅作参考）——
	
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
else {
    //验证失败
    //如要调试，请看alipay_notify.php页面的verifyReturn函数
    echo "验证失败";
}
?>



<script type="text/javascript">
(function(){
var interval = setInterval(function(){
	window.close();
}, 3000);
})();
</script>




    </body>
</html>