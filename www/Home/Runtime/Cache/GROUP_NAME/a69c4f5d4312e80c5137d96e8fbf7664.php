<?php if (!defined('THINK_PATH')) exit();?><!doctype html><html><head><meta charset="utf-8"><title><?php echo ($vo["title"]); ?>-<?php echo C("site_name");?></title><meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"><metaname="screen-orientation"content="portrait"><metaname="x5-orientation"content="portrait"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/style.css"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/swiper-3.3.1.min.css"><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/jquery-1.8.3.js"></script><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/swiper.js"></script></head><body><div class="top"><ul><li><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li><li><a href="<?php echo U("Index/type",array("typeid"=>$vo['typeid'],"tm"=>"android"));?>"><?php echo ($type["typename"]); ?></a></li><li><a href="javascript:void(0);" onclick="window.plugins.socialsharing.share('<?php echo ($vo["title"]); ?>', null, null, '<?php echo C("site_url"); echo U("Index/article",array("id"=>$_GET['id'],"tm"=>"mobile"));?>')">...</a></li></ul></div><div class="layout"><div class="detail-title"><h2><?php echo ($vo["title"]); ?></h2><span><?php echo (date("Y-m-d",$vo['pubdate'])); ?><i>心水乐</i></span></div><div class="editor"><?php echo ($vo["body"]); ?></div><div class="read"><span>阅读 <?php echo ($vo["click"]); ?></span><img src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/bg/bg8.gif" style="cursor: pointer;" onclick="goodPost();"><a href="javascript:void(0);" id="goodPost"><?php echo ($vo["goodpost"]); ?></a></div></div><script type="text/javascript">  function goodPost(){
    $.get( "<?php echo U("Public/goodPost",array("id"=>$vo['id']));?>", function( data ) {
      $( "#goodPost" ).text( data );
    });
  }
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


</script><script src="/cordova/www/SocialSharing.js"></script></body></html>