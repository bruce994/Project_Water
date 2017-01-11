<?php

class SystemAction extends CommonAction {



	function _filter(&$map){



	}



	// 框架首页

	public function index() {

		Cookie::set ( '_currentUrl_', __SELF__ );

		$this->display ();



	}



public function updateScore(){
	    require dirname(__FILE__).'/../../../infoconfig.php';

		$infoconfig['cfg_recharge'] = $this->_param('cfg_recharge');
		$infoconfig['cfg_reg'] = $this->_param('cfg_reg');
		$infoconfig['cfg_registration_score'] = $this->_param('cfg_registration_score');
		$infoconfig['cfg_milliliter'] = $this->_param('cfg_milliliter');
		$infoconfig['cfg_member_info'] = $this->_param('cfg_member_info');

		$infoconfig['cfg_t_date'] = $this->_param('cfg_t_date');
		$infoconfig['cfg_t_score'] = $this->_param('cfg_t_score');

		$infoconfig['cfg_zj_date'] = $this->_param('cfg_zj_date');
		$infoconfig['cfg_zj_score'] = $this->_param('cfg_zj_score');

		$infoconfig['cfg_recommand_score'] = $this->_param('cfg_recommand_score');



		if (phpversion() > 5.0){

			file_put_contents(dirname(__FILE__).'/../../../infoconfig.php', ""."<?php\n \$infoconfig	= ".var_export($infoconfig,true).";\n?>");

		}



		//RUNTIME_FILE常量是入口文件中配置的runtimefile的路径及文件名；

		 if(file_exists(RUNTIME_FILE)){

			unlink(RUNTIME_FILE); //删除RUNTIME_FILE;

		 }

		$cachedir=RUNTIME_PATH."/Cache/";   //Cache文件的路径；

		 if ($dh = opendir($cachedir)) {     //打开Cache文件夹；

			while (($file = readdir($dh)) !== false) {    //遍历Cache目录，

					  unlink($cachedir.$file);                //删除遍历到的每一个文件；

			}

			closedir($dh);

		 }



		DeleteDir(RUNTIME_PATH);
		DeleteDir('../Home/'.RUNTIME_PATH);
		DeleteDir('../Member/'.RUNTIME_PATH);

		$this->success('修改成功！');

}


public function update(){
		$this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
	    require dirname(__FILE__).'/../../../infoconfig.php';
		$infoconfig['SITENAME'] = $this->_param('site_name');
		$infoconfig['site_url'] = $this->_param('site_url');
		$infoconfig['up_size'] = $this->_param('up_size');
		$infoconfig['up_exts'] = $this->_param('up_exts');
		$infoconfig['site_qq'] = $this->_param('site_qq');
		$infoconfig['site_tel'] = $this->_param('site_tel');
		$infoconfig['site_logo'] = $this->_param('site_logo');
		$infoconfig['EFFECTS'] = $this->_param('EFFECTS');
		$infoconfig['C_EFFECTS'] = $this->_param('C_EFFECTS');


		$infoconfig['userClose'] = $this->_param('userClose');
		$infoconfig['thumb'] = $this->_param('thumb');
		$infoconfig['thumb_width'] = $this->_param('thumb_width');
		$infoconfig['thumb_height'] = $this->_param('thumb_height');
		$infoconfig['m_web_auth'] = $this->_param('m_web_auth');


		$infoconfig['site_name'] = $this->_param('site_name');
		$infoconfig['site_title'] = $this->_param('site_title');
		$infoconfig['site_my'] = $this->_param('site_my');
		$infoconfig['server_topdomain'] = $this->_param('server_topdomain');
		$infoconfig['connectout'] = $this->_param('connectout');
		$infoconfig['site_mp'] = $this->_param('site_tel');
		$infoconfig['site_kfqq'] = $this->_param('site_qq');
		$infoconfig['site_email'] = $this->_param('site_email');
		$infoconfig['site_weibo'] = $this->_param('site_weibo');
		$infoconfig['site_beian'] = $this->_param('site_beian');
		$infoconfig['site_qr'] = $this->_param('site_qr');
		$infoconfig['site_protocol'] = $this->_param('site_protocol');
		$infoconfig['site_about'] = $this->_param('site_about');
		$infoconfig['keyword'] = $this->_param('keyword');
		$infoconfig['content'] = $this->_param('content');
		$infoconfig['copyright'] = $this->_param('copyright');
		$infoconfig['isConnent'] = $this->_param('isConnent');


		$infoconfig['cfg_smtp_host'] = $this->_param('cfg_smtp_host');
		$infoconfig['cfg_smtp_port'] = $this->_param('cfg_smtp_port');
		$infoconfig['cfg_smtp_formEmail'] = $this->_param('cfg_smtp_formEmail');
		$infoconfig['cfg_smtp_username'] = $this->_param('cfg_smtp_username');
		$infoconfig['cfg_smtp_pwd'] = $this->_param('cfg_smtp_pwd');

		$infoconfig['cfg_sms'] = $this->_param('cfg_sms');
		$infoconfig['cfg_isreview'] = $this->_param('cfg_isreview');
        $infoconfig['index_font'] = $this->_param('index_font');

        $infoconfig['app_ad'] = $this->_param('app_ad');
        $infoconfig['app_ad_url'] = $this->_param('app_ad_url');
        $infoconfig['isOpenScore'] = $this->_param('isOpenScore');


		if (phpversion() > 5.0){

			file_put_contents(dirname(__FILE__).'/../../../infoconfig.php', ""."<?php\n \$infoconfig	= ".var_export($infoconfig,true).";\n?>");

		}



		//RUNTIME_FILE常量是入口文件中配置的runtimefile的路径及文件名；

		 if(file_exists(RUNTIME_FILE)){

			unlink(RUNTIME_FILE); //删除RUNTIME_FILE;

		 }

		$cachedir=RUNTIME_PATH."/Cache/";   //Cache文件的路径；

		 if ($dh = opendir($cachedir)) {     //打开Cache文件夹；

			while (($file = readdir($dh)) !== false) {    //遍历Cache目录，

					  unlink($cachedir.$file);                //删除遍历到的每一个文件；

			}

			closedir($dh);

		 }




		DeleteDir(RUNTIME_PATH);
		DeleteDir('../Home/'.RUNTIME_PATH);
		DeleteDir('../Member/'.RUNTIME_PATH);
		DeleteDir('../andMember/'.RUNTIME_PATH);

		$this->success('修改成功！');

}





public function deleteCache(){
		DeleteDir(RUNTIME_PATH);
		DeleteDir('../Home/'.RUNTIME_PATH);
		DeleteDir('../Member/'.RUNTIME_PATH);
		$this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
		$this->success('删除成功！');
}





// 框架首页
	public function payment() {


				//读取数据库模块列表生成菜单项
				$model = M ("Payment" );


				$_REQUEST ['_order'] = 'rank';
				$_REQUEST ['_sort'] = 'asc';
				//排序字段 默认为主键名
				if (!empty ( $_REQUEST ['_order'] )) {
					$order = $_REQUEST ['_order'];
				} else {
					$order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
				}
				//排序方式默认按照倒序排列
				//接受 sost参数 0 表示倒序 非0都 表示正序
				if (isset ( $_REQUEST ['_sort'] )) {
		//			$sort = $_REQUEST ['_sort'] ? 'asc' : 'desc';
					$sort = $_REQUEST ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
				} else {
					$sort = $asc ? 'asc' : 'desc';
				}
				//取得满足条件的记录数
				$count = $model->where ( $map )->count ();
				if ($count > 0) {
					import ( "@.ORG.Util.Page" );
					//创建分页对象
					if (! empty ( $_REQUEST ['listRows'] )) {
						$listRows = $_REQUEST ['listRows'];
					} else {
						$listRows = '';
					}
					$p = new Page ( $count, $listRows );
					//分页查询数据
					$voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
					//echo $model->getlastsql();
					//分页跳转的时候保证查询条件
					foreach ( $map as $key => $val ) {
						if (! is_array ( $val )) {
							$p->parameter .= "$key=" . urlencode ( $val ) . "&";
						}
					}
					//分页显示
					$page = $p->show ();
					//列表排序显示
					$sortImg = $sort; //排序图标
					$sortAlt = $sort == 'desc' ? '升序排列' : '倒序排列'; //排序提示
					$sort = $sort == 'desc' ? 1 : 0; //排序方式

					//模板赋值显示
					$this->assign ( 'list', $voList );
					$this->assign ( 'sort', $sort );
					$this->assign ( 'order', $order );
					$this->assign ( 'sortImg', $sortImg );
					$this->assign ( 'sortType', $sortAlt );
					$this->assign ( "page", $page );
				}

				//zhanghuihua@msn.com
				$this->assign ( 't',  $this->_param('t') );
				$this->assign ( 'totalCount', $count );
				$this->assign ( 'numPerPage', $p->listRows );
$this->assign ( 'totalPages', $p->totalPages );
				$this->assign ( 'currentPage', !empty($_REQUEST[C('VAR_PAGE')])?$_REQUEST[C('VAR_PAGE')]:1);

				Cookie::set ( '_currentUrl_', __SELF__ );
				$this->display ();

	}





