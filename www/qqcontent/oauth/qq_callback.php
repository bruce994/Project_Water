<?php
require_once("../comm/config.php");
require_once("../comm/utils.php");

function qq_callback()
{
    //debug
    //print_r($_REQUEST);
    //print_r($_SESSION);

    if($_REQUEST['state'] == $_SESSION['state']) //csrf
    {
        $token_url = "https://graph.qq.com/oauth2.0/token?grant_type=authorization_code&"
            . "client_id=" . $_SESSION["appid"]. "&redirect_uri=" . urlencode($_SESSION["callback"])
            . "&client_secret=" . $_SESSION["appkey"]. "&code=" . $_REQUEST["code"];

        $response = get_url_contents($token_url);

        if (strpos($response, "callback") !== false)
        {
            $lpos = strpos($response, "(");
            $rpos = strrpos($response, ")");
            $response  = substr($response, $lpos + 1, $rpos - $lpos -1);
            $msg = json_decode($response);
            if (isset($msg->error))
            {
                echo "<h3>error:</h3>" . $msg->error;
                echo "<h3>msg  :</h3>" . $msg->error_description;
                exit;
            }
        }

        $params = array();
        parse_str($response, $params);

        //debug
        //print_r($params);

        //set access token to session
        $_SESSION["access_token"] = $params["access_token"];

    }
    else
    {
        echo("The state does not match. You may be a victim of CSRF.");
    }
}

function get_openid()
{
    $graph_url = "https://graph.qq.com/oauth2.0/me?access_token="
        . $_SESSION['access_token'];

    $str  = get_url_contents($graph_url);

    if (strpos($str, "callback") !== false)
    {
        $lpos = strpos($str, "(");
        $rpos = strrpos($str, ")");
        $str  = substr($str, $lpos + 1, $rpos - $lpos -1);
    }

    $user = json_decode($str);
    if (isset($user->error))
    {
        echo "<h3>error:</h3>" . $user->error;
        echo "<h3>msg  :</h3>" . $user->error_description;
        exit;
    }
    //debug
    //echo("Hello " . $user->openid);

    //set openid to session
    $_SESSION["openid"] = $user->openid;
}


function get_user_info()
{
    $get_user_info = "https://graph.qq.com/user/get_user_info?"
        . "access_token=" . $_SESSION['access_token']
        . "&oauth_consumer_key=" . $_SESSION["appid"]
        . "&openid=" . $_SESSION["openid"]
        . "&format=json";

    $info = get_url_contents($get_user_info);
    $arr = json_decode($info, true);

    return $arr;
}

//QQ登录成功后的回调地址,主要保存access token
qq_callback();

//获取用户标示id
get_openid();


//wang by
//获取用户基本资料
$arr = get_user_info();
$qqname = $arr["nickname"];

//var_dump($arr);exit;


$dbconfig = require_once dirname(__FILE__).'/../../mysqlconf.php';
$cfg['tb_pre'] = $dbconfig['DB_PREFIX'];
$cfg['db_charset'] = 'utf8';
$cfg['sqlerr'] = '1';
$cfg['errlog'] = '1';
$cfg['timediff'] = '0';
$fr_time = time();
define('FR_ROOT', str_replace("\\", '/', dirname(__FILE__)));
define('CACHE_ROOT', $cfg['cache_dir'] ? $cfg['cache_dir'] : FR_ROOT.'/cache');
define('DATA_ROOT', FR_ROOT.'/data');
include('../../Public/mysql.class.php');
$db = new db_mysql();
$db->halt = $cfg['sqlerr'];
$db->connect($dbconfig['DB_HOST'], $dbconfig['DB_USER'], $dbconfig['DB_PWD'], $dbconfig['DB_NAME'],0);


$rs = $db->get_one("select mid,userid,pwd from {$cfg['tb_pre']}member where userid = '".$qqname."' ");
if($rs['mid']){


    header('Location: /Member/index.php?m=Public&a=msgJump&msg=登陆成功，绑定后继续操作!&jump=/Member/index.php?m=Public&a=directLogin&mid='.$rs['mid'].'&pwd='.$rs['pwd']);
    exit;

}else{
    header('Location: /Member/index.php?m=Public&a=msgJump&msg=登陆成功，绑定后继续操作!&jump=/Member/index.php/Public/reg/userid/'.urlencode($qqname).'.html');
    exit;
}
//END wang



//print_r($_SESSION);
//echo "<script>window.close();</script>";
?>
