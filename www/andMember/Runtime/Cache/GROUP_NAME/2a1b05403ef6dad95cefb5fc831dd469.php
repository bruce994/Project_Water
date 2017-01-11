<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo (C("SITENAME")); ?></title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="__PUBLIC__/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="__PUBLIC__/misc/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="__PUBLIC__/misc/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="__PUBLIC__/dist/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="__PUBLIC__/dist/css/skins/_all-skins.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="__PUBLIC__/misc/html5shiv.min.js"></script>
        <script src="__PUBLIC__/misc/respond.min.js"></script>
    <![endif]-->
    <style> 
      .color-palette {
        height: 35px;
        line-height: 35px;
        text-align: center;
      }
      .color-palette-set {
        margin-bottom: 15px;
      }
      .color-palette span {
        display: none;
        font-size: 12px;
      }
      .color-palette:hover span {
        display: block;
      }
      .color-palette-box h4 {
        position: absolute;
        top: 100%;
        left: 25px;
        margin-top: -40px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        display: block;
        z-index: 7;
      }

      table { width: 100%; }
      td, th {text-align: left; white-space: nowrap;}
      td.numeric, th.numeric { text-align: right; }


    </style>
  </head>
  <body class="hold-transition skin-green-light sidebar-mini">
    <div class="wrapper">

      
<?php
$member = M("Member")->where("mid=".$_SESSION["member"]['mid'])->find(); ?>


<!-- jQuery 2.1.4 -->
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style-ryynet.css">


<div class="top">
    <ul style="margin:0px;">
        <li style="width:30%"><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li>
        <li style="width:70%"><a href="<?php echo U("Main/index");?>">我的信息</a></li>
    </ul>
</div>






      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            购物车
            <small>管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">购物车</a></li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">              

                <div class="box-body">

                    <div class="row container-fluid" id="sys_ss">
                        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i; $archives = M("Archives")->where("id=".$vo['aid'])->field("id,title,litpic,channel")->find(); ?>

                        <div class="row table table-bordered ">
                            <div class="col-xs-2">
                                <input type="checkbox" name="ch[]"  value="<?php echo ($vo["id"]); ?>|<?php echo ($vo["aid"]); ?>|<?php echo $archives['channel'];?>|<?php echo ($vo["num"]); ?>" onclick="changePrice(<?php echo ($vo["id"]); ?>,this);" >
                            </div>
                            <div class="col-xs-4">
                                <img src="<?php echo $archives['litpic'];?>" width="90" height="70">
                            </div>
                            <div class="col-xs-4"><?php echo $archives['title'];?><br>
                                兑换积分:<span id="sp_<?php echo ($vo["id"]); ?>"><?php echo ($vo["score"]); ?></span>
                                <br/>数量:<span><?php echo ($vo["num"]); ?></span>
                            </div>
                            <div class="col-xs-1"><a href="javascript:void(0);" data-toggle="modal" data-target="#lc_confirm" onclick="msgBox('<?php echo U("Shop/cartDelete",array("id"=>$vo['id'],"ajax"=>"1"));?>','GET','json','','<?php echo U("Shop/cart");?>',true,'确定删除？');"><i class="fa fa-fw fa-remove"></i></a>
                            </div>
                        </div><?php endforeach; endif; else: echo "" ;endif; ?>
                    </div>
                
                </div><!-- /.box-body -->

                

              </div><!-- /.box -->


            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->







      <footer class="main-footer" style="position: fixed; bottom: 0px; width: 100%;"> <div class="row container-fluid">
              <div class="col-xs-4">
                  全选 <input type="checkbox"  id="sys_check">
              </div>
              <div class="col-xs-4">
                  合计：<span id="total">0</span>
              </div><div class="col-xs-4">
                  <button class="btn btn-block btn-danger btn-sm exchange">结算</button>
              </div>
          </div>
      </footer>

     
    <!-- Bootstrap 3.3.5 -->
    <script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="__PUBLIC__/plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="__PUBLIC__/dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="__PUBLIC__/dist/js/demo.js"></script>

<script type="text/javascript">
  $(function() {
    var sys_tmp = 0;
    $( "#sys_check" ).click(function() {
          if(sys_tmp == 0){
            $('#sys_ss input:checkbox').prop('checked', true);
            sys_tmp = 1;
            tmp1 = 0;
            $( "#sys_ss span" ).each(function( index ) {
              tmp1 += parseInt($( this ).text()) ;
            });
            $("#total").text(tmp1);
          }else{
              $('#sys_ss input:checkbox').prop('checked', false);
              sys_tmp = 0;
                $("#total").text("0");
          }

    });
    });


function changePrice(vv,bb){
    tmp = parseInt($("#sp_"+vv).text());
    if($(bb).prop('checked')){
        tmp += parseInt($("#total").text());
    }else{
        tmp = parseInt($("#total").text()) - tmp;
    }
        $("#total").text(tmp);
    }





  $('.exchange').click(function(){
         var ids = '';
        $( "#sys_ss input" ).each(function( index ) {
                if($(this).prop('checked')){
                    ids += $(this).val() + ','; 
                }
        });

        if(ids != ''){
            ids = ids.substring(0, ids.length - 1); 
        }else{
            alertMsg('还未选择,不能结算');
             return;
        }
      var postData = new FormData();
      postData.append("ids", ids);
      postData.append("scoreAll", $("#total").text());
         $.ajax({
              url: "<?php echo U("Public/exchangeAll");?>",
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
                                location.href = "<?php echo U("Member/pay");?>";
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
                          location.href = "<?php echo U("Shop/index",array("typeid"=>193,"backUrl"=>urlencode("/andMember/index.php/Shop/cart.html")));?>";
                          }
                        }

                    }
                  });

              },
              error: function (err) {
                  alert("哎呀,出错了!请重试!<br>"+JSON.stringify(err))
              }
          });

       });




</script>
















     
    </div><!-- ./wrapper -->




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