	public function deletePayment() {
		$model = M ("Payment");
		$id = $_REQUEST ["id"];
		if (isset ( $id )) {
			$condition = array ("id" => array ('in', explode ( ',', $id ) ) );
			$list=$model->where ( $condition )->delete();
			if ($list!==false) {
				$this->success ('删除成功！' );
			} else {
				$this->error ('删除失败！');
			}
		}
	}

	public function updatePayment(){
			$P = D("Payment");
		    if(!$P->create()) {
               $this->error($P->getError());
			}else{
				$cc = M("Payment")->where("id=".$this->_param("id"))->find();
				$config = AutoCharset(unserialize(utf82gb($cc['config'])));
				foreach ($config as $key => $v)
				{
				    $config[$key]['value'] = $this->_param($key);
				}

		        $config = AutoCharset($config,'utf-8','gb2312');
				$config = serialize($config);
				$config = gb2utf8($config);

			    $P->config = $config;
			    $this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
				// 写入帐号数据
				if($result	 =	 $P->save()) {
					$this->success('修改成功！');
				}else{
					$this->error('修改失败！');
				}
		    }

	}

	public function editPayment() {
		$model = M ( "Payment" );
		$id = $_REQUEST ["id"];
		$vo = $model->where("id = ".$id)->find();
		$config_row = AutoCharset(unserialize(utf82gb($vo['config'])));
		$config_row = (array)$config_row;
		$this->assign ( 'list', $config_row );
		$this->assign ( 'vo', $vo );
		$this->display ();
	}




// 框架首页
	public function link() {



				//读取数据库模块列表生成菜单项
				$model = M ("Flink" );

				$_REQUEST ['_order'] = 'sortrank';

				//排序字段 默认为主键名
				if (!empty ( $_REQUEST ['_order'] )) {
					$order = $_REQUEST ['_order'];
				} else {
					$order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();
				}
				//排序方式默认按照倒序排列
				//接受 sost参数 0 表示倒序 非0都 表示正序
				if (isset ( $_REQUEST ['_sort'] )) {
		//			$sort = $_REQUEST ['_sort'] ? 'asc' : 'desc';
					$sort = $_REQUEST ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com
				} else {
					$sort = $asc ? 'asc' : 'desc';
				}
				//取得满足条件的记录数
				$count = $model->where ( $map )->count ();
				if ($count > 0) {
					import ( "@.ORG.Util.Page" );
					//创建分页对象
					if (! empty ( $_REQUEST ['listRows'] )) {
						$listRows = $_REQUEST ['listRows'];
					} else {
						$listRows = '';
					}
					$p = new Page ( $count, $listRows );
					//分页查询数据
					$voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );
					//echo $model->getlastsql();
					//分页跳转的时候保证查询条件
					foreach ( $map as $key => $val ) {
						if (! is_array ( $val )) {
							$p->parameter .= "$key=" . urlencode ( $val ) . "&";
						}
					}
					//分页显示
					$page = $p->show ();
					//列表排序显示
					$sortImg = $sort; //排序图标
					$sortAlt = $sort == 'desc' ? '升序排列' : '倒序排列'; //排序提示
					$sort = $sort == 'desc' ? 1 : 0; //排序方式

					//模板赋值显示
					$this->assign ( 'list', $voList );
					$this->assign ( 'sort', $sort );
					$this->assign ( 'order', $order );
					$this->assign ( 'sortImg', $sortImg );
					$this->assign ( 'sortType', $sortAlt );
					$this->assign ( "page", $page );
				}


