<?php if (!defined('THINK_PATH')) exit();?><!doctype html><html><head><meta charset="utf-8"><title><?php echo ($type["typename"]); ?>-<?php echo C("site_name");?></title><meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"><metaname="screen-orientation"content="portrait"><metaname="x5-orientation"content="portrait"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/style.css"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/swiper-3.3.1.min.css"><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/jquery-1.8.3.js"></script><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/swiper.js"></script></head><body><div class="top"><ul><li><a href="<?php echo U("Index/type",array("typeid"=>185,"tm"=>"android"));?>" class="hover">水生活</a></li><li><a href="<?php echo U("Index/andType",array("tm"=>"android"));?>" >健康圈</a></li><li><a href="/andMember/">我的水</a></li></ul></div><div class="layout"><div class="serch"><form><input type="text" class="text" placeholder="搜索"><input type="submit" class="s" value=""></form></div><div class="swiper-container swiper1"><div class="swiper-wrapper"><?php  $time = time(); $A = M("Myad")->where("starttime <".$time." and endtime>".$time)->limit("0,100")->field("id,adname,image,url")->select(); $i = 0; foreach ($A as $a) { $tmp = ''; if($a['url']){ $tmp2 = '<div class="swiper-slide"><a href="/Member'.U("Public/adClick",array("id"=>$a['id'])).'" target="_blank"><img src="'.$a['image'].'"></a></div>'; }else{ $tmp2 = '<div class="swiper-slide"><img src="'.$a['image'].'"></div>'; } echo $tmp2; $i++; } ?></div><!-- 如果需要分页器 --><div class="swiper-pagination"></div></div><div class="case"><h2><span>健康水</span></h2><ul><?php
$aa = "192"; $type_all = M("Arctype")->where("id in(".$aa.")")->field("id,typename")->select(); foreach ($type_all as $ty) { $productList = M("Archives")->where("typeid=".$ty['id'])->limit("0,9")->select(); foreach ($productList as $vo) { $product = M("addon".$vo['channel'])->where("aid=".$vo['id'])->find(); $comm = M("Feedback")->where("aid=".$vo['id']. " and ischeck=1")->count(); $order = M("Shops_orders")->where("pid=".$vo['id'])->count(); ?><li><a href="<?php echo U("Index/article",array("id"=>$vo["id"],"tm"=>"android"));?>"><span><img src="<?php echo ($vo["litpic"]); ?>"></span><i><cite><?php echo $product['score'];?>积分<small>¥ <?php echo $product['score']/C("cfg_recharge");?></small></cite><samp>兑换</samp></i></a></li><?php  } } ?></ul><div class="clear"></div></div><div class="mall"><h2><span>积分商城</span><a href="<?php echo U("Index/type",array("typeid"=>193,"tm"=>"android"));?>">更多&nbsp;&gt;</a></h2><ul><?php
$aa = "193".getType2("193"); $type_all = M("Arctype")->where("id in(".$aa.")")->field("id,typename")->select(); foreach ($type_all as $ty) { $productList = M("Archives")->where("typeid=".$ty['id'])->limit("0,9")->select(); foreach ($productList as $vo) { $product = M("addon".$vo['channel'])->where("aid=".$vo['id'])->find(); $comm = M("Feedback")->where("aid=".$vo['id']. " and ischeck=1")->count(); $order = M("Shops_orders")->where("pid=".$vo['id'])->count(); ?><li><a href="<?php echo U("Index/article",array("id"=>$vo["id"],"tm"=>"android"));?>"><img src="<?php echo ($vo["litpic"]); ?>" style="max-height: 150px;"><span><?php echo ($vo["title"]); ?></span><big><?php echo $product['score'];?>积分<small>¥ <?php echo $product['score']/C("cfg_recharge");?></small></big><i>已售<?php echo $order;?>件</i><cite><?php echo $comm;?>条评价</cite></a></li><?php  } } ?><div class="clear"></div></ul></div></div><script>  var mySwiper1 = new Swiper ('.swiper1', {
    loop: true,
    pagination: '.swiper-pagination'
  })
</script><script type="text/javascript" src="/cordova/cordova.js"></script><script src="/cordova/www/Toast.js"></script><script type="text/javascript">function encodeQR() {
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




<?php  M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->save(array("backCount"=>0)); ?>num = 1;
//返回键
function onBackKey(){
    var cc =  window.location.pathname;
    //alert(cc);
    if(cc == "/andMember/index.php/Main/index.html" || cc == "/index.php/Index/andType/tm/android.html" || cc == "/index.php/Index/type/typeid/185/tm/android.html"){
        $.ajax({
              url: "/andMember/<?php echo U("Public/backCount",array("time"=>time()));?>",
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
        location.href = backUrl;
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


</script></body></html>