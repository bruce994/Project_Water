angular.module('starter.controllers', [])



.controller('formCtrl', function($scope,$http,$state,$ionicPopup) {


    if(window.localStorage.getItem("member") != null) {
          member = JSON.parse(window.localStorage.getItem("member"));
          $state.go("tab.main",{ mid: member.mid });
          return;
    } 


    $scope.reset = function() {

        if($scope.username === undefined || $scope.password == ''){
            var alertPopup = $ionicPopup.alert({title: '登陆账号或密码不能为空'});
            return;
        }else{

            data = {
                'username' : $scope.username,
                'password' : $scope.password
            };
            $http.post('http://www.mw910.com/Member/index.php?m=App&a=checkLogin', data)
            .success(function(datas, status, headers, config)
            {
                data = datas[0];
                if(data.status == 0){
                    var alertPopup = $ionicPopup.alert({title: data.msg});
                }else{
                    //保存用户信息
                    $http.get('http://www.mw910.com/Member/index.php?m=App&a=member&mid='+data.mid)
                    .success(function(datas, status, headers, config)
                    {
                        window.localStorage.setItem("member",JSON.stringify(datas[0])); 
                    });
                    //END

                    $state.go("tab.main",{ mid: data.mid });
                }
            });
        }
    };
})


.controller('mainCtrl', function($scope,$http,$state,$stateParams,$ionicPopup) {
    mid = $stateParams.mid;

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=member&mid='+mid)
    .success(function(datas, status, headers, config)
    {
        $scope.member = datas[0];
        userid = $scope.member.userid;
        $scope.member.userid = userid.substr(0,3) + "****" + userid.substr(7,4);
        face = $scope.member.face;
        if(face == ''){
          $scope.member.face = "Public/images/face.png";
        }
    });


    $http.get('http://www.mw910.com/Member/index.php?m=App&a=registrationIs&mid='+mid)
    .success(function(datas, status, headers, config)
    {
        data = datas[0];
        if(data.status == 0){
            $scope.regText = data.msg;
            $scope.isActive = true;
        }
    });

   $scope.registration = function() {
          $http.get('http://www.mw910.com/Member/index.php?m=App&a=registration&mid='+mid)
          .success(function(datas, status, headers, config)
          {
              data = datas[0];
              if(data.status == 0){
                  var alertPopup = $ionicPopup.alert({title: data.msg});
              }else{
                  $scope.regText = data.msg;
                  $scope.isActive = true;
              }
          });

      };

})



.controller('memberAndLogCtrl', function($scope,$http,$state,$stateParams,$ionicModal,$compile) {
    mid = $stateParams.mid;
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=member&mid='+mid)
    .success(function(datas, status, headers, config)
    {
        $scope.member = datas[0];
    }); 


    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=notice')
    .success(function(datas, status, headers, config)
    {
      $scope.contents = datas;
    }); 



    $scope.openModelTemplate = function(_templateName,_id){

    $scope.modal_id = _id;

    if($scope.modal){
    $scope.closeModal();
    }
    var templateName = _templateName;
    $ionicModal.fromTemplateUrl(templateName + ".html",{
    scope : $scope,
    animation : "slide-in-up"
    }).then(function(modal){
    $scope.modal = modal;
    $scope.openModal();
    });
    };
    $scope.openModal = function(){
    $scope.modal.show();
    };
    $scope.closeModal = function(){
    $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
    $scope.modal.remove();
    });


    $scope.logout = function() {
        window.localStorage.removeItem("member");
        $state.go("tab.login");
    };



})