				//zhanghuihua@msn.com
				$this->assign ( 't',  $this->_param('t') );
				$this->assign ( 'totalCount', $count );
				$this->assign ( 'numPerPage', $p->listRows );
$this->assign ( 'totalPages', $p->totalPages );
				$this->assign ( 'currentPage', !empty($_REQUEST[C('VAR_PAGE')])?$_REQUEST[C('VAR_PAGE')]:1);

				Cookie::set ( '_currentUrl_', __SELF__ );
				$this->display ();

	}


	public function insertLink(){
			$model = M ("Flink");
			$vo = $model->where("webname='".$this->_param("webname")."'")->find();
			if($vo){
				$this->error('添加失败！已存在!');
				exit;
			}
		    $this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
			if(!$model->create()) {
				$this->error($model->getError());
			}else{
				$model->dtime = time();
				if($result	 =	 $model->add()) {
					$this->success('添加成功！');
				}else{
					$this->error('添加失败！');
				}
		    }
	}



	public function deleteLink() {
		$model = M ("Flink");
		$id = $_REQUEST ["id"];
		if (isset ( $id )) {
			$condition = array ("id" => array ('in', explode ( ',', $id ) ) );
			$list=$model->where ( $condition )->delete();
			if ($list!==false) {
				$this->success ('删除成功！' );
			} else {
				$this->error ('删除失败！');
			}
		}
	}

	public function updateLink(){
			$P = D("Flink");
		    if(!$P->create()) {
               $this->error($P->getError());
			}else{
			    $this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
				// 写入帐号数据
				if($result	 =	 $P->save()) {
					$this->success('修改成功！');
				}else{
					$this->error('修改失败！');
				}
		    }
	}


	public function editLink() {
		$model = M ( "Flink" );
		$id = $_REQUEST ["id"];
		$vo = $model->where("id = ".$id)->find();
		$this->assign ( 'vo', $vo );
		$this->display ();
	}







