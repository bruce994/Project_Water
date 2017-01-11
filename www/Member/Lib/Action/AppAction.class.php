<?php
class AppAction extends Action {


    function _initialize() {

        if (isset($_SERVER['HTTP_ORIGIN'])) {
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }

        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

            exit(0);
        }
    }




	// 框架首页
	public function index() {
     	}




    public function systemInfo(){
        switch ($_GET['type']) {
			case 'notice':
                $list = M ("Notice" )->select();
                $message = $list;
                echo GetJson($message);
                exit();
				break;
			case 'CC':
                echo GetJson(array(C("info")));
                exit();
				break;
            case 'Ad':
                  $time = time();
                  $A = M("Myad")->where("starttime <".$time." and endtime>".$time)->limit("0,100")->field("id,adname,image,url")->select();
                  echo GetJson($A);
                exit();
                break;
			default:
				break;
		}

    }



    public function member(){
        $model = M ("Member" );
        $member = $model->where('mid='.$this->_param("mid"))->find();


        $start = strtotime(date('Y-m-d', strtotime('first day of this month')));
        $end = strtotime(date('Y-m-d', strtotime('last day of this month')));
        $model = M ("Score_log" );
        $tmp = $model->where('typeid=1 and mid='.$this->_param("mid").' and addtime>'.$start.' and addtime<'.$end)->count();
        $member['checkInCount'] = $tmp;


        $qrcode = "../Public/qrcode/".$this->_param("mid").'_qrcode.png';
        $url = C("site_url")."/misc/phpqrcode/index.php?url=".urlencode(C("site_url")."/Member/index.php?m=Public&a=reg&re_userid=". $member['userid']);
        if(!file_exists($qrcode)){
            file_put_contents($qrcode, file_get_contents($url));
        }
        $qrcode_url = C("site_url").str_replace('..','',$qrcode);
        $member['qrcode_url'] = $qrcode_url;


        $vo1 = M("Member_person")->where("mid = ".$this->_param("mid"))->find();
        $member['sex'] = $vo1['sex'];
        $member['address'] = $vo1['address'];
        $member['age'] = $vo1['age'];
        $member['tel'] = $vo1['tel'];

		$message = array($member);
		echo GetJson($message);
		exit();

    }


	public function checkLogin(){
		 $json = file_get_contents("php://input");
		 $json = json_decode($json,true);
		 if(empty($json)){
			$json = $_REQUEST;
		 }
		 $name = $json['username'];
		 $password = $json['password'];

		if(empty($name)) {
			$message = array(array("status"=>0,"msg"=>"帐号不能为空"));
			echo GetJson($message);
			exit();

		}elseif (empty($password)){
			$message = array(array("status"=>0,"msg"=>"密码不能为空"));
			echo GetJson($message);
			exit();
		}



            $where1 = "(userid='".$name."' or uname='".$name."') and status=1";
			$Member	=	M('Member');
			$vo = $Member -> where($where1)->find();
			if(!$vo){
				$message = array(array("status"=>0,"msg"=>"帐号不存在或已禁用！"));
				echo GetJson($message);
				exit();
			}


            if($vo['pwd'] != md5($password)) {
				$message = array(array("status"=>0,"msg"=>"密码错误！"));
				echo GetJson($message);
				exit();
            }

            $_SESSION[C('USER_AUTH_KEY')]	=	$vo['mid'];
            $_SESSION["member"]	=	$vo;
            $_SESSION['administrator']		=	true;


            //保存登录信息
			$ip		=	get_client_ip();
			$time	=	time();
            $data = array();
			$data['mid']	=	$vo['mid'];
			$data['logintime']	=	$time;
			$data['loginip']	=	$ip;
			$Member->save($data);

            //待定时间段增加积分
            $t_date = explode("|",C("cfg_t_date"));
            foreach($t_date as $t){
            $ts = explode(",",$t);
            if(count($ts)==2){
                $tmp1 = date("Y-m-d H:i:s");
                if($tmp1 > $ts[0] && $tmp1 < $ts[1] ){
                    $model = M ("Score_log" );
                    $tmp = $model->where("typeid=7 and mid=".$vo['mid']." and var_1='".trim($t)."'")->find();
                    if(!$tmp){
                        //update user scores
                        $Model = new Model();
                        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".C("cfg_t_score")." where  mid=".$vo['mid']);

                        $model = M ("Score_log" );
                        $model->add(array('mid'=>$vo['mid'],'typeid'=>7,'addtime'=>time(),'score'=>"+".C("cfg_t_score"),'var_1'=>$t,'summary'=>'会员特定时间登陆送积分'));

                    }
                }
            }
        }
            //END

		$message = array(array("status"=>1,"msg"=>"登陆成功","mid"=>$vo['mid']));
		echo GetJson($message);
		exit();
	}

    public function registrationIs(){
        $model = M ("Score_log" );
        $tmp = $model->where('typeid=1 and mid='.$this->_param("mid").' and addtime>'.strtotime(date("Y-m-d")))->find();
            if($tmp){
                    $message = array(array("status"=>0,"msg"=>"今天已经签到"));
                    echo GetJson($message);
                    exit();
            }


            $message = array(array("status"=>1,"msg"=>""));
            echo GetJson($message);
            exit();
    }


    public function registration(){

        $model = M ("Score_log" );
        $tmp = $model->where('typeid=1 and mid='.$this->_param("mid").' and addtime>'.strtotime(date("Y-m-d")))->find();

        if($tmp){
            $message = array(array("status"=>0,"msg"=>"您今天已经签到过了"));
            echo GetJson($message);
            exit();
        }
        $model->add(array('mid'=>$this->_param("mid"),'typeid'=>1,'addtime'=>time(),'score'=>C("cfg_registration_score"),'summary'=>'签到获取积分'));

        //update user scores
        $Model = new Model();
        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".C("cfg_registration_score")." where  mid=".$this->_param("mid"));

        $message = array(array("status"=>1,"msg"=>"签到成功"));
        echo GetJson($message);
        exit();
}



