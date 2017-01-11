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
            我的收藏夹
            <small>管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">收藏夹</a></li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">              

                <div class="box-body">
                <section id="no-more-tables">
                  <table id="example2" class="table-bordered table-striped table-condensed cf">
                    <thead class="cf">
                      <tr>
                        <th>编号</th>
                        <th>商品名称</th>
                        <th>添加日期</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                              <td data-title="编号"><?php echo ($vo["id"]); ?></td>
                              <td data-title="商品名称">
                                <a href="/index.php?m=Index&a=article&id=<?php echo ($vo["id"]); ?>&tm=android">
                                <?php
 $tmp = M("Archives")->where("id=".$vo['aid'])->field("id,title")->find(); echo $tmp['title']; ?>
                              </a>
                              </td>
                              <td data-title="添加日期">
                                <?php echo (date("Y-m-d H:i",$vo['addtime'])); ?></td>
                              <td data-title="操作">
                                   | <a href="javascript:void(0);" data-toggle="modal" data-target="#lc_confirm" onclick="msgBox('<?php echo U("Shop/collectDelete",array("id"=>$vo['id'],"ajax"=>"1"));?>','GET','json','','<?php echo U("Shop/collect");?>',true,'确定删除？');"><i class="fa fa-fw fa-remove"></i></a>
                              </td>
                          </tr><?php endforeach; endif; else: echo "" ;endif; ?>                    
                    </tbody>
      
                  </table>
                </section>
                </div><!-- /.box-body -->

                <div class="row container-fluid">
                  <div class="col-sm-5"><div class="dataTables_info"><?php echo ($totalCount); ?> 条记录 <?php echo ($currentPage); ?>/<?php echo ($totalPages); ?> 页</div></div>
                  <div class="col-sm-6">
                    <div class="dataTables_paginate paging_simple_numbers">
                    <ul class="pagination">
                      <?php echo ($page); ?>
                   </ul>
                  </div>
                  </div>
                </div>

              </div><!-- /.box -->


            </div><!-- /.col -->
          </div><!-- /.row -->
        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->

    

      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.3.0
        </div>
        <strong> <a href="<?php echo C("site_url");?>"><?php echo C('copyright');?></a>.</strong>      </footer>

     
    <!-- Bootstrap 3.3.5 -->
    <script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>
    <!-- FastClick -->
    <script src="__PUBLIC__/plugins/fastclick/fastclick.min.js"></script>
    <!-- AdminLTE App -->
    <script src="__PUBLIC__/dist/js/app.min.js"></script>
    <!-- AdminLTE for demo purposes -->
    <script src="__PUBLIC__/dist/js/demo.js"></script>


<!--dialog-->
<div id="lr_confirm" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body" id="lr_config_msg">
         Are you sure?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary" id="lr_del">确定</button>
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
function lr_confirm(msg,url){
 $("#lr_config_msg").html(msg);
 $('#lr_confirm').modal({backdrop: 'static', keyboard: false })
        .one('click', '#lr_del', function (e) {
            location.href = url;
        });
}
</script>
<!--/.dialog-->


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