public function enum() {


                //列表过滤器，生成查询Map对象

                $map = $this->_search ();

                if (method_exists ( $this, '_filter' )) {

                    $this->_filter ( $map );

                }

                $map['reid'] = array("eq",intval($_GET['reid']));

                //读取数据库模块列表生成菜单项

                $model = M ("Sys_enum" );

                //排序字段 默认为主键名
                $_REQUEST ['_order'] = 'disorder';

                if (!empty ( $_REQUEST ['_order'] )) {

                    $order = $_REQUEST ['_order'];

                } else {

                    $order = ! empty ( $sortBy ) ? $sortBy : $model->getPk ();

                }

                //排序方式默认按照倒序排列

                //接受 sost参数 0 表示倒序 非0都 表示正序

                $_REQUEST ['_sort'] = 'asc';

                if (isset ( $_REQUEST ['_sort'] )) {

        //          $sort = $_REQUEST ['_sort'] ? 'asc' : 'desc';

                    $sort = $_REQUEST ['_sort'] == 'asc' ? 'asc' : 'desc'; //zhanghuihua@msn.com

                } else {

                    $sort = $asc ? 'asc' : 'desc';

                }

                //取得满足条件的记录数

                $count = $model->where ( $map )->count ();

                if ($count > 0) {

                    import ( "@.ORG.Util.Page" );

                    //创建分页对象

                    if (! empty ( $_REQUEST ['listRows'] )) {

                        $listRows = $_REQUEST ['listRows'];

                    } else {

                        $listRows = '';

                    }

                    $p = new Page ( $count, $listRows );

                    //分页查询数据

                    $voList = $model->where($map)->order( "`" . $order . "` " . $sort)->limit($p->firstRow . ',' . $p->listRows)->select ( );

                    //echo $model->getlastsql();

                    //分页跳转的时候保证查询条件

                    foreach ( $map as $key => $val ) {

                        if (! is_array ( $val )) {

                            $p->parameter .= "$key=" . urlencode ( $val ) . "&";

                        }

                    }

                    //分页显示

                    $page = $p->show ();

                    //列表排序显示

                    $sortImg = $sort; //排序图标

                    $sortAlt = $sort == 'desc' ? '升序排列' : '倒序排列'; //排序提示

                    $sort = $sort == 'desc' ? 1 : 0; //排序方式



                    //模板赋值显示

                    $this->assign ( 'list', $voList );

                    $this->assign ( 'sort', $sort );

                    $this->assign ( 'order', $order );

                    $this->assign ( 'sortImg', $sortImg );

                    $this->assign ( 'sortType', $sortAlt );

                    $this->assign ( "page", $page );

                }





                //zhanghuihua@msn.com

                $this->assign ( 'totalCount', $count );

                $this->assign ( 'numPerPage', $p->listRows );

                $this->assign ( 'currentPage', !empty($_REQUEST[C('VAR_PAGE')])?$_REQUEST[C('VAR_PAGE')]:1);



                Cookie::set ( '_currentUrl_', __SELF__ );

                $this->display ();



    }

    public function deleteEnum() {
        $model = M ("Sys_enum");
        $id = $_REQUEST ["id"];
        if (isset ( $id )) {
            deleteEN2($id);
            $this->success ('删除成功！' );
        }
    }


public function insertEnum(){
        $model = M ("Sys_enum");
        $this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
        if(!$model->create()) {
            $this->error($model->getError());
        }else{
            if($result   =   $model->add()) {
                $this->success('添加成功！');
            }else{
                $this->error('添加失败！');
            }
        }
}



public function editEnum() {
    $model = M ( "Sys_enum" );
    $id = $_REQUEST ["id"];
    $vo = $model->where("id = ".$id)->find();
    $this->assign ( 'vo', $vo );
    $this->display ();
}



public function updateEnum(){
        $this->assign ( 'jumpUrl', Cookie::get ( '_currentUrl_' ) );
        $addon = D("Sys_enum");
        if(!$addon->create()) {
            $this->error($addon->getError());
        }else{
            if($result   =   $addon->save()) {
                $this->success('更新成功！');
            }else{
                $this->error('更新失败！');
            }
        }
}






















}

?>
