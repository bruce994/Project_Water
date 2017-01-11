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



/**
 *  中文截取2，单字节截取模式
 *
 * @access    public
 * @param     string  $str  需要截取的字符串
 * @param     int  $slen  截取的长度
 * @param     int  $startdd  开始标记处
 * @return    string
 */

    function cn_substr($str, $slen, $startdd=0,$soft_lang='utf-8')
    {
        if($soft_lang=='utf-8')
        {
            return cn_substr_utf8($str, $slen, $startdd);
        }
        $restr = '';
        $c = '';
        $str_len = strlen($str);
        if($str_len < $startdd+1)
        {
            return '';
        }
        if($str_len < $startdd + $slen || $slen==0)
        {
            $slen = $str_len - $startdd;
        }
        $enddd = $startdd + $slen - 1;
        for($i=0;$i<$str_len;$i++)
        {
            if($startdd==0)
            {
                $restr .= $c;
            }
            else if($i > $startdd)
            {
                $restr .= $c;
            }

            if(ord($str[$i])>0x80)
            {
                if($str_len>$i+1)
                {
                    $c = $str[$i].$str[$i+1];
                }
                $i++;
            }
            else
            {
                $c = $str[$i];
            }

            if($i >= $enddd)
            {
                if(strlen($restr)+strlen($c)>$slen)
                {
                    break;
                }
                else
                {
                    $restr .= $c;
                    break;
                }
            }
        }
        return $restr;
    }






$UC2GBTABLE = $CODETABLE = $BIG5_DATA = $GB_DATA = '';
$GbkUniDic = null;

/**
 *  UTF-8 转GB编码
 *
 * @access    public
 * @param     string  $utfstr  需要转换的字符串
 * @return    string
 */
if ( ! function_exists('utf82gb'))
{
    function utf82gb($utfstr)
    {
        if(function_exists('iconv'))
        {
            return iconv('utf-8','gbk//ignore',$utfstr);
        }
        global $UC2GBTABLE;
        $okstr = "";
        if(trim($utfstr)=="")
        {
            return $utfstr;
        }
        if(empty($UC2GBTABLE))
        {
            $filename = DEDEINC."/data/gb2312-utf8.dat";
            $fp = fopen($filename,"r");
            while($l = fgets($fp,15))
            {
                $UC2GBTABLE[hexdec(substr($l, 7, 6))] = hexdec(substr($l, 0, 6));
            }
            fclose($fp);
        }
        $okstr = "";
        $ulen = strlen($utfstr);
        for($i=0;$i<$ulen;$i++)
        {
            $c = $utfstr[$i];
            $cb = decbin(ord($utfstr[$i]));
            if(strlen($cb)==8)
            {
                $csize = strpos(decbin(ord($cb)),"0");
                for($j=0;$j < $csize;$j++)
                {
                    $i++; $c .= $utfstr[$i];
                }
                $c = utf82u($c);
                if(isset($UC2GBTABLE[$c]))
                {
                    $c = dechex($UC2GBTABLE[$c]+0x8080);
                    $okstr .= chr(hexdec($c[0].$c[1])).chr(hexdec($c[2].$c[3]));
                }
                else
                {
                    $okstr .= "&#".$c.";";
                }
            }
            else
            {
                $okstr .= $c;
            }
        }
        $okstr = trim($okstr);
        return $okstr;
    }
}

/**
 *  GB转UTF-8编码
 *
 * @access    public
 * @param     string  $gbstr  gbk的字符串
 * @return    string
 */
if ( ! function_exists('gb2utf8'))
{
    function gb2utf8($gbstr)
    {
        if(function_exists('iconv'))
        {
            return iconv('gbk','utf-8//ignore',$gbstr);
        }
        global $CODETABLE;
        if(trim($gbstr)=="")
        {
            return $gbstr;
        }
        if(empty($CODETABLE))
        {
            $filename = DEDEINC."/data/gb2312-utf8.dat";
            $fp = fopen($filename,"r");
            while ($l = fgets($fp,15))
            {
                $CODETABLE[hexdec(substr($l, 0, 6))] = substr($l, 7, 6);
            }
            fclose($fp);
        }
        $ret = "";
        $utf8 = "";
        while ($gbstr != '')
        {
            if (ord(substr($gbstr, 0, 1)) > 0x80)
            {
                $thisW = substr($gbstr, 0, 2);
                $gbstr = substr($gbstr, 2, strlen($gbstr));
                $utf8 = "";
                @$utf8 = u2utf8(hexdec($CODETABLE[hexdec(bin2hex($thisW)) - 0x8080]));
                if($utf8!="")
                {
                    for ($i = 0;$i < strlen($utf8);$i += 3)
                    $ret .= chr(substr($utf8, $i, 3));
                }
            }
            else
            {
                $ret .= substr($gbstr, 0, 1);
                $gbstr = substr($gbstr, 1, strlen($gbstr));
            }
        }
        return $ret;
    }
}

