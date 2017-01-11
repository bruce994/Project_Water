<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width,maximum-scale=1.0" /><meta name="format-detection" content="telephone=no"><title><?php echo (C("SITENAME")); ?></title><meta property="qc:admins" content="2350767305746116416256526375" /><meta name="keywords" content="<?php echo (C("keyword")); ?>" /><meta name="description" content="<?php echo (C("content")); ?>" /><!-- global style --><link href="/Home/Tpl/Index/css/reset.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/flexslider.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/video-js.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/style.pc.css" rel="stylesheet"><!--[if lt IE 9]><link  type="text/css" href="/Home/Tpl/Index/css/ie8.css" rel="stylesheet" /><![endif]--><!-- JS --><script src="/Home/Tpl/Index/js/jquery-1.11.3.min.js" charset="utf-8"></script><script src="/Home/Tpl/Index/js/main.js" charset="utf-8"></script><!--[if lt IE 10]><script src="/Home/Tpl/Index/js/placeholders.min.js" charset="utf-8"></script><![endif]--><script type="text/javascript" src="/Home/Tpl/Index/js/global.js" charset="utf-8"></script><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/style.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script></head><body><SCRIPT LANGUAGE="JavaScript"><!--
function mobile_device_detect(url){
var thisOS=navigator.platform;
console.log(thisOS);

//if(thisOS == "MacIntel") return;

//定义匹配的移动终端操作系统类型列表，随时间推移准确性有待矫正
var os=new Array("iPhone","iPod","iPad","android","Nokia","SymbianOS","Symbian","Windows Phone","Phone","Linux armv71","MAUI","UNTRUSTED/1.0","Windows CE","BlackBerry","IEMobile");

     for(var i=0;i<os.length;i++){ 
         //循环匹配到列表中的手机系统
          if(thisOS.match(os[i])){
               window.location=url;//document.write(thisOS);
          }
     }

     //因为相当部分的手机系统不知ban道信息,这里是做临时性特殊辨认
     if(navigator.platform.indexOf('iPad') != -1){
          window.location=url;
     }

     //做这一部分是因为Android手机的内核也是Linux
     //但是navigator.platform显示信息不尽相同情况繁多,因此从浏览器下手，即用navigator.appVersion信息做判断
     var check = navigator.appVersion;
     console.log(check);

     if( check.match(/linux/i) || check.match(/Mac/i) ) {
          //X11是UC浏览器的平台 ，如果有其他特殊浏览器也可以附加上条件
          if(check.match(/mobile/i) || check.match(/iphone/i) || check.match(/X11/i)) {
               window.location=url;
          }
     }
     //类in_array函数
     Array.prototype.in_array = function(e)
     {
          for(i=0;i<this.length;i++)
          {
               if(this[i] == e)
               return true;
          }
          return false;
     }
}

o_url = window.location.href;
mobile_device_detect(o_url+"?&tm=mobile");

