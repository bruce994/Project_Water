<?php

/* *

 * 配置文件

 * 版本：3.3

 * 日期：2012-07-19

 * 说明：

 * 以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。

 * 该代码仅供学习和研究支付宝接口使用，只是提供一个参考。



 * 提示：如何获取安全校验码和合作身份者id

 * 1.用您的签约支付宝账号登录支付宝网站(www.alipay.com)

 * 2.点击“商家服务”(https://b.alipay.com/order/myorder.htm)

 * 3.点击“查询合作者身份(pid)”、“查询安全校验码(key)”



 * 安全校验码查看时，输入支付密码后，页面呈灰色的现象，怎么办？

 * 解决方法：

 * 1、检查浏览器配置，不让浏览器做弹框屏蔽设置

 * 2、更换浏览器或电脑，重新登录查询。

 */



//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

//合作身份者id，以2088开头的16位纯数字





//------------by wang

$dbconfig = require_once(dirname(__FILE__)."/../../../mysqlconf.php");;
require_once(dirname(__FILE__)."/../../../infoconfig.php");
include('../common.php');


$cfg['tb_pre'] = $dbconfig['DB_PREFIX'];
$cfg['db_charset'] = 'utf8';
$cfg['sqlerr'] = '1';
$cfg['errlog'] = '1';
$cfg['timediff'] = '0';
$cfg['cookie_encode'] = 'MxOSk4357K'; // cookie 加密字符
$fr_time = time();
define('FR_ROOT', str_replace("\\", '/', dirname(__FILE__)));
define('CACHE_ROOT', $cfg['cache_dir'] ? $cfg['cache_dir'] : FR_ROOT.'/cache');
define('DATA_ROOT', FR_ROOT.'/data');
include('../mysql.class.php');
$db = new db_mysql();
$db->halt = $cfg['sqlerr'];
$db->connect($dbconfig['DB_HOST'], $dbconfig['DB_USER'], $dbconfig['DB_PWD'], $dbconfig['DB_NAME'],0);


$code = "alipay";
$vo = $db->get_one("SELECT config FROM `{$cfg['tb_pre']}payment`  where  code='".$code."' ");

$config_row = AutoCharset(unserialize(utf82gb($vo['config'])));
$config_row = (array)$config_row;


//END ---------------------------------------


$alipay_config['partner']		= $config_row['alipay_partner']['value'];

//安全检验码，以数字和字母组成的32位字符
$alipay_config['key']			= $config_row['alipay_key']['value'];


// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
$alipay_config['notify_url'] = $infoconfig['site_url']."/andMember/Pay/wap/notify_url.php";

// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
$alipay_config['return_url'] = $infoconfig['site_url']."/andMember/Pay/wap/return_url.php";



//收款支付宝账号

$alipay_config['seller_id']	= $alipay_config['partner'];



//商户的私钥（后缀是.pen）文件相对路径

$alipay_config['private_key_path']	= 'key/rsa_private_key.pem';



//支付宝公钥（后缀是.pen）文件相对路径

$alipay_config['ali_public_key_path']= 'key/alipay_public_key.pem';





//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑





//签名方式 不需修改

$alipay_config['sign_type']    = strtoupper('RSA');



//字符编码格式 目前支持 gbk 或 utf-8

$alipay_config['input_charset']= strtolower('utf-8');



//ca证书路径地址，用于curl中ssl校验

//请保证cacert.pem文件在当前文件夹目录中

$alipay_config['cacert']    = getcwd().'\\cacert.pem';



//访问模式,根据自己的服务器是否支持ssl访问，若支持请选择https；若不支持请选择http

$alipay_config['transport']    = 'http';

?>