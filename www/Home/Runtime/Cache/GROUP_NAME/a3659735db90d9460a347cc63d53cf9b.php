<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width,maximum-scale=1.0" /><meta name="format-detection" content="telephone=no"><title><?php echo ($type["typename"]); ?>-<?php echo C("site_name");?></title><meta name="keywords" content="<?php echo ($vo["title"]); ?>,<?php echo ($vo["title"]); ?>" /><meta name="description" content="<?php echo ($vo["description"]); ?>" /><!-- global style --><link href="/Home/Tpl/Index/css/reset.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/flexslider.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/video-js.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/style.pc.css" rel="stylesheet"><!--[if lt IE 9]><link  type="text/css" href="/Home/Tpl/Index/css/ie8.css" rel="stylesheet" /><![endif]--><!-- JS --><script src="/Home/Tpl/Index/js/jquery-1.11.3.min.js" charset="utf-8"></script><script src="/Home/Tpl/Index/js/main.js" charset="utf-8"></script><!--[if lt IE 10]><script src="/Home/Tpl/Index/js/placeholders.min.js" charset="utf-8"></script><![endif]--><script type="text/javascript" src="/Home/Tpl/Index/js/global.js" charset="utf-8"></script><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/style.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script></head><body><SCRIPT LANGUAGE="JavaScript"><!--
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
 } ?><!-- /.循环分类 --></ul></div><div class="wrap"><!-- main begin --><div class="content-panel"><div class="container hidden-xs" style="min-height:35px;"></div><div class="container"><div class="col-md-9 blog-post" id="post_list" style="z-index:5"><?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; $product = M("addon".$vo['channel'])->where("aid=".$vo['id'])->find(); ?><div class="post post-hd " style="float:left;width:30%;margin:10px;"><h1 class="post-title clearfix"><a href="<?php echo U("Index/article",array("id"=>$vo["id"]));?>"><?php echo ($vo["title"]); ?><br/><small>兑换积分：<?php echo $product['score'];?></small><br/><small style="width:50px;">￥:<?php echo $product['score']/C("cfg_recharge");?>元</small></a><a href="<?php echo U("Index/article",array("id"=>$vo["id"]));?>" class="xyicon post-share" target="_blank" title="新窗口打开"></a></h1><div class="post-info"><?php echo ($type["typename"]); ?>
              / <?php echo (date("Y-m-d",$vo['pubdate'])); ?></div><div class="post-content" style="text-indent: 2em;line-height: 1.8em;"><a href="<?php echo U("Index/article",array("id"=>$vo["id"]));?>"><?php echo ($vo["description"]); ?>...</a></div><?php if(($vo["litpic"]) != ""): ?><div style="margin-top:15px;"><a href="<?php echo U("Index/article",array("id"=>$vo["id"]));?>"><img src="<?php echo ($vo["litpic"]); ?>" class="img-responsive img-rounded"></a></div><?php endif; ?><div class="jumbotron-wifi" style="margin-top:12px;"><a href="javascript:void(0);" class="exchange" data-aid="<?php echo ($vo["id"]); ?>"  data-typeid="<?php echo ($vo["typeid"]); ?>" data-channel="<?php echo ($vo["channel"]); ?>">马上兑换</a></div><div class="post-line visible-xs"></div></div><?php endforeach; endif; else: echo "" ;endif; if($totalPages > 1 ): ?><div class="post post-hd clearfix" style="padding: 22px 15px 0;"><div class="col-sm-5"><div class="dataTables_info"><?php echo ($totalCount); ?> 条记录 <?php echo ($currentPage); ?>/<?php echo ($totalPages); ?> 页</div></div><div class="col-sm-6"><div class="dataTables_paginate paging_simple_numbers"><ul class="pagination"><?php echo ($page); ?></ul></div></div></div><?php endif; ?></div><div class="col-md-3 sidebar"><div class="sidebar-widget nav-cat hidden-xs"><h4><a href="bc" style="font-size:18px;color:#fff;text-decoration:none;">栏目分类</a></h4><ul><?php
 $reid = 0; if(!empty($_GET['typeid'])){ $reid = $type['reid']; } $T = M("Arctype")->where("channeltype=".$type['channeltype']." and topid=0")->field("id,typename")->select(); $len = count($T); $i = 0; foreach ($T as $t) { $i++; $tmp = ''; if($t['id'] == $_GET['typeid'] || $t['id']==$reid){ $tmp = 'active '; } if($len == $i){ $tmp .= 'last-item'; } echo '<li class="'.$tmp.'"><i></i><a href="'.U("Index/type",array("typeid"=>$t["id"])).'" title="'.$t["typename"].'">'.$t["typename"].'</a></li>'; } ?><!-- /.循环分类 --></ul></div></div></div></div></div><!-- main end --><script type="text/javascript" src="/Home/Tpl/Index/js/product1.js" charset="utf-8"></script><div id="move2top"></div><!--footer--><div class="gFooter"><div class="g_footer_links"><p> 友情链接：
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
 $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/water.apk"); ?><img src="<?php echo $url;?>" style="width:100%;height:auto;"  /></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal --><!-- Modal --><div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">登录</h4></div><div class="modal-body"><form action="/Member<?php echo U("Public/checkLogin");?>" method="post"><div class="form-group has-feedback"><input type="text" name="username"  class="form-control" placeholder="用户名"><span class="glyphicon glyphicon-user form-control-feedback"></span></div><div class="form-group has-feedback"><input type="password" name="password" class="form-control" placeholder="密码"><span class="glyphicon glyphicon-lock form-control-feedback"></span></div><div class="row" style="margin-bottom:15px;"><div class="col-xs-4"><input type="text" name="verify" class="form-control" placeholder="验证码"></div><!-- /.col --><div class="col-xs-3" style="margin-left:12px;"><img id="verifyImg" SRC="<?php echo U('Public/verify');?>" onClick="fleshVerify()" border="0" alt="点击刷新验证码" style="cursor:pointer" align="absmiddle"></div><!-- /.col --></div><div class="row"><div class="col-xs-12"><button type="submit" class="btn btn-primary btn-block btn-flat">登录</button></div><!-- /.col --></div></form><div class="social-auth-links text-center"><p>- OR -</p><a href="/Member<?php echo U("Public/reg");?>"><button class="btn btn-block btn-info">注册</button></a></div></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div><script type="text/javascript">
  $('.exchange').click(function(){
      <?php  if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?>      var postData = new FormData();
      postData.append("id", $(this).attr("data-aid"));
      postData.append("typeid", $(this).attr("data-typeid"));
      postData.append("channel", $(this).attr("data-channel"));

         $.ajax({
              url: "/Member<?php echo U("Public/exchange");?>",
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
                                location.href = "/Member<?php echo U("Member/pay");?>";
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
                            location.href = "/Member<?php echo U("Shop/index",array("ss"=>2));?>";
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
      <?php } ?>
  });

 function fleshVerify(type){ 
  //重载验证码
  var timenow = new Date().getTime();
  if (type){
    $('#verifyImg').attr("src", '/Member<?php echo U('Public/verify',array('type'=>1,'t'=>time()));?>');
  }else{
    $('#verifyImg').attr("src", '/Member<?php echo U('Public/verify',array('t'=>time()));?>');
  }
}
</script></body></html>