//--></SCRIPT><!--head nav--><div class="gHeaderWrap"><!-- logo --><div class="logo_bg"></div><a href="/" class="logo dim"></a><div class="gNavDashboardWrap"><div class="gNavDashboardLinks"><div class="row" style="float: right;"><div id="imaginary_container"><form id="gSearchForm" action="<?php echo U("Index/search");?>" method="get"><div class="input-group stylish-input-group" style="width: 150px;margin-right: 20px;"><input type="text" id="keyword" name="keyword"  class="form-control" value="<?php echo $_GET['keyword'];?>" style="color:#fff;height: 25px;line-height: 25px; margin-top: 4px;background-color: #628eb1;border-color: #628eb1;"><a class="btn_gSearch dim" style="margin-top: -20px; z-index: 100;  background-size: 26px auto;margin-right:0px;right:0px;"></a></div></form></div></div><div style="float:right"><?php
 if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?><a href="/Member/" style="color:#a10333" ><?php echo $_SESSION['member']['userid'];?></a><a  href="/Member<?php echo U("Public/logout");?>" style="color:#fff;">退出</a><a  href="/Member" style="color:#fff;">个人主页</a><?php  }else{ ?><a href="/Member/index.php/Public/reg.html"><button type="button" class="btn btn-primary btn-xs" style="background-color: #628eb1;border-color: #628eb1;">注 册</button></a><a href="/Member/"><button type="button" class="btn btn-primary btn-xs" style="background-color: #628eb1;border-color: #628eb1;">登 录</button></a><a href="/qqcontent/oauth/qq_login.php?goto="><button type="button" class="btn btn-primary btn-xs" style="background-color: #628eb1;border-color: #628eb1;">QQ账号登录</button></a><a href="javascript:void(0);"><button type="button" class="btn btn-primary btn-xs" style="background-color: #628eb1;border-color: #628eb1;" data-toggle="modal" data-target="#myModalApp">APP下载</button></a><?php } ?></div></div></div><?php  $T = M("Arctype")->where("topid=0")->field("id,typename")->order("sortrank")->select(); $reid = 0; if(!empty($_GET['typeid'])){ $reid = $type['reid']; } ?><ul class="gNavigation"><li class="menu_cf16" style="width:80px;"><a class="gNavCH dim cf16 <?php echo empty($_GET['typeid'])&&empty($type)?'current':'';?>" href="/" style="color:#fff;">首页</a><a href="/" class="code4spider">首页</a></li><?php
 foreach ($T as $t) { $cur = ''; if($t['id'] == $_GET['typeid'] || $t['id']==$reid || $t['id'] == $type['id']){ $cur = 'current'; } $A = M("Archives")->where("typeid=".$t['id'])->field("id,typeid,title,litpic,description")->order("pubdate desc")->limit("0,5")->select(); ?><li class="menu_cf16"><a class="gNavCH dim cf16 <?php echo $cur;?>" href="<?php echo U("Index/type",array("typeid"=>$t['id']));?>" style="color:#fff;"><?php echo $t['typename'];?></a><a href="<?php echo U("Index/type",array("typeid"=>$t['id']));?>" class="code4spider"><?php echo $t['typename'];?></a><?php if($A){ ?><div class="main_nav_dropdownCH cf16"><div class="ry_2"><?php foreach($A as $a){ ?><div><a href="<?php echo U("Index/article",array("id"=>$a['id']));?>"><?php echo cn_substr($a['title'],30);?></a></div><?php } ?></div></div><?php } ?></li><?php
 } ?><!-- /.循环分类 --></ul></div><h1 class="hide">心乐水官网</h1><h1 class="hide">Water Official Site</h1><div class="billboard_banner_normal, flexslider"><ul class="slides"><?php  $time = time(); $A = M("Myad")->where("starttime <".$time." and endtime>".$time)->limit("0,10")->field("id,adname,image,url")->select(); $i = 0; foreach ($A as $a) { $tmp = ''; if($a['url']){ $tmp2 = '<li><a href="/Member'.U("Public/adClick",array("id"=>$a['id'])).'" target="_blank"><img src="'.$a['image'].'"></a></li>'; }else{ $tmp2 = '<li><img src="'.$a['image'].'"></li>'; } echo $tmp2; $i++; } ?></ul></div><div class="home_models_lineup home_models_lineupCH"><?php
 $P = M("Archives")->where("typeid=186  and litpic<>'' ")->field("id,typeid,title,litpic,description")->order("pubdate desc")->limit("0,4")->select(); foreach ($P as $row) { ?><a href="<?php echo U("Index/article",array("id"=>$row['id']));?>" class="modelCH qoros5suvCH"><div style="margin-top:20px;"><img src="<?php echo $row['litpic'];?>" width="260" height="195"></div><div><?php echo cn_substr($row['description'],34);?></div></a><?php
 } ?></div><h2 class="b-module-lined-headline"><span><?php echo C("index_font");?></span></h2><div class="clear"></div><div class="home_banners"><div class="stretch_top" style="overflow:hidden;"><?php
 $tt = M("Archives")->where("flag  like '%t1%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body']); ?><div class="card" style="float:left;width: 48.148%;"><div class="front"><a class="hover_overlay" href="#" ><img class="img1" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_1" ><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,300);?></a></div></div><?php } $tt = M("Archives")->where("flag  like '%t2%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body'] ); ?><div class="card" style="float:left;width: 24.07%;margin-left:48.7%;"><div class="front"><a class="hover_overlay" href="#" ><img class="img_3" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_1" ><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,200);?></a></div></div><?php } $tt = M("Archives")->where("flag  like '%t3%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body']); ?><div class="card" style="width: 26.7361111%; float: right;"><div class="front"><a class="hover_overlay" href="#" ><img class="img1" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_1"><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,300);?></a></div></div><?php } ?><div class="clear"></div></div><div class="clear"></div><div class="stretch_bottom" style="overflow:hidden;"><?php
 $tt = M("Archives")->where("flag  like '%t4%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body']); ?><div class="card" style="float:left;width: 25.6944444%;height:1px;margin-right: 1.0416667%;"><div class="front"><a class="hover_overlay" href="#" ><img class="img2" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_2"><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,200);?></a></div></div><?php } $tt = M("Archives")->where("flag  like '%t5%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body']); ?><div class="card" style="float:left;width: 26.3888889%;"><div class="front"><a class="hover_overlay" href="#" ><img class="img2" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_2"><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,200);?></a></div></div><?php } $tt = M("Archives")->where("flag  like '%t6%' ")->field("id,litpic,channel")->find(); if($tt){ $body = M("Addon".$tt['channel'])->where("aid=".$tt['id'])->field('body')->find(); $body = strip_tags($body['body']); ?><div class="card" style="width: 45.8333333%; float: right;"><div class="front"><a class="hover_overlay" href="#" ><img class="img2" src="<?php echo $tt['litpic'];?>" /></a></div><div class="back ryy_2"><a class="hover_overlay" href="<?php echo U("Index/article",array("id"=>$tt['id']));?>" style="font-size:14px;margin:20px;float:none;text-align:center;"><?php echo cn_substr($body,200);?></a></div></div><?php } ?><div class="clear"></div></div><!--
 <div class="stretch_top"><a class="hover_overlay item1" href="#" ><img src="/Home/Tpl/Index/images/homepage/banner_brand_tvc_20150819.jpg" /></a><a class="hover_overlay item2" href="#"  ><img src="/Home/Tpl/Index/images/homepage/banner_loans_plan_2.jpg" /></a><div class="clear"></div></div><div class="stretch_bottom"><a class="hover_overlay item1" href="#" ><img src="/Home/Tpl/Index/images/homepage/banner_test_drive.jpg" /></a><a class="hover_overlay item2" href="#"  ><img src="/Home/Tpl/Index/images/homepage/banner_find_dealer.gif" /></a><a class="hover_overlay item3" href="#"  ><img src="/Home/Tpl/Index/images/homepage/banner_promotion_20160308_qoros_5_suv.jpg" /></a><div class="clear"></div></div>--><div style="clear"></div><div class="links hidden-xs"><div class="container pigd"><div id="control-carousel" class="carousel slide" data-ride="carousel"><h3 class="text-center" style="font-family:Source-Han-Light422625">我们的合作伙伴</h3><div class="carousel-inner" role="listbox"><?php
 $i=0; $link_p = M("Flink")->where("ischeck=1 and logo<>''")->order("sortrank")->select(); foreach($link_p as $row){ if($i%6 == 0){ $tmp = ''; if($i==0){ $tmp = 'active';} echo '<div class="item '.$tmp.'">'; } echo '<a href="'.$row['url'].'" style="cursor:default;"><img src="'.$row['logo'].'" alt="'.$row['title'].'" width="120" height="60"></a>'; $i++; if($i%6 == 0){ echo '</div>'; } } if($i%6 != 0){ echo '</div>'; } ?></div><a class="left carousel-control" href="#control-carousel" role="button" data-slide="prev" style="height:360px"><span class="glyphicon an_ll" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#control-carousel" role="button" data-slide="next" style="height:360px"><span class="glyphicon an_lr" aria-hidden="true"></span><span class="sr-only">Next</span></a></div></div></div></div><script src="/Home/Tpl/Index/js/flip.js"></script><script type="text/javascript">$( document ).ready(function() {
    $(".card").flip({
    axis: 'y',
    trigger: 'hover'
  });

});


