<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html><!--[if lt IE 7]><html class="no-js ie ie6 lt-ie9 lt-ie8 lt-ie7" lang="zh-CN" dir="ltr"><![endif]--><!--[if IE 7]><html class="no-js ie ie7 lt-ie9 lt-ie8" lang="zh-CN" dir="ltr"><![endif]--><!--[if IE 8]><html class="no-js ie ie8 lt-ie9" lang="zh-CN" dir="ltr"><![endif]--><!--[if IE 9]><html class="no-js ie ie9" lang="zh-CN" dir="ltr"><![endif]--><!--[if IEMobile]><html class="no-js ie ie-mobile" lang="zh-CN" dir="ltr"><![endif]--><!--[if gt IE 8 | !IE]><!--><html class="no-js" lang="zh-CN" dir="ltr"><!--<![endif]--><head><style type="text/css">  /** OUTPUT GENERATING IMPORTS **/
  @font-face {
  font-family: "PFranklinGothicCnd";
  src: url('/css/fonts/franklin-gothic/FrankGothforPorscheW02-Cn.eot');
  src: url('/css/fonts/franklin-gothic/FrankGothforPorscheW02-Cn.eot?#iefix') format('eot'), url('/Home/Tpl/mobile/res/FrankGothforPorscheW02-Cn.woff') format('woff'), url('/css/fonts/franklin-gothic/FrankGothforPorscheW02-Cn.ttf') format('truetype'), url('/Home/Tpl/mobile/res/FrankGothforPorscheW02-Cn.svg') format('svg');
  }
  @font-face {
  font-family: "pag-iconfont";
  src: url('/css/fonts/pag-iconfont/pag-iconfont.eot');
  src: url('/css/fonts/pag-iconfont/pag-iconfont.eot?#iefix') format('eot'), url('/Home/Tpl/mobile/res/pag-iconfont.woff') format('woff'), url('/css/fonts/pag-iconfont/pag-iconfont.ttf') format('truetype'), url('/Home/Tpl/mobile/res/pag-iconfont.svg') format('svg');
  }
  </style><script type="text/javascript">  var CURRENTPOOL = 'china';
  var CURRENTLANGUAGE = 'zh';
  var CURRENTCONDITION = '';
  var LOAD_PSYMA = '';
  var ipadViewport = '<meta name="viewport" content="width=1024" />';
  var GLOBAL_CONFIG = GLOBAL_CONFIG || {};
  GLOBAL_CONFIG.currentMainNavigationArea = 'm-01-rd2013-homepage';
  GLOBAL_CONFIG.pool = 'china';
  GLOBAL_CONFIG.language = 'zh';
  GLOBAL_CONFIG.preferredLanguage = 'zh-CN';
  GLOBAL_CONFIG.region = '';
  GLOBAL_CONFIG.loadPsyma = '';
  GLOBAL_CONFIG.home = true;
  GLOBAL_CONFIG.dealersearch = {
  porschedealerLocatorURL : ""
  };
  GLOBAL_CONFIG.tracking = {
  id: ''
  };
  var logonstate = 'false';
  var logonstate = 'false';
  var ga_data = [{
  'page': [{
  'area': 'portal',
  'pool': 'PGCN',
  'country': 'china',
  'lang': 'zh',
  'name': '',
  'dealer': '',
  'visitorLoginState' : logonstate
  }]
  }];


 var SHARING = {
          
          "enabled": true,
          "sharingHost": "<?php echo C("site_url");?>",

         <?php if(($vo["litpic"]) != ""): ?>"images": [
              {"url": "<?php echo $vo['litpic'];?>", "width": "1200", "height": "630" },
              {"url": "<?php echo $vo['litpic'];?>", "width": "1200", "height": "630" }
          ],<?php endif; ?>          "tracking": {
            "ga": "_SOM_WWW_COM-Share-#TRACKID#"
          },
          
          "services": {
          
            "qq": {
            "trackid": "QQS", "shareurl": "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=#URL#&title=#TITLE#",
            
            "desc": "QQ Space"
            },
            "tecent": {
            "trackid": "TEC", "shareurl": "http://v.t.qq.com/share/share.php?title=#TITLE#&url=#URL#",
            
            "desc": "Tecent"
            },
            "qq-share": {
            "trackid": "QQ_", "shareurl": "http://shuqian.qq.com/post?jumpback=1&title=#TITLE#&uri=#URL#",
            
            "desc": "QQ Share"
            },
            "weibo": {
            "trackid": "SIN", "shareurl": "http://v.t.sina.com.cn/share/share.php?title=#TITLE#&url=#URL#",
            
            "desc": "Weibo"
            },
            "renren": {
            "trackid": "REN", "shareurl": "http://share.renren.com/share/buttonshare.do?link=#URL#&title=#TITLE#",
            
            "desc": "RenRen"
            },
            "kaixin": {
            "trackid": "KAI", "shareurl": "http://www.kaixin001.com/repaste/share.php?rtitle=#TITLE#&rurl=#URL#&rcontent=#TITLE#",
            
            "desc": "Kaixin"
            },
            "sohu": {
            "trackid": "SOH", "shareurl": "http://t.sohu.com/third/post.jsp?&url=#URL#&title=#TITLE#",
            
            "desc": "Sohu"
            },
            "baidu": {
            "trackid": "BAI", "shareurl": "http://cang.baidu.com/do/add?it=#TITLE#&iu=#URL#&fr=ien#nw=1",
            
            "desc": "Baidu"
            }
          }
          };


  </script><title><?php echo ($vo["title"]); ?>-<?php echo C("site_name");?></title><meta name="keywords" content="<?php echo ($vo["title"]); ?>,<?php echo ($vo["title"]); ?>" /><meta name="description" content="<?php echo ($vo["description"]); ?>" /><meta charset="utf-8" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/v63597529447.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/screenlib.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/screenmodules1.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/skin.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/screenbase.css" type="text/css" media="screen, projection, print" /><script src="/Home/Tpl/mobile/res/lib-extern.js"></script><script src="/Home/Tpl/mobile/res/lib-head.js"></script><meta name="generator" content="Noxum Publishing Studio 5" /><meta name="cache-date" content="2016-05-12 00:36:12 GMT +2" /><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /><meta name="format-detection" content="telephone=no" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><style>  @media only screen and (min-width: 1601px) {
  body {
  background-image: url('/images/mr/bg-blur_struktur.png'), url('http://files2.porsche.com/filestore.aspx/normalbg.jpg?pool=multimedia&type=image&id=bannercaymanwwkw19&lang=none&filetype=normalbg&version=6a25fd78-112c-11e6-9225-0019999cd470');
  background-position: 0 0, center 0;
  background-repeat: repeat-x, no-repeat;
  background-attachement: fixed;
  }
  }
  #post-content img{width:85%;}
  </style></head><body class="pool-china lang-zh" data-pageid="rd2013-homepage"><div class="b-page-wrapper"><div class="b-page-overlay"></div><div class="m-00-header m-00-main-navigation-available"><h3 class="m-00-header-lined-crest"><span class="m-00-crest-wrapper"><a class="m-00-crest" href="<?php echo U("Index/index",array("tm"=>"mobile"));?>" title=" - 首页">首页
    </a></span></h3></div><div class="m-01-main-navigation b-h orizontal-box-shadow-bottom"><div class="m-01-menu-item"><div style="border-left: 1px solid #666;height: 43px;position: absolute;right: 100px;top: 10px;"></div><div style="float:right;top: 7px;position: absolute;right: 2px;"><?php
 if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?><p style="text-align:center;line-height:10px;"><a href="/Member/" style="color:#a10333;text-decoration:none" ><?php echo $_SESSION['member']['userid'];?></a></p><p style="line-height:10px;"><a  href="/Member" style="color:#2a4b6d;text-decoration:none;">个人主页</a><a  href="/Member<?php echo U("Public/logout");?>" style="color:#2a4b6d;text-decoration:none;">退出</a></p><?php  }else{ ?><a href="/Member/index.php/Public/reg.html"><button type="button" class="btn btn-primary btn-xs" style="background-color: #2a4b6d;border-color: #2a4b6d;">注 册</button></a><a href="/Member/"><button type="button" class="btn btn-primary btn-xs" style="background-color: #2a4b6d;border-color: #2a4b6d;">登 录</button></a><br/><a href="javascript:void(0);"><button type="button" class="btn btn-primary btn-xs" style="margin-top:1px;background-color: #2a4b6d;border-color: #2a4b6d;" data-toggle="modal" data-target="#myModalApp">APP下载</button></a><?php } ?></div><div class="m-01-sub-menu m-01-level-1"><div class="m-01-menu-section" id="m-01-model-menu"></div><div class="m-01-menu-section" id="m-01-blue-buttons"></div></div></div></div><!--StartContent--><div class="b-title-wrapper"><div class="b-title-headline-text"><h1 style="width:30%;float:left;"><span style="color:#000;font-size: .875em"><?php echo ($type["typename"]); ?></span></h1><div style="float:right;"><form id="m-01-site-search-form" action="<?php echo U("Index/search",array("tm"=>"mobile"));?>" method="get" style="height:20px;float:right;width:70%;right:5px;padding-top: .3875em"><div class="m-01-field-button-combo"><input class="m-01-input-field" id="m-01-site-search-field" type="search" placeholder="输入关键词" autocorrect="off" autocapitalize="off" name="keyword"><button type="submit" class="m-01-search-submit-button">搜索</button></div></form></div></div></div><div class="wrap"><!-- main begin --><div class="content-panel"><div class="container hidden-xs" style="min-height:35px;"></div><div class="container"><div class="col-md-12 blog-post blog-post-articl" ><div class="post post-articl clearfix" style="margin-top:0px;"><div class="container nav-pos-xs"><ol class="breadcrumb col-md-5"><li><a href="<?php echo U("Index/index",array("tm"=>"mobile"));?>">首页</a></li><li class="active"><?php echo ($type["typename"]); ?></li></ol></div><h1 class="post-title"><?php echo ($vo["title"]); ?></h1><div class="post-info"><?php echo ($type["typename"]); ?> / <?php echo (date("Y-m-d H:i",$vo['pubdate'])); ?></div><div class="post-info"> 兑换积分：<b><?php echo ($vo["score"]); ?></b></div><div class="post-info"> ￥:<b><?php echo $vo['score']/C("cfg_recharge");?>元</b></div><div id="post-content" class="post-content" style="text-indent: 2em;line-height: 1.8em;"><?php if(($vo["litpic"]) != ""): ?><p><img src="<?php echo ($vo["litpic"]); ?>" /></p><?php endif; echo ($vo["body"]); ?></div><div class="jumbotron-wifi"><a href="javascript:void(0);" class="exchange" data-aid="<?php echo ($vo["id"]); ?>"  data-typeid="<?php echo ($vo["typeid"]); ?>"  data-channel="<?php echo ($vo["channel"]); ?>">马上兑换</a></div></div></div></div></div></div><!--EndContent--><div class="m-03-related-links"><div id="m-03-related-links-content" class="m-03-context"><hr><?php  $T = M("Arctype")->where("topid=0")->field("id,typename")->order("sortrank")->select(); $reid = 0; if(!empty($_GET['typeid'])){ $reid = $type['reid']; } $i = 0; foreach ($T as $t) { $i++; $cur = ''; if($t['id'] == $_GET['typeid'] || $t['id']==$reid || $t['id'] == $type['id']){ $cur = 'current'; } $A = M("Archives")->where("typeid=".$t['id'])->field("id,typeid,title,litpic,description")->order("pubdate desc")->limit("0,5")->select(); ?><div class="m-03-column"><div class="m-03-related-links-acc-link" id="m-03-related-links-0<?php echo $i;?>"><?php echo $t['typename'];?></div><ul class="m-03-related-links-acc-link-content" id="m-03-related-links-0<?php echo $i;?>-content"><?php foreach($A as $a){ ?><li><a href="<?php echo U("Index/article",array("id"=>$a['id'],"tm"=>"mobile"));?>"><span><?php echo cn_substr($a['title'],30);?></span></a></li><?php } ?></ul></div><?php
 } ?><!-- /.循环分类 --><div class="m-03-column"><div class="b-sharepanel"><a class="gui-btn-with-icon icon-share"><span>分享主页</span></a><ul><li><span class="gui-btn-sm-qq b-sharing" data-service="qq" title="QQ Space">QQ Space</span><span class="gui-btn-sm-tecent b-sharing" data-service="tecent" title="Tecent">Tecent</span><span class="gui-btn-sm-qq-share b-sharing" data-service="qq-share" title="QQ Share">QQ Share</span><span class="gui-btn-sm-weibo b-sharing" data-service="weibo" title="Weibo">Weibo</span><span class="gui-btn-sm-renren b-sharing" data-service="renren" title="RenRen">RenRen</span><span class="gui-btn-sm-kaixin b-sharing" data-service="kaixin" title="Kaixin">Kaixin</span><span class="gui-btn-sm-sohu b-sharing" data-service="sohu" title="Sohu">Sohu</span><span class="gui-btn-sm-baidu b-sharing" data-service="baidu" title="Baidu">Baidu</span></li></ul></div></div></div></div><div class="m-03-footer-logo"><div class="m-03-context"><a class="m-03-footer-logo-link" href="<?php echo U("Index/index",array("tm"=>"mobile"));?>" title=" - 首页">首页</a></div></div><div class="m-03-legal-notice"><div class="m-03-context"><div class="m_gFooterWrap"><div class="hotline"></div><div class="hotline_dial" style=" background: url('/Home/Tpl/mobile/res/m_ico_small_30x30.png') 9px 3px no-repeat;background-size: 15px auto;"><a href="tel:<?php echo C("site_tel");?>" onclick="mztrack('g_footer_hotline_dial')">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo C("site_tel");?></a></div><div class="links" style="background-color:transparent;min-height:auto;"><a href="#">网站地图</a> | <a href="#">使用及隐私条款</a> | <a href="tel:<?php echo C("site_tel");?>">联系我们</a></div><a class="gLangSwitch  en" style="background-image: url('/Home/Tpl/mobile/res/ico_lang_35x35.png')"  href="#"></a><div class="copyright">©<?php echo C("copyright");?></div></div></div></div><div id="zoomImageShade"></div><div id="knowledgeBaseShade"></div><div id="knowledgeBase"></div><div id="divPopupShade"></div><div id="divPopup"></div><script src="__PUBLIC__/static/bootbox.min.js" type="text/javascript"></script><script type="text/javascript">  function alertMsg(msg){
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
 $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/water.apk"); ?><img src="<?php echo $url;?>" style="width:100%;height:auto;"  /></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal --></div><script src="/Home/Tpl/mobile/res/lib-vendor.js"></script><script src="/Home/Tpl/mobile/res/lib-module.js"></script><script src="/Home/Tpl/mobile/res/dyn-module.js"></script><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/style.css"><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script><!-- Modal --><div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">登录</h4></div><div class="modal-body"><form action="/Member<?php echo U("Public/checkLogin");?>" method="post"><div class="form-group has-feedback"><input type="text" name="username"  class="form-control" placeholder="用户名"><span class="glyphicon glyphicon-user form-control-feedback"></span></div><div class="form-group has-feedback"><input type="password" name="password" class="form-control" placeholder="密码"><span class="glyphicon glyphicon-lock form-control-feedback"></span></div><div class="row" style="margin-bottom:15px;"><div class="col-xs-4"><input type="text" name="verify" class="form-control" placeholder="验证码"></div><!-- /.col --><div class="col-xs-3" style="margin-left:12px;"><img id="verifyImg" SRC="<?php echo U('Public/verify');?>" onClick="fleshVerify()" border="0" alt="点击刷新验证码" style="cursor:pointer" align="absmiddle"></div><!-- /.col --></div><div class="row"><div class="col-xs-12"><button type="submit" class="btn btn-primary btn-block btn-flat">登录</button></div><!-- /.col --></div></form><div class="social-auth-links text-center"><p>- OR -</p><a href="/Member<?php echo U("Public/reg");?>"><button class="btn btn-block btn-info">注册</button></a></div><a href="<?php echo U("Public/forgot");?>">找回密码</a></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button></div></div></div></div><script type="text/javascript">  $('.exchange').click(function(){
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
      <?php } ?>  });

 function fleshVerify(type){ 
  //重载验证码
  var timenow = new Date().getTime();
  if (type){
    $('#verifyImg').attr("src", '/Member<?php echo U('Public/verify',array('type'=>1,'t'=>time()));?>');
  }else{
    $('#verifyImg').attr("src", '/Member<?php echo U('Public/verify',array('t'=>time()));?>');
  }
}
</script></body></html><!-- Noxum Publishing Studio --><!-- build time 2016-05-12 00:36:13 -->