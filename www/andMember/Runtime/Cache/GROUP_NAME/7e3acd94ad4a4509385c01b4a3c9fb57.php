<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html><head>
<meta charset="utf-8">
<title><?php echo (C("SITENAME")); ?></title>
<meta name="viewport" content="initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no">
<metaname="screen-orientation"content="portrait">
<metaname="x5-orientation"content="portrait">
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style.css">
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
<style>
</style>
</head>

<body style="background-color:#eeeeee">

<div class="top">

<ul style="margin:0px;">
<li><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li>
<li><a href="<?php echo U("Member/andLog");?>">我的积分</a></li>
</ul>

</div>

<div class="center">

<div class="my-point">

<form>

<p><span>我的积分</span><i><em><a href="<?php echo U("Member/log",array("ss"=>2));?>">点击查看积分详情</a></em><img src="__PUBLIC__/android/theme/bg/bg9.gif"></i></p>

<a href="<?php echo U("Member/pay");?>">
  <p>  
    <span>在线充值</span><i><em></em><img src="__PUBLIC__/android/theme/bg/bg9.gif"></i>
  </p>
</a>

<a href="/index.php?m=Index&a=type&typeid=185&tm=android">
<p><span>积分兑换</span><i><em></em><img src="__PUBLIC__/android/theme/bg/bg9.gif"></i></p>
</a>


<?php
$list = M ("Notice" )->select(); foreach ($list as $vo) { ?>
  <a data-toggle="modal" data-target="#nt_<?php echo $vo['id'];?>"><p><span><?php echo $vo['title'];?></span><i><em></em><img src="__PUBLIC__/android/theme/bg/bg9.gif"></i></p></a>
   <div id="nt_<?php echo $vo['id'];?>" class="modal modal-info">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title"><?php echo $vo['title'];?></h4>
                          </div>
                          <div class="modal-body">
                            <?php echo $vo['content'];?>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">关闭</button>
                          </div>
                        </div><!-- /.modal-content -->
                      </div><!-- /.modal-dialog -->
  </div> 
<?php
} ?>



<p><a href="<?php echo U("Public/logout");?>"><input type="button" value="退出登录"></a></p>

</form>

</div>

</div>

</div>


<style type="text/css">
  .modal-body p{height:0.1px;border:0px;}
  .modal-body  h3{font-size:13px;}
</style>

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