/**
 *  Unicode转utf8
 *
 * @access    public
 * @param     string  $c  Unicode的字符串内容
 * @return    string
 */
if ( ! function_exists('u2utf8'))
{
    function u2utf8($c)
    {
        for ($i = 0;$i < count($c);$i++)
        {
            $str = "";
        }
        if ($c < 0x80)
        {
            $str .= $c;
        }
        else if ($c < 0x800)
        {
            $str .= (0xC0 | $c >> 6);
            $str .= (0x80 | $c & 0x3F);
        }
        else if ($c < 0x10000)
        {
            $str .= (0xE0 | $c >> 12);
            $str .= (0x80 | $c >> 6 & 0x3F);
            $str .= (0x80 | $c & 0x3F);
        }
        else if ($c < 0x200000)
        {
            $str .= (0xF0 | $c >> 18);
            $str .= (0x80 | $c >> 12 & 0x3F);
            $str .= (0x80 | $c >> 6 & 0x3F);
            $str .= (0x80 | $c & 0x3F);
        }
        return $str;
    }
}

/**
 *  utf8转Unicode
 *
 * @access    public
 * @param     string  $c  UTF-8的字符串信息
 * @return    string
 */
if ( ! function_exists('utf82u'))
{
    function utf82u($c)
    {
        switch(strlen($c))
        {
            case 1:
                return ord($c);
            case 2:
                $n = (ord($c[0]) & 0x3f) << 6;
                $n += ord($c[1]) & 0x3f;
                return $n;
            case 3:
                $n = (ord($c[0]) & 0x1f) << 12;
                $n += (ord($c[1]) & 0x3f) << 6;
                $n += ord($c[2]) & 0x3f;
                return $n;
            case 4:
                $n = (ord($c[0]) & 0x0f) << 18;
                $n += (ord($c[1]) & 0x3f) << 12;
                $n += (ord($c[2]) & 0x3f) << 6;
                $n += ord($c[3]) & 0x3f;
                return $n;
        }
    }
}

/**
 *  Big5码转换成GB码
 *
 * @access    public
 * @param     string   $Text  字符串内容
 * @return    string
 */
if ( ! function_exists('big52gb'))
{
    function big52gb($Text)
    {
        if(function_exists('iconv'))
        {
            return iconv('big5','gbk//ignore',$Text);
        }
        global $BIG5_DATA;
        if(empty($BIG5_DATA))
        {
            $filename = DEDEINC."/data/big5-gb.dat";
            $fp = fopen($filename, "rb");
            $BIG5_DATA = fread($fp,filesize($filename));
            fclose($fp);
        }
        $max = strlen($Text)-1;
        for($i=0;$i<$max;$i++)
        {
            $h = ord($Text[$i]);
            if($h>=0x80)
            {
                $l = ord($Text[$i+1]);
                if($h==161 && $l==64)
                {
                    $gbstr = "　";
                }
                else
                {
                    $p = ($h-160)*510+($l-1)*2;
                    $gbstr = $BIG5_DATA[$p].$BIG5_DATA[$p+1];
                }
                $Text[$i] = $gbstr[0];
                $Text[$i+1] = $gbstr[1];
                $i++;
            }
        }
        return $Text;
    }
}

/**
 *  GB码转换成Big5码
 *
 * @access    public
 * @param     string  $Text 字符串内容
 * @return    string
 */
if ( ! function_exists('gb2big5'))
{
    function gb2big5($Text)
    {
        if(function_exists('iconv'))
        {
            return iconv('gbk','big5//ignore',$Text);
        }
        global $GB_DATA;
        if(empty($GB_DATA))
        {
            $filename = DEDEINC."/data/gb-big5.dat";
            $fp = fopen($filename, "rb");
            $gb = fread($fp,filesize($filename));
            fclose($fp);
        }
        $max = strlen($Text)-1;
        for($i=0;$i<$max;$i++)
        {
            $h = ord($Text[$i]);
            if($h>=0x80)
            {
                $l = ord($Text[$i+1]);
                if($h==161 && $l==64)
                {
                    $big = "　";
                }
                else
                {
                    $p = ($h-160)*510+($l-1)*2;
                    $big = $GB_DATA[$p].$GB_DATA[$p+1];
                }
                $Text[$i] = $big[0];
                $Text[$i+1] = $big[1];
                $i++;
            }
        }
        return $Text;
    }
}

