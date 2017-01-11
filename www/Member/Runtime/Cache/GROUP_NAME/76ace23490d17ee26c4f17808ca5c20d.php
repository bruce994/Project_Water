<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>用户注册_<?php echo (C("SITENAME")); ?></title>
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
    <!-- iCheck -->
    <link rel="stylesheet" href="__PUBLIC__/plugins/iCheck/square/blue.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="__PUBLIC__/misc/html5shiv.min.js"></script>
        <script src="__PUBLIC__/misc/respond.min.js"></script>
    <![endif]-->
   <!-- jQuery 2.1.4 -->
    <script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
 </head> 
  <body class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <b>注册</b>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg"><?php echo (C("SITENAME")); ?></p>

        <form id="form1" action="<?php echo U("Public/reg");?>" method="post" class="pageForm required-validate">
          <div class="form-group has-feedback">
              <input type="text" name="userid" id="c_tel" class="form-control required " minlength=2  placeholder="手机号" <?php if(!empty($_GET['userid'])){?>  value="<?php echo $_GET['userid']; ?>" disabled  <?php  } ?>  >
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          
          
          <div class="form-group has-feedback">
              <input type="text" name="code" class="form-control " placeholder="输入手机验证码" style="width:60%;float:left;">
              <span id="mob_b"><a  class="btn btn-primary btn-block btn-flat" style="width:40%;float:left;text-align:left;" onclick="getcode();return;">点击获取验证码</a></span>
              <span id="mob_r" style="display:none;"><a id="Time"  class="btn btn-primary btn-block btn-flat" style="width:40%;float:left;text-align:left;" >秒后可以点击重发</a></span>
              <div style="clear:both;"></div>
          </div>


          <div class="form-group has-feedback">
              <input type="password" name="userpwd" class="form-control required" placeholder="密码">
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" name="userpwd2" class="form-control required" placeholder="重复密码">
            <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
          </div>


         <div class="form-group has-feedback">
            <input type="text" name="re_userid" value="<?php echo $_GET['re_userid'];?>"   class="form-control " placeholder="推荐人">
            <span class="glyphicon glyphicon-user form-control-feedback"></span>
          </div>

          <!--
         <div class="form-group">
              <label>身份证号</label> 
              <input type="text" id="cardID"  name="cardID"  class="form-control"  value=""   >

          </div>
            -->


          <div class="form-group">
              <label>所在地区</label> 
              <input  type="hidden" id="area"  name="areaID"  value="0"  >
              <input readonly type="text" id="showAreaText"  name="showAreaText"  class="form-control required"  value=""  data-toggle="modal" data-target="#myModalcity" >

          </div>


          <!--area-->
          <div id="myModalcity" class="modal fade" tabindex="-1" role="dialog">
              <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content">
                      <div class="modal-body" style="text-align:center;">
                          <div class="row">
                              <div class="col-md-12" id="ryynetArea">

                              </div>
                          </div>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                          <button type="button" class="btn btn-primary" onclick="checked_city()">确定</button>
                      </div>
                  </div>
              </div>
          </div>


          <?php
 $fileContent = F('nativeplace'); if(empty($fileContent)){ $enum = M("Sys_enum")->where("egroup='nativeplace'")->order("disorder")->select(); $fileContent = '<script>em_nativeplace=new Array();'; $i = 0 ; foreach ($enum as $enumValue) { $fileContent .= "em_nativeplace[".$i."] = new Array('".$enumValue['id']."','".$enumValue['reid']."','".$enumValue['topid']."','".$enumValue['ename']."','".$enumValue['disorder']."');"; $i++; } $fileContent .= '</script>'; F('nativeplace',$fileContent); } echo $fileContent; ?>

          <script type="text/javascript">
var rank = 1;

$( document ).ready(function() {
        showArea(0,"ryynetArea",rank);
        });

