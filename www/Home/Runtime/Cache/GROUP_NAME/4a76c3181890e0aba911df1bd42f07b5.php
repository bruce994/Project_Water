<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><meta name="viewport" content="width=device-width,maximum-scale=1.0" /><meta name="format-detection" content="telephone=no"><title><?php echo ($vo["title"]); ?>-<?php echo C("site_name");?></title><meta name="keywords" content="<?php echo ($vo["title"]); ?>,<?php echo ($vo["title"]); ?>" /><meta name="description" content="<?php echo ($vo["description"]); ?>" /><!-- global style --><link href="/Home/Tpl/Index/css/reset.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/flexslider.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/video-js.css" rel="stylesheet"><link href="/Home/Tpl/Index/css/style.pc.css" rel="stylesheet"><!--[if lt IE 9]><link  type="text/css" href="/Home/Tpl/Index/css/ie8.css" rel="stylesheet" /><![endif]--><!-- JS --><script src="/Home/Tpl/Index/js/jquery-1.11.3.min.js" charset="utf-8"></script><script src="/Home/Tpl/Index/js/main.js" charset="utf-8"></script><!--[if lt IE 10]><script src="/Home/Tpl/Index/js/placeholders.min.js" charset="utf-8"></script><![endif]--><script type="text/javascript" src="/Home/Tpl/Index/js/global.js" charset="utf-8"></script><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/style.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script></head><body><SCRIPT LANGUAGE="JavaScript"><!--
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
 } ?><!-- /.循环分类 --></ul></div><!-- main begin --><div class="wrap"><div class="content-panel"><div class="container"><div class="col-md-12 blog-post blog-post-articl"><div class="post post-articl clearfix"><div class="container nav-pos-xs"><ol class="breadcrumb col-md-5"><li><a href="/">首页</a></li><li class="active"><?php echo ($type["typename"]); ?></li></ol></div><h1 class="post-title"><?php echo ($vo["title"]); ?></h1><div class="post-info"><?php echo ($type["typename"]); ?> / <?php echo (date("Y-m-d H:i",$vo['pubdate'])); ?></div><div class="post-content" style="/*text-indent: 2em;*/ line-height: 1.8em;"><?php echo ($vo["body"]); ?></div><div class="col-md-12 dingw"><div class="bdsharebuttonbox" id="bdshare-button"><a href="#" class="icon xyi-weibo2 bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="icon xyi-qq2 bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a><a href="#" class="icon xyi-wechat2 bds_weixin" data-cmd="weixin" title="分享到微信"></a><div class="btn-share">分享：</div></div></div><script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"1","bdSize":"24"},"share":{},"image":{"viewList":["weixin","tsina","sqq"],"viewText":"分享到：","viewSize":"16"},"selectShare":{"bdContainerClass":null,"bdSelectMiniList":["weixin","tsina","sqq"]}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script></div></div><div class="clearfix"></div><!-- Theme style --><link rel="stylesheet" href="__PUBLIC__/dist/css/AdminLTE1.min.css"><link rel="stylesheet" href="__PUBLIC__/misc/ionicons.min.css"><link rel="stylesheet" href="__PUBLIC__/misc/font-awesome.min.css"><!-- Chat box --><div class="box" style="margin-top:25px;border: solid 1px #E1E1E1;"><div class="box-header"><i class="fa fa-comments-o"></i><h3 class="box-title">评论</h3></div><div class="box-body chat" id="chat-box"><?php
 $feedback = M("Feedback")->where("aid=".$vo['aid']." and ischeck=1")->order("dtime desc")->select(); foreach ($feedback as $f) { if($f['mid']){ $member = M("Member")->where("mid=".$f['mid'])->field("userid,face")->find(); $face = empty($member['face'])?'/Public/images/face.png':$member['face']; $userid = $member['userid']; }else{ $face = '/Public/images/face.png'; $userid = '游客'; } ?><!-- chat item --><div class="item"><img src="<?php echo $face;?>" alt="user image"><p class="message"><a href="#" class="name"><small class="text-muted pull-right"><i class="fa fa-clock-o"></i><?php echo time_tran($f['dtime']);?></small><?php echo $userid;?></a><?php echo $f['msg'];?></p></div><!-- /.item --><?php
 } ?></div><!-- /.chat --><div class="box-footer"><div class="input-group"><input class="form-control" name="content" id="content" placeholder="发表评论..."><div class="input-group-btn"><button class="btn btn-success" id="feed"><i class="fa fa-plus"></i></button></div></div></div></div><!-- /.box (chat box) --><script type="text/javascript">
  $('#feed').click(function(){

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
              url: "/Member<?php echo U("Public/feedback");?>",
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
</script></div></div></div><!-- main end --><script type="text/javascript" src="/Home/Tpl/Index/js/product1.js" charset="utf-8"></script><div id="move2top"></div><!--footer--><div class="gFooter"><div class="g_footer_links"><p> 友情链接：
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