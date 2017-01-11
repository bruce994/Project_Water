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

            <!-- jQuery 2.1.4 -->
      <script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>

      <header class="main-header">
        <!-- Logo -->
        <a href="__APP__" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>Lan</b>ren</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b><?php echo C("SITENAME"); ?>管理系统</b></span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button" style="font-size:20px;padding:10px 10px">功能导航
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <div class="navbar-custom-menu">
            <ul class="nav navbar-nav">


                <li class="dropdown messages-menu"><a href="/" target="_blank">
                  进入网站主页</a></li>

          
                <?php
 $member = M("Member")->where("mid=".$_SESSION["member"]['mid'])->find(); ?>
              <!-- User Account: style can be found in dropdown.less -->
              <li class="dropdown user user-menu">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img src="<?php echo empty($member['face'])?"/Public/images/face.png":$member['face'];?>" class="user-image" alt="User Image">
                  <span class="hidden-xs"><?php echo $_SESSION["member"]['userid'];?></span>
                </a>
                <ul class="dropdown-menu">
                  <!-- User image -->
                  <li class="user-header">
                    <img src="<?php echo empty($member['face'])?"/Public/images/face.png":$member['face'];?>" class="img-circle" alt="User Image">
                    <p>
                      最后登录时间：<?php echo date("m-d H:i",$_SESSION["member"]['logintime']);?>
                      <small>当前积分:<?php echo $member['scores'];?></small>
                      <small>IP:<?php echo $_SESSION["member"]['loginip'];?></small>
                    </p>
                  </li>
                  <!-- Menu Footer-->
                  <li class="user-footer">
                    <div class="pull-left">
                      <a href="<?php echo U("Member/index");?>" class="btn btn-default btn-flat">修改</a>
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
              <img src="<?php echo empty($member['face'])?"/Public/images/face.png":$member['face'];?>" class="img-circle" alt="User Image" onclick="javascript:location.href='__APP__';" style="cursor: pointer;">
            </div>
            
            <div class="pull-left info">
              <p><?php echo $_SESSION["member"]['userid'];?></p>
              <a href="/Member/"><i class="fa fa-circle text-success"></i>在线</a>
            </div>
          </div>

          <!-- sidebar menu: : style can be found in sidebar.less -->
          <ul class="sidebar-menu">
            <li class="header">功能管理</li>
    
            <li class="treeview <?php if($_GET['ss'] == 1){echo "active";} ?>">
              <a href="#">
                <i class="fa  fa-cog"></i><span>个人信息</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">
                <li><a href="<?php echo U("Member/index",array("ss"=>1));?>"><i class="fa fa-circle-o"></i>信息设置</a></li>
                <li><a href="<?php echo U("Member/pwd",array("ss"=>1));?>"><i class="fa fa-circle-o"></i>更改密码</a></li>
              </ul>
            </li>

 


            <li class="treeview <?php if($_GET['ss'] == 2){echo "active";} ?>">
              <a href="#">
                <i class="fa fa-table"></i><span>内容管理</span>
                <i class="fa fa-angle-left pull-right"></i>
              </a>
              <ul class="treeview-menu">

                <?php
 $tmp = M("Channeltype")->where("issend=1")->field("id,typename")->select(); foreach ($tmp as $value) { ?>
                  <li><a href="<?php echo U("Type/article",array("channel"=>$value['id'],"ss"=>2));?>"><i class="fa fa-circle-o"></i><?php echo $value['typename'];?></a></li>
                <?php
 } ?>

                 <li><a href="<?php echo U("Shop/index",array("ss"=>2));?>"><i class="fa fa-reorder"></i>产品订单</a></li>
                <li><a href="<?php echo U("Type/feedback",array("ss"=>2));?>"><i class="fa fa-comments"></i>评论管理</a></li>
                <li><a href="<?php echo U("Member/log",array("ss"=>2));?>"><i class="fa fa-ticket"></i>积分管理</a></li>
              </ul>
            </li>



            <li><a href="<?php echo U("Member/registration");?>"><i class="fa fa-circle-o text-yellow"></i> <span>每日签到</span></a></li>
            <li><a href="<?php echo U("Member/pay");?>"><i class="fa fa-circle-o text-yellow"></i> <span>在线充值</span></a></li>
            <li><a href="javascript:void(0);" data-toggle="modal" data-target="#ryy_popu" ><i class="fa fa-circle-o text-yellow"></i> <span>我的推广二维码</span></a></li>
                             



            <li><a href="<?php echo U("Public/logout");?>"><i class="fa fa-circle-o text-red"></i> <span>退出</span></a></li>

          </ul>
        </section>
        <!-- /.sidebar -->
      </aside>




    <!--dialog-->
    <div id="ryy_popu" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body" style="text-align:center;">
          <img src="/misc/phpqrcode/index.php?url=<?php echo urlencode(C("site_url")."/Member/index.php?m=Public&a=reg&re_userid=". $_SESSION["member"]['userid']);?>" />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
    </div>           
     


      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            订单
            <small>管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">订单</a></li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">

                <form action="<?php echo U("Shop/index",array("ss"=>4));?>" method="get">
                <div class="box-header" style="padding:15px;">
                    
                     <div class="box-tools">
                        <div class="input-group" style="width: 150px;">
                          <input type="text" name="q" class="form-control input-sm pull-right" placeholder="<?php echo empty($_GET['q'])?"按订单号搜索":$_GET['q'];?>">
                          <div class="input-group-btn">
                            <button type="submit" class="btn btn-sm btn-default"><i class="fa fa-search"></i></button>
                          </div>
                        </div>
                      </div>
                </div><!-- /.box-header -->
                </form>

                <div class="box-body">
                <section id="no-more-tables">
                  <table id="example2" class="table-bordered table-striped table-condensed cf">
                    <thead class="cf">
                      <tr>
                        <th>订单号</th>
                        <th>生成日期</th>
                        <th>兑换积分</th>
                        <th>兑换水量/毫升</th>
                        <th>取水方式</th>
                        <th>状态</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                            
                            <td data-title="订单号"><?php echo ($vo["oid"]); ?></td>
                             <td data-title="生成日期">
                                <?php echo (date("Y-m-d H:i",$vo['stime'])); ?></td>
                             <td data-title="兑换积分">
                                <?php echo ($vo['score']); ?></td>
                             <td data-title="兑换水量/毫升">
                                <?php echo $vo['score']*C("cfg_milliliter");?>
                                </td>
                              <td data-title="取水方式">
                                  <?php if(($vo["state"]) == "1"): if(($vo["paytype"]) == "1"): ?><span class="badge bg-light-blue"><i class="fa fa-fw fa-qrcode"></i>二维码</span><?php endif; ?>
                                   <?php if(($vo["paytype"]) == "2"): ?><span class="badge bg-green"><i class="fa fa-fw fa-credit-card"></i>刷卡</span><?php endif; endif; ?>
                                 &nbsp;
                              </td>                              
                              <td data-title="状态">

                                  <?php if(($vo["state"]) == "1"): ?><span class="badge bg-light-blue">已取水</span><?php endif; ?>
                                 <?php if(($vo["state"]) == "0"): ?><span class="badge bg-red">未取水</span><?php endif; ?>

                              </td>
                              
                              <td data-title="操作">

                                <a href="javascript:void(0);" data-toggle="modal" data-target="#myModal<?php echo ($vo["oid"]); ?>"><i class="fa fa-fw fa-qrcode"></i></a> 

                                 <?php if(($vo["state"]) == "0"): ?>| <a href="javascript:void(0);" data-toggle="modal" data-target="#lc_confirm" onclick="lr_confirm('确定删除？','<?php echo U("Shop/delete",array("id"=>$vo['oid']));?>');"><i class="fa fa-fw fa-remove"></i></a><?php endif; ?>
                              </td>
                          </tr>

                          <?php
 $url = C('site_url').U('Public/qrcodeWater', array('oid' => $vo['oid'])); ?>
                          <!--dialog-->
                          <div id="myModal<?php echo ($vo["oid"]); ?>" class="modal fade" tabindex="-1" role="dialog">
                            <div class="modal-dialog modal-sm" role="document">
                              <div class="modal-content">
                                <div class="modal-body" style="text-align:center;">
                                  <img src="/misc/phpqrcode/index.php?url=<?php echo $url;?>" />
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                                </div>
                              </div>
                            </div>
                          </div><?php endforeach; endif; else: echo "" ;endif; ?>                    
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
        <strong>Copyright &copy; 2014-2020 <a href="http://www.lanrenmb.com"><?php echo C('copyright');?></a>.</strong> All rights reserved.
      </footer>

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




  </body>
</html>