/**
 *  unicode url编码转gbk编码函数
 *
 * @access    public
 * @param     string  $str  转换的内容
 * @return    string
 */
if ( ! function_exists('UnicodeUrl2Gbk'))
{
    function UnicodeUrl2Gbk($str)
    {
        //载入对照词典
        if(!isset($GLOBALS['GbkUniDic']))
        {
            $fp = fopen(DEDEINC.'/data/gbk-unicode.dat','rb');
            while(!feof($fp))
            {
                $GLOBALS['GbkUniDic'][bin2hex(fread($fp,2))] = fread($fp,2);
            }
            fclose($fp);
        }

        //处理字符串
        $str = str_replace('$#$','+',$str);
        $glen = strlen($str);
        $okstr = "";
        for($i=0; $i < $glen; $i++)
        {
            if($glen-$i > 4)
            {
                if($str[$i]=='%' && $str[$i+1]=='u')
                {
                    $uni = strtolower(substr($str,$i+2,4));
                    $i = $i+5;
                    if(isset($GLOBALS['GbkUniDic'][$uni]))
                    {
                        $okstr .= $GLOBALS['GbkUniDic'][$uni];
                    }
                    else
                    {
                        $okstr .= "&#".hexdec('0x'.$uni).";";
                    }
                }
                else
                {
                    $okstr .= $str[$i];
                }
            }
            else
            {
                $okstr .= $str[$i];
            }
        }
        return $okstr;
    }
}

/**
 *  自动转换字符集 支持数组转换
 *
 * @access    public
 * @param     string  $str  转换的内容
 * @return    string
 */
if ( ! function_exists('AutoCharset'))
{
    function AutoCharset($fContents, $from='gbk', $to='utf-8')
    {
        $from   =  strtoupper($from)=='UTF8'? 'utf-8' : $from;
        $to       =  strtoupper($to)=='UTF8'? 'utf-8' : $to;
        if( strtoupper($from) === strtoupper($to) || empty($fContents) || (is_scalar($fContents) && !is_string($fContents)) ){
            //如果编码相同或者非字符串标量则不转换
            return $fContents;
        }
        if(is_string($fContents) )
        {
            if(function_exists('mb_convert_encoding'))
            {
                return mb_convert_encoding ($fContents, $to, $from);
            } elseif (function_exists('iconv'))
            {
                return iconv($from, $to, $fContents);
            } else {
                return $fContents;
            }
        }
        elseif(is_array($fContents))
        {
            foreach ( $fContents as $key => $val )
            {
                $_key =     AutoCharset($key,$from,$to);
                $fContents[$_key] = AutoCharset($val,$from,$to);
                if($key != $_key )
                    unset($fContents[$key]);
            }
            return $fContents;
        }
        else{
            return $fContents;
        }
    }
}











//递归 获取分类
function getJG($id=0,$reid=0,$tt="",$select="",$channel=''){
    $jg = M("Arctype");
    $channela = '';
    if($reid ==0 && $id == 0){
        if($channel){$channela = ' and channeltype='.$channel;}
        $list = $jg->where("ispart=0 and topid=0".$channela)->field("id,reid,typename")->select();
        foreach ($list as $value) {
            $tmp = getJG(0,$value['id'],'&nbsp;&nbsp;─',$select,$channel);
            $tmp1 = '';
            if($select == $value['id']){
                $tmp1 = 'selected';
            }

            $arr .= "<option value='{$value['id']}' {$tmp1}>{$value['typename']}</option>".$tmp;
        }

       if(!$list){
                $list = $jg->where(" topid>= reid   ".$channela)->field("id,reid,typename")->select();
                foreach ($list as $value) {
                    $tmp = getJG(0,$value['id'],'&nbsp;&nbsp;─',$select,$channel);
                    $tmp1 = '';
                    if($select == $value['id']){
                        $tmp1 = 'selected';
                    }

                    $arr .= "<option value='{$value['id']}' {$tmp1}>{$value['typename']}</option>".$tmp;
                }
        }

    }elseif ($id > 0 && $reid==0) {
        if($channel){$channela = ' and channeltype='.$channel;}
        $vo = $jg->where("id=$id".$channela)->field("id,reid,typename")->find();
        $tmp = getJG(0,$vo['id'],'&nbsp;&nbsp;─',$select,$channel);
        $tmp1 = '';
        if($select == $vo['id']){
            $tmp1 = 'selected';
        }
        $arr .= "<option value='{$vo['id']}' {$tmp1}>{$vo['typename']}</option>".$tmp;
    }
    else{
        if($channel){$channela = ' and channeltype='.$channel;}
        $list = $jg->where("reid=".$reid.$channela)->field("id,reid,typename")->select();
        foreach ($list as $value) {
            $tmp = getJG(0,$value['id'],'&nbsp;&nbsp;'.$tt.'─',$select,$channel);
            $tmp1 = '';
            if($select == $value['id']){
                $tmp1 = 'selected';
            }
            $arr .= "<option value='{$value['id']}' {$tmp1}>{$tt}{$value['typename']}</option>".$tmp;
        }
    }

    return $arr;
}


