<?php if (!defined('THINK_PATH')) exit();?><!doctype html>
<html><head>
<meta charset="utf-8">
<title>用户注册_<?php echo (C("SITENAME")); ?></title>
<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
<metaname="screen-orientation"content="portrait">
<metaname="x5-orientation"content="portrait">
<link rel="stylesheet" type="text/css" href="__PUBLIC__/android/theme/css/style.css">
<script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>

</head>

<body>

<div class="top">

<ul style="margin:0px;">
<li><a href="javascript:void(0);" class="ryy_return">&lt;&nbsp;返回</a></li>
<li><a href="<?php echo U("Index/index");?>">登录账号</a></li>
<li><a href="#">...</a></li>
</ul>

</div>

<div class="center">

<div class="reget">

<form id="form1" action="<?php echo U("Public/reg");?>" method="post" class="pageForm required-validate">
<div>
<p><span>注册账号</span><i><input type="text"  class="" placeholder="请输入您的手机号码"   name="userid" id="c_tel" class="phone-blur form-control required " minlength=2  <?php if(!empty($_GET['userid'])){?>  value="<?php echo $_GET['userid']; ?>" disabled  <?php  } ?> ></i></p>
<p><span>验证码</span><i style="width:35%"><input type="text" name="code"  placeholder="请输入验证码" style="" data-url="" class="phone-yzm"></i>
  <input id="mob_b"  type="button" value="获取验证码" class="yzm phone-sub"  onclick="getcode();return;" >
  <input id="mob_r"  style="display:none;" type="button" value="秒后可以点击重发" class="yzm phone-sub"  >
</p>

<p><span>密码</span><i><input type="password" name="userpwd"  placeholder="请输入您的密码" class="password required"></i></p>
<p><span>重复密码</span><i><input type="password" name="userpwd2" placeholder="再次输入密码" class="again-password required"></i></p>
<p><span>推荐人</span><i><input type="text" name="re_userid" value="<?php echo $_GET['re_userid'];?>"   placeholder="推荐人账号"></i></p>
<!--  <p><span>身份证号</span><i><input type="text" id="cardID"  name="cardID" class="form-control number"  placeholder="身份证号"></i></p> -->
<p><span>所在地区</span><i>
<input  type="hidden" id="area"  name="areaID"  value="0"  >
<input readonly type="text" id="showAreaText"  name="showAreaText"  class="form-control required"  value=""  data-toggle="modal" data-target="#myModalcity" >
</i></p>
</div>

<input id="sub" type="button" class="phone-submit" value="注册">
<a href="<?php echo U("Index/index");?>"><input type="button" class="phone-submit" value="登录"></a>



<p class="agree"><input type="checkbox" name="pro" value="1"  ><span>我已阅读并同意<a href="javascript:void(0);" data-toggle="modal" data-target="#nt_reg">心乐水用户协议</a></span></p>

 
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
            


<img src="__PUBLIC__/android/theme/bg/png5.png">

</form>



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



</div>

<div class="clear"></div>

</div>


<!-- Bootstrap 3.3.5 -->
<link rel="stylesheet" href="__PUBLIC__/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap 3.3.5 -->
<script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>


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
    $("#mob_r").val(start+"秒,重发验证码");
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