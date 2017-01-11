<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
<meta name="format-detection" content="telephone=no" />
<meta name="format-detection" content="email=no" />
<meta name="format-detection" content="address=no" />
<title>确认支付</title>
<link href="/templates/main/default/wang/css/style.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="/templates/main/default/wang/js/jquery-1.11.2.min.js"></script>
</head>

<body>
<header>
  <div class="nytop">
    <div class="login_tl"> <a href="javascript:history.go(-1)"><img src="/templates/main/default/wang/images/login_06.png" alt=""/> 支付订单</a> </div>
   <!-- <div class="login_tr"><a href="/member.php"><img src="/templates/main/default/wang/images/login_03.png"/></a></div>-->
  </div>
</header>
<section>
  <div class="payment">
   		

<form name="alipayment" action="alipayapi.php" method="post">
        	<input type="hidden" name="WIDout_trade_no" value="<?php echo $_GET['orderid'];?>">
        	<input type="hidden" name="WIDsubject" value="<?php echo $_GET['pname'];?>">
        	<input type="hidden" name="WIDtotal_fee" value="<?php echo $_GET['money'];?>">
        	<input type="hidden" name="WIDshow_url" value="http://www.qccd.cc">



        <div class="pm1"   style="margin-bottom: 5px;">
        		<p class="t1" >选择支付方式：</p>
               
                <p class="t3">付款金额：￥<?php echo $_GET['money'];?>元</p>
        </div>
        
        <div class="pm2">
        
        	<div class="le"><p><img src="/templates/main/default/wang/images/payment_42.png">支付宝支付</p>
            <p><img src="/templates/main/default/wang/images/payment_45.png">快捷支付</p>
            <p><img src="/templates/main/default/wang/images/payment_47.jpg">微信支付</p></div>
            
            <div class="ri">
                <span class="check checkon"><input  id="check-alipay"  type="radio" checked="checked" name="paytype" value="alipay" class="radioclass"></span> 
                <span class="check "><input type="radio" checked="checked" name="" value="2" class="radioclass"></span>
                <span class="check "><input type="radio" checked="checked" name="" value="3" class="radioclass"></span>
            </div>
            
            
            <p class="sm">预付规则：预定此产品，需要您预付全额房费。订单一经确认，不可变更/取消。未如约就餐，房费将不予退还。</p>
            
            
            
        </div>
        
        <div class="pm3">
        	<input type="submit" value="去支付"/>
        </div>
   	 



	 	</form>
    
<script type="text/javascript">
	$(function(){
		$(".check").click(function(){
			//$(this).toggleClass("checkon").prev().children().siblings(".check").removeClass("checkon")
			$(this).toggleClass("checkon").siblings(".check").removeClass("checkon")
		})
	})
</script>


   </div>
    
    
         
 

</section>
 
</body>
</html>
