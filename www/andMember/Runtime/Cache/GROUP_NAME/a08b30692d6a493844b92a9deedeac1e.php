<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title><?php echo (C("SITENAME")); ?></title>
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
 
<link rel="stylesheet" href="/Public/misc/swiper.min.css">
 
<style>html,body{position:relative;height:100%;}body{background:#eee;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;color:#000;margin:0;padding:0;}.swiper-container{width:100%;height:100%;}.swiper-slide{text-align:center;font-size:18px;background:#fff;display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;}</style>
</head>
<body>
 
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img src="/Public/images/A.jpg" style="width:100%;height:100%" />
        </div>
        <div class="swiper-slide">
            <img src="/Public/images/B.jpg" style="width:100%;height:100%"/>
        </div>
        <div class="swiper-slide">
            <img src="/Public/images/C.jpg" style="width:100%;height:100%"/>
        </div>
        <div class="swiper-slide">
            <a href="javascript:void(0);" onclick="guide();" style="height:100%;"><img src="/Public/images/D.jpg" style="width:100%;height:100%"/>
            </a>
        </div>
    </div>
 
<div class="swiper-pagination"></div>
</div>
 
<script src="/Public/misc/swiper.min.js"></script>
 
<script>
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    </script>

      <script src="__PUBLIC__/plugins/jQuery/jQuery-2.1.4.min.js"></script>
<!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="__PUBLIC__/bootstrap/css/bootstrap.min.css">
<!-- Bootstrap 3.3.5 -->
    <script src="__PUBLIC__/bootstrap/js/bootstrap.min.js"></script>


<script>
function guide(){
    window.localStorage.setItem("guide", "1");
    location.href = "<?php echo U("Index/index");?>";    
}

</script>



</body>
</html>