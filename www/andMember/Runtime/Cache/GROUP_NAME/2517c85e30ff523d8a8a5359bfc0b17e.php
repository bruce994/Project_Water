<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html><head>
<meta charset="utf-8">
<title><?php echo (C("SITENAME")); ?></title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<metaname="screen-orientation"content="portrait">
<metaname="x5-orientation"content="portrait">
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style.css">
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
</head>

<body>

<?php
$member = M("Member")->where("mid=".$_SESSION["member"]['mid'])->find(); ?>

<div class="top" style="height:130px;">
<ul style="margin:0px;">
<li><a href="/index.php/Index/type/typeid/185/tm/android.html">水生活</a></li>
<li><a href="/index.php/Index/andType/tm/android.html" >健康圈</a></li>
<li><a href="/andMember/" class="hover">我的水</a></li>
</ul>
<div class="clear"></div>

<div class="myself">
<a href="<?php echo U("Member/index",array("ss"=>1));?>">
<img src="<?php echo empty($member['face'])?"/Public/images/face.png":$member['face'];?>" class="my"><span><i><?php echo $_SESSION["member"]['uname'];?></i><i><?php $aa = $_SESSION["member"]['userid'];echo substr($aa,0,3)."****".substr($aa,7,4);?></i></span><img src="/misc/phpqrcode/index.php?url=<?php echo urlencode(C("site_url")."/Member/index.php?m=Public&a=reg&re_userid=". $_SESSION["member"]['userid']);?>" width="30" height="30" class="mm">
</a>
</div>

</div>

<div class="center mypoint">

<div class="border"><a href="<?php echo U("Member/andLog",array("ss"=>2));?>">积分 <?php echo $member['scores'];?><small>积分详情</small></a><a href="<?php echo U("Shop/andIndex",array("ss"=>2));?>" style="border:none;">我的订单<small>订单详情</small></a></div>
<div class="border"><span>我的签到</span><i>本月已签到<em>
 <?php
 $start = strtotime(date('Y-m-d', strtotime('first day of this month'))); $end = strtotime(date('Y-m-d', strtotime('last day of this month'))); $model = M ("Score_log" ); $tmp = $model->where('typeid=1 and mid='.$_SESSION [C ( 'USER_AUTH_KEY' )].' and addtime>'.$start.' and addtime<'.$end)->count(); echo $tmp; ?> 
</em>天</i><samp style="cursor: pointer;" id="registration">签到领积分</samp></div>

<div class="b-img">

</div>

</div>






<style>

canvas {
  z-index: 100;
}
.labelLink{  
  font-size: 30px;
}
.labelPercentage {
  font-size: x-large;
}
 
.labelText {
  font-size: 16px;
}
 
.labelContainer {
  display: block;
  text-align: center;
  width: 100px;
  font-family: Helvetica;
  top: -207px; 
  left: 270px; 
}



</style>
<script src="__PUBLIC__/js/Chart.min.js"></script>
<script>
var doughnutWidget = {
  charts: {},

  prettyNumber: function(n) {
    // pretty count
    return (n + '').replace(/./g, function(c, i, a) {
      return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
    });
  },

  positionLabel: function(value) {
    var container = {
      top: $('#' + value).offset().top,
      left: $('#' + value).offset().left,
      height: $('#' + value).height(),
      width: $('#' + value).width()
    }

    var label = {
      height: $('#' + value + 'Label').height(),
      width: $('#' + value + 'Label').width()
    }

    // find position
    var position = {
      top: container.top + container.height / 2 - (label.height / 2),
      left: container.left + container.width / 2 - (label.width / 2)
    }

    $('#' + value + 'Label').offset(position);
  },

  createCanvas: function(value, o) {
    var canvas;
    if (doughnutWidget.options) {
    console.log(doughnutWidget.options);
      canvas = $('<canvas>', { id: value, width: doughnutWidget.options.width, height: doughnutWidget.options.height, class: doughnutWidget.options.class});
    } else {

      canvas = $('<canvas>', { id: value, width: o.width, height: o.height});

      if (o.class) {
        canvas.addClass(o.class);
      }
    }

    if (doughnutWidget.options && doughnutWidget.options.container) {
      doughnutWidget.options.container.append(canvas);
    } else {
      o.container.append(canvas);
    }
  },

  render: function(o) {
    for (var value in o) {
      if (!doughnutWidget.charts[value + 'Chart']) {
        // create canvas
        doughnutWidget.createCanvas(value, o[value]);

        // create chart
        doughnutWidget.charts[value + 'Chart'] = new Chart($('#' + value).get(0).getContext('2d')).Doughnut(
          [{
            value: o[value].val,
            label: '1',
            color: o[value].color
          }, {
            value: 100 - o[value].val,
            color: '#F0F0F0'
          }],
          {
            percentageInnerCutout: (doughnutWidget.options && doughnutWidget.options.cutout) ? doughnutWidget.options.cutout : 75,
            animationEasing: 'easeOut',
            showTooltips: false,
          });

        // create the labels
        var perc = $('<div class="labelPercentage"><a href="' + (o[value].link ? o[value].link : '#') + '" class="labelLink">' + o[value].val + '%</a></div>');

        var label = $('<span id="' + value + 'Label" class="labelContainer" ></span>');
        label.append(perc);
        label.append('<div class="labelText">' + value + '</div>');

        $( (doughnutWidget.options && doughnutWidget.options.container ? doughnutWidget.options.container : o[value].container) ).append(label);

        // click handler
        if (o[value].click) {
          $('#' + value + 'Label .labelLink').click(o[value].click);
        }
      } else {
        // update the charts
        doughnutWidget.charts[value + 'Chart'].segments[0].value = o[value].val;
        doughnutWidget.charts[value + 'Chart'].update();

        var perc = $('#' + value + 'Label .labelLink');
        perc.html(o[value].val + '%');
      }

      doughnutWidget.positionLabel(value);
    }

  }
}

