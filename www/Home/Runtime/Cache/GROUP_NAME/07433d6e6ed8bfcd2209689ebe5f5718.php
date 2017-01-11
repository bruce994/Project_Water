<?php if (!defined('THINK_PATH')) exit();?><!doctype html><html><head><meta charset="utf-8"><title>水生活-<?php echo C("site_name");?></title><meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"><metaname="screen-orientation"content="portrait"><metaname="x5-orientation"content="portrait"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/style.css"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/swiper-3.3.1.min.css"><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/jquery-1.8.3.js"></script><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/swiper.js"></script></head><body><div class="top"><ul><li><a href="<?php echo U("Index/type",array("typeid"=>185,"tm"=>"android"));?>" >水生活</a></li><li><a href="<?php echo U("Index/andType",array("tm"=>"android"));?>"  class="hover">健康圈</a></li><li><a href="/andMember/">我的水</a></li></ul></div><div class="layout"><div class="serch"><form action="<?php echo U("Index/andType",array("tm"=>"android"));?>" method="get"><input type="text" id="keyword" name="keyword" class="text" value="<?php echo $_GET['keyword'];?>" placeholder="搜索"><input type="submit" class="s" value=""></form></div><div class="swiper-container swiper1"><div class="swiper-wrapper"><?php  $time = time(); $A = M("Myad")->where("starttime <".$time." and endtime>".$time)->limit("0,10")->field("id,adname,image,url")->select(); $i = 0; foreach ($A as $a) { $tmp = ''; if($a['url']){ $tmp2 = '<div class="swiper-slide"><a href="/Member/'.U("Public/adClick",array("id"=>$a['id'])).'" target="_blank"><img src="'.$a['image'].'"></a></div>'; }else{ $tmp2 = '<div class="swiper-slide"><img src="'.$a['image'].'"></div>'; } echo $tmp2; $i++; } ?></div><!-- 如果需要分页器 --><div class="swiper-pagination"></div></div><div class="jk"><div class="current" style="display:none;"><?php
if( $currentPage >= $totalPages ){ ?>0
<?php
}else{ echo ($currentPage); } ?></div><ul id="page"><?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><li><a href="<?php echo U("Index/article",array("id"=>$vo["id"],"tm"=>"android"));?>"><span><?php echo ($vo["title"]); ?></span><?php if(($vo["litpic"]) != ""): ?><img src="<?php echo ($vo["litpic"]); ?>"><?php endif; ?><span><?php echo ($vo["description"]); ?>...</span><i>心乐水&nbsp;&nbsp;<?php echo (date("Y-m-d",$vo['pubdate'])); ?></i><small><?php echo ($vo["click"]); ?>&nbsp;&nbsp;阅读</small><div class="clear"></div></a></li><?php endforeach; endif; else: echo "" ;endif; ?></ul><script>    //获取列表
function getList() {
    current = parseInt($(".current").last().text())+1;
    if(current == 1 ){
        $(".paginate_button").hide();
        return;
    }
    $.ajax({
url: "/index.php?m=Index&a=andType&tm=android&<?php echo C('VAR_PAGE');?>="+current,
dataType: "html",  async: false,
success:function( html  ) {
                $("#page").append(html); 
                current = parseInt($(".current").last().text())+1;
                if(current == 1 ){
                $(".paginate_button").hide();
                return;
                }

        }});

}



$( document ).ready(function() {
     current = parseInt($(".current").last().text())+1;
    if(current == 1 ){
        $(".paginate_button").hide();
        return;
    }
});
</script><style>/*
.paginate_button {float:left;margin:5px 10px;font-size: 20px;}
*/


.paginate_button {
  box-sizing: border-box;
  display: inline-block;
  min-width: 1.5em;
  padding: 0.3em 0.6em;
  margin-left: 2px;
  text-align: center;
  text-decoration: none !important;
  cursor: pointer;
  *cursor: hand;
  color: #333 !important;
  border: 1px solid transparent;
  font-size: 14px;
  border: 1px solid #cacaca;
  color:#96969A;
}

.paginate_button  a{
  color:#96969A;
}


.paginate_button .active{
  font-weight: bold;
}


</style><div style="clear:both;margin:10px auto;text-align:center;"><li class="paginate_button active"><a href="javascript:void(0)" onclick="getList();">点击加载更多</a></li></div><div style="height:10px;"></div></div></div><script>  var mySwiper1 = new Swiper ('.swiper1', {
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