public function log(){
    $json = file_get_contents("php://input");
    $json = json_decode($json,true);
    if(empty($json)){
        $json = $_REQUEST;
    }

    if(!empty($json['startDate']) && !empty($_REQUEST['endDate'])){
        $map['addtime'] = array(array('egt',strtotime($json['startDate'])),array('elt',strtotime($_REQUEST['endDate'])));
    }

    $model = M ("Score_log" );
    //列表过滤器，生成查询Map对象
    $map['mid'] = $json [C ( 'USER_AUTH_KEY' )];
    //$map = $this->_search ();
    if (method_exists ( $this, '_filter' )) {
        $this->_filter ( $map );
}


//var_dump($map);

//读取数据库模块列表生成菜单项

//排序字段 默认为主键名
if (!empty ( $json ['_order'] )) {
    $order = $json ['_order'];
} else {
    $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
}

$order = 'addtime';
//排序方式默认按照倒序排列
//接受 sost参数 0 表示倒序 非0都 表示正序
if (isset ( $json ['_sort'] )) {
    //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
    $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
} else {
    $sort = $asc ? 'asc' : 'desc';
}

import ( "@.ORG.Util.Page" );
//取得满足条件的记录数
$count = $model->where ( $map )->count ();
if ($count > 0) {
    //创建分页对象
    if (! empty ( $json ['listRows'] )) {
        $listRows = $json ['listRows'];
} else {
    $listRows = '';
}

}
//var_dump($map);

$p = new Page ( $count, $listRows );
//分页查询数据
$voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
echo GetJson($voList);
exit;

}


public function waterLife(){
    $datas = array();
    $aa = "192";
    $type_all = M("Arctype")->where("id in(".$aa.")")->field("id,typename")->select();
    foreach ($type_all as $ty) {
        $productList = M("Archives")->where("typeid=".$ty['id'])->limit("0,9")->select();
        foreach ($productList as $vo) {
            $product = M("addon".$vo['channel'])->where("aid=".$vo['id'])->find();
            $comm = M("Feedback")->where("aid=".$vo['id']. " and ischeck=1")->count();
            $order = M("Shops_orders")->where("pid=".$vo['id'])->count();
                $data["id"] = $vo['id'];
                $data["litpic"] = $vo['litpic'];
                $data["score"] = $product['score'];
                $datas[] = $data;
            }
        }
        echo GetJson($datas);
        exit();
}



//积分商城
public function scoreShop(){
    $datas = array();
    $aa = "193".getType2("193");
    $type_all = M("Arctype")->where("id in(".$aa.")")->field("id,typename")->select();
    foreach ($type_all as $ty) {
      $productList = M("Archives")->where("typeid=".$ty['id'])->limit("0,9")->select();
      foreach ($productList as $vo) {
          $product = M("addon".$vo['channel'])->where("aid=".$vo['id'])->find();
          $comm = M("Feedback")->where("aid=".$vo['id']. " and ischeck=1")->count();
          $order = M("Shops_orders")->where("pid=".$vo['id'])->count();
                $data["id"] = $vo['id'];
                $data["litpic"] = $vo['litpic'];
                $data["title"] = $vo['title'];
                $data["score"] = $product['score'];
                $data["order"] = $product['order'];
                $data["comm"] = $comm;
                $datas[] = $data;
      }
    }
        echo GetJson($datas);
        exit();
}

