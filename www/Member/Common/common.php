<?php
function arr2file($filename, $arr=''){

	if(is_array($arr)){

		$con = var_export($arr,true);

	} else{

		$con = $arr;

	}

	$con = "<?php\nreturn $con;\n?>";//\n!defined('IN_MP') && die();\nreturn $con;\n

	write_file($filename, $con);

}

function mkdirss($dirs,$mode=0777) {

	if(!is_dir($dirs)){

		mkdirss(dirname($dirs), $mode);

		return @mkdir($dirs, $mode);

	}

	return true;

}

function write_file($l1, $l2=''){

	$dir = dirname($l1);

	if(!is_dir($dir)){

		mkdirss($dir);

	}

	return @file_put_contents($l1, $l2);

}

function read_file($l1){

	return @file_get_contents($l1);

}

/**
     * 导出数据为excel表格
     *@param $data    一个二维数组,结构如同从数据库查出来的数组
     *@param $title   excel的第一行标题,一个数组,如果为空则没有标题
     *@param $filename 下载的文件名
     *@examlpe
     $stu = M ('User');
     $arr = $stu -> select();
     exportexcel($arr,array('id','账户','密码','昵称'),'文件名!');
 */
 function exportexcel($data=array(),$title=array(),$filename='report'){
     header("Content-type:application/octet-stream");
     header("Accept-Ranges:bytes");
     header("Content-type:application/vnd.ms-excel");
     header("Content-Disposition:attachment;filename=".$filename.".xls");
     header("Pragma: no-cache");
     header("Expires: 0");
     //导出xls 开始
     if (!empty($title)){
         foreach ($title as $k => $v) {
             $title[$k]=iconv("UTF-8", "GB2312",$v);
         }
         $title= implode("\t", $title);
         echo "$title\n";
     }
     if (!empty($data)){
         foreach($data as $key=>$val){
             foreach ($val as $ck => $cv) {
                 $data[$key][$ck]=iconv("UTF-8", "GB2312", $cv);
             }
             $data[$key]=implode("\t", $data[$key]);

         }
         echo implode("\n",$data);
     }
 }


function DeleteDir($path)
{
    if (is_dir($path) === true)
    {
        $files = array_diff(scandir($path), array('.', '..'));

        foreach ($files as $file)
        {
            DeleteDir(realpath($path) . '/' . $file);
        }

        return rmdir($path);
    }

    else if (is_file($path) === true)
    {
        return unlink($path);
    }

    return false;
}


function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
}

function httpPost($url,$params)
{
  $postData = '';
   //create name value pairs seperated by &
   foreach($params as $k => $v)
   {
      $postData .= $k . '='.$v.'&';
   }
   rtrim($postData, '&');

    $ch = curl_init();

    curl_setopt($ch,CURLOPT_URL,$url);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_POST, count($postData));
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

    $output=curl_exec($ch);

    curl_close($ch);
    return $output;

}



function fieldValue($aid,$field,$cid,$typeid){
   $relt = M("Addon".$cid)->where("aid=".$aid)->find();
   $value = $relt[$field];
   switch ($typeid) {
       case '5':
           $value = '<img src="'.$value.'" width="60" height="80">';
           break;
       default:
           break;
   }

   return $value;
}

function sms_sending($mobile,$content){
    $content=preg_replace("/\s/","",$content);
    $c1 = array("{phone}","{content}","&amp;");
    $c2 = array($mobile,$content,"&");
    $url = str_replace($c1, $c2, C('cfg_sms'));

    if(function_exists('file_get_contents'))
    {
        $file_contents = file_get_contents($url);
    }
    else
    {
        $ch = curl_init();
        $timeout = 5;
        curl_setopt ($ch, CURLOPT_URL, $url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        $file_contents = curl_exec($ch);
        curl_close($ch);
    }
    //echo $url;
    //echo $file_contents;
    //exit;
    return $file_contents;
}





/**
 *  创建一个专有订单编号
 *
 * @return    string
 */
function MakeOrders()
{
    $OrdersId = 'L-XW'.time().'WA'.mt_rand(100,999);
    return $OrdersId;
}




function GetJson($voList){
    if(empty($voList)){
        return '[{}]';
    }
    $tm = '';
    foreach ($voList as  $k=>$value) {
        $tm .= ',{';
        $tmp = '';
        foreach ($value as $key => $v) {
           // if(is_array($v)){
             //   $tmp .= ',"'.$key.'":"'.GetJson($v).'"';;
           // }else{
                $v = str_replace("\"", "\\\"", $v);
                $v=preg_replace("/\s/","",$v);
                $v=preg_replace("/\\\\\"/","\"",$v);
                $v=preg_replace("/\"/","'",$v);
                $tmp .= ',"'.$key.'":"'.$v.'"';
           // }
       }
        if(!empty($tmp)){
            $tmp = trim($tmp,',');
        }
        $tm .= $tmp.'}';
    }
    if(!empty($tm)){
        return '['.trim($tm,',').']';
    }else{
        return '';
    }
}



//递归  获取分类id下级所有分类
function getType2($id=0){
    $jg = M("Arctype");
    $voList = $jg->where("reid=".$id)->field("id")->select();
    foreach ($voList as $value) {
       $tmp = getType2($value["id"]);
       $result .=','.$value['id'].$tmp;
     }
    return $result;
}



?>