.controller('memberLogCtrl', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter) {

    $scope.startDate = new Date();
    $scope.endDate = new Date();


    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 



    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=log&MID='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{

               if(angular.equals(datas[0], {})){
                  var alertPopup = $ionicPopup.alert({title: '没有数据'});
                  $scope.moredata=true;
                  return;
               }

               $scope.list = datas;              
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  


      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];




    $scope.search = function() {
        $scope.list=[];
        page = 1;
        startDate = $("#startDate").val();
        endDate = $("#endDate").val();
        url = '&startDate='+startDate+'&endDate='+endDate;

        $scope.loadMoreData();
        page++;

    };


    $scope.loadMoreData();  //开始就加载


})







.controller('waterLife', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter) {

    $scope.startDate = new Date();
    $scope.endDate = new Date();


    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    //获取广告
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=Ad')
    .success(function(datas, status, headers, config)
    {
       $scope.Ad = datas;
    }); 

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=waterLife')
    .success(function(datas, status, headers, config)
    {
       $scope.waterLife = datas;
    }); 

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=scoreShop')
    .success(function(datas, status, headers, config)
    {
       $scope.scoreShop = datas;
    }); 

})






.controller('waterLifeDetail', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup) {

    $scope.startDate = new Date();
    $scope.endDate = new Date();


    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 

    id = $stateParams.id;
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=article&id='+id)
    .success(function(datas, status, headers, config)
    {
       $scope.vo = datas[0];
       $scope.type = datas[1];


        $http.get('http://www.mw910.com/Member/index.php?m=App&a=collect&isCollect=1&mid='+member['mid']+'&id='+id)
        .success(function(datas1, status, headers, config)
        {
            if(datas1.code == 1){
                $scope.regText = "已收藏";
            }
            if(datas1.code == 0){
                $scope.regText = "收藏";
            }            
        }); 

    }); 


    $scope.exchange=function(id,channel,typeid)
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=exchange&mid='+member['mid']+'&id='+id+"&channel="+channel+"&typeid="+typeid)
        .success(function(datas, status, headers, config)
        {
            var alertPopup = $ionicPopup.alert({title: datas.msg});
            return;  
        });  
    };

    $scope.cart=function(id,score,num)
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=cart&mid='+member['mid']+'&id='+id+"&score="+score+"&num="+num)
        .success(function(datas, status, headers, config)
        {
            var alertPopup = $ionicPopup.alert({title: datas.msg});
            return;  
        });  
    };


    $scope.regText = "收藏";
    $scope.collect=function(id)
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=collect&mid='+member['mid']+'&id='+id)
        .success(function(datas, status, headers, config)
        {
            if(datas.code == 1){
                $scope.regText = "已收藏";
            }
            if(datas.code == 2){
                $scope.regText = "收藏";
            }            
            var alertPopup = $ionicPopup.alert({title: datas.msg});
            return;  
        });  
    };

    //vo = $scope.vo;
    //console.log($scope.vo);
    //$scope.collect(vo['id']);

})






.controller('memberOrder', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    $scope.startDate = new Date();
    $scope.endDate = new Date();


    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=memberOrder&mid='+member['mid'])
    .success(function(datas, status, headers, config)
    {
       $scope.list = datas;
    }); 

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=memberOrderMisc&mid='+member['mid'])
    .success(function(datas, status, headers, config)
    {
       $scope.misc = datas;
    }); 

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=memberOrderNew')
    .success(function(datas, status, headers, config)
    {
       $scope.news = datas;
    }); 
      

     // An alert dialog
     $scope.showCode = function(oid) {
       C = $scope.C;
       if(C['app_ad'] !='' && C['app_ad_url'] !=''){
          tmp = '<p><a href="'+C['app_ad_url']+'" target="_blank"><img src="'+C['app_ad']+'" style="width:90%;height:auto;"></a></p>';
       }
       var alertPopup = $ionicPopup.alert({
         title: '取水二维码',
         template: '<img src="'+C['site_url']+'/misc/phpqrcode/index.php?url='+C['site_url']+'/Member/index.php/Public/qrcodeWater/oid/'+oid+'.html" style="width:90%;height:auto;">'+tmp
       });
       alertPopup.then(function(res) {
         
       });
     };


     // An alert dialog
     $scope.orderDelete = function(oid,index) {
       var confirmPopup = $ionicPopup.confirm({
         title: '是否确定删除',
         template: '确定删除订单吗?',
         buttons:[{text:'取消',type: 'button-default'},{text:'确定',type: 'button-positive',onTap: function(e) {return 1;}}]
       });
       confirmPopup.then(function(res) {
         if(res) {
               $http.get('http://www.mw910.com/Member/index.php?m=App&a=orderDelete&mid='+member['mid']+'&id='+oid)
              .success(function(datas, status, headers, config)
              {
                 if(datas.code == 0){
                      var alertPopup = $ionicPopup.alert({title: '删除成功'});
                     $scope.list.splice(index, 1);
                 }else{
                      var alertPopup = $ionicPopup.alert({title: '删除失败'});
                 }
              }); 
         } 
       });
     };


})








