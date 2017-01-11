<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html><head>
<meta charset="utf-8">
<title><?php echo (C("SITENAME")); ?></title>
<meta name="viewport" content="initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no">
<metaname="screen-orientation"content="portrait">
<metaname="x5-orientation"content="portrait">
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style.css">
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>

</head>

<body>

<div class="top">
<ul style="margin:0px;">
<li><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li>
<li><a href="<?php echo U("Member/andIndex");?>">我的信息</a></li>
</ul>
</div>

<div class="my-info" style="padding-bottom:0;">

<dl>
<dd style="border-top:none;"><span>健康水</span><i><em><a href="<?php echo U("Shop/index",array("ss"=>2,"typeid"=>192));?>">查看全部订单</a></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</dl>

</div>

<table  border="0" cellspacing="0" cellpadding="0" class="order">
  <tr class="bold">
    <td >订单号</td>
    <!-- <td style="width:15%">生成日期</td>
    <td style="width:20%">兑换积分</td>
    -->
    <td >状态</td>
    <td >操作</td>
  </tr>

  <?php
 $map['mid'] = array('eq',$_SESSION["member"]['mid']); $map['typeid'] = array('eq',192); $list = M ("Shops_orders" )->where($map)->order("stime desc")->limit("0,8")->select(); foreach ($list as $vo) { ?>
  <tr>
    <td ><?php echo substr($vo['oid'],0,8);?></td>
    <!--
    <td>
        <?php
 echo date("Y-m-d H:i",$vo['stime']); ?>
    </td>
    <td><?php echo $vo['score'];?></td>
    -->
    <td>
      <?php
 if($vo['state'] == 1){ echo '已取水'; }elseif($vo['state'] == 0){ echo '<i>未取水</i>'; } ?>
    </td>
    <td >
        <div> <a href="javascript:void(0);" data-toggle="modal" data-target="#myModal<?php echo $vo['id'];?>"><img src="__PUBLIC__/android/theme/bg/bg11.gif">  取水二维码</a>
</div>
      <?php if($vo['state'] == 0){ ?>
      <div>
      <a href="javascript:void(0);"  onclick="msgBox('<?php echo U("Shop/delete",array("id"=>$vo['oid'],"ajax"=>"1"));?>','GET','json','','<?php echo U("Shop/andIndex");?>',true,'确定取消订单？');"><img src="__PUBLIC__/android/theme/bg/bg12.gif"> 取消订单</a></div>
      <?php } ?>
    </td>
  </tr>


<?php
$url = C('site_url').U('Public/qrcodeWater', array('oid' => $vo['oid'])); $url = str_replace("andMember", "Member", $url); ?>
<!--dialog-->
<div id="myModal<?php echo $vo['id'];?>" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body" style="text-align:center;">
        <div class="row">
          <div class="col-md-12">
              <img src="/misc/phpqrcode/index.php?url=<?php echo $url;?>" style="width:90%;height:auto;" />
          </div>
      </div>

        <?php if(C("app_ad") && C("app_ad_url")){ ?>
        <div class="row">
          <div class="col-md-12"></div>
              <a href="<?php echo C("app_ad_url");?>"><img src="<?php echo C("app_ad");?>" style="width:90%;height:auto;" /></a>
        </div>
        <?php } ?>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
      </div>
    </div>
  </div>
</div>





  <?php } ?>

</table>

</div>

<div class="my-info" style="padding:0; margin:20px 0;">

<dl>
    <dd style="border-top:none;"><span>积分商城</span><i><em><a href="<?php echo U("Shop/index",array("ss"=>2,"typeid"=>193));?>">查看全部订单</a></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</dl>

</div>

<div class="tmall">

<?php
$cartNum = M("Member_cart")->where("mid=".$_SESSION["member"]['mid'])->count(); $cartNum1 = M("Shops_orders")->where("mid=".$_SESSION["member"]['mid']." and state=0 and typeid in(193".getType2("193").")")->count(); ?>

<ul>
    <li><a href="<?php echo U("Shop/index",array("state"=>0,"typeid"=>193));?>"><img src="__PUBLIC__/android/theme/bg/bg13.gif"><span>待发货</span>
