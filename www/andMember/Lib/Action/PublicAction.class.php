<?php

// +----------------------------------------------------------------------

// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]

// +----------------------------------------------------------------------

// | Copyright (c) 2009 http://thinkphp.cn All rights reserved.

// +----------------------------------------------------------------------

// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )

// +----------------------------------------------------------------------

// | Author: liu21st <liu21st@gmail.com>

// +----------------------------------------------------------------------



class PublicAction extends Action {


	function _initialize() {

        import('@.ORG.Util.Cookie');

	}



	// 检查用户是否登录

	protected function checkUser() {

		if(!isset($_SESSION[C('USER_AUTH_KEY')])) {

			$this->assign('jumpUrl',C('USER_AUTH_GATEWAY'));

			$this->error('没有登录');

		}

	}



	// 顶部页面

	public function top() {

		C('SHOW_RUN_TIME',false);			// 运行时间显示

		C('SHOW_PAGE_TRACE',false);

		$model	=	M("Group");

		$list	=	$model->where('status=1')->getField('id,title');

		$this->assign('nodeGroupList',$list);

		$this->display();

	}

	// 尾部页面

	public function footer() {

		C('SHOW_RUN_TIME',false);			// 运行时间显示

		C('SHOW_PAGE_TRACE',false);

		$this->display();

	}

	// 菜单页面

	public function menu() {

        $this->checkUser();

        if(isset($_SESSION[C('USER_AUTH_KEY')])) {

            //显示菜单项

            $menu  = array();

            if(isset($_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]])) {



                //如果已经缓存，直接读取缓存

                $menu   =   $_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]];

            }else {

                //读取数据库模块列表生成菜单项

                $node    =   M("Node");

				$id	=	$node->getField("id");

				$where['level']=2;

				$where['status']=1;

				$where['pid']=$id;

                $list	=	$node->where($where)->field('id,name,group_id,title')->order('sort asc')->select();

                $accessList = $_SESSION['_ACCESS_LIST'];

                foreach($list as $key=>$module) {

                     if(isset($accessList[strtoupper(APP_NAME)][strtoupper($module['name'])]) || $_SESSION['administrator']) {

                        //设置模块访问权限

                        $module['access'] =   1;

                        $menu[$key]  = $module;

                    }

                }

                //缓存菜单访问

                $_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]]	=	$menu;

            }

            if(!empty($_GET['tag'])){

                $this->assign('menuTag',$_GET['tag']);

            }

			//dump($menu);

            $this->assign('menu',$menu);

		}

		C('SHOW_RUN_TIME',false);			// 运行时间显示

		C('SHOW_PAGE_TRACE',false);

		$this->display();

	}



//	public function menu() {

//        $this->checkUser();

//        if(isset($_SESSION[C('USER_AUTH_KEY')])) {

//            //显示菜单项

//            $menu  = array();

//            if(isset($_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]])) {

//

//                //如果已经缓存，直接读取缓存

//                $menu   =   $_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]];

//            }else {

//                //读取数据库模块列表生成菜单项

//                $node    =   M("Node");

//				$id	=	$node->getField("id");

//				$where['level']=2;

//				$where['status']=1;

//				$where['pid']=$id;

//                $list	=	$node->where($where)->field('id,name,group_id,title')->order('sort asc')->select();

//                $accessList = $_SESSION['_ACCESS_LIST'];

//                foreach($list as $key=>$module) {

//                     if(isset($accessList[strtoupper(APP_NAME)][strtoupper($module['name'])]) || $_SESSION['administrator']) {

//                        //设置模块访问权限

//                        $module['access'] =   1;

//                        $menu[$key]  = $module;

//                    }

//                }

//                //缓存菜单访问

//                $_SESSION['menu'.$_SESSION[C('USER_AUTH_KEY')]]	=	$menu;

//            }

//            if(!empty($_GET['tag'])){

//                $this->assign('menuTag',$_GET['tag']);

//            }

//			//dump($menu);

//            $this->assign('menu',$menu);