.controller('memberOrderAll', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    typeid = $stateParams.typeid;
    state = $stateParams.state;
    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {

        if(state != "all") url += '&state='+state;
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=memberOrderAll&typeid='+typeid+'&mid='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{
               if(angular.equals(datas[0], {})){
                  var alertPopup = $ionicPopup.alert({title: '没有数据'});
                  $scope.moredata=true;
                  return;
               }
               $scope.list = datas;      
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  


      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];




    $scope.search = function() {
        $scope.list=[];
        page = 1;
        q = $("#q").val();
        url = '&q='+q;
        $scope.loadMoreData();
        page++;
    };


     // An alert dialog
     $scope.showCode = function(oid) {
       C = $scope.C;
       if(C['app_ad'] !='' && C['app_ad_url'] !=''){
          tmp = '<p><a href="'+C['app_ad_url']+'" target="_blank"><img src="'+C['app_ad']+'" style="width:90%;height:auto;"></a></p>';
       }
       var alertPopup = $ionicPopup.alert({
         title: '取水二维码',
         template: '<img src="'+C['site_url']+'/misc/phpqrcode/index.php?url='+C['site_url']+'/Member/index.php/Public/qrcodeWater/oid/'+oid+'.html" style="width:90%;height:auto;">'+tmp
       });
       alertPopup.then(function(res) {
         
       });
     };





     // An alert dialog
     $scope.orderDelete = function(oid,index) {
       var confirmPopup = $ionicPopup.confirm({
         title: '是否确定删除',
         template: '确定删除订单吗?',
         buttons:[{text:'取消',type: 'button-default'},{text:'确定',type: 'button-positive',onTap: function(e) {return 1;}}]
       });
       confirmPopup.then(function(res) {
         if(res) {
               $http.get('http://www.mw910.com/Member/index.php?m=App&a=orderDelete&mid='+member['mid']+'&id='+oid)
              .success(function(datas, status, headers, config)
              {
                 if(datas.code == 0){
                      var alertPopup = $ionicPopup.alert({title: '删除成功'});
                     $scope.list.splice(index, 1);
                 }else{
                      var alertPopup = $ionicPopup.alert({title: '删除失败'});
                 }
              }); 
         } 
       });
     };

})