<?php
echo $cartNum1 ? "<i>".$cartNum1."</i>":""; ?>
</a></li>

<!--
<li><a href="<?php echo U("Shop/index",array("state"=>0));?>"><img src="__PUBLIC__/android/theme/bg/bg14.gif"><span>待发货</span>
<?php
$aa = M("Shops_orders")->where("mid=".$_SESSION["member"]['mid']." and state=0")->count(); echo $aa ? "<i>".$aa."</i>":""; ?>
</a></li>
-->


<li><a href="<?php echo U("Shop/index",array("state"=>1,"typeid"=>193));?>"><img src="__PUBLIC__/android/theme/bg/bg15.gif"><span>待收货</span>
<?php
$aa = M("Shops_orders")->where("mid=".$_SESSION["member"]['mid']." and state=1 and receipt<>1")->count(); echo $aa ? "<i>".$aa."</i>":""; ?>
</a>
</a></li>


<li><a href="<?php echo U("Type/feedback");?>"><img src="__PUBLIC__/android/theme/bg/bg16.gif"><span>待评价</span></a></li>
<li><a href="tel:<?php echo C("site_tel");?>"><img src="__PUBLIC__/android/theme/bg/bg17.gif"><span>售后</span></a></li>
<li><a href="<?php echo U("Shop/cart");?>"><img src="__PUBLIC__/android/theme/bg/bg18.gif"><span>购物车</span>
<?php
echo $cartNum ? "<i>".$cartNum."</i>":""; ?>
</a></li>
<li><a href="<?php echo U("Shop/collect");?>"><img src="__PUBLIC__/android/theme/bg/bg19.gif"><span>收藏夹</span>
<?php
$aa = M("Member_collect")->where("mid=".$_SESSION["member"]['mid'])->count(); echo $aa ? "<i>".$aa."</i>":""; ?>
</a></li>
<div class="clear"></div>
</ul>

</div>

<div class="new">

<h2 style="margin-bottom:0px;">上新</h2>

<ul style="margin:0px;">

 
<?php  $archive = M("Archives")->where("channel=45")->order("pubdate desc")->limit("0,3")->field("id,litpic,title,channel")->select(); foreach ($archive as $row) { $product = M("addon".$row['channel'])->where("aid=".$row['id'])->find(); ?>
  <li><a href="/index.php?m=Index&a=article&id=<?php echo $row['id'];?>&tm=android"><img src="<?php echo $row['litpic'];?>"><span>积分：<?php echo $product['score'];?></span></a></li>
<?php
 } ?>


<div class="clear"></div>
</ul>

</div>

<div class="more-case">

<h2 style="margin:0px;"><span>猜你喜欢</span></h2>

<ul class="wall">
<div class="wall-column">
<?php  $archive = M("Archives")->where("channel=45")->order('rand()')->limit("0,6")->field("id,litpic,title,channel")->select(); foreach ($archive as $row) { $product = M("addon".$row['channel'])->where("aid=".$row['id'])->find(); ?>
  <li class="article"><a href="/index.php?m=Index&a=article&id=<?php echo $row['id'];?>&tm=android"><img src="<?php echo $row['litpic'];?>"><span><?php echo $row['title'];?></span><big>积分：<?php echo $product['score'];?></big></a></li>
<?php
 } ?>
</div>
</ul>

<div class="clear"></div>

</div>

<script type="text/javascript" src="__PUBLIC__/android/theme/common/wall.js"></script>
<script type="text/javascript">
  $(function(){
    $('.wall').jaliswall({ item: '.article' });
});
</script>



<!-- Bootstrap 3.3.5 -->
<link rel="stylesheet" href="__PUBLIC__/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap 3.3.5 -->
<script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>


<link rel="stylesheet" href="__PUBLIC__/css/no-more-tables.css">