function showArea(reid,ement,rank1){

    if(reid == 0){
        for(i=0;i < em_nativeplace.length;i++){
            if(em_nativeplace[i][1] == "0" && em_nativeplace[i][2] == "0"){
                reid = em_nativeplace[i][0];
            }
        }
    }


    for(i=rank;i > rank1;i--){
        $("#area_"+i).remove();
    }


    tmp = "<select id='area_"+rank+"'  style='margin:8px 0px;' class='form-control' name='nativeplace' id='nativeplace' onchange=\"showArea(this.value,'ryynetArea',"+rank+")\"><option value='-1'>请选择</option>";
    j = 0;
    for(i=0;i < em_nativeplace.length;i++){
        if(em_nativeplace[i][1] == reid){
            ss = '';
            // if(nat1 !=""){
            //   if(i==nat1){
            //     ss = "selected";  
            //   } 
            // }
            tmp += "<option value='"+em_nativeplace[i][0]+"' "+ss+">"+em_nativeplace[i][3]+"</option>";
            j++;
        }
    }
    tmp += "</select>";

    if(j>0)
    {
        rank++;
        $("#"+ement).append(tmp);
    }  

}


function checked_city(){
    tmp = '';
    $("#ryynetArea select option:selected").each(function() {
            if($( this ).val() > 1) {
            tmp += $( this ).text(); 
            $("#area").val($( this ).val()); //保存最后选择地区
            }
            });    
    $("#showAreaText").val(tmp);
    $('#myModalcity').modal('hide');

    if(tmp == ''){
        $("#area").val(0);
    }

}

          </script>  
          <!--END area-->
















          <div class="row">
            <div class="col-xs-8">
              <div class="checkbox icheck">
                <label class="">
                  <div class="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style="position: relative;"><input type="checkbox" name="pro" value="1" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"><ins class="iCheck-helper" style="position: absolute; top: -20%; left: -20%; display: block; width: 140%; height: 140%; margin: 0px; padding: 0px; border: 0px; opacity: 0; background: rgb(255, 255, 255);"></ins></div>是否同意<a href="javascript:void(0);" data-toggle="modal" data-target="#nt_reg">心乐水协议</a>
                </label>
              </div>


 
              <div id="nt_reg" class="modal modal-info">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title">心乐水协议</h4>
                      </div>
                      <div class="modal-body">
                        <?php echo C("site_protocol");?>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">关闭</button>
                      </div>
                    </div><!-- /.modal-content -->
                  </div><!-- /.modal-dialog -->
                </div> 
            







            </div><!-- /.col -->
          </div>


        <!--
        <div class="social-auth-links text-center">
          <p>- OR -</p>
          <a href="<?php echo U("Index/index");?>"><button class="btn btn-block btn-warning">登录</button></a>
        </div>
        -->
        <div class="social-auth-links text-center">
            <button id="sub" class="btn btn-block btn-warning">注册</button>
        </div>

        </form>

      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

      <!-- Bootstrap 3.3.5 -->
    <script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>
    <!-- iCheck -->
    <script src="__PUBLIC__/plugins/iCheck/icheck.min.js"></script>
    <script>
      $(function () {
        $('input').iCheck({
          checkboxClass: 'icheckbox_square-blue',
          radioClass: 'iradio_square-blue',
          increaseArea: '20%' // optional
        });
      });
    </script>


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




<script type="text/javascript">
  
var start = 0;
function getcode(){

    start = 180;
    var patrn=/^[0-9]{11}$/; 
    var c_tel = $("#c_tel").val();
    if (!patrn.exec(c_tel)){
        alert('手机号码不正确!');
        return;
    }
 
  var send = {};
  send.tel = c_tel;
  
    $.post('<?php echo U("Public/sendcode");?>',send,function(data) {
    alert(data.message);  
        if(data.error == 1) {
       clearInterval(inter); //由于是异步的
       $("#mob_r").hide();
       $("#mob_b").show();
           return;
        }
      }
    );

    inter = setInterval("showTine()",1000);
    $("#mob_r").show();
    $("#mob_b").hide();
}

var step = -1;
var cf = false;
var inter;
function showTine(){
    cf = true;
    document.getElementById("Time").innerHTML = start+"秒,重发验证码";
    start += step;
    if(start < 0){
        clearInterval(inter);
        cf = false;
        $("#mob_r").hide();
        $("#mob_b").show();
    }
}
</script>






  </body>
</html>