.controller('memberCart', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 

   //$state.go($state.current, $stateParams, {reload: true, inherit: false});

    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    });

    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=shopCart&mid='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{
               $scope.list = datas;      
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  

      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];

     // An alert dialog
     $scope.delete = function(id,index) {
       var confirmPopup = $ionicPopup.confirm({
         title: '是否确定删除',
         buttons:[{text:'取消',type: 'button-default'},{text:'确定',type: 'button-positive',onTap: function(e) {return 1;}}]
       });
       confirmPopup.then(function(res) {
         if(res) {
               $http.get('http://www.mw910.com/Member/index.php?m=App&a=cartDelete&mid='+member['mid']+'&id='+id)
              .success(function(datas, status, headers, config)
              {
                 if(datas.code == 0){
                      var alertPopup = $ionicPopup.alert({title: '删除成功'});
                     $scope.list.splice(index, 1);
                 }else{
                      var alertPopup = $ionicPopup.alert({title: '删除失败'});
                 }
              }); 
         } 
       });
     };








    $scope.exchange = function() {
        if(ids != ''){
            ids = ids.substring(0, ids.length - 1); 
        }else{
           var alertPopup = $ionicPopup.alert({title: '还未选择,不能结算'});
          return;
        }
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=exchangeAll&mid='+member['mid']+'&ids='+ids+'&scoreAll='+$scope.total)
        .success(function(datas, status, headers, config)
        {
            var alertPopup = $ionicPopup.alert({title: datas.msg});
        }); 
    };





    $scope.total =0;
    ids = "";
    $scope.selected = [];
    var updateSelected = function(action, id) {
      if (action === 'add' && $scope.selected.indexOf(id) === -1) {
         $scope.selected.push(id);
      }
      if (action === 'remove' && $scope.selected.indexOf(id) !== -1) {
         $scope.selected.splice($scope.selected.indexOf(id), 1);
      }

        //更新价格
        var tmp = 0;
        ids = '';
        for ( var j = 0; j < $scope.list.length; j++) {
          var entity = $scope.list[j];
          for ( var i = 0; i < $scope.selected.length; i++) {
            var id = $scope.selected[i];
            if(entity.id == id){
              tmp += parseInt(entity.score);
              ids += id + ',';
            }
          }
      }
      $scope.total = tmp;
    };



    $scope.updateSelection = function($event, id) {
      var checkbox = $event.target;
      var action = (checkbox.checked ? 'add' : 'remove');
      updateSelected(action, id);
    };

    $scope.isSelected = function(id) {
     return $scope.selected.indexOf(id) >= 0;
    };


    $scope.selectAll = function($event) {
      var checkbox = $event.target;
      var action = (checkbox.checked ? 'add' : 'remove');
      for ( var i = 0; i < $scope.list.length; i++) {
        var entity = $scope.list[i];
        updateSelected(action, entity.id);
      }
    };

    $scope.isSelectedAll = function() {
      return $scope.selected.length === $scope.list.length;
    };



})







.controller('memberCollect', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 

   //$state.go($state.current, $stateParams, {reload: true, inherit: false});

    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    });

    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=memberCollect&mid='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{
               if(angular.equals(datas[0], {})){
                  var alertPopup = $ionicPopup.alert({title: '没有数据'});
                  $scope.moredata=true;
                  return;
               }
               $scope.list = datas;      
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  

      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];



     // An alert dialog
     $scope.delete = function(id,index) {
       var confirmPopup = $ionicPopup.confirm({
         title: '是否确定删除',
         buttons:[{text:'取消',type: 'button-default'},{text:'确定',type: 'button-positive',onTap: function(e) {return 1;}}]
       });
       confirmPopup.then(function(res) {
         if(res) {
               $http.get('http://www.mw910.com/Member/index.php?m=App&a=collectDelete&mid='+member['mid']+'&id='+id)
              .success(function(datas, status, headers, config)
              {
                 if(datas.code == 0){
                      var alertPopup = $ionicPopup.alert({title: '删除成功'});
                     $scope.list.splice(index, 1);
                 }else{
                      var alertPopup = $ionicPopup.alert({title: '删除失败'});
                 }
              }); 
         } 
       });
     };
})





