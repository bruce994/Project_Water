<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html><head>
<meta charset="utf-8">
<title>无标题文档</title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<metaname="screen-orientation"content="portrait">
<metaname="x5-orientation"content="portrait">
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style.css">
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
</head>

<body>

<div class="top">

<ul style="margin:0px;">
<li><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li>
<li><a href="<?php echo U("Member/edit");?>">我的信息</a></li>
</ul>

</div>

<div class="my-info">

<form>

<dl>



<a href="<?php echo U("Member/edit",array("ss"=>1));?>#face" style="color:#000;">
<dt><span>头像</span><i><img src="<?php echo empty($vo['face'])?"/Public/images/face.png":$vo['face'];?>"><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k" style="margin-top:42px;"></i></dt>
</a>




<a href="<?php echo U("Member/edit",array("ss"=>1));?>#uname" style="color:#000;">
<dd><span>昵称</span><i><em><?php echo ($vo["uname"]); ?></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>


<?php
$qrcode = "../Public/qrcode/".$_SESSION["member"]['mid'].'_qrcode.png'; $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/Member/index.php?m=Public&a=reg&re_userid=". $_SESSION["member"]['userid']); if(!file_exists($qrcode)){ file_put_contents($qrcode, file_get_contents($url)); } $qrcode_url = C("site_url").str_replace('..','',$qrcode); ?>

<a href="<?php echo U("Public/qrcode");?>"   style="color:#000;">
<dd ><span>我的二维码</span><i><img src="<?php echo $qrcode_url;?>" height="18" class="ewm"><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>

<a href="<?php echo U("Member/pwd",array("ss"=>1));?>" style="color:#000;">
<dd><span>修改密码</span><i><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>
</dl>

<dl>
<a href="<?php echo U("Member/edit",array("ss"=>1));?>#cardID" style="color:#000;">
<dd style="border-top:0px;"><span>身份证信息</span><i><em><?php echo ($vo["cardID"]); ?></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>
<a href="<?php echo U("Member/edit",array("ss"=>1));?>#tel" style="color:#000;">
<dd><span>手机号</span><i><em><?php echo ($vo1["tel"]); ?></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>
</dl>

<dl>

    <?php
 $tmp_list = M("Shops_userinfo")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->select(); $i = 0; foreach($tmp_list as $dd){ $i++; ?>
    <a href="<?php echo U("Member/address",array("ss"=>1));?>" style="color:#000;">
        <dd <?php if($i == 1){ ?> style="border-top:none;" <?php } ?> ><span>收货地址</span><i><em><?php echo $dd['address'];?></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
    </a>
    <?php } if($i == 0){ ?>
        <a href="<?php echo U("Member/address",array("ss"=>1));?>" style="color:#000;">
                <dd  style="border-top:none;"  ><span>收货地址</span><i><em></em><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
            </a>
    <?php } ?>

<a data-toggle="modal" data-target="#nt_about"  href="javascript:void(0);" style="color:#000;">
  <dd><span>关于</span><i><img src="__PUBLIC__/android/theme/bg/bg10.gif" class="k"></i></dd>
</a>
</dl>

<a href="<?php echo U("Public/logout");?>"><input type="button" class="info-sub" value="退出登录"></a>

</form>

</div>

</div>





<div id="nt_about" class="modal modal-info">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                            <h4 class="modal-title">关于</h4>
                          </div>
                          <div class="modal-body">
                                <?php echo C("site_about");?>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">关闭</button>
                          </div>
                        </div><!-- /.modal-content -->
                      </div><!-- /.modal-dialog -->
  </div>



<style type="text/css">
  .modal-body p{height:0.1px;}
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






<script src="/cordova/www/SocialSharing.js"></script>


</body>

</html>