public function article(){
    $json = file_get_contents("php://input");
    $json = json_decode($json,true);
    if(empty($json)){
        $json = $_REQUEST;
    }

        //浏览记录
    	if($_SESSION['HISTORY']){
    		$history = $_SESSION['HISTORY'];
    		if(!array_search($json['id'],$history)){
	    		array_push($_SESSION['HISTORY'], $json['id']);
    		}
    	}else{
			$_SESSION['HISTORY'] = array($json['id']);
    	}
    	//END


		$model = D ( "Archives" );
        $id = $json ["id"];
		$vo = $model->where("id = ".$id)->find();
		if($vo['arcrank'] == "-1"){
			$this->error('文档未审核！',C("site_url"));
		}

		//click+1
		$Model = new Model();
		$Model->execute("UPDATE ".C("DB_PREFIX")."archives SET click=click+1 WHERE id=".$id);

		$model = M ( "Addon".$vo['channel'] );
		$vo1 = $model->where("aid = ".$id)->find();
		if(empty($vo1)){$vo1 = array();}
		$result = array_merge($vo, $vo1);
        //月销
        $start = strtotime(date('Y-m-d', strtotime('first day of this month')));
        $end = strtotime(date('Y-m-d', strtotime('last day of this month')));
        $saleMonth =  M("Shops_orders")->where("pid=".$vo['id']." and stime>".$start." and stime < ".$end)->count();
        $result['saleMonth'] = $saleMonth;

        $datas[] = $result;

		$type = M ( "Arctype" )->where("id=".$vo['typeid'])->find();
        $datas[] = $type;

        echo GetJson($datas);
        exit();

}





	//产品兑换
	public function exchange(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }

		$aid = $json["id"];
        $product = M("addon".$json["channel"])->where("aid=".$aid)->find();
        $score = $product['score'];

        $Member = M("Member")->where("mid=".$json["mid"])->field("scores")->find();
        $myScore = intval($Member['scores']);

        if($myScore < $score){
			$arr = array("code"=>-1,"msg"=>'您的积分不足，请充值！');
			echo json_encode($arr);
			exit;
        }

        //生成订单号
        $model = M ("Shops_orders" );
        $OrdersId = MakeOrders();
        $model->add(array('oid'=>$OrdersId,"pid"=>$aid, 'typeid'=>$json["typeid"],'mid'=>$json["mid"],'score'=>$score,'stime'=>time(),'ip'=>get_client_ip()));

        //update user scores
        $Model = new Model();
        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores-".$score." where  mid=".$json["mid"]);

        $model = M ("Score_log" );
        $model->add(array('mid'=>$json['mid'],'typeid'=>-1,'aid'=>$aid,'addtime'=>time(),'score'=>"-".$score,'summary'=>'兑换消耗积分'));

		$arr = array("code"=>1,"msg"=>'兑换成功，可登陆后台查看!');
		echo json_encode($arr);
		exit;

	}

	//产品兑换
	public function exchangeAll(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }

        $Member = M("Member")->where("mid=".$json['mid'])->field("scores")->find();
        $myScore = intval($Member['scores']);

        $scoreAll = $json['scoreAll'];
        if($myScore < $scoreAll){
			$arr = array("code"=>-1,"msg"=>'您的积分不足，请充值！');
			echo json_encode($arr);
			exit;
        }

        $pp = explode(',',$json["ids"]);

        foreach($pp as $v){
            $v = explode('|',$v);
            $product = M("addon".$v[2])->where("aid=".$v[1])->find();
            $score = $product['score'];

            //数量
            $num = $v[3];
            $score = intval($score) * $num;

            //生成订单号
            $model = M ("Shops_orders" );
            $OrdersId = MakeOrders();
            $model->add(array('oid'=>$OrdersId,"pid"=>$v[1], 'mid'=>$json['mid'],'score'=>$score,'cartcount'=>$num,'stime'=>time(),'ip'=>get_client_ip()));

            //update user scores
            $Model = new Model();
            $Model->execute("update ".C("DB_PREFIX")."member set scores=scores-".$score." where  mid=".$json['mid']);

            $model = M ("Score_log" );
            $model->add(array('mid'=>$json['mid'],'typeid'=>-1,'aid'=>$v[1],'addtime'=>time(),'score'=>"-".$score,'summary'=>'兑换消耗积分'));

            //delete
            M("Member_cart")->where("mid=".$json['mid']." and id=".$v[0])->delete();
        }

		$arr = array("code"=>1,"msg"=>'兑换成功，可登陆后台查看!');
		echo json_encode($arr);
		exit;

	}




    //添加购物车
    public function cart(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }


        $aid = $json["id"];
        /*
        $Member = M("Member_cart")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]." and aid=".$aid)->field("id")->find();
        if ($Member){
            $arr = array("code"=>0,"msg"=>'已经添加在您购物车中！');
            echo json_encode($arr);
            exit;
        }
        */

        $score = intval($json['score']) * intval($json['num']);
        $model = M ("Member_cart" );
        $model->add(array('mid'=>$json['mid'],'aid'=>$aid,'num'=>$json['num'],'score'=>$score,'addtime'=>time()));
        $arr = array("code"=>1,"msg"=>'加入购物车成功，可登陆后台查看!');
        echo json_encode($arr);
        exit;
    }



    //添加收藏
    public function collect(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }

        $model = M ("Member_collect" );

        $aid = $json["id"];
        $Member = M("Member_collect")->where("mid=".$json['mid']." and aid=".$aid)->field("id")->find();

        if(!empty($json['isCollect']) ){
            if($Member){
                $arr = array("code"=>1,"msg"=>'');
            }else{
                $arr = array("code"=>0,"msg"=>'');
            }
            echo json_encode($arr);
            exit;
        }



       if ($Member){
            $model->where(array('mid'=>$json['mid'],'aid'=>$aid))->delete();
            $arr = array("code"=>2,"msg"=>'取消收藏成功！');
            echo json_encode($arr);
            exit;
        }




        $model->add(array('mid'=>$json['mid'],'aid'=>$aid,'addtime'=>time()));
        $arr = array("code"=>1,"msg"=>'收藏成功，可登陆后台查看!');
        echo json_encode($arr);
        exit;
    }



    public function memberOrder(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }

          $map['mid'] = array('eq',$json['mid']);
          //$map['typeid'] = array('in',explode(',',"185".getType2("185")));
          $map['typeid'] = array('eq',192);
          $list = M ("Shops_orders" )->where($map)->order("stime desc")->limit("0,8")->select();


        echo json_encode($list);
        exit;
    }

    public function memberOrderMisc(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }
        $data = array();
        $cartNum = M("Member_cart")->where("mid=".$json['mid'])->count();
        $data[] = $cartNum;
        $cartNum1 = M("Shops_orders")->where("mid=".$json['mid']." and state=0 and typeid in(193".getType2("193").")")->count();
        $data[] = $cartNum1;
        $aa = M("Shops_orders")->where("mid=".$json['mid']." and state=1 and receipt<>1")->count();
        $data[] = $aa;
        $aa = M("Member_collect")->where("mid=".$json['mid'])->count();
        $data[] = $aa;
        echo json_encode($data);
        exit;
    }

    public function memberOrderNew(){
     $datas = array();
      $archive = M("Archives")->where("channel=45")->order("pubdate desc")->limit("0,3")->field("id,litpic,title,channel")->select();
      foreach ($archive as $row) {
        $product = M("addon".$row['channel'])->where("aid=".$row['id'])->find();
         $data['id'] = $row['id'];
         $data['litpic'] = $row['litpic'];
         $data['score'] = $product['score'];
         $datas[] = $data;
      }
        echo GetJson($datas);
        exit();
    }

		public function orderDelete() {
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }
			$model = M ("Shops_orders");
			$id = $json ["id"];
			$ids = explode ( ',', $id );
            if (isset ( $id )) {
                $condition = array ("oid" => array ('in', $ids ),"mid"=>array("eq",$json['mid']),"state"=>array("eq",0) );
                $list1 =$model->where ( $condition )->select();

                foreach($list1 as $vo){
                        //update user scores
                        $Model = new Model();
                        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".$vo['score']." where  mid=".$vo['mid']);

                        $model_l = M ("Score_log" );
                        $model_l->add(array('mid'=>$vo['mid'],'typeid'=>8,'addtime'=>time(),'score'=>"+".$vo['score'],'summary'=>'删除取消订单退回积分'));

                }


				$list=$model->where ( $condition )->delete();
                if ($list!==false) {
                        echo '{"message":"删除成功！","code":"0","id":"'.$id.'"}';
                        exit;
                } else {
                        echo '{"message":"删除失败！","code":"1","id":"0"}';
                        exit;
				}
			}

		}



	public function memberOrderAll() {
                $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }

               $map['mid'] = array('eq',$json['mid']);

				if(!empty($json['q'])){
					 $map['oid'] = array('like',"%".$json['q']."%");
				}

			    if(isset($json['state'])){
					 $map['state'] = array('eq',$json['state']);
				}

                //$_GET['typeid'] == 193  //积分商城
                if(isset($json['typeid'])){
                     $map['typeid'] = array('in',explode(',',$json['typeid'].getType2($json['typeid'])));
                }

               //读取数据库模块列表生成菜单项
				$model = M ("Shops_orders" );

                    //排序字段 默认为主键名
                    if (!empty ( $json ['_order'] )) {
                        $order = $json ['_order'];
                    } else {
                        $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
                    }

                    $order = 'stime';
                    //排序方式默认按照倒序排列
                    //接受 sost参数 0 表示倒序 非0都 表示正序
                    if (isset ( $json ['_sort'] )) {
                        //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
                        $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
                    } else {
                        $sort = $asc ? 'asc' : 'desc';
                    }

                    import ( "@.ORG.Util.Page" );
                    //取得满足条件的记录数
                    $count = $model->where ( $map )->count ();
                    if ($count > 0) {
                        //创建分页对象
                        if (! empty ( $json ['listRows'] )) {
                            $listRows = $json ['listRows'];
                    } else {
                        $listRows = '';
                    }

                    }
                    //var_dump($map);

                    $p = new Page ( $count, $listRows );
                    //分页查询数据
                    $voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
                    echo GetJson($voList);
                    exit;


	}


	public function memberCollect() {
                $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }
               $map['mid'] = array('eq',$json['mid']);

                //读取数据库模块列表生成菜单项
				$model = M ("Member_collect" );

                    //排序字段 默认为主键名
                    if (!empty ( $json ['_order'] )) {
                        $order = $json ['_order'];
                    } else {
                        $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
                    }

                    //排序方式默认按照倒序排列
                    //接受 sost参数 0 表示倒序 非0都 表示正序
                    if (isset ( $json ['_sort'] )) {
                        //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
                        $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
                    } else {
                        $sort = $asc ? 'asc' : 'desc';
                    }

                    import ( "@.ORG.Util.Page" );
                    //取得满足条件的记录数
                    $count = $model->where ( $map )->count ();
                    if ($count > 0) {
                        //创建分页对象
                        if (! empty ( $json ['listRows'] )) {
                            $listRows = $json ['listRows'];
                    } else {
                        $listRows = '';
                    }

                    }
                    //var_dump($map);

                    $p = new Page ( $count, $listRows );
                    //分页查询数据

                    $datas = array();
                    $voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
                    foreach($voList as $v){
                        $archives = M("Archives")->where("id=".$v['aid'])->field("title")->find();
                        $v['title'] = $archives['title'];
                        $datas[] = $v;
                    }
                    echo GetJson($datas);
                    exit;

    }



		public function collectDelete() {
              $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }

			$model = M ("Member_collect");
			$id = $json ["id"];
			$ids = explode ( ',', $id );
            if (isset ( $id )) {
                $condition = array ("id" => array ('in', $ids ),"mid"=>array("eq",$json['mid']) );
				$list=$model->where ( $condition )->delete();
                if ($list!==false) {
                        echo '{"message":"删除成功！","code":"0","id":"'.$id.'"}';
                        exit;
				} else {
                        echo '{"message":"删除失败！","code":"1","id":"0"}';
                        exit;
				}
			}

		}





	public function shopCart() {
                $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }


                   $map['mid'] = array('eq',$json['mid']);
                if(isset($json['typeid'])){
                     $map['typeid'] = array('in',explode(',',$json['typeid'].getType2($json['typeid'])));
                }


                //读取数据库模块列表生成菜单项
				$model = M ("Member_cart" );

                    //排序字段 默认为主键名
                    if (!empty ( $json ['_order'] )) {
                        $order = $json ['_order'];
                    } else {
                        $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
                    }

                    //排序方式默认按照倒序排列
                    //接受 sost参数 0 表示倒序 非0都 表示正序
                    if (isset ( $json ['_sort'] )) {
                        //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
                        $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
                    } else {
                        $sort = $asc ? 'asc' : 'desc';
                    }

                    import ( "@.ORG.Util.Page" );
                    //取得满足条件的记录数
                    $count = $model->where ( $map )->count ();
                    if ($count > 0) {
                        //创建分页对象
                        if (! empty ( $json ['listRows'] )) {
                            $listRows = $json ['listRows'];
                    } else {
                        $listRows = '';
                    }

                    }
                    //var_dump($map);

                    $p = new Page ( $count, $listRows );
                    //分页查询数据

                    $datas = array();
                    $voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
                    foreach($voList as $v){
                        $archives = M("Archives")->where("id=".$v['aid'])->field("id,title,litpic,channel")->find();
                        $v['title'] = $archives['title'];
                        $v['litpic'] = $archives['litpic'];
                        $v['channel'] = $archives['channel'];
                        $datas[] = $v;
                    }
                    echo GetJson($datas);
                    exit;
    }



		public function cartDelete() {
                $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }

			$model = M ("Member_cart");
			$id = $json ["id"];
			$ids = explode ( ',', $id );
            if (isset ( $id )) {
                $condition = array ("id" => array ('in', $ids ),"mid"=>array("eq",$json['mid']) );
				$list=$model->where ( $condition )->delete();
				if ($list!==false) {
                        echo '{"message":"删除成功！","code":"0","id":"'.$id.'"}';
                        exit;
				} else {
                        echo '{"message":"删除失败！","code":"1","id":"0"}';
                        exit;
				}
			}

		}


	public function feedBack() {
                $json = file_get_contents("php://input");
                $json = json_decode($json,true);
                if(empty($json)){
                    $json = $_REQUEST;
                }

		        //列表过滤器，生成查询Map对象
				if(!empty($json['q'])){
					 $map['msg'] = array('like',"%".$json['q']."%");
				}
				$map['mid'] = array('eq',$json['mid']);

                //读取数据库模块列表生成菜单项
				$model = M ("Feedback" );

                    //排序字段 默认为主键名
                    if (!empty ( $json ['_order'] )) {
                        $order = $json ['_order'];
                    } else {
                        $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
                    }

                    //排序方式默认按照倒序排列
                    //接受 sost参数 0 表示倒序 非0都 表示正序
                    if (isset ( $json ['_sort'] )) {
                        //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
                        $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
                    } else {
                        $sort = $asc ? 'asc' : 'desc';
                    }

                    import ( "@.ORG.Util.Page" );
                    //取得满足条件的记录数
                    $count = $model->where ( $map )->count ();
                    if ($count > 0) {
                        //创建分页对象
                        if (! empty ( $json ['listRows'] )) {
                            $listRows = $json ['listRows'];
                    } else {
                        $listRows = '';
                    }

                    }
                    //var_dump($map);

                    $p = new Page ( $count, $listRows );
                    //分页查询数据
                    $datas = array();
                    $voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
                    foreach($voList as $v){
                        $archives = M("Archives")->where("id=".$v['aid'])->field("title")->find();
                        $v['title'] = $archives['title'];
                        $member = M("Member")->where("mid=".$v['mid'])->field("userid")->find();
                        $v['userid'] = $member['userid'];
                        $datas[] = $v;
                    }
                    echo GetJson($datas);
                    exit;
}


