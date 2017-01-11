<?php if (!defined('THINK_PATH')) exit();?><!doctype html><html><head><meta charset="utf-8"><title><?php echo ($vo["title"]); ?>-<?php echo C("site_name");?></title><meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"><metaname="screen-orientation"content="portrait"><metaname="x5-orientation"content="portrait"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/style.css"><link rel="stylesheet" type="text/css" href="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/css/swiper-3.3.1.min.css"><script type="text/javascript" src="__PUBLIC__/js/jquery-1.9.1.min.js"></script><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/swiper.js"></script></head><body><div class="detail"><div class="d-img"><span><a href="javascript:void(0);" class="ryy_return m-img"><img src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/bg/png1.png"></a></span><i><small class="messege"><div class="show11"><ul
><li style="border:none;"><a href="/andMember/">消息</a></li></ul></div><img src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/bg/png2.png" onclick="showSwitch();"></small></i></div><script type="text/javascript">var ss = 0;
function showSwitch(){
  if(ss == 0){
      $(".show11").show();
      ss = 1;
  }
  else{
      $(".show11").hide();
      ss = 0;
  }

}

</script><div class="swiper-container swiper2"><div class="swiper-wrapper"><?php if(($vo["litpic"]) != ""): ?><div class="swiper-slide"><img src="<?php echo ($vo["litpic"]); ?>" /></div><?php endif; ?></div><!-- 如果需要分页器 --><div class="swiper-pagination"></div></div></div><div class="center"><div class="case-info"><span><?php echo ($vo["title"]); ?></span><div class="share"><i>月销<cite><?php
$start = strtotime(date('Y-m-d', strtotime('first day of this month'))); $end = strtotime(date('Y-m-d', strtotime('last day of this month'))); echo M("Shops_orders")->where("pid=".$vo['id']." and stime>".$start." and stime < ".$end)->count(); ?>笔</cite></i><b onclick="window.plugins.socialsharing.share('<?php echo C("site_name");?>-<?php echo ($vo["title"]); ?>', null, '<?php echo ($vo["litpic"]); ?>', '<?php echo C("site_url"); echo U("Index/article",array("id"=>$_GET['id'],"tm"=>"mobile"));?>')">分享</b></div><div class="clear"></div><p><big>积分：<?php echo ($vo["score"]); ?></big><small>¥：<?php echo $vo['score']/C("cfg_recharge");?></small></p></div><!--
<div class="select-number"><span>请选择<i>数量</i></span><small>&gt;</small><div class="clear"></div></div>--><div class="select-number"><!--comment--><div class="clearfix"></div><!-- Theme style --><link rel="stylesheet" href="__PUBLIC__/dist/css/AdminLTE1.min.css"><link rel="stylesheet" href="__PUBLIC__/misc/ionicons.min.css"><link rel="stylesheet" href="__PUBLIC__/misc/font-awesome.min.css"><!-- Chat box --><div class="box" style="margin:0px;border: solid 1px #E1E1E1;"><div class="box-header"><i class="fa fa-comments-o"></i><h3 class="box-title">评论</h3></div><div class="box-body chat" id="chat-box"><?php
 $feedback = M("Feedback")->where("aid=".$vo['aid']." and ischeck=1")->order("dtime desc")->select(); $tmp = false; foreach ($feedback as $f) { $tmp = true; if($f['mid']){ $member = M("Member")->where("mid=".$f['mid'])->field("userid,face")->find(); $face = empty($member['face'])?'/Public/images/face.png':$member['face']; $userid = $member['userid']; }else{ $face = '/Public/images/face.png'; $userid = '游客'; } ?><!-- chat item --><div class="item"><img src="<?php echo $face;?>" alt="user image"><p class="message"><a href="#" class="name"><small class="text-muted pull-right"><i class="fa fa-clock-o"></i><?php echo time_tran($f['dtime']);?></small><?php echo $userid;?></a><?php echo $f['msg'];?></p></div><!-- /.item --><?php
 } if(!$tmp){ ?><span>暂无评价</span><cite><samp style="width:100%;"></samp></cite><?php  } ?></div><!-- /.chat --><div class="box-footer"><div class="input-group"><input class="form-control" name="content" id="content" placeholder="发表评论..."><div class="input-group-btn"><button class="btn btn-success" id="feed"><i class="fa fa-plus"></i></button></div></div></div></div><!-- /.box (chat box) --><script type="text/javascript">  $('#feed').click(function(){

      content = $("#content").val();
      if(content == ''){
          alertMsg('评论内容不能为空！');
          return;
      }

      var postData = new FormData();
      postData.append("aid", <?php echo ($vo["aid"]); ?>);
      postData.append("typeid", <?php echo ($vo["typeid"]); ?>);
      postData.append("content", content);

         $.ajax({
              url: "/andMember<?php echo U("Public/feedback");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {
                    alertMsg(result.msg);
                    $("#content").val('');
              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });
      
  });
