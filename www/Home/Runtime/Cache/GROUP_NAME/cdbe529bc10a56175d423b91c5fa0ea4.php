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
  </script><title><?php echo (C("SITENAME")); ?></title><meta name="keywords" content="<?php echo (C("keyword")); ?>" /><meta name="description" content="<?php echo (C("content")); ?>" /><meta charset="utf-8" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/v63597529447.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/screenlib.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/screenmodules.css" type="text/css" media="screen, projection, print" /><link rel="stylesheet" href="/Home/Tpl/mobile/res/skin.css" type="text/css" media="screen, projection, print" /><script src="/Home/Tpl/mobile/res/lib-extern.js"></script><script src="/Home/Tpl/mobile/res/lib-head.js"></script><meta name="generator" content="Noxum Publishing Studio 5" /><meta name="cache-date" content="2016-05-12 00:36:12 GMT +2" /><meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" /><meta name="format-detection" content="telephone=no" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="apple-mobile-web-app-status-bar-style" content="black" /><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><style>  @media only screen and (min-width: 1601px) {
  body {
  background-image: url('/images/mr/bg-blur_struktur.png'), url('http://files2.porsche.com/filestore.aspx/normalbg.jpg?pool=multimedia&type=image&id=bannercaymanwwkw19&lang=none&filetype=normalbg&version=6a25fd78-112c-11e6-9225-0019999cd470');
  background-position: 0 0, center 0;
  background-repeat: repeat-x, no-repeat;
  background-attachement: fixed;
  }
  }
  </style></head><body class="pool-china lang-zh" data-pageid="rd2013-homepage"><div class="b-page-wrapper"><div class="b-page-overlay"></div><div class="m-00-header m-00-main-navigation-available"><h3 class="m-00-header-lined-crest"><span class="m-00-crest-wrapper"><a class="m-00-crest" href="<?php echo U("Index/index",array("tm"=>"mobile"));?>" title=" - 首页">首页
    </a></span></h3></div><div class="m-01-main-navigation b-h orizontal-box-shadow-bottom"><div class="m-01-menu-item"><div style="border-left: 1px solid #666;height: 43px;position: absolute;right: 100px;top: 10px;"></div><div style="float:right;top: 7px;position: absolute;right: 2px;"><?php
 if ($_SESSION [C ( 'USER_AUTH_KEY' )]){ ?><p style="text-align:center;line-height:10px;"><a href="/Member/" style="color:#a10333;text-decoration:none" ><?php echo $_SESSION['member']['userid'];?></a></p><p style="line-height:10px;"><a  href="/Member" style="color:#2a4b6d;text-decoration:none;">个人主页</a><a  href="/Member<?php echo U("Public/logout");?>" style="color:#2a4b6d;text-decoration:none;">退出</a></p><?php  }else{ ?><a href="/Member/index.php/Public/reg.html"><button type="button" class="btn btn-primary btn-xs" style="background-color: #2a4b6d;border-color: #2a4b6d;">注 册</button></a><a href="/Member/"><button type="button" class="btn btn-primary btn-xs" style="background-color: #2a4b6d;border-color: #2a4b6d;">登 录</button></a><br/><a href="javascript:void(0);"><button type="button" class="btn btn-primary btn-xs" style="margin-top:1px;background-color: #2a4b6d;border-color: #2a4b6d;" data-toggle="modal" data-target="#myModalApp">APP下载</button></a><?php } ?></div><div class="m-01-sub-menu m-01-level-1"><div class="m-01-menu-section" id="m-01-model-menu"></div><div class="m-01-menu-section" id="m-01-blue-buttons"></div></div></div></div><style>.carousel-indicators .active{background-color: #000;}
</style><!--StartContent--><div class="m-04-intro-section-home-slider-wrapper"><div class="m-04-intro-section-home-slider home royalSlider contentSlider"><div id="myCarousel" class="carousel slide" data-ride="carousel"><?php  $time = time(); $A = M("Myad")->where("starttime <".$time." and endtime>".$time)->limit("0,10")->field("id,adname,subtitle,image,url")->select(); $i = 0; echo '<ol class="carousel-indicators" style="bottom:-30px;">'; foreach ($A as $a) { $act = ''; if($i==0){ $act = 'active'; } echo '<li data-target="#myCarousel" data-slide-to="'.$i.'" class="'.$act.'" style="margin:0 5px;background:#999;border: 1px solid #999;"></li>'; $i++; } echo '</ol>'; echo '<div class="carousel-inner" role="listbox">'; $i = 0; foreach ($A as $a) { $act = ''; if($i==0){ $act = 'active'; } $tmp = ''; if($a['url']){ $tmp2 = '<div class="item '.$act.'"><a href="/Member'.U("Public/adClick",array("id"=>$a['id'])).'" target="_blank" style="color:#000"  ><img src="'.$a['image'].'"><p style="text-align:center;margin:10px 0 0 0;"><img src="/Home/Tpl/mobile/res/ico_1.png" style="width:9px;height:13px;margin-top:-3px;">&nbsp;'.$a['adname'].'</p><p style="text-align:center;margin:0px;font-size:11px;">&nbsp;'.$a['subtitle'].'</p></a></div>'; }else{ $tmp2 = '<div class="item '.$act.'"><img src="'.$a['image'].'"></div>'; } echo $tmp2; $i++; } echo '</div>'; ?></div><div style="height:8px">&nbsp;</div></div></div><div class="m-28-blue-buttons-module"><div style="height:20px"></div><div class="m-28-blue-buttons-wrapper"><?php  $T = M("Arctype")->where("topid=0")->field("id,typename")->order("sortrank")->select(); $reid = 0; if(!empty($_GET['typeid'])){ $reid = $type['reid']; } foreach ($T as $t) { ?><a href="<?php echo U("Index/type",array("typeid"=>$t['id'],"tm"=>"mobile"));?>" style="margin:0 1px;"><button type="button" class="btn btn-primary btn-xs" style="background-color: #2a4b6d;border-color: #2a4b6d;height:35px;"><?php echo $t['typename'];?></button></a><?php
 } ?><!-- /.循环分类 --></div></div><div class="m-07-car-range"><h2 class="b-module-lined-headline"><span><?php echo C("index_font");?></span></h2><div style="height:15px"></div><div class="m-07-car-range-wrapper"><?php
 $P = M("Archives")->where("litpic<>'' and typeid=192")->field("id,typeid,title,litpic,description")->order("pubdate desc")->limit("0,8")->select(); foreach ($P as $row) { ?><div class="m-07-car-range-tile"><div class="m-07-car-tile-wrapper"><div class="m-07-overview-link-wrapper"><img src="<?php echo $row['litpic'];?>" class="m-07-car-range-image" style="width:80%;" /><span class="m-07-car-range-title" style="margin-top:5px;"><?php echo cn_substr($row['title'],30);?></span><a class="m-07-car-range-link-overview" href="<?php echo U("Index/article",array("id"=>$row['id'],"tm"=>"mobile"));?>" aria-haspopup="true"></a></div></div></div><?php
 } ?><div class="m-07-car-range-tile"><div class="m-07-car-tile-wrapper"><div class="m-07-overview-link-wrapper"><div class="m-07-car-range-image m-07-car-range-compare-icon" style="height:45px;margin-top: -15px;display:block"></div><span class="m-07-car-range-title">更多</span><a class="m-07-car-range-link-compare" href="<?php echo U("Index/type",array("typeid"=>185,"tm"=>"mobile"));?>" data-tracked="true">更多</a></div></div></div></div></div><div class="m-06-social-hub"><div id="m-06-social-hub-content" class="m-06-social-hub-content"><div id="m-22-social-media-content" class="m-06-social-hub-headline-content display"></div></div></div><!--EndContent--><div class="m-03-footer-logo"><div class="m-03-context"><a class="m-03-footer-logo-link" href="<?php echo U("Index/index",array("tm"=>"mobile"));?>" title=" - 首页">首页</a></div></div><div class="m-03-legal-notice"><div class="m-03-context"><div class="m_gFooterWrap"><div class="hotline"></div><div class="hotline_dial" style=" background: url('/Home/Tpl/mobile/res/m_ico_small_30x30.png') 9px 3px no-repeat;background-size: 15px auto;"><a href="tel:<?php echo C("site_tel");?>" onclick="mztrack('g_footer_hotline_dial')">&nbsp;&nbsp;&nbsp;&nbsp;<?php echo C("site_tel");?></a></div><div class="links" style="background-color:transparent;min-height:auto;"><a href="#">网站地图</a> | <a href="#">使用及隐私条款</a> | <a href="tel:<?php echo C("site_tel");?>">联系我们</a></div><a class="gLangSwitch  en" style="background-image: url('/Home/Tpl/mobile/res/ico_lang_35x35.png')"  href="#"></a><div class="copyright">©<?php echo C("copyright");?></div></div></div></div><div id="zoomImageShade"></div><div id="knowledgeBaseShade"></div><div id="knowledgeBase"></div><div id="divPopupShade"></div><div id="divPopup"></div><script src="__PUBLIC__/static/bootbox.min.js" type="text/javascript"></script><script type="text/javascript">  function alertMsg(msg){
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
 $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/water.apk"); ?><img src="<?php echo $url;?>" style="width:100%;height:auto;"  /></div></div><!-- /.modal-content --></div><!-- /.modal-dialog --></div><!-- /.modal --></div><link rel="stylesheet" href="/Home/Tpl/Index/xiaoyun/css/bootstrap.min.css"><script src="/Home/Tpl/Index/xiaoyun/libs/bootstrap/3.3.4/js/bootstrap.min.js" type="text/javascript"></script></body></html><!-- Noxum Publishing Studio --><!-- build time 2016-05-12 00:36:13 -->