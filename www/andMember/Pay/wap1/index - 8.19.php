<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="email=no" />
    <meta name="format-detection" content="address=no" />
    <title>确认支付</title>
    <link href="/templates/main/default//food/css/style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="/templates/main/default//food/js/jquery-1.11.2.min.js"></script>
  </head>
  <body>
    <header>
      <div class="nytop">
        <div class="login_tl"> <a href="javascript:history.go(-1)"><img src="/templates/main/default//food/images/login_06.png" alt=""/> 确认支付</a> </div>
        <div class="login_tr"><a href="/member.php"><img src="/templates/main/default//food/images/login_03.png"/></a></div>
      </div>
    </header>
    <section>

        <form name="alipayment" action="alipayapi.php" method="post">
        	<input type="hidden" name="WIDout_trade_no" value="<?php echo $_GET['orderid'];?>">
        	<input type="hidden" name="WIDsubject" value="<?php echo $_GET['pname'];?>">
        	<input type="hidden" name="WIDtotal_fee" value="<?php echo $_GET['money'];?>">
        	<input type="hidden" name="WIDshow_url" value="http://www.qccd.cc">

	  
	  <div class="order">
        <div class="o_list">
          <div id="tab2">
            <div class="tab1_cont">
              <div class="contentbox1">
                <div class="refund_list2">
                  
                  <div class="re2">
                    
                    <div class="re3">
                      <div class="fdetails">
                        <ul>
                          <li><span class="s1" style="width:10%;"><input id="check-alipay" class="radio" type="radio" name="paytype" value="alipay" checked> </span><span class="s2">支付宝付款</span><span class="s3"><img src="images/alipay.png"></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="re5">
                    <p><span class="j">实际付款:￥<?php echo $_GET['money'];?></span></p>
                  </div>
                  <div class="re4">
					  <button class="a1" type="submit" style="font-size:14px;">前往支付</button>
                  </div>
                  <div class="clear"></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      
    </div>

	</form>

  </section>
</body>
</html>