public function feedbackDelete() {
     $json = file_get_contents("php://input");
    $json = json_decode($json,true);
    if(empty($json)){
        $json = $_REQUEST;
    }

    $model = M ("Feedback");
    $id = $json ["id"];
    $ids = explode ( ',', $id );
    if (isset ( $id )) {
        $condition = array ("id" => array ('in', $ids ),"mid"=>$json['mid'] );
        $list=$model->where ( $condition )->delete();
                if ($list!==false) {
                        echo '{"message":"删除成功！","code":"0","id":"'.$id.'"}';
                        exit;
                } else {
                        echo '{"message":"删除失败！","code":"1","id":"0"}';
                        exit;
                }
    }

}



    public function shopUserInfo() {
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }
        $model = M ("Shops_userinfo" );
        $voList = $model->where('mid='.$json["mid"])->select();
        echo GetJson($voList);
        exit();
    }



public function memberUpdate(){
        $json = file_get_contents("php://input");
        $json = json_decode($json,true);
        if(empty($json)){
            $json = $_REQUEST;
        }

		$mid = $json['mid'];
		$email = $json['email'];
		$uname = $json['uname'];
		$face = $json['face'];

		$sex = $json['sex'];
		$tel = $json['tel'];
		$address = $json['address'];
        $age = $json['age'];
        $cardID = $json['cardID'];


		$tmp = M("Member")->where("userid='".$email."' and mid<>".$mid)->field("userid")->find();
		if($tmp){
            echo '{"message":"该Email已被注册，请重新注册！","code":"1"}';
            exit;
        }

        if($json['uname2'] != $uname){
            $tmp = M("Member")->where("uname='".$uname."'")->field("userid")->find();
            if($tmp){
                echo '{"message":"该昵称已被注册，请重新注册！","code":"1"}';
                exit;
            }
        }
         if(empty($uname)){
            $data1 = array('email'=>$email,'face'=>$face,'cardID'=>$cardID);
        }else{
            $data1 = array('email'=>$email,'uname'=>$uname,'face'=>$face,'cardID'=>$cardID);
        }

		$result = M("Member")->where("mid=".$mid)->save($data1);
		$result1 = M("Member_person")->where("mid=".$mid)->save(array('sex'=>$sex,'tel'=>$tel,'address'=>$address,'age'=>$age));

		if($result || $result1) {

            if($email && $uname && $face && $sex && $tel && $address && $age){
                    $model = M ("Score_log" );
                    $tmp = $model->where('typeid=6 and mid='.$json['mid'])->find();
                        if(!$tmp){
                            $model->add(array('mid'=>$json['mid'],'typeid'=>6,'addtime'=>time(),'score'=>C("cfg_member_info"),'summary'=>'完善资料获取积分'));

                            //update user scores
                            $Model = new Model();
                            $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".C("cfg_member_info")." where  mid=".$json['mid']);
                            echo '{"message":"修改成功,积分已赠送","code":"0"}';
                            exit;
                        }
            }

            echo '{"message":"修改成功！","code":"0"}';
            exit;
		}else{
            echo '{"message":"修改失败！","code":"1"}';
            exit;
		}
}



 public function memberPwd(){

    $json = file_get_contents("php://input");
    $json = json_decode($json,true);
    if(empty($json)){
        $json = $_REQUEST;
    }

	     $password = $json['password'];
	     $newpassword = $json['newpassword'];
		 $repassword = $json['repassword'];
		 if($password == "" or $newpassword == "" or $repassword == ""){
            echo '{"message":"表单不能为空","code":"1"}';
            exit;
		 }
		 $sql = M("Member")->where(array("mid" => $json['mid'],"pwd" => md5($password)))->find();
		 if(!$sql){
            echo '{"message":"旧密码不正确","code":"1"}';
            exit;
		 }
		 if($newpassword != $repassword){
            echo '{"message":"两次新密码不正确","code":"1"}';
            exit;
		 }


		 $data['pwd'] = md5($newpassword);
		 if(M("Member")->where(array("mid" => $json['mid'],"pwd" => md5($password)))->data($data)->save()){
            echo '{"message":"密码修改成功","code":"0"}';
            exit;
		 }else{
            echo '{"message":"修改失败","code":"1"}';
            exit;
		 }

 }



	public function reg() {
         $json = file_get_contents("php://input");
		 $json = json_decode($json,true);
		 if(empty($json)){
			$json = $_REQUEST;
		 }

          if(C("userClose") == 1){
                echo '{"message":"系统关闭会员注册！","code":"1"}';
                exit;
            }


				$pro = $json["pro"];
				if(empty($pro)){
                    echo '{"message":"注册失败！协议未同意","code":"1"}';
                    exit;
				}

                $userid = $json['userid'];
                $email = '';
                $tel = '';


                if(preg_match("/^13[0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$|186[0-9]{8}$/",$userid)){
                    $tel = $json["userid"];
                    $tmp = M("Member_person")->where("tel='".$tel."'")->field("mid")->find();
                    if($tmp){
                        echo '{"message":"该电话已被注册，请重新注册！","code":"1"}';
                        exit;
                    }
                }


               if(preg_match('/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{2,4}$/',$userid)){
                    $email = $json["userid"];
                     $tmp = M("Member")->where("email='".$email."'")->field("userid")->find();
                    if($tmp){
                        echo '{"message":"该Email已被注册，请重新注册！","code":"1"}';
                        exit;
                    }
               }

            $re_userid = $json["re_userid"];
             if($re_userid){
                     $tmp = M("Member")->where("userid='".$re_userid."'")->field("mid")->find();
                    if(!$tmp){
                        echo '{"message":"推荐人不存在，请重新注册！","code":"1"}';
                        exit;
                    }
                    $re_mid = $tmp['mid'];
               }

                $userpwd = $json["userpwd"];
                $userpwd2 = $json["userpwd2"];
                if($userpwd != $userpwd2){
                        echo '{"message":"两次输入密码不正确！","code":"1"}';
                        exit;
                }

                //import('ORG.Util.String');
                //$code = String::randString(6, 1);
                //$userpwd = $code;

                $tmp = M("Member")->where("userid='".$userid."'")->field("userid")->find();
                if($tmp){
                        echo '{"message":"该用户名已被注册，请重新注册！","code":"1"}';
                        exit;
                }

                $tmp = M("Sms")->where("tel='".$userid."' and code='".$json['code']."' and status=0")->field("id")->find();
                if(!$tmp){
                        echo '{"message":"手机验证码不正确，请重新注册！","code":"1"}';
                        exit;
                }


                /*
                if(!empty($tel)){
                    $content = '用户名:'.$userid.',您的登陆密码为:'.$userpwd;
                    $result = sms_sending($tel,$content);
                    if($result != 1){
                        echo '{"message":"手机验证码发送失败，请重新注册！","code":"1"}';
                        exit;
                    }
                }
                */

                $mid = M("Member")->data(array('userid' => $userid,'pwd'=>md5($userpwd),'email'=>$email,'jointime'=>time(),'joinip'=>get_client_ip(),'areaID'=>$json['areaID'],'cardID'=>$json['cardID']))->add();
                if($mid){
                    M("Member_person")->data(array('mid' => $mid,'uname'=>$userid,'tel'=>$tel,'re_userid'=>$re_userid))->add();
                    M("Member_tj")->data(array('mid' => $mid))->add();

                    //user rank  register score
                    M("Member")->where(array('userid' => $userid))->save(array('scores'=>C("cfg_reg")));

                    //insert log
                    $model = M ("Score_log" );
                    $model->add(array('mid'=>$mid,'typeid'=>2,'addtime'=>time(),'score'=>C("cfg_reg"),'summary'=>'注册获取积分'));

                    //推荐人获取积分
                    $zj = true;

           //推荐人待定时间段增加积分
            $t_date = explode("|",C("cfg_zj_date"));
            foreach($t_date as $t){
            $ts = explode(",",$t);
            if(count($ts)==2){
                $tmp1 = date("Y-m-d H:i:s");
                if($tmp1 > $ts[0] && $tmp1 < $ts[1] ){
                    if($re_mid){
                        $zj = false;
                        $Model = new Model();
                        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".C("cfg_zj_score")." where  mid=".$re_mid);
                        $model = M ("Score_log" );
                        $model->add(array('mid'=>$re_mid,'typeid'=>9,'addtime'=>time(),'score'=>"+".C("cfg_zj_score"),'var_1'=>$mid,'summary'=>'推荐好友送特别时间段送积分'));
                       }
                }
                }
            }
            //END


                    if($re_mid && $zj){
                        $Model = new Model();
                        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".C("cfg_recommand_score")." where  mid=".$re_mid);
                        $model = M ("Score_log" );
                        $model->add(array('mid'=>$re_mid,'typeid'=>9,'addtime'=>time(),'score'=>"+".C("cfg_recommand_score"),'var_1'=>$mid,'summary'=>'推荐好友送积分'));
                    }

                    //改变手机验证码状态
                    M("Sms")->where("tel='".$userid."' and code='".$json['code']."' and status=0")->save(array("status"=>1));

                        echo '{"message":"注册成功","code":"0"}';
                        exit;
				}

                        echo '{"message":"注册失败","code":"1"}';
                        exit;
		   }


