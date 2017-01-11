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
            文章管理
            <small>文章</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="__APP__"><i class="fa fa-dashboard"></i> 首页</a></li>
            <li><a href="#">文章</a></li>
            <li class="active">编辑</li>
          </ol>
        </section>

 <!-- Main content -->
        <section class="content">
          <div class="row">
            <!-- left column -->
            <div class="col-md-12">
              <!-- general form elements -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title"><?php echo ($vo["title"]); ?></h3>
                </div><!-- /.box-header -->
                <!-- form start -->
                <form role="form" method="post" id="form1" action="<?php echo U("Type/article_update");?>" class="pageForm required-validate">
                  <input type="hidden" name="id" value="<?php echo ($vo["id"]); ?>" >
                  <input type="hidden" name="aid" value="<?php echo ($vo["id"]); ?>" >
                  <input type="hidden" name="channel" value="<?php echo ($vo["channel"]); ?>" >
                  <div class="box-body">

                    <div class="form-group">
                      <label>文档主栏目</label>
                      <select name="typeid" class="form-control required number">
                      <?php
 echo getJG(0,0,"",$vo['typeid'],$vo['channel']); ?>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>标题</label>
                      <input type="text" name="title"  class="form-control required"  value="<?php echo ($vo["title"]); ?>">
                  </div>

                  <div class="form-group">
                      <label>自定义属性</label>
                      <!--
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="h" <?php if(strstr($vo['flag'], 'h')){echo 'checked="checked"';} ?> >
                              头条[h] 
                          </label>
                      </div>
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="c" <?php if(strstr($vo['flag'], 'c')){echo 'checked="checked"';} ?>  >
                              推荐[c] 
                          </label>
                      </div>  
                      -->

                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="h" <?php if(strstr($vo['flag'], 'h')){echo 'checked="checked"';} ?>  >
                              置顶 
                          </label>
                      </div>  

                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t1" <?php if(strstr($vo['flag'], 't1')){echo 'checked="checked"';} ?>  >
                               首页大图一
                          </label>
                      </div>          
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t2" <?php if(strstr($vo['flag'], 't2')){echo 'checked="checked"';} ?>  >
                              首页大图二
                          </label>
                      </div>                
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t3" <?php if(strstr($vo['flag'], 't3')){echo 'checked="checked"';} ?>  >
                              首页大图三
                          </label>
                      </div>                       <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t4" <?php if(strstr($vo['flag'], 't4')){echo 'checked="checked"';} ?>  >
                              首页大图四
                          </label>
                      </div>                   
                      <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t5" <?php if(strstr($vo['flag'], 't5')){echo 'checked="checked"';} ?>  >
                              首页大图五
                          </label>
                  </div>  <div class="checkbox">
                          <label>
                              <input type="checkbox" name="flag[]" value="t6" <?php if(strstr($vo['flag'], 't6')){echo 'checked="checked"';} ?>  >
                              首页大图六
                          </label>
                  </div>                 </div>

                   
                  <div class="form-group">
                      <label>缩略图</label>
                      <div class="input-group">
                          <input type="text" id="litpic" name="litpic" class="form-control" value="<?php echo ($vo["litpic"]); ?>">
                          <span class="input-group-addon"><a href="javascript:void();" onclick="upyunPicUpload('litpic')"><i class="fa fa-fw fa-upload"></i>点击上传</a></span>
                          <span class="input-group-addon"><a href="javascript:void();" onclick="viewImg('litpic')"><i class="fa fa-fw fa-share"></i>预览</a></span>
                      </div>
                  </div>   


                  <div class="form-group">
                    <label>内容摘要</label>
                    <textarea name="description" class="form-control" style="height:80px;"><?php echo ($vo["description"]); ?></textarea>
                  </div>

                 <!-- Date range -->
                  <div class="form-group">
                    <label>更新时间</label>
                    <div class="input-group">
                      <div class="input-group-addon">
                        <i class="fa fa-calendar"></i>
                      </div>
                      <input type="text" class="form-control pull-right" id="reservationtime" name="pubdate" value="<?php echo date("Y-m-d H:i:s",$vo['pubdate']); ?>">
                    </div><!-- /.input group -->
                  </div><!-- /.form group -->


                  <div class="form-group">
                    <label>点击数</label>
                    <input type="text" name="click"  class="form-control required"  value="<?php echo ($vo["click"]); ?>">
                  </div>

                  <div class="form-group">
                    <label>状态</label>
                    <select name="arcrank" class="form-control">
                        <option value="0" <?php if(($vo["arcrank"]) == "0"): ?>selected<?php endif; ?> >已审</option>
                        <option value="-1" <?php if(($vo["arcrank"]) == "-1"): ?>selected<?php endif; ?> >待审</option>
                    </select>
                  </div>                  

                  <?php
 $channelfield = M("Channelfield")->where("chid=".$vo['channel'])->order("sort")->select(); foreach ($channelfield as $v) { ?>
                    <div class="form-group">
                      <label><?php echo $v['title'];?></label>

                      <?php if($v['typeid'] == "0" || $v['typeid'] == "1" || $v['typeid'] == "3" || $v['typeid'] == "4" ){ ?>
                        <input type="text" name="<?php echo $v['fieldname'];?>"  class="form-control <?php if($v['check_empty']){echo "required";} ?>"  value="<?php echo $addon[$v['fieldname']];?>">
                      <?php }elseif ($v['typeid'] == "2" ) { ?>
                          <textarea id="<?php echo $v['fieldname'];?>" name="<?php echo $v['fieldname'];?>"><?php echo $addon[$v['fieldname']];?></textarea>
                            <script src="__PUBLIC__/misc/ckeditor/ckeditor.js"></script>
                            <link rel="stylesheet" href="__PUBLIC__/misc/ckeditor/samples/toolbarconfigurator/lib/codemirror/neo.css">
                              <script>
                                $(function () {
                                  // Replace the <textarea id="editor1"> with a CKEditor
                                  // instance, using default configuration.
                                  CKEDITOR.replace( '<?php echo $v['fieldname'];?>', {
                                      filebrowserUploadUrl: '/Admin/index.php?m=Upyun&a=upload&from=Wap',
                                       allowedContent: true,
                                       fillEmptyBlocks:false,
                                       basicEntities:false,
                                       extraPlugins: 'colorbutton,font,justify'
                                  });
                                });
                              </script>  
                      <?php }elseif ($v['typeid'] == "5" ) { ?>
                              <div class="input-group">
                                <input type="text" id="<?php echo $v['fieldname'];?>" name="<?php echo $v['fieldname'];?>" value="<?php echo $addon[$v['fieldname']];?>" class="form-control">
                                <span class="input-group-addon"><a href="javascript:void();" onclick="upyunPicUpload('<?php echo $v['fieldname'];?>')"><i class="fa fa-fw fa-upload"></i>点击上传</a></span>
                              </div>
                      <?php }elseif ($v['typeid'] == "6" ) { $tmp1 = ''; $tmps = explode(',', $v['fielddefault']); foreach ($tmps as $tm) { $tmp2 = ''; if($tm == $addon[$v['fieldname']]){ $tmp2 = 'selected'; } $tmp1.= '<option value="'.$tm.'" '.$tmp2.'>'.$tm.'</option>'; } ?>
                              <select name="<?php echo $v['fieldname'];?>" class="form-control">
                                  <?php echo $tmp1;?>
                              </select>
                      <?php }elseif ($v['typeid'] == "7" ) { echo '<br/>'; $tmp1 = ''; $tmps = explode(',', $v['fielddefault']); foreach ($tmps as $tm) { $tmp2 = ''; if($tm == $addon[$v['fieldname']]){ $tmp2 = 'checked="checked"'; } ?>
                         <label>
                         <input class="minimal-red" type="radio" value = "<?php echo $tm;?>" name="<?php echo $v['fieldname'];?>" <?php echo $tmp2;?> > <?php echo $tm;?>
                          </label>
                       <?php } ?>
                      <?php }elseif ($v['typeid'] == "8" ) { echo '<br/>'; $tmp1 = ''; $tmps = explode(',', $v['fielddefault']); $tmp3 = explode(',', $addon[$v['fieldname']]); foreach ($tmps as $tm) { $tmp2 = ''; if(in_array($tm, $tmp3)){ $tmp2 = 'checked'; } ?>
                         <label>
                         <input class="minimal-red" type="checkbox" value = "<?php echo $tm;?>" name="<?php echo $v['fieldname'];?>[]" <?php echo $tmp2;?> > <?php echo $tm;?>
                          </label>
                       <?php } ?>
                       <?php }elseif ($v['typeid'] == "9" ) { ?>
                              <div class="input-group">
                                <div class="input-group-addon">
                                  <i class="fa fa-calendar"></i>
                                </div>
                                <input type="text" class="form-control pull-right" id="<?php echo $v['fieldname'];?>" name="<?php echo $v['fieldname'];?>" value="<?php echo $addon[$v['fieldname']];?>">
                              </div><!-- /.input group -->
                                <script>
                                  $(function () {
                                    //Date range picker with time picker
                                    $('#<?php echo $v['fieldname'];?>').daterangepicker({singleDatePicker: true, timePickerIncrement: 1,timePicker: true,timePicker12Hour:false, format: 'YYYY-MM-DD hh:mm'});
                                  });
                                </script>                              
                      <?php } ?>

                    </div>                    
                  <?php  } ?> 

                  </div><!-- /.box-body -->
                  <div class="box-footer">
                    <button  id="sub" class="btn btn-primary">提交</button>
                  </div>
                </form>
              </div><!-- /.box -->
         
            </div><!--/.col (left) -->

          </div>   <!-- /.row -->
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

  <!-- date-range-picker -->
  <script src="__PUBLIC__/misc/moment.min.js"></script>
  <script src="__PUBLIC__/plugins/daterangepicker/daterangepicker.js"></script>
  <!-- daterange picker -->
  <link rel="stylesheet" href="__PUBLIC__/plugins/daterangepicker/daterangepicker-bs3.css">
    <script>
      $(function () {
        //Date range picker with time picker
        $('#reservationtime').daterangepicker({singleDatePicker: true, timePickerIncrement: 1,timePicker: true,timePicker12Hour:false, format: 'YYYY-MM-DD hh:mm'});
      });
    </script>


<script src="__PUBLIC__/static/artDialog/jquery.artDialog.js?skin=default"></script>
<script src="__PUBLIC__/static/artDialog/plugins/iframeTools.js"></script>
<script src="__PUBLIC__/static/upyun.js?2013"></script>     


  </body>
</html>