.controller('memberFeedBack', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {

        $http.get('http://www.mw910.com/Member/index.php?m=App&a=feedBack&mid='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{
               if(angular.equals(datas[0], {})){
                  var alertPopup = $ionicPopup.alert({title: '没有数据'});
                  $scope.moredata=true;
                  return;
               }
               $scope.list = datas;      
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  


      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];




    $scope.search = function() {
        $scope.list=[];
        page = 1;
        q = $("#q").val();
        url = '&q='+q;
        $scope.loadMoreData();
        page++;
    };

     // An alert dialog
     $scope.orderDelete = function(id,index) {
       var confirmPopup = $ionicPopup.confirm({
         title: '是否确定删除',
         template: '确定删除订单吗?',
         buttons:[{text:'取消',type: 'button-default'},{text:'确定',type: 'button-positive',onTap: function(e) {return 1;}}]
       });
       confirmPopup.then(function(res) {
         if(res) {
               $http.get('http://www.mw910.com/Member/index.php?m=App&a=feedbackDelete&mid='+member['mid']+'&id='+id)
              .success(function(datas, status, headers, config)
              {
                 if(datas.code == 0){
                      var alertPopup = $ionicPopup.alert({title: '删除成功'});
                     $scope.list.splice(index, 1);
                 }else{
                      var alertPopup = $ionicPopup.alert({title: '删除失败'});
                 }
              }); 
         } 
       });
     };

})






.controller('member', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 

    $scope.logout = function() {
        window.localStorage.removeItem("member");
        $state.go("tab.login");
    };


    $http.get('http://www.mw910.com/Member/index.php?m=App&a=shopUserInfo&mid='+member['mid'])
    .success(function(datas, status, headers, config)
    {
       $scope.list = datas;
    });


     // An alert dialog
     $scope.about = function() {
        var alertPopup = $ionicPopup.alert({title: '关于',template:$scope.C.site_about});
     };


})


.controller('memberEdit', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    $scope.submit = function() {
        var inputs, index,inputData = '';
        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            inputData = inputData + '"'+inputs[index].name + '":"' +inputs[index].value + '",';
        }

        if(inputData){
          inputData = "{"+inputData.slice(0,-1)+"}";
          inputData = JSON.parse(inputData);
        }

        $http.post('http://www.mw910.com/Member/index.php?m=App&a=memberUpdate', inputData)
        .success(function(datas, status, headers, config)
        {
            if(datas.code == 1){
              var alertPopup = $ionicPopup.alert({title: datas.message});
            }
            else if(datas.code == 0){
              var alertPopup = $ionicPopup.alert({title: '修改成功，请重新登陆'});
              window.localStorage.removeItem("member");
              $state.go("tab.login");
            }
        });

    }; 



})




.controller('memberPwd', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    $scope.submit = function() {

        var inputs, index,inputData = '';
        inputs = document.getElementsByTagName('input');
        for (index = 0; index < inputs.length; ++index) {
            inputData = inputData + '"'+inputs[index].name + '":"' +inputs[index].value + '",';
        }

        if(inputData){
          inputData = "{"+inputData.slice(0,-1)+"}";
          inputData = JSON.parse(inputData);
        }

        $http.post('http://www.mw910.com/Member/index.php?m=App&a=memberPwd', inputData)
        .success(function(datas, status, headers, config)
        {
            if(datas.code == 1){
              var alertPopup = $ionicPopup.alert({title: datas.message});
            }
            else if(datas.code == 0){
              var alertPopup = $ionicPopup.alert({title: '修改成功，请重新登陆'});
              window.localStorage.removeItem("member");
              $state.go("tab.login");
            }
        });

    }; 



})