public function sendCode() {
          $json = file_get_contents("php://input");
		 $json = json_decode($json,true);
		 if(empty($json)){
			$json = $_REQUEST;
		 }

           $tel = $json['tel'];
            if(empty($tel)){
                $error = 1;
                $msg = "手机号码不能为空!";
            }
            $sms = M('sms');
            $map['tel'] = array('eq',$tel);
            $map['status'] = array('eq',1);
            //$vo = $sms->where($map)->find();
            $vo = false;
            if($vo){
                    $error = 1;
                    $msg = "该手机号码已验证!";
            }else{
                import ( "@.ORG.Util.String" );
                $authCode = String::randString(6,1);

                $content = '您好，感谢您对本站的支持，您本次的随机验证码如下：';
                $content .= $authCode . ',请即刻验证！';
                $errorCode = sms_sending($tel,$content);
                if($errorCode > 0) {
                    $data = array(
                        'tel' => $tel,
                        'code' => $authCode,
                        'addtime' => time()
                    );
                    $error =0;
                    $msg = "手机验证码已发送至您手机，请注意查收!";
                    $sms->add($data);
                } else if ($errorCode == -4) {
                    $error = 1;
                    $msg = "手机号码格式不正确！";
                }
            }

            echo '{"message":"'.$msg.'","code":"'.$error.'"}';
            exit;
        }