//递归 删除分类
function deleteJG2($id=0){
    $jg = M("Arctype");
    $voList = $jg->where("reid=".$id)->field("id")->select();
    foreach ($voList as $value) {
        deleteJG2($value["id"]);
        $jg->where("id=".$value["id"])->delete();
    }
    $jg->where("id=".$id)->delete();
}





//递归 获取分类
function getJG2($id=0,$reid=0,$tt=""){
    $jg = M("Arctype");
    if($reid ==0 && $id == 0){
        $list = $jg->where("topid=0")->field("id,sortrank,reid,topid,typename,channeltype")->order("sortrank")->select();
        foreach ($list as $value) {
            $tmp = getJG2(0,$value['id'],'─');
            $arr .='<tr><td>'.$value['id'].'</td><td>'.$value['sortrank'].'</td><td><a href="'.U("Type/article",array("typeid"=>$value["id"],"channel"=>$value['channeltype'],"ss"=>4)).'">'.$value['typename'].'</a></td><td><a href="'.U("Type/add",array("reid"=>$value['id'],"topid"=>$value['id'],"channel"=>$value['channeltype'],"ss"=>3)).'"><i class="fa fa-fw fa-plus"></i>增加子类</a> | <a title="编辑" href="'.U("Type/edit",array("id"=>$value['id'],"ss"=>3)).'"><i class="fa fa-fw fa-edit"></i></a> | <a onclick="return window.confirm(\'确定删除？\');" title="删除" href="'.U("Type/delete",array("id"=>$value['id'],"ss"=>3)).'"><i class="fa fa-fw fa-remove"></i></a></td></tr>'.$tmp;
        }
    }elseif ($id > 0 && $reid==0) {
        $vo = $jg->where("id=$id")->field("id,sortrank,reid,topid,typename,channeltype")->find();
        $tmp = getJG2(0,$vo['id'],'─');
        $arr .='<tr><td>'.$vo['id'].'</td><td>'.$vo['sortrank'].'</td><td><a href="'.U("Type/article",array("typeid"=>$vo["id"],"channel"=>$vo['channeltype'],"ss"=>4)).'">'.$vo['typename'].'</a></td><td><a href="'.U("Type/add",array("reid"=>$vo['id'],"topid"=>$vo['topid'],"channel"=>$vo['channeltype'],"ss"=>3)).'"><i class="fa fa-fw fa-plus"></i>增加子类</a> | <a title="编辑" href="'.U("Type/edit",array("id"=>$vo['id'],"ss"=>3)).'"><i class="fa fa-fw fa-edit"></i></a> | <a onclick="return window.confirm(\'确定删除？\');" title="删除" href="'.U("Type/delete",array("id"=>$vo['id'],"ss"=>3)).'"><i class="fa fa-fw fa-remove"></i></a></td></tr>'.$tmp;
    }
    else{
        $list = $jg->where("reid=".$reid)->field("id,sortrank,reid,topid,typename,channeltype")->order("sortrank")->select();
        foreach ($list as $value) {
            $tmp = getJG2(0,$value['id'],$tt.'─');
            $arr .='<tr><td>'.$value['id'].'</td><td>'.$value['sortrank'].'</td><td><a href="'.U("Type/article",array("typeid"=>$value["id"],"channel"=>$value['channeltype'],"ss"=>4)).'">'.$tt.$value['typename'].'</a></td><td><a href="'.U("Type/add",array("reid"=>$value['id'],"topid"=>$value['topid'],"channel"=>$value['channeltype'],"ss"=>3)).'"><i class="fa fa-fw fa-plus"></i>增加子类</a> | <a title="编辑" href="'.U("Type/edit",array("id"=>$value['id'],"ss"=>3)).'"><i class="fa fa-fw fa-edit"></i></a> | <a onclick="return window.confirm(\'确定删除？\');" title="删除" href="'.U("Type/delete",array("id"=>$value['id'],"ss"=>3)).'"><i class="fa fa-fw fa-remove"></i></a></td></tr>'.$tmp;
        }
    }
    return $arr;
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



//递归  获取分类id下级所有分类
function getIdEnumAll($id=0){
    $jg = M("Sys_enum");
    $voList = $jg->where("reid=".$id)->field("id")->select();
    foreach ($voList as $value) {
       $tmp = getIdEnumAll($value["id"]);
       $result .=','.$value['id'].$tmp;
     }
    return $result;
}




//递归  找上级
function getEnum22($id=0,$tt=""){
    if(empty($id)) return;
    $jg = M("Sys_enum");
    $vo = $jg->where("id=".$id." and topid<>0 ")->field("reid,ename")->find();
    if($vo){
      $tmp = getEnum22($vo['reid']);
    }
    return $tmp.$tt.$vo['ename'];
}

//递归 获取分类
function getEnum2($id=0,$reid=0,$tt=""){
    $jg = M("Sys_enum");
    $list = $jg->where("reid=".$reid)->field("id,disorder,reid,topid,ename,egroup")->order("disorder")->select();
    foreach ($list as $value) {
        $tmp = getEnum2(0,$value['id'],$tt.'─');
        $arr .='<tr><td>'.$value['id'].'</td><td><a href="'.U("System/enum",array("reid"=>$value["id"],"ss"=>6)).'">'.$tt.$value['ename'].'</a></td><td>'.$value['egroup'].'</td><td><a href="'.U("System/addEnum",array("reid"=>$value['id'],"topid"=>$value['topid'],"ss"=>2)).'"><i class="fa fa-fw fa-plus"></i>增加下级</a> | <a title="编辑" href="'.U("Type/edit",array("id"=>$value['id'],"ss"=>2)).'"><i class="fa fa-fw fa-edit"></i></a> | <a onclick="return window.confirm(\'确定删除？\');" title="删除" href="'.U("System/deleteEnum",array("id"=>$value['id'])).'"><i class="fa fa-fw fa-remove"></i></a></td></tr>'.$tmp;
    }
    return $arr;
}


//递归
function getEnum2_link($id=0){
    $jg = M("Sys_enum");
    $vo = $jg->where("id=".$id)->field("id,disorder,reid,topid,ename,egroup")->find();
    if($vo){
      $tmp = getEnum2_link($vo['reid']);
      $arr .= $tmp.'<li><a href="'.U("System/enum",array("reid"=>$id,"ss"=>6)).'">'.$vo['ename'].'</a></li>';
    }
    return $arr;
}

//递归 删除分类
function deleteEN2($id=0){
    $jg = M("Sys_enum");
    $voList = $jg->where("reid=".$id)->field("id")->select();
    foreach ($voList as $value) {
        deleteEN2($value["id"]);
        $jg->where("reid=".$id)->delete();
    }
    $jg->where("id=".$id)->delete();
}


//递归 获取分类
function getEnum($id=0,$reid=0,$tt="",$select="",$egroup=''){
    $jg = M("Sys_enum");
    if($reid ==0 && $id == 0){
        if($egroup){$egroup = " and egroup='".$egroup."'";}
        $list = $jg->where("topid=0".$egroup)->field("id,reid,ename")->select();
        foreach ($list as $value) {
            $tmp = getEnum(0,$value['id'],'&nbsp;&nbsp;─',$select,$where);
            $tmp1 = '';
            if($select == $value['id']){
                $tmp1 = 'selected';
            }

            $arr .= "<option value='{$value['id']}' {$tmp1}>{$value['ename']}</option>".$tmp;
        }
    }elseif ($id > 0 && $reid==0) {
        if($egroup){$egroup = " and egroup='".$egroup."'";}
        $vo = $jg->where("id=$id".$egroup)->field("id,reid,ename")->find();
        $tmp = getEnum(0,$vo['id'],'&nbsp;&nbsp;─',$select,$egroup);
        $tmp1 = '';
        if($select == $vo['id']){
            $tmp1 = 'selected';
        }
        $arr .= "<option value='{$vo['id']}' {$tmp1}>{$vo['ename']}</option>".$tmp;
    }
    else{
        if($egroup){$egroup = " and egroup='".$egroup."'";}
        $list = $jg->where("reid=".$reid.$egroup)->field("id,reid,ename")->select();
        foreach ($list as $value) {
            $tmp = getEnum(0,$value['id'],'&nbsp;&nbsp;'.$tt.'─',$select,$egroup);
            $tmp1 = '';
            if($select == $value['id']){
                $tmp1 = 'selected';
            }
            $arr .= "<option value='{$value['id']}' {$tmp1}>{$tt}{$value['ename']}</option>".$tmp;
        }
    }

    return $arr;
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
