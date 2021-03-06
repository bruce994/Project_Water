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
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            会员
            <small>管理</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">会员</a></li>
          </ol>
        </section>

        <!-- Main content -->
        <section class="content">
          <div class="row">
            <div class="col-xs-12">
              <div class="box">


                <form action="<?php echo U("Member/index",array("ss"=>2));?>" method="get">
                    <div class="box-header">

                        <div class="form-group">
                            <label> 用户名:  </label>
                            <input type="text" class="form-control" name="userid" value="<?php echo $_GET['userid']; ?>">
                        </div>


                        <div class="form-group">
                            <label> 邮箱:  </label>
                            <input type="text" class="form-control" name="email" value="<?php echo $_GET['email']; ?>">
                        </div>


                        <div class="form-group">
                            <label> 手机号:  </label>
                            <input type="text" class="form-control" name="tel" value="<?php echo $_GET['tel']; ?>">
                        </div>


                        <div class="form-group">
                            <label> 地址:  </label>
                            <input type="text" class="form-control" name="address" value="<?php echo $_GET['address']; ?>">
                        </div>


                        <div style="float:left;margin:0 8px;">
                            <input type="submit" value="搜索" class="btn btn-info pull-right btn-sm">
                        </div>

                        <div style="float:left;margin:0 8px;">
                            <a href="<?php echo U("Member/add",array("ss"=>2));?>" class="btn btn-block btn-default btn-sm"><i class="fa fa-fw fa-plus"></i>添加</a>
                        </div>
                        <div style="float:left;">
                            <a href="#" id="ids0" class="btn btn-block btn-default btn-sm" onclick="action('delete&id=','ids0');"> <i class="fa fa-fw fa-remove"></i>
                                删 除
                            </a>
                        </div>

                    </div><!-- /.box-header -->
        </form>


                <div class="box-body">
                  <table id="example2" class="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>选择<input type="checkbox" onclick="addids_all()" ></th>
                        <th>登录名</th>
                        <th>邮箱</th>
                        <th>注册时间</th>
                        <th>最近登录时间</th>
                        <th>最近登录IP</th>
                        <th>所在地区</th>
                        <th>状态</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                    <tbody>
                        <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                            <td>
                              <input name="id" value="<?php echo ($vo['mid']); ?>" type="checkbox" onclick="addids(this)"></td>
                          <td><a href="/Member/index.php?m=Public&a=directLogin&mid=<?php echo ($vo["mid"]); ?>&pwd=<?php echo ($vo["pwd"]); ?>" target="_blank"><?php echo ($vo['userid']); ?></a></td>
                             <td><?php echo ($vo['email']); ?></td>
                             <td>
                                <?php echo (date("Y-m-d H:i",$vo['jointime'])); ?></td>
                             <td>
                                <?php echo (date("Y-m-d H:i",$vo['logintime'])); ?></td>
                              <td>
                                 <?php echo ($vo['loginip']); ?>
                              </td>                              
                              <td>
                                  <?php echo getEnum22($vo['areaID']);?>   
                              </td>
                              <td>
                                 <?php if(($vo["status"]) == "1"): ?><span class="pull-left badge bg-green">启用</span><?php endif; ?>
                                 <?php if(($vo["status"]) == "0"): ?><span class="pull-left badge bg-red">禁用</span><?php endif; ?>
                              </td>
                              <td>
                                <a title="编辑" href="<?php echo U("Member/edit",array("id"=>$vo['mid'],"ss"=>2));?>"><i class="fa fa-fw fa-edit"></i></a> | <a data-toggle="modal" data-target="#lc_confirm" onclick="lr_confirm('确定删除？','<?php echo U("Member/delete",array("id"=>$vo['mid']));?>');" onclick="return window.confirm('确定删除？');" title="删除"><i class="fa fa-fw fa-remove"></i></a>
                              </td>
                          </tr><?php endforeach; endif; else: echo "" ;endif; ?>                    
                    </tbody>
                  
                  </table>
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











     
    </div><!-- ./wrapper -->


      <script type="text/javascript">
        var ids = "";
        function addids(bb){
            if($(bb).is(':checked')){
              ids+=","+$(bb).val(); 
            }else{
               ids = ids.replace(","+$(bb).val(),""); 
            }
            //console.log(ids);
        }
        var is_all = true;
        function addids_all(){
          if(is_all){
            $("input[name='id']").attr("checked","true"); 
            is_all = false;

            $("input[name='id']:checkbox:checked").each(function(){ 
              ids+=","+$(this).val(); 
            });
          }else{
            $("input[name='id']").removeAttr("checked");
            is_all = true;
            ids = "";
          }
        }
        
        function action(aa,bb){
          if(ids == ""){
            alert("请选择"); return;
          }
          if(ids !==""){
            ids = ids.substring(1);
          }          
          tmp = "index.php?m=Member&a="+aa;          
          $("#"+bb).attr("href",tmp+ids);
        }
      </script>



  </body>
</html>