//		}

//		C('SHOW_RUN_TIME',false);			// 运行时间显示

//		C('SHOW_PAGE_TRACE',false);

//		$this->display();

//	}



    // 后台首页 查看系统信息

    public function main() {

        $info = array(

            '操作系统'=>PHP_OS,

            '运行环境'=>$_SERVER["SERVER_SOFTWARE"],

            'PHP运行方式'=>php_sapi_name(),

            'ThinkPHP版本'=>THINK_VERSION.' [ <a href="http://thinkphp.cn" target="_blank">查看最新版本</a> ]',

            '上传附件限制'=>ini_get('upload_max_filesize'),

            '执行时间限制'=>ini_get('max_execution_time').'秒',

            '服务器时间'=>date("Y年n月j日 H:i:s"),

            '北京时间'=>gmdate("Y年n月j日 H:i:s",time()+8*3600),

            '服务器域名/IP'=>$_SERVER['SERVER_NAME'].' [ '.gethostbyname($_SERVER['SERVER_NAME']).' ]',

            '剩余空间'=>round((@disk_free_space(".")/(1024*1024)),2).'M',

            'register_globals'=>get_cfg_var("register_globals")=="1" ? "ON" : "OFF",

            'magic_quotes_gpc'=>(1===get_magic_quotes_gpc())?'YES':'NO',

            'magic_quotes_runtime'=>(1===get_magic_quotes_runtime())?'YES':'NO',

            );

        $this->assign('info',$info);

        $this->display();

    }



	// 用户登录页面

	public function login() {

		Cookie::set ( '_currentUrl_', __SELF__ );

		if(!isset($_SESSION[C('USER_AUTH_KEY')])) {

			$this->display();

		}else{

			$this->redirect('/');

		}

	}



	public function index()

	{

		//如果通过认证跳转到首页

		redirect(__APP__);

	}



	// 用户登出

    public function logout()

    {

        if(isset($_SESSION[C('USER_AUTH_KEY')])) {

			unset($_SESSION[C('USER_AUTH_KEY')]);

			unset($_SESSION);

			session_destroy();

			if (isset($_SERVER['HTTP_COOKIE']))
			{
			    $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
			    foreach ($cookies as $cookie)
			    {
			        $parts = explode('=', $cookie);
			        $name = trim($parts[0]);
			        setcookie($name, '', time() - 1000);
			        setcookie($name, '', time() - 1000, '/');
			    }
			}

            //$this->assign("jumpUrl",__APP__.'/Index');
            $this->assign("jumpUrl",$_SERVER["HTTP_REFERER"]);

            $this->success('登出成功！');

        }else {

            $this->error('已经登出！');

        }

    }





