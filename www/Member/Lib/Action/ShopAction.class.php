<?php
  class ShopAction extends CommonAction{

	function _filter(&$map){
	   $map['mid'] = array('eq',$_SESSION["member"]['mid']);
	}


// 框架首页
	public function index() {

				$map = $this->_search ();
				if (method_exists ( $this, '_filter' )) {
					$this->_filter ( $map );
				}

				if(!empty($_GET['q'])){
					 $map['oid'] = array('like',"%".$_GET['q']."%");
				}

                //读取数据库模块列表生成菜单项
				$model = M ("Shops_orders" );

				$_REQUEST ['_order'] = 'stime';

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


		public function delete() {
			$model = M ("Shops_orders");
			$id = $_REQUEST ["id"];
			$ids = explode ( ',', $id );
            if (isset ( $id )) {
                $condition = array ("oid" => array ('in', $ids ),"mid"=>array("eq",$_SESSION["member"]['mid']),"state"=>array("eq",0) );
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
					$this->success ('删除成功！' );
				} else {
					$this->error ('删除失败！');
				}
			}

		}



  }
?>