.controller('reg', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup,$timeout) {

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    $scope.getcode = function() {
            data = {
                'tel' : $scope.userid,
            };
            $http.post('http://www.mw910.com/Member/index.php?m=App&a=sendcode', data)
            .success(function(datas, status, headers, config)
            {
                  var alertPopup = $ionicPopup.alert({title: datas.message});
            });
    };


    $scope.submit = function() {
            data = {
                'userid' : $scope.userid,
                'code' : $scope.code,
                'userpwd' : $scope.userpwd,
                'userpwd' : $scope.userpwd,
                'userpwd2' : $scope.userpwd2,
                're_userid' : $scope.re_userid,
                'pro' : $scope.pro
            };
            $http.post('http://www.mw910.com/Member/index.php?m=App&a=reg', data)
            .success(function(datas, status, headers, config)
            {
                if(datas.code === "0"){
                    var alertPopup = $ionicPopup.alert({title: '注册成功，请重新登陆'});
                    $state.go("tab.login");
                }else{
                    var alertPopup = $ionicPopup.alert({title: datas.message});
                }
            });
    };


    $scope.openModelTemplate = function(_templateName){


    if($scope.modal){
      $scope.closeModal();
    }
    var templateName = _templateName;
    $ionicModal.fromTemplateUrl(templateName + ".html",{
    scope : $scope,
    animation : "slide-in-up"
    }).then(function(modal){
    $scope.modal = modal;
    $scope.openModal();
    });
    };
    $scope.openModal = function(){
    $scope.modal.show();
    };
    $scope.closeModal = function(){
    $scope.modal.hide();
    };
    $scope.$on('$destroy', function() {
    $scope.modal.remove();
    });

})


.controller('waterRing', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    //获取广告
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=Ad')
    .success(function(datas, status, headers, config)
    {
       $scope.Ad = datas;
    }); 

    typeid = $stateParams.typeid;
    page = 1;
    url = '';
    $scope.moredata = false;
    $scope.loadMoreData=function()
    {
        if(typeid != "all") url += '&typeid='+typeid;
        $http.get('http://www.mw910.com/Member/index.php?m=App&a=waterRing&MID='+member['mid']+'&pageNum='+page+url)
        .success(function(datas, status, headers, config)
        {
             if($scope.list.length > 0 && datas.length > 0){
                tmp1 = $scope.list; 
                tmp  = "["+ JSON.stringify(tmp1).substr(1).slice(0,-1) + "," + JSON.stringify(datas).substr(1).slice(0,-1) + "]";
                $scope.list = JSON.parse(tmp);
                //console.log(tmp);
                console.log($scope.list.length);
             }else{

               if(angular.equals(datas[0], {})){
                  var alertPopup = $ionicPopup.alert({title: '没有数据'});
                  $scope.moredata=true;
                  return;
               }

               $scope.list = datas;              
             }
            page++;
            if(datas.length < 10)
            {
                $scope.moredata=true;
            }
        });  


      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.list=[];

    $scope.search = function() {
        $scope.list=[];
        page = 1;
        url = '&keyword=' + $scope.keyword;
        $scope.loadMoreData();
        page++;

    };
  

})




.controller('waterRingDetail', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 


    id = $stateParams.id;
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=article&id='+id)
    .success(function(datas, status, headers, config)
    {
       $scope.vo = datas[0];
       $scope.type = datas[1];
    }); 
  

})




.controller('scoreShopList', function($scope,$http,$state,$stateParams,$ionicModal,$compile,$filter,$ionicPopup) {

    if(window.localStorage.getItem("member") == null) {
          $state.go("tab.login");
          return;
    } 
    member = JSON.parse(window.localStorage.getItem("member"));
    $scope.member = member;

    //获取配置信息
    $http.get('http://www.mw910.com/Member/index.php?m=App&a=systemInfo&type=CC')
    .success(function(datas, status, headers, config)
    {
       $scope.C = datas[0];
    }); 

  
    typeid = $stateParams.typeid;

    $scope.typeid = typeid;

    $http.get('http://www.mw910.com/Member/index.php?m=App&a=typeAll&typeid=193&type=getType&mid='+member['mid'])
    .success(function(datas, status, headers, config)
    {
       $scope.list = datas;
    }); 


    $http.get('http://www.mw910.com/Member/index.php?m=App&a=typeAll&typeid='+typeid+'&type=getTypeDetail&limit=9&mid='+member['mid'])
    .success(function(datas, status, headers, config)
    {
       $scope.list2 = datas;
    }); 


})