<script src="__PUBLIC__/misc/jquery.validate.js" type="text/javascript"></script>
<script src="__PUBLIC__/misc/regional.zh.js" type="text/javascript"></script>
<style type="text/css">
span.error {   overflow:hidden; width:165px; height:21px; padding:0 3px; line-height:21px; background:#F00; color:#FFF; top:5px; left:318px;}
label.alt {display:block; overflow:hidden; position:absolute;line-height:20px}
.textInput, input.focus, input.required, input.error, input.readonly, input.disabled,
</style>

<script type="text/javascript">
$.validator.setDefaults({errorElement:"span"});
$(document).ready(function()
{
  $('#sub').click (function () {
    var $form=$("#form1");
    if(!$form.valid()){
    return false;}
    $("form").submit();
  });
}); 


function msgBox(v_url,v_method,v_type='json',v_postData='',v_jumpUrl='',v_box=false,v_boxLabel=''){
         bootbox.dialog({
            message:  v_boxLabel,
            title: "提示",
            buttons: {
              success: {
                label: "关闭",
                className: "btn-default",
              },
             main: {
                  label: "确定",
                  className: "btn-primary",
                  callback: function() {
                    ajaxData(v_url,v_method,v_type,v_postData,v_jumpUrl);
                 }
                }
            }
          });

}


function ajaxData(v_url,v_method,v_type='json',v_postData='',v_jumpUrl=''){
         $.ajax({
                  url: v_url,
                  type: v_method,
                  data: v_postData,
                  processData: false,
                  contentType: false,
                  dataType: v_type,
                  success: function (result) {
                      alert(result.message);
                      if (result.code != 0) {
                          return;
                      }
                    
                     if(v_jumpUrl !=""){
                        location.href = v_jumpUrl;
                     }

                  },
                  error: function (err) {
                      alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
                  }
              });

}



</script>

<script src="__PUBLIC__/static/bootbox.min.js" type="text/javascript"></script>
<script type="text/javascript">
  function alertMsg(msg){
      bootbox.dialog({
              message:  msg,
              title: "提示",
              buttons: {
                success: {
                  label: "关闭",
                  className: "btn-default",
                },
              }
            });
  }
</script>


<script type="text/javascript" src="/cordova/cordova.js"></script>
<script src="/cordova/www/Toast.js"></script>

<script type="text/javascript">
function encodeQR() {
cordova.plugins.barcodeScanner.scan(
  function (result) {
      if(result.format == "QR_CODE"){
        location.href = result.text;
      }
  }, 
  function (error) {
      alert("Scanning failed: " + error);
  });  
}


$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, false);
});


// PhoneGap加载完毕
function onDeviceReady() {
    //按钮事件
    document.addEventListener("backbutton", onBackKey, false); //返回键
    //document.addEventListener("menubutton", eventMenuButton, false); //菜单键
    //document.addEventListener("searchbutton", eventSearchButton, false); //搜索键
}

<?php  M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->save(array("backCount"=>0)); ?>

num = 1;
//返回键
function onBackKey(){
    var cc =  window.location.pathname;
    //alert(cc);

    if(cc == "/andMember/index.php/Shop/cart.html"){
        location.href = "/andMember/index.php";
        return;
    }


    if(cc == "/andMember/index.php/Main/index.html" || cc == "/index.php/Index/andType/tm/android.html" || cc == "/index.php/Index/type/typeid/185/tm/android.html"){
        $.ajax({
              url: "<?php echo U("Public/backCount",array("time"=>time()));?>",
              type: 'GET',
              async: false,
              processData: false,
              contentType: false, 
              dataType: "json",
              success: function (result) {
                   num = result.num;
                   console.log("AAA:"+num);
              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          }); 
        if (num == 1) {
            window.plugins.toast.showShortCenter('再点击一次退出', function(a){console.log('toast success: ' + a)}, function(b){alert('toast error: ' + b)});
        }else{
            navigator.app.exitApp();
        }
        return false;
    }
    var backUrl= "<?php echo ($backUrl); ?>";
    if(backUrl != ""){
        backUrl = backUrl.replace(/%2F/g, "/");
        location.href = backUrl;
        return;
    }else{
        navigator.app.backHistory();
    }

 }




//菜单键
function eventMenuButton(){
   // window.plugins.ToastPlugin.show_short('点击了 菜单 按钮!');
}
//搜索键
function eventSearchButton(){
    //window.plugins.ToastPlugin.show_short('点击了 搜索 按钮!');
}

$( document ).ready(function() {
    $( ".ryy_return" ).click(function() {
        onBackKey();
    });
});



</script> 






</body>

</html>