$(function() {
    console.log(333);
    $(".stretch_top").height($(".img1").height());
    $(".stretch_bottom").height($(".img2").height());
    $(".ryy_1").height($(".img1").height());
    $(".ryy_2").height($(".img2").height());



    $(".img_3").height($(".img1").height());

});

$('.img1').load(function(){  
    console.log($(".img1").height());
    $(".stretch_top").height($(".img1").height());
    $(".ryy_1").height($(".img1").height());
    
    $(".img_3").height($(".img1").height());
});  

$('.img2').load(function(){  
    $(".stretch_bottom").height($(".img2").height());
    $(".ryy_2").height($(".img2").height());
});  

$( window ).resize(function() {
    $(".stretch_top").height($(".img1").height());
    $(".stretch_bottom").height($(".img2").height());
    $(".ryy_1").height($(".img1").height());
    $(".ryy_2").height($(".img2").height());


    $(".img_3").height($(".img1").height());

});



</script><script type="text/javascript" src="/Home/Tpl/Index/js/product1.js" charset="utf-8"></script><div id="move2top"></div><!--footer--><div class="gFooter"><div class="g_footer_links"><p> 友情链接：
    <?php
 $link = M("Flink")->where("ischeck=1 and logo=''")->order("sortrank")->select(); foreach ($link as $value) { ?><a href="<?php echo $value['url'];?>" target="_blank" style="text-decoration:none;"><?php echo $value['webname'];?></a> | 
    <?php
 } ?></p></div><div class="g_social_links"><a class="wechat dim" data-toggle="modal" data-target=".wechat-modal-sm"></a><a class="sina dim" href="<?php echo C("site_weibo");?>"  target="_blank"></a><a class="tmall dim" href="http://wpa.qq.com/msgrd?v=3&uin=<?php echo C("site_qq");?>&site=qq&menu=yes"  target="_blank" style="background: url(/Home/Tpl/Index/images/qq.png) center center no-repeat;background-size: 32px auto;"></a></div><div class="partition"></div><div class="hotline">服务热线<br/><span class="tel"><?php echo C("site_tel");?></span></div><div class="copyright">&copy;<?php echo C("copyright");?></div></div><div class="modal fade wechat-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"><div class="modal-dialog modal-sm"><div class="modal-content"><img src="<?php echo C("site_qr");?>" width="344" height="344"  class="img-responsive"></div></div></div><script src="__PUBLIC__/static/bootbox.min.js" type="text/javascript"></script><script type="text/javascript">
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
</script><div class="modal fade" tabindex="-1"  id="myModalApp"  role="dialog" ><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" style="text-align:center;">抄描二维码下载APP</h4></div><div class="modal-body" style="padding:0px;"><?php
 $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/water.apk"); ?><img src="<?php echo $url;?>" style="width:100%;height:auto;"  /></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal --></body></html>