public function sendCode() {
            $tel = $this->_param('tel');

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

            $this->ajaxReturn(array(
                'error'     => $error,
                'message'   =>$msg,
            ));
        }




	// 登录检测

	public function forgotCheck() {

		$email = $this->_param("email");
		if(empty($_POST['email'])) {
            $this->error('邮箱或电话不能为空！');
        }

        $where = '';
        $is_email = preg_match('/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{2,4}$/', $email);
        if($is_email){
            $where = " and a.email='".$email."'";
        }
        $is_tel = preg_match('/^[0-9]{11}$/', $email);
        if($is_tel){
            $where = " and b.tel='".$email."'";
        }

        $Model = new Model();
        $vo = $Model->query("select a.mid as mid,userid from ".C("DB_PREFIX")."member as a join  ".C("DB_PREFIX")."member_person as b on a.mid=b.mid where a.status=1 ".$where);
        if(!$vo || !$where){
			$this->error('帐号不存在或已禁用！');
		}
        $mid = $vo[0]['mid'];
        $userid = $vo[0]['userid'];

		import ( "@.ORG.Util.String" );
        $rand = String::randString(6,1);

		M("Member")->where("mid='".$mid."'")->save(array("pwd"=>md5($rand)));

		$title = C("SITENAME")."找回密码";
        $content = "您的用户名为：".$userid."\n 系统为您设置的新密码为：".$rand;

        if($is_email){
            $result = SendMail(C("cfg_smtp_host"),C("cfg_smtp_port"),C("cfg_smtp_username"),C("cfg_smtp_pwd"),C("cfg_smtp_formEmail"),'',$email,$title,$content);
            if($result){
                $this->success('新密码已发送你邮箱，请注意查收!',"/Member/");
            }else{
                $this->success('邮件发送失败，请联系管理员!');
            }
        }
        if($is_tel){
            $result = sms_sending($email,$content);
            //var_dump($result);exit;
            if($result){
                $this->success('新密码已发送你手机，请注意查收!',"/Member/");
            }else{
                $this->success('手机发送失败，请联系管理员!');
            }
        }

	}



	// 登录检测

	public function checkLogin() {


		if(empty($_POST['username'])) {

			$this->error('帐号不能为空！');

		}elseif (empty($_POST['password'])){

			$this->error('密码不能为空！');

		}

        /*
		 elseif (empty($_POST['verify'])){

		 	$this->error('验证码必须！');

		 }
         */

        //生成认证条件

        $map            =   array();

		// 支持使用绑定帐号登录

		$map['userid']	= array('eq',$_POST['username']);
        $map["status"]	=	array('eq',1);

        /*
		 if($_SESSION['verify'] != md5($_POST['verify'])) {

		 	$this->error('验证码错误！');
		 }
         */

		//import ( '@.ORG.Util.RBAC' );

        //$authInfo = RBAC::authenticate($map);

        //使用用户名、密码和状态的方式进行认证

        //if(false === $authInfo) {

            //$this->error('帐号不存在或已禁用！');

        //}else {

            $where1 = "(userid='".$_POST['username']."' or uname='".$_POST['username']."') and status=1";

			$Member	=	M('Member');

			$vo = $Member -> where($where1)->find();

			if(!$vo){

				$this->error('帐号不存在或已禁用！');

			}



            if($vo['pwd'] != md5($_POST['password'])) {

            	$this->error('密码错误！');

            }

            $_SESSION[C('USER_AUTH_KEY')]	=	$vo['mid'];
            //$_SESSION['email']	=	$authInfo['email'];
            $_SESSION["member"]	=	$vo;

			//$_SESSION['login_count']	=	$authInfo['login_count'];

            //if($vo['a_type']=='manage') {

            $_SESSION['administrator']		=	true;

            //}

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


			// 缓存访问权限
            //RBAC::saveAccessList();
			$this->success('登录成功！');

		//}

	}

    // 更换密码

    public function changePwd()

    {

		$this->checkUser();

        //对表单提交处理进行处理或者增加非表单数据

		if(md5($_POST['verify'])	!= $_SESSION['verify']) {

			$this->error('验证码错误！');

		}

		$map	=	array();

        $map['password']= pwdHash($_POST['oldpassword']);

        if(isset($_POST['account'])) {

            $map['account']	 =	 $_POST['account'];

        }elseif(isset($_SESSION[C('USER_AUTH_KEY')])) {

            $map['id']		=	$_SESSION[C('USER_AUTH_KEY')];

        }

        //检查用户

        $User    =   M("User");

        if(!$User->where($map)->field('id')->find()) {

            $this->error('旧密码不符或者用户名错误！');

        }else {

			$User->password	=	pwdHash($_POST['password']);

			$User->save();

			$this->success('密码修改成功！');

         }

    }

	public function profile() {

		$this->checkUser();

		$User	 =	 M("admin");

		$vo	=	$User->getById($_SESSION[C('USER_AUTH_KEY')]);

		$this->assign('vo',$vo);

		$this->display();

	}

	public function verify()

    {

		$type	 =	 isset($_GET['type'])?$_GET['type']:'gif';

        import("@.ORG.Util.Image");

        Image::buildImageVerify(4,1,$type);

    }