</script>
<script>
$(window).load(function() {
  doughnutWidget.options = {
    container: $('#container'),
    width: 100,
    height: 100,
    class: 'myClass',
    cutout: 80
  };

  doughnutWidget.render(data());

  setInterval(init, 2000);



  width = $( window ).width();
  $("#water").width(width);
  $("#water").height(width/2);
  $(".labelText").text("储水量");
  $(".labelContainer").css({"top":"-207px","left":"270px"});


});

function init() {
  doughnutWidget.render(data());
}

function data() {
    var data = {
    water: {

      <?php
 $start = strtotime(date('Y-m-d', strtotime('first day of this month'))); $end = strtotime(date('Y-m-d', strtotime('last day of this month'))); $Model = new Model(); $list = $Model->query("SELECT score  FROM `".C("DB_PREFIX")."shops_orders`  where mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]." and state=1 and stime>$start and stime < $end"); $aa = 0; foreach ($list as $value) { $aa+=intval($value['score']) * C("cfg_milliliter"); } $total = 45 * 1000; $bb = round($aa/$total,2)*100; if($bb < 15){ $cc = "#ff8160"; }elseif($bb > 15 && $bb < 30){ $cc = "#ffe86c"; }else{ $cc = "#00d58b"; } ?>
      val: <?php echo $bb;?>,
      color: "<?php echo $cc;?>",
      click: function(e) {
        console.log('hi');
      }
    },
  };

  return data;
}


</script>

<div id="container" class="margin" role="group" style="padding-top:12px;"></div>
<div class="b-img" style="padding-top:0px;position: fixed; left: 0px; bottom: 0px; width: 100%;">
  <div style="margin:0 auto;text-align:center;font-size:16px;">30天取水示意图</div>
<img src="__PUBLIC__/android/images/bg3-1.png">
</div>



<!-- Bootstrap 3.3.5 -->
<link rel="stylesheet" href="__PUBLIC__/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap 3.3.5 -->
<script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript">
 $( document ).ready(function() {

    var isReg = false;
     $.ajax({
          url: "<?php echo U("Member/registrationIs");?>",
          type: 'GET',
          processData: false,
          contentType: false,
          dataType: "json",
          success: function (result) {
                if(result.code == "1"){
                    $("#registration").text("已经签到过");
                    $("#registration").addClass("samp1");
                    isReg = true;
                }
          },
          error: function (err) {
              alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
          }
      }); 



  $("#registration").click(function() {
        if(isReg) return;

         var postData = new FormData();
         postData.append("is_ajax", 1);

         $.ajax({
              url: "<?php echo U("Member/registration");?>",
              type: 'POST',
              data: postData,
              processData: false,
              contentType: false,
              dataType: "json",
              success: function (result) {

                 if(result.code == "1"){
                    $("#registration").text("已经签到过");
                    $("#registration").addClass("samp1");
                    isReg = true;
                }

                    alertMsg(result.msg);
                    return;
              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          }); 


  });
});
</script>




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