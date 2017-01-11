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


   
    <!-- Morris chart -->
    <link rel="stylesheet" href="__PUBLIC__/plugins/morris/morris.css">



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
    </style>
  </head>
  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">

            <!-- jQuery 2.1.4 -->
      <script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>

      <header class="main-header">
        <!-- Logo -->
        <a href="__APP__" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>Wat</b>er</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b><?php echo C("SITENAME"); ?>管理系统</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">

                <li class="dropdown messages-menu"><a href="/" target="_blank">
                  进入网站主页</a></li>
          
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="<?php echo empty($_SESSION["admin"]['face'])?"/Public/images/face.png":$_SESSION["admin"]['face'];?>" class="user-image" alt="User Image">
                  <span class="hidden-xs"><?php echo $_SESSION["admin"]['userid'];?></span>
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">



                    <img src="<?php echo empty($_SESSION["admin"]['face'])?"/Public/images/face.png":$_SESSION["admin"]['face'];?>" class="img-circle" alt="User Image">


                    <p>
                      最后登录时间：<?php echo date("m-d H:i",$_SESSION["admin"]['logintime']);?>
                      <small>IP:<?php echo $_SESSION["admin"]['loginip'];?></small>
                    </p>
                  </li>
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="<?php echo U("Admin/edit",array("id"=>$_SESSION["admin"]['id']));?>" class="btn btn-default btn-flat">修改</a>
                    </div>
                    <div class="pull-right">
                      <a href="<?php echo U("Public/logout");?>" class="btn btn-default btn-flat">退出</a>
                    </div>
                  </li>
                </ul>
              </li>
              <!-- Control Sidebar Toggle Button -->
              <li>
                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <!-- Left side column. contains the logo and sidebar -->
      <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
          <!-- Sidebar user panel -->
          <div class="user-panel">
            <div class="pull-left image">
              <img src="<?php echo empty($_SESSION["admin"]['face'])?"/Public/images/face.png":$_SESSION["admin"]['face'];?>" class="img-circle" alt="User Image" onclick="javascript:location.href='__APP__';" style="cursor: pointer;" >
            </div>
            <div class="pull-left info">
              <p><?php echo $_SESSION["admin"]['userid'];?></p>
              <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
            </div>
          </div>
          <!-- search form -->
          <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
              <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </form>
          <!-- /.search form -->
          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="header">功能管理</li>
    

          <?php if(strstr($_SESSION["admin"]['role'], 'sys_seting') || strstr($_SESSION["admin"]['role'], 'sys_admin') || strstr($_SESSION["admin"]['role'], 'sys_pay') || strstr($_SESSION["admin"]['role'], 'sys_link') || strstr($_SESSION["admin"]['role'], 'sys_cache') || strstr($_SESSION["admin"]['role'], 'sys_enum') ){ ?>

            <li class="treeview <?php if($_GET['ss'] == 1){echo "active";} ?>">
              <a href="#">
                <i class="fa  fa-cog"></i><span>系统管理</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                
                <?php if(strstr($_SESSION["admin"]['role'], 'sys_seting')){ ?>
                <li><a href="<?php echo U("System/index",array("ss"=>1));?>"><i class="fa fa-cog"></i>系统设置</a></li>
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'sys_admin')){ ?>
                <li><a href="<?php echo U("Admin/index",array("ss"=>1));?>"><i class="fa fa-user"></i>管理员</a></li>  
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'sys_pay')){ ?>
                <li><a href="<?php echo U("System/payment",array("ss"=>1));?>"><i class="fa fa-credit-card"></i>支付接口</a></li>  
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'sys_link')){ ?>
                <li><a href="<?php echo U("System/link",array("ss"=>1));?>"><i class="fa fa-link"></i>友情链接</a></li>  
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'sys_cache')){ ?>
                <li><a href="<?php echo U("System/deleteCache",array("ss"=>1));?>"><i class="fa fa-refresh"></i>更新缓存</a></li>
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'sys_enum')){ ?>
                <li><a href="<?php echo U("System/enum",array("ss"=>1));?>"><i class="fa fa-circle-o"></i>数据字典管理</a></li>
                <?php } ?>

              </ul>
            </li>

          <?php } ?>


          <?php if(strstr($_SESSION["admin"]['role'], 'member_seting') || strstr($_SESSION["admin"]['role'], 'member_setScore') || strstr($_SESSION["admin"]['role'], 'member_notice') || strstr($_SESSION["admin"]['role'], 'member_score') || strstr($_SESSION["admin"]['role'], 'member_recharge') || strstr($_SESSION["admin"]['role'], 'member_order') ){ ?>

           <li class="treeview <?php if($_GET['ss'] == 2){echo "active";} ?>">
            <a href="#">
              <i class="fa  fa-user"></i><span>会员管理</span>
              <i class="fa fa-angle-left pull-right"></i>
            </a>
            <ul class="treeview-menu">
                <?php if(strstr($_SESSION["admin"]['role'], 'member_seting')){ ?>
                <li><a href="<?php echo U("Member/index",array("ss"=>2));?>"><i class="fa fa-user-plus"></i>会员</a></li> 
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'member_setScore')){ ?>                               
                <li><a href="<?php echo U("Member/setScore",array("ss"=>2));?>"><i class="fa fa-cc"></i>积分设置</a></li>  
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'member_notice')){ ?>                              
                <li><a href="<?php echo U("Member/notice",array("ss"=>2));?>"><i class="fa fa-bell-o"></i>会员公告</a></li> 
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'member_score')){ ?>                               
                <li><a href="<?php echo U("Member/log",array("ss"=>2));?>"><i class="fa  fa-ticket"></i>会员积分</a></li>  
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'member_recharge')){ ?>                              
                <li><a href="<?php echo U("Member/pay",array("ss"=>2));?>"><i class="fa fa-circle-o"></i>会员充值</a></li>   
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'member_order')){ ?>                             
                <li><a href="<?php echo U("Shop/index",array("ss"=>2));?>"><i class="fa fa-reorder"></i>会员订单</a></li>
                <?php } ?>
            </ul>
          </li>
        <?php } ?>
           




            <li class="treeview <?php if($_GET['ss'] == 3){echo "active";} ?>">
              <a href="#">
                <i class="fa fa-folder"></i><span>栏目管理</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="<?php echo U("Type/index",array("ss"=>3));?>"><i class="fa fa-circle-o"></i>栏目管理</a></li>
              </ul>
            </li>




          <?php if(strstr($_SESSION["admin"]['role'], 'ad_seting') ){ ?>
            <li class="treeview <?php if($_GET['ss'] == 6){echo "active";} ?>">
              <a href="#">
                <i class="fa fa-adn"></i><span>广告管理</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <?php if(strstr($_SESSION["admin"]['role'], 'ad_seting')){ ?>                             
                <li><a href="<?php echo U("Admin/ad",array("ss"=>6));?>"><i class="fa fa-circle-o"></i>广告管理</a></li>
                <?php } ?>
              </ul>
            </li>
        <?php } ?>


            <li class="treeview <?php if($_GET['ss'] == 4){echo "active";} ?>">
              <a href="#">
                <i class="fa fa-table"></i><span>内容管理</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <?php
 $tmp = M("Channeltype")->field("id,typename")->select(); foreach ($tmp as $value) { ?>
                  <li><a href="<?php echo U("Type/article",array("channel"=>$value['id'],"ss"=>4));?>"><i class="fa fa-circle-o"></i><?php echo $value['typename'];?></a></li>
                <?php
 } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'feedback')){ ?>                             
                <li><a href="<?php echo U("Type/feedback",array("ss"=>4));?>"><i class="fa fa-comments"></i>评论管理</a></li>
                <?php } ?>

              </ul>
            </li>



          <?php if(strstr($_SESSION["admin"]['role'], 'model_seting') || strstr($_SESSION["admin"]['role'], 'model_field') ){ ?>
            <li class="treeview <?php if($_GET['ss'] == 5){echo "active";} ?>">
              <a href="#">
                <i class="fa fa-cubes"></i><span>频道模型</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <?php if(strstr($_SESSION["admin"]['role'], 'model_seting')){ ?>                             
                <li><a href="<?php echo U("Channel/index",array("ss"=>5));?>"><i class="fa  fa-cube"></i>内容模型管理</a></li>
                <?php } ?>

                <?php if(strstr($_SESSION["admin"]['role'], 'model_field')){ ?>                             
                <li><a href="<?php echo U("Channel/fmanage",array("ss"=>5));?>"><i class="fa  fa-cube"></i>字段管理</a></li>
                <?php } ?>

              </ul>
            </li>
          <?php } ?>


          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>

      


      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">


        <section class="content-header">
          <h1>
            <?php echo (C("SITENAME")); ?>
            <small><?php echo date("Y-m-d H:i:s");?></small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i>首页</a></li>
            <li class="active">公告</li>
          </ol>
        </section>





        <!-- Main content -->
        <section class="content">
          <!-- Small boxes (Stat box) -->

          <div class="row">
              <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="info-box">
                      <span class="info-box-icon bg-aqua"><i class="ion ion-information-circled"></i></span>
                      <div class="info-box-content">
                          <span class="info-box-text">未审核文章</span>
                          <span class="info-box-number">
                              <a href="<?php echo U("Type/article",array("arcrank"=>-1,"ss"=>4));?>">
                              <?php
 echo M("Archives")->where("arcrank=-1")->count(); ?>
                              </a><small>条</small></span>
                      </div><!-- /.info-box-content -->
                  </div><!-- /.info-box -->
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12">
                  <div class="info-box">
                      <span class="info-box-icon bg-yellow"><i class="ion ion-ios-people-outline"></i></span>
                      <div class="info-box-content">
                          <span class="info-box-text">当前会员总数</span>
                          <span class="info-box-number">
                           <?php
 echo M("Member")->count(); ?>
                          </span>
                      </div><!-- /.info-box-content -->
                  </div><!-- /.info-box -->
              </div>



          </div>




          <!-- Main row -->
          <div class="row">

            <!-- right col (We are only adding the ID to make the widgets sortable)-->
            <section class="col-lg-12 connectedSortable">
              <!-- solid sales graph -->
              <div class="box box-solid bg-teal-gradient">
                <div class="box-header">
                  <i class="fa fa-th"></i>
                  <h3 class="box-title">最近30天内会员注册趋势图</h3>
                  <div class="box-tools pull-right">
                    <button class="btn bg-teal btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn bg-teal btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <div class="box-body border-radius-none">
                  <div class="chart" id="line-chart" style="height: 250px;"></div>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
            </section><!-- right col -->


            <!-- right col (We are only adding the ID to make the widgets sortable)-->
            <section class="col-lg-12 connectedSortable">
              <!-- solid sales graph -->
              <div class="box box-solid bg-teal-gradient">
                <div class="box-header">
                  <i class="fa fa-th"></i>
                  <h3 class="box-title">最近30订单趋势图</h3>
                  <div class="box-tools pull-right">
                    <button class="btn bg-teal btn-sm" data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn bg-teal btn-sm" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <div class="box-body border-radius-none">
                  <div class="chart" id="line-chart1" style="height: 250px;"></div>
                </div><!-- /.box-body -->
              </div><!-- /.box -->
            </section><!-- right col -->




          </div><!-- /.row (main row) -->

        </section><!-- /.content -->


      
      </div><!-- /.content-wrapper -->

       

      
    

      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.3.0
        </div>
        <strong> <a href="<?php echo C("site_url");?>"><?php echo C('copyright');?></a>.</strong>       </footer>

      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Create the tabs -->
        
        <!-- Tab panes -->
        <div class="tab-content">
          <!-- Home tab content -->
          <div class="tab-pane" id="control-sidebar-home-tab">
            
         
          </div><!-- /.tab-pane -->
    
        </div>
      </aside><!-- /.control-sidebar -->
      <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
      <div class="control-sidebar-bg"></div>





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











    <script type="text/javascript" src="<?php echo U("Main/getAPI",array("type"=>"getMemberCount"));?>"></script>
    <script type="text/javascript" src="<?php echo U("Main/getAPI",array("type"=>"getArchivesCount"));?>"></script>

    <!-- jQuery UI 1.11.4 -->
    <script src="__PUBLIC__/js/jquery-ui.min.js"></script>
    <!-- Morris.js charts -->
    <script src="__PUBLIC__/js/raphael-min.js"></script>
    <script src="__PUBLIC__/plugins/morris/morris.min.js"></script>

<script type="text/javascript">
  
$(function () {

  "use strict";

  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");


  var line = new Morris.Line({
    element: 'line-chart',
    resize: true,
    data: memberCount,
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['注册数'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

 

  var line = new Morris.Line({
    element: 'line-chart1',
    resize: true,
    data: archiveCount,
    xkey: 'y',
    ykeys: ['item1'],
    labels: ['订单量'],
    lineColors: ['#efefef'],
    lineWidth: 2,
    hideHover: 'auto',
    gridTextColor: "#fff",
    gridStrokeWidth: 0.4,
    pointSize: 4,
    pointStrokeColors: ["#efefef"],
    gridLineColor: "#efefef",
    gridTextFamily: "Open Sans",
    gridTextSize: 10
  });

});
</script>



    </div><!-- ./wrapper -->


  </body>
</html>