// 修改资料

	public function change() {

		$this->checkUser();

		$User	 =	 D("User");

		if(!$User->create()) {

			$this->error($User->getError());

		}

		$result	=	$User->save();

		if(false !== $result) {

			$this->success('资料修改成功！');

		}else{

			$this->error('资料修改失败!');

		}

	}


	public function htmlLogin() {
		if ($_SESSION [C ( 'USER_AUTH_KEY' )]){
			$tmp = 'document.write("<span style=\"width:40px;overflow:hidden;float:left;\"><a href=\"'.U('Main/index').'\" style=\"font-weight:bold;color:red;\">'.$_SESSION['member']['userid'].'</a></span> <span class=\"splite\" style=\"float:left;\">|</span> <span style=\"float:left;\"><a style=\"font-weight:bold;\" href=\"'.U('Public/logout').'\">退出</a></span>");';
		}else{
			$tmp =  'document.write("<a href=\"'.U('Index/index').'\">登陆</a> <span class=\"splite\">|</span> <a href=\"'.U('Public/reg').'\">注册</a>");';

		}
		echo $tmp;
		exit;
	}


	//评论
	public function feedback(){
		/*
		if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
			$arr = array("code"=>0,"msg"=>'请先登陆！');
			echo json_encode($arr);
			exit;
		}
		*/

		$aid = $this->_param("aid");
		$typeid = $this->_param("typeid");
		$msg = $this->_param("content");
		$mid = empty($_SESSION [C ( 'USER_AUTH_KEY' )])?0:$_SESSION [C ( 'USER_AUTH_KEY' )];

        $model = M ("Feedback" );
        $result = $model->add(array('mid'=>$mid,'typeid'=>-1,'aid'=>$aid,'dtime'=>time(),'typeid'=>$typeid,'msg'=>$msg,'ip'=>get_client_ip()));
        if($result){
			$arr = array("code"=>1,"msg"=>'评论成功，等待管理员审核！');
        }else{
			$arr = array("code"=>0,"msg"=>'评论失败！');
        }
		echo json_encode($arr);
		exit;

	}


	//产品兑换
	public function exchange(){
		if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
			$arr = array("code"=>0,"msg"=>'请先登陆！');
			echo json_encode($arr);
			exit;
		}

		$aid = $this->_param("id");
        $product = M("addon".$this->_param("channel"))->where("aid=".$aid)->find();
        $score = $product['score'];

        $Member = M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->field("scores")->find();
        $myScore = intval($Member['scores']);

        if($myScore < $score){
			$arr = array("code"=>-1,"msg"=>'您的积分不足，请充值！');
			echo json_encode($arr);
			exit;
        }

        //生成订单号
        $model = M ("Shops_orders" );
        $OrdersId = MakeOrders();
        $model->add(array('oid'=>$OrdersId,"pid"=>$aid, 'typeid'=>$this->_param("typeid"),'mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'score'=>$score,'stime'=>time(),'ip'=>get_client_ip()));

        //update user scores
        $Model = new Model();
        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores-".$score." where  mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]);

        $model = M ("Score_log" );
        $model->add(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'typeid'=>-1,'aid'=>$aid,'addtime'=>time(),'score'=>"-".$score,'summary'=>'兑换消耗积分'));

		$arr = array("code"=>1,"msg"=>'兑换成功，可登陆后台查看!');
		echo json_encode($arr);
		exit;

	}

	//产品兑换
	public function exchangeAll(){
		if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
			$arr = array("code"=>0,"msg"=>'请先登陆！');
			echo json_encode($arr);
			exit;
		}

        $Member = M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->field("scores")->find();
        $myScore = intval($Member['scores']);

        $scoreAll = $_REQUEST['scoreAll'];
        if($myScore < $scoreAll){
			$arr = array("code"=>-1,"msg"=>'您的积分不足，请充值！');
			echo json_encode($arr);
			exit;
        }

        $pp = explode(',',$this->_param("ids"));

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
            $model->add(array('oid'=>$OrdersId,"pid"=>$v[1], 'mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'score'=>$score,'cartcount'=>$num,'stime'=>time(),'ip'=>get_client_ip()));

            //update user scores
            $Model = new Model();
            $Model->execute("update ".C("DB_PREFIX")."member set scores=scores-".$score." where  mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]);

            $model = M ("Score_log" );
            $model->add(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'typeid'=>-1,'aid'=>$v[1],'addtime'=>time(),'score'=>"-".$score,'summary'=>'兑换消耗积分'));

            //delete
            M("Member_cart")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]." and id=".$v[0])->delete();
        }

		$arr = array("code"=>1,"msg"=>'兑换成功，可登陆后台查看!');
		echo json_encode($arr);
		exit;

	}




    //添加收藏
    public function collect(){
        if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
            $arr = array("code"=>0,"msg"=>'请先登陆！');
            echo json_encode($arr);
            exit;
        }

        $model = M ("Member_collect" );

        $aid = $this->_param("id");
        $Member = M("Member_collect")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]." and aid=".$aid)->field("id")->find();
        if ($Member){
            $model->where(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'aid'=>$aid))->delete();
            $arr = array("code"=>2,"msg"=>'取消收藏成功！');
            echo json_encode($arr);
            exit;
        }

        if(!empty($_REQUEST['isCollect'])){
            $arr = array("code"=>1,"msg"=>'');
            echo json_encode($arr);
            exit;
        }



        $model->add(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'aid'=>$aid,'addtime'=>time()));
        $arr = array("code"=>1,"msg"=>'收藏成功，可登陆后台查看!');
        echo json_encode($arr);
        exit;
    }




    //添加购物车
    public function cart(){
        if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
            $arr = array("code"=>0,"msg"=>'请先登陆！');
            echo json_encode($arr);
            exit;
        }

        $aid = $this->_param("id");
        /*
        $Member = M("Member_cart")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]." and aid=".$aid)->field("id")->find();
        if ($Member){
            $arr = array("code"=>0,"msg"=>'已经添加在您购物车中！');
            echo json_encode($arr);
            exit;
        }
        */

        $score = intval($_REQUEST['score']) * intval($_REQUEST['num']);
        $model = M ("Member_cart" );
        $model->add(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'aid'=>$aid,'num'=>$_REQUEST['num'],'score'=>$score,'addtime'=>time()));
        $arr = array("code"=>1,"msg"=>'加入购物车成功，可登陆后台查看!');
        echo json_encode($arr);
        exit;
    }



    //记录返回次数
    public function backCount(){
        if (!$_SESSION [C ( 'USER_AUTH_KEY' )]){
            $arr = array("num"=>0);
            echo json_encode($arr);
            exit;
        }

        $Member = M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->field("backCount")->find();
        M("Member")->where("mid=".$_SESSION [C ( 'USER_AUTH_KEY' )])->save(array("backCount"=>$Member['backCount']+1));
        $arr = array("num"=>$Member['backCount']+1);
        echo json_encode($arr);
        exit;
}







	//点击广告送积分
	public function adClick(){

		$id = $this->_param("id");
        $time = time();
        $ad = M("Myad")->where("id=".$id." and starttime <".$time." and endtime>".$time)->find();

		if ($_SESSION [C ( 'USER_AUTH_KEY' )]){
			if($ad){
				$limit_n = $ad["limit_n"];
				$score = intval($ad["score"]);

		        $log = M ("Score_log" );
		        $tmp = $log->where('typeid=5 and mid='.$_SESSION [C ( 'USER_AUTH_KEY' )].' and addtime>'.strtotime(date("Y-m-d")))->count();
	            if($tmp<$limit_n){
			        //update user scores
			        $Model = new Model();
			        $Model->execute("update ".C("DB_PREFIX")."member set scores=scores+".$score." where  mid=".$_SESSION [C ( 'USER_AUTH_KEY' )]);
			        //insert log
			        $log->add(array('mid'=>$_SESSION [C ( 'USER_AUTH_KEY' )],'typeid'=>5,'aid'=>$id,'addtime'=>$time,'score'=>$score,'summary'=>'点击广告获取积分'));
	            }

			}
		}

		header('Location:'.$ad['url']);
	}



	public function reg() {
			if ($_SESSION [C ( 'USER_AUTH_KEY' )]){
				header("Location: ".U("Main/index"));
                exit;
            }
          if(C("userClose") == 1){
                $this->error('系统关闭会员注册！');
            }

			if($_POST){

				$pro = I("post.pro");
				if(empty($pro)){
					$this->error('注册失败！协议未同意');
				}

                $userid = I("post.userid");
                $email = '';
                $tel = '';


                if(preg_match("/^13[0-9]{1}[0-9]{8}$|15[0189]{1}[0-9]{8}$|189[0-9]{8}$|186[0-9]{8}$/",$userid)){
                    $tel = I("post.userid");
                    $tmp = M("Member_person")->where("tel='".$tel."'")->field("mid")->find();
                    if($tmp){
                        $this->error('该电话已被注册，请重新注册！');
                    }
                }


               if(preg_match('/^[A-z0-9_\-]+[@][A-z0-9_\-]+([.][A-z0-9_\-]+)+[A-z]{2,4}$/',$userid)){
                    $email = I("post.userid");
                     $tmp = M("Member")->where("email='".$email."'")->field("userid")->find();
                    if($tmp){
                        $this->error('该Email已被注册，请重新注册！');
                    }
               }

            $re_userid = I("post.re_userid");
             if($re_userid){
                     $tmp = M("Member")->where("userid='".$re_userid."'")->field("mid")->find();
                    if(!$tmp){
                        $this->error('推荐人不存在，请重新注册！');
                    }
                    $re_mid = $tmp['mid'];
               }

                $userpwd = I("post.userpwd");
                $userpwd2 = I("post.userpwd2");
                if($userpwd != $userpwd2){
                    $this->error('两次输入密码不正确！');
                }

                //import('ORG.Util.String');
                //$code = String::randString(6, 1);
                //$userpwd = $code;

                $tmp = M("Member")->where("userid='".$userid."'")->field("userid")->find();
                if($tmp){
                    $this->error('该用户名已被注册，请重新注册！');
                }

                $tmp = M("Sms")->where("tel='".$userid."' and code='".$_POST['code']."' and status=0")->field("id")->find();
                if(!$tmp){
                    $this->error('手机验证码不正确，请重新注册！');
                }


                /*
                if(!empty($tel)){
                    $content = '用户名:'.$userid.',您的登陆密码为:'.$userpwd;
                    $result = sms_sending($tel,$content);
                    if($result != 1){
                        $this->error('手机验证码发送失败，请重新注册！');
                    }
                }
                */

                $mid = M("Member")->data(array('userid' => $userid,'pwd'=>md5($userpwd),'email'=>$email,'jointime'=>time(),'joinip'=>get_client_ip(),'areaID'=>$this->_param('areaID'),'cardID'=>$this->_param('cardID')))->add();
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
                    M("Sms")->where("tel='".$userid."' and code='".$_POST['code']."' and status=0")->save(array("status"=>1));


					$this->success('注册成功',U("Public/index"));
				}
		   }else{
	   			$this->display();
		   }

	}


public function msgJump(){
    $this->success($_GET['msg'],$_GET['jump']);
}



	//direct login
	public function directLogin(){
		$mid = $this->_param("mid");
		$pwd = $this->_param("pwd");
		$vo = M("Member")->where(array('mid'=>$mid,'pwd'=>$pwd))->find();
		if($vo){
            $_SESSION[C('USER_AUTH_KEY')]	=	$vo['mid'];
            $_SESSION['userid']		=	$vo['userid'];
            $_SESSION['logintime']		=	$vo['logintime'];
            $_SESSION['member']		=	$vo;
            $_SESSION['administrator']		=	true;
			$this->success('登录成功！',U("Main/index"));
		}else{
			$this->error('登录失败！');
		}
	}
}

?>