public function waterRing(){
                  $json = file_get_contents("php://input");
                 $json = json_decode($json,true);
                 if(empty($json)){
                    $json = $_REQUEST;
                 }

			    if(!empty($json['keyword'])){
					 $map['title'] = array('like',"%".$json['keyword']."%");
				}

				if(!empty($json['typeid'])){
					 $tmp_id = getType2($json["typeid"]); //,1,2,3
					 if($tmp_id){
					 	$tmp_id = $json["typeid"].$tmp_id;
					 }else{
					 	$tmp_id = $json["typeid"];
					 }
					 $map['typeid'] = array('in', explode ( ',', $tmp_id ) );
                }else{
                   $map['typeid'] = array('in', array("184","186","187") );
                }


				if(!empty($json['channel'])){
					$map['channel'] = $json['channel'];
					$type['channeltype'] = $json['channel'];
				}

			    $map1['arcrank'] = array('eq',0);
			    $map2 = array_merge($map1, $map);


                //读取数据库模块列表生成菜单项
                $model = M ("Archives" );

                //置顶
                $map3_1['flag'] = array('like',"%h%");
                $map3 = array_merge($map3_1, $map2);
                $list_h = M("Archives")->where($map3)->select();


                //var_dump($map);

                //读取数据库模块列表生成菜单项

                //排序字段 默认为主键名
                if (!empty ( $json ['_order'] )) {
                    $order = $json ['_order'];
                } else {
                    $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
                }

                //排序方式默认按照倒序排列
                //接受 sost参数 0 表示倒序 非0都 表示正序
                if (isset ( $json ['_sort'] )) {
                    //                      $sort = $json ['_sort'] ? 'asc' : 'desc';
                    $sort = $json ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
                } else {
                    $sort = $asc ? 'asc' : 'desc';
                }

                import ( "@.ORG.Util.Page" );
                //取得满足条件的记录数
                $count = $model->where ( $map2 )->count ();
                if ($count > 0) {
                    //创建分页对象
                    if (! empty ( $json ['listRows'] )) {
                        $listRows = $json ['listRows'];
                } else {
                    $listRows = '';
                }

                }
                //var_dump($map);

                $p = new Page ( $count, $listRows );
                //分页查询数据
                $voList = $model->where($map2)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
                echo GetJson($voList);
                exit;

}

 public function typeAll(){
     $json = file_get_contents("php://input");
     $json = json_decode($json,true);
     if(empty($json)){
        $json = $_REQUEST;
     }

    $typeid = $json['typeid'];
    $map['id'] = array('in',explode(',',$typeid.getType2($typeid))); // 积分商城
    $T = M("Arctype")->where($map)->field("id,typename")->order("sortrank")->select();
    if($json['type'] == 'getType'){
        echo GetJson($T);
        exit;
    }


    if($json['type'] == 'getTypeDetail'){
    $type = array();
    $datas = array();
    $limit = $json['limit'];
    foreach ($T as $ty) {
      $datas = array();
      $productList = M("Archives")->where("typeid=".$ty['id'])->limit("0,".$limit)->select();
      foreach ($productList as $vo) {
          $data = $vo;
          $data['typename'] =  $ty['typename'];
          $datas[] = $data;
       }
       $ty['dd'] = $datas;
       $type[] = $ty;
    }
    echo json_encode($type);
    exit;
    }
}


}
?>