</script><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script><script src="__PUBLIC__/static/bootbox.min.js" type="text/javascript"></script><script type="text/javascript">  function alertMsg(msg){
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
</script><!--END comment--><div class="clear"></div></div><div class="detail-img"><h2 class="title"><span>图文详情</span></h2><div><?php echo ($vo["body"]); ?></div></div><div class="more-case"><?php
if($_SESSION['HISTORY']){ $map["id"] = array('in', $_SESSION['HISTORY']); $map["channel"] = array('eq', $type['channeltype']); $archive = M("Archives")->where($map)->limit("0,8")->field("id,litpic,title,channel")->select(); ?><h2><span>看了又看</span></h2><ul class="wall"><div class="wall-column"><?php  foreach ($archive as $row) { $product = M("addon".$row['channel'])->where("aid=".$row['id'])->find(); ?><li class="article"><a href="<?php echo U("Index/article",array("id"=>$row["id"],"tm"=>"android"));?>"><img src="<?php echo $row['litpic'];?>"><span><?php echo $row['title'];?></span><big>积分：<?php echo $product['score'];?></big></a></li><?php
 } ?></div></ul><?php } ?><div class="clear"></div></div></div><div class="fixed"><span><a class="collect" data-aid="<?php echo ($vo["id"]); ?>"><img src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/bg/bg7.gif"><div id="collectText">收藏</div></a></span><i><a class="cart" data-toggle="modal" data-target="#myModalCart" >加入购物车</a></i><small><a href="javascript:void(0);" class="exchange" data-aid="<?php echo ($vo["id"]); ?>"  data-typeid="<?php echo ($vo["typeid"]); ?>" data-channel="<?php echo ($vo["channel"]); ?>">立即兑换</a></small></div><script>  var mySwiper1 = new Swiper ('.swiper2', {
    loop: true,
  pagination: '.swiper-pagination'
  })
</script><script type="text/javascript" src="/Home/Tpl/<?php echo $_GET['tm'];?>/theme/common/wall.js"></script><script type="text/javascript">  $(function(){
    $('.wall').jaliswall({ item: '.article' });
});
</script><div class="modal fade" id="myModalCart" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">加入购物车</h4></div><div class="modal-body"><label>购买数量:</label><div class="form-group has-feedback"><input type="text" name="num" id="num"  value="1"  class="form-control" placeholder="购买数量"><span class="glyphicon  glyphicon-th  form-control-feedback"></span></div><div class="row"><div class="col-xs-12"><button type="button" class="btn btn-primary btn-block btn-flat cart2" data-typeid="<?php echo ($vo["typeid"]); ?>" data-aid="<?php echo ($vo["id"]); ?>" data-score="<?php echo ($vo["score"]); ?>">加入购物车</button></div><!-- /.col --></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div><!-- Modal --><div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">登录</h4></div><div class="modal-body"><form action="/andMember<?php echo U("Public/checkLogin");?>" method="post"><div class="form-group has-feedback"><input type="text" name="username"  class="form-control" placeholder="用户名"><span class="glyphicon glyphicon-user form-control-feedback"></span></div><div class="form-group has-feedback"><input type="password" name="password" class="form-control" placeholder="密码"><span class="glyphicon glyphicon-lock form-control-feedback"></span></div><div class="row" style="margin-bottom:15px;"><div class="col-xs-4"><input type="text" name="verify" class="form-control" placeholder="验证码"></div><!-- /.col --><div class="col-xs-3" style="margin-left:12px;"><img id="verifyImg" SRC="<?php echo U('Public/verify');?>" onClick="fleshVerify()" border="0" alt="点击刷新验证码" style="cursor:pointer" align="absmiddle"></div><!-- /.col --></div><div class="row"><div class="col-xs-12"><button type="submit" class="btn btn-primary btn-block btn-flat">登录</button></div><!-- /.col --></div></form><div class="social-auth-links text-center"><p>- OR -</p><a href="/andMember<?php echo U("Public/reg");?>"><button class="btn btn-block btn-info">注册</button></a></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div><script type="text/javascript">var stock = <?php echo ($vo["stock"]); ?>;
var isOpenScore = <?php echo C("isOpenScore");?>;
<?php
 $sales = M("Shops_orders")->where("pid=".$vo['id'])->count(); echo 'var sales = '.$sales.';'; ?>  $('.cart2').click(function(){

        $('#myModalCart').modal('hide');

          if(isOpenScore == 0){
              alertMsg('积分商城没有开启，请等待');
              return;
          }

          if(stock < sales){
              alertMsg('该商品库存不够，请待等管理员补货');
              return;
          }


      <?php  if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?>      var postData = new FormData();
      postData.append("id", $(this).attr("data-aid"));
      postData.append("typeid", $(this).attr("data-typeid"));
      postData.append("score", $(this).attr("data-score"));

      num = $("#num").val();
      if(num != parseInt(num, 10)){
          alertMsg("购买数量只能为数字");
          return;
      }

      postData.append("num", num);

         $.ajax({
              url: "/andMember<?php echo U("Public/cart");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {
                  if (result.code == 0) {
                      alertMsg(result.msg);
                      return;
                  }

                  bootbox.dialog({
                    message:  result.msg,
                    title: "提示",
                    buttons: {

                      success: {
                        label: "关闭",
                        className: "btn-default",
                      },

                     main: {
                          label: "加入购物车成功，可进后台查看",
                          className: "btn-primary",
                          callback: function() {
                            location.href = "/andMember<?php echo U("Shop/cart",array("ss"=>2));?>";
                          }
                        }

                    }
                  });


              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });

      <?php  }else{ ?>        $('#myModal').modal({show:true});
      <?php } ?>  });



$( document ).ready(function() {
       <?php  if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?>      var postData = new FormData();
      postData.append("id", $(".collect").attr("data-aid"));
      postData.append("isCollect", 1);

         $.ajax({
              url: "/andMember<?php echo U("Public/collect");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {
                  if (result.code == 0) {
                      $("#collectText").text('已收藏');
                      return;
                  }
                 if (result.code == 2) {
                      $("#collectText").text('收藏');
                      return;
                  }

              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });

      <?php  } ?>});


  $('.collect').click(function(){

          if(isOpenScore == 0){
              alertMsg('积分商城没有开启，请等待');
              return;
          }

      <?php  if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?>      var postData = new FormData();
      postData.append("id", $(this).attr("data-aid"));

         $.ajax({
              url: "/andMember<?php echo U("Public/collect");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {
                    $("#collectText").text('已收藏');
                  if (result.code == 0) {
                      alertMsg(result.msg);
                      return;
                  }
                  if (result.code == 2) {
                      $("#collectText").text('收藏');
                      alertMsg(result.msg);
                      return;
                  }
    
                  bootbox.dialog({
                    message:  result.msg,
                    title: "提示",
                    buttons: {

                      success: {
                        label: "关闭",
                        className: "btn-default",
                      },

                     main: {
                          label: "收藏成功，可进后台查看",
                          className: "btn-primary",
                          callback: function() {
                            location.href = "/andMember<?php echo U("Shop/collect",array("ss"=>2));?>";
                          }
                        }

                    }
                  });

              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });

      <?php  }else{ ?>        $('#myModal').modal({show:true});
      <?php } ?>  });




  $('.exchange').click(function(){
         if(isOpenScore == 0){
              alertMsg('积分商城没有开启，请等待');
              return;
          }
     
          if(stock < sales){
              alertMsg('该商品库存不够，请待等管理员补货');
              return;
          }

      <?php  if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?>      var postData = new FormData();
      postData.append("id", $(this).attr("data-aid"));
      postData.append("typeid", $(this).attr("data-typeid"));
      postData.append("channel", $(this).attr("data-channel"));

         $.ajax({
              url: "/andMember<?php echo U("Public/exchange");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {
                  if (result.code == 0) {
                      alertMsg(result.msg);
                      return;
                  }

                  if (result.code == -1) {

                      bootbox.dialog({
                        message:  result.msg,
                        title: "提示",
                        buttons: {

                          success: {
                            label: "关闭",
                            className: "btn-default",
                          },

                         main: {
                              label: "去充值",
                              className: "btn-primary",
                              callback: function() {
                                location.href = "/andMember<?php echo U("Member/pay");?>";
                              }
                            }

                        }
                      });

                      return;
                  }                  

                  
                  bootbox.dialog({
                    message:  result.msg,
                    title: "提示",
                    buttons: {

                      success: {
                        label: "关闭",
                        className: "btn-default",
                      },

                     main: {
                          label: "进后台",
                          className: "btn-primary",
                          callback: function() {
                          location.href = "/andMember<?php echo U("Shop/index",array("typeid"=>193,"ss"=>2));?>";
                          }
                        }

                    }
                  });




              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });

      <?php  }else{ ?>        $('#myModal').modal({show:true});
      <?php } ?>  });

 function fleshVerify(type){ 
  //重载验证码
  var timenow = new Date().getTime();
  if (type){
    $('#verifyImg').attr("src", '/andMember<?php echo U('Public/verify',array('type'=>1,'t'=>time()));?>');
  }else{
    $('#verifyImg').attr("src", '/andMember<?php echo U('Public/verify',array('t